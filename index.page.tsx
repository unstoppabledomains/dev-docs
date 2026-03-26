import * as React from 'react';
import { RotatingQuotes } from './@theme/components/RotatingQuotes';
import { DeveloperSurvey } from './@theme/components/DeveloperSurvey';

export const frontmatter = {
  "title": "Unstoppable Domains Developer Documentation Portal"
};

function useTheme() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const htmlElement = document.documentElement;
      setIsDark(htmlElement.classList.contains('dark'));
    };

    checkTheme();

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function Page() {
  const isDark = useTheme();
  const imageSuffix = isDark ? 'dark' : 'light';

  return (
    <>
      <main>
        <section className="padding-top-bottom-20 jumbotron" style={{ textAlign: 'center' }}>
          <h2 className="margin-top-bottom-20 jumbotron-h2">ICANN Domain Developers</h2>
          <h1 className="margin-top-bottom-20 jumbotron-h1">Effortless building starts here.</h1>
          <h3 className="margin-top-bottom-20">Everything you need to build, customize, <br/>and integrate with Unstoppable Domains.</h3>
          <div className="header-button-container">
            <a href="/apis/overview" className="header-button">Build with us</a>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-flex">
              <div className="stat-box"><h3>Quick and Easy Integration</h3></div>
              <div className="stat-box middle"><h3>900,000+ Domains</h3></div>
              <div className="stat-box"><h3>Hundreds of Integrated Partners</h3></div>
            </div>
          </div>
        </section>

        <section className="tile-header-section">
          <h2 className="margin-top-bottom-30 tile-header">
            <strong> Build your application today! </strong>
          </h2>
        </section>

        <section className="tiles-section">
          <div className="tiles-container padding-top-bottom-20">
            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/sell-domains-${imageSuffix}.png`} alt="Sell domains" className="tile-image" />
                </div>
                <h2 className="tile-title">Reseller & Affiliate API</h2>
              </div>
              <div className="tile-content">
                Build domain search, purchase, and management directly into your platform with our Reseller API.
              </div>
              <div className="tile-button-container">
                <a href="/apis/reseller/openapi"  className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/api-reference-${imageSuffix}.png`} alt="User API" className="tile-image" />
                </div>
                <h2 className="tile-title">User API</h2>
              </div>
              <div className="tile-content">
                Search, purchase, and manage domains programmatically. Configure DNS, list on the marketplace, and automate your domain portfolio.
              </div>
              <div className="tile-button-container">
                <a href="/user-api/overview" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/cli-${imageSuffix}.png`} alt="User CLI" className="tile-image" />
                </div>
                <h2 className="tile-title">User CLI</h2>
              </div>
              <div className="tile-content">
                Search, purchase, and manage domains from your terminal. Script domain workflows with JSON output, CSV export, and shell piping.
              </div>
              <div className="tile-button-container">
                <a href="/user-api/cli" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/mcp-server-${imageSuffix}.png`} alt="MCP Server" className="tile-image" />
                </div>
                <h2 className="tile-title">MCP Server</h2>
              </div>
              <div className="tile-content">
                Connect your AI assistant to Unstoppable Domains. Search, purchase, and manage domains through natural conversation in ChatGPT, Claude, and more.
              </div>
              <div className="tile-button-container">
                <a href="/user-api/mcp-server" className="tile-button">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        <section className="tile-header-section">
          <h2 className="margin-top-bottom-30 tile-header">
            <strong> AI Agents </strong>
          </h2>
        </section>

        <section className="tiles-section">
          <div className="tiles-container tiles-container-single padding-top-bottom-20">
            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <svg className="tile-image" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="20" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="5" x2="12" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="1" r="1" fill="currentColor" />
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 11c1-1 2-1 2-1s1 0 2 1" />
                    <path fill="currentColor" d="M16 8l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M8 16c1 1 2 1 4 1s3 0 4-1" />
                  </svg>
                </div>
                <h2 className="tile-title">Site Builder</h2>
              </div>
              <div className="tile-content">
                Build and publish a fully custom website using AI. Describe what you want in plain English, refine through conversation, and publish to any domain you own.
              </div>
              <div className="tile-button-container">
                <a href="/features/ai-site-builder" className="tile-button">Get Started</a>
              </div>
            </div>
          </div>
        </section>

        <section className="quotes-section padding-top-bottom-20">
          <RotatingQuotes />
        </section>

        <section className="developer-survey-section padding-top-bottom-20">
          <DeveloperSurvey />
        </section>
      </main>
    </>
  );
}
