import { ReactElement, useState } from 'react';
import './App.scss';
import { PlayArea } from './components';
import { Counter, Column, Grid, GameState } from './modules/GameEngine';

const newGame = (): GameState => ({
    grid: new Grid(),
    status: 'active',
    turn: Counter.red,
    winner: undefined,
    redStack: 21,
    yellowStack: 21,
});

function App(): ReactElement {
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
        console.log('did it', gridWinner);
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
        <div className="App">
            <PlayArea
                onAddCounter={handleAddCounter}
                onReset={handleReset}
                gameState={gameState}
            />
        </div>
    );
}

export default App;
