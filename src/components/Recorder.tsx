import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startTime } from '../actions';
import { MODES } from '../actions/types';
import { convertToSecondsFromDateStarted } from '../lib/utils';
import {selectModeState} from './../redux/mode';
import TimeDisplay from './TimeDisplay';
import {Person} from '../interfaces/Person'
import './Statchat.css';

type RecPerson = Omit<Person, "name" | "color">

const Recorder: React.FC<RecPerson>  = ({id, dateStarted, isSpeaking, time}) => {
    const dispatch = useDispatch();
    const mode = useSelector(selectModeState);
    let interval = useRef<number>(0);
    const [, setCount] = useState<number>(0);
    let seconds = convertToSecondsFromDateStarted(dateStarted, time);

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
        <div className="recorder">
            {mode===MODES.DEFAULT && 
            <button onClick={handleClick}>
                {isSpeaking ? 'Stop' : 'Start'}
            </button>}
            <TimeDisplay seconds={seconds}/>
        </div>
    )
}

export default Recorder;