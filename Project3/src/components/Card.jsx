import React from 'react';

export default function Card(props) {
    const {image, url, status = null, rating, reviews, location, description, cost, ...rest} = props.card;
    
    return (<div className="card">
        <div className="card--image">
            <img src={image} />
            {status && <span>{status}</span>}
        </div>
        <div className="card--rating">
            <i className="fa-solid fa-star"></i>
            {rating}
            <span>({reviews}) &middot; {location}</span>
        </div>
        <div className="card--description"><p>{description}</p></div>
        <div className="card--cost">
            <b>From ${cost} </b>
             / person
        </div>
    </div>);
}