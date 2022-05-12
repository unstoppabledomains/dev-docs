import React, {useEffect, useState} from 'react';
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
        setContent(text);
    }

    return (
        <ReactMarkdown rehypePlugins={plugins}>{content}</ReactMarkdown>
    )
}

async function fetchFileText(resource) {
    let response = await fetch(resource);
    if (!response.ok)
        "Failed to fetch file text";
    let blob = await response.blob();
    let text = await blob.text();

    return text;
}