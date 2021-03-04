import { counterColour, Grid } from '../index';

describe('Grid', () => {
  it('Initiates with 7 empty columns', () => {
    const grid = new Grid();

    const cols = grid.getColumns();
    expect(cols).toHaveLength(7);

    cols.forEach(col => {
      expect(col.isFull()).toBe(false);
    })
  })

  it('Returns colour at given position', () => {
    const grid = new Grid();
    const cols = grid.getColumns();
    expect(grid.getColourAtPosition(1, 1)).toBeUndefined();
    cols[0].addCounter(counterColour.red);
    expect(grid.getColourAtPosition(1, 1)).toEqual('red');
    expect(grid.getColourAtPosition(1, 2)).toBeUndefined();
    cols[0].addCounter(counterColour.yellow);
    expect(grid.getColourAtPosition(1, 2)).toEqual('yellow');

    
    expect(grid.getColourAtPosition(3, 3)).toBeUndefined();
    cols[2].addCounter(counterColour.yellow);
    cols[2].addCounter(counterColour.yellow);
    cols[2].addCounter(counterColour.yellow);
    expect(grid.getColourAtPosition(3, 3)).toEqual('yellow');
  })
})