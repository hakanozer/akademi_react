import CryptoJs from 'crypto-js'

const extraKey = process.env.REACT_APP_AESKEY

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJs.AES.encrypt(plainText, extraKey! ).toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJs.AES.decrypt(cipherText, extraKey!)
    const plainText = bytes.toString(CryptoJs.enc.Utf8)
    return plainText
}