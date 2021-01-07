import React from 'react';
import { IconType } from 'react-icons/lib';
import { useDispatch } from 'react-redux';
import {ADD_PERSON, EDIT_NAME, MODES} from './../actions/types'

interface Props {
    id?: number
    mode: string
    buttonFunc(x: any, y?: any): void
    icon: JSX.Element | string
}


const EditForm: React.FC<Props> = ({mode, id, buttonFunc, icon}) => {
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
            }else{
                dispatch(buttonFunc(id, parseInt(input.value)))
            }
            input.value = "";
          }
        }}
        style={{marginBottom:10}}
        >
            <button style={{marginRight:5, paddingTop:5}}>{icon}</button>
            <input style={{paddingTop:5}} ref={(node) => (input = node)}/>
        </form>
    )
}

export default EditForm;