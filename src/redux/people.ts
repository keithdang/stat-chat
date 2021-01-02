import {RootState} from './store';
import {ADD_PERSON, EDIT_TIMER, MODES, START_TIMER} from '../actions/types';
import {AddPersonAction, EditTimeAction, StartTime} from '../actions'
import { Person } from '../interfaces/Person';
import { convertToSecondsFromDateStarted } from '../lib/utils';

export const selectPeople = (rootState: RootState) =>
    rootState.people;

const createPerson = (name: string, num: number): Person => {
    return  {
        id: num,
        name: name,
        dateStarted: '',
        isSpeaking: false,
        time: 0
    }
}

const peopleReducer = (
    state: Person[] = [], 
    action: EditTimeAction | AddPersonAction | StartTime 
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
        case EDIT_TIMER:
            state.forEach((person) => {
                if (person.id === action.payload.id) {
                  person.time = action.payload.time;
                }
              });
              state.sort(timeSort);
              return [...state];
        default:
            return state
    }
}
function timeSort(p1: Person, p2: Person) {
    return p2.time - p1.time;
  }
export default peopleReducer