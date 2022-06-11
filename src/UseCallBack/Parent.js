import React, { useCallback, useState } from 'react'
import Child from './Child';


function Parent(props) {

    const [counterOne, setCounterOne] = useState(0);
    const [countertwo, setCountertwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const incrementTwo = () => {
        setCountertwo(countertwo + 1);
    }

    const fun = useCallback(() => {
        console.log("Hello Gajanan")
    }, [countertwo]);

    return (
        <div>
            <Child countertwo={countertwo} func={fun}/>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            <button onClick={incrementTwo}>Counter Two - {countertwo}</button>
        </div>
    );
}

export default Parent;