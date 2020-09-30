import React from 'react'

const Scores = () => {
    return ( 
        <section className="scores-container">
            
            <section className="scores">
                <h2 className="scores__header">Upper</h2>
                <div className="scores__line scores__line--crossed">
                    <span>Ones</span>
                    <span>1 point per 1</span>
                </div>
                <div className="scores__line">
                    <span>Twos</span>
                    <span>2 points per 2</span>
                </div>
                <div className="scores__line" >
                    <span>Threes</span>
                    <span>3 points per 3</span>
                </div>
                <div className="scores__line">
                    <span>Fours</span>
                    <span>4 points per 4</span>
                </div>
                <div className="scores__line">
                    <span>Fives</span>
                    <span>5 points per 5</span>
                </div>
                <div className="scores__line">
                    <span>Sixes</span>
                    <span>6 points per 6</span>
                </div>
            </section>

            <section className="scores">
                <h2 className="scores__header">Lower</h2>
                <div className="scores__line">
                    <span>Three of Kind</span>
                    <span>Sum all dices if 3 are the same</span>
                </div>
                <div className="scores__line">
                    <span>Four of Kind</span>
                    <span>Sum all dices if 4 are the same</span>
                </div>
                <div className="scores__line">
                    <span>Full House</span>
                    <span>25 points for a full house</span>
                </div>
                <div className="scores__line">
                    <span>Small Straight</span>
                    <span>30 points for a small straight</span>
                </div>
                <div className="scores__line">
                    <span>Large Straight</span>
                    <span>40 points for a large straight</span>
                </div>
                <div className="scores__line">
                    <span>Yahtzee</span>
                    <span>50 points for yahtzee</span>
                </div>
                <div className="scores__line">
                    <span>Chance</span>
                    <span>Sum of all dice</span>
                </div>
            </section>

            <section className="scores">
                <h2 className="scores__header">TOTAL SCORE: <span>0</span></h2>
            </section>
        </section>
     );
}
 
export default Scores;