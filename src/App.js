import React, { useState } from 'react';
import './App.css'
export default function App() {
  const [xIsNext,setXIsNext]=useState(true);
  const [squares,setSquares]=useState(Array(9).fill(null))
  return (
    <>
    <h2>Welcome To tik tak toe</h2>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}} /> 
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}/> 
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
        </div>
        <div className='board-row'> 
        <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}/> 
        <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/> 
        <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/> 
        </div>
        <div className='board-row'>
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}/> 
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}/> 
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}/> 
      </div>
      <div className="results">
        <Results/>
      </div>
    </>
  )
  function handleClick(i){
    if(squares[i] || calculateWinner(squares))return;
    const nextSquares = squares.slice();
    xIsNext?nextSquares[i]='X':nextSquares[i]='O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  function Results(){
    return(
      <>
        {calculateWinner(squares)==null?'':'the winner is : ' + calculateWinner(squares)}
      </>
    )
  }
}


function Square({value,onSquareClick}){
  return(
    <button onClick={onSquareClick} className="square">{value==null?'.':value}</button>
  )
}
function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
for(let i = 0;i<lines.length;i++)
{
  const[a,b,c]=lines[i];
  if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) return squares[a];
}
return null;
}

