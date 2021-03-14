import React, { useState } from "react";

function FilterField(props) {
    return (
        <div>
            <div className="filter-field-name">{props.caption}: </div>
            <input className="form-control" placeholder="From" name={props.fromName} onBlur={props.saveValueCallback} type="text"/>
            <input className="form-control" placeholder="To" name={props.toName} onBlur={props.saveValueCallback} type="text"/>
            <hr/>
        </div>
    );
}

export {FilterField};