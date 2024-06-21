import axios from "axios";
import { IUser } from "../models/IUser";

const baseURL = 'https://dummyjson.com/'
const timeOut = 15000

const config = axios.create({
    baseURL: baseURL,
    timeout: timeOut,
    headers: {'ip': '212.23.45.56'},
    data: {'lang': 'tr'},
})

export const login = (username: string, password: string) => {
    const sendObj = {
        username: username,
        password: password
    }
    return config.post<IUser>('auth/login', sendObj)
}
