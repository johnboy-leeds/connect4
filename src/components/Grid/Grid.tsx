import { ReactElement } from 'react';
import { Column, counterColour, Grid as GridLogic } from '../../modules/Grid';
import ColumnComponent from './Column';
import './Grid.scss';

type props = {
    grid: GridLogic;
    turn: counterColour;
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
