import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { addLog } from "../../store/logsSlice";
import { dequeueTimer } from "../../store/buttonsSlice";

const TimerManager = () => {
  const dispatch = useAppDispatch();
  const { currentTimer, timerQueue } = useAppSelector((state) => state.buttons);

  useEffect(() => {
    if (currentTimer) {
      const startTime = currentTimer.clickTime;

      const timerId = setTimeout(() => {
        const endTime = Date.now();
        const elapsedSeconds = Math.round((endTime - startTime) / 1000);
        const formattedStartTime = new Date(startTime).toLocaleTimeString();
        const formattedEndTime = new Date(endTime).toLocaleTimeString();
        const logEntry = `№${currentTimer.number}: ${formattedStartTime} - ${formattedEndTime} (${elapsedSeconds} sec)`;

        dispatch(addLog(logEntry));
        dispatch(dequeueTimer());
      }, currentTimer.time * 1000);
      return () => clearTimeout(timerId);
    }
  }, [currentTimer, dispatch]);

  useEffect(() => {
    if (!currentTimer && timerQueue.length > 0) {
      dispatch(dequeueTimer());
    }
  }, [currentTimer, timerQueue, dispatch]);

  return null;
};

export default TimerManager;
