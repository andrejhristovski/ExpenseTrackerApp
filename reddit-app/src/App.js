import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component'
import IncomeExpense from './components/incomeExpense/incomeExpense'
import History from './components/history/history'
import NewTransaction from './components/newTransaction/newTransaction'


function App() {

  const [transactions,setTransactions] = useState([])
  


  
 
  
  
  return (

    <div className="App">
   <Header />
   <div className="container">
   <h1>Expense Tracker</h1>
   <IncomeExpense  transactions={transactions} />
   <History transactions={transactions} setTransactions={setTransactions} />
   <NewTransaction transactions={transactions} setTransactions={setTransactions} />
   </div>
  
    </div>
  );
}

export default App;
