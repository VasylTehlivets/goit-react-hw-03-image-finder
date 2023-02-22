import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '33190879-a40024b526a607573093145e5',
  image_type: 'photo',
  orientation: 'horizontal',
  // safesearch: true,
  // page: page,
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};


// export const fetchImages = async (query, page) => {
//   const response = await axios.get('https://pixabay.com/api/', {
//     method: 'get',
//     params: {
//       key: '2857319-3e88db59d4c1fb5299f0a9a73',
//       q: query,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: 12,
//       page: page,
//     },
//   });
//   return response.data.hits;
// };