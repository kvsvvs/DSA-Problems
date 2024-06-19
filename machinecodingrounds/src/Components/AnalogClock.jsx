import React, { useState, useEffect } from "react";
import "../styles/Clock.scss";

const Clock = () => {
  const getTimeInIST = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    const istTime = new Date(now.getTime() + offset);
    return istTime;
  };

  const [date, setDate] = useState(getTimeInIST());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(getTimeInIST());
    }, 1000 / 60);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const secondsDegrees = (date.getSeconds() / 60) * 360 + 90;
  const minsDegrees =
    (date.getMinutes() / 60) * 360 + (date.getSeconds() / 60) * 6 + 90;
  const hourDegrees =
    (date.getHours() / 12) * 360 + (date.getMinutes() / 60) * 30 + 90;
  return (
    <div className="clock">
      <div className="clock-face">
        <div
          className="hand hour-hand"
          style={{ transform: `rotate(${hourDegrees}deg)` }}
        ></div>
        <div
          className="hand min-hand"
          style={{ transform: `rotate(${minsDegrees}deg)` }}
        ></div>
        <div
          className="hand second-hand"
          style={{ transform: `rotate(${secondsDegrees}deg)` }}
        ></div>
      </div>
    </div>
  );
};
export default Clock;
