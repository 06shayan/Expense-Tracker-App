import React, { useContext, useState } from 'react'
import { Box, Card, CardContent, Typography, styled } from '@mui/material';
import { ApplicationContext } from '../GlobalContext'
import { common } from '@mui/material/colors';

const Container = styled(Box)`
display: flex;
& > div {
    flex: 1;
    padding: 0px;
    text-align: center;
    color: black;
}
`

function IncomeExpenseSection() {
    const { transactionList} = useContext(ApplicationContext)

    const incomeTransactions = transactionList.filter(transaction => transaction.backgroundColor !== '#FF0000');
    const expenseTransactions = transactionList.filter(transaction => transaction.backgroundColor === '#FF0000');
    
    
    const totalIncome = incomeTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);
    const totalExpenses = expenseTransactions.reduce((total, transaction) => total + parseInt(transaction.amount),0 );

    console.log('TOTAL INCOME: ', totalIncome)
        
    
    return (
        <Container>
            <Card sx={{ marginRight: '10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '20px' }}><b>Income</b></Typography>
                    <Typography sx={{ color: '#59CE8F', fontSize: '25px' }}>$ {totalIncome}</Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginLeft: '10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '20px' }}><b>Expense</b></Typography>
                    <Typography sx={{ color: '#FF1E00', fontSize: '25px' }}>$ {totalExpenses}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default IncomeExpenseSection
