import BookngsCollection from "../components/BookingsCollection";
import {useEffect, useState} from 'react'
import NewBooking from "../components/NewBooking";

function BookingContainer(){
    const [bookings, setBookings] = useState([]);
    const [courses, setCourses] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers();
      }, []);

    useEffect(() => {
        getAllBookings();
      }, []);

    useEffect(() => {
        getAllCourses();
      }, []);

    const addBooking = (booking) => {
        const temp = bookings.map( s => s);
        temp.push(booking);
        setBookings(temp);
    }

    const getAllBookings = () => {
        fetch('http://localhost:8080/bookings')
          .then((res) => {
            return res.json()
        })
          .then((data) => {
            setBookings(data);
        })
    };

    const getAllCourses = () => {
        fetch('http://localhost:8080/courses')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setCourses(data);
        })
    };

    const getAllCustomers = () => {
        fetch('http://localhost:8080/customers')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
          setCustomers(data);
        })
    };

    return (
        <>
            <NewBooking addBooking={addBooking} courses={courses} customers={customers}/>
            <BookngsCollection bookings={bookings} />
        </>
    );
}
    
export default BookingContainer;