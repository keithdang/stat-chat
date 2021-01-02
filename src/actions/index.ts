import { Action } from "redux";
import { START, STOP, ADD_PERSON, START_TIMER, MODES, EDIT_TIMER } from "./types";
import {ThunkAction} from 'redux-thunk'
import { RootState } from "../redux/store";
export type StartAction = Action<typeof START>;
export type StopAction = Action<typeof STOP>;

export interface EditTimeAction extends Action<typeof EDIT_TIMER> {
    payload: {id: number, time: number}
}

export interface AddPersonAction extends Action<typeof ADD_PERSON> {
    payload: {name: string}
}

export interface StartTime extends Action<typeof START_TIMER> {
    payload: {id: number, time:number}
}

export const start = (): StartAction => ({
    type: START,
});
  
export const stop = (): StopAction => ({
    type: STOP,
});

export const addPerson = (name: string): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    AddPersonAction
> => async dispatch =>{
    dispatch({type: ADD_PERSON, payload: {name: name}})
}

export const editTime = (id: number, time: number): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    EditTimeAction
> => async dispatch =>{
    dispatch({type: EDIT_TIMER, payload: {id: id, time: time}})
}

export const startTime = (id: number, time: number): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    StartTime
> => async dispatch =>{
    dispatch({type: START_TIMER, payload: {id: id, time: time}})
}