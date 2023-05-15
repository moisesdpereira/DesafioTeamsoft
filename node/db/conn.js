const mongoose = require('mongoose');

async function main() {
    // await mongoose.connect('mongodb://localhost:27017/desafio');
    await mongoose.connect('mongodb+srv://moisesdpereira:12345678901q2w@cluster0.1nmvo2l.mongodb.net/?retryWrites=true&w=majority\n' +
        '\n');
    console.log('Conectou ao Mongoose!');
}

main().catch((err) => console.log(err));

module.exports = mongoose;
