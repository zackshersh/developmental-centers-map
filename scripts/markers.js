

function generateMarker(){
    // const svg = document.createElementNS("svg");
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute("width", '50'); svg.setAttribute("height", '50');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute("cx",'25');
    circle.setAttribute("cy",'25');
    circle.setAttribute("r",'25');
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
        const marker = new maplibregl.Marker({element: markerElem.cloneNode(true)})
            .setLngLat(arr)
            .addTo(map)

        markers.push(marker)

    })

    return markers;

    console.log(`%c ${numInvalidCoordinates} INVALID COORDINATES`, "color: orange")
}
