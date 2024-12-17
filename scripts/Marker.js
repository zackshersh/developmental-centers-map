class Marker {
    constructor(pos, index, mapManager){

        this.mapManager = mapManager;
        this.pos = pos;
        this.index = index;

        this.data = this.mapManager.data[this.index];

        this.elem = this.generateElem();
        this.maplibreMarker = this.createMarker();

        this.isFocused = true;

    }


    generateElem(){

        const cont = document.createElement("div");
        cont.classList.add("marker");
        // cont.classList.add("not-focused")

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute("width", params.markerSize*2); 
        svg.setAttribute("height", params.markerSize*2);
    
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute("cx",params.markerSize);
        circle.setAttribute("cy",params.markerSize);
        circle.setAttribute("r",params.markerSize);
    
        svg.appendChild(circle);
        cont.appendChild(svg);

        svg.setAttribute("data-index", this.index);


        // generating popup
        let p = document.createElement("p");
        p.classList.add("popup-text")
        p.textContent = this.data["Name"];

        cont.appendChild(p);


        // HOVER EVENTS
        cont.addEventListener("mouseenter", (e) => {
            // cont.classList.add("marker-focused");

            this.mapManager.setFocusState(this.index, "hover");
        })

        cont.addEventListener("mouseleave", (e) => {
            // cont.classList.remove("marker-focused");

            this.mapManager.setFocusState(null, null);
        })

        
        // CLICK EVENTS

        cont.addEventListener("mousedown", (e) => {
            // cont.classList.add("marker-selected");
            this.mapManager.setFocusState(this.index, "select");
        })
    
        return cont;
    }

    createMarker(){

        // console.log(arr)
        this.maplibreMarker = new maplibregl.Marker({element: this.elem})
            .setLngLat(this.pos)
            .addTo(this.mapManager.map);

        
    }

    setAsFocused(){
        this.isFocused = true;
        this.elem.classList.add("marker-focused");
    }
    
    setAsNotFocused(){
        this.isFocused = false;
        this.elem.classList.remove("marker-focused");
    }
}