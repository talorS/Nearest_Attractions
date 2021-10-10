const axios = require('axios');
const limit = 40;
const url = `https://data.gov.il/api/3/action/datastore_search?resource_id=29f4ec99-ec7f-43c1-947e-60a960980607&limit=${limit}`;

exports.getAttractions = function () {
    return axios.get(url);
}