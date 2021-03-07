export * from './Column';
import { Grid } from './Grid';
export * from './Grid';
export * from './ResultChecker';
export * from './Slot';

export enum Counter {
    'yellow' = 'yellow',
    'red' = 'red',
}

export type GameState = {
    grid: Grid;
    turn: Counter;
    status: string;
    winner: Counter | undefined;
    yellowStack: number;
    redStack: number;
};
