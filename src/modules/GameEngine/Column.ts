import { Counter, Slot } from '.';

export class Column {
    private slots: Slot[];

    constructor(private columnNumber: number) {
        this.slots = [
            new Slot(1, this.columnNumber),
            new Slot(2, this.columnNumber),
            new Slot(3, this.columnNumber),
            new Slot(4, this.columnNumber),
            new Slot(5, this.columnNumber),
            new Slot(6, this.columnNumber),
        ];
    }

    public addCounter(counter: Counter): void {
        const slot = this.getFreeSlots().shift();
        if (slot) {
            slot.setCounter(counter);
        } else {
            throw Error('Column is full');
        }
    }

    public isFull(): boolean {
        return this.getFreeSlots().length === 0;
    }

    public getSlots(): Slot[] {
        return this.slots;
    }

    public getColumnNumber(): number {
        return this.columnNumber;
    }

    private getFreeSlots(): Slot[] {
        return this.slots.filter((slot) => slot.isFree());
    }
}
