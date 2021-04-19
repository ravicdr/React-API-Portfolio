
import REACT, {useEffect, useState}from 'react';
const Nasa=()=>{
//    const date="";
    const [data,setdata]=useState("");
    const getUsers=async()=>{
        const response=await fetch('https://api.nasa.gov/planetary/apod?api_key=ZtvbrDGKtAdwSpLyqAZl4AA47pI09RuBSbeLZb3y');
        const resJson =await response.json();
        console.log(resJson.date)
      //  date=resJson.date
      setdata(resJson)
      // setarnews(await response.articles.json());
       
        //setnews(await response.json());
      //  console.log(data)
    }
    useEffect(()=>{
       getUsers(); 
    },[]);



    return (
        <><br/>
        <br/>
        <br/>
        <h1>NASA Daily Article</h1>
        <br/>
        <br/>
        <div className="card">
  <img src={data.hdurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.date}</h5>
    <h3 className="card-title">{data.title}</h3>
    <p className="card-text">{data.explanation}</p>
    <a href="https://www.nasa.gov/news/releases/latest/index.html" className="btn btn-primary">Click for more updates</a>
  </div>
</div>
        </>

    )
}
export default Nasa;