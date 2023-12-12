import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosClient from "../config/axiosClient";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { data } = await axiosClient.post('/login', { email, password })
            console.log("try")
            localStorage.setItem('token', data.token)
            navigate('/')
        } catch (error) {
            console.log("error")
        }
    }


    return (

        <>
            <h1 >Inicia Sesión</h1>
            <form 
                onSubmit={handleSubmit}
            >
                <div >
                    <label 
                    >Email</label>

                    <input
                        type="email"
                        placeholder="Ingrese su Correo"
                        
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div >
                    <label 
                    >Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </div>
                <input
                    type="submit"
                    value={'Iniciar Sesión'}
                    
                />
            </form>
            <nav >
                <Link                    
                    to='/register'>¿No tienes una cuenta? Regístrate
                </Link>
                
                <Link
                    to='/forgot-password'>¿Olvidaste la contraseña?
                </Link>
            </nav>

        </>
    )
}

export default Login