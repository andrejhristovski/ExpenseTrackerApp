import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage'
import HistoryPage from './pages/historypage/historypage'


function App() {
  const [transactions,setTransactions] = useState([])
  return (

    <div className="App">
   <Header />
   <Switch>
   <Route
   exact path='/'
  render={() => (
    <HomePage transactions={transactions} setTransactions = {setTransactions} />
  )}  
/>
<Route
   exact path='/history'
  render={() => (
    <HistoryPage transactions={transactions} setTransactions = {setTransactions} />
  )}  
/>
   </Switch>
   
  
    </div>
  );
}

export default App;
