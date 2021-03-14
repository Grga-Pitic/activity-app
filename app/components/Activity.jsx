import React from "react";

function Activity(props) {

    var Content;

    function getContent(data) {
        if (typeof props.data.error !== 'undefined') {
            return <span className={"error-message"}>Occures an error: {props.data.error}</span>;
        }

        if (typeof props.data.activity === 'undefined') {
            return <div></div>;
        }

        return (
            <div>
                <h3><a href={props.link}>{props.data.activity}</a></h3>

                <div>Accessibility: {props.data.accessibility}</div>
                <div>Price: {props.data.price}</div>
                <div>Type: {props.data.type}</div>
                <div>Participants: {props.data.participants}</div>
            </div>
        );
    }


    return (
        getContent(props.data)
    );
}

export {Activity};