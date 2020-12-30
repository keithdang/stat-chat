import {Person as PersonInt} from '../../interfaces/Person'
import Person from './Person';
import {selectPeople} from '../../redux/people';
import { useSelector } from 'react-redux';

const PeopleList = () => {
    const people = useSelector(selectPeople);
    return (
        <ul>
            {people.map((person)=>(
                <Person person={person}/>
            ))}
        </ul>
    )
}

export default PeopleList