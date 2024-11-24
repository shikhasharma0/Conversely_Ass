import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [matrix, setMatrix] = useState(Array(9).fill(null)); 
  const [clickOrder, setClickOrder] = useState([]); 

  const handleBoxClick = (index) => {
    if (clickOrder.length === 9) return; 

    if (matrix[index] === 'green') return;

    const updatedMatrix = [...matrix];
    updatedMatrix[index] = 'green';
    setMatrix(updatedMatrix);
    setClickOrder([...clickOrder, index]);

    // setClickOrder here ....

    if (clickOrder.length === 8) {
      setTimeout(() => {
        changeToOrange();
      }, 300); 
    }
  };

  const changeToOrange = () => {
    let updatedMatrix = [...matrix];
    // let update = {}
    clickOrder.forEach((boxIndex, i) => {
      setTimeout(() => {
        updatedMatrix[boxIndex] = 'orange';
        setMatrix([...updatedMatrix]); 
      }, i * 300); 
    });
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color || 'white' }}
          onClick={() => handleBoxClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default App;
