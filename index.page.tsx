import * as React from 'react';
import { RotatingQuotes } from './@theme/components/RotatingQuotes';
import { DeveloperSurvey } from './@theme/components/DeveloperSurvey';

export const frontmatter = {
  "title": "Unstoppable Domains Developer Documentation Portal"
};

export default function Page() {
  return (
    <>
      <main>
        <section className="padding-top-bottom-20 jumbotron" style={{ textAlign: 'center' }}>
          <h2 className="margin-top-bottom-20 jumbotron-h2">Developer Documentation</h2>
          <h1 className="margin-top-bottom-20 jumbotron-h1">Effortless building starts here.</h1>
          <h3 className="margin-top-bottom-20">Everything you need to build, customize, <br/>and integrate with Unstoppable Domains.</h3>
          <div className="header-button-container">
            <a href="/getting-started/overview" className="header-button">Build with us</a>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-flex">
              <div className="stat-box"><h3>Quick and Easy Integration</h3></div>
              <div className="stat-box middle"><h3>Millions of Domains</h3></div>
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
                  <img src="/static/images/sell-domains.png" alt="Sell domains" className="tile-image" />
                </div>
                <h2 className="tile-title">Sell Domains in your App</h2>
              </div>
              <div className="tile-content">
                Register and manage onchain domains natively within your app or website.
              </div>
              <div className="tile-button-container">
                <a href="/domain-distribution-and-management/overview"  className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src="/static/images/resolve domains.png" alt="Resolve domains" className="tile-image" />
                </div>
                <h2 className="tile-title">Resolve Domains in your App</h2>
              </div>
              <div className="tile-content">
                Retrieve crypto addresses, IPFS hashes, metadata, and enable reverse resolution to display domain names in place of wallet addresses.
              </div>
              <div className="tile-button-container">
                <a href="/resolution/overview" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src="/static/images/login.png" alt="Login with domains" className="tile-image" />
                </div>
                <h2 className="tile-title">Login with Domains in your App</h2>
              </div>
              <div className="tile-content">
                Allow users to log in with their Unstoppable Domains in your app or website.
              </div>
              <div className="tile-button-container">
                <a href="/identity/overview/login-with-unstoppable" className="tile-button">Get Started</a>
              </div>
            </div>

            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src="/static/images/api-reference.png" alt="API Reference" className="tile-image" />
                </div>
                <h2 className="tile-title">API Reference</h2>
              </div>
              <div className="tile-content">
                Consult the documentation and live testing features of Unstoppable Domains APIs, including the Resolution Service API and Partner API.
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
