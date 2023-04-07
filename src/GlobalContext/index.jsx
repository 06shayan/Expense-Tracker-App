import React, { createContext } from "react";

export const ApplicationContext = createContext();


export const ContextProvider = ({ children }) => {
    return (
        <ApplicationContext.Provider value={'hello'}>
            {children}
        </ApplicationContext.Provider>

    )
}