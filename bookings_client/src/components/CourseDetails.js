const CourseDetails =({course}) => {
    if (!course) return null;
    return(
        <>
        <p>Course: {course.name}</p>
        <p>Location: {course.town}</p>
        <p>Rating: {course.rating}</p>
        <hr />
        </>
    )
}
 export default CourseDetails