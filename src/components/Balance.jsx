import React, { useContext } from 'react'
import { ApplicationContext } from '../GlobalContext'
import CountUp from 'react-countup';


function Balance() {
    const { transactionList } = useContext(ApplicationContext)

    const incomeTransactions = transactionList.filter(transaction => transaction.backgroundColor !== '#e80c1d');
    const expenseTransactions = transactionList.filter(transaction => transaction.backgroundColor === '#e80c1d');


    const totalIncome = incomeTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);
    const totalExpenses = expenseTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);

    const totalBalance = totalIncome - totalExpenses

    return (
        <>
            <h3>Current Balance</h3>
            <h4><CountUp end={totalBalance} duration={1.5} prefix="$" /></h4>
        </>
    )
}

export default Balance