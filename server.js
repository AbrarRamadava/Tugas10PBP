const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaContoller = require('./controllers/mahasiswaController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

//endpoint untuk mahasiswa
app.use('/mahasiswa',mahasiswaContoller);

//jalankan server
app.listen(PORT,() =>{
    console.log('Server is running on http://localhost:${PORT}');
});