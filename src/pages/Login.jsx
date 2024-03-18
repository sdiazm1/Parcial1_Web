import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        login: "",
        password: "",
    });

    const { login, password } = inputs;

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    };

    const onSubmitForm = async e => {
        e.preventDefault();

        try {
            const body = { login, password };
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                mode: 'cors',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();

            if (parseRes.status === "success") {
                toast.success("¡Inicio de sesión exitoso!");
                navigate("/home");
            } else {
                toast.error("Credenciales inválidas. Por favor, inténtelo de nuevo.");
            }
        } catch (err) {
            console.error(err.message);
            toast.error("Ha ocurrido un error al iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    };

    return (
        <div>
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <form onSubmit={onSubmitForm} className='container_login'>
                <h3>Inicio de sesión</h3>
                <div className='login-form'>
                    <span>Nombre de usuario</span>
                    <input
                        type="text"
                        className='input'
                        onChange={e => onChange(e)}
                        name="login" // Cambiado de client_email a login
                        value={login}
                    />
                    <span>Contraseña</span>
                    <input
                        type="password"
                        className='input'
                        name="password" // Cambiado de client_password a password
                        value={password} 
                        onChange={e => onChange(e)}
                    />
                </div>
                <div className='btn_container'>
                    <button className='btn_ingresar' type="submit">Ingresar</button>
                    <button className='btn_cancelar'>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
