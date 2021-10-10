const R = 6371; // R is the Earth's radius, 6,371km

//Calculate distance between two points in km
exports.calcDistance = (lat1,lon1, lat2, lon2) =>{
    // Haversine formula
    var dLat = toRadians(lat2 - lat1);  
    var dLon = toRadians(lon2 - lon1); 
    var a = 0.5 - Math.cos(dLat)/2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * (1 - Math.cos(dLon))/2;
    return Math.round(R * 2 * Math.asin(Math.sqrt(a)));
}

//Converts numeric degrees to radians
function toRadians(d){
    return d * Math.PI / 180;
}