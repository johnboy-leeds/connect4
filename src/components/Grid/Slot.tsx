import { ReactElement } from 'react';
import { Slot } from '../../modules/GameEngine';

type props = {
    slot: Slot;
};

const SlotComponent = ({ slot }: props): ReactElement => {
    const colourModifier = slot.isFree()
        ? 'c-grid__slot--free'
        : `c-grid__slot--${slot.getCounter()}`;
    return (
        <div
            className={`c-grid__slot ${colourModifier}`}
            style={{ gridRowStart: 7 - slot.getRowNumber() }}
        />
    );
};

export default SlotComponent;
