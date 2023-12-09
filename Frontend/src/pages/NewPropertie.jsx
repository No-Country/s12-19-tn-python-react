import React, { useEffect, useState } from 'react'
import '../style/NewPropertie.css'
import { Navigate, useParams } from 'react-router-dom'
import Services from '../components/Services'
import axiosClient from '../config/axiosClient'

const NewPropertie = () => {
    const{id}=useParams()
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState('')
    const [services, setServices] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    const [rooms, setRooms] = useState(1)
    const [bathRooms, setBathRooms] = useState(1)
    const [price, setPrice] = useState(100)
    const [redirect,setRedirect] = useState(false)

    useEffect(() => {
        if (!id) {
            return
        }
        axiosClient.get('/places/' + id).then(response => {
            const { data } = response
            setTitle(data.title)
            setAddress(data.address)
            setAddedPhotos(data.photos)
            setDescription(data.description)
            setServices(data.services)
            setExtraInfo(data.extraInfo)
            setCheckIn(data.checkIn)
            setCheckOut(data.checkOut)
            setMaxGuests(data.maxGuests)
            setRooms(data.rooms)
            setBathRooms(data.bathRooms)
            setPrice(data.price)
        })
    }, [id])


    function inputHeader(text) {
        return (
            <h2 className=''>{text}</h2>
        )
    }
    function inputDescription(text) {
        return (
            <p className=''>{text}</p>
        )
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}
            </>
        )
    }

    async function savePlace(e) {
        e.preventDefault()
        const placeData = {
            title, address, addedPhotos,
            description, services, extraInfo,
            checkIn, checkOut, maxGuests, rooms, bathRooms, price,
        }
        if (id) {
            // actualizar
            await axiosClient.put('/places', {
                id, ...placeData
            })
            setRedirect(true)
        } else {
            // nuevo
            await axiosClient.post('/places', placeData)
            setRedirect(true)
        }

    }
    if (redirect) {
        return <Navigate to={'/account/places'} />
    }

    return (
        <div>
            <form onSubmit={savePlace}>
                {preInput('Titulo', 'titulo que describa el lugar')}
                <input type="text" placeholder='Por ej: Casa de campo'
                    value={title} onChange={e => setTitle(e.target.value)} />

                {preInput('Dirección', 'la ubicacion del lugar')}
                <input type="text" placeholder='Ubicación'
                    value={address} onChange={e => setAddress(e.target.value)} />

                {preInput('Fotos', 'Mientras mas fotos mejor')}
                <div>
                <input type="text" placeholder='Inserte URL de la imagen...jpg' />
                <button>Añadir</button>
                </div>

                {preInput('Descripción', 'descripcion del lugar')}
                <textarea name="" id="" cols="30" rows="10"
                    value={description} onChange={e => setDescription(e.target.value)}></textarea>

                {preInput('Servicios y accesibilidad', 'servicios y facilidades que se ofrecen')}
                <div>
                    <Services selected={services} onChange={setServices} />
                </div>

                {preInput('Información Extra', 'Reglas de convivencia, etc...')}
                <textarea name="" id="" cols="30" rows="10"
                    value={extraInfo} onChange={e => setExtraInfo(e.target.value)}></textarea>
                {preInput('Horarios de Check in&out', 'agregue horarios de entrada y salida')}
                <div className=''>
                    <div>
                        <h3 className=''>Horario de check-in</h3>
                        <input type="text"
                            placeholder='8:00'
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <h3 className=''>Horario de check-out</h3>
                        <input type="text"
                            placeholder='19:30'
                            value={checkOut}
                            onChange={e => setCheckOut(e.target.value)} />
                    </div>
                    <div>
                        <h3 className=''>Número máximo de huéspedes</h3>
                        <input type="text" placeholder='2'
                            value={maxGuests}
                            onChange={e => setMaxGuests(e.target.value)} />
                    </div>
                    <div>
                        <h3 className=''>cantidad de habitaciónes</h3>
                        <input type="text"
                            placeholder='2'
                            value={rooms}
                            onChange={e => setRooms(e.target.value)} />
                    </div>
                    <div>
                        <h3 className=''>cantidad de baños</h3>
                        <input type="text"
                            placeholder='1'
                            value={bathRooms}
                            onChange={e => setBathRooms(e.target.value)} />
                    </div>
                    <div>
                        <h3 className="">Precio por noche</h3>
                        <input type=""
                            value={price}
                            onChange={e => setPrice(e.target.value)} />
                    </div>
                </div>
                <button className=''>Guardar</button>
            </form>

        </div>
    )
}

export default NewPropertie
