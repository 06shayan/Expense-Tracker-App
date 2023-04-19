import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import React, { useContext } from 'react';
import { ApplicationContext } from '../GlobalContext';
import ResetDialogueBox from './ResetDialogueBox';


function TransactionList() {
    const wrapperContainer = {
        maxHeight: '160px',
        overflow: 'auto',

    }
    const containerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '15px 0px',
        padding: '5px',
        color: 'white',
        borderRadius: '4px',
        fontWeight: '500'
    }
    const historyContainer = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const noHistory = {
        fontSize: '14px',
        textAlign: 'center',
        margin: '20px 0px',
        color: 'grey'
    }
    const EditStyles = {
        marginLeft: '7px',
        cursor: 'pointer',
    }
    const deleteStyles = {
        cursor: 'pointer',
    }

    const { transactionList, transactionDispatch, textDispatch, amountDispatch } = useContext(ApplicationContext)

    const handleDelete = (id) => {
        transactionDispatch({ type: 'delete-transaction', payload: { id: id } })
    }

    const handleEdit = (data) => {
        const description = data.item
        const amount = data.amount
        const id = data.id

        console.log(description, amount, id)

        // set row data to transaction form
        textDispatch({ type: 'description-input', payload: description })
        amountDispatch({ type: 'amount-input', payload: amount })

        // selected row delete
        transactionDispatch({ type: 'delete-transaction', payload: { id: id } })
    }

    return (
        <>
            <div style={historyContainer}>
                <h3>History</h3>
                <ResetDialogueBox />
            </div>
            <hr />

            <div>
                {
                    transactionList?.length === 0 ? <Box sx={noHistory}>NO HISTORY YET</Box> :
                        <div style={wrapperContainer}>
                            {
                                transactionList.map((listItem) => (
                                    <Box style={{ backgroundColor: listItem.backgroundColor }} sx={containerStyles} key={listItem.id} >
                                        <Box sx={{ fontSize: '15px' }}>{listItem.item}</Box>
                                        <Box sx={{ fontSize: '15px' }}>{listItem.amount}</Box>
                                        <Box sx={{ fontSize: '15px' }}>{listItem.date}</Box>
                                        <div>
                                            <DeleteForeverIcon style={deleteStyles} onClick={() => handleDelete(listItem.id)}></DeleteForeverIcon>
                                            <EditIcon style={EditStyles} onClick={() => handleEdit(listItem)} />
                                        </div>
                                    </Box>
                                ))
                            }
                        </div>

                }
            </div>
        </>
    )
}

export default TransactionList