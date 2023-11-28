import axiosClient from "./axiosClient";
const AUTH_URL = {
    REGISTER: 'auth/signup',
    REFRESH_TOKEN: 'auth/refreshToken'
}

class AuthService{
     async signup({email, name, password}) {
       try {
           const {data} = await axiosClient.post(AUTH_URL.REGISTER, {email: email, name: name, password: password})
   
           return data;
       } catch (error) {
           throw error;
       }
    }

    async refreshToken(){
        try { 
            const {data} = await axiosClient.post(AUTH_URL.REFRESH_TOKEN, {
                refreshToken: localStorage.getItem('refresh_token')
            })
            return data;
        } catch (error) {
            throw error;
        }
    }

}

export default new AuthService();