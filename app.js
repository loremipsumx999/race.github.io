let skala = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
function nyalas() {
    let valasz;
    do {
        valasz = prompt("Mennyire? 1-10");
        if (!skala.includes(valasz)) {
            alert("1-10-ig számmal bro");
        }
    } while (!skala.includes(valasz));

    alert("Az már komoly 😩");
    alert("JÁKOB WALK");
}