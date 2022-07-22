import React from 'react';
import Card from './Card';

export default function Section(props) {
    const {title, children, cards, ...rest} = props;
    return (<section {...rest}>
        <h2>{title}</h2>
        {children}
        <div class="cards">
            {cards.map(card => {
                return (<Card
                    key={card.id}
                    card={card} />);
            })}
        </div>
    </section>);
}