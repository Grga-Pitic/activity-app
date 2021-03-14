import React, { useState } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import {Filter} from './components/Filter.jsx';
import {Activity} from './components/Activity.jsx';
import "./styles/styles.css";


function App() {

    const [activity, setActivity] = useState({});
    
    function updateActivity(activity) {
        setActivity(activity);
    }
    
    return (

        <div className="container-fluid h-100">
            <h1>Frontend Test Task</h1>
            <p>if you don't know what to do, you can use our application to find interesting activity for you :)</p>
            <div className="row h-100">
                <div className="col-sm-3 filter-block h-100"><Filter updateActivity={updateActivity} /></div>
                <div className="col-sm-9 activity-block h-100"><Activity data={activity} /></div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
)