import React, { useEffect, useRef, useState } from 'react'
import useRandomJoke from './useRandomJoke';

function GenerateJoke() {

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);

    const [firstName, setFirstName] = useState("Gajanan");
    const [lastName, setLastName] = useState("Mallik");

    //Custom Hook
    const joke = useRandomJoke(firstName, lastName);

    const generateJoke = (e) => {
        e.preventDefault();
        setFirstName(firstNameRef.current.value);
        setLastName(lastNameRef.current.value);
    }

    return (
        <>
            <div>
                <p>{joke}</p>
                <form className='joke-form'>
                    <input 
                        className="form-style" 
                        type="text" 
                        placeholder="Enter First Name" 
                        ref={firstNameRef}
                    />
                    <input 
                        className="form-style" 
                        type="text" 
                        placeholder="Enter Second Number" 
                        ref={lastNameRef}
                    />
                    <button onClick={generateJoke} className='btn'>Generate Joke</button>
                </form>
                
            </div>
        </>
    )
}

export default GenerateJoke;
