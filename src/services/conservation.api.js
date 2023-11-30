import axiosClient from "./axiosClient";
const BASE_URL = {
    GET_CONSERVATION: '/conservations'
}

class ConservationService{
    async getConservations(){
        try {
            const {data} = await axiosClient.get(BASE_URL.GET_CONSERVATION, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })

            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new ConservationService();