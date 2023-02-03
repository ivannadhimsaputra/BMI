const formSegitiga = document.getElementById("formSegitiga");
const tampil = document.getElementById("tampil");
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi")

const hasilSegitiga = JSON.parse(localStorage.getItem("segitiga")) || [];

const tambahSegitiga = (alas, tinggi, hasil) => {
    hasilSegitiga.push({
        alas,
        tinggi,
        hasil
    });

    localStorage.setItem("segitiga", JSON.stringify(hasilSegitiga));

    return {alas, tinggi, hasil};
}

const buatSegitiga = ({ alas, tinggi, hasil}) => {

    const divSegitiga = document.createElement("div");
    const alass = document.createElement("p");
    const tinggii = document.createElement("p");
    const hasill = document.createElement("h2");
    const hr = document.createElement("hr")

    alass.innerHTML = "alas : " + alas;
    tinggii.innerHTML = "tinggi : " + tinggi;
    hasill.innerHTML = "Luas Segitiga : " + hasil;

    divSegitiga.append(alass, tinggii, hasill, hr);
    tampil.appendChild(divSegitiga);
};

hasilSegitiga.forEach(buatSegitiga);

formSegitiga.onsubmit = e => {
    e.preventDefault();

    const vAlas = alas.value;
    const vTinggi = tinggi.value;
    const Luas = (vAlas*vTinggi)/2;

    const NewSegitiga = tambahSegitiga(
        vAlas,
        vTinggi,
        Luas
    );

    buatSegitiga(NewSegitiga);

    alas.value = "";
    tinggi.value = "";

};