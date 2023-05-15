const axios = require('axios');

async function getCoordinates(address, apiKey) {
    try {
        const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
            params: {
                q: address,
                key: apiKey,
            },
        });

        const result = response.data.results[0];
        const latitude = result.geometry.lat;
        const longitude = result.geometry.lng;

        return {
            latitude,
            longitude,
        };
    } catch (error) {
        throw new Error('Erro ao buscar as coordenadas: ' + error.message);
    }
}

module.exports = {
    getCoordinates,
};
