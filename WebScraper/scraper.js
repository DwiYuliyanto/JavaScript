// scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.himanifo.my.id/'; // Ganti dengan URL target

axios.get(url)
    .then(response => {
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            // Ganti dengan selektor CSS yang sesuai dengan data yang ingin Anda ekstrak
            const title = $('script').text();

            console.log('Judul halaman:', title);
        }
    })
    .catch(error => console.error('Error:', error));
