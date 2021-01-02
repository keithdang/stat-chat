import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../actions'
import { ADD_PERSON, MODES } from '../../actions/types';
import EditForm from '../EditForm';

const Menu: React.FC = () => {
    return <EditForm mode={ADD_PERSON} buttonFunc={addPerson}/>
}

export default Menu;