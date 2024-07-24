import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Form = () => {


let nav=useNavigate()




    let [form,setform]=useState({name:'',address:'',occupation:''})
    let sub=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/ke',form).then((res)=>{
            alert("data added success full")
            nav('/')
        }).catch((error)=>{console.log(error);})

        // fetch('http://localhost:4000/ke',{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(form)
        // })
        // alert("data added success full")
        //    nav('/')

      
    }
    return ( 
        <div className="mx-auto text-center mt-[200px]">
        <form action="" className="" onSubmit={sub}>
            <div>
                <label htmlFor="">name</label>
                <input type="text" name="name" placeholder="enter your name"  onChange={e=>setform({...form,name: e.target.value})} />
            </div>
            <div>
                <label htmlFor="">address</label>
                <input type="text" name="address" placeholder="enter your address "  onChange={e=>setform({...form,address: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="">occupation</label>
                <input type="text" placeholder="enter occupation"  onChange={e=>setform({...form,occupation:e.target.value})}/>
            </div>
            <button className="bg-red-500 py-[10px] px-[20px]">submit</button>
        </form>
        </div>
     );
}
 
export default Form;