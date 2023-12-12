import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from "./Alert"
import axiosClient from "../config/axiosClient"

const NewPassword = async () => {
    const [password, setPasword] = useState('')
    const [validToken, setValidToken] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)
    const [alert,setAlert]=useState({})

    const params = useParams()
    const { token } = useParams()
    console.log(params)


    useEffect(() => {
        const checkToken = async () => {
            try {
                const { data } = await axiosClient(`/forgot-password/${token}`)
                console.log(data)
                setValidToken(true)
            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error:true
                })
            }
        }
    })

    const { msg } = alert

    const handleSubmit = async e => {
        e.preventDefault()

        if (password.length < 6) {
            setAlert({
                msg: 'la contraseña no puede ser menor a 6 caracteres',
                error: true
            })
            return
        }
    }

    try {
        const url = `/forgot-password/${token}`
        const { data } = await axiosClient.post(url, { password })
        setAlert({
            msg: data.msg,
            error: false
        })
        setPasswordChanged(true)
    } catch (error) {
        setAlert({
            msg: error.response.data.msg,
            error: true
        })
    }

    return (
        <>
            {msg && <Alert alert={alert} />}
            <h1>Restablece tu contraseña</h1>

            {validToken && (<form onSubmit={handleSubmit}>
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={e => setPasword(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value={'Guardar Nueva Contraseña'} />
            </form>
            )}

            {passwordChanged && (
                <Link to='/login'>Inicia Sesión</Link>
            )}
        </>
    )
}

export default NewPassword