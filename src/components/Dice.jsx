import React, { useContext } from 'react'
import { translateNumberToString } from '../auxiliaryFunctions/auxiliary';
import { AppContext } from '../contexts/appContext';

const Dice = ({id, active, number}) => {
    const { rolls, onHandleToggleDice } = useContext(AppContext);
    const diceNumber = translateNumberToString(number);

    const handleToggleDice = () => {
        if(!rolls) {
            onHandleToggleDice(id);
        }
    }

    return ( 
        <div  
            className={`dice ${active && (rolls && 'dice-rolling')} ${!active && 'dice-freeze'}`}
            onClick={handleToggleDice}
        >
            <i className={`fas fa-dice-${diceNumber}`}></i>
        </div>
     );
}
 
export default Dice;