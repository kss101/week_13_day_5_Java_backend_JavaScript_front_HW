import CourseCollection from "../components/CourseCollection";
import {useEffect, useState} from 'react'
import NewCourse from "../components/NewCourse";

function CourseContainer(){
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getAllCourses();
      }, []);

    const addCourse = (course) => {
        const temp = courses.map( s => s);
        temp.push(course);
        setCourses(temp);
    }

      const getAllCourses = () => {
          console.log("Getting course data");
          fetch('http://localhost:8080/courses')
          .then((res) => {
              return res.json()
          })
          .then((data) => {
              setCourses(data);
              console.log(data);
          })
      };

    return (
        <>
            <NewCourse addCourse={addCourse}/>
            <CourseCollection courses={courses} />
        </>
    );
}
    
export default CourseContainer;
    