import React from "react";
import IncomeExpense from '../../components/incomeExpense/incomeExpense'
import History from '../../components/history/history'
import NewTransaction from '../../components/newTransaction/newTransaction'
const HomePage = ({transactions,setTransactions}) =>  {

  
 return (
  <div className="container">
  <h1>Expense Tracker</h1>
  <IncomeExpense  transactions={transactions} />
  <History transactions={transactions} setTransactions={setTransactions} />
  <NewTransaction transactions={transactions} setTransactions={setTransactions} />
  </div>
)};

export default HomePage;
