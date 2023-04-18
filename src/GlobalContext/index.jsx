import React, { createContext, useReducer, useState, useEffect } from "react";
import { TransactionReducer } from "../Reducers/TransactionReducer";
import { DescriptionReducer } from "../Reducers/descriptionReducer";
import { AmountReducer } from "../Reducers/amountReducer";

export const ApplicationContext = createContext();



export const ContextProvider = ({ children }) => {
    const [text, textDispatch] = useReducer(DescriptionReducer, '')
    const [amount, amountDispatch] = useReducer(AmountReducer, '')

    const [transactionList, transactionDispatch] = useReducer(TransactionReducer, [], () => {
        const storedList = localStorage.getItem('lists');
        return storedList ? JSON.parse(storedList) : [];
    });


    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(transactionList));
    }, [transactionList]);


    return (
        <ApplicationContext.Provider value={{
            transactionList,
            transactionDispatch,
            text,
            textDispatch,
            amount,
            amountDispatch
        }}>
            {children}
        </ApplicationContext.Provider>

    )
}