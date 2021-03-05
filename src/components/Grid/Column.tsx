import { ReactElement } from 'react';
import { Column } from '../../modules/GameEngine';
import Slot from './Slot';

type Props = {
    col: Column;
    onAddCounter: () => void;
};

const ColumnComponent = ({ col, onAddCounter }: Props): ReactElement => {
    const slots = col.getSlots();
    const onClickHandler = (): void => {
        if (col.isFull()) {
            return;
        }

        onAddCounter();
    };

    return (
        <div
            className={`c-grid__column c-grid__column--${
                col.isFull() ? 'full' : 'available'
            }`}
            onClick={onClickHandler}
        >
            {slots.map((slot) => (
                <Slot key={slot.getRowNumber()} slot={slot} />
            ))}
        </div>
    );
};

export default ColumnComponent;
