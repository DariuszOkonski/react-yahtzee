import React, { useContext } from 'react'
import { translateNumberToString } from '../auxiliaryFunctions/auxiliary';
import { AppContext } from '../contexts/appContext';

const Dice = ({id, active, number}) => {
    const { rolls } = useContext(AppContext);
    const diceNumber = translateNumberToString(number);

    return ( 
        <div className={`dice ${active && (rolls && 'dice-rolling')} ${!active && 'dice-freeze'}`}>
            <i className={`fas fa-dice-${diceNumber}`}></i>
        </div>
     );
}
 
export default Dice;