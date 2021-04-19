import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Useeffectapi=()=>{
    const [users,setusers]=useState([]);
    const getUsers=async()=>{
        const response=await fetch('https://api.github.com/users');
        console.log(response)
        setusers(await response.json());
      //  console.log(data)
    }
    useEffect(()=>{
       getUsers(); 
    },[]);
    return(
       <>
       
       <h1  >Top Github Users </h1>
       
         
         <div className="container-fluid mt-5">
         <div className="row text-center">

         {
         
             users.map((currel) => {
            return(
         <>
         <div className="col-10 col-md-4 mt-5">
             <div className="card" >
  <img src={currel.avatar_url}/>
  <div className="card" >
  <ul className="list-group list-group-flush">
  <li className="list-group-item"><h2>{currel.login}</h2></li>
   
  </ul>
  <div className="card-footer" >
 
<a href={currel.html_url}>&nbsp; View Profile</a>
   
  </div>
</div>

  
</div>
</div>
         </>
            )
             })
         }
         
         </div>
         </div>
        </>
    )
}
export default Useeffectapi;