import React from "react";
import CustomerDetails from "./CustomerDetails";

const CustomerCollection = ({customers}) => {

    const customerNodes = customers.map((customer, index) => {
        return(
            <li key = {index}>
                <CustomerDetails customer = {customer} />
            </li>
        );
    })
    
    return(
        <>
            <ul>{customerNodes}</ul>
        </>
    )
}
export default CustomerCollection;