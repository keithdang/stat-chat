import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../actions'
import { MODES } from '../../actions/types';
import EditForm from '../EditForm';

const Menu: React.FC = () => {
    return <EditForm mode={MODES.ADD_NAME} buttonFunc={addPerson}/>
}

export default Menu;