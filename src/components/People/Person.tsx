import React from 'react'
import { editTime } from '../../actions'
import { EDIT_TIMER } from '../../actions/types'
import {Person as PersonInt} from '../../interfaces/Person'
import EditForm from '../EditForm'
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
                <EditForm id={person.id} mode={EDIT_TIMER} buttonFunc={editTime}/>
            </div>
        </li>
    )
}

export default Person;