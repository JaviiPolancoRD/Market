process.loadEnvFile()

import express from "express"
import mysql from "mysql2"

// Crear la app
const app = express()
const port = 1234

// Conectar la base de datos
const db = mysql.createConnection({
    host: "localhost",
    port: 3308,
    userNPM: "root",
    password: "123456789",
    database: "mercanciaGaming"
})

db.connect( (err) => {
    if (err) {
        console.log('Error al conectar la base de datos ' + err)
    }

    console.log('Conexion Exitosa')
})





// Mostrar index
app.use( express.static('public') )
app.use( express.json())

app.listen( port, () => {
    console.info('Servidor corriendo el puerto ' + port)
})