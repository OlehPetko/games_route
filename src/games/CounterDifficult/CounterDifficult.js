import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";

const CounterDifficult = () => {

    const initialState = [
        {id: nanoid(), value: 1, buttons: [1]},
        {id: nanoid(), value: 2, buttons: [1, 2]},
        {id: nanoid(), value: 3, buttons: [1, 2, 3]},
        {id: nanoid(), value: 4, buttons: [1, 2, 3, 4]},
    ]
    const [counters, setCounters] = useState(initialState)
    const plusAndMinus = (valueId, value) => {
      const newCounters = counters.map(el => el.id === valueId ? {...el, value: el.value + value} : el)
        setCounters(newCounters)
    }
    return (
        <div>
            <nav>
                <Link to='/counter'>Counter</Link>
                <br/>
                <Link to='/tictaktoe'>Tic Tak Toe</Link>
                <br/>
                <Link to='/todo'>To Do</Link>
            </nav>
            <h1>CounterDifficult</h1>
            {counters.map(counter =>
            <div>
                {counter.buttons.map(buttonValue =>
                <>
                    <button onClick={() => plusAndMinus(counter.id, buttonValue)}>{buttonValue}</button>
                </>
                )}
                {counter.value}
                {counter.buttons.map(buttonValue =>
                <>
                    <button onClick={() => plusAndMinus(counter.id, -buttonValue)}>{-buttonValue}</button>
                </>
                )}
            </div>
            )}

        </div>
    );
};

export default CounterDifficult;