import React, { useState, useEffect } from 'react';

const strings = {
    en: {
        headerBrand: 'Brand',
        headerLine: 'Line',
        headerModel: 'Model',
        mileage: 'Mileage',
        color: 'Color',
        reference: 'Reference',
        noCarSelected: 'No car selected'
    },
    es: {
        headerBrand: 'Marca',
        headerLine: 'Línea',
        headerModel: 'Modelo',
        mileage: 'Kilometraje',
        color: 'Color',
        reference: 'Referencia',
        noCarSelected: 'Ningún carro seleccionado'
    }
};

function Home() {

    {/*  Aqui se escoge el idioma */}
    const [language, setLanguage] = useState("en");

    const [cars, setCars] = useState([]);
    const [carId, setCarId] = useState([])

    console.log(carId);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/cars", {
                method: "GET",
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            setCars(data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    const handleCarById = (carId) => {
        carById(carId);
    };

    const carById = async (id_value) => {
        try {
            const response = await fetch(`http://localhost:3001/cars/${id_value}`, {
                method: "GET",
                mode: 'cors',
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            console.log(data);
            setCarId(data);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    return (
        <div className="up-lista">
            <div className='lista'>
                <div className='encabezado_lista'>
                    <p>#</p>
                    <p>{strings[language].headerBrand}</p>
                    <p>{strings[language].headerLine}</p>
                    <p>{strings[language].headerModel}</p>
                </div>
                <div className="body_lista">
                    {cars.map((car, index) => (
                        <div key={car.id} className="dentro_lista" onClick={() => handleCarById(car.id)}>
                            <p>{car.id}</p>
                            <p>{car.marca}</p>
                            <p>{car.linea}</p>
                            <p>{car.modelo}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mostrar_carro'>
                {carId == '' ? (
                    <p>{strings.noCarSelected}</p>
                ) : (
                    <>
                        <h3 className='h3_id'>{carId.marca} {carId.linea}</h3>
                        <img src={carId.imagen} alt="Carro" />
                        <p>{'->'} {strings.mileage}: {carId.kilometraje}</p>
                        <p>{'->'} {strings.color}: {carId.color}</p>
                        <p>{'->'} {strings.reference}: {carId.referencia}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
