import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import React from 'react'
import { useState, useContext } from "react";
import { ApplicationContext } from '../GlobalContext';


function ResetDialogueBox() {

  const [open, setOpen] = useState(false)
  const { transactionList, transactionDispatch } = useContext(ApplicationContext)

  const handleReset = () => {
    transactionDispatch({ type: 'reset' })
    setOpen(false)
  }

  return (
    <>
      <button className="btn-reset" onClick={() => setOpen(true)}>Reset</button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}>
        <DialogTitle id='dialog-title'>Reset History?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>Are you sure you want to reset your transaction list? You will not be able to go back to your data.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleReset}>Yes</button>
          <button autoFocus onClick={() => setOpen(false)}>No</button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ResetDialogueBox