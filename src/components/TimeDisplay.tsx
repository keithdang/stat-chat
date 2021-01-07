import React from 'react'
import { addZero } from '../lib/utils';

interface Props {
    seconds: number
}

const TimeDisplay: React.FC<Props> = ({seconds}) => {
    
    const hours = seconds ? Math.floor(seconds / 60 / 60) : 0;
    seconds -= hours * 60 * 60;
    const minutes = seconds ? Math.floor(seconds / 60) : 0;
    seconds -= minutes * 60;

    return (
        <div style={{marginLeft:10}}>
            {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
        </div>
    )
}

export default TimeDisplay;