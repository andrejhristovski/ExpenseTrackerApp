import React from 'react';

const Transaction = ({ text, ammount, transaction, transactions, setTransactions }) => {
    const deleteHandler = () => {
        setTransactions(transactions.filter(el => el.id !== transaction.id))

    }
    return (
        <div className={`animate__animated animate__fadeInLeft transaction-container ${ammount < 0 ? "redBorder" : "greenBorder"}`}>
            <p>{text}</p>
            <p>{ammount}</p>
            <button onClick={deleteHandler} className="delete-btn">x</button>
        </div>
    )
}

export default Transaction