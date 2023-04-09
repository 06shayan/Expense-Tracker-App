import React, { createContext } from "react";

export const ApplicationContext = createContext();


export const ContextProvider = ({ children }) => {

    const transactionList = [
        { item: 'item 1', amount: 200, date: new Date() },
        { item: 'item 2', amount: 400, date: new Date() },
        { item: 'item 3', amount: 600, date: new Date() },
    ]

    return (
        <ApplicationContext.Provider value={transactionList}>
            {children}
        </ApplicationContext.Provider>

    )
}