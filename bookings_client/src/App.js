import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navigationBar";
import CourseContainer from "./containers/CourseContainer";
import BookingContainer from "./containers/BookingsContainer";
import CustomerContainer from "./containers/CustomerContainer";
import './App.css';

function App() {
  return (
    <Router>
        <NavBar />
        <Route exact path ="/courses" component={CourseContainer} />
        <Route exact path ="/bookings" component={BookingContainer} />
        <Route exact path ="/customers" component={CustomerContainer} />
    </Router>
  )

    

}

export default App;
