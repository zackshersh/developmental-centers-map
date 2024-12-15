const mapManager = new MapManager();

async function init(){

    let data = await loadJSON();
    mapManager.setData(data);

    console.log(data);

    markers = createMarkers(data, map);
    console.log(markers)
}

init()