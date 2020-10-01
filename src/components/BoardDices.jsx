import React from 'react'
import Dice from './Dice'

const BoardDices = () => {
    const dices = [1,2,4,4,5]

    return (  
        <div className="board__dices">
            {
                dices.map((dice, index) => <Dice key={index} dice={dice} />)
            }
        </div>
    );
}
 
export default BoardDices;