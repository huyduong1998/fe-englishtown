import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeout.current && isPause) {
      clearTimeout(timeout.current);
    } else {
      timeout.current = setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [timer, isPause]);

  const pause = () => {
    setIsPause((prev) => !prev);
  };

  const reset = () => {
    setTimer(0);
  };

  return { pause, reset, timer };
};

export default useTimer;
