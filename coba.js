function cetakNama(nama) {
    return `Helo Nama saya ${nama}`;
};

const PI = 3.14;

const mahasiswa = {
    nama: "Aziz Alhadiid",
    umur: 20,
    cetakMhs() {
        return `Halo, Nama saya ${this.nama} dan saya ${this.umur} Tahun.`;
    },
};

class Orang {
    constructor() {
        console.log('Object Orang telah dibuat');
    };
};

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang,
};