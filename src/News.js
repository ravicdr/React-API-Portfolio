import REACT,{useEffect,useState} from 'react';
import './index.css';
const News=()=>{
const [news,setnews]=useState([]);
const [arnews,setarnews]=useState([]);
const getUsers=async()=>{
    const response=await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1c76744d02b8476aa82edab01188e322');
    const resJson =await response.json();
  //// setarnews(await response.articles.json());
    //console.log(resJson);
   // setnews(resJson)
   console.log(resJson.articles);
    setnews(resJson.articles)
 
}
useEffect(()=>{
   getUsers(); 
},[]);



return(
<> <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Update with Deepak</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<br/>
<br/>
<h1 className="heading1">Top Headlines <span class="badge badge-secondary">daily</span></h1>
    <div className="container-fluid mt-5">
    <div className="row text-center">
    {
      
         
         news.map((currel) => {
        return(
     <>
     <div className="col-10 col-md-4 mt-5">
         <div className="card" id="cardid" >
<img src={currel.urlToImage}/>
<div className="card" >
<ul className="list-group list-group-flush">
<h5 className="card-title">{currel.title}</h5>
<li className="list-group-item"><h2></h2></li>
<li><p className="card-text">{currel.description}</p></li>
</ul>
<div className="card-footer" >

<a href={currel.url}>&nbsp; Read Full News</a>

</div>
</div>


</div>
</div>
     </>
        )
         })
     }
    
  
               
            )
  
   
    </div>
    </div></>
)
}
export default News;