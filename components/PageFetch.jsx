import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function DangerouslyFetchHTML(props) {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (!content) {
            fetchContent(props.file);
        }
    }, []);

    const fetchContent = async (resource) => {
        let response = await fetch(resource);
        if (!response.ok) {
            return (
                <div>Failed to fetch HTML file!</div>
            )
        }
        let blob = await response.blob();
        let text = await blob.text();
        let fileHTML = new DOMParser().parseFromString(text, "text/html")
        console.log(fileHTML);
    
        setContent(text);
    }

    return (
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    )
}

export function FetchMD(props) {
    const [content, setContent] = useState('');

    useEffect( () => {
        if (!content) {
            fetchContent(props.file)
        }
    }, []);

    const fetchContent = async (resource) => {
        let response = await fetch(resource);
        if (!response.ok) {
            return (
                <div>Failed to fetch MD file!</div>
            )
        }
        let blob = await response.blob();
        let text = await blob.text();

        setContent(text);
    }

    return (
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
    )
}