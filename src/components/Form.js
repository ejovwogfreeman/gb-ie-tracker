import React from 'react'
import '../css/Form.css'
import Button from './Button'
import { useState } from 'react'

const Form = ({addTransaction}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('income')
    const [day, setDay] = useState('Sunday')

    const handleSubmit = (e) => {
        e.preventDefault()

        addTransaction({title, content, amount: Number(amount), type, day})

        setTitle('')
        setContent('')
        setAmount('')
    }


  return (
    <form onSubmit={handleSubmit}>
        <h3>Add Transaction Form</h3>
        <div>
            <input
                type="text"
                placeholder='Enter transaction title'
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
        <div>
            <textarea 
                type="text"
                placeholder='Enter transaction description'
                required
                value={content}
                onChange={(e)=>setContent(e.target.value)}
            />
        </div>
        <div>
            <input 
                type="number" 
                placeholder='Enter amount'
                required
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
            />
        </div>
        <div>
            <select
                required
                value={type}
                onChange={(e)=>setType(e.target.value)}
            >
                <option>income</option>
                <option>expense</option>
            </select>
        </div>
        <div>
            <select
                required
                value={day}
                onChange={(e)=>setDay(e.target.value)}
            >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
            </select>
        </div>
        <Button text="submit"></Button>
    </form>
  )
}

export default Form