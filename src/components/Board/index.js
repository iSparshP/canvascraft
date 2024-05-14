import React, { useContext, useEffect, useRef } from 'react';
import rough from 'roughjs';
import BoardContext from "../../store/board-context";

function Board() {
  const canvasRef = useRef();
  const { elements, boardMouseDownHandler } = useContext(BoardContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.save();
    const roughCanvas = rough.canvas(canvas);
    elements.forEach((element) => {
      roughCanvas.draw(element.roughEle);
    });

    return () => {
      context.clearRect(0, 0, canvas.width, canvas.height); // Fix the typo here
    };
  }, [elements]);

  const handleBoardMouseDown = (event) => {
    boardMouseDownHandler(event);
  }

  return (
      <canvas ref={canvasRef} onMouseDown={handleBoardMouseDown}/>
  );
}

export default Board;