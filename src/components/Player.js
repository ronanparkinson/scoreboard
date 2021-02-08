import React from 'react';
import Counter from "./Counter"

{/* Better for using when working with STATELESS components */}
const Player = (props) => {
    return ( 
        <div className = "player">
            <span className="player-name">
                <button className="remove-player" onClick= { () => props.removePlayer(props.id) }>✖</button>
                { props.name }
            </span>
            <Counter 
            score={props.score}
            index={props.index}
            changeScore={props.changeScore}
            /> {/* composition */}
        </div>
    );
}

export default Player;