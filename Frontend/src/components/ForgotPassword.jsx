import { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "./Alert"
import axiosClient from "../config/axiosClient"
import { Form, Input } from "antd"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState({})

    const handleSubmit = async e => {

        e.prevenDefault();
        if (email === '' || email.length < 10) {
            setAlert({
                msg: 'La dirección de correo es obligatoria',
                error: true
            })
            return
        }
        try {
            const { data } = await axiosClient.post('/forgot-password', { email })
            
        } catch (error) {
            console.log('error')
        }
    }

    const { msg } = alert

    return (
        <div className="formulario">
            {msg && <Alert alert={alert} />}
            <Form onSubmit={handleSubmit}>
            <h1>Escribe tu email para recuperar
                tu cuenta</h1>


                <div>
                    <label>Email</label>

                    <Input
                        type="email"
                        placeholder="Ingrese su Correo"                        
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <Input
                    type="submit"
                    value={'Enviar Email'}
                    />
            <nav>
                <Link to='/login'>Ya tienes una cuenta? Inicia Sesión</Link>
                <br />
                <Link to='/register'>¿No tienes una cuenta? Regístrate</Link>
            </nav>
            </Form>

        </div>
    )
}

export default ForgotPassword
