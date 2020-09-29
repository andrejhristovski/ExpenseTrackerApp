import React, { useState } from "react";
import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button.component'

const NewTransaction = ({transactions,setTransactions}) => {
    const [inputText,setInputText] = useState("")
    const [inputAmount,setInputAmount] = useState(0)

    const inputTextHandler  = (e) => {    
        setInputText(e.target.value)
      };
      const inputAmountHandler  = (e) => {    
        setInputAmount(e.target.value)
      };

      const submitHandler = e => {   
        e.preventDefault()
        if(inputText !== "" && (inputAmount !== 0 && inputAmount !== "") ) {
            setTransactions([
                {text: inputText,ammount: inputAmount, id: Math.random() * 1000}, ...transactions
              ]);
              console.log(transactions);
              
            }
            setInputText("")
            setInputAmount("")
        }
       
        
    return (
        <>
        <form>
        <h2>Add New Transaction</h2>
        <hr></hr>
        
        <FormInput type="text" value={inputText} label="Text" onChange={inputTextHandler} required />
        
        <FormInput type="number" value={inputAmount !== 0 ? inputAmount : ""}  label="Amount"  onChange={inputAmountHandler} required   />
        <CustomButton onClick={submitHandler} type="submit">Submit Transaction</CustomButton>
        </form>
       
        </>
    )
}

export default NewTransaction