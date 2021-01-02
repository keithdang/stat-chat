import React from 'react';
import { useDispatch } from 'react-redux';
import {ADD_PERSON, EDIT_NAME, MODES} from './../actions/types'

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
            if(mode == ADD_PERSON){
                dispatch(buttonFunc(input.value))
            }else if(mode == EDIT_NAME){
                dispatch(buttonFunc(id, input.value))
            }
            else{
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