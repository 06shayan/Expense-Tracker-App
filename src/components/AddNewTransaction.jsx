import React, { useContext, useState } from 'react'
import { ApplicationContext } from '../GlobalContext'
import { pink } from '@mui/material/colors'
import { v4 as uuidv4 } from 'uuid';

function AddNewTransaction() {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [error, setError] = useState(false)
  const { transactionList, transactionDispatch } = useContext(ApplicationContext)
  const uuid = uuidv4()

  const handleDescription = (e) => {
    setText(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const selectedButton = e.target.id;


    if (text.length === 0 || amount === 0) {
      setError(true)
    }

    if (text && amount) {
      const data = { id: uuid, backgroundColor: selectedButton === 'income' ? '#59CE8F' : '#FF0000', item: text, amount: amount, date: new Date() };
      transactionDispatch({ type: 'add-transaction', payload: data });
      setText("");
      setAmount("");
    }


  }

  // console.log('amount', typeof (amount))

  return (
    <>
      {/* HEADING */}
      <h3>Add New Transcation</h3>



      {/* DESCRIPTION FIELD */}
      <div>
        <label>Description: </label>
        <input type='text' placeholder='Enter text ...' value={text} onChange={handleDescription} />
      </div>
      {error && text === '' ?
        <label id='validation'>This field can not be empty</label> : null}

      {/* AMOUNT FIELD */}
      <div>
        <label>Amount: </label>
        <input type='number' value={amount} onChange={handleAmount} />
      </div>
      {error && amount === '' ?
        <label id='validation'>This field can not be empty</label> : null}

      {/* BUTTON CONTAINER */}
      <div>
        <br/>
        <button className='add-inc' data-inline="true" id='income' onClick={handleFormSubmit}>Add Income</button>
        <button className='add-exp' data-inline="true" id='expense' onClick={handleFormSubmit} >Add Expense</button>

      </div>

    </>


  )
}

export default AddNewTransaction