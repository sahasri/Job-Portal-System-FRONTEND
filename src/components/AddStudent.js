import React,{useState} from "react";  //useState for handling states 
import axios from "axios";

export default function AddStudent(){

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [gender,setGender]=useState("");

    function sendData(e){     // function that execute when pressing submit button"
        e.preventDefault();                 
        //alert("Insert");
        const newStudent={
            name,
            age,
            gender
        }
       // console.log(newStudent);
       axios.post("http://localhost:1234/student/add",newStudent ).then(()=>{
        alert("Student Added")
       }).catch((err)=>{
        alert(err)
       });
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label for="name" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}></input>
                  { /*<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>

                <div className="form-group">
                    <label for="age" className="form-label">Age</label>
                    <input type="text" className="form-control" id="age" placeholder="Enter Student Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}></input>
                </div>

                <div className="form-group">
                    <label for="gender" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
                    onChange={(e)=>{
                    setGender(e.target.value);
                    }}></input>
                </div>
            

                <div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
        </div>

    )
}