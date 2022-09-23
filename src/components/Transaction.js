import React from 'react'
import '../css/Transaction.css'

const Transaction = ({income, expense, balance}) => {
  return (
    <div className='t-container'>
        <div className='balance'>
            <p>Balance(₦)</p>
            <h3>{balance < 1 ? '' : '+'}{balance}</h3>
        </div>
        <div className='ie'>
            <div className='income'>
              <p>Income(₦)</p>
              <h3>{income < 1 ? '' : '+'}{income}</h3>
            </div>
            <div className='expense'>
              <p>Expense(₦)</p>
              <h3>{expense < 1 ? '' : '-'}{expense}</h3>
            </div>
        </div>
    </div>
  )
}

export default Transaction