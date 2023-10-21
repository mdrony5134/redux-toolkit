import { useEffect } from "react"
import GetUser from "./CustomHook/GetUser"
import { Outlet, useNavigate } from "react-router-dom"

const AuthLayout = () => {
    const navigate = useNavigate()
    const user = GetUser()
   useEffect(()=>{
    if(user?.email)navigate('/')
   },[navigate, user])
  return (
    <div>
        <h1>Please Login and See Portfolio</h1>
        <Outlet/>
        {/* <Link to={'/login'}>Go to Login</Link> */}
        
    </div>
  )
}

export default AuthLayout