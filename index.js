const { response } = require("express");

const mahasiswaNim = '20220040204';
const updatedData = {
    nama: 'Abrar Ramadava',
    gender : 'L',
    prodi : 'TI',
    alamat : 'JL.Selabintana'
};

fetch('http://localhost:3000/mahasiswa%{mahasiswaNim}',{
    method : 'PUT',
    header : {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(updatedData)
})

.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('error:',error));