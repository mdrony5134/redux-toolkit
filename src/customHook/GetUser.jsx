import { useEffect, useState } from "react"

const GetUser = () => {
  const [user, setUser] = useState()
  const getUserData = () =>{
    let data = null;
    if(typeof window !== "undefined"){
      data = localStorage.getItem("user")
      data = data?JSON.parse(data):{username:null, password:null}
    }
    return data
  }
  useEffect(()=>{setUser(getUserData())},[])
  return user
}

export default GetUser