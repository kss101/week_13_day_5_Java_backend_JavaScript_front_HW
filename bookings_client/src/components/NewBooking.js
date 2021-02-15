import { useState, useEffect } from "react";
import { postNewBookng } from "../helpers/BookingService";

const NewBooking = ({addBooking, courses, customers}) => {
    const[formData, setFormData] = useState({
        date: "",
        course: null,
        customer: null
    })

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const handleCourse = (event) => {
        const index = parseInt(event.target.value);
        const selectedCourse = courses[index];
        let copiedForm = {...formData};
        copiedForm["course"] = selectedCourse;
        console.log(copiedForm);
        setFormData(copiedForm);
    }

    const handleCustomer = (event) => {
        const index = parseInt(event.target.value);
        const selectedCustomer = customers[index];
        let copiedForm = {...formData};
        copiedForm["customer"] = selectedCustomer;
        console.log(copiedForm);
        setFormData(copiedForm);
    }

    const onSubmit = (event) => {
        console.log("form data=:", formData);
        event.preventDefault();
        postNewBookng(formData).then(() =>{
            addBooking(formData);
        })
    }

    const courseNodes = courses.map((course, index) => {
        return(
            <option value={index} key={index}>{course.name}</option>
        );
    })

    const customerNodes = customers.map((customer, index) => {
        return(
            <option value={index} key={index}>{customer.name}</option>
        );
    })

    return (
    <form onSubmit={onSubmit} id="new-booking-form">
        <label for="date">Booking date:</label>
        <input
            onChange={onChange}
            type="text"
            id="date"
        />

        <label for="courses">Course</label>
        <select id="courses" form="new-booking-form" onChange={handleCourse}>
            {courseNodes}
        </select>

        <label for="customer">Customer name:</label>
        <select id="customers" form="new-booking-form" onChange={handleCustomer}>
            {customerNodes}
        </select>
        <input
            type="submit"
            value="Save"
            id="save"
        />
    </form>
    );
}

export default NewBooking;