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
                  <svg className="tile-image" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="18" width="74" height="50" rx="6" stroke="currentColor" strokeWidth="3" fill="none" />
                    <rect x="16" y="26" width="58" height="34" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                    <circle cx="45" cy="43" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
                    <path d="M45 36v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="30" cy="37" r="2" fill="currentColor" opacity="0.6" />
                    <circle cx="60" cy="37" r="2" fill="currentColor" opacity="0.6" />
                    <circle cx="30" cy="49" r="2" fill="currentColor" opacity="0.6" />
                    <circle cx="60" cy="49" r="2" fill="currentColor" opacity="0.6" />
                    <rect x="30" y="72" width="30" height="4" rx="2" fill="currentColor" opacity="0.4" />
                  </svg>
                </div>
                <h2 className="tile-title">AI Site Builder</h2>
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
