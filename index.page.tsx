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
          <h3>Everything you need to build, customize, <br/>and integrate with Unstoppable Domains.</h3>
          <div className="header-button-container">
            <a href="/getting-started/overview" className="header-button" style={{ padding: '0.5rem 1rem', background: 'var(--color-primary)', color: '#fff', borderRadius: 24, textDecoration: 'none' }}>Build with us</a>
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

        <section style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 className="margin-top-bottom-30" style={{ color: 'black', fontSize: '2.5rem', textAlign: 'center' }}>
            <strong> Build your application today! </strong>
          </h2>
        </section>

        <section className="tiles-section" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="tiles-container">
            <div className="tile">
              <div className="tile-header">
                <div className="tile-image-container">
                  <img src="/static/images/sell-domains.png" alt="Sell domains" className="tile-image" />
                </div>
                <h2 className="tile-title">Sell Domains in your App</h2>
              </div>
              <div className="tile-content">
                Register and manage onchain domains natively within your app.
              </div>
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <a href="/domain-distribution-and-management/overview"  className="tile-button" style={{ background: 'var(--color-primary)', color: '#fff', padding: '10px 24px' }}>Get Started</a>
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
                Retrieve cryptocurrency addresses, IPFS hashes, and metadata from onchain domains within in your app.
              </div>
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <a href="/resolution/overview" className="tile-button" style={{ background: 'var(--color-primary)', color: '#fff', padding: '10px 24px' }}>Get Started</a>
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
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <a href="/apis/overview" className="tile-button" style={{ background: 'var(--color-primary)', color: '#fff', padding: '10px 24px' }}>Get Started</a>
              </div>
            </div>
          </div>
        </section>

        <section className="padding-top-bottom-20" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RotatingQuotes />
        </section>

        <section className="padding-top-bottom-20" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <DeveloperSurvey />
        </section>
      </main>
    </>
  );
}
