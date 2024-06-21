import { IUser } from "../models/IUser";

export const setUser = ( user: IUser ) => {
    const stUser = JSON.stringify(user)
    localStorage.setItem('user', stUser)
}