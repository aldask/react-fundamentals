import { useState } from "react";

const StatefulComponent34 = () => {

    const [count, setCount] = useState(0);
    let checkPassive = count < 0;
    let checkNegative = count == 0;

    function handleIncrementClick() {
        setCount(count + 1);
    }

    function handleDecrementClick() {
        setCount(count - 1);
    }

    return (
    <div>
        <button onClick = {handleIncrementClick} disabled = {checkPassive}>Increment</button>
        <button onClick = {handleDecrementClick} disabled = {checkNegative}>Decrement</button>
        
        <p>
            <span>Result: {count}</span>
        </p>
    </div>
    )
}

export default StatefulComponent34;

/*
Create an event handler for increment button:

name the handler increment

when increment is called it should add 1 to current state value.

pass the increment to Increment button

Create an event handler for decrement button:

name the handler decrement

when decrement is called it should deduct 1 from the current state value, add additional logic so that when count state is equal to 0 deduction is not made. count state should never become negative.

pass the decrement to decrement button

Render the current count state value inside the Result span
*/