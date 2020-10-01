import React, { createContext, useState } from 'react'
import { getDices } from '../auxiliaryFunctions/auxiliary';

export const AppContext = createContext();

const RollingTime = 2000;

const AppContextProvider = (props) => {
    const [dices, setDices] = useState(getDices());
    const [rolls, setRolls] = useState(false);

    const handleRollDices = () => {
        setDices(getDices());
        toggleRolls();        
    }

    const toggleRolls = () => {
        setRolls(true);
        setTimeout(() => {
            setRolls(false);
        }, RollingTime);
    }

    return (  
        <AppContext.Provider value={{dices, rolls, onHandleRollDices: handleRollDices}}>
            {props.children}
        </AppContext.Provider>
    );

}
 
export default AppContextProvider;