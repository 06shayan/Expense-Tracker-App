import React from 'react'
import {Box, Card, CardContent, Typography, styled} from '@mui/material';

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
        <Card>
            <CardContent>
                <Typography sx={{fontSize: '20px'}}> Income</Typography>
                <Typography sx={{color: 'green', fontSize:'20px'}}>$ 100</Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Typography sx={{fontSize: '20px'}}>Expense</Typography>
                <Typography sx={{color: 'red',fontSize:'20px'}}>$ 50</Typography> 
            </CardContent>
        </Card>
       </Container>
    )
}

export default IncomeExpenseSection
 