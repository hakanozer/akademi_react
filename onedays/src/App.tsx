import React from 'react'
import { IUser } from './models/IUser'
import { action, addProduct, execute, removeProduct } from './util'
import { IProduct } from './models/IProduct'
import { IHeader } from './models/IHeader'

function App() {

  const name = 'Mehmet'
  var surname = 'Bilmem'
  surname = 'Bil'
  let age = 30
  age = 25
  var surname = "Ali"
  const num1 = 10.4
  console.log(num1)
  //let age = 20
  const status = false
  let obj:any = 10
  obj = 'Ömer'
  
  const arr:string[] = []
  arr.push('Ali')
  arr.push("Zehra")
  const item = arr[0]

  let obj1:string | null | number = null
  obj1 = ""
  if (obj1) {
    
  }

  const user1:IUser = {
    name: "Mehmet",
    surname: "Bilmem",
    age: 30,
    status: false
  }
  const user2:IUser = {
    name: "Zehra",
    surname: "Bil",
    age: 25,
    status: true
  }
  const user3:IUser = {
    name: "Ahmet",
    surname: "Bilsin",
    age: 35,
    status: false,
    address: {
      aid: 10,
      detail: "Detail Data"
    }
  }
  const arr1:IUser[] = [user1, user2, user3]
  arr1.forEach(item => {
    if (item.address) {
      console.log(item.address.detail.length)
    }else {
      console.log(item.name)
    }
  })


  function action1() {
    var surname = ""
    var a = 10
    let b = 10 
  }

  action({pid: 10, title: "TV"})
  
  const pro1:IProduct = {
    title: 'Audi A5',
    price: 2500000
  } 
  const newPro = addProduct(pro1)
  console.log(newPro)

  const pro2 = removeProduct(pro1)
  if (typeof pro2 === 'number') {
    console.log("Type Number")
  }
  if (typeof pro2 === "string") {
    console.log("Type Sstring")
  }
  
  execute("www.kaan.com", () => {
    const rnd = Math.random() * 100
    return rnd
  })

  const click = () => {
    console.log("Click Call")
  }
  const header: IHeader = {
    title: 'Send User',
    click: click
  }

  const btn = <button>Send</button>

  return (
    <>
      <div>App</div>
      <div>{user1.name} {user1.surname}</div>
      { btn }
      <button onClick={() => header.click()} >{header.title}</button>
    </>
  )

}

export default App


