import { ResultChecker } from './ResultChecker';

export enum counterColour {
    'yellow' = 'yellow',
    'red' = 'red',
}

export class Slot {
    private counter?: counterColour;
    constructor(private rowNumber: number, private columnNumber: number) {}

    setCounter(colour: counterColour): void {
        this.counter = colour;
    }

    isFree(): boolean {
        return !this.counter;
    }

    getColour(): counterColour | undefined {
        return this.counter;
    }

    getRowNumber(): number {
        return this.rowNumber;
    }

    public getColumnNumber(): number {
        return this.columnNumber;
    }
}

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

    public addCounter(color: counterColour): void {
        const slot = this.getFreeSlots().shift();
        if (slot) {
            slot.setCounter(color);
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

export class Grid {
    private columns: Column[];
    private resultChecker: ResultChecker;

    constructor() {
        this.columns = [
            new Column(1),
            new Column(2),
            new Column(3),
            new Column(4),
            new Column(5),
            new Column(6),
            new Column(7),
        ];

        this.resultChecker = new ResultChecker(this);
    }

    public getColumns(): Column[] {
        return this.columns;
    }

    public isFull(): boolean {
        return (
            this.columns.filter((col) => col.isFull()).length ===
            this.columns.length
        );
    }

    public getColourAtPosition(
        x: number,
        y: number
    ): counterColour | undefined {
        const col = this.columns.find((col) => col.getColumnNumber() === x);
        if (!col) {
            return;
        }
        const slot = col.getSlots().find((slot) => slot.getRowNumber() === y);
        if (slot) {
            return slot.getColour();
        }
    }

    public getWinner(): counterColour | undefined {
        return this.resultChecker.getWinner();
    }
}
