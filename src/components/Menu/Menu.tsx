import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../actions'

const Menu = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(addPerson('Yolo'))
    }

    return (
        <div>
            <button onClick={handleClick}>Add</button>

        </div>
    )
}

export default Menu;