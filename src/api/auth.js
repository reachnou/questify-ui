import axios from './axios';

// Function to log in a user
export const login = async (data) => {
    try {
        const response = await axios.post('/auth/login', data);
        console.log("Login Res: ", response);
        return response.data;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
};

// Function to log out a user
export const logout = () => {
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
};

// Initialize the Axios headers if token is stored in localStorage
const storedToken = localStorage.getItem('user');
if (storedToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
}

export const userDetails = JSON.parse(localStorage.getItem("user"));

// You might also want to handle token refresh logic here
