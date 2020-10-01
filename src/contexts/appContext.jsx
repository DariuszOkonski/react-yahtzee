import React, { createContext, useState } from 'react'
import { getDices, getInitialDices } from '../auxiliaryFunctions/auxiliary';

export const AppContext = createContext();

const RollingTime = 2000;

const AppContextProvider = (props) => {
    const [dices, setDices] = useState(getInitialDices());
    const [rolls, setRolls] = useState(false);

    const handleRollDices = () => {
        toggleRolls();        
    }

    const handleToggleDice = (id) => {
        const newDices = [...dices];
        const dice = newDices.find(dice => dice.id === id);
        const index = newDices.indexOf(dice);       
        newDices[index].active = !newDices[index].active; 

        setDices(newDices);
    }
    
    const toggleRolls = () => {
        setRolls(true);
        setTimeout(() => {
            const tempDices = [...dices];
            const newDices = getDices(tempDices);

            setDices(newDices);
            // setDices(getInitialDices());
            setRolls(false);
        }, RollingTime);
    }

    return (  
        <AppContext.Provider value={{dices, rolls, onHandleRollDices: handleRollDices, onHandleToggleDice: handleToggleDice}}>
            {props.children}
        </AppContext.Provider>
    );

}
 
export default AppContextProvider;