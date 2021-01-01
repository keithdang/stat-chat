import {RootState} from './store';
import {ADD_PERSON, START_TIMER} from '../actions/types';
import {AddPersonAction, StartTime} from '../actions'
import { Person } from '../interfaces/Person';

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

const peopleReducer = (state: Person[] = [], action: AddPersonAction | StartTime) => {
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
                        // person.speakingTime = parseInt(action.time);
                      } else {
                        person.dateStarted=new Date().toISOString()
                        person.isSpeaking = true;
                      }
                }else {
                    // if (person.isSpeaking) {
                    //   person.speakingTime = action.time;
                    // }
                    person.dateStarted=''
                    person.isSpeaking = false;
                  }
            })
            return [...state]
        default:
            return state
    }
}

export default peopleReducer