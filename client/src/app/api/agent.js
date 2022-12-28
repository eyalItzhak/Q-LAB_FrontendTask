import axios  from 'axios';

axios.defaults.baseURL = "https://randomuser.me/api/"

const responseBody = (response) => response.data.results;

const  getUsers =async(pagesize) => await axios.get(`?page=1&results=${pagesize}&seed=newseed`,{}).then(responseBody);

const agent = {
    getUsers
}

export default agent;

