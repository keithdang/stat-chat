import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../actions'

const Menu: React.FC = () => {
    const dispatch = useDispatch();
    const handleClick = (name: string) => {
        dispatch(addPerson(name))
    }
    let input: HTMLInputElement | null;
    return (
        <form
        onSubmit={(e) => {
          e.preventDefault();
          if(input != null){
            handleClick(input.value)
            input.value = "";
          }
        }}
        >
            <button>Add</button>
            <input ref={(node) => (input = node)}/>
        </form>
    )
}

export default Menu;