import React, { useContext } from 'react'
import { AppContext } from '../contexts/appContext';

const BoardButton = () => {
    const { onHandleRollDices, rolls } = useContext(AppContext);

    return (  
        <div className="board__button">
            <button 
                disabled={rolls}
                className={`button ${rolls && 'button-disabled'}`}
                onClick={onHandleRollDices}
            >2 Rolls Left</button>
        </div>
    );
}
 
export default BoardButton;