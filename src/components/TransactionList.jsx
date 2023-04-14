import React, { useContext } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import AddNewTransaction from './AddNewTransaction';
import { ApplicationContext } from '../GlobalContext';

import { selectClasses } from '@mui/material';





function TransactionList() {
    // const { transactionList } = useContext(ApplicationContext)
    const { transactionList, transactionDispatch } = useContext(ApplicationContext)
    const { clearTransaction } = useContext(ApplicationContext)
    debugger;
    const containerStyles = {
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          margin: '20px 0px', 
                          padding: '10px', 
                          color: 'white', 
                          fontSize: '20px' }

    const handleReset = () => {
        clearTransaction(transactionList);
    }
   
    
    return (
        <>
        <h3>History</h3>
        <button className='btn-reset' onClick={handleReset}>reset</button>
            {
                transactionList.map((listItem) => ( 
                    <Box style= {{backgroundColor: listItem.backgroundColor}} sx={containerStyles} key={listItem.id} >
                        <div>{listItem.item}</div>
                        <div>{listItem.amount}</div>
                        {/* <div>{listItem.date.toDateString()}</div> */}
                        <div>
                            <button onClick={() => transactionDispatch({ type: 'delete-transaction', payload: {id: listItem.id } })}>x</button>
                            {/* <DeleteForeverIcon onClick={() => transactionDispatch({ type: 'delete-transaction', payload: {id: uuidv4()} })}></DeleteForeverIcon> */}
                            <EditIcon />
                        </div>
                    </Box>
                    
                    
))
                
            }
            
        </>
    )
}

export default TransactionList