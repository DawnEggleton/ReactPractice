import React from 'react';

export default function Button(props) {
    const {theme, url, children} = props;
    const className = `btn btn-${theme}`;

    return <a href={url} className={className}>{children}</a>;
}