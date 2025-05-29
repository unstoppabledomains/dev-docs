import React, { useState, useEffect, CSSProperties } from 'react';
import { Typography, Box } from '@redocly/developer-portal/ui';

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

const styles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '2rem 0',
  },
  quoteBox: {
    maxWidth: '872px',
    width: '100%',
    backgroundColor: '#eeeeee',
    borderRadius: '1.5rem',
    padding: '2rem',
    position: 'relative' as const,
    overflow: 'hidden',
    height: '200px',
    display: 'flex',
    alignItems: 'center'
  },
  quoteContainer: {
    position: 'absolute' as const,
    width: '100%',
    padding: '0 2rem',
    left: 0,
    animation: 'slideIn 1s ease-in-out forwards'
  }
};

const keyframes = `
  @keyframes slideIn {
    0% {
      transform: translateX(100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @media (max-width: 600px) {
    .quote-box {
      height: 350px !important;
    }
  }
`;

const QuoteContent: React.FC<{ quote: typeof quotes[0] | undefined }> = ({ quote }) => {
  if (!quote) return null;
  
  return (
    <>
      <Typography 
        variant="h5" 
        component="blockquote" 
        sx={{ 
          fontStyle: 'italic', 
          mb: quote.author ? 2 : 0,
          textAlign: 'center'
        }}
      >
        "{quote.text}"
      </Typography>
      {quote.author && (
        <Typography 
          variant="subtitle1" 
          color="text.secondary"
          sx={{ textAlign: 'center' }}
        >
          — {quote.author}
        </Typography>
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
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.quoteBox} className="quote-box">
          <div style={{
            ...styles.quoteContainer,
            animation: isTransitioning ? 'slideOut 1s ease-in-out forwards' : 'none'
          }}>
            <QuoteContent quote={currentQuote} />
          </div>
          {isTransitioning && quotes.length > 1 && (
            <div style={{
              ...styles.quoteContainer,
              animation: 'slideIn 1s ease-in-out forwards'
            }}>
              <QuoteContent quote={nextQuote} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}; 