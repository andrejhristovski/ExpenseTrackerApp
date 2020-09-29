import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component'
import Balance from './components/balance/balance'
import IncomeExpense from './components/incomeExpense/incomeExpense'
import History from './components/history/history'
import NewTransaction from './components/newTransaction/newTransaction'


function App() {

  const [balance,setBalance] = useState(0)
  const [transactions,setTransactions] = useState([])
  const [ammounts,setAmmounts] = useState([])


  
 
  
  
  return (
    <div className="App">
   <Header />
   <div className="container">
   <h1>Expense Tracker</h1>
   <Balance balance={balance} />
   <IncomeExpense setBalance={setBalance} ammounts={ammounts} />
   <History transactions={transactions} />
   <NewTransaction ammounts={ammounts} setAmmounts={setAmmounts} transactions={transactions} setTransactions={setTransactions} />
   </div>
  
    </div>
  );
}

export default App;
