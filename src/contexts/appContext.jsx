import React, { createContext, useState } from 'react'
import { getDices } from '../auxiliaryFunctions/auxiliary';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [dices, setDices] = useState(getDices());

    const handleRollDices = () => {
        setDices(getDices());
    }

    return (  
        <AppContext.Provider value={{dices, onHandleRollDices: handleRollDices}}>
            {props.children}
        </AppContext.Provider>
    );
}
 
export default AppContextProvider;