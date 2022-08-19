import React, { memo } from 'react'


function Child(props) {

    const {countertwo, setCountertwo} = props;

    console.log("Child component called");
    return (
        <div>
            <h4>Child Component {countertwo}</h4>
        </div>
    );
}


//here memo is used because to restrict re-render problem multiple time while some action performed in parent component
export default memo(Child); 