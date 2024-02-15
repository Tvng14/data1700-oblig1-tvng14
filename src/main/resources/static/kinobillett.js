
function velgFilm(){
}
function sjekkAntallBilletter(){
    let antallBilletter = document.getElementById("antallBilletter").value;
    if (antallBilletter == "") {
        document.getElementById("feilAntall").innerText = "Vennligst velg antall billetter";
    } else {
        document.getElementById("feilAntall").innerText = "";
    }
}
function sjekkFornavn(){
    let innFornavn = document.getElementById("innFornavn").value;
    if (innFornavn.trim() == "") {
        document.getElementById("feilFornavn").innerText = "Vennligst fyll inn fornavn";
    } else {
        document.getElementById("feilFornavn").innerText = "";
    }
}
function sjekkEtternavn(){
    let innEtternavn = document.getElementById("innEtternavn").value;
    if (innEtternavn.trim() == "") {
        document.getElementById("feilEtternavn").innerText = "Vennligst fyll inn etternavn";
    } else {
        document.getElementById("feilEtternavn").innerText = "";
    }
}
function sjekkTlf(){
    let innTlf = document.getElementById("innTlf").value;
    if (innTlf.trim() == "") {
        document.getElementById("feilTlf").innerText = "Vennligst fyll inn telefonnummer";
    } else {
        document.getElementById("feilTlf").innerText = "";
    }
}
function sjekkEpost() {
    let innEpost = document.getElementById("innEpost").value;
    if (innEpost.trim() == "") {
        document.getElementById("feilEpost").innerText = "Vennligst fyll ut e-post";
    } else {
        document.getElementById("feilEpost").innerText = "";
    }
}
function bestillBillett() {
}
function slettBilletter(){

}