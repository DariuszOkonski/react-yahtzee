import React from 'react'
import BoardButton from './BoardButton';
import BoardDices from './BoardDices';
import BoardHeader from './BoardHeader';

const Board = () => {
    return ( 
        <section className="board">
            <BoardHeader />
            <BoardDices />
            <BoardButton />
        </section>
     );
}
 
export default Board;