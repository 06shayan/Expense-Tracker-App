import React from 'react'
import { Box, Card, CardContent, Typography, styled } from '@mui/material';

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
    return (
        <Container>
            <Card sx={{ marginRight: '10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '20px' }}><b>Income</b></Typography>
                    <Typography sx={{ color: '#59CE8F', fontSize: '25px' }}>$ 100</Typography>
                </CardContent>
            </Card>
            <Card sx={{ marginLeft: '10px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: '20px' }}><b>Expense</b></Typography>
                    <Typography sx={{ color: '#FF1E00', fontSize: '25px' }}>$ 50</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default IncomeExpenseSection
