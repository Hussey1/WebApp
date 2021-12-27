import NavBar from "./NavBar";
import './AdminSection.css';
import { useState,useEffect } from "react";
const AdminSection=()=>{
    const[customers,setCustomers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/customer/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setCustomers(result);
        }
      )
      },[])
    return(
        <section>
             <NavBar heading="Admin Section"/>
             <div className="table-section">
             <h2>Account Details</h2>

<table>
  <tr>
    <th>Customer ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>DOB</th>
    <th>Phone No.</th>
    <th>NIC</th>
    <th>Gender</th>
    <th>Address</th>
    <th>Bank ID</th>

  </tr>
  {customers.map(customer=>(
       <tr>
       <td>{customer.id}</td>
       <td>{customer.fname}</td>
       <td>{customer.lname}</td>
       <td>{customer.dob}</td>
       <td>{customer.phonenum}</td>
       <td>{customer.nic}</td>
       <td>{customer.gender}</td>
       <td>{customer.address}</td>
       <td>{customer.bid}</td>

       
     </tr>
  ))}
 
  
  
</table>

             </div>
        </section>
       
    );
}

export default AdminSection;