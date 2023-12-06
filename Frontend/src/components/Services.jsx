export default function Services({ selected, onChange }) {
    function handleCbClick(e) {
        const { checked, name } = e.target;
        if (checked) {
            onChange([...selected, name]);
        } else {
            onChange([...selected.filter(selectedName => selectedName !== name)]);
        }
    }
    return (
        <>
            <label className="">
                <input type="checkbox" checked={selected.includes('wifi')} name="wifi" onChange={handleCbClick} />
                <span>Wifi</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('tv')} name="tv" onChange={handleCbClick} />
                <span>TV</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('aire-Acondicionado')} name="aire-Acondicionado" onChange={handleCbClick} />
                <span>Aire Acondicionado</span>
            </label>            
            <label className="">
                <input type="checkbox" checked={selected.includes('calefacción')} name="calefacción" onChange={handleCbClick} />
                <span>Calefacción</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('microondas')} name="microondas" onChange={handleCbClick} />
                <span>Microondas</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('cocina')} name="cocina" onChange={handleCbClick} />
                <span>Cocina</span>
            </label>            
            <label className="">
                <input type="checkbox" checked={selected.includes('hervidor')} name="hervidor" onChange={handleCbClick} />
                <span>Hervidor</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('secadora')} name="secadora" onChange={handleCbClick} />
                <span>secadora</span>
            </label>            
            <label className="">
                <input type="checkbox" checked={selected.includes('lavadora')} name="lavadora" onChange={handleCbClick} />
                <span>Lavadora</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('estacionamiento')} name="estacionamiento" onChange={handleCbClick} />
                <span>Estacionamiento</span>
            </label>
            <label className="">
                <input type="checkbox" checked={selected.includes('mascotas')} name="mascotas" onChange={handleCbClick} />
                <span>Admite mascotas</span>
            </label>  
            <label className="">
                <input type="checkbox" checked={selected.includes('rampa')} name="rampa" onChange={handleCbClick} />
                <span>Rampa para discapasitados</span>
            </label>  
            <label className="">
                <input type="checkbox" checked={selected.includes('elevador')} name="elevador" onChange={handleCbClick} />
                <span>Elevador/Ascensor</span>
            </label>  
            <label className="">
                <input type="checkbox" checked={selected.includes('barra')} name="barra" onChange={handleCbClick} />
                <span>Inodoro y ducha con barra de apoyo</span>
            </label>  
        </>
    );
}