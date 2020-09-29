import React from 'react';
import Transaction from '../transaction/transaction'


const History = ({transactions,setTransactions}) => {
    return (
    <>
    <h1>History</h1>
    {transactions.filter((item,index) => index < 3).map(transaction => (
        <Transaction key={transaction.id} text={transaction.text} ammount={transaction.ammount}   key={transaction.id} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
    ))}
    {
        transactions.length > 3 ? (<p>See all transactions</p>) : null
    }
        
   </>
    )
}

export default History