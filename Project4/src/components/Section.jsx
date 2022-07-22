import data from './data';
import Location from './Location';

export default function Section(props) {
    return (<section>
        {data.map(item => {
            return (<Location
                key={item.id}
                item={item} />);
        })}
    </section>);
}