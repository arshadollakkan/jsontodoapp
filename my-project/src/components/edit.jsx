
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Edit = () => {
let [data,setdata]=useState([])
let {id}=useParams()
let nav=useNavigate()

useEffect(()=>{
    axios.get(`http://localhost:4000/ke/${id}`).then((res)=>{
        setdata(res.data)
    }).catch((error)=>{console.log(error);})
},[])
let po=(e)=>{
    e.preventDefault()
   axios.put('http://localhost:4000/ke/'+id,data).then((res)=>{
    alert("sucess full")
    nav('/')


   }).catch((error)=>{
    console.log(error);
   })
}

    return ( 
        <div>
              <form action="" className="" onSubmit={po} >
            <div>
                <label htmlFor="">name: </label>
                <input type="text" name="name"  value={data.name}  onChange={e=>setdata({...data,name:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="">address: </label>
                <input type="text" name="address"  value={data.address}   onChange={e=>setdata({...data,address:e.target.value})}/>
            </div>
            <div>
                <label htmlFor="">occupation: </label>
                <input type="text"  value={data.occupation}  onChange={e=>setdata({...data,occupation:e.target.value})}/>
            </div>
            <button className="bg-red-500 py-[10px] px-[20px]">update</button>
            
        </form>
        </div>
     );
}
 
export default Edit;