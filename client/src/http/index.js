import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });

  export  const sendUserData =  (data) => api.post('/api/user/register',data)
  export  const verifyUser =  (data) => api.post('/api/user/login',data)