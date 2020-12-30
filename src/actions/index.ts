import { Action } from "redux";
import { START, STOP, ADD_PERSON } from "./types";
import {ThunkAction} from 'redux-thunk'
import { RootState } from "../redux/store";
export type StartAction = Action<typeof START>;
export type StopAction = Action<typeof STOP>;

// export type AddPersonAction = Action<typeof ADD_PERSON>;
export interface AddPersonAction extends Action<typeof ADD_PERSON> {
    payload: {name: string}
}

export const start = (): StartAction => ({
    type: START,
});
  
export const stop = (): StopAction => ({
    type: STOP,
});

// export const addPerson = (): AddPersonAction => {
    
// }
export const addPerson = (name: string): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    AddPersonAction
> => async dispatch =>{
    dispatch({type: ADD_PERSON, payload: {name: name}})
}