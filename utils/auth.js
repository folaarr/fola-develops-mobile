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