// DATA REQUESTS http://www.omdbapi.com/?apikey=782cdbd1&s=
// POSTER API REQUESTS http://img.omdbapi.com/?apikey=[yourkey]&s=
// API KEY  782cdbd1


async function main () {
    const movies = await fetch(`http://www.omdbapi.com/?apikey=782cdbd1&s=fast`);
    const movieData = movieData.json();
    console.log(movieData)
}

main ();


