import { useState, useEffect } from 'react';
import './Countdown.scss';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-04-18') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <>
      <div className='box flex-center-column'>
        <h2>Contagem regressiva para o Halving:</h2>

        <div className='box-counters flex-center'>
          <div className="box-counters-counter flex-center-column">
            <span>{addLeadingZero(timeLeft.days)}</span>
            <p>days</p>

          </div>
          <div className="box-counters-counter flex-center-column">
            <span>{addLeadingZero(timeLeft.hours)}</span>
            <p>hours</p>

          </div>
          <div className="box-counters-counter flex-center-column">
            <span>{addLeadingZero(timeLeft.minutes)}</span>
            <p>minutes</p>

          </div>
          <div className="box-counters-counter flex-center-column">
            <span>{addLeadingZero(timeLeft.seconds)}</span>
            <p>seconds</p>

          </div>
        </div>

        <h3>Aproximidamente 30 de Abril de 2024</h3>

      </div>
    </>
  );
};

export default Countdown;
