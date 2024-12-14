
function createMarkers(data){
    const markers = [];

    let numInvalidCoordinates = 0;

    data.forEach(location => {
        
        if(!location["LOCATION: Latitude/Longitude"]) return;
        // console.log("------")

        let arr = latLngStringToArray(location["LOCATION: Latitude/Longitude"]);


        if(!latLngIsValid(arr)){
            numInvalidCoordinates++;
            // console.log("INVALID")
            return;
        }


        // console.log(arr)
        const marker = new maplibregl.Marker()
            .setLngLat(arr)

        markers.push(marker)

    })

    return markers;

    console.log(`%c ${numInvalidCoordinates} INVALID COORDINATES`, "color: orange")
}