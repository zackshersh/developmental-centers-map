async function loadJSON(){
    const res = await fetch("./data-12-14-24.json");

    if(!res.ok) console.error(res.status);
    console.log(res)
    const json = await res.json();

    return json;
}