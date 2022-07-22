export default function Header(props) {
    const {image, title} = props;
    
    return (<header>
        <img src={image} />
        <h1>{title}</h1>
    </header>);
}