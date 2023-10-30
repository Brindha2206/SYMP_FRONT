import React from 'react'
import './symposium.css';
import { useState } from "react"
//import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// const Symposium = () => {
  
//       const [read,setRead]=useState([])
  
//       useEffect(()=>{
//           const fetchAllRecords = async()=>{
//               try{
//                   const res = await axios.get("http://localhost:1995/fetch")
//                   setRead(res.data.records)
//               }catch(err){
//                   console.log(err)
//               }
//           }
//           fetchAllRecords()
//       },[])
  
//       const handleDelete=async(ID)=>{
//           try{
//               await axios.delete(`http://localhost:1995/delkey/${ID}`)
//               window.location.reload();
//           }catch(err){
//               console.log(err)
//           }
//       }
      const Symposium=()=>{
         const [newUser,setNewUser]=useState({
             ID:null, 
             Department:"", 
             Completion_year:null, 
             student_name:"" ,
             Event_name:""   
    
         })
         console.log(newUser)
      const navigate = useNavigate()
      const handleChange=(e)=>{
        setNewUser((prev)=>({...prev,[e.target.name]:e.target.value}))
      }

      const handleClick = async e=>{
        e.preventDefault()
        console.log("Hi")
        try{
            await axios.post("http://localhost:1995/new",newUser)
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }
      

  return (
    <>
    <div className='form'>
        <h1 align="center">MUTHAYAMMAL ENGINEERING COLLEGE</h1>
        
        <div className='details'>
          <h2 align="center"><u>DEATILS OF THE PARTICIPANT</u></h2>
        <tr><label>STUDENT_NAME</label>
        <input type='text' placeholder='ENTER YOUR NAME' onChange={handleChange} name="student_name"/>
        </tr>
        <hr color='black'/>
        <tr><label>STUDENT_ID</label>
        <input type='number' placeholder='ENTER YOUR ID'  onChange={handleChange} name="ID"/>
        </tr>
        <hr color='black'/>
        <tr><label>DEPARTMENT</label>
          {/* <select name='Department'>
            <option>SELECT YOUR DEPARTMENT</option>
            <option>CSE </option>
            <option>AIDS</option>
            <option>ECE</option>
            <option>IT</option>
            <option>CYBER_SECURITY</option>
            <option>EEE</option>
            <option>MECH</option>
            <option>CIVIL</option>
            <option>CSBS</option>
            <option>AIML</option>
            <option>BME</option>
          </select> */}
          <input type='text' placeholder='ENTER THE DEPARTMENT'  onChange={handleChange} name="Department"/>
        </tr>
        <hr color='black'/>
        <tr><label>COMPLETION YEAR</label>
        <input type='year' placeholder='ENTER THE YEAR'  onChange={handleChange} name="Completion_year"/>
        </tr>
        <hr color='black'/>
        <tr><label>EVENT NAME</label>
        <input type='text' placeholder='ENTER THE EVENT NAME'  onChange={handleChange} name="Event_name"/>
        </tr>
        
        <hr color='black'/>
        <button onClick={handleClick}>ADD</button>
        </div>
        {/* <div className='y'>
        <tr>
          
          <h2><label><u>CHOOSE THE EVENTS WHICH YOU ARE WILLING TO PARTICIPATE:</u></label></h2>
        </tr>
        </div>
        <div className='events'>
        <input type='radio' name="EVENT_NAME" value="QUIZ"/>QUIZ <br/>
        <input type='radio' name="EVENT_NAME" value="HACKING"/>HACKING <br/>
        <input type='radio' name="EVENT_NAME" value="CODE_BLOCKS"/>CODE_BLOCKS<br/>
        <input type='radio' name="EVENT_NAME" value="CONSTRUCTION"/>CONSTRUCTION <br/>
        <input type='radio' name="EVENT_NAME" value="CONSTRUCT_IDEAS"/>CONSTRUCT_IDEAS <br/>
        <input type='radio' name="EVENT_NAME" value="CODE_IDEAS"/>CODE_IDEAS <br/>
        <input type='radio' name="EVENT_NAME" value="ELECTRICALS"/>ELECTRICALS <br/>
        <input type='radio' name="EVENT_NAME" value="OTHERS"/>OTHERS <br/>
        </div>
        <hr color='black'/>
        <tr>
          <label>DATE OF THE EVENTS</label>
          <input type='date' placeholder='SELECT THE DATE'  onChange={handleChange} name="Event_Date"/>
        </tr>
        <hr color='black'/>
        <tr>
          <label>VENUES</label>
          <select name='venue'>
            <option>SELECT THE VENUE</option>
            <option>AUDITORIUM</option>
            <option>CAD LAB</option>
            <option>AI LAB</option>
            <option>ECE DEPT</option>
            <option>CC LAB</option>
          </select>
        </tr>
        <hr color='black'/>
         */}
        {/* <tr>
          <td>
            <input type='SUBMIT' value="SUBMIT"/>
          </td>
          <td>
            <input type='RESET' value="RESET"/>
          </td>
        </tr> */}
    </div>
    </>
  )
}

export default Symposium