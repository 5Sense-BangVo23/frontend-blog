import axios from 'axios';

const BASE_URL = 'http://localhost:8555/api/authentication';

export const login = async (loginRequest) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, loginRequest);
      console.log(response.data);
     
      const { token } = response.data;

      localStorage.setItem('accessToken', token);
  
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };


  