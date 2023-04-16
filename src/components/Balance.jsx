import React, { useContext } from 'react'
import { ApplicationContext } from '../GlobalContext'

function Balance() {
    const { transactionList} = useContext(ApplicationContext)

    const incomeTransactions = transactionList.filter(transaction => transaction.backgroundColor !== '#FF0000');
    const expenseTransactions = transactionList.filter(transaction => transaction.backgroundColor === '#FF0000');
    
    
    const totalIncome = incomeTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);
    const totalExpenses = expenseTransactions.reduce((total, transaction) => total + parseInt(transaction.amount),0 );

    const totalBalance = totalIncome - totalExpenses
    
    return (
        <>
            <h3>Balance: <span>$ {totalBalance }</span></h3>

        </>
    )
}

export default Balance