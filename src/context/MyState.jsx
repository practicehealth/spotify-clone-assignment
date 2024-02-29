import React, { useState } from 'react'
import MyContext from './MyContext'

// receiving props from main.tsx 
function MyState(props) {
    const [searchBox, setSearchBox] = useState(false);
    const [result, setResult] = useState("Anurag");

    return (
        <MyContext.Provider
            value={{
                searchBox,
                setSearchBox,
                result, 
                setResult,
            }}
        >
            {props.children}
        </MyContext.Provider>
    )
}

export default MyState;