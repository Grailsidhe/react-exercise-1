import './Example.css';
import React from 'react';


const Avatar = (props)=>{
    return (
        
    <div className="box">
        <div className="img-container">
            <img src={props.image} className="image" alt="Avatar"></img>
        </div>
        <h2 className="name">{props.fName} {props.lName}</h2>
    </div>
    )
}


export default Avatar;