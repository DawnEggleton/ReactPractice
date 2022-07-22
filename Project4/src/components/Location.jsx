export default function Location(props) {
    const {image, country, url, place, arrival, departure, description, ...rest} = props.item;
    return (<div className="card">
        <img src={image} />
        <div className="card--main">
            <div className="card--info">
                <i className="fa-solid fa-location-dot"></i>
                <span>{country}</span>
                <a href={url} target="_blank">View on Google Maps</a>
            </div>
            <h2>{place}</h2>
            <b>{arrival} &mdash; {departure}</b>
            <p>{description}</p>
        </div>
    </div>);
}