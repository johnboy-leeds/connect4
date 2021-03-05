import { Counter } from '.';

export class Slot {
    constructor(
        private rowNumber: number,
        private columnNumber: number,
        private counter?: Counter
    ) {}

    public getCounter(): Counter | undefined {
        return this.counter;
    }

    public getRowNumber(): number {
        return this.rowNumber;
    }

    public getColumnNumber(): number {
        return this.columnNumber;
    }

    public isFree(): boolean {
        return !this.counter;
    }

    public setCounter(colour: Counter): void {
        this.counter = colour;
    }
}
