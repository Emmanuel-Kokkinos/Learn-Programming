import React from 'react';
import '../css/Snake.css';

function Snake() {
    return (
        <div>
            <div id="questions">
                <p>This is where the questions will go.</p>
                <p>And the options somewhere here.</p>
            </div>
            
            <div id="gameBoard">
                <div id="snake"></div>
                <div id="book"></div>
            </div>
            
            <div id="score">
                <p>Score: </p>
            </div>
        </div>
    );
}

export default Snake;