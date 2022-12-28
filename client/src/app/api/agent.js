import axios  from 'axios';

axios.defaults.baseURL = "https://randomuser.me/api/?page=1&results=10&seed=newseed"

const responseBody = (response) => response.data.results;

const  getUsers =async() => await axios.get().then(responseBody);

const agent = {
    getUsers
}

export default agent;

