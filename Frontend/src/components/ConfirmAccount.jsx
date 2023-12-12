import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Alert from "./Alert"
import axiosClient from "../config/axiosClient"

const ConfirmAccount = () => {
    const [alert, setAlert] = useState({})
    const [confirm, setConfirm] = useState(false)

    const params = useParams()
    const { token } = params

    useEffect(() => {
        const confirmAccount = async () => {
            try {

                const { data } = await axiosClient(`/confirm/${token}`)

                setAlert({
                    msg: data.msg,
                    error: false
                })
                setConfirm(true)
            } catch (error) {
                setAlert({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        confirmAccount()
    }, [])

    const { msg } = alert

    return (
        <>
            <h1>Confirmación de cuenta</h1>
            <div>
                {msg && <Alert alert={alert} />}
                {confirm && (
                    <Link to='/login'>Inicia Sesión</Link>
                )}
            </div>
        </>
    )
}

export default ConfirmAccount