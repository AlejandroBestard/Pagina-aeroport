// DADES MOCKEJADES https://es.flightaware.com (¡¡¡¡¡¡FET AMB IA!!!!!)

const sortides = [
  { hora: "06:30", vol: "VY1234", desti: "Barcelona", companyia: "Vueling", terminal: "A", porta: "A12", estat: "Aterrat" },
  { hora: "07:00", vol: "IB2345", desti: "Madrid", companyia: "Iberia", terminal: "A", porta: "A05", estat: "A temps" },
  { hora: "07:45", vol: "FR3401", desti: "Londres Stansted", companyia: "Ryanair", terminal: "B", porta: "B03", estat: "Embarcant" },
  { hora: "08:15", vol: "VY5522", desti: "Amsterdam", companyia: "Vueling", terminal: "A", porta: "A08", estat: "A temps" },
  { hora: "08:50", vol: "U23310", desti: "Manchester", companyia: "easyJet", terminal: "B", porta: "B11", estat: "Retardat" },
  { hora: "09:10", vol: "IB6780", desti: "París CDG", companyia: "Iberia", terminal: "A", porta: "A14", estat: "A temps" },
  { hora: "09:40", vol: "FR8821", desti: "Roma Ciampino", companyia: "Ryanair", terminal: "B", porta: "B07", estat: "Cancel·lat" },
  { hora: "10:00", vol: "LH1122", desti: "Frankfurt", companyia: "Lufthansa", terminal: "A", porta: "A02", estat: "A temps" },
  { hora: "10:30", vol: "VY9900", desti: "Sevilla", companyia: "Vueling", terminal: "A", porta: "A09", estat: "Embarcant" },
  { hora: "11:05", vol: "U27741", desti: "Bristol", companyia: "easyJet", terminal: "B", porta: "B14", estat: "A temps" },
  { hora: "11:30", vol: "IB3344", desti: "Bilbao", companyia: "Iberia", terminal: "A", porta: "A06", estat: "Retardat" },
  { hora: "12:00", vol: "FR5567", desti: "Dublín", companyia: "Ryanair", terminal: "B", porta: "B02", estat: "A temps" },
  { hora: "12:45", vol: "LH3388", desti: "Munic", companyia: "Lufthansa", terminal: "A", porta: "A11", estat: "A temps" },
  { hora: "13:20", vol: "VY6611", desti: "Màlaga", companyia: "Vueling", terminal: "A", porta: "A03", estat: "Cancel·lat" },
  { hora: "14:00", vol: "U29988", desti: "Ginebra", companyia: "easyJet", terminal: "B", porta: "B09", estat: "A temps" },
];

const arribades = [
  { hora: "06:10", vol: "VY1233", origen: "Barcelona", companyia: "Vueling", terminal: "A", porta: "A12", estat: "Aterrat" },
  { hora: "06:55", vol: "IB2344", origen: "Madrid", companyia: "Iberia", terminal: "A", porta: "A05", estat: "Aterrat" },
  { hora: "07:30", vol: "FR3400", origen: "Londres Stansted", companyia: "Ryanair", terminal: "B", porta: "B03", estat: "Aterrat" },
  { hora: "08:00", vol: "VY5521", origen: "Amsterdam", companyia: "Vueling", terminal: "A", porta: "A08", estat: "A temps" },
  { hora: "08:40", vol: "U23309", origen: "Manchester", companyia: "easyJet", terminal: "B", porta: "B11", estat: "Retardat" },
  { hora: "09:00", vol: "IB6779", origen: "París CDG", companyia: "Iberia", terminal: "A", porta: "A14", estat: "A temps" },
  { hora: "09:25", vol: "FR8820", origen: "Roma Ciampino", companyia: "Ryanair", terminal: "B", porta: "B07", estat: "Cancel·lat" },
  { hora: "09:55", vol: "LH1121", origen: "Frankfurt", companyia: "Lufthansa", terminal: "A", porta: "A02", estat: "A temps" },
  { hora: "10:20", vol: "VY9899", origen: "Sevilla", companyia: "Vueling", terminal: "A", porta: "A09", estat: "A temps" },
  { hora: "10:50", vol: "U27740", origen: "Bristol", companyia: "easyJet", terminal: "B", porta: "B14", estat: "A temps" },
  { hora: "11:15", vol: "IB3343", origen: "Bilbao", companyia: "Iberia", terminal: "A", porta: "A06", estat: "Retardat" },
  { hora: "11:45", vol: "FR5566", origen: "Dublín", companyia: "Ryanair", terminal: "B", porta: "B02", estat: "A temps" },
  { hora: "12:30", vol: "LH3387", origen: "Munic", companyia: "Lufthansa", terminal: "A", porta: "A11", estat: "A temps" },
  { hora: "13:10", vol: "VY6610", origen: "Màlaga", companyia: "Vueling", terminal: "A", porta: "A03", estat: "Aterrat" },
  { hora: "13:50", vol: "U29987", origen: "Ginebra", companyia: "easyJet", terminal: "B", porta: "B09", estat: "A temps" },
];

//ja no hi ha IA, fet a ma
//variables
let tabActual = "sortides";
let estatActual = "tots";

// RELLOTGE I DATA
//Nose perque coño no funciona es rellotje revisar, alomillor fer que s'actualitzi cada segon


function actualitzarRellotge() {
  const ara = new Date();

  // Hores
  const hores = String(ara.getHours()).padStart(2, "0");
  const minuts = String(ara.getMinutes()).padStart(2, "0");
  const segons = String(ara.getSeconds()).padStart(2, "0");
  document.getElementById("rellotge").textContent = hores + ":" + minuts + ":" + segons;

  // Data
  const dies = ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"];
  const mesos = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
  const nomDia = dies[ara.getDay()];
  const dia = ara.getDate();
  const mes = mesos[ara.getMonth()];
  const any = ara.getFullYear();
  document.getElementById("data-avui").textContent = nomDia + ", " + dia + " de " + mes + " de " + any;
}

// Actualitza cada segon
setInterval(actualitzarRellotge, 1000);
actualitzarRellotge();

// canvi de sortides i arribades


function canviarTab(tab) {
  tabActual = tab;

  // Canviar classe activa als botons
  document.getElementById("btn-sortides").classList.remove("actiu-tab");
  document.getElementById("btn-arribades").classList.remove("actiu-tab");
  document.getElementById("btn-" + tab).classList.add("actiu-tab");

  // Canviar la capçalera de la columna
  const thDesti = document.getElementById("th-destinacio");
  if (tab === "sortides") {
    thDesti.textContent = "Destí";
  } else {
    thDesti.textContent = "Origen";
  }

  // Tornar el filtre d'estat a "Tots"
  estatActual = "tots";
  document.querySelectorAll(".btn-estat").forEach(function(btn) {
    btn.classList.remove("actiu-estat");
  });
  document.querySelector(".btn-estat").classList.add("actiu-estat");

  // Netejar la cerca
  document.getElementById("cerca").value = "";

  mostrarVols();
}

