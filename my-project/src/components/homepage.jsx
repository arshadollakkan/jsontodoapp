import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

let [state,setstate]=useState([])
let[heading,setheading]=useState([])


// useEffect(()=>{
//        axios.get('http://localhost:4000/ke').then((res)=>{
//         setheading(Object.keys(res.data[2]))
//         setstate(res.data)
//        }).catch((error)=>{console.log(error);})
// },[])

useEffect(()=>{
 try {
    let fetchdata=async()=>{
    let responce=await fetch('http://localhost:4000/ke')
    let data=await responce.json()
    setheading(Object.keys(data[0]))
    setstate(data)
    
    }
    fetchdata()
 } catch (error) {
    
 }
},[])

    return ( 
        <div className=" text-center pt-[300px] ps-[600px]">

        <Link to='/form' className="px-[30px] py-[20px] bg-red-500 rounded-lg">add here</Link>
<table className=" border-separate border-spacing-2   border border-slate-400">
<thead className="">
    <tr className="">
        {
            heading.map((x,i)=>(
                <th className="border border-slate-300" key={i}>{x}</th>
            ))
        }
    </tr>
 </thead>
      
<tbody className="">
        {  
        state.map((x,i)=>(
            <tr key={i} className="">
              <td className="border border-slate-300">{x.id}</td>
              <td className="border border-slate-300">{x.name}</td>
              <td className="border border-slate-300">{x.address}</td>
              <td className="border border-slate-300">{x.occupation}</td>
              </tr>
            
        ))
            }
        
</tbody>
</table>

        </div>
     );
}
 
export default Home;