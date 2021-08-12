import React from 'react';
import '../Styles/App.css';

const UserInput = ({message, placeholder})=>{
    return (
    <div className="userInput">
       <label>{message}</label> 
       <input type="text" maxLength="10" placeholder={placeholder}/>
    </div>
    );
}

export default UserInput;