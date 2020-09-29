import React from 'react';

const Transaction = ({text,ammount}) => {
    return (
        <div className={`transaction-container ${ ammount < 0 ? "redBorder" : "greenBorder"}`}>
        <p>{text}</p>
        <p>{ammount}</p>
         </div>
    )
}

export default Transaction