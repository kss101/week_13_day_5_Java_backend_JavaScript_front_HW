const courseUrl = 'http://localhost:8080/courses'
const bookingUrl = 'http://localhost:8080/bookings'

export const postNewCourse = (payload) => {

    return fetch(courseUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const postNewBookng = (payload) => {

    return fetch(bookingUrl, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}