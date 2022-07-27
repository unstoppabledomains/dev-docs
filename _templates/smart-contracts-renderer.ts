const Ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const MarkdownInclude = require('markdown-include');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

(async () => {
  try {
    const cnsNetworkConfig = JSON.parse((await readFile(path.join(process.cwd(), 'node_modules', 'dot-crypto/src/network-config/network-config.json'))).toString());
    const unsNetworkConfig = JSON.parse((await readFile(path.join(process.cwd(), 'node_modules', 'uns/uns-config.json'))).toString());

    type NamingServiceName = 'cns' | 'uns';

    const NamingService = process.argv[2].toLowerCase() as NamingServiceName;

    const ContractsConfig = getContractsConfigForNamingService(NamingService);

    const TemplatesDir = path.join('.templates');

    const ContractsDir = path.join(TemplatesDir, 'contracts', NamingService);

    const MarkdownFile = path.join(
      TemplatesDir,
      'markdown',
      NamingService + '-smart-contracts-markdown.json'
    );

    const TemplateToRender = path.join(
      TemplatesDir,
      NamingService + '-smart-contracts-template.md'
    );

    const FileToRender = path.join(
      'domain-registry-essentials',
      NamingService + '-smart-contracts.md'
    );

    const CotractTableTemplate = fs.readFileSync(
      path.join(TemplatesDir, 'contracts', 'contract-table-template.ejs'),
      'utf-8'
    );

    enum NetworkIds {
      Mainnet = 1,
      Ropsten = 3,
      Rinkeby = 4,
      Goerli = 5,
      Kovan = 42,
      PolygonMainnet = 137,
      PolygonTestnet = 80001
    }

    const Networks: Record<number, string> = {
      [NetworkIds.Mainnet]: 'Mainnet',
      [NetworkIds.Ropsten]: 'Ropsten',
      [NetworkIds.Rinkeby]: 'Rinkeby',
      [NetworkIds.Goerli]: 'Goerli',
      [NetworkIds.Kovan]: 'Kovan',
      [NetworkIds.PolygonMainnet]: 'Polygon mainnet',
      [NetworkIds.PolygonTestnet]: 'Polygon testnet (Mumbai)'
    };

    const BlockchainExplorerURLs: Record<number, string> = {
      [NetworkIds.Mainnet]: 'https://etherscan.io',
      [NetworkIds.Ropsten]: 'https://ropsten.etherscan.io',
      [NetworkIds.Rinkeby]: 'https://rinkeby.etherscan.io',
      [NetworkIds.Goerli]: 'https://goerli.etherscan.io',
      [NetworkIds.Kovan]: 'https://kovan.etherscan.io',
      [NetworkIds.PolygonMainnet]: 'https://polygonscan.com',
      [NetworkIds.PolygonTestnet]: 'https://mumbai.polygonscan.com'
    };

    type Row = {
      network: string;
      blockchainExplorerURL: string;
      address: string;
      legacyAddresses: string[];
    };

    void renderContractAddresses();

    async function renderContractAddresses() {
      console.log('Creating contract templates for [' + NamingService + ']');
      console.log('Rendering [' + FileToRender + ']');
      console.log('From template [' + TemplateToRender + ']');

      let filesToInclude: string[] = [TemplateToRender];

      for (let contract of getContracts()) {
        await generateContractTables(contract, filesToInclude);
      }
      await compileContractTables(filesToInclude);
      console.log('Done');
    }

    function getContractsConfigForNamingService(namingService: NamingServiceName) {
      switch (namingService) {
        case 'cns':
          return cnsNetworkConfig.networks;
        case 'uns':
          return unsNetworkConfig.networks;
      }
    }

    function getContracts(): Set<string> {
      let contractSet = new Set<string>();
      Object.keys(ContractsConfig).forEach((id) => {
        const networkContracts =
          ContractsConfig[id as keyof typeof ContractsConfig].contracts;
        Object.keys(networkContracts).forEach((contract) =>
          contractSet.add(contract)
        );
      });
      return contractSet;
    }

    async function generateContractTables(
      contractName: string,
      filesToInclude: string[]
    ) {
      let rows: Array<Row> = [];
      let contractHasLegacyAddresses: boolean = false;

      for (const id of Object.keys(ContractsConfig)) {
        const networkContracts =
          ContractsConfig[id as keyof typeof ContractsConfig].contracts;
        let contract =
          networkContracts[contractName as keyof typeof networkContracts];
        if (!contract || !Networks[Number(id)]) {
          continue;
        }
        let legacyAddresses = contract.legacyAddresses;
        contractHasLegacyAddresses =
          contractHasLegacyAddresses || legacyAddresses.length > 0;

        rows.push({
          network: Networks[Number(id)],
          blockchainExplorerURL: BlockchainExplorerURLs[Number(id)],
          address: contract.address,
          legacyAddresses: contract.legacyAddresses
        });
      }
      let contractTable = Ejs.render(CotractTableTemplate, {
        rows,
        hasLegacyAddresses: contractHasLegacyAddresses
      }).replace(/(^[ \t]*\n)/gm, ''); // remove new lines to render .md table properly

      await saveContractTable(contractName, contractTable, filesToInclude);
    }

    async function saveContractTable(
      contractName: string,
      contractTable: string,
      filesToInclude: string[]
    ) {
      let filename = path.join(ContractsDir, contractName + '.md');
      await writeFile(filename, contractTable, { encoding: 'utf-8' });
      filesToInclude.unshift(filename);
      console.log('Contract table saved: ' + filename);
    }

    async function compileContractTables(files: string[]) {
      await saveMarkdown(files);
      await MarkdownInclude.compileFiles(MarkdownFile);
    }

    async function saveMarkdown(files: string[]) {
      let markdown = {
        build: FileToRender,
        files: files
      };
      await writeFile(MarkdownFile, JSON.stringify(markdown, null, 4), {
        encoding: 'utf-8'
      });
      console.log('Markdown file saved: ' + MarkdownFile);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

