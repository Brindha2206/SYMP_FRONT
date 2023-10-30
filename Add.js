import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

const Add=()=>{
    // const [newUser,setNewUser]=useState({
    //     ID:null, 
    //     Department:"", 
    //     Completion_year:null, 
    //     Event_Name:"", 
    //     Event_Date:"", 
    //     Venue:"",
    //     student_name:""

    // })

    const [read,setRead]=useState([])

    useEffect(()=>{
        const fetchAllRecords=async()=>{
            try{
                const res=await axios.get()
                setRead(res.data.records)
            }catch(err){
                console.log(err)
            }
        }
        fetchAllRecords()
    })

    return(
       
        // <div className="form">
        //     <h1>Add Students</h1>
        //     <input type="number" placeholder="ID" onChange={handleChange} name="ID"/>
        //     <input type="text" placeholder="Department" onChange={handleChange} name="Department"/>
        //     <input type="year" placeholder="Completion_year" onChange={handleChange} name="Completion_year"/>
        //     <input type="text" placeholder="Event_Name" onChange={handleChange} name="Event_Name"/>
        //     <input type="date" placeholder="Event_Date" onChange={handleChange} name="Event_Date"/>
        //     <input type="text" placeholder="Venue" onChange={handleChange} name="Venue"/>
        //     <input type="text" placeholder="student_name" onChange={handleChange} name="student_name"/>
        // </div>
        

        <>
       
            <h1>ADDING STUDENTS</h1>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>DEPARTMENT</th>
                        <th>COMPLETION YEAR</th>
                        <th>EVENT NAME</th>
                        <th>DATE</th>
                        <th>VENUE</th>
                        <th>STUDENT NAME</th>
                    </tr>
                    {read.map((obj)=>{
                        <tr>{obj.ID}</tr>
                    })
                    }
                </tbody>
            </table>
           
            </>
            )
    }
export default Add