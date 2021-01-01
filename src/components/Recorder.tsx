import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { start,startTime,stop } from '../actions';
import { addZero } from '../lib/utils';
import { selectDateStart } from '../redux/recorder';
import TimeDisplay from './TimeDisplay';

//TODO: OMIT INTERFACE
interface Props {
    id: number
    dateStarted: string
    isSpeaking: boolean,
    time: number
}

const Recorder: React.FC<Props>  = ({id, dateStarted, isSpeaking, time}) => {
    const dispatch = useDispatch();
    let interval = useRef<number>(0);
    const [, setCount] = useState<number>(0);
    let seconds = dateStarted ? Math.floor((Date.now() - new Date(dateStarted).getTime()) / 1000): 0;
    seconds += time;

    const handleClick = () => {
        dispatch(startTime(id, seconds))
        if(isSpeaking){
            window.clearInterval(interval.current);
        }else{
            interval.current = window.setInterval(()=>{
                setCount((count) => count + 1);
            },1000)
        }
    } 

    useEffect(() => {
        return () => {
          window.clearInterval(interval.current);
        };
      }, []);

    return (
        <div style={{display:'flex'}}>
            <button onClick={handleClick}>
                Start
            </button>
            <TimeDisplay seconds={seconds}/>
        </div>
    )
}

export default Recorder;