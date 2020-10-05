import React, { useContext } from 'react'
import { displayNumberOfDicesOnButton } from '../auxiliaryFunctions/auxiliary';
import { AppContext } from '../contexts/appContext';

const BoardButton = () => {
    const { onHandleRollDices, rolls } = useContext(AppContext);

    return (  
        <div className="board__button">
            <button 
                disabled={rolls}
                className={`button ${rolls && 'button-disabled'}`}
                onClick={onHandleRollDices}
            >Roll Dice</button>
        </div>
    );
}
 
export default BoardButton;