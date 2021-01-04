import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTime, deletePerson, editName, editTime, minusTime} from '../../actions'
import { ADD_TIME, DELETE_PERSON, EDIT_NAME, EDIT_TIMER, MINUS_TIME, MODES } from '../../actions/types'
import {Person as PersonInt} from '../../interfaces/Person'
import {selectModeState} from '../../redux/mode';
import EditForm from '../EditForm'
import Recorder from '../Recorder'

interface Props {
    person: PersonInt
}

const Person: React.FC<Props> = ({person}) => {
    const dispatch = useDispatch();
    const mode = useSelector(selectModeState);
    const editForm = () => {
        switch (mode){
            case MODES.EDIT_NAME:
                return <EditForm id={person.id} mode={EDIT_NAME} buttonFunc={editName}/>
            case MODES.ADD_TIME:
                return <EditForm id={person.id} mode={ADD_TIME} buttonFunc={addTime}/>
            case MODES.MINUS_TIME:
                return <EditForm id={person.id} mode={MINUS_TIME} buttonFunc={minusTime}/>
            case MODES.EDIT_TIME:
                return <EditForm id={person.id} mode={EDIT_TIMER} buttonFunc={editTime}/>
            case MODES.DELETE_PERSON:
                return <button onClick={()=>dispatch(deletePerson(person.id))}>-</button> 
        }
    }
    return (
        <li>
            <div style={{display:'flex'}}>
                <span>{person.name}:</span>
                <span style={{paddingLeft:'5px'}}></span>
                <Recorder id={person.id} dateStarted={person.dateStarted} isSpeaking={person.isSpeaking} time={person.time} />
                {editForm()}
            </div>
        </li>
    )
}

export default Person;