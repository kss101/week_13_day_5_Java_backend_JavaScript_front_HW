const BookingDetails =({booking}) => {
    if (!booking) return null;
    return(
        <>
        <p>Date: {booking.date}</p>
        <p>Course: {booking.course.name}</p>
        <p>Location: {booking.course.town}</p>
        <p>Customer: {booking.customer.name}</p>
        <hr />
        </>
    )
}
 export default BookingDetails