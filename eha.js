const ul = document.getElementById('countries'); // Get the list where we will place our countries
const url = 'https://restcountries.eu/rest/v2/region/africa'; // Get Data

const getPosts = () => {
    fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(posts => console.log(posts))
}