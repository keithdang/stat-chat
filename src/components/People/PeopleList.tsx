import {Person as PersonInt} from '../../interfaces/Person'
import Person from './Person';
import {selectPeople} from '../../redux/people';
import { useDispatch, useSelector } from 'react-redux';
import { MODES } from '../../actions/types';
import { modeAddTime, modeDefault, modeDeletePerson, modeEditName, modeEditTime, modeMinusTime } from '../../actions';

interface Props {
    mode?: string
    sup?: boolean
}

const DispatchMode = (mode: string | undefined) => {
    const dispatch = useDispatch();
    switch (mode){
        case MODES.ADD_TIME:
            dispatch(modeAddTime());
            break;
        case MODES.MINUS_TIME:
            dispatch(modeMinusTime());
            break;
        case MODES.EDIT_TIME:
            dispatch(modeEditTime());
            break;
        case MODES.EDIT_NAME:
            dispatch(modeEditName());
            break;
        case MODES.DELETE_PERSON:
            dispatch(modeDeletePerson());
            break;
        default:
            dispatch(modeDefault());
            break;
    }
}

const PeopleList: React.FC<Props>= ({mode}) => {
    DispatchMode(mode);
    const people = useSelector(selectPeople);
    return (
        <div>
            <ul>
                {people.map((person)=>(
                    <Person person={person}/>
                ))}
            </ul>
        </div>
    )
}

export default PeopleList