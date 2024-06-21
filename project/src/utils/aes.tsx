import CryptoJs from 'crypto-js'

export const encrypt = (plainText: string) => {
    const cipherText = CryptoJs.AES.encrypt(plainText, 'key123' ).toString()
    return cipherText
}

export const decrypt = (cipherText: string) => {
    const bytes = CryptoJs.AES.decrypt(cipherText, 'key123')
    const plainText = bytes.toString(CryptoJs.enc.Utf8)
    return plainText
}