import { useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from '../config/axiosClient';
import Alert from "./Alert";
import { Form, Input } from "antd";

const UserForm = () => {
  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [wsp, setWsp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [direction, setDirection] = useState('')
  const [document, setDocument] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([userName, firstName, lastName, wsp, email,
      password, repeatPassword, direction, document].includes('')) {
      setAlert({
        msg: '¡Todos los campos son obligatorios!',
        error: true
      })
      return
    }
    if (password !== repeatPassword) {
      setAlert({
        msg: '¡Las contraseñas no coinciden!',
        error: true
      })
      return
    }
    if (password.length < 6) {
      setAlert({
        msg: 'La contraseña debe ser mayor a 5 caracteres',
        error: true
      })
      return
    }
    setAlert({})
    try {
      const { data } = await axiosClient.post('/perfis', {
        userName, firstName, lastName, wsp, email,
        password, direction, document
      })
      setUserName('')
      setFirstName('')
      setLastName('')
      setWsp('')
      setEmail('')
      setPasword('')
      setRepeatPassword('')
      setDirection('')
      setDocument('')
      error: false
    } catch (error) {
      console.log(error)
      error: true
    }
  }

  const { msg } = alert

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1>Registro</h1>

        {msg && <Alert alert={alert} />}

        <div >
          <label
          >Usuario</label>

          <Input
            type="text"
            placeholder="Ingrese su Usuario"

            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div >
          <label
          >Nombre</label>

          <Input
            type="text"
            placeholder="Ingrese su nombre"

            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div >
          <label
          >Apellido</label>

          <Input
            type="text"
            placeholder="Ingrese su apellido"

            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div >
          <label>Número de contacto</label>

          <Input
            type="text"
            placeholder="Ingrese su Whatsapp"

            value={wsp}
            onChange={e => setWsp(e.target.value)}
          />
        </div>

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
            onChange={e => setPasword(e.target.value)}
          />
        </div>

        <div >
          <label
          >Confirmar Contraseña</label>
          <Input
            type="password"
            placeholder="Ingrese nuevamente su contraseña"

            value={repeatPassword}
            onChange={e => setRepeatPassword(e.target.value)}
          />
        </div>
        <div >
          <label
          >Dirección</label>
          <Input
            type="text"
            placeholder="Ingrese la dirección de la propiedad"

            value={direction}
            onChange={e => setDirection(e.target.value)}
          />
        </div>
        <div >
          <label
          >Documento</label>
          <Input
            type="text"
            placeholder="Ingrese su DNI"

            value={document}
            onChange={e => setDocument(e.target.value)}
          />
        </div>

        <Input
          type="submit"
          value={'Crear Cuenta'}
        />
      </Form>

    </>
  )
}

export default UserForm
