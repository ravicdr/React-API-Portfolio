import REACT,{useEffect,useState} from 'react';
const News=()=>{
const [news,setnews]=useState([]);
const [arnews,setarnews]=useState([]);
const getUsers=async()=>{
    const response=await fetch('https://api.covid19api.com/summary');
    console.log(response.author)
  // setarnews(await response.articles.json());
   
    setnews(await response.json());
  //  console.log(data)
}
useEffect(()=>{
   getUsers(); 
},[]);



return(
    <div className="container-fluid mt-5">
    <div className="row text-center">
    {
        
    }
  
                <div className="col-10 col-md-4 mt-5">
    <div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{news['Countries'].length}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
            )
  
   
    </div>
    </div>
)
}
export default News;