
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

interface CountdownTimerProps {
  targetDate: Date;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft | {} => {
  const difference = +targetDate - +new Date();
  let timeLeft: TimeLeft | {} = {};

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

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center justify-center bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg w-24 h-24 border border-gray-700 shadow-lg">
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase tracking-widest text-gray-400 mt-1">{label}</span>
    </div>
);

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate) as TimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate) as TimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).length ? (
      <div className="flex items-center justify-center space-x-2 sm:space-x-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
  ) : (
    <div className="text-2xl font-bold text-green-400">Welcome!</div>
  );

  return (
    <div className="mt-12">
      {timerComponents}
    </div>
  );
};
