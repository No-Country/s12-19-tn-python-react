import React from 'react';
import { Checkbox } from 'antd';

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
};
const plainOptions = ['Wifi', 'TV', 'Aire Acondicionado', 'Calefacción', 'Microondas','Cocina', 'Hervidor',
    'secadora', 'Lavadora', 'Estacionamiento', 'Admite mascotas', 'Rampa para discapasitados',
    'Elevador/Ascensor', 'Baños con barra de apoyo'];

const App = () => (
    <> 
    <br />
        <Checkbox.Group className='checks' options={plainOptions} onChange={onChange} />
    <br />
    <br />
    </>
);
export default App;