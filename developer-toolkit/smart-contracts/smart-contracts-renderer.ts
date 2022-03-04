import Path from 'path';
import Fs from 'fs';
import Ejs from 'ejs';
import MarkdownInclude from 'markdown-include';
import CnsNetworkConfigJson from 'dot-crypto/src/network-config/network-config.json';
import UnsNetworkConfigJson from 'uns/uns-config.json';

type NamingServiceName = "cns" | "uns";
const NamingService = process.argv[2].toLowerCase() as NamingServiceName;
const ContractsConfig = getContractsConfigForNamingService(NamingService);

const TemplatesDir = Path.join('templates');
const ContractsDir = Path.join(TemplatesDir, 'contracts', NamingService);
const MarkdownFile = Path.join(TemplatesDir, 'markdown', NamingService + '-smart-contracts-markdown.json');
const TemplateToRender = Path.join(TemplatesDir, NamingService + '-smart-contracts-template.md');
const FileToRender = Path.join('src', 'domain-registry-essentials', NamingService + '-smart-contracts.md');
const CotractTableTemplate = Fs.readFileSync(Path.join(TemplatesDir, 'contracts', 'contract-table-template.ejs'), 'utf-8');
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
    [NetworkIds.PolygonTestnet]: 'Polygon testnet (Mumbai)',
};

const BlockchainExplorerURLs: Record<number, string> = {
    [NetworkIds.Mainnet]: 'https://etherscan.io',
    [NetworkIds.Ropsten]: 'https://ropsten.etherscan.io',
    [NetworkIds.Rinkeby]: 'https://rinkeby.etherscan.io',
    [NetworkIds.Goerli]: 'https://goerli.etherscan.io',
    [NetworkIds.Kovan]: 'https://kovan.etherscan.io',
    [NetworkIds.PolygonMainnet]: 'https://polygonscan.com',
    [NetworkIds.PolygonTestnet]: 'https://mumbai.polygonscan.com',
}

type Row = {
    network: string,
    blockchainExplorerURL: string,
    address: string,
    legacyAddresses: string[],
}

void renderContractAddresses();

async function renderContractAddresses() {
    console.log('Creating contract templates for [' + NamingService + ']')
    console.log('Rendering [' + FileToRender + ']');
    console.log('From template [' + TemplateToRender + ']');

    let filesToInclude: string[] = [TemplateToRender];

    for (let contract of getContracts()) {
        generateContractTables(contract, filesToInclude);
    }
    await compileContractTables(filesToInclude);
    console.log('Done');
}

function getContractsConfigForNamingService(namingService: NamingServiceName) {
    switch (namingService) {
        case "cns":
            return CnsNetworkConfigJson.networks;
        case "uns":
            return UnsNetworkConfigJson.networks;
    }
}

function getContracts(): Set<string> {
    let contractSet = new Set<string>();
    Object.keys(ContractsConfig).forEach(id => {
        const networkContracts = ContractsConfig[id as keyof typeof ContractsConfig].contracts;
        Object.keys(networkContracts).forEach(contract => contractSet.add(contract));
    });
    return contractSet;
}

function generateContractTables(contractName: string, filesToInclude: string[]) {
    let rows: Array<Row> = [];
    let contractHasLegacyAddresses: boolean = false;

    for (const id of Object.keys(ContractsConfig)) {
        const networkContracts = ContractsConfig[id as keyof typeof ContractsConfig].contracts;
        let contract = networkContracts[contractName as keyof typeof networkContracts];
        if (!contract || !Networks[Number(id)]) {
            continue;
        }
        let legacyAddresses = contract.legacyAddresses;
        contractHasLegacyAddresses = contractHasLegacyAddresses || legacyAddresses.length > 0;

        rows.push({
            network: Networks[Number(id)],
            blockchainExplorerURL: BlockchainExplorerURLs[Number(id)],
            address: contract.address,
            legacyAddresses: contract.legacyAddresses,
        });
    }
    let contractTable = Ejs
        .render(CotractTableTemplate, { rows, hasLegacyAddresses: contractHasLegacyAddresses })
        .replace(/(^[ \t]*\n)/gm, ''); // remove new lines to render .md table properly

    saveContractTable(contractName, contractTable, filesToInclude);
}

function saveContractTable(contractName: string, contractTable: string, filesToInclude: string[]) {
    let filename = Path.join(ContractsDir, contractName + '.md');
    Fs.writeFileSync(filename, contractTable, {encoding: 'utf-8'});
    filesToInclude.unshift(filename);
    console.log('Contract table saved: ' + filename)
}

async function compileContractTables(files: string[]) {
    saveMarkdown(files);
    await MarkdownInclude.compileFiles(MarkdownFile);
}

function saveMarkdown(files: string[]) {
    let markdown = {
        "build": FileToRender,
        "files": files,
    }
    Fs.writeFileSync(MarkdownFile, JSON.stringify(markdown, null, 4), {encoding: 'utf-8'});
    console.log('Markdown file saved: ' + MarkdownFile)
}
