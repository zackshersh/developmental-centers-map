const mapManager = new MapManager();

async function init(){

    let data = await loadJSON();
    mapManager.setData(data);
}

init()