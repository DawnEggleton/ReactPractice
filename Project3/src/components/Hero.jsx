import React from 'react';

export default function Hero(props) {
    const {image, ...rest} = props;

    return (<header {...rest}>
        <img src={image} />
    </header>);
}