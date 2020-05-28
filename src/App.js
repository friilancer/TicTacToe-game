import * as React from 'react';
import './App.css';

const Square = (props) => {     
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

const Board = (props) => {

const renderSquare = (i) => {
return (
  <Square 
  value={props.squares[i]} 
  onClick={()=>props.onClick(i)}
  className = {props.winner == '' ? '' : (props.winner.every(x => x==i)) ? 'bold' : '' }
   />
);
}

return (
<div>
    <div className="status">{props.status}</div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
</div>   
);
}

const Game = () => {

const [history, setHistory] = React.useState([{squares: Array(9).fill(null)}]);
const [xIsNext, setXIsNext] = React.useState(true);
const [stepNumber, setStepNumber] = React.useState(0);

const grid = [
  "col:1, row:1","col:2, row:1","col:3, row:1",
  "col:1, row:2","col:2, row:2","col:3, row:2",
  "col:1, row:3","col:2, row:3","col:3, row:3"
]

const handleClick = (i) => {
let temp = history.slice(0, stepNumber + 1);
let current = temp[temp.length - 1];
let squares = current.squares.slice();
let winner = calculateWinner(current.squares);
if(winner || squares[i]){
  return;
}
 
squares[i] = xIsNext ? `X` : `O`;
setHistory(temp.concat([{
  squares:squares
}]));
setXIsNext(!xIsNext);
setStepNumber(temp.length);

}

const jumpTo = (step) => {
setStepNumber(step);
setXIsNext((step % 2) === 0);
}

const current = history[stepNumber];
const winner = calculateWinner(current.squares);
const status = (winner, arr) => {
  let completed = arr.every(x => x!=null);
  if(winner || completed) {
    if(winner){
      return `Winner ${winner.winner}`
    }
    return `Draw`
  }
  else {
    return `Next player: ${xIsNext ? `X` : `O`}`;
    }
};

const moves =  history.map((step, move) => {
  let gridPosition;
    history[move].squares.map((x, index)=>{
      if(move!=0 && history[move-1].squares[index]!=x){gridPosition=index;}
    });
const desc = move ? `Go to move #${move} at ${grid[gridPosition]}`  : `Go to game start`;     
return(
  <li key={move}>
    <button className={move == stepNumber ? 'bold' : ''} onClick={() => jumpTo(move)}>{desc}</button>
  </li>
);

}); 



return (
<div className="game">
    <div className="game-board">
      <Board 
      squares = {current.squares}
      onClick = {(i) => {handleClick(i)}}
      status = {status(winner, current.squares)}
      winner = {winner ? winner.collection : ''} />
    </div>
    <div className="game-info">
      <ol>{moves}</ol>
    </div>
</div>
);
}

const calculateWinner = (squares) => {
const lines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];
for (let i = 0; i < lines.length; i++) {
const [a, b, c] = lines[i];
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  return {
    winner: squares[a],
    collection: [a,b,c]
  }
}
}
return null;  
}

export default Game;
