import React, {useState} from 'react'

function AddNewTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    return (
        <>
          <form>
            <h3>Add New Transcation:</h3>
            <label>Text: </label>
            <input type='text' placeholder='Enter text ...' value={text} onChange={e => setText(e.target.value)}/>
            <br/>
            <label>Amount: </label>
            <input type='number' value={amount} onChange={e => setText(e.target.value)}/>
            <br/>
            <button className='add-inc' data-inline="true">Add Income</button>
            <button className='add-exp' data-inline="true">Add Expense</button>
          </form>
        </>
    )
}

export default AddNewTransaction