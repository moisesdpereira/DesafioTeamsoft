const mongoose = require('../db/conn')
const { Schema } = mongoose

const Address = mongoose.model(
    'Address',
    new Schema({
        logradouro:{
            type: String,
            required: true
        },
        numero:{
            type: String,
            required: true
        },
        complemento:{
            type: String,
        },
        bairro:{
            type: String,
            required: true
        },
        cidade:{
            type: String,
            required: true
        },
        estado:{
            type: String,
            required: true
        },
        cep:{
            type: String,
            required: true
        },
        latitude:{
            type: String,
            required: true
        },
        longitude:{
            type: String,
            required: true
        },
        client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },

    })
)

module.exports = Address