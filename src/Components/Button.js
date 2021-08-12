import React from 'react'; 
import '../Styles/App.css';

const Button = ({message})=>{
    return (
     <div className="button">
         <button type="submit">{message}</button>
     </div>
    );
}

export default Button;