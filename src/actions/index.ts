import { Action } from "redux";
import { START, STOP, ADD_PERSON, START_TIMER, MODES, EDIT_TIMER, ADD_TIME, MINUS_TIME, EDIT_NAME, DELETE_PERSON } from "./types";
import {ThunkAction} from 'redux-thunk'
import { RootState } from "../redux/store";
export type StartAction = Action<typeof START>;
export type StopAction = Action<typeof STOP>;

export interface EditNameAction extends Action<typeof EDIT_NAME> {
    payload: {id: number, name: string}
}

export interface DeletePersonAction extends Action<typeof DELETE_PERSON> {
    payload: {id: number}
}

export interface AddTimeAction extends Action<typeof ADD_TIME> {
    payload: {id: number, time: number}
}

export interface MinusTimeAction extends Action<typeof MINUS_TIME> {
    payload: {id: number, time: number}
}

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

export const deletePerson = (id: number): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    DeletePersonAction
> => async dispatch =>{
    dispatch({type: DELETE_PERSON, payload: {id: id}})
}

export const editName = (id: number, name: string): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    EditNameAction
> => async dispatch =>{
    dispatch({type: EDIT_NAME, payload: {id: id, name: name}})
}

export const addTime = (id: number, time: number): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    AddTimeAction
> => async dispatch =>{
    dispatch({type: ADD_TIME, payload: {id: id, time: time}})
}

export const minusTime = (id: number, time: number): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    MinusTimeAction
> => async dispatch =>{
    dispatch({type: MINUS_TIME, payload: {id: id, time: time}})
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