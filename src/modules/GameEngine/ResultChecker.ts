import { Grid, Slot, Counter } from '.';

export class ResultChecker {
    constructor(private grid: Grid) {}

    public getWinner(): Counter | undefined {
        const cols = this.grid.getColumns();
        for (const x in cols) {
            const slots = cols[x].getSlots();
            for (const y in slots) {
                const slot = slots[y];
                if (this.slotStartsAWinningSequence(slot)) {
                    return slot.getCounter();
                }
            }
        }
    }

    private slotStartsAWinningSequence(slot: Slot): boolean {
        if (!slot.getCounter()) {
            return false;
        }

        if (this.slotStartsAVerticalSequence(slot)) {
            return true;
        }

        if (slot.getColumnNumber() > 4) {
            // No point checking for anything other than vertical sequence
            // starting in the last 3 columns
            return false;
        }

        if (this.slotStartsAHorizontalSequence(slot)) {
            return true;
        }

        if (this.slotStartsADiagnolUpSequence(slot)) {
            return true;
        }

        if (this.slotStartsADiagnolDownSequence(slot)) {
            return true;
        }

        return false;
    }

    private slotStartsAHorizontalSequence(slot: Slot): boolean {
        return this.checkSequence(slot, +1, 0);
    }

    private slotStartsAVerticalSequence(slot: Slot): boolean {
        if (slot.getRowNumber() > 3) {
            // If slot is in the top 3 rows there is not
            // space above for a upward sequence
            return false;
        }

        return this.checkSequence(slot, 0, +1);
    }

    private slotStartsADiagnolUpSequence(slot: Slot): boolean {
        if (slot.getRowNumber() > 3) {
            // If slot is in the top 3 rows there is not
            // space above for a upward sequence
            return false;
        }

        return this.checkSequence(slot, +1, +1);
    }

    private slotStartsADiagnolDownSequence(slot: Slot): boolean {
        if (slot.getRowNumber() < 4) {
            // If slot is in the bottom 3 rows there is not
            // space above for a downward sequence
            return false;
        }

        return this.checkSequence(slot, +1, -1);
    }

    private checkSequence(
        slot: Slot,
        horizontalOffset: number,
        verticalOffset: number
    ): boolean {
        const counter = slot.getCounter();
        const col = slot.getColumnNumber();
        const row = slot.getRowNumber();
        for (let offset = 1; offset < 4; offset++) {
            if (
                this.grid.getCounterAtPosition(
                    col + offset * horizontalOffset,
                    row + offset * verticalOffset
                ) !== counter
            ) {
                return false;
            }
        }

        return true;
    }
}
