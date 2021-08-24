import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.css';

const Button = ({ message, onClick, link }) => {
    return (
        <div className="button">
            <Link to={link}><button type="submit" onClick={onClick}>{message}</button></Link>
        </div>
    );
}

export default Button;