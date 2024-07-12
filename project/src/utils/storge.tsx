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

export const likeControl = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if(stLikes) {
        // add - remove
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.findIndex(item => item === id)
        if (index > -1) {
            // remove
            arr.splice(index, 1)
        }else {
            // add
            arr.push(id)
        }
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }else {
        // create arr - add
        const arr = [id]
        const stArr = JSON.stringify(arr)
        localStorage.setItem('likes', stArr)
    }
}

export const allLike = () => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        return arr
    }else {
        return []
    }
}

export const findLike = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        const arr = JSON.parse(stLikes) as number[]
        return arr.some(item => item === id)
    }
    return false
}