import React from 'react'
import {Person as PersonInt} from '../../interfaces/Person'
import Recorder from '../Recorder'
import TimeDisplay from '../TimeDisplay'

interface Props {
    person: PersonInt
}

const Person: React.FC<Props> = ({person}) => {
    return (
        <li>
            <div style={{display:'flex'}}>
                <span>{person.name}:</span>
                <span style={{paddingLeft:'5px'}}></span>
                <Recorder id={person.id} dateStarted={person.dateStarted} isSpeaking={person.isSpeaking} time={person.time}/>
            </div>
        </li>
    )
}

export default Person;