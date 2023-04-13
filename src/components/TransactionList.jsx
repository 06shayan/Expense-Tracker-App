import React, { useContext } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { ApplicationContext } from '../GlobalContext';

const containerStyles = { display: 'flex', background: '#59CE8F', justifyContent: 'space-between', margin: '20px 0px', padding: '10px', color: 'white', fontSize: '20px' }



function TransactionList() {
    const { transactionList } = useContext(ApplicationContext)
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