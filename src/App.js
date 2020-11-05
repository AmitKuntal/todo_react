import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Todo from './components/todo';
import BookSlot from './components/bookslot';

function App() {
  return (
    <Router>
      <div className="todo"> 
        <Switch>
          <Route exact path="/">
              <Todo />
          </Route>
          <Route path="/:id">
            <BookSlot />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
