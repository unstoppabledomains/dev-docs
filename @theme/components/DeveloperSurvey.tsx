import * as React from 'react';

export function DeveloperSurvey() {
  return (
    <div className="margin-top-bottom-30">
      <div className="developer-survey" style={{ 
        backgroundColor: '#0D67FE', 
        color: '#FFFCF0', 
        padding: '2rem',
        borderRadius: '1.5rem', 
        textAlign: 'center',
        maxWidth: '100%',
        overflow: 'hidden'
      }}>
        <h2 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(24px, 5vw, 31.5px)', 
          marginTop: '0px',
          marginBottom: '1rem'
        }}>
          Help us improve our products!
        </h2>
        <p style={{ 
          lineHeight: '25px',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          We're always looking for ways to improve how developers use and integrate our products into their applications. We'd love to hear about your experience to help us get better.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '2rem',
          width: '100%'
        }}>
          <button 
            data-tf-slider="uHPQyHO6" 
            data-tf-width="550" 
            data-tf-iframe-props="title=Developer Research Survey" 
            data-tf-medium="snippet" 
            style={{ 
              all: 'unset', 
              display: 'inline-block', 
              flex: '1 1 250px',
              minWidth: '250px',
              maxWidth: '300px',
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              fontSize: '16px', 
              borderRadius: '4px', 
              padding: '10.5px 20px', 
              fontWeight: '600', 
              height: '35px', 
              cursor: 'pointer', 
              lineHeight: '35px', 
              textDecoration: 'none', 
              border: '2px solid #FFFCF0'
            }}
          >
            Take Our Developer Survey
          </button>
          <button 
            data-tf-slider="OC87toiF" 
            data-tf-width="550" 
            data-tf-iframe-props="title=Developer Research Survey" 
            data-tf-medium="snippet" 
            style={{ 
              all: 'unset', 
              display: 'inline-block', 
              flex: '1 1 250px',
              minWidth: '250px',
              maxWidth: '300px',
              whiteSpace: 'nowrap', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis', 
              fontSize: '16px', 
              borderRadius: '4px', 
              padding: '10.5px 20px', 
              fontWeight: '600', 
              height: '35px', 
              cursor: 'pointer', 
              lineHeight: '35px', 
              textDecoration: 'none', 
              border: '2px solid #FFFCF0'
            }}
          >
            Take Our Partner API Survey
          </button>
        </div>
      </div>
    </div>
  );
}
