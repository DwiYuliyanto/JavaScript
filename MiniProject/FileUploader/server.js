// server.js
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// Mengaktifkan middleware untuk upload file
app.use(fileUpload());

// Menampilkan form upload file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint untuk menangani upload file
app.post('/upload', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Tidak ada file yang diunggah.');
    }

    // Ambil file yang diunggah
    const uploadedFile = req.files.uploadedFile;

    // Pindahkan file ke direktori upload
    uploadedFile.mv(__dirname + '/uploads/' + uploadedFile.name, (err) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('File berhasil diunggah!');
    });
});

// Menjalankan server
const port = 3000;
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
