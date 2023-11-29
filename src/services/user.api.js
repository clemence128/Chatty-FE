import axiosClient from "./axiosClient";
const USER_URL = {
    CURRENT_USER: 'users/currentUser',
    SEARCH: '/users'
}

class UserService {
    async getCurrentUser(){
        try {
            const {data} = await axiosClient.get(USER_URL.CURRENT_USER, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });

            return data;
        } catch (error) {
         throw error;   
        }
    }

    async searchUsers(search){
        try {
            const {data} = await axiosClient.get(`${USER_URL.SEARCH}?search=${search}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('access_token')
                }
            });

            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new UserService();