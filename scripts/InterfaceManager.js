
class InterfaceManager {
    constructor(mapManager){

        this.mapManager = mapManager;

        this.elements = {
            mainCont: document.getElementById("main-cont"),
            detailsPopup: document.getElementById("details-popup")
        }
    }

    update(){
        let data = this.mapManager.getFocusedData();
        console.log(data);
    }


}