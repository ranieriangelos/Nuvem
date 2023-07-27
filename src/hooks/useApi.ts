import axios from "axios";
import { AuthProvider } from "../contexts/Auth/AuthProvider";
import { useContext } from "react";


const api = axios.create({
    baseURL: process.env.REACT_APP_API
});


export const useApi = () =>({
    validadeToken: async (token: string) =>{
        return{
            user:{id: 3, name: 'Ranieri', usuario: "angelostattoo"},
        };
        const response = await api.post('/validate', {token});
        return response.data;
    },

    signin: async (email: string, password: string) =>{
        return{
            user:{id: 3, name: "Ranieri", usuario: "angelostattoo"},
            token: '123456789'
        };

        const response = await api.post('/signin', {email, password});
        return response.data;
    },
    logout: async () => {
        return{status:  true}
        const response = await api.post('/logout');
        return response.data;
    }

});