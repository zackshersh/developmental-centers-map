
class MapManager {
    constructor(){

        this.bounds = new maplibregl.LngLatBounds(
            new maplibregl.LngLat(...params.maxBounds[0]),
            new maplibregl.LngLat(...params.maxBounds[1])
          );

        this.map = new maplibregl.Map({
            container: 'map', // container id
            style: 'https://api.maptiler.com/maps/a8c18bb5-c61e-48aa-9e7b-b47f838fa7b5/style.json?key=nn7h44OSrjCy5b2042uV', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 1, // starting zoom,
            maxBounds: this.bounds
        });


        this.data = [];
        this.markers = [];

        this.focusState = {
            markerIndex: null,
            mode: null
        }

        this.interfaceManager = new InterfaceManager(this);

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

            let newMarker = new Marker(arr, i, this);

            this.markers.push(newMarker);
        })
    }

    setFocusState(index, mode){
        console.log(index, mode);

        console.log(this.map._container)

        this.focusState = { markerIndex: index, mode: mode};

        switch(mode){
            case 'hover':
                this.map._container.classList.add("container-hover-active");

                break;
            case 'select':

                break;
            case null:
                this.map._container.classList.remove("container-hover-active");
                this.map._container.classList.remove("container-select-active");


                break;
        }

    }

    getFocusedData(){
        if(this.focusState.mode == null || this.focusState.mode == "hover") return null;

        let focusedData = this.data[this.focusState.markerIndex];

        if(!focusedData) return null;

        return focusedData;
    }


}