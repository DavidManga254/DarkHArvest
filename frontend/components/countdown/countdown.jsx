import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const parseDate = (dateString) => {
      const [time, dayMonthYear] = dateString.split(' ');
      const [hours, minutes, seconds] = time.split(':');
      const [day, month, year] = dayMonthYear.split('-');

      // Months in JavaScript's Date object are zero-indexed, so we subtract 1 from the month
      return new Date(year, month - 1, day, hours, minutes, seconds);
    };

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const targetTime = parseDate(targetDate).getTime();

      if (currentTime >= targetTime) {
        setCountdown('Aired');
        clearInterval(interval);
      } else {
        const timeDiff = targetTime - currentTime;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setCountdown(
          `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
        );
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return <span>{countdown}</span>;
};

export default CountdownTimer;
