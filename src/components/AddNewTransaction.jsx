import React, { useState } from 'react'

function AddNewTransaction({ handleSubmit }) {

  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const handleDescription = (e) => {
    setText(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const selectedButton = e.target.id
    const data = { item: text, amount: amount, date: new Date() }
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

      {/* AMOUNT FIELD */}
      <div>
        <label>Amount: </label>
        <input type='number' value={amount} onChange={handleAmount} />
      </div>

      {/* BUTTON CONTAINER */}
      <div>
        <button className='add-inc' data-inline="true" id='income' onClick={handleFormSubmit}>Add Income</button>
        <button className='add-exp' data-inline="true" id='expense' onClick={handleFormSubmit}>Add Expense</button>
      </div>
    </>
  )
}

export default AddNewTransaction