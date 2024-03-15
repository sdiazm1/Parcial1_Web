import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

  return (
    <div>
      <h2>Listado de Vehículos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Línea</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.marca}</td>
              <td>{vehicle.linea}</td>
              <td>{vehicle.modelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VehicleList;
