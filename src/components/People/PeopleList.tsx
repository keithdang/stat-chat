import {Person as PersonInt} from '../../interfaces/Person'
import Person from './Person';
import {selectPeople} from '../../redux/people';
import { useSelector } from 'react-redux';

interface Props {
    mode?: string
    sup?: boolean
}

const PeopleList: React.FC<Props>= ({mode}) => {
    const people = useSelector(selectPeople);
    return (
        <div>
            <ul>
                {people.map((person)=>(
                    <Person person={person} mode={mode}/>
                ))}
            </ul>
        </div>
    )
}

export default PeopleList