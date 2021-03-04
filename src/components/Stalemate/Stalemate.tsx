import { ReactElement } from 'react';

type Props = {
    onReset: () => void;
};

export const Stalemate = ({ onReset }: Props): ReactElement => (
    <div className="c-modal">
        <h2>Its a draw!</h2>
        <button onClick={onReset}>Play Again</button>
    </div>
);
