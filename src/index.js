const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuraciones del servidor
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API de suma funcionando ✅');
});

// POST
app.post('/sumar', (req, res) => {
  const { num1, num2 } = req.body;

  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  const resultado = parseFloat(num1) + parseFloat(num2);
  res.send({ resultado });
});

// GET
app.get('/sumar', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).send({ error: 'Faltan números para sumar' });
  }

  const resultado = parseFloat(num1) + parseFloat(num2);
  res.send({ resultado });
});

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});