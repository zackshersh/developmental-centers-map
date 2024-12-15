class Marker {
    constructor(pos, index, mapManager){

        this.mapManager = mapManager;
        this.pos = pos;
        this.index = index;

        this.elem = this.generateElem();
        this.maplibreMarker = this.createMarker();
    }


    generateElem(){
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("width", params.markerSize*2); 
        svg.setAttribute("height", params.markerSize*2);
    
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx",params.markerSize);
        circle.setAttribute("cy",params.markerSize);
        circle.setAttribute("r",params.markerSize);
        circle.setAttribute("fill","red");
    
        svg.appendChild(circle);

        svg.setAttribute("data-index", this.index);
    

    
        return svg;
    }

    createMarker(){

        // console.log(arr)
        this.maplibreMarker = new maplibregl.Marker({element: this.elem})
            .setLngLat(this.pos)
            .addTo(this.mapManager.map)


    }
}