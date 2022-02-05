import React from "react";
import IncomeExpense from '../../components/incomeExpense/incomeExpense'
import Transaction from '../../components/transaction/transaction'

const HistoryPage = ({ transactions, setTransactions }) => {

    return (
        <div className="container">
            <h1>All Transactions</h1>
            <IncomeExpense transactions={transactions} />
            {transactions.map(transaction => (
                <Transaction key={transaction.id} text={transaction.name} ammount={transaction.ammount} key={transaction.id} transaction={transaction} transactions={transactions} setTransactions={setTransactions} />
            ))}
        </div>
    )
}

export default HistoryPage