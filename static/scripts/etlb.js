function eltbClickCallback(event) {
  let link = null;

  // Handle click event targets that are children of the <a> tag we want to check
  event.composedPath().forEach((pathElement) => {
    if (pathElement.tagName === 'A') {
      link = pathElement;
    }

    if (link && /^(http.?):\/\//.test(link.href)) {
      // isn't a relative or absolute link
      if (window.location.origin !== link.origin) link.target = '_blank'; // Link doesn't have same origin as current page
    }
  });
}

window.addEventListener('click', eltbClickCallback);
