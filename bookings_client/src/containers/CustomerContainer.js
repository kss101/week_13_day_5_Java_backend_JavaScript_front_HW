import CustomerCollection from "../components/CustomerCollection";
import {useEffect, useState} from 'react'

function CustomerContainer(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers();
      }, []);

      const getAllCustomers = () => {
          console.log("Getting customer data");
          fetch('http://localhost:8080/customers')
          .then((res) => {
              return res.json()
          })
          .then((data) => {
            setCustomers(data);
              console.log(data);
          })
      };

    return (
        <>  
          <CustomerCollection customers={customers} />
        </>
    );
}
    
export default CustomerContainer;