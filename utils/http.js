import axios from 'axios';

export async function login(email, password) {
    try {
        // You should set url as an environment variable
        const response = await axios.post('https://foladevelops.onrender.com/api-login', {
            email: email, 
            password: password
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

export async function getPictureURL(token) {
    try {
        const response = await axios.get('https://foladevelops.onrender.com/api-picture', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};