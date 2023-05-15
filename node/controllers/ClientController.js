const Client = require('../models/Client')
const Address = require("../models/Address");
const { getCoordinates } = require('../helpers/getCoordinates');



module.exports = class ClientController{

    static async create(req, res) {
        const { cnpj, razao_social, nome_contato, telefone, enderecos } = req.body;

        // Validações
        if (!cnpj) {
            res.status(422).json({ error: 'O número do CNPJ é obrigatório' });
            return;
        }
        if (!razao_social) {
            res.status(422).json({ error: 'A razão social é obrigatória' });
            return;
        }
        if (!nome_contato) {
            res.status(422).json({ error: 'O nome para contato é obrigatório' });
            return;
        }
        if (!telefone) {
            res.status(422).json({ error: 'O número de telefone é obrigatório' });
            return;
        }
        if (!enderecos || enderecos.length === 0) {
            res.status(422).json({ error: 'Pelo menos um endereço é obrigatório' });
            return;
        }

        const clientExists = await Client.findOne({ cnpj: cnpj });

        if (clientExists) {
            res.status(422).json({ message: 'O cliente já existe no cadastro' });
            return;
        }

        let latitude;
        let longitude;

        try {
            const client = new Client({
                cnpj,
                razao_social,
                nome_contato,
                telefone,
            });

            const newClient = await client.save();

            for (const enderecoData of enderecos) {
                try {
                    const addresComplete = enderecoData.logradouro + ', '+
                                           enderecoData.bairro + ', ' +
                                           enderecoData.cidade + ' - ' +
                                           enderecoData.estado

                    const coordinates = await getCoordinates(addresComplete, 'a8ad96638dfa48058b6f0e3a2080f0ce');
                    latitude = coordinates.latitude;
                    longitude = coordinates.longitude;
                } catch (error) {
                    console.error(error);
                }
                const address = new Address({
                    ...enderecoData,
                    latitude: latitude,
                    longitude: longitude,
                    client: newClient._id,
                });

                await address.save();
                newClient.addresses.push(address._id); // Adiciona o ID do endereço ao array addresses
            }

            await newClient.save();

            res.status(201).json({
                message: 'Cliente cadastrado!',
                newClient,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Ocorreu um erro ao criar o cliente', error });
        }
    }

    static async show(req, res) {
        const cnpj = req.params.cnpj

        try {
            const client = await Client.findOne({ cnpj: cnpj }).populate('addresses')


            if (!client) {
                res.status(422).json({
                    erro: 'Cliente não encontrado!',
                })
                return;
            }

            res.status(200).json({ client });
        } catch (error) {
            res.status(500).json({
                error: 'Ocorreu um erro ao buscar o CNPJ.',
            })
        }
    }

    static async showAll(req, res) {
        try {
            const client = await Client.find({}).populate('addresses')
            res.status(200).json(client)
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: 'Ocorreu um erro ao buscar os registros.' });
        }
    }

    static async update(req, res) {
        const cnpj = req.params.cnpj;
        const { razao_social, nome_contato, telefone } = req.body;

        // Validações
        if (!razao_social) {
            res.status(422).json({ message: 'A razão social é obrigatória' });
            return;
        }
        if (!nome_contato) {
            res.status(422).json({ message: 'O nome para contato é obrigatório' });
            return;
        }
        if (!telefone) {
            res.status(422).json({ message: 'O número de telefone é obrigatório' });
            return;
        }

        try {
            const client = await Client.findOne({ cnpj: cnpj });

            if (!client) {
                res.status(422).json({ error: 'Cliente não encontrado!' });
                return;
            }

            client.razao_social = razao_social;
            client.nome_contato = nome_contato;
            client.telefone = telefone;

            const updatedClient = await client.save();

            res.status(200).json({
                message: 'Cliente atualizado com sucesso!',
                client: updatedClient
            });
        } catch (error) {
            res.status(500).json({
                error: 'Ocorreu um erro ao atualizar o cliente.',
            });
        }
    }

    static async delete(req, res) {
        const cnpj = req.params.cnpj

        const client = await Client.findOne({ cnpj: cnpj }).populate('addresses');

        if(!client){
            res.status(404).json({message: 'Cliente não encontrado'})
            return
        }

        try{
            await Address.deleteMany({ _id: { $in: client.addresses } });

            await Client.findOneAndRemove({ cnpj: cnpj });
            res.status(200).json({
                message: 'Removido com sucesso!'
            })
        }catch (e) {
            res.status(500).json({
                message: 'Ocorreu um problema ao remover o cliente!'
            })
        }
    }
}