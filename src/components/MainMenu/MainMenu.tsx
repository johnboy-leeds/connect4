import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const MainMenu = (): ReactElement => (
    <div>
        <Link to="/game">Play</Link>
    </div>
);

export default MainMenu;
