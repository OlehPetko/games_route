import React from 'react';
import {Link} from "react-router-dom";

const TicTakToe = () => {
    return (
        <div>
            <nav>
                <Link to='/counter'>Counter</Link>
                <br/>
                <Link to='/counterdifficult'>Counter Difficult</Link>
                <br/>
                <Link to='/todo'>To Do</Link>
            </nav>
            <h1>TicTakToe</h1>

        </div>
    );
};

export default TicTakToe;