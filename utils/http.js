import axios from 'axios';

export async function login(email, password) {
    try {
        // You should set url as an environment variable
        const response = await axios.post('http://192.168.43.129:5000/api-login', {
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
        const response = await axios.get('http://192.168.43.129:5000/api-picture', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};