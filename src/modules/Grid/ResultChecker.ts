import { Grid, Slot, counterColour } from '.';

export class ResultChecker {
    constructor(private grid: Grid) {}

    public getWinner(): counterColour | undefined {
        const cols = this.grid.getColumns();
        for (const x in cols) {
            const slots = cols[x].getSlots();
            for (const y in slots) {
                const slot = slots[y];
                if (this.slotStartsAWinningSequence(slot)) {
                    return slot.getColour();
                }
            }
        }

        return undefined;
    }

    private slotStartsAWinningSequence(slot: Slot): boolean {
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
        const colour = slot.getColour();
        if (!colour) {
            return false;
        }
        const row = slot.getRowNumber();
        const col = slot.getColumnNumber();
        for (let offset = 1; offset < 4; offset++) {
            if (this.grid.getColourAtPosition(col + offset, row) !== colour) {
                return false;
            }
        }

        return true;
    }

    private slotStartsAVerticalSequence(slot: Slot): boolean {
        const colour = slot.getColour();
        if (!colour) {
            return false;
        }
        const row = slot.getRowNumber();

        if (row > 3) {
            return false;
        }
        const col = slot.getColumnNumber();
        for (let offset = 1; offset < 4; offset++) {
            if (this.grid.getColourAtPosition(col, row + offset) !== colour) {
                return false;
            }
        }

        return true;
    }

    private slotStartsADiagnolUpSequence(slot: Slot): boolean {
        const colour = slot.getColour();
        if (!colour) {
            return false;
        }
        const row = slot.getRowNumber();
        if (row > 3) {
            return false;
        }
        const col = slot.getColumnNumber();
        for (let offset = 1; offset < 4; offset++) {
            if (
                this.grid.getColourAtPosition(col + offset, row + offset) !==
                colour
            ) {
                return false;
            }
        }

        return true;
    }

    private slotStartsADiagnolDownSequence(slot: Slot): boolean {
        const colour = slot.getColour();
        if (!colour) {
            return false;
        }
        const row = slot.getRowNumber();
        if (row < 4) {
            return false;
        }

        const col = slot.getColumnNumber();
        for (let offset = 1; offset < 4; offset++) {
            if (
                this.grid.getColourAtPosition(col + offset, row - offset) !==
                colour
            ) {
                return false;
            }
        }

        return true;
    }
}
