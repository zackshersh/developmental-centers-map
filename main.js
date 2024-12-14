let data;
let markers;

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.maptiler.com/maps/a8c18bb5-c61e-48aa-9e7b-b47f838fa7b5/style.json?key=mFj1XfKRnWjJCieQrgjz', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});

async function init(){

    console.log(data);
    data = await loadJSON();
    console.log(data);

    markers = createMarkers(data);
}

init()