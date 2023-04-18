import React, { createContext, useReducer, useState, useEffect } from "react";
import { TransactionReducer } from "../Reducers/TransactionReducer";
export const ApplicationContext = createContext();



export const ContextProvider = ({ children }) => {



    const list = [
        { id: 1, backgroundColor: '#59CE8F', item: 'item 1', amount: 200, date: new Date() },
        { id: 2, backgroundColor: '#59CE8F', item: 'item 2', amount: 400, date: new Date() },
        { id: 3, backgroundColor: '#59CE8F', item: 'item 3', amount: 600, date: new Date() },
    ]
    const [transactionList, transactionDispatch] = useReducer(TransactionReducer, [], () => {
        const storedList = localStorage.getItem('lists');
        return storedList ? JSON.parse(storedList) : list; });
    
    
        useEffect(() => {
            localStorage.setItem('lists', JSON.stringify(transactionList));
          }, [transactionList]);
        

    return (
        <ApplicationContext.Provider value={{
            transactionList,
            transactionDispatch,
        }}>
            {children}
        </ApplicationContext.Provider>

    )
}