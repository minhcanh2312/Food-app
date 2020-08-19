import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer bV7WgyEPqVYV13kd5eeh-yinouxczMx6oJL1T2zrlsW3NESyhv2DFCd9dHpXyUfGVa7fv1EE73ySNBBqjZn7chhaHpOHxggQRc0f1474G22DR74fvzhnuT5x6D8yX3Yx'
    }
})