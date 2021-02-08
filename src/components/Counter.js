import React from "react";

{/* Better for using when working with STATEFUL components
 but can be used for stateless compoents also. */}
 const Counter = (props) => {

    let index = props.index;

        return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.changeScore(index,-1)}> - </button>
            <span className="counter-score">{ props.score }</span>
            <button className="counter-action increment" onClick={() => props.changeScore(index, +1)}> + </button> {/* lexicalless binding to auto bind */}
        </div>
        );
    
}

export default Counter;