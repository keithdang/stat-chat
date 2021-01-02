import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../redux/store';
import { addPerson, AddPersonAction } from './../actions'
import {MODES} from './../actions/types'

interface Props {
    id?: number
    mode: string
    buttonFunc: any
}

const EditForm: React.FC<Props> = ({mode, id, buttonFunc}) => {
    const dispatch = useDispatch();
    
    let input: HTMLInputElement | null;
    return (
        <form
        onSubmit={(e) => {
          e.preventDefault();
          if(input != null){
            if(mode == MODES.ADD_NAME){
                dispatch(buttonFunc(input.value))
            }else{
                dispatch(buttonFunc(id, input.value))
            }
            input.value = "";
          }
        }}
        >
            <button>Add</button>
            <input ref={(node) => (input = node)}/>
        </form>
    )
}

export default EditForm;