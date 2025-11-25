import React, { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Integrating Unstoppable into Ebisu's Bay was seamless, their team made the process quick, clear, and hassle-free. Best of all, our community loves having custom domains they can truly own and show off. It's been a win all around.",
    author: "Ebisu's Bay"
  },
  {
    text: "The integration was exceptionally smooth! We integrated the Partner API which was well documented and straight forward to utilize, having just a few steps. The logical flow of searching, checking availability, and then registering was very efficient - all without any blockchain calls. The addition of a sandbox environment to test it all is a huge plus.",
    author: "Permission"
  },
];

const QuoteContent: React.FC<{ quote: typeof quotes[0] | undefined }> = ({ quote }) => {
  if (!quote) return null;
  
  return (
    <>
      <blockquote>
        "{quote.text}"
      </blockquote>
      {quote.author && (
        <p>— {quote.author}</p>
      )}
    </>
  );
};

export const RotatingQuotes: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (quotes.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsTransitioning(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const currentQuote = quotes[currentQuoteIndex];
  const nextQuote = quotes[(currentQuoteIndex + 1) % quotes.length];

  return (
    <>
      <div className="quotes-wrapper">
        <div className="quote-box">
          <div className={`quote-container ${isTransitioning ? 'slide-out' : ''}`}>
            <QuoteContent quote={currentQuote} />
          </div>
          {isTransitioning && quotes.length > 1 && (
            <div className="quote-container slide-in">
              <QuoteContent quote={nextQuote} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}; 