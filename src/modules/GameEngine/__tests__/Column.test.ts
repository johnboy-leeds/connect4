import { Counter, Column } from '..';

describe('Column', () => {
    it('Initiates with 6 empty slots', () => {
        const col = new Column(1);
        const slots = col.getSlots();
        expect(slots).toHaveLength(6);
        slots.forEach((slot) => {
            expect(slot.isFree()).toBe(true);
        });
    });

    it('Fills in correct order', () => {
        const col = new Column(1);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.yellow);
        col.addCounter(Counter.red);
        col.addCounter(Counter.yellow);

        const colours = col.getSlots().map((slot) => slot.getCounter());

        expect(colours).toEqual([
            Counter.red,
            Counter.red,
            Counter.red,
            Counter.yellow,
            Counter.red,
            Counter.yellow,
        ]);
    });

    it('Cannot be overfilled', () => {
        const col = new Column(1);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        col.addCounter(Counter.red);
        let errorMessage;
        try {
            col.addCounter(Counter.red);
        } catch (error) {
            errorMessage = error.message;
        }

        expect(errorMessage).toEqual('Column is full');
    });

    it('isFull is accurate', () => {
        const col = new Column(1);

        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(false);
        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(false);
        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(false);
        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(false);
        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(false);
        col.addCounter(Counter.red);
        expect(col.isFull()).toBe(true);
    });
});
