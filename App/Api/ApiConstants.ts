const BASE_URL = 'https://maps.googleapis.com/maps/api';
const GOOGLE_PLACE_API = 'YOUR_GOOGLE_MAPS_API_KEY';

const ApiConstants = {
  BASE_URL,
  PLACE_API: (query: string) =>
    `${BASE_URL}/place/textsearch/json?query=${query}&key=${GOOGLE_PLACE_API}`,
};

export default ApiConstants;
