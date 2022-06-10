import * as React from 'react';

export function DeveloperSurvey() {
  return (
    <div style={{ boxShadow: '0px 10px 30px 0px rgb(35 35 35 / 10%)', borderRadius: '10px' }}>
      <p style={{ margin: '40px 10% 30px', lineHeight: '25px' }}>
        We're always looking for ways to improve how developers use and integrate our products into their applications. We'd love to hear about your experience to help us get better.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0px 0px 40px'}}>
        <button data-Tf-Slider={ "uHPQyHO6" } data-Tf-Width={ 550 } data-Tf-Iframe-Props={ "title=Developer Research Survey" } data-Tf-Medium={ "snippet" } style={{ all: 'unset', display: 'inline-block', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', backgroundColor: '#0D67FE', color: '#FFFFFF', fontSize: '16px', borderRadius: '4px', padding: '10.5px 44px', fontWeight: '600', height: '35px', cursor: 'pointer', lineHeight: '35px', margin: 0, textDecoration: 'none' }}>Take Our Survey</button>
      </div>
    </div>
  );
}
