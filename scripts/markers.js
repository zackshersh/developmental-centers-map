
function markerOnHover(e){

}




function generateMarker(){
    // const svg = document.createElementNS("svg");
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute("width", params.markerSize*2); 
    svg.setAttribute("height", params.markerSize*2);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute("cx",params.markerSize);
    circle.setAttribute("cy",params.markerSize);
    circle.setAttribute("r",params.markerSize);
    circle.setAttribute("fill","red");

    // svg.innerHTML = "<circle"

    svg.appendChild(circle);

    // const svg = document.createElement("h1");
    // svg.textContent = "HEY THERE"

    return svg;
}




function createMarkers(data, map){
    const markers = [];

    let numInvalidCoordinates = 0;

    let markerElem = generateMarker();
    console.log(markerElem)

    data.forEach((location, index) => {
        
        if(!location["LOCATION: Latitude/Longitude"]) return;
        // console.log("------")

        let arr = latLngStringToArray(location["LOCATION: Latitude/Longitude"]);


        if(!latLngIsValid(arr)){
            numInvalidCoordinates++;
            // console.log("INVALID")
            return;
        }

        let clonedMarker = markerElem.cloneNode(true);
        clonedMarker.setAttribute("data-index", index);

        // console.log(arr)
        const marker = new maplibregl.Marker({element: clonedMarker})
            .setLngLat(arr)
            .addTo(map)

        markers.push(marker)

    })

    return markers;

}
