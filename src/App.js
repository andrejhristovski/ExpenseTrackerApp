import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage'
import HistoryPage from './pages/historypage/historypage'
import { db, tCollection } from './firebase'
import { collection, getDocs, addDocs } from "firebase/firestore";

function App() {
  const [transactions, setTransactions] = useState([])
  useEffect(() => {
    getDocs(tCollection)
      .then((snapshot) => {
        let transaction = []
        snapshot.docs.forEach((doc) => {
          transaction.push({ ...doc.data(), id: doc.id })
        })
        console.log(transaction);
        setTransactions(transaction)
      })
  }, [])

  let a = async () => {
    const querySnapshot = await getDocs(collection(db, "transactions"));
    querySnapshot.forEach((doc) => {
      console.log(doc);
      console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  try {

  } catch (error) {

  }

  return (

    <div className="App">
      <Header />
      <Switch>
        <Route
          exact path='/'
          render={() => (
            <HomePage transactions={transactions} setTransactions={setTransactions} />
          )}
        />
        <Route
          exact path='/history'
          render={() => (
            <HistoryPage transactions={transactions} setTransactions={setTransactions} />
          )}
        />
      </Switch>


    </div>
  );
}

export default App;
