import React from 'react'
import { useState, useEffect } from 'React';
import {randomAdvice} from '../services/Constants';


function Random(){
   const [quote, setQuote] = useState('')

    async function handleClick() {
        const advice = await randomAdvice()
        console.log(advice)
        setQuote(advice.data.slip.advice)
    }

    useEffect(() => {
     handleClick();   
    }, [])

    return(
        <div>

            <h1>Random Advice</h1>
            <button onClick={handleClick}>Click for Wisdom</button>
            <p>{quote}</p>
        </div>
    )
}

export default Random