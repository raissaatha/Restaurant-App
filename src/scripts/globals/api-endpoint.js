import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_URL}list`,
  DETAIL: (id) => `${CONFIG.API_URL}detail/${id}`,
};

export default API_ENDPOINT;
