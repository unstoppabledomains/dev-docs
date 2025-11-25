import * as React from 'react';

export default function Page() {
  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ marginTop: 0 }}>Page not found</h1>
      <p style={{ color: '#555' }}>The page may have been removed or renamed.</p>
      <div style={{ marginTop: '1rem' }}>
        <a href="/" style={{ padding: '0.5rem 1rem', background: '#0D67FE', color: '#fff', borderRadius: 6, textDecoration: 'none' }}>Return home</a>
      </div>
    </main>
  );
}
