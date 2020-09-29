import React from 'react';
import Transaction from '../transaction/transaction'


const History = ({transactions}) => {
    return (
    <>
    <h1>History</h1>
    {transactions.filter((item,index) => index < 3).map(transaction => (
        <Transaction key={transaction.id} text={transaction.text} ammount={transaction.ammount}   key={transaction.id} />
    ))}
    {
        transactions.length > 3 ? (<p>See all transactions</p>) : null
    }
        
   </>
    )
}

export default History