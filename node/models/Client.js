const mongoose = require('../db/conn')
const {Schema} = mongoose

const Client = mongoose.model(
    'Client',
    new Schema(
        {
            cnpj: {
                type: String,
                required: true
            },
            razao_social: {
                type: String,
                required: true
            },
            nome_contato: {
                type: String,
                required: true
            },
            telefone: {
                type: String,
                required: true
            },
            addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],

        },
    ),
)

module.exports = Client