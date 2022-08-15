const BASE_URL = 'https://pixabay.com/api';
const MY_KEY = '28307457-276a4b73cc8c58457e890f21b';

function fetchPictures(name, pageNumber) {

    const searchName = name.replace(" ", "+");

    console.log(`${BASE_URL}/?key=${MY_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`);
   
    return fetch(`${BASE_URL}/?key=${MY_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${pageNumber}`)
        .then(response => {
            return response.json();
        }
  );
}

export default fetchPictures;