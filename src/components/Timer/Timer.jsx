import React, { useEffect, useState } from "react";
import "./timer.css";

const Timer = () => {
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(50);
  const [isRunning, setIsRunning] = useState(false);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const [remainingTime, setRemainingTime] = useState(totalSeconds);

  let timerInterval;

  useEffect(() => {
    if (isRunning && remainingTime > 0) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning, remainingTime]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const circleCircumference = 2 * Math.PI * 78; // Adjust the radius as needed
  const strokeDasharray = (circleCircumference * remainingTime) / totalSeconds;
  return (
    <div className="flexx timer">
      <div className="flex circle-main">
        <div className="circle">
          <svg className="circlediv">
            <circle
              cx="125"
              cy="30"
              r="78"
              stroke="#FF6A6A"
              strokeWidth="4"
              fill="transparent"
              style={{
                strokeDasharray: strokeDasharray,
              }}
            />
          </svg>
        </div>
        <div className="remaining-time">
          {formatTime(Math.floor(remainingTime / 3600))}:
          {formatTime(Math.floor((remainingTime % 3600) / 60))}:
          {formatTime(remainingTime % 60)}
        </div>
      </div>

      <div className="flex-column timer-main">
        <div className="flex time-comp">
          <div className="flex-column hours">
            <p className="headingHour">Hours</p>
            <div className="flex-column">
              <button className="increase" onClick={() => setHours(hours + 1)}>
                ^
              </button>
              <p className="setTime">{formatTime(hours)}</p>
              <button className="decrease" onClick={() => setHours(hours - 1)}>
                v
              </button>
            </div>
          </div>
          <div className="flex-column">
            <p className="headingHour">Minutes</p>
            <div className="flex-column">
              <button
                className="increase"
                onClick={() => setMinutes(minutes + 1)}
              >
                ^
              </button>
              <p className="setTime">{formatTime(minutes)}</p>
              <button
                className="decrease"
                onClick={() => setMinutes(minutes - 1)}
              >
                v
              </button>
            </div>
          </div>
          <div className="flex-column">
            <p className="headingHour">Seconds</p>
            <div className="flex-column">
              <button
                className="increase"
                onClick={() => setSeconds(seconds + 1)}
              >
                ^
              </button>
              <p className="setTime">{formatTime(seconds)}</p>
              <button
                className="decrease"
                onClick={() => setSeconds(seconds - 1)}
              >
                v
              </button>
            </div>
          </div>
        </div>
        <div className="timer-display flex-column">
          <button className="timerBtn" onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
