import React, { useState } from 'react';
import LoginForm from './LoginForm';
import VehicleList from './vehicleList';

function App() {
  const [showVehicles, setShowVehicles] = useState(false);

  const handleLoginAttempt = () => {
    setShowVehicles(true);
  };

  const handleLoginFailure = () => {
    console.log('Login failed');
    // Aquí puedes realizar cualquier acción adicional necesaria en caso de fallo de inicio de sesión
  };

  return (
    <div>
      <h1>TuSegundazo.com</h1>
      <LoginForm onLoginAttempt={handleLoginAttempt} onLoginFailure={handleLoginFailure} />
      {showVehicles && <VehicleList />}
    </div>
  );
}

export default App;
