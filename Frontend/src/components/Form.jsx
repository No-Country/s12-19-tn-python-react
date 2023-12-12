import { useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from '../config/axiosClient';
import Alert from "./Alert";

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([firstName, lastName, email, password, repeatPassword].includes('')) {
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
    
  }

  const { msg } = alert

return (
  <>
    <div>
      <h1 className="">Registro</h1>

      {msg && <Alert alert={alert}/>}

      <form 
      className=""
      onSubmit={handleSubmit}
      >
        <div className="">
          <label className=""
            >Nombre</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            className=""
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
          />
        </div>
        <div className="">
          <label className=""
            >Apellido</label>

          <input
            type="text"
            placeholder="Ingrese su apellido"
            className=""
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
          />
        </div> 
        
        <div className="">
          <label className=""
            >Email</label>

          <input
            type="email"
            placeholder="Ingrese su Correo"
            className=""
          value={email}
          onChange={e=>setEmail(e.target.value)}
          />
        </div>

        <div className="">
          <label className=""
            >Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className=""
            value={password}
            onChange={e=>setPasword(e.target.value)}
          />
        </div>

        <div className="">
          <label className=""
            >Confirmar Contraseña</label>
          <input
            type="password"
            placeholder="Ingrese nuevamente su contraseña"
            className=""
            value={repeatPassword}
            onChange={e=>setRepeatPassword(e.target.value)}
          />
        </div>      

        <input
          type="submit"
          value={'Crear Cuenta'}
          className=""
        />        
      </form>
      </div>

  </>
)
}

export default Form
import { useState } from "react"
import Alert from "./Alert";
import "../style/Form.css"
const Form = () => {


  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPasword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if ([firstName, lastName, email, password, repeatPassword].includes('')) {
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
    
  }

  const { msg } = alert

return (
  <>
  <div className="body">
    {msg && <Alert alert={alert}/>}

    <form 
    className="form"
    onSubmit={handleSubmit}
    >
      <h1 className="title">Registro</h1>
      <div className="head_log">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          className="place_holder"
          value={firstName}
          onChange={e=>setFirstName(e.target.value)}
        />
      </div>

      <div className="head_log">
        <label>Apellido</label>
        <input
          type="text"
          placeholder="Ingrese su apellido"
          className="place_holder"
          value={lastName}
          onChange={e=>setLastName(e.target.value)}
        />
      </div> 

      <div className="head_log">
        <label>Email</label>
        <input
          type="email"
          placeholder="Ingrese su Correo"
          className="place_holder"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />
      </div>

      <div className="head_log">
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          className="place_holder"
          value={password}
          onChange={e=>setPasword(e.target.value)}
        />
      </div>

      <div className="head_log">
        <label>Confirmar Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese nuevamente su contraseña"
          className="place_holder"
          value={repeatPassword}
          onChange={e=>setRepeatPassword(e.target.value)}
        />
      </div>      

      <input
        type="submit"
        value={'Crear Cuenta'}
        className="button"
      />        
    </form>
    </div>

</>
)
}

export default Form
