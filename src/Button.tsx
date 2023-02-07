import React, {useState} from 'react';
import {Util} from "./Util";

function Button() {
    const [counter, setCounter] = useState(1);
    const samRunner = new Util();
    const buttonHandler = () => setCounter(samRunner.addToZ(counter));
    return (
        <div>
            <button onClick={buttonHandler}>{counter}</button>
        </div>
    );
}

export default Button;