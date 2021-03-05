import { Counter, Slot } from '../index';

describe('Slot', () => {
    it('Is free when initiated', () => {
        expect(new Slot(1, 1).isFree()).toBe(true);
    });

    it('Is not free after setting counter', () => {
        const slot = new Slot(1, 1);
        slot.setCounter(Counter.red);
        expect(slot.isFree()).toBe(false);
    });
});
