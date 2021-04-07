import api from 'apisauce';

const HttpClient = api.create({
  timeout: 20000,
});

export default HttpClient;