import * as React from 'react';

export function DeveloperSurvey() {
  return (
    <div className="margin-top-bottom-30">
      <div className="developer-survey">
        <h2>
          Help us improve our products!
        </h2>
        <p>
          We're always looking for ways to improve how developers use and integrate our products into their applications. We'd love to hear about your experience to help us get better.
        </p>
        <div className="developer-survey-actions">
          <button 
            data-tf-slider="uHPQyHO6" 
            data-tf-width="550" 
            data-tf-iframe-props="title=Developer Research Survey" 
            data-tf-medium="snippet" 
          >
            Take Our Developer Survey
          </button>
          <button 
            data-tf-slider="OC87toiF" 
            data-tf-width="550" 
            data-tf-iframe-props="title=Developer Research Survey" 
            data-tf-medium="snippet" 
          >
            Take Our Partner API Survey
          </button>
        </div>
      </div>
    </div>
  );
}
