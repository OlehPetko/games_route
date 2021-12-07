import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Counter = () => {
    const [count, setCount] = useState(0)

    const plusAndMinus = (value) => {
        setCount(count + value)
    }
    return (
        <div>
            <nav>
                <Link to='/tictaktoe'>Tic Tak Toe</Link>
                <br/>
                <Link to='/counterdifficult'>Counter Difficult</Link>
                <br/>
                <Link to='/todo'>To Do</Link>

            </nav>
            <h1>Counter</h1>
            <button onClick={() => plusAndMinus(+1)}>+</button>
            {count}
            <button onClick={() => plusAndMinus(-1)}>-</button>
        </div>

    );
};

export default Counter;