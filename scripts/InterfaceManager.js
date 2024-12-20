
class InterfaceManager {
    constructor(mapManager){

        this.mapManager = mapManager;

        this.elements = {
            mainCont: document.getElementById("main-cont"),
            mapCont: document.getElementById("map"),
            detailsPopup: document.getElementById("details-popup")

        }
    }

    update(){
        let data = this.mapManager.getFocusedData();
        // console.log(data);

        if(!data){
            this.hideDetails()
        } else {
            this.showDetails(data);
        }


    }
    
    showDetails(data){
        this.elements.mapCont.classList.add("map-halfsize");
        console.log(data)
        this.elements.detailsPopup.innerHTML = `

            <h1>${data["Name"]}</h1>
        `
    }

    hideDetails(){

    }


}