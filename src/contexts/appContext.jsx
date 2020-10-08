import React, { createContext, useState } from 'react'
import { freezeAllDices, getDices, getInitialDices } from '../auxiliaryFunctions/auxiliary';

export const AppContext = createContext();

const RollingTime = 2000;
const NumberOfRollsAtOneGame = 3;

const AppContextProvider = (props) => {
    const [dices, setDices] = useState(getInitialDices());
    const [rolls, setRolls] = useState(false);
    const [numberOfRollsLeft, setNumberOfRollsLeft] = useState(NumberOfRollsAtOneGame);

    const handleRollDices = () => {        
        if(numberOfRollsLeft === 0) {
            setRolls(true);
        } else {
            setNumberOfRollsLeft(numberOfRollsLeft - 1);
        }

        toggleRolls();        
    }

    const handleRestartDices = () => {
        setRolls(false);
        setDices(getInitialDices());
        setNumberOfRollsLeft(NumberOfRollsAtOneGame);
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

            if(numberOfRollsLeft === 1) {
                setRolls(true);
                setDices(freezeAllDices(dices));
            } else {
                setRolls(false);
            }
        }, RollingTime);
    }
 
    return (  
        <AppContext.Provider value={{
            dices, 
            rolls, 
            numberOfRollsLeft, 
            onHandleRollDices: handleRollDices, 
            onHandleToggleDice: handleToggleDice,
            onHandleRestartDices: handleRestartDices
        }}>
            {props.children}
        </AppContext.Provider>
    );

}
 
export default AppContextProvider;