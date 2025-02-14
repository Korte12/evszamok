const array = [
    {
        ido: "XVI. század",
        evszam: "1514",
        esemeny: "Dózsa-féle parasztháború",
        tananyag: "magyar",
        evszam2: "1519-1522",
        esemeny2: "Magellán körülhajózza a földet",
        tananyag2: "egyetemes"
    },
    {
        ido: "XVII. század",
        evszam: "1664",
        esemeny: "vasvári béke",
        tananyag: "magyar"
    },
    {
        ido: "XVIII. század",
        evszam: "1701-1714",
        esemeny: "spanyol örökösödési háború",
        tananyag: "egyetemes",
        evszam2: "1703-1711",
        esemeny2: "Rákóczi szabadságharc",
        tananyag2: "magyar"
    },
    {
        ido: "XIX. század",
        evszam: "1812",
        esemeny: "Napóleon oroszországi hadjárata",
        tananyag: "egyetemes",
        evszam2: "1809",
        esemeny2: "győri csata",
        tananyag2: "magyar"
    },
]

const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody') //Létrehozok egy tbody elemet
table.appendChild(tbody) //Hozzá appendelem a táblázathoz

generateHeader() //Meghivom a header függvényt

function renderTable() {
    tbody.innerHTML = ''; // tbody innerHTML-je üres string

    for (let i = 0; i < array.length; i++) { // Végig iterálok az array tömbön
        const tr = document.createElement('tr'); // Létrehozok egy tr elemet
        tbody.appendChild(tr); // Hozzá appendelem a tbody-hoz

        const cell1 = document.createElement('td'); // Létrehozok egy td elemet
        cell1.innerHTML = array[i].ido; // Megadom az értékét
        cell1.rowSpan = array[i].evszam2 ? 2 : 1; // Ha van evszam2, akkor két sor jön létre, egyébként csak egy sor
        tr.appendChild(cell1); // Hozzá appendelem a tr-hez

        const cell2 = document.createElement('td'); // Létrehozok egy td elemet
        cell2.innerHTML = array[i].evszam; // Megadom az értékét
        tr.appendChild(cell2); // Hozzá appendelem a tr-hez

        const cell3 = document.createElement('td'); // Létrehozok egy td elemet
        cell3.innerHTML = array[i].esemeny; // Megadom az értékét
        tr.appendChild(cell3); // Hozzá appendelem a tr-hez

        const cell4 = document.createElement('td'); // Létrehozok egy td elemet
        cell4.innerHTML = array[i].tananyag; // Megadom az értékét
        tr.appendChild(cell4); // Hozzá appendelem a tr-hez

        if (array[i].evszam2) { // Ha van második évszám
            const tr2 = document.createElement('tr'); // Létrehozok egy új tr elemet a második sor számára
            tbody.appendChild(tr2); // Hozzáadom a tbody-hoz

            const cell5 = document.createElement('td'); // Létrehozok egy td elemet
            cell5.innerHTML = array[i].evszam2; // Megadom az értékét
            tr2.appendChild(cell5); // Hozzá appendelem a tr2-höz

            const cell6 = document.createElement('td'); // Létrehozok egy td elemet
            cell6.innerHTML = array[i].esemeny2; // Megadom az értékét
            tr2.appendChild(cell6); // Hozzá appendelem a tr2-höz

            const cell7 = document.createElement('td'); // Létrehozok egy td elemet
            cell7.innerHTML = array[i].tananyag2; // Megadom az értékét
            tr2.appendChild(cell7); // Hozzá appendelem a tr2-höz
        }
    }
}

renderTable() //Meghivom a renderTable függvényt és az array paramétert fogja kapni

function generateHeader(){ //Függvényt definiálunk
    const thead = document.createElement('thead'); //Létrehozok egy thead elemet
    table.appendChild(thead);//Hozzá appendelem a táblázathoz
    const tr = document.createElement('tr');//Létrehozok egy sor elemet
    const headerW = ["Időszak", "Évszám", "Esemény", "Tananyag"];
    thead.appendChild(tr);//Hozzá appendelem a fej részhez
    for (let i = 0; i < headerW.length; i++) { // Végigiterálunk a headerW tömb elemein
        const th = document.createElement('th'); //Létrehozok egy th-t
        th.innerHTML = headerW[i]; //A th innerHTML-je lesz az aktuális headerW elem értéke
        if (i === 2) { // Hogyha az i megyezik kettővel (harmadik oszlop)
            th.colSpan = 1; // Beállítjuk a colspan értékét 1-re
        }
            tr.appendChild(th) //Hozzá appendeljük a sorhoz a th-t
        }
     
    }
    
const form = document.getElementById("form") //Lekérem a html form id-ját
form.addEventListener('submit', function(e){//Eseménykezelőt adok a form-hoz
    e.preventDefault()//Megakadályozom hogy a böngésző alapártelmezetten lefusson
    const idoH = document.getElementById("korszak")//Lekérem a html form id-ját
    const evszamH = document.getElementById("evszam1")//Lekérem a html form id-ját
    const esemenyH = document.getElementById("megnev1")//Lekérem a html form id-ját
    const tananyagH = document.getElementById("tan1")//Lekérem a html form id-ját
    const evszam2H = document.getElementById("evszam2")//Lekérem a html form id-ját
    const esemeny2H = document.getElementById("megnev2")//Lekérem a html form id-ját
    const tananyag2H = document.getElementById("tan2")//Lekérem a html form id-ját

    const idoV = idoH.value ///Eltárolom egy változóban az értéket
    const evszamV = evszamH.value///Eltárolom egy változóban az értéket
    const esemenyV = esemenyH.value///Eltárolom egy változóban az értéket
    const tananyagV = tananyagH.value///Eltárolom egy változóban az értéket
    const evszam2V = evszam2H.value///Eltárolom egy változóban az értéket
    const esemeny2V = esemeny2H.value///Eltárolom egy változóban az értéket
    const tananyag2V = tananyag2H.value///Eltárolom egy változóban az értéket

    const thisForm = e.currentTarget //Az aktuális form

    const new_date = { //Létrehozok egy új elemet
        ido: idoV, //Értéket adok
        evszam: evszamV,//Értéket adok
        esemeny: esemenyV,//Értéket adok
        tananyag: tananyagV,//Értéket adok
        evszam2: evszam2V,//Értéket adok
        esemeny2: esemeny2V,//Értéket adok
        tananyag2: tananyag2V,//Értéket adok
    }
    
    array.push(new_date)//Hozzárakom az arrayhez az új elemet
    thisForm.reset()//thisFormot vagyis a táblázatunkat resetelem
    renderTable();//Meghivom a renderTable függvényt mégegyszer
})