const express = require('express')
const sequelize = require('./config/db')
const cors = require('cors')

// Se crea el servidor
const app = express()

// Sincronización de los modelos con la Base de Datos
sequelize.sync()

app.use(cors())

// Habilitar express.json para leer los datos que el usuario envie
app.use(express.json( {extended: true} ))

// Definir el puerto de la app
const PORT = process.env.PORT || 4000

// Importar rutas
app.use('/api/countries', require('./routes/countries'))
app.use('/api/states', require('./routes/states'))
app.use('/api/cities', require('./routes/cities'))
app.use('/api/paths', require('./routes/paths'))

// Página principal
app.get('/', (req, res) => {
    res.send()
})

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
});