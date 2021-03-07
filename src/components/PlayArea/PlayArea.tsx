import React, { ReactElement } from 'react';
import './PlayArea.scss';
import { CounterStack, Grid as GridComponent } from '../../components';
import { Status } from './Status';
import { Column, Counter, GameState } from '../../modules/GameEngine';

type Props = {
    gameState: GameState;
    onAddCounter: (col: Column) => void;
    onReset: () => void;
};

export const PlayArea = ({
    gameState,
    onAddCounter,
    onReset,
}: Props): ReactElement => {
    const { grid, turn, redStack, yellowStack } = gameState;

    return (
        <div className="c-playarea">
            <CounterStack colour={Counter.red} count={redStack} />
            <GridComponent
                grid={grid}
                turn={turn}
                onAddCounter={onAddCounter}
            />
            <CounterStack colour={Counter.yellow} count={yellowStack} />
            <Status gameState={gameState} onReset={onReset} />
        </div>
    );
};
