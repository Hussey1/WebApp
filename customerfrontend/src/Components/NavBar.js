import react from 'react';
import './NavBar.css';
const NavBar=(props)=>{
    return(
        <center>
            <div className="navi-frame">
        <div className="nav-bar">
           <h1>{props.heading}</h1>
        </div>
    </div>

        </center>
    );
}

export default NavBar;