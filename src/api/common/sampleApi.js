import axios from 'axios';

const getSampleJson = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

export { getSampleJson };
