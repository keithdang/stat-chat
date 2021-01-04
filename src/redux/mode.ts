import { RootState } from './store';
import {MODES, START, STOP} from '../actions/types';
import { ModeAddTimeAction, ModeDefaultAction, ModeDeletePersonAction, ModeEditNameAction, ModeEditTimeAction, ModeMinusTimeAction, StartAction, StopAction } from '../actions';

interface ModeState {
    mode: string;
}

export const selectModeState = (rootState: RootState) => rootState.mode.mode;

const initialState: ModeState = {
    mode: MODES.DEFAULT,
};

const modeReducer = (
    state: ModeState = initialState, 
    action: ModeDeletePersonAction | ModeEditNameAction | ModeEditTimeAction | ModeMinusTimeAction |
            ModeAddTimeAction | ModeDefaultAction
    ) => {
    switch (action.type){
        case MODES.MINUS_TIME:
            return {mode: MODES.MINUS_TIME};
        case MODES.ADD_TIME:
            return {mode: MODES.ADD_TIME};
        case MODES.EDIT_TIME:
            return {mode: MODES.EDIT_TIME};
        case MODES.EDIT_NAME:
            return {mode: MODES.EDIT_NAME};
        case MODES.DELETE_PERSON:
            return {mode: MODES.DELETE_PERSON};
        default:
            return initialState;
    }
}

export default modeReducer;


