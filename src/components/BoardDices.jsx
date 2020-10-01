import React, { useContext } from 'react'
import { AppContext } from '../contexts/appContext'
import Dice from './Dice'

const BoardDices = () => {
    const {dices} = useContext(AppContext);
    return (  
        <div className="board__dices">
            {
                dices.map((dice, index) => <Dice key={index} {...dice} />)
            }
        </div>
    );
}
 
export default BoardDices;