import { IUser } from "../models/IUser";
import { decrypt, encrypt } from "./aes";

export const setUser = ( user: IUser ) => {
    const stUser = JSON.stringify(user)
    const cipherStUser = encrypt(stUser)
    localStorage.setItem('user', cipherStUser)
}

export const getUser = () : IUser | null => {
    const stUser = localStorage.getItem('user')
    if (stUser) {
        try {
            const plainText = decrypt(stUser)
            const user = JSON.parse(plainText) as IUser
            return user 
        } catch (error) {
            localStorage.removeItem('user')
        }
    }
    return null
}