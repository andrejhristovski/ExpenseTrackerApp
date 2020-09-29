import React from 'react';


const IncomeExpense = ({ammounts,setBalance}) => {

  let income = ammounts.filter(ammount => ammount > 0).reduce((a,b)=> a+b,0)
  let expense = ammounts.filter(ammount => ammount < 0).reduce((a,b)=> a-b,0)
  setBalance(income-expense)

    return (
        
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
        
    )
}

export default IncomeExpense