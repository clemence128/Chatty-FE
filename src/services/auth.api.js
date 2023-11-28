import axiosClient from "./axiosClient";
const AUTH_URL = {
    REGISTER: 'auth/signup'
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

}

export default new AuthService();