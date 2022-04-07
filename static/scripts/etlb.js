function eltb_click_callback(event) {
    let link = null;
    // Handle click event targets that are children of the <a> tag we want to check
    for (let path_element of event.composedPath()) {
        if (path_element.tagName == "A") {
            link = path_element;
            break;
        } 
        else if (path_element.tagName == "ARTICLE") break;
    }

    if ((link != null) && /^(http.?):\/\//.test(link.href)) { // isn't a relative or absolute link
        if(window.location.origin != link.origin) link.target = "_blank"; // Link doesn't have same origin as current page
    }
}

window.addEventListener("click", eltb_click_callback);