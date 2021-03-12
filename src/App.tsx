import { ReactElement } from 'react';
import { MainMenu, Game } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

function App(): ReactElement {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/">
                        <MainMenu />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
