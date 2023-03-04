import React from 'react'

export default function Alert(props) {
    return (
        <div className="show-Alert" style={{height:"30px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.substr(1)}: </strong>{props.alert.msg}.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={props.handleDismissal}></button>
            </div>}
        </div>
    );
}
