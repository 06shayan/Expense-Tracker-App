import React, { useContext, useState } from 'react'
import { ApplicationContext } from '../GlobalContext'
import { v4 as uuidv4 } from 'uuid';

function AddNewTransaction() {

  const [error, setError] = useState(false)
  const { transactionDispatch, text, textDispatch, amount, amountDispatch } = useContext(ApplicationContext)
  const uuid = uuidv4()

  const handleDescription = (e) => {
    textDispatch({ type: 'description-input', payload: e.target.value })
  }

  const handleAmount = (e) => {
    amountDispatch({ type: 'amount-input', payload: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const selectedButton = e.target.id;


    if (text.length === 0 || amount === 0) {
      setError(true)
    }

    if (text && amount) {
      const data = { id: uuid, backgroundColor: selectedButton === 'income' ? '#59CE8F' : '#FF0000', item: text, amount: amount, date: new Date().toDateString() };
      transactionDispatch({ type: 'add-transaction', payload: data });
      textDispatch({ type: 'description-input', payload: "" })
      amountDispatch({ type: 'amount-input', payload: "" })
    }
  }



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
        <br />
        <button className='add-inc' data-inline="true" id='income' onClick={handleFormSubmit}>Add Income</button>
        <button className='add-exp' data-inline="true" id='expense' onClick={handleFormSubmit} >Add Expense</button>

      </div>

    </>


  )
}

export default AddNewTransaction