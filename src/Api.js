import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'
export const searchRobots = async(term) => {
    const response = await axios.get(`${url}`);

    return response.data
}
