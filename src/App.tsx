import React, { ReactElement, useState } from 'react';
import './App.scss';
import {
    CounterStack,
    Stalemate,
    Winner,
    Grid as GridComponent,
} from './components';
import { Counter, Column, Grid } from './modules/GameEngine';

type GameState = {
    grid: Grid;
    turn: Counter;
    status: string;
    winner: Counter | undefined;
    yellowStack: number;
    redStack: number;
};

const newGame = (): GameState => ({
    grid: new Grid(),
    status: 'active',
    turn: Counter.red,
    winner: undefined,
    redStack: 21,
    yellowStack: 21,
});

function App(): ReactElement {
    const [grid, setGrid] = useState<Grid>(new Grid());
    const [gameState, setGameState] = useState<GameState>(newGame());

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
        setGrid(new Grid());
        setGameState(newGame());
    };

    const { winner, status, turn, redStack, yellowStack } = gameState;

    return (
        <div className="App">
            <CounterStack colour={Counter.red} count={redStack} />
            <GridComponent
                grid={grid}
                turn={turn}
                onAddCounter={handleAddCounter}
            />
            <CounterStack colour={Counter.yellow} count={yellowStack} />
            {status === 'stalemate' && <Stalemate onReset={handleReset} />}
            {winner && <Winner winner={winner} onReset={handleReset} />}
        </div>
    );
}

export default App;
