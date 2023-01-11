import React from 'react'; // ES6 js
import {NavLink} from 'react-router-dom';

function Nav() {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <NavLink to='/' exact={true} className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
                    <NavLink to='/snake' className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Snake</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
