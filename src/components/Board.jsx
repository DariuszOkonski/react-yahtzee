import React from 'react'

const Board = () => {
    return ( 
        <section className="board">
            <div className="board__header">
                <h1 className="header">Yahtzee!!!</h1>
            </div>

            <div className="board__dices">
                <div className="dice">1</div>
                <div className="dice">2</div>
                <div className="dice">3</div>
                <div className="dice">4</div>
                <div className="dice">5</div>
            </div>

            <div className="board__button">
                <button>2 Rolls Left</button>
            </div>
        </section>
     );
}
 
export default Board;