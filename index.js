// DATA REQUESTS http://www.omdbapi.com/?apikey=782cdbd1&s=fast
// API KEY  782cdbd1

// let arr = Object.entries();

async function main() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=782cdbd1&s=fast");
  const moviesData = await movies.json();
  console.log(
    moviesData.map(
      (movie) => `<div class="movie-card">
    <div class="movie-card__container">
    <h3>Movie Title</h3>
    <figure><img src="https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg" alt=""></figure>
    <p><b>Year:</b>2013</p>
    <p><b>Type:</b>Movie</p>
    <p><b>imdbID:</b>tt1905041</p>
    </div>
    </div>`
    )
    .join('')
  );
}

main();
