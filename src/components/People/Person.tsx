import React from 'react'
import {Person as PersonInt} from '../../interfaces/Person'

interface Props {
    person: PersonInt
}

const Person: React.FC<Props> = ({person}) => {
    return (
        <li>{person.name} : {person.time}</li>
    )
}

export default Person;