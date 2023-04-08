import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';

const containerStyles = { display: 'flex', background: '#3fbf6e', justifyContent: 'space-between', margin: '20px 0px', padding: '10px', color: 'white' }



function TransactionList() {
    const transactionList = [
        { item: 'item 1', amount: 200, date: new Date() },
        { item: 'item 2', amount: 400, date: new Date() },
        { item: 'item 3', amount: 600, date: new Date() },
    ]
    return (
        <>
            {
                transactionList.map((listItem) => (
                    <Box sx={containerStyles} key={uuidv4()}>
                        <div>{listItem.item}</div>
                        <div>{listItem.amount}</div>
                        <div>{listItem.date.toLocaleDateString()}</div>
                        <div>
                            <DeleteForeverIcon />
                            <EditIcon />
                        </div>
                    </Box>
                ))
            }
        </>
    )
}

export default TransactionList