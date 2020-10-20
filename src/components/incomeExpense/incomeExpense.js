import React from 'react';


const IncomeExpense = ({transactions}) => {

  let income = transactions.map(trans => parseInt(trans.ammount)).filter(ammount => ammount > 0).reduce((a,b)=> a+b,0)
  let expense = transactions.map(trans => parseInt(trans.ammount)).filter(ammount => ammount < 0).reduce((a,b)=> a-b,0)

  let balance = income-expense    
  

    return (
      <>
      <h1>Your Balance : ${balance}</h1>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">${expense}</p>
        </div>
      </div>
        </>
    )
}

export default IncomeExpense