import { Box, CardContent, Typography, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { ApplicationContext } from '../GlobalContext';



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
    const { transactionList } = useContext(ApplicationContext)

    const incomeTransactions = transactionList.filter(transaction => transaction.backgroundColor !== '#e80c1d');
    const expenseTransactions = transactionList.filter(transaction => transaction.backgroundColor === '#e80c1d');


    const totalIncome = incomeTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);
    const totalExpenses = expenseTransactions.reduce((total, transaction) => total + parseInt(transaction.amount), 0);


    return (
        <Container>
            <Paper elevation={3} sx={{ marginRight: '10px' }}>
                <CardContent sx={{ padding: '6px !important' }}>
                    <Typography sx={{ fontSize: '16px' }}><b>INCOME</b></Typography>
                    <Typography sx={{ color: '#36c94a', fontSize: '25px' }}>
                        <CountUp end={totalIncome} duration={1.5} prefix="$" />
                    </Typography>
                </CardContent>
            </Paper>
            <Paper elevation={3} sx={{ marginLeft: '10px' }}>
                <CardContent sx={{ padding: '6px !important' }}>
                    <Typography sx={{ fontSize: '16px' }}><b>EXPENSE</b></Typography>
                    <Typography sx={{ color: '#e80c1d', fontSize: '25px' }}>
                        <CountUp end={totalExpenses} duration={1.5} prefix="$" />
                    </Typography>
                </CardContent>
            </Paper>
        </Container>
    )
}

export default IncomeExpenseSection
