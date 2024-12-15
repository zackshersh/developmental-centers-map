async function loadJSON(){
    const res = await fetch("./data-12-14-24.json");

    if(!res.ok) console.error(res.status);
    const json = await res.json();
    console.log(json)

    return json;
}