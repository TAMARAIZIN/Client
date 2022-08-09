import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Admin.css';
const url = new URL('https://localhost:5000/')


const Admin=()=>{
    const [style,setStyle]=useState("add-system-disable");
    const uId = useRef();
    const topic = useRef();

    const addSystem=()=>{
        setStyle("container");
    }

    const save=()=>{
        setStyle("add-system-disable");
    }

    return(
        <div className="admin">
            <h1>wellcome to the Admin page!!</h1>
            <div>
            <div className="form-group btn-container">
                <input type="button" className="form-control button-a" id="addSystemBtn" value="Add new system" onClick={()=>addSystem()}></input>
            </div>
                <div className={style}>
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="owner id" id="uId" inputRef={uId} />
                     </div>
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="topic" id="topic" ref={topic}></input>
                     </div>
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="object name" id="objectName"></input>
                     </div>
                     <div className="form-group">
                        <input type="button" className="form-control button-a" id="saveSystem" value="save the system" onClick={()=>save()}></input>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;


