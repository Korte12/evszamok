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

const formL = [
    {
        label: "Korszak megnevezése: ",
        id: "korszak",
    },
    {
        label: "1. esemény évszám:",
        id: "evszam1",
    },
    {
        label: "1. esemény megnevezés:",
        id: "megnev1",
    },
    {
        label: "1. esemény tananyag:",
        id: "tan1",
    },
    {
        label: "2. esemény évszám:",
        id: "evszam2",
    },
    {
        label: "2. esemény megnevezés:",
        id: "megnev2",
    },
    {
        label: "2. esemény tananyag:",
        id: "tan2",
    },
    
]

generateForm(formL) //Meghivom a függvényt

const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const tbody = document.createElement('tbody') //Létrehozok egy tbody elemet
table.appendChild(tbody) //Hozzá appendelem a táblázathoz

generateHeader() //Meghivom a header függvényt

renderTable() //Meghivom a renderTable függvényt és az array paramétert fogja kapni
    
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
    const errorElements = thisForm.querySelectorAll('.error') //Errorokat eltárolom egy változóban
    for(const i of errorElements){ //Végigmegyek az errorokon és "" ra állitom az értéküket
        i.innerHTML = ""
    }
    let valid = true; // A valid változó értéke igaz
    if(!ValidateField(idoH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(evszamH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }
    if(!ValidateField(esemenyH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if(!ValidateField(tananyagH, "A mező kitöltése kötelező!")){ //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
        valid = false; //A valid értéke hamis lesz
    }

    if (evszam2V || esemeny2V || tananyag2V) { // Megnézzük hogy a második mezők közül legalább egy ki van-e töltve
       
        if (!ValidateField2(evszamH, evszam2H, "A mező kitöltése kötelező!")) { //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false; //A valid értéke hamis lesz
        }
        if (!ValidateField2(esemenyH, esemeny2H, "A mező kitöltése kötelező!")) { //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false;
        }
        if (!ValidateField2(tananyagH, tananyag2H, "A mező kitöltése kötelező!")) { //Ha a függvényünk hamissal tér vissza akkor kiirja az error üzenetet
            valid = false; //A valid értéke hamis lesz
        }
    }

    if(valid){ //Ha valid
        if (evszam2V === "" && esemeny2V === "" && tananyag2V === "") { //Ha az adott mezők üresek
        const new_date = { //Létrehozok egy új elemet
            ido: idoV, //Értéket adok
            evszam: evszamV,//Értéket adok
            esemeny: esemenyV,//Értéket adok
            tananyag: tananyagV,//Értéket adok
        }

    array.push(new_date)//Hozzárakom az arrayhez az új elemet

        }
        else {
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
        }
    }

    thisForm.reset()//thisFormot vagyis a táblázatunkat resetelem
    renderTable();//Meghivom a renderTable függvényt mégegyszer
})