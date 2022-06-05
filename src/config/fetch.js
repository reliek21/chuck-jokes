const BASE_URL = 'https://api.chucknorris.io/';

const ChuckApi = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`)
    .then(res => res.json())
    .then(data => data.value);

  return response;
}

export default ChuckApi;