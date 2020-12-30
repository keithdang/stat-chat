import {RootState} from './store';
import {ADD_PERSON} from '../actions/types';
import {AddPersonAction} from '../actions'
import { Person } from '../interfaces/Person';

export const selectPeople = (rootState: RootState) =>
    rootState.people;

const createPerson = (name: string, num: number): Person => {
    return  {
        id: num,
        name: name,
        time: 0,
        isSpeaking: false
    }
}

const peopleReducer = (state: Person[] = [], action: AddPersonAction) => {
    switch (action.type){
        case ADD_PERSON:
            return [...state, createPerson(action.payload.name, state.length+1)];
        default:
            return state
    }
}

export default peopleReducer