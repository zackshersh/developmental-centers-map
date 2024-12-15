class Marker {
    constructor(pos, index, mapManager){

        this.mapManager = mapManager;
        this.pos = pos;
        this.index = index;

        this.data = this.mapManager.data[this.index];

        this.elem = this.generateElem();
        this.maplibreMarker = this.createMarker();

    }


    generateElem(){

        const cont = document.createElement("div");
        cont.classList.add("marker");

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("width", params.markerSize*2); 
        svg.setAttribute("height", params.markerSize*2);
    
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx",params.markerSize);
        circle.setAttribute("cy",params.markerSize);
        circle.setAttribute("r",params.markerSize);
        circle.setAttribute("fill","red");
    
        svg.appendChild(circle);
        cont.appendChild(svg);

        svg.setAttribute("data-index", this.index);


        // generating popup
        let p = document.createElement("p");
        p.classList.add("popup-text")
        p.textContent = this.data["Name"];

        p.style.position = "absolute";
    
        p.style.color = "red"
        cont.appendChild(p);

        cont.addEventListener("mouseenter", (e) => {
            cont.classList.add("hovered-marker");

            this.mapManager.setMarkerState(this.index, "hover");
        })
        cont.addEventListener("mouseleave", (e) => {
            cont.classList.remove("hovered-marker");

            this.mapManager.setMarkerState(null, null);
        })



    
        return cont;
    }

    createMarker(){

        // console.log(arr)
        this.maplibreMarker = new maplibregl.Marker({element: this.elem})
            .setLngLat(this.pos)
            .addTo(this.mapManager.map);

        
    }
}