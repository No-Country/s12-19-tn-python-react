import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Services from '../components/Services'
import axiosClient from '../config/axiosClient'
import Uploader from './../components/Uploader';
import TextArea from 'antd/es/input/TextArea';
import { Button, Form, Input, InputNumber } from 'antd';

const NewPropertie = () => {
    const [title, setTitle] = useState('')
    const [address, setAddress] = useState('')
    const [addedPhotos, setAddedPhotos] = useState([])
    const [description, setDescription] = useState('')
    const [services, setServices] = useState([])
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [maxGuests, setMaxGuests] = useState(1)
    const [rooms, setRooms] = useState(1)
    const [bathRooms, setBathRooms] = useState(1)
    const [price, setPrice] = useState(100)
    const [redirect, setRedirect] = useState(false)

    const handleUploadedPhotos = (newPhotos) => {
        setAddedPhotos(newPhotos);
    };


    function inputHeader(text) {
        return (
            <h2 >{text}</h2>
        )
    }
    function inputDescription(text) {
        return (
            <p >{text}</p>
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

        try {
            const { data } = await axiosClient.post('/propiedad/create', { title, address, addedPhotos, description, services, extraInfo, checkIn, checkOut, maxGuests, rooms, bathRooms, price })
            setRedirect(true)
        } catch (error) {
            console.log(error)
        }

    }
    if (redirect) {
        return <Navigate to={'/'} />
    }

    const [size, setSize] = useState('large');



    return (
        <div className='container'>
            <Form onSubmit={savePlace}>
                <div className='new-prop'>
                    {preInput('Titulo de la propiedad', 'añade un titulo corto y preciso, lo puedes modificar despues')}
                    <Form.Item>
                        <Input type="text" placeholder='Ej: Casa de campo' value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Item>

                    <Form.Item>
                        {preInput('Fotos', 'Agrega fotos de tu propiedad. ¡Elige las mejores!')}
                        <Uploader onSaveUploadedFiles={handleUploadedPhotos} />
                    </Form.Item>


                    {preInput('Servicios y accesibilidad', 'servicios y facilidades que se ofrecen')}
                    <Form.Item>
                        <Services selected={services} onChange={setServices} />
                    </Form.Item>

                    <div>
                        <Form.Item>
                            <h3 >cantidad de habitaciónes</h3>
                            <InputNumber
                                placeholder='1'
                                value={rooms}
                                onChange={value => setRooms(value)} />
                        </Form.Item>
                        <h3>cantidad de baños</h3>
                        <InputNumber
                            placeholder='1'
                            value={bathRooms}
                            onChange={value => setBathRooms(value)} />
                    </div>
                </div>

                <div className='new-prop'>
                    {preInput('Dirección', '¿Dónde se ubica tu propiedad?')}
                    <Form.Item>
                        <Input type="text" placeholder='Ubicación' value={address} onChange={e => setAddress(e.target.value)} />
                    </Form.Item>

                    {preInput('Descripción', 'descripcion del lugar')}
                    <TextArea name="" rows={4}
                        value={description} onChange={e => setDescription(e.target.value)}>
                    </TextArea>

                    <br />
<br />

                    <Form.Item>
                        {preInput('Horarios de Check in&out', 'agregue horarios de entrada y salida')}
                        <h3 >Horario de check-in</h3>
                        <Input type="text"
                            placeholder='8:00'
                            value={checkIn}
                            onChange={e => setCheckIn(e.target.value)} />
                    </Form.Item>
                    
<br />

                    <h3 >Horario de check-out</h3>
                    <Input type="text"
                        placeholder='19:30'
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)} />

<br />
<br />
                    <Form.Item>
                        {preInput('Información Extra', 'Reglas de convivencia, etc...')}
                        <TextArea name="" rows={4}
                            value={extraInfo} onChange={e => setExtraInfo(e.target.value)}></TextArea>
                    </Form.Item>

                    <br />
<br />

                    <h3 >Número máx. de huéspedes</h3>
                    <InputNumber type="number" placeholder='1'
                        value={maxGuests}
                        onChange={value => setMaxGuests(value)} />

<br />
<br />
                    <h3>Precio por noche</h3>
                    <InputNumber
                        value={price}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={value => setPrice(value)} />

                </div>
                <br />
                <Button className='button' type="default" size={size} htmlType="submit">
                    Guardar
                </Button>
                <br />
                <br />
            </Form>

        </div>
    )
}

export default NewPropertie
