import axios from "axios";
import { IUser } from "../models/IUser";
import { IProducts, Product } from "../models/IProducts";

const baseURL = process.env.REACT_APP_BASE_URL!
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

export const allProducts = () => {
    return config.get<IProducts>('products')
}

export const singleProduct = (id: string) => {
    return config.get<Product>('products/'+id)
}
