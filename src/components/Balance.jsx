import React, { useContext } from 'react'
import { ApplicationContext } from '../GlobalContext'

function Balance() {
    const { transactionList } = useContext(ApplicationContext)
    console.log('transactionList', transactionList)
    return (
        <>
            <h3>Balance: <span>$ 0.00</span></h3>

        </>
    )
}

export default Balance