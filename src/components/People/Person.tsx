import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTime, changeColor, deletePerson, editName, editTime, minusTime} from '../../actions'
import { ADD_TIME, EDIT_NAME, EDIT_TIMER, MINUS_TIME, MODES } from '../../actions/types'
import {
    FaArrowCircleLeft,
    FaPlusCircle,
    FaMinusCircle,
    FaTrashAlt,
    FaPencilAlt,
    FaPaintBrush,
  } from 'react-icons/fa';
import {Person as PersonInt} from '../../interfaces/Person'
import {selectModeState} from '../../redux/mode';
import EditForm from '../EditForm'
import Recorder from '../Recorder'
import './People.css'

interface Props {
    person: PersonInt
}

const Person: React.FC<Props> = ({person}) => {
    const dispatch = useDispatch();
    const mode = useSelector(selectModeState);
    const editForm = () => {
        switch (mode){
            case MODES.EDIT_NAME:
                return <EditForm id={person.id} mode={EDIT_NAME} buttonFunc={editName} icon={<FaPencilAlt/>}/>
            case MODES.ADD_TIME:
                return <EditForm id={person.id} mode={ADD_TIME} buttonFunc={addTime} icon={<FaPlusCircle/>}/>
            case MODES.MINUS_TIME:
                return <EditForm id={person.id} mode={MINUS_TIME} buttonFunc={minusTime} icon={<FaMinusCircle/>}/>
            case MODES.EDIT_TIME:
                return <EditForm id={person.id} mode={EDIT_TIMER} buttonFunc={editTime} icon={<FaArrowCircleLeft/>}/>
            case MODES.CHANGE_COLOR:
                return <button className="buttonIcon" onClick={()=>dispatch(changeColor(person.id))}><FaPaintBrush/></button> 
            case MODES.DELETE_PERSON:
                return <button className="buttonIcon" onClick={()=>dispatch(deletePerson(person.id))}><FaTrashAlt/></button> 
        }
    }
    return (
        <li>
            <div className="person">
                <span className={person.isSpeaking ? "speaking" : "not-speaking"}>
                    {person.name} :
                </span>
                <Recorder id={person.id} dateStarted={person.dateStarted} isSpeaking={person.isSpeaking} time={person.time} />
                {editForm()}
            </div>
        </li>
    )
}

export default Person;