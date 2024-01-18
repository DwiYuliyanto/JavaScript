// Fungsi untuk memulai atau menghentikan animasi kotak
function animateBox() {
    const box = document.getElementById('animatedBox');

    // Toggle kelas 'animate' pada elemen kotak
    box.classList.toggle('animate');

    // Mengganti warna kotak setiap kali tombol ditekan
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
}

// Fungsi untuk mendapatkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}