import React, {createElement, useEffect, useState} from 'react';
import {flushSync} from 'react-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';

export function DangerouslyFetchHTML(props) {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!content) fetchContent(props.file);
    }, []);

    const fetchContent = async (resource) => {
        let text = await fetchFileText(resource);
        setContent(text);
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    )
}

export function FetchMD(props) {
    const [content, setContent] = useState('');
    const plugins = (props.supportHTML === 'true')? [rehypeRaw, rehypeSanitize] : [];

    useEffect( () => {
        if (!content) fetchContent(props.file);
    }, []);

    const fetchContent = async (resource) => {
        let text = await fetchFileText(resource);
        //document.querySelector('#gatsby-focus-wrapper > div > div > div > div > section > article'); // Page content
        setContent(text);
    }

    let rmd = ReactMarkdown({
            components: {h1: 'h2', h2: HeadingRenderer, h3: HeadingRenderer, h4: HeadingRenderer, h5: HeadingRenderer, h6: HeadingRenderer},
            rehypePlugins: {plugins}, 
            children: content });

    if (props.toc === 'true') dynamicRenderTOC(rmd);
    
    return rmd;
}

async function fetchFileText(resource) {
    let response = await fetch(resource);
    if (!response.ok)
        "Failed to fetch file text";
    let blob = await response.blob();
    let text = await blob.text();

    return text;
}

function dynamicRenderTOC(rmd) {
    const toc = document.querySelector('#gatsby-focus-wrapper > div > div > div > div > aside > div');
    if (toc) {
        let tocTitle = toc.querySelector('div');
        let titleClass = tocTitle ? tocTitle.className : '';

        let hElements = toc.querySelectorAll('a');
        let hClassNames = [];
        for (let heading of hElements) {
            hClassNames.push(heading.className);
        }

        toc.innerHTML = '<div class =\"' + titleClass + '\" >On this page<div>\n';

        let headings = '';
        for (let element of rmd.props.children) {
            if (element.type === HeadingRenderer) {
                headings += '<a ' +
                            'href=\"#' + element.props.children[0] + '\" ' +
                            'data-cy=\"' + 'toc-' + element.props.children[0] + '\"' +
                            'class =\"' + hClassNames[element.props.level - 1] + '\" >' + 
                            element.props.children[0] + 
                            '</a>\n';
            }
        }
        toc.innerHTML += headings;
    }
}

function HeadingRenderer({node, ...props}) {
    return React.createElement('h'+props.level, {id: props.children[0]}, props.children);
}