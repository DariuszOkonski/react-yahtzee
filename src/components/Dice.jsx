import React, { useContext } from 'react'
import { translateNumberToString } from '../auxiliaryFunctions/auxiliary';
import { AppContext } from '../contexts/appContext';

const Dice = ({dice}) => {
    const { rolls } = useContext(AppContext);
    const diceNumber = translateNumberToString(dice);

    return ( 
        <div className={`dice ${rolls && 'dice-rolling'}`}>
            <i className={`fas fa-dice-${diceNumber}`}></i>
        </div>
     );
}
 
export default Dice;