import { useState } from "react";
import { postNewCourse } from "../helpers/BookingService"

const NewCourse = ({addCourse}) => {
    const[formData, setFormData] = useState({})

    const onChange = (event) => {
        formData[event.target.id] = event.target.value;
        setFormData(formData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postNewCourse(formData).then(() =>{
            addCourse(formData);
        })
    }

    return (
    <form onSubmit={onSubmit} id="new-course-form">
        <label for="name">Course name:</label>
        <input
            onChange={onChange}
            type="text"
            id="name"
        />
        <label for="town">Course location:</label>
        <input
            onChange={onChange}
            type="text"
            id="town"
        />
        <label for="rating">Course rating:</label>
        <input
            onChange={onChange}
            type="text"
            id="rating"
        />
        <input
            type="submit"
            value="Save"
            id="save"
        />
    </form>
    );
}

export default NewCourse;