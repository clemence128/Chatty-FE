import axiosClient from "./axiosClient";

const BASE_URL = {
    GET_MESSAGE: "/conservations/{id}/messages"
}

class MessageService{
    async getMessageByConservation(conservationId){
        try {
            const {data} = await axiosClient.get(BASE_URL.GET_MESSAGE.replace('{id}', conservationId), {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("access_token")
                }
            })

            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default new MessageService();