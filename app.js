const yargs = require('yargs');
const {
    simpanContact,
    lisContact,
    detailContact,
    deleteContact
} = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: true,
            type: 'string',
        },
        noHP: {
            describe: 'No HP',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        simpanContact(argv.nama, argv.email, argv.noHP);
    },
}).demandCommand();

// menampilkan daftar smeua nama dan noHP kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan NoHP kontak',
    handler() {
        lisContact();
    },
});

// Menampilkan detail sebuah kontak
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail dari kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        detailContact(argv.nama);
    },
});

// Menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus kontak dari kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        deleteContact(argv.nama);
    },
});

yargs.parse();