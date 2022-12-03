import React, { useState } from 'react';
import Card from './Card';

function Algorithm() {
    const [active, setActive] = useState("FirstCard");

    return(
        <div>
            <nav>
                <button onClick={() => setActive("FirstCard")}>1</button>
                <button onClick={() => setActive("SecondCard")}>2</button>
                <button onClick={() => setActive("ThirdCard")}>3</button>
            </nav>
            <div className="App">
                {active === "FirstCard" && <Card algo="1" />}
                {active === "SecondCard" && <Card algo="2" />}
                {active === "ThirdCard" && <Card algo="3" />}
            </div>
        </div>
    );
}

export default Algorithm;