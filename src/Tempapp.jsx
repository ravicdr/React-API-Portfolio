import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Tempapp=()=>{
  const pic="";
  const [city,setCity]=useState(null);
  const [search,setSearch]=useState("Mumbai")
  const [city2,setSearch2]=useState(null);
  const [mosam,setMossom]=useState("https://images.unsplash.com/photo-1517758478390-c89333af4642?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80");
  useEffect(()=>{
    const fetchApi=async()=>{
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f499747853c6d000a227681274e3c2c`
      const response =await fetch(url);
      const resJson =await response.json();
      console.log(resJson);
     
     setSearch2(resJson.weather);
   //  console.log(city2[0])
 // cit=resJson.weather[0].main;
  setCity(resJson.main);
    };
    fetchApi();
  },[search])
 
  
    return(  <>
    {}
   <nav className="navbar navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="https://cdn.dribbble.com/users/1677939/screenshots/8817404/google_icon_-_dribbble.jpg" alt="" width="150" height="120"/>
    </a>
  </div>
</nav>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
  <form className="d-flex">
   { "                                  "}   <input className="inputField" type="search" placeholder="Search" onChange={(event)=>{setSearch(event.target.value)}}/>
     
  </form>
 
  </div>
  {
    !city ? (
      <p>No Data Found Deepak</p>
    ) : (<div>
    <br/>
  
  
    <div className="card bg-dark text-white">
  
    
  <img src={mosam} className="card-img" alt="..."/>
  <div className="card-img-overlay">
  <h5 className="card-title">{search}</h5>
    <p className="card-text">{city.temp} *C</p>
    <p className="card-text">feels like  { city.feels_like} *C</p>
    <p className="card-text"> min  {city.temp_min} *C | max  {city.temp_max} *C</p>
    {
      !city2 ? (
      <p>No wether Data Found Deepak</p>
    ) : (<div>
    
      { 
        console.log(city2[0].main)
      }
      <div>
      {city2[0].main==="Clear" ? (
     // alert("clear")
     <div>
      <img src="https://thumbs.dreamstime.com/b/sun-icon-rays-vector-illustration-weather-forecast-clear-logo-symbol-141682492.jpg" alt="" width="100" height="80"/>
     </div>
     
    // console.log("Clear")
     
     // setMossom("https://images.unsplash.com/photo-1517758478390-c89333af4642?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZSUyMHNreXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
      ) : (
city2[0].main==="Haze"?(
  <img src="https://www.nicepng.com/png/detail/123-1236627_haze-icon-png-haze-weather-icon.png" alt="" width="100" height="80"/>
):
city2[0].main==="Rain"?(
  <img src="https://cdn.w600.comps.canstockphoto.com/rainy-weather-forecast-icon-vector-clipart_csp43597503.jpg" alt="" width="100" height="80"/>
):

  city2[0].main==="Clouds"?(
    <img src="https://cdn1.vectorstock.com/i/1000x1000/71/80/weather-icon-with-sun-and-clouds-vector-11107180.jpg" alt="" width="100" height="80"/>
  ):


<img src="https://media-exp1.licdn.com/dms/image/C4E03AQH6cBuUW1OxWQ/profile-displayphoto-shrink_200_200/0/1592554402587?e=1623888000&v=beta&t=VHltr8ZZnPkY2cb6tT_aQ8aM19DY7fS5k2RW6bAIQX0" alt="" width="100" height="80"/>

      )}
     

    </div>
      
      
      
        <h2>{city2[0].main}</h2>

    </div>
    )
     // console.log(city2[0].main)
    }
    

  </div>
</div>
  </div>
    )}
  </nav>
<></>

        </>
    );
    

    };
export default Tempapp;