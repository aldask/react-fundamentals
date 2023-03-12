import { useState, useEffect } from "react";

const SynchronizingWithEffects35 = () => {
    const [count, setCount] = useState(0);

    function handleIncrement () {
        setCount(count + 1);
    }

    useEffect(() => {
        if(count == 5) {
            alert ('HIGH FIVE!');
    }}, [count])

    return (
    
    <div>
        <button onClick = {handleIncrement}>Increment</button>
        <p>
            <span>Result: {count}</span>
        </p>
    </div>
    )
}

export default SynchronizingWithEffects35;