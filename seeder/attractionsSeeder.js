const atrDal = require('../DAL/attractionsRepository');
const dataDal = require('../DAL/dataRepository');

async function shouldRun() {
    try {
        const atrCount = await atrDal.countAttractions();
        return atrCount === 0;
    } catch (e) {
        console.error(e);
    }
}

async function run() {
    try {
        const doSeed = await shouldRun();
        if (doSeed) {
            const resp = await dataDal.getAttractions();
            await atrDal.insertAttractions(resp.data.result.records.map(itm => ({...itm,Attraction_Type: itm.Attraction_Type.split(';')})));
        }
    } catch (e) {
        console.error(e);
    }
}

run();