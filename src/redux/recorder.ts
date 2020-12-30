import { Action } from 'redux';
import { RootState } from './store';
const START = 'recorder/start';
const STOP = 'recorder/stop';

interface RecorderState {
    dateStart: string;
  }

type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

export const selectRecorderState = (rootState: RootState) => rootState.recorder;
export const selectDateStart = (rootState: RootState) =>
  rootState.recorder.dateStart;

export const start = (): StartAction => ({
    type: START,
  });
  
  export const stop = (): StopAction => ({
    type: STOP,
  });

  const initialState: RecorderState = {
    dateStart: '',
  };
const recorderReducer = (state: RecorderState = initialState, action: StartAction |StopAction) => {
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


