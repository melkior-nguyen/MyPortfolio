import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const formatTime = (time: number) => {
  return time < 10 ? `0${time}` : `${time}`;
};

const AppClock = () => {
  const getTime = () => {
    const date = new Date();
    return {
      hours: formatTime(date.getHours()),
      minutes: formatTime(date.getMinutes()),
      seconds: formatTime(date.getSeconds()),
    };
  };
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1, delay: 1, ease: "easeIn" }}
      className="absolute bottom-3 right-0 flex cursor-pointer items-center text-sm dark:text-white"
    >
      <span>{time.hours}</span>:<span>{time.minutes}</span>:
      <span>{time.seconds}</span>
    </motion.div>
  );
};

export default AppClock;
