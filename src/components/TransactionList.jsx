import React, { useContext } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import AddNewTransaction from './AddNewTransaction';
import { ApplicationContext } from '../GlobalContext';
import { selectClasses } from '@mui/material';




function TransactionList() {

    const { transactionList, transactionDispatch } = useContext(ApplicationContext)
    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px 0px',
        padding: '10px',
        color: 'white',
        fontSize: '20px'
    }



    const handleDelete = (id) => {
        transactionDispatch({ type: 'delete-transaction', payload: { id: id } })
    }
    // const handleEdit = (id) => {
    //     transactionDispatch({ type: 'edit-transaction', payload: { id: id } })
    // }

    // const handleEdit=()=>{
    //     {decription:'kkk',amount:98,date:283728}
    //     dispatchText()
    //     setAmount

    //     transactionDispatch({ type: 'delete-transaction', payload: { id: id } })

    // }


    return (
        <>
            <h3>History</h3>
            {
                transactionList.map((listItem) => (
                    <Box style={{ backgroundColor: listItem.backgroundColor }} sx={containerStyles} key={listItem.id} >
                        <div>{listItem.item}</div>
                        <div>{listItem.amount}</div>
                        {/* <div>{listItem.date.toDateString()}</div> */}
                        <div>
                            <DeleteForeverIcon onClick={() => handleDelete(listItem.id)}></DeleteForeverIcon>
                            <EditIcon/>
                        </div>
                    </Box>
                ))

            }

        </>
    )
}

export default TransactionList