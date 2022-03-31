import React, { useState } from 'react'
import MyContext from './MyContext'

export default function Container(props) {

    const [items, setItems]=useState()
    const [fItems, setFItems] = useState([]);


    return (
        <MyContext.Provider value={{items, setItems,fItems, setFItems}}> 
            {props.children}
        </MyContext.Provider>
    )
}
