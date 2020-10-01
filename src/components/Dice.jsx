import React from 'react'
import { translateNumberToString } from '../auxiliaryFunctions/auxiliary';

const Dice = ({dice}) => {
    const diceNumber = translateNumberToString(dice);

    return ( 
        <div className="dice">
            <i className={`fas fa-dice-${diceNumber}`}></i>
        </div>
     );
}
 
export default Dice;