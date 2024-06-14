export interface IUser {
    name: string
    surname: string
    age: number
    status: boolean
    address?: IAddress
}

export interface IAddress {
    aid: number
    detail: string
}