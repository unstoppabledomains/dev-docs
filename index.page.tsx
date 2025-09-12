import * as React from 'react';
import { RotatingQuotes } from './components/RotatingQuotes';
import { DeveloperSurvey } from './components/DeveloperSurvey';

export const frontmatter = {
  "title": "Unstoppable Domains Developer Documentation Portal"
};

export default function Page() {
  return (
    <>
      <style>{`
        @import url('/static/css/main.css');
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,600,700&display=swap');
      `}</style>
      <main>
        <section className="padding-top-bottom-20 jumbotron" style={{ textAlign: 'center' }}>
          <h2 className="margin-top-bottom-20 jumbotron-h2">Developer Documentation</h2>
          <h1 className="margin-top-bottom-20 jumbotron-h1">Effortless building starts here.</h1>
          <h3>Everything you need to build, customize, and integrate with Unstoppable Domains.</h3>
          <div style={{ marginTop: '1.5rem', display: 'inline-flex', gap: '0.75rem' }}>
            <a href="/getting-started/overview" className="header-button" style={{ padding: '0.5rem 1rem', background: '#0D67FE', color: '#fff', borderRadius: 24, textDecoration: 'none' }}>Get started</a>
            <a href="/openapi/overview" className="header-button" style={{ padding: '0.5rem 1rem', border: '1px solid #0D67FE', color: '#0D67FE', borderRadius: 24, textDecoration: 'none' }}>API reference</a>
          </div>
        </section>

        <div className="stats-section">
          <div className="stats-container">
            <div className="stats-flex">
              <div className="stat-box"><h3>Quick and Easy Integration</h3></div>
              <div className="stat-box middle"><h3>Millions of Domains</h3></div>
              <div className="stat-box"><h3>Hundreds of Integrated Partners</h3></div>
            </div>
          </div>
        </div>

        <section className="padding-top-bottom-20" style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            <a href="/domain-distribution-and-management/overview" className="tile" style={{ padding: '1rem', border: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>Sell domains in your app</h2>
              <div className="tile-content">
                Register and manage onchain domains natively within your app.
              </div>
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <span className="tile-button" style={{ border: '1px solid #0D67FE', color: '#0D67FE', padding: '10px 24px' }}>Get started</span>
              </div>
            </a>

            <a href="/resolution/overview" className="tile" style={{ padding: '1rem', border: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>Resolve domains in your app</h2>
              <div className="tile-content">
                Fetch crypto addresses, IPFS hashes, and metadata from domains.
              </div>
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <span className="tile-button" style={{ border: '1px solid #0D67FE', color: '#0D67FE', padding: '10px 24px' }}>Get started</span>
              </div>
            </a>

            <a href="/smart-contracts/overview/uns-architecture-overview" className="tile" style={{ padding: '1rem', border: '1px solid #eee', textDecoration: 'none', color: 'inherit' }}>
              <h2 style={{ marginTop: 0, fontSize: '1.1rem' }}>Smart contracts</h2>
              <div className="tile-content">
                Explore UNS and CNS architecture and contract references.
              </div>
              <div className="tile-button-container" style={{ textAlign: 'center' }}>
                <span className="tile-button" style={{ border: '1px solid #0D67FE', color: '#0D67FE', padding: '10px 24px' }}>Explore</span>
              </div>
            </a>
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
