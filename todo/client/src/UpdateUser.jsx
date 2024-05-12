import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from 'axios'

 function UpdateUser() {
    const {id} = useParams()
    const [name,setName] = useState()
    const[email,setEmail] = useState()
    const[age, setAge] = useState()
    const Navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://127.0.0.1:3001/getUser/'+id)
        .then(result => {
            console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault();
        axios.put('http://127.0.0.1:3001/updateUser/'+id, {name, email, age})
        .then(result => Navigate('/'))
        .catch(err => console.log(err))
    } 


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
            <h2>Update User</h2>
            <div className='mb-2'>
                <label htmlFor="">Name</label>
                <input type='text' placeholder='Enter Name' className='form-control'
                value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Email</label>
                <input type='text' placeholder='Enter Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor="">Age</label>
                <input type='text' placeholder='Enter Age' className='form-control' value={age} onChange={(e) => setAge(e.target.value)}></input>
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
        </div>
        </div>
  )
}

export default UpdateUser