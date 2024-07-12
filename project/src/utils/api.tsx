import axios from "axios";
import { IUser } from "../models/IUser";
import { IProducts, Product } from "../models/IProducts";
import { IQuote } from "../models/IQuote";

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

export const allProducts = (skip: number, limit: number) => {
    return config.get<IProducts>('products', {params: {limit: limit, skip: skip}})
}

export const singleProduct = (id: string) => {
    return config.get<Product>('products/'+id)
}

export const search = (q: string, skip: number, limit: number) => {
    return config.get<IProducts>('products/search', {params: {q: q, limit: limit, skip: skip}})
}

export const randomQuote = () => {
    return config.get<IQuote>('quotes/random')
}
