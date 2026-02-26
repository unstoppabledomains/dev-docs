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
          <h2 className="margin-top-bottom-20 jumbotron-h2">Developer Documentation</h2>
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
                <h2 className="tile-title">Sell Domains in your App</h2>
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
                  <img src={`/static/images/resolve-domains-${imageSuffix}.png`} alt="Reseller API" className="tile-image" />
                </div>
                <h2 className="tile-title">User API</h2>
              </div>
              <div className="tile-content">
                Register, renew, and transfer domains programmatically. Build domain management directly into your platform with our Reseller API.
              </div>
              <div className="tile-button-container">
                <a href="/mcp/overview" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/login-with-domains-${imageSuffix}.png`} alt="MCP Server" className="tile-image" />
                </div>
                <h2 className="tile-title">MCP Server</h2>
              </div>
              <div className="tile-content">
                Connect your AI assistant to Unstoppable Domains. Search, purchase, and manage domains through natural conversation in ChatGPT, Claude, and more.
              </div>
              <div className="tile-button-container">
                <a href="/mcp/overview" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src={`/static/images/api-reference-${imageSuffix}.png`} alt="API Reference" className="tile-image" />
                </div>
                <h2 className="tile-title">API Reference</h2>
              </div>
              <div className="tile-content">
                Consult the documentation and live testing features of Unstoppable Domains APIs, including the Reseller API and MCP Server.
              </div>
              <div className="tile-button-container">
                <a href="/apis/overview" className="tile-button">Get Started</a>
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
