import React, { useState, useContext } from 'react';
import Context from '../../context/Context.js'

 const  Header = ()=>{
    const [ darkMode, setDarkMode ] = useState(false);
    const color = useContext(Context);


    const handleClick = ()=>{
        setDarkMode(!darkMode);
    }


    return (
        <div>
            <h1 style={ {color} }> <em>CursoReactHooks</em></h1>
            <button type='button' onClick={handleClick} >{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header