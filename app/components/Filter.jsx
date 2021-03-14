import React, { useState } from "react";
import {FilterField} from "./FilterField.jsx";

function Filter(props) {

    const [filterValues, setFilterValues] = useState({});

    function getActivity(e) {

        var url = 'http://www.boredapi.com/api/activity?';
        const request = new XMLHttpRequest();

        for (var name in filterValues) {
            if (!filterValues[name]) {
                continue;
            }
            var url = url + `${name.toLowerCase()}=${filterValues[name]}&`;
        }

        request.open('GET', url);
        request.setRequestHeader('Content-Type', 'application/json');

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                props.updateActivity(JSON.parse(request.responseText));
            }
        });

        request.send();

    }
    
    function saveState(e) {

        if (e.target.value === '') {
            filterValues[e.target.name] = null;
            return;
        }

        var newValues = filterValues;
        filterValues[e.target.name] = e.target.value;

    }
    
    return (
        <div>
            <FilterField caption={"Price"} fromName={"minprice"} toName={"maxprice"} saveValueCallback={saveState}/>
            <FilterField caption={"Accessibility"} fromName={"minaccessibility"} toName={"maxaccessibility"} saveValueCallback={saveState}/>
            <button className="btn btn-primary" onClick={getActivity}>Find!</button>
        </div>
    );
}


export {Filter};