import React from 'react';
import { MODES } from '../../actions/types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import PeopleList from '../People/PeopleList';
import './Navigation-bar.css';
import Home from '../Home';


const Menu: React.FC = () => {
    const AuthRoute = (props:any) => {
        const { component, path } = props;
        return <Route path={path} component={component} />;
      };

    return (
        <Router>
            <div className="navbar">
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <button className="dropbtn">Edit 
                    <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                    <Link to="/addtime">Add Time</Link>
                    <Link to="/minustime">Minus Time</Link>
                    <Link to="/edittime">Edit Time</Link>
                    <Link to="/editname">Edit Name</Link>
                    <Link to="/deleteperson">Delete Person</Link>
                    <Link to="/changecolor">Change Color</Link>
                    </div>
                </div> 
            </div>
            <Switch>
                {/* <AuthRoute path="/minustime" component={PeopleList} /> */}
                <Route path="/addtime">
                    <PeopleList mode={MODES.ADD_TIME}/>
                </Route>
                <Route path="/minustime">
                    <PeopleList mode={MODES.MINUS_TIME}/>
                </Route>
                <Route path="/edittime">
                    <PeopleList mode={MODES.EDIT_TIME}/>
                </Route>
                <Route path="/editname">
                    <PeopleList mode={MODES.EDIT_NAME}/>
                </Route>
                <Route path="/deleteperson">
                    <PeopleList mode={MODES.DELETE_PERSON}/>
                </Route>
                <Route path="/changecolor">
                    <PeopleList mode={MODES.CHANGE_COLOR}/>
                </Route>
                <Route path="/">
                    <Home/>
                    {/* <img src={logo} className="App-logo" alt="logo" />   
                    <EditForm mode={ADD_PERSON} buttonFunc={addPerson} icon={'Add Name'}/>
                    <PeopleList /> */}
                </Route>
            </Switch>
        </Router>
    )
}

export default Menu;