const Address = require('../models/Address');
const Client = require('../models/Client');
const { getCoordinates } = require('../helpers/getCoordinates');


module.exports = class ClientController {

    static async create(req, res) {

        const {enderecos, cnpj}= req.body;

        try {
            const client = await Client.findOne({ cnpj: cnpj });

            if (!client) {
                return res.status(404).json({ message: 'Cliente não encontrado!' });
            }

            for (const enderecoData of enderecos) {
                if (!enderecoData.logradouro) {
                    return res.status(422).json({ message: 'O lougradouro é obrigatório!' });
                }
                if (!enderecoData.numero) {
                    return res.status(422).json({ message: 'O numero é obrigatório!' });
                }
                if (!enderecoData.bairro) {
                    return res.status(422).json({ message: 'O bairro é obrigatório!' });
                }
                if (!enderecoData.cidade) {
                    return res.status(422).json({ message: 'A cidade é obrigatória!' });
                }
                if (!enderecoData.estado) {
                    return res.status(422).json({ message: 'O estado é obrigatório!' });
                }
                if (!enderecoData.cep) {
                    return res.status(422).json({message: 'O cep é obrigatório!'});
                }

                let latitude;
                let longitude;

                const addresComplete = enderecoData.logradouro + ', '+
                    enderecoData.bairro + ', ' +
                    enderecoData.cidade + ' - ' +
                    enderecoData.estado

                const coordinates = await getCoordinates(addresComplete, 'a8ad96638dfa48058b6f0e3a2080f0ce');
                latitude = coordinates.latitude;
                longitude = coordinates.longitude;

                const address = new Address({
                    ...enderecoData,
                    latitude: latitude,
                    longitude: longitude,
                    client: client._id
                });

                // Salve o endereço no banco de dados
                await address.save();

                client.addresses.push(address._id); // Adiciona o ID do endereço ao array addresses
            }

            await client.save();

            return res.status(201).json({ message: 'Endereço criado com sucesso!', addresses: enderecos });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Ocorreu um erro ao criar o endereço.' });
        }
    }

    static async show(req, res) {
        const cnpj = req.params.cnpj
        const client = await Client.findOne({ 'cnpj': cnpj });


        const addresses = await Address.find({ 'client': client._id });

        res.status(200).json({
            addresses,
        })
    }

    static async showAll(req, res) {
        try {
            const addresses = await Address.find({})
            res.status(200).json(addresses);
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Ocorreu um erro ao buscar os registros.' });
        }
    }

    static async update(req, res) {
        const id = req.params.id
        const { logradouro, numero, complemento, bairro, cidade, estado, cep } = req.body;

        if (!logradouro) {
            return res.status(422).json({ message: 'O lougradouro é obrigatório!' });
        }
        if (!numero) {
            return res.status(422).json({ message: 'O numero é obrigatório!' });
        }
        if (!complemento) {
            return res.status(422).json({ message: 'O complemento é obrigatório!' });
        }
        if (!bairro) {
            return res.status(422).json({ message: 'O bairro é obrigatório!' });
        }
        if (!cidade) {
            return res.status(422).json({ message: 'A cidade é obrigatória!' });
        }
        if (!estado) {
            return res.status(422).json({ message: 'O estado é obrigatório!' });
        }
        if (!cep) {
            return res.status(422).json({ message: 'O cep é obrigatório!' });
        }

        try {
            const address = await Address.findById(id);

            if (!address) {
                return res.status(422).json({ message: 'Endereço não encontrado!' });
            }

            let latitude;
            let longitude;

            const addresComplete = logradouro + ', '+
                                    bairro + ', ' +
                                    cidade + ' - ' +
                                    estado

            const coordinates = await getCoordinates(addresComplete, 'a8ad96638dfa48058b6f0e3a2080f0ce');
            latitude = coordinates.latitude;
            longitude = coordinates.longitude;

            address.logradouro = logradouro
            address.numero      = numero
            address.complemento = complemento
            address.bairro      = bairro
            address.cidade      = cidade
            address.estado      = estado
            address.cep         = cep
            address.latitude    = latitude
            address.longitude   = longitude

            const updatedAddress = await address.save();

            return res.status(201).json({ message: 'Endereço atualizado com sucesso!', updatedAddress});
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Ocorreu um erro ao atualizar o endereço.' });
        }
    }

    static async delete(req, res) {
        const id = req.params.id

        const address = await Address.findById(id)

        if(!address){
            res.status(404).json({message: 'Endereço não encontrado'})
            return
        }

        try{
            await Address.findByIdAndRemove(id)
            res.status(200).json({
                message: 'Removido com sucesso!'
            })
        }catch (e) {
            res.status(500).json({
                message: 'Ocorreu um problema ao remover o endereço!'
            })
        }
    }
}