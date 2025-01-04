// Core Module
// File System
const fs = require('fs');

// menuliskan secara sinkronus
// try {
//     fs.writeFileSync('data/test.txt', 'Hello secara synchronus');
// } catch (error) {
//     console.log(error);
// }

// Menuliskan file secara asingkronus
// fs.writeFileSync('data/text.txt', 'Hello World secara async', (e) => {
//     console.log(e);
// });

// Membaca file secara sync
// const data = fs.readFileSync('data/text.txt', 'utf-8');
// console.log(data);

// Membaca file secara async
// fs.readFile('data/text.txt', 'utf-8', (e, data) => {
//     if (e) {
//         console.error('Error membaca file:', e);
//         return;
//     }
//     console.log(data);
// });

// Readline 
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout, 
});

rl.question("Masukkan nama Anda: ", (nama) => {
    rl.question(`Masukkan No HP Anda: `, (noHP) => {
        const contact = {
            nama,
            noHP,
        };
        const file = fs.readFileSync('data/contac.json', 'utf-8');
        const contacts = JSON.parse(file);

        contacts.push(contact);
        fs.writeFileSync('data/contac.json', JSON.stringify(contacts));

        console.log('Terima Kasih telah memasukkan data');

        rl.close();
    });
});