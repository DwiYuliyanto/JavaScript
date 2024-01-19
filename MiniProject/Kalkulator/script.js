function tambah() {
    hitung('tambah');
}

function kurang() {
    hitung('kurang');
}

function kali() {
    hitung('kali');
}

function bagi() {
    hitung('bagi');
}

function hitung(operasi) {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);

    if (isNaN(angka1) || isNaN(angka2)) {
        alert('Masukkan angka yang valid!');
        return;
    }

    var hasil;

    switch (operasi) {
        case 'tambah':
            hasil = angka1 + angka2;
            break;
        case 'kurang':
            hasil = angka1 - angka2;
            break;
        case 'kali':
            hasil = angka1 * angka2;
            break;
        case 'bagi':
            hasil = angka1 / angka2;
            break;
        default:
            break;
    }

    document.getElementById('hasil').innerText = hasil;
}