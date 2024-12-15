
class MapManager {
    constructor(){

        this.bounds = new maplibregl.LngLatBounds(
            new maplibregl.LngLat(...params.maxBounds[0]),
            new maplibregl.LngLat(...params.maxBounds[1])
          );

        this.map = new maplibregl.Map({
            container: 'map', // container id
            style: 'https://api.maptiler.com/maps/a8c18bb5-c61e-48aa-9e7b-b47f838fa7b5/style.json?key=mFj1XfKRnWjJCieQrgjz', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 1, // starting zoom,
            maxBounds: this.bounds
        });

        this.data = [];

        this.markers = [];

    }

    setData(data){
        this.data = data;

        this.generateMarkers();
    }

    generateMarkers(){
        this.data.forEach((location, i)=> {
            if(!location["LOCATION: Latitude/Longitude"]) return;
    
            let arr = latLngStringToArray(location["LOCATION: Latitude/Longitude"]);
    
            if(!latLngIsValid(arr)) return;
        })
    }
}