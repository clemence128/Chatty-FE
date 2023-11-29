import { createContext, useContext, useEffect } from "react";
import {io} from "socket.io-client";
import { isProduction } from "../config";
import { useSelector } from "react-redux";

const BASE_URL = isProduction() ? import.meta.env.VITE_PROD_BASE_URL.split('/api')[0] : import.meta.env.VITE_DEV_BASE_URL.split('/api')[0];

const SocketContext = createContext()

const socket = io(BASE_URL)
export const SocketProvider = ({children}) => {
    const {currentUser} = useSelector(state => state.user);
    
    useEffect(() => {
        if(currentUser){
            const {email, avatar, name, _id} = currentUser;
            socket.emit('user_login', {email, avatar, name, _id})
        }

    }, [currentUser])
    return <SocketContext.Provider value={{socket}}>{children}</SocketContext.Provider>
}

export const useSocket = () => {
    return useContext(SocketContext);
}