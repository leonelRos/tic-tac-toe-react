import React, { Component } from "react";
import Square from "./Square";
import "../components/board.css";

class Board extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     XisNext: true,
  //   };
  // }
  //important event handler
  // handleClick(i) {
  //   const squares = this.state.squares.slice();
  //   if(calculateWinner(squares) || squares[i]){
  //     return;
  //   }
  //   squares[i] = this.state.XisNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     XisNext : !this.state.XisNext,
  //    });
  // }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares)
    // let status;
    // if(winner) {
    //   status = "the winner is " + winner;
    // } else {
    //   status = "It's " + (this.state.XisNext ? "X" : "O") + " turn:"
    // }
    // const status =  "It's " + (this.state.XisNext ? "X" : "O") + " turn:";

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// function calculateWinner(squares){
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for(let i = 0; i < lines.length; i++){
//     const [a,b,c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//       return squares[a]
//     }
//   }
//   return null;
// }

export default Board;