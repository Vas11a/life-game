import React from 'react'
import { useDispatch } from 'react-redux'
import { startGame, clearFiled } from '../redux/mainSlice';

export default function Button() {
    const dispatch = useDispatch();

    const [intervalId, setIntervalId] = React.useState(0);
    const startStop = () => {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);
        return;
      }

      const newIntervalId = setInterval(() => {
        dispatch(startGame())
      }, 300);
      setIntervalId(newIntervalId); 
    }

    const onStep = () => {
      dispatch(startGame())
    }
    const clear = () => {
      dispatch(clearFiled())
    }
  return (
    <div className='button-block'>
      <button onClick={onStep}>One Step</button>
      <button onClick={startStop}>{intervalId ? 'Stop' : 'Start'}</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
