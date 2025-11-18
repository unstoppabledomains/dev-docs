// Initialize Typeform embed for dynamically loaded content
(function() {
  function initTypeform() {
    if (window.tf && window.tf.load) {
      window.tf.load();
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTypeform);
  } else {
    initTypeform();
  }
  
  // Re-initialize when content changes (for SPA navigation)
  var observer = new MutationObserver(function(mutations) {
    var hasNewButtons = mutations.some(function(mutation) {
      return Array.from(mutation.addedNodes).some(function(node) {
        if (node.nodeType === 1) {
          return node.querySelector('[data-tf-slider]') || node.hasAttribute('data-tf-slider');
        }
        return false;
      });
    });
    if (hasNewButtons) {
      setTimeout(initTypeform, 50);
    }
  });
  
  // Start observing
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, { childList: true, subtree: true });
    });
  }
})();

