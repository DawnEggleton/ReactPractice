import React from 'react';

export default function SocialMediaIcon(props) {
    const {brand, url} = props;
    const src = `/${brand}.png`;
    return (<a href={url}><img src={src} /></a>);
}