import React from 'react'
import {NavLink} from 'react-router-dom';
import './style.css';

function navBar () {

  return (
    <>
      <nav id="navBar">
        <NavLink class="link" exact to="/" activeClassName="current">Home
        </NavLink>
        <NavLink class="link" to="/Recipes" activeClassName="current">Recipes
        </NavLink>
        <NavLink class="link" to="/Reviews" activeClassName="current">Reviews
        </NavLink>
        <NavLink class="link" to="/Contact" activeClassName="current">Contact
        </NavLink>
      </nav>
    </>
  );

}

export default navBar;