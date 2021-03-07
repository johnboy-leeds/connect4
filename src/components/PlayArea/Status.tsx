import { ReactElement } from 'react';
import { GameState } from '../../modules/GameEngine';

type Props = {
    onReset: () => void;
    gameState: GameState;
};

const getStatusText = ({ status, turn, winner }: GameState): string => {
    if (winner) {
        return `${winner} wins!`;
    }

    if (status === 'stalemate') {
        return "It's a draw!";
    }

    return `${turn}'s turn`;
};

export const Status = ({ onReset, gameState }: Props): ReactElement => {
    return (
        <div className="c-status-bar">
            {getStatusText(gameState)}
            {gameState.status !== 'active' && (
                <button onClick={onReset}>Play again</button>
            )}
        </div>
    );
};
