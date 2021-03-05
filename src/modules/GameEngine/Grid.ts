import { Column, Counter, ResultChecker } from '.';

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

    public getCounterAtPosition(x: number, y: number): Counter | undefined {
        const col = this.columns.find((col) => col.getColumnNumber() === x);
        if (!col) {
            return;
        }
        const slot = col.getSlots().find((slot) => slot.getRowNumber() === y);
        if (slot) {
            return slot.getCounter();
        }
    }

    public getWinner(): Counter | undefined {
        return this.resultChecker.getWinner();
    }

    public isFull(): boolean {
        return (
            this.columns.filter((col) => col.isFull()).length ===
            this.columns.length
        );
    }
}
