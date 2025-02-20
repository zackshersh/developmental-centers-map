
class InterfaceManager {
    constructor(mapManager){

        this.mapManager = mapManager;

        this.elements = {
            mainCont: document.getElementById("main-cont"),
            detailsPopup: document.getElementById("details-popup")
        }
    }

    update(){


        this.elements.detailsPopup.innerHTML = "";

        let data = this.mapManager.getSelectedMarkerData();
        console.log(data);

        if(!data) return;


        let detailsCont = document.createElement("div");
        detailsCont.classList.add("details-cont")
        detailsCont.innerHTML = `
            <h3>${data["Name"]}</h3>
            <p>${data["Town"]}, ${data["State"]}</p>
            <p>${data["Opened"]} - ${data["Closed"]}</p>
        `

        this.elements.detailsPopup.appendChild(detailsCont)
        console.log(this.elements.detailsPopup)
    }


}