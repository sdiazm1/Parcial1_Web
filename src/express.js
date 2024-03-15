const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { login, password } = req.body;
    console.log('Received login request:', { login, password });

    // Verificar las credenciales
    if (login === 'admin' && password === 'pass') {
      console.log('Authentication successful for user:', login);
      // Si las credenciales son correctas, enviar una respuesta de éxito
      res.json({
        status: 'success',
        message: 'The provided credentials are correct. User authenticated.'
      });
    } else {
      console.log('Authentication failed for user:', login);
      // Si las credenciales son incorrectas, enviar una respuesta de error
      res.status(401).json({
        status: 'error',
        message: 'The provided credentials are incorrect.'
      });
    }
});

app.get('/api/vehicles', (req, res) => {
    res.json([
        {
            "id": 1,
            "marca": "Renault",
            "linea": "Kangoo",
            "referencia": "VU Express",
            "modelo": 2017,
            "kilometraje": 93272,
            "color": "Blanco",
            "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/kangoo.jpeg?raw=true"
        },
        {
            "id": 2,
            "marca": "Chevrolet",
            "linea": "Spark",
            "referencia": "Life",
            "modelo": 2018,
            "kilometraje": 55926,
            "color": "Plata",
            "imagen": "https://github.com/Uniandes-isis2603/recursos-isis2603/blob/master/images/202410/spark.jpeg?raw=true"
        }
    ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
