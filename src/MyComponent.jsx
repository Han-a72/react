
import React, {useState} from 'react';
function Input (){
    const[inputValue, setInputValue] = useState ("")
    const handleChange =(event)=>{
        const value = event.target.value;
        setInputValue(value);
        console.log(value);
    };
    return(
        <div className='input-container' 
           
        >
            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="write here"
            
            
            />

            <p>{inputValue}</p>
        </div>
    )
}
export default Input;