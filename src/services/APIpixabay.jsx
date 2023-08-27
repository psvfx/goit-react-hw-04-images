import axios from 'axios';

const API_KEY = '38192027-861d4e16491b6b9cd5923fcdb';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const defaultParams = {
  key: API_KEY,
  imageType: 'photo',
  per_page: 12,
  orientation: 'horizontal',
};

export async function getImages({ query, page }) {
  const params = {
    ...defaultParams,
    q: query,
    page: page,
  };

  const response = await axios.get('', { params });

  return response.data;
}
