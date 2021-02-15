import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  
    return(
        <>
          <ul>
              <li><Link to="/courses">courses</Link></li>
              <li><Link to="/bookings">bookings</Link></li>
              <li><Link to="/customers">customers</Link></li>
          </ul>
        </>
    );
}

export default NavBar;
