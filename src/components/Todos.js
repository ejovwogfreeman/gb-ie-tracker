import React from 'react'
import Todo from './Todo'

const Todos = ({transactions, deleteTransaction}) => {
  return (
    <div style={{marginTop: '20px'}}>
      <h3  style={{textAlign: 'center', marginBottom: '10px'}}>Transaction History</h3>
      {transactions.length < 1 ? 'You have no transaction' :
      <>{transactions.map(transaction=> <Todo key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>)}</>}
    </div>
  )
}

export default Todos