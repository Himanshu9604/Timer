import React, { useState, useEffect } from 'react';
import './style.css';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const handleClockwise = () => {
    setTime((PrevTime) => PrevTime + 10);
  };

  const handleAntiClockwise = () => {
    setTime((PrevTime) => Math.max(PrevTime - 10, 0));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{formatTime(time)}</div>
      <div>
        <button onClick={handleStartStop}>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleClockwise}>
          <FaArrowCircleRight />
        </button>
        <button onClick={handleAntiClockwise}>
          <FaArrowCircleLeft />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
