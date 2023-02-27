function getMovies(){
    movieName=movname.value
    
    if(movieName.length<=0)
    {
        result1.innerHTML=`<h3 class="err">oops! enter any movie name</h3>`
    }
    else{
        fetch(`https://omdbapi.com/?t=${movieName}&apikey=ccb42ed2`).then(res=>res.json()).then((detail)=>{
        if(detail.Response=='True')
        {
            mov(detail)
        }
        else{
            result1.innerHTML=`<h3 class="err">${detail.Error}</h3>`
        }
        
        });
    
}
}
function mov(movdata){
    moviename=movdata.Title
    movieposter=movdata.Poster
    movieimdbrating=movdata.imdbRating
    movierating=movdata.Rated
    movieyear=movdata.Year
    movieduration=movdata.Runtime
    movierelease=movdata.Released
    movielanguages=movdata.Language
    moviegenre=movdata.Genre
    movieactors=movdata.Actors
    moviedes=movdata.Plot
    

    result1.innerHTML=`<div class="info">
    <img src="${movieposter}" class="poster" >
    <div>
      <h2>${moviename}</h2>
      <div class="rating">
            <img src="./images/star.png">
            <h4>${movieimdbrating}</h4>
            </div>
       <div class="details">
            <span>${ movierating}</span>
            <span>${ movieyear}</span>
            <span>${movieduration }</span>
       </div> 
       <div class="genre">
       <div>${movdata.Genre.split(",").join("</div><div>")}</div>
       </div> 
    </div>
  </div>
  <h3>Plot:</h3>
  <p>${moviedes}</p>
  <h3>Cast:</h3>
  <p>${movieactors}</p>`;
    


}