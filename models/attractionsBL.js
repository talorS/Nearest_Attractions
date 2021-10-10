const helper = require('../utils/helper');
const dal = require('../DAL/attractionsRepository');

exports.getAttractions = async (query) => {
    try {
        const { longitude, latitude } = query;
        let atrList = await dal.getAttractions();
        atrList = atrList.map(atr => {
            const obj = {};
            obj.name = atr.Name;
            obj.id = atr.Id;
            obj.address = atr.Address;
            obj.openingHours = atr.Opening_Hours;
            obj.distance = helper.calcDistance(parseFloat(latitude), parseFloat(longitude), atr.Y, atr.X);
            obj.url = atr.URL;
            obj.attractionType = atr.Attraction_Type;
            return obj;
        }).sort((a, b) => a.distance - b.distance);

        return atrList;

    } catch (e) {
        console.error(e);
    }
}

exports.getAttractionsType = async () => {
    try {
        const result = await dal.getAttractionsType();
        result.unshift("כל האטרקציות", "מועדפים");
        return result;
    } catch (e) {
        console.error(e);
    }
}