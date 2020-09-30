import React from 'react'

const Board = () => {
    return ( 
        <section className="board">
            <div className="board__header">
                <h1 className="header">Yahtzee!!!</h1>
            </div>

            <div className="board__dices">
                <div className="dice">
                    <i className="fas fa-dice-one"></i>
                </div>
                <div className="dice">
                    <i className="fas fa-dice-two"></i>
                </div>
                <div className="dice">
                    <i className="fas fa-dice-three"></i>
                </div>
                <div className="dice">
                    <i className="fas fa-dice-four"></i>
                </div>
                <div className="dice">
                    <i className="fas fa-dice-six"></i>
                </div>
            </div>

            <div className="board__button">
                <button className="button">2 Rolls Left</button>
            </div>
        </section>
     );
}
 
export default Board;