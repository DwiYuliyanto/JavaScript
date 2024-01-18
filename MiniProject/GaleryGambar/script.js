// Daftar URL gambar
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

// Fungsi untuk membuat thumbnail dan menambahkannya ke galeri
function createGallery() {
    const gallery = document.getElementById('gallery');

    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.classList.add('thumbnail');
        thumbnail.addEventListener('click', () => openModal(index));
        gallery.appendChild(thumbnail);
    });
}

// Fungsi untuk membuka modal dan menampilkan gambar penuh
function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    modal.style.display = 'flex';
    modalImg.src = images[index];

    document.body.style.overflow = 'hidden'; // Menghilangkan scroll ketika modal terbuka
}

// Fungsi untuk menutup modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';

    document.body.style.overflow = 'auto'; // Mengaktifkan kembali scroll setelah modal ditutup
}

// Panggil fungsi untuk membuat galeri saat halaman dimuat
document.addEventListener('DOMContentLoaded', createGallery);