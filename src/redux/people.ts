import {RootState} from './store';
import {ADD_PERSON, ADD_TIME, CHANGE_COLOR, DELETE_PERSON, EDIT_NAME, EDIT_TIMER, MINUS_TIME, MODES, START_TIMER} from '../actions/types';
import {AddPersonAction, AddTimeAction, ChangeColorAction, DeletePersonAction, EditNameAction, EditTimeAction, MinusTimeAction, StartTime} from '../actions'
import { Person } from '../interfaces/Person';
import { convertToSecondsFromDateStarted, randomRbga, timeSort } from '../lib/utils';

export const selectPeople = (rootState: RootState) =>
    rootState.people;

const createPerson = (name: string, num: number): Person => {
    return  {
        id: num,
        name: name,
        dateStarted: '',
        isSpeaking: false,
        time: 0,
        color: randomRbga(),
    }
}

const peopleReducer = (
    state: Person[] = [], 
    action: EditTimeAction | AddPersonAction | StartTime | AddTimeAction 
    | MinusTimeAction | EditNameAction | DeletePersonAction | ChangeColorAction
    ) => {
    switch (action.type){
        case ADD_PERSON:
            return [...state, createPerson(action.payload.name, state.length+1)];
        case START_TIMER:
            state.forEach(person=>{
                if(person.id === action.payload.id){
                    if (person.isSpeaking) {
                        person.isSpeaking = false;
                        person.time = action.payload.time;
                        person.dateStarted=''
                      } else {
                        person.dateStarted=new Date().toISOString()
                        person.isSpeaking = true;
                      }
                }else {
                    if (person.isSpeaking) {
                      person.time = convertToSecondsFromDateStarted(person.dateStarted, person.time);
                    }
                    person.dateStarted=''
                    person.isSpeaking = false;
                  }
            })
            return [...state]
        case CHANGE_COLOR:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                    person.color = randomRbga();
                }
                });
                return [...state];
        case EDIT_TIMER:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                  person.time = action.payload.time;
                }
              });
              state.sort(timeSort);
              return [...state];
        case EDIT_NAME:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                    person.name = action.payload.name;
                }
                });
                state.sort(timeSort);
                return [...state];
        case ADD_TIME:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                  person.time += action.payload.time;
                }
              });
              state.sort(timeSort);
              return [...state];
        case MINUS_TIME:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                    person.time -= action.payload.time;
                }
                });
                state.sort(timeSort);
                return [...state];
        case DELETE_PERSON:
            return [...state.filter((person) => person.id !== action.payload.id)];
        default:
            return state
    }
}

export default peopleReducer