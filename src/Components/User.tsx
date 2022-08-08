import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/User.css';


const save=()=>{

}

const User=()=>{
    const [style,setStyle]=useState("add-business-disable");
    const addBusiness=()=>{
        setStyle("container");
    }
    return(
        <div className="user">
            <h1>user page</h1>
            <div>
            <div className="form-group btn-container">
                <input type="button" className="form-control button-a" id="addBusinessBtn" value="Add new business" onClick={()=>addBusiness()}></input>
            </div>
                <div className={style}>
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="topic" id="topic"></input>
                     </div>
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="object name" id="objectName"></input>
                     </div>
                     <div className="form-group btn-container">
                        <input type="button" className="form-control button-a" id="saveBusiness" value="save the business" onClick={()=>save()}></input>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default User;