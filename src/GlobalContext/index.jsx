import React, { createContext, useReducer, useState } from "react";
import { TransactionReducer } from "../Reducers/TransactionReducer";

export const ApplicationContext = createContext();


export const ContextProvider = ({ children }) => {
    const list = [
        { id: 1, backgroundColor: '#59CE8F', item: 'item 1', amount: 200, date: new Date() },
        { id: 2, backgroundColor: '#59CE8F', item: 'item 2', amount: 400, date: new Date() },
        { id: 3, backgroundColor: '#59CE8F', item: 'item 3', amount: 600, date: new Date() },
    ]
    const [transactionList, transactionDispatch] = useReducer(TransactionReducer, list)
    function clearTransaction (data) {
        transactionDispatch ({
            type: 'reset',
            payload: data
        })
    }

    return (
        <ApplicationContext.Provider value={{
            transactionList,
            transactionDispatch,
            clearTransaction
        }}>
            {children}
        </ApplicationContext.Provider>

    )
}