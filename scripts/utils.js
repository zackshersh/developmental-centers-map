
function latLngStringToArray(str){
    let arr = str.split(",");

    return arr.map((val) => {
        return parseFloat(val);
    })
}

function latLngIsValid([lng, lat]){

    if(isNaN(lat) || isNaN(lng)) return false;

    if(lat > 90 || lat < -90) return false;

    return true;
}