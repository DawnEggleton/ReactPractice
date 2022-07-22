import React from 'react';

export default function Nav(props) {
    const {logo, url, ...rest} = props;

    return (<nav {...rest}>
        <a href={url}><img src={logo} /></a>
    </nav>);
}