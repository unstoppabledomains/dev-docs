import React from 'react'

export default function ColorSample(props) {
    const elementStyle = {
        background: props.color || 'rgba(255, 255, 255, 0)',
        color: props.color ? '#ffffff' : '#ff0000',
        padding: '0.25em',
        textAlign: 'center',
    };

    return (
        <code style={elementStyle}>{props.color || 'undefined'}</code>
    )
}