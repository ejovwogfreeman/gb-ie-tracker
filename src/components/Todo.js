import React from 'react'
import '../css/Todo.css'
import { FaTimes } from 'react-icons/fa' 

const Todo = ({transaction, deleteTransaction}) => {
  return (
    <div className='todo'>
      <div><h3>{transaction.title}</h3> <FaTimes className='icon' onClick={()=>deleteTransaction(transaction.id)}/></div>
      <p>{transaction.content}</p>
      <small>Transaction amount: <span style={{color: transaction.type === 'income' ? 'green' : 'red'}}>{transaction.type === 'income' ? '+' : '-'}₦{transaction.amount}</span></small> <br />
      <small>Transaction type: {transaction.type}</small> <br />
      <small>To be completed on {transaction.day}</small> <br />
      <small>Posted on {transaction.date}</small>
    </div>
  )
}

export default Todo