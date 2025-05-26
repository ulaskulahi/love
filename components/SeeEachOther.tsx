"use client";
import React, { useState, useEffect } from "react";

type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Time() {
  const calculateTimeDiff = (): TimeDifference => {
    const targetDate = new Date("2025-06-17T17:50:00");
    const now = new Date();
    const diffMiliSeconds = targetDate.getTime() - now.getTime();

    if (diffMiliSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diffMiliSeconds / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (diffMiliSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((diffMiliSeconds % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diffMiliSeconds % (1000 * 60)) / 1000),
    };
  };

  const [timeDifference, setTimeDifference] = useState<TimeDifference>(
    calculateTimeDiff()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeDifference(calculateTimeDiff);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <span className="text-[30px]  md:text-[50px] m-1">
        {timeDifference.days}
      </span>
      days
      <span className="text-[30px]  md:text-[50px] m-1">
        {timeDifference.hours}
      </span>
      hours
      <span className="text-[30px] md:text-[50px] m-1">
        {timeDifference.minutes}
      </span>
      minutes
      <span className="text-[30px] md:text-[50px] m-1">
        {timeDifference.seconds}
      </span>
      seconds
    </div>
  );
}
