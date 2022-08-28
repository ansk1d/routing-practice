import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import TxtColored from './components/TxtColored';
import Txt from './components/Txt';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/:word/:backgroundColor/:color'>
            <TxtColored />
          </Route>
          <Route exact path='/:word'>
            <Txt />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
