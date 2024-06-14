import { IProduct } from "./models/IProduct"

export const action = (obj: {pid: number, title: string}) =>  {
    console.log(obj.pid, obj.title)
}

export const addProduct = (pro: IProduct) : IProduct =>  {
    pro.pid = Math.random() * 100
    pro.pid = parseInt(""+pro.pid)
    return pro
}

export const removeProduct = (pro: IProduct | null) : number | string => {
    if (pro) {
        if (pro.price > 100) {
            return 200
        }
    }else {
        return "Empty!"
    }
    return 10
}

export const execute = (url: string, callBack: () => number) => {
    console.log(url)
    const end =  callBack()
    if (end > 10) {
        console.log("number value")
    }
}