import { Counter, Grid, ResultChecker } from '..';

describe('ResultChecker', () => {
    it('Gives no winner for empty grid', () => {
        const grid = new Grid();
        const resultChecker = new ResultChecker(grid);
        expect(resultChecker.getWinner()).toBeUndefined();
    });

    /**
     * Counters added to make this pattern:
     *
     * R
     * R
     * R
     * R
     */
    it('Detects a vertical winner', () => {
        const grid = new Grid();
        const resultChecker = new ResultChecker(grid);
        expect(resultChecker.getWinner()).toBeUndefined();

        const col = grid.getColumns()[0];
        col.addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        col.addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        col.addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        col.addCounter(Counter.red);
        expect(resultChecker.getWinner()).toEqual(Counter.red);
    });

    /**
     * Counters added to make this pattern:
     *
     * R R R R
     */
    it('Detects a horizontal winner', () => {
        const grid = new Grid();
        const resultChecker = new ResultChecker(grid);
        expect(resultChecker.getWinner()).toBeUndefined();

        const cols = grid.getColumns();
        cols[0].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[1].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[2].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[3].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toEqual(Counter.red);
    });

    /**
     * Counters added to make this pattern:
     *
     *       R
     *     R Y
     *   R Y Y
     * R Y Y Y
     */
    it('Detects a diagnol up winner', () => {
        const grid = new Grid();
        const resultChecker = new ResultChecker(grid);
        expect(resultChecker.getWinner()).toBeUndefined();

        const cols = grid.getColumns();
        cols[0].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[1].addCounter(Counter.yellow);
        cols[1].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[2].addCounter(Counter.yellow);
        cols[2].addCounter(Counter.yellow);
        cols[2].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[3].addCounter(Counter.yellow);
        cols[3].addCounter(Counter.yellow);
        cols[3].addCounter(Counter.yellow);
        cols[3].addCounter(Counter.red);
        expect(resultChecker.getWinner()).toEqual(Counter.red);
    });

    /**
     * Counters added to make this pattern:
     *
     * Y
     * R Y
     * R R Y
     * R R R Y
     */
    it('Detects a diagnol down winner', () => {
        const grid = new Grid();
        const resultChecker = new ResultChecker(grid);
        expect(resultChecker.getWinner()).toBeUndefined();

        const cols = grid.getColumns();
        cols[1].addCounter(Counter.red);
        cols[1].addCounter(Counter.red);
        cols[1].addCounter(Counter.red);
        cols[1].addCounter(Counter.yellow);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[2].addCounter(Counter.red);
        cols[2].addCounter(Counter.red);
        cols[2].addCounter(Counter.yellow);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[3].addCounter(Counter.red);
        cols[3].addCounter(Counter.yellow);
        expect(resultChecker.getWinner()).toBeUndefined();
        cols[4].addCounter(Counter.yellow);
        expect(resultChecker.getWinner()).toEqual(Counter.yellow);
    });
});
