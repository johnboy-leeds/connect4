import { ReactElement } from 'react';
import { Counter } from '../../modules/GameEngine';

type Props = {
    winner: Counter;
    onReset: () => void;
};

export const Winner = ({ onReset, winner }: Props): ReactElement => (
    <div className="c-modal">
        <h2>{`${winner} wins!`}</h2>
        <button onClick={onReset}>Play Again</button>
    </div>
);
