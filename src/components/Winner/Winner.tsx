import { ReactElement } from 'react';
import { counterColour } from '../../modules/Grid';

type Props = {
    winner: counterColour;
    onReset: () => void;
};

export const Winner = ({ onReset, winner }: Props): ReactElement => (
    <div className="c-modal">
        <h2>{`${winner} wins!`}</h2>
        <button onClick={onReset}>Play Again</button>
    </div>
);
