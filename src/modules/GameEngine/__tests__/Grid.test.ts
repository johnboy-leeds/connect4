import { Counter, Grid } from '..';

describe('Grid', () => {
    it('Initiates with 7 empty columns', () => {
        const grid = new Grid();

        const cols = grid.getColumns();
        expect(cols).toHaveLength(7);

        cols.forEach((col) => {
            expect(col.isFull()).toBe(false);
        });
    });

    it('Returns counter at given position', () => {
        const grid = new Grid();
        const cols = grid.getColumns();
        expect(grid.getCounterAtPosition(1, 1)).toBeUndefined();
        cols[0].addCounter(Counter.red);
        expect(grid.getCounterAtPosition(1, 1)).toEqual(Counter.red);
        expect(grid.getCounterAtPosition(1, 2)).toBeUndefined();
        cols[0].addCounter(Counter.yellow);
        expect(grid.getCounterAtPosition(1, 2)).toEqual(Counter.yellow);

        expect(grid.getCounterAtPosition(3, 3)).toBeUndefined();
        cols[2].addCounter(Counter.yellow);
        cols[2].addCounter(Counter.yellow);
        cols[2].addCounter(Counter.yellow);
        expect(grid.getCounterAtPosition(3, 3)).toEqual(Counter.yellow);
    });
});
