import React, { useContext } from 'react'
import { AppContext } from '../contexts/appContext';

const BoardButton = () => {
    const { onHandleRollDices, onHandleRestartDices, rolls, numberOfRollsLeft } = useContext(AppContext);

    return (  
        <div className="board__button">
            <button 
                disabled={rolls}
                className={`button ${rolls && 'button-disabled'}`}
                onClick={onHandleRollDices}
            > {numberOfRollsLeft} {numberOfRollsLeft === 1 ? 'Roll' : 'Rolls'} left</button>
            
            <button className="button" onClick={onHandleRestartDices}>Restart</button>
        </div>
    );
}
 
export default BoardButton;