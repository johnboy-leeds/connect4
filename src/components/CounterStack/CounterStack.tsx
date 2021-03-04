import { ReactElement } from 'react';
import { counterColour } from '../../modules/Grid';
import './CounterStack.scss';

type Props = {
    colour: counterColour;
    count: number;
};

export const CounterStack = ({ colour, count }: Props): ReactElement => {
    const counters = [];

    for (let i = 0; i < count; i++) {
        counters.push(<div className="c-counter-stack__counter" />);
    }

    return (
        <div className={`c-counter-stack c-counter-stack--${colour}`}>
            {counters}
        </div>
    );
};