import React from 'react'
import { useDispatch } from 'react-redux'
import { addTime, deletePerson, editName, editTime, minusTime} from '../../actions'
import { ADD_TIME, DELETE_PERSON, EDIT_NAME, EDIT_TIMER, MINUS_TIME } from '../../actions/types'
import {Person as PersonInt} from '../../interfaces/Person'
import EditForm from '../EditForm'
import Recorder from '../Recorder'

interface Props {
    person: PersonInt
    mode?: string
}

const Person: React.FC<Props> = ({person, mode}) => {
    const dispatch = useDispatch();
    const editForm = () => {
        switch (mode){
            case EDIT_NAME:
                return <EditForm id={person.id} mode={EDIT_NAME} buttonFunc={editName}/>
            case ADD_TIME:
                return <EditForm id={person.id} mode={ADD_TIME} buttonFunc={addTime}/>
            case MINUS_TIME:
                return <EditForm id={person.id} mode={MINUS_TIME} buttonFunc={minusTime}/>
            case EDIT_TIMER:
                return <EditForm id={person.id} mode={EDIT_TIMER} buttonFunc={editTime}/>
            case DELETE_PERSON:
                return <button onClick={()=>dispatch(deletePerson(person.id))}>-</button> 
        }
    }
    return (
        <li>
            <div style={{display:'flex'}}>
                <span>{person.name}:</span>
                <span style={{paddingLeft:'5px'}}></span>
                <Recorder id={person.id} dateStarted={person.dateStarted} isSpeaking={person.isSpeaking} time={person.time} mode={mode}/>
                {editForm()}
            </div>
        </li>
    )
}

export default Person;