import React from 'react';
import { Link } from "react-router-dom";
import Transaction from '../transaction/transaction'


const History = ({ transactions, setTransactions }) => {
    return (
        <>
            <h1>History</h1>
            {transactions.filter((item, index) => index < 3).map(transaction => (
                <Transaction key={transaction.id} text={transaction.name} ammount={transaction.ammount} key={transaction.id} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
            ))}
            {
                transactions.length > 3 ? (<Link to="/history">
                    See all transactions
                </Link>) : null
            }

        </>
    )
}

export default History