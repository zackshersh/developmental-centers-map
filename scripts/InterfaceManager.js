
class InterfaceManager {
    constructor(mapManager){

        this.mapManager = mapManager;

        this.elements = {
            mainCont: document.getElementById("main-cont"),
            detailsPopup: document.getElementById("details-popup")
        }
    }

    update(){
        let data = this.mapManager.getSelectedMarkerData();
        console.log(data);

        let title = document.createElement("h1");
        title.innerHTML = data["Original Name"]

        this.elements.detailsPopup.appendChild(title)
        console.log(this.elements.detailsPopup)
    }


}