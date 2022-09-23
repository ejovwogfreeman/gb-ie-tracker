import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import Todos from './components/Todos'
import Transaction from './components/Transaction';
import { useState, useEffect } from 'react'

function App() {

  const [transactions, setTransactions] = useState(()=> {
    const localData = localStorage.getItem('transactions')
    return localData ? JSON.parse(localData) : []
  })

 
  useEffect(()=> {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

 

  const addTransaction = (transaction) => {
    const id = Math.random()
    const date = new Date().toDateString() + ' | ' + new Date().toLocaleTimeString()
    const newTransaction = {id, date, ...transaction}
    const newTransactions = [newTransaction, ...transactions]
    setTransactions(newTransactions)
  } 

  const deleteTransaction = (id) => {
    const newTransactions = transactions.filter(transaction => transaction.id !== id)
    setTransactions(newTransactions)
  }

    const income = transactions.filter(x=> x.type === 'income').map(x=> x.amount).reduce((a,b)=> a+b, 0)
    const expense = transactions.filter(x=> x.type === 'expense').map(x=> x.amount).reduce((a,b)=> a+b, 0)
    const balance = income - expense

    const [show, setShow] = useState(false)

    const toggle = () => {
      setShow(!show)
    }


    return (
      <div className="App">
         <Navbar toggle={toggle} show={show}/>
         <Transaction income={income} expense={expense} balance={balance}/>
         {show ? <Form  addTransaction={addTransaction} /> : ''}
         <Todos transactions={transactions} deleteTransaction={deleteTransaction} /> 
      </div>
  );
}

export default App;
