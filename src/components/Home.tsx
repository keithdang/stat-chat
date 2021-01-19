import React from "react"
import { addPerson } from "../actions"
import { ADD_PERSON } from "../actions/types"
import EditForm from "./EditForm"
import PeopleList from "./People/PeopleList"
import logo from './App/logo.svg';
import './Statchat.css';

function Home(){
    return(
        <div>
            <div className="home">
                <div>
                    <h3>Stat Chat</h3>
                    <EditForm mode={ADD_PERSON} buttonFunc={addPerson} icon={'Add Name'}/>
                </div>   
                <img src={logo} className="App-logo" alt="logo" />   
            </div>
            <PeopleList />
        </div>
        
    )
}
export default Home