import {useState} from "react";
import './Card.css';

const Card=()=>{
    const [enteredfName,setenteredfname]=useState('');
    const [enteredlName,setenteredlname]=useState('');
    const [enteredDate,setentereddate]=useState('');
    const [enteredphoneNum,setenteredphoneNum]=useState('');
    const [enteredNic,setenteredNic]=useState('');
    const [enteredGender,setenteredGender]=useState('');
    const [enteredAddress,setenteredAddress]=useState('');
    const [enteredbid,setenteredbid]=useState('');

    const fnameHandler=(event)=>{
        setenteredfname(event.target.value);
    }
    const lnameHandler=(event)=>{
        setenteredlname(event.target.value);
    }
    const dateHandler=(event)=>{
        setentereddate(event.target.value);
    }
    const phoneNumHandler=(event)=>{
        setenteredphoneNum(event.target.value);
    }
    const nicHandler=(event)=>{
        setenteredNic(event.target.value);
    }
    const genderHandler=(event)=>{
        setenteredGender(event.target.value);
    }
    const addressHandler=(event)=>{
        setenteredAddress(event.target.value);
    }
    const bidHandler=(event)=>{
        setenteredbid(event.target.value);
    }

    const submitHandler=(event)=>{
        const selectedDate=new Date(enteredDate);
        const month=selectedDate.toLocaleString('en-US',{month:'long'});
        const day=selectedDate.toLocaleString('en-US',{day:'2-digit'});
        const year=selectedDate.getFullYear();

        const dob=month+"-"+day+"-"+year;
        const fname=enteredfName;
        const lname=enteredlName;
        const gender=enteredGender;
        const bid=enteredbid;
        const address=enteredAddress;
        const nic=enteredNic;
        const phonenum=enteredphoneNum;
        const customer={dob,fname,lname,gender,bid,address,nic,phonenum};
        fetch("http://localhost:8080/customer/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(customer)

  }).then(()=>{
    console.log("New customer Added")
  })
    }
    return(
        <center className="center-section">
            <section>
        <div className="card-frame">
            <h2>Create An Account </h2>
           <div className="card">
               <form>
                   <div className="form-group">
                   <input type="text" value={enteredfName} onChange={fnameHandler} placeholder="Enter Your First Name"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredlName} onChange={lnameHandler} placeholder="Enter Your Last Name"></input>
                   </div>
                   <div className="form-group">
                   <input type="date" value={enteredDate} onChange={dateHandler} placeholder="DOB"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredphoneNum} onChange={phoneNumHandler} placeholder="Enter Your Phone Number"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredNic} onChange={nicHandler} placeholder="Enter Your NIC"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredGender} onChange={genderHandler} placeholder="Enter Your Gender"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredAddress} onChange={addressHandler} placeholder="Enter Your Address"></input>
                   </div>
                   <div className="form-group">
                   <input type="text" value={enteredbid} onChange={bidHandler} placeholder="Enter Your Bank Branch Name"></input>
                   </div>
                   <div className="button-section">
                       <button onClick={submitHandler} type="submit">submit</button>
                   </div>
               </form>
           </div>
        </div>
    </section>
        </center>
    
    );
}

export default Card;