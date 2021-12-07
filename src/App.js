import './App.css';
import Counter from "./games/Counter/Counter";
import CounterDifficult from "./games/CounterDifficult/CounterDifficult";
import TicTakToe from "./games/TicTakToe/TicTakToe";
import {Routes, Route} from "react-router-dom";
import Todo from "./games/Todo/Todo";

function App() {
    return (<div className="App">
        <Routes>
            <Route path='counter' element={<Counter/>}/>
            <Route path='counterdifficult' element={<CounterDifficult/>}/>
            <Route path='tictaktoe' element={<TicTakToe/>}/>
            <Route path='todo' element={<Todo />}/>
        </Routes>
    </div>);
}

export default App;
