import { RootState } from './store';
import {START, STOP} from '../actions/types';
import { StartAction, StopAction } from '../actions';

interface RecorderState {
    dateStart: string;
}

export const selectRecorderState = (rootState: RootState) => rootState.recorder;
export const selectDateStart = (rootState: RootState) =>
  rootState.recorder.dateStart;

const initialState: RecorderState = {
    dateStart: '',
};

const recorderReducer = (state: RecorderState = initialState, action: StartAction | StopAction) => {
    switch (action.type){
        case START:
            return {...state, dateStart: new Date().toISOString()};
        case STOP: 
            return {...state, dateStart: ''};
        default:
            return state;
    }
}

export default recorderReducer;


