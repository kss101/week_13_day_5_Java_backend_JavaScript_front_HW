const CustomerDetails =({customer}) => {
    if (!customer) return null;
    return(
        <>
        <p>Name: {customer.name}</p>
        <p>Location: {customer.town}</p>
        <p>Age: {customer.age}</p>
        <hr />
        </>
    )
}
 export default CustomerDetails