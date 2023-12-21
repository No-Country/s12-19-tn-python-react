async function logMovies() {
    const response = await fetch("https://s12-19-tn-abnb.onrender.com/api/propiedad/");
    const movies = await response.json();
    console.log(movies);
  }
  
  logMovies()