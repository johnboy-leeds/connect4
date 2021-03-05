import { ReactElement } from 'react';
import { Column, Counter, Grid as GridLogic } from '../../modules/GameEngine';
import ColumnComponent from './Column';
import './Grid.scss';

type props = {
    grid: GridLogic;
    turn: Counter;
    onAddCounter: (col: Column) => void;
};

export const Grid = ({ onAddCounter, grid, turn }: props): ReactElement => {
    const cols = grid.getColumns();
    return (
        <div className={`c-grid c-grid--${turn}`}>
            {cols.map((col, i) => (
                <ColumnComponent
                    key={i}
                    col={col}
                    onAddCounter={(): void => onAddCounter(col)}
                />
            ))}
        </div>
    );
};
