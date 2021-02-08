import React, {Component} from "react";
import Header from "./Header"
import Player from "./Player"

class App extends Component{

    state = {
        players: [
            {
                name: "Guil",
                score: 0,
                id: 1
            },
            {
                name: "Treasure",
                score: 0,
                id: 2
            },
            {
                name: "Ashley",
                score: 0,
                id: 3
            },
            {
                name: "James",
                score: 0,
                id: 4
            }
        ]
    }

    handleScoreChange = (index, delta) => {
        {/* lets the render method know that the state has changed
        and should be re-rendered */}
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handlerRemovePlayer = (id) => {
        this.setState( prevState =>{
            return {
                players: prevState.players.filter( p => p.id !== id)
            }; 
        });
    }
 
    render() {
        return( 
            <div className="scoreboard">
                <Header title="Scoreboard" 
                totalPlayers={this.state.players.length} />
    
                {/* Players list */}
                {this.state.players.map( (player, index)  =>
                    <Player 
                        name={player.name}
                        id={player.id}
                        score={player.score}
                        key={player.id.toString()}
                        index={index}
                        changeScore={this.handleScoreChange}
                        removePlayer={this.handlerRemovePlayer}
                    />
                )}
            </div>
        );
    }
}

export default App;