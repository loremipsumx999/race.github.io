let valasz = ["Pohárban", "pohárban", "poharban"];
function nyalas() {
    let kerdes;
    do {
        kerdes = prompt("Miben fürdenek az etióp gyerekek?");
        if (!valasz.includes(kerdes)) {
            alert("");
        }
    } while (!valasz.includes(kerdes));

    alert("hello world");
}