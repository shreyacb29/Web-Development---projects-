let a = document.getElementById("a");
let b = document.getElementById("b");

document.getElementById("addBtn").onclick = function () {

    document.getElementById("addResult").innerText =
        Number(a.value) + Number(b.value);
};

document.getElementById("subBtn").onclick = function () {

    document.getElementById("subResult").innerText =
        Number(a.value) - Number(b.value);
};

document.getElementById("mulBtn").onclick = function () {

    document.getElementById("mulResult").innerText =
        Number(a.value) * Number(b.value);
};

document.getElementById("divBtn").onclick = function () {

    document.getElementById("divResult").innerText =
        Number(a.value) / Number(b.value);
};