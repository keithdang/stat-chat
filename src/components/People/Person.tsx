import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePerson} from '../../actions'
import {Person as PersonInt} from '../../interfaces/Person'
import Recorder from '../Recorder'

interface Props {
    person: PersonInt
}

const Person: React.FC<Props> = ({person}) => {
    const dispatch = useDispatch();

    return (
        <li>
            <div style={{display:'flex'}}>
                <span>{person.name}:</span>
                <span style={{paddingLeft:'5px'}}></span>
                <Recorder id={person.id} dateStarted={person.dateStarted} isSpeaking={person.isSpeaking} time={person.time}/>
                {/* <EditForm id={person.id} mode={EDIT_TIMER} buttonFunc={editTime}/> */}
                {/* <EditForm id={person.id} mode={ADD_TIME} buttonFunc={addTime}/>
                <EditForm id={person.id} mode={MINUS_TIME} buttonFunc={minusTime}/> */}
                {/* <EditForm id={person.id} mode={EDIT_NAME} buttonFunc={editName}/> */}
                <button onClick={()=>dispatch(deletePerson(person.id))}>-</button>
            </div>
        </li>
    )
}

export default Person;