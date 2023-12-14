import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosClient from "../config/axiosClient";
import { Form, Input } from "antd";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const { data } = await axiosClient.post('/login', { email, password })
            console.log("try")
            navigate('/')
        } catch (error) {
            console.log("error")
        }
    }


    return (
        
        <div className="formulario">
            <Form onSubmit={handleSubmit}>
            <h1 >Inicia Sesión</h1>
                <div >
                    <label 
                    >Email</label>

                    <Input
                        type="email"
                        placeholder="Ingrese su Correo"
                        
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div >
                    <label 
                    >Contraseña</label>
                    <Input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                </div>
                <br />
                <Input
                    type="submit"
                    value={'Iniciar Sesión'}
                    
                />
            <nav >
                <Link                    
                    to='/register'>¿No tienes una cuenta? Regístrate
                </Link>
                <br />
                <Link
                    to='/forgot-password'>¿Olvidaste la contraseña?
                </Link>
            </nav>
            </Form>
            </div>
    )
}

export default Login