import { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlayArea } from '..';
import { Counter, Column, Grid, GameState } from '../../modules/GameEngine';

const newGame = (): GameState => ({
    grid: new Grid(),
    status: 'active',
    turn: Counter.red,
    winner: undefined,
    redStack: 21,
    yellowStack: 21,
});

function Game(): ReactElement {
    const [gameState, setGameState] = useState<GameState>(newGame());
    const { grid } = gameState;

    const handleAddCounter = (col: Column): void => {
        if (gameState.status !== 'active') {
            return;
        }

        const newGameState = {
            ...gameState,
        };
        if (gameState.turn === Counter.red) {
            newGameState.turn = Counter.yellow;
            newGameState.redStack--;
        } else {
            newGameState.turn = Counter.red;
            newGameState.yellowStack--;
        }

        col.addCounter(gameState.turn);
        const gridWinner = grid.getWinner();
        if (gridWinner) {
            newGameState.status = 'complete';
            newGameState.winner = gridWinner;
        }
        if (grid.isFull()) {
            newGameState.status = 'stalemate';
        }

        setGameState(newGameState);
    };

    const handleReset = (): void => {
        setGameState(newGame());
    };

    return (
        <>
            <Link to="/">back</Link>
            <PlayArea
                onAddCounter={handleAddCounter}
                onReset={handleReset}
                gameState={gameState}
            />
        </>
    );
}

export default Game;
