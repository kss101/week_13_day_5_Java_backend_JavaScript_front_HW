import React from "react";
import CourseDetails from "./CourseDetails";

const CourseCollection = ({courses}) => {

    const courseNodes = courses.map((course, index) => {
        return(
            <li key = {index}>
                <CourseDetails course = {course} />
            </li>
        );
    })
    
    return(
        <>
            <ul>{courseNodes}</ul>
        </>
    )
}
export default CourseCollection;