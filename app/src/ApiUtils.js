import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'http://localhost:8555/api/authentication';

export const login = async (loginRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, loginRequest);
    console.log(response.data);

    const { token, expiresIn } = response.data;

    // Set the token in localStorage
    localStorage.setItem('accessToken', token);

    // Set the token as a cookie with an expiration time
    Cookies.set('accessToken', token, { expires: new Date(expiresIn) });

    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = Cookies.get('refreshToken');

    // Make a request to the server to refresh the access token
    const response = await axios.post(`${BASE_URL}/refresh-token`, { refreshToken });

    const { token, expiresIn } = response.data;

    // Update the stored token in localStorage
    localStorage.setItem('accessToken', token);

    // Update the stored token in the cookie with a new expiration time
    Cookies.set('accessToken', token, { expires: new Date(expiresIn) });

    return response.data;
  } catch (error) {
    console.error('Token refresh failed:', error);
    throw error;
  }
};

export const getCurrentUserById = async (id) => {
  try {
    // Prefer cookies over localStorage
    const token = Cookies.get('accessToken') || localStorage.getItem('accessToken');

    if (!token) {
      console.error('Token not found in cookies or localStorage');
      return null;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    console.log('Fetching current user data by ID...');
    const response = await axios.get(`${BASE_URL}/user/${id}`, config);
    console.log('User data:', response.data);

    return response.data;
  } catch (error) {
    console.error('Failed to fetch current user data:', error);
    throw error;
  }
};

export const logout = () => {
  // Remove the stored tokens (localStorage and cookies) on logout
  localStorage.removeItem('accessToken');
  Cookies.remove('accessToken');
};
