import { counterColour, Column } from '../index';

describe('Column', () => {
  it('Initiates with 6 empty slots', () => {
    const col = new Column();
    const slots = col.getSlots();
    expect(slots).toHaveLength(6);
    slots.forEach(slot => {
      expect(slot.isFree()).toBe(true)
    })
  })
  
  it('Fills in correct order', () => {
    const col = new Column();
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.yellow)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.yellow)

   const colours = col.getSlots().map(slot => slot.getColour());

   expect(colours).toEqual(['red', 'red', 'red', 'yellow', 'red', 'yellow'])
  })

  it('Cannot be overfilled', () => {
    const col = new Column();
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    col.addCounter(counterColour.red)
    let errorMessage;
    try {
        col.addCounter(counterColour.red)
    } catch (error) {
      errorMessage = error.message;
    }

    expect(errorMessage).toEqual('Column is full')
  })

  
  it('isFull is accurate', () => {
    const col = new Column();

    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(false);
    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(false);
    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(false);
    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(false);
    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(false);
    col.addCounter(counterColour.red)
    expect(col.isFull()).toBe(true);
  })
})