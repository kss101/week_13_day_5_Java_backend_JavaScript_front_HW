import React from "react";
import BookingDetails from "./BookingDetails";

const BookingsCollection = ({bookings}) => {

    const bookingNodes = bookings.map((booking, index) => {
        return(
            <li key = {index}>
                <BookingDetails booking = {booking} />
            </li>
        );
    })
    
    return(
        <>
            <ul>{bookingNodes}</ul>
        </>
    )
}
export default BookingsCollection;