fetch('/api/movies').then(response=> response.json()).then(data=>{
  const container = document.getElementById("movie-container");

  data.forEach(movie=>{
    const movieitem = `
    <div class = "movie-item">
    <img src=${movie.Poster} alt="${movie.Name}">
    <h2>${movie.Name}</h2>
    <a href=${movie.Link} class = "MovieLink"  target="_blank"><button>Watch Now</button></a> 
    </div>
    `;
    container.innerHTML +=movieitem;
  })
})