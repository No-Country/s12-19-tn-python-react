import { Outlet } from "react-router-dom"
import '../style/Auth_Layout.css'
const AuthLayout = () => {
  return (
      <main className="main">            
            <Outlet />
      </main>
  )
}

export default AuthLayout