import React from 'react';
import {useState, useEffect} from 'react';
import {findAdvice} from '../services/Constants'

function FindSomeAdvice() {
    const [search, SetSearch] = useState("")

    async function handleSubmit(input) {
        let value = input
        const searchValue = await findAdvice(value)
        console.log(searchValue)
        SetSearch(searchValue)
    }

    useEffect(() => {
        handleSubmit();   
       }, [])

    return (
        <div>
            <h1>Need something specific?</h1>
            <form action="" method="get"></form><button onClick={handleSubmit}/>
            <p>{search}</p>
        </div>
    )
}

export default FindSomeAdvice