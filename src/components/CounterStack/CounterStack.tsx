import { ReactElement } from 'react';
import { Counter } from '../../modules/GameEngine';
import './CounterStack.scss';

type Props = {
    colour: Counter;
    count: number;
};

export const CounterStack = ({ colour, count }: Props): ReactElement => {
    const counters = [];

    for (let i = 0; i < count; i++) {
        counters.push(<div key={i} className="c-counter-stack__counter" />);
    }

    return (
        <div className={`c-counter-stack c-counter-stack--${colour}`}>
            {counters}
        </div>
    );
};
