import React, { createContext, useReducer } from "react";
import { TransactionReducer } from "../Reducers/TransactionReducer";

export const ApplicationContext = createContext();


export const ContextProvider = ({ children }) => {
    const list = [
        { item: 'item 1', amount: 200, date: new Date() },
        { item: 'item 2', amount: 400, date: new Date() },
        { item: 'item 3', amount: 600, date: new Date() },
    ]
    const [transactionList, transactionDispatch] = useReducer(TransactionReducer, list)

    return (
        <ApplicationContext.Provider value={{
            transactionList,
            transactionDispatch
        }}>
            {children}
        </ApplicationContext.Provider>

    )
}
