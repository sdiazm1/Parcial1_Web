import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onLoginAttempt, onLoginFailure }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { login, password });
      console.log(response.data);
      onLoginAttempt(); // Llama a la función de éxito si la autenticación es correcta
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      onLoginFailure(); // Llama a la función de falla si la autenticación falla
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Iniciar sesión</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default LoginForm;
