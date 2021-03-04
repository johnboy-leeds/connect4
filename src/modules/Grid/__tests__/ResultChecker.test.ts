import { counterColour, Grid } from ".."
import { ResultChecker } from '../ResultChecker';

describe('ResultChecker', () => {
  it('Gives no winner for empty grid', () => {
    const grid = new Grid();
    const resultChecker = new ResultChecker(grid);
    expect(resultChecker.getWinner()).toBeUndefined()
  })

  
  it('Detects a vertical winner', () => {
    const grid = new Grid();
    const resultChecker = new ResultChecker(grid);
    expect(resultChecker.getWinner()).toBeUndefined();

    const col = grid.getColumns()[0];
    col.addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    col.addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    col.addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    col.addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toEqual('red');
  })
  
  it('Detects a horizontal winner', () => {
    const grid = new Grid();
    const resultChecker = new ResultChecker(grid);
    expect(resultChecker.getWinner()).toBeUndefined();

    const cols = grid.getColumns();
    cols[0].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[1].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[2].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[3].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toEqual('red');
  });

  
  it('Detects a diagnol up winner', () => {
    const grid = new Grid();
    const resultChecker = new ResultChecker(grid);
    expect(resultChecker.getWinner()).toBeUndefined();

    const cols = grid.getColumns();
    cols[0].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[1].addCounter(counterColour.yellow);
    cols[1].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[2].addCounter(counterColour.yellow);
    cols[2].addCounter(counterColour.yellow);
    cols[2].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[3].addCounter(counterColour.yellow);
    cols[3].addCounter(counterColour.yellow);
    cols[3].addCounter(counterColour.yellow);
    cols[3].addCounter(counterColour.red);
    expect(resultChecker.getWinner()).toEqual('red');
  })

  
  it('Detects a diagnol down winner', () => {
    const grid = new Grid();
    const resultChecker = new ResultChecker(grid);
    expect(resultChecker.getWinner()).toBeUndefined();

    const cols = grid.getColumns();
    cols[1].addCounter(counterColour.red);
    cols[1].addCounter(counterColour.red);
    cols[1].addCounter(counterColour.red);
    cols[1].addCounter(counterColour.yellow);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[2].addCounter(counterColour.red);
    cols[2].addCounter(counterColour.red);
    cols[2].addCounter(counterColour.yellow);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[3].addCounter(counterColour.red);
    cols[3].addCounter(counterColour.yellow);
    expect(resultChecker.getWinner()).toBeUndefined();
    cols[4].addCounter(counterColour.yellow);
    expect(resultChecker.getWinner()).toEqual('yellow');

  })
})