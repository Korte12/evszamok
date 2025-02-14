/**
* Ezzel a függvényel táblázatunkat hozzuk létre
* 
*/
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

/**
* Ezzel a függvényel azt ellenőrizzük hogy egy adott input mező üres e
* 
*/
function ValidateField(inputElement, ErrorMessage){//Függvényt definiálunk
    let valid = true;//A valid értéke igaz
    if(inputElement.value === ""){//Ha az inputElement üres
        const parentElement = inputElement.parentElement //Az inputElement szülő elemét hozzá rendeljük a parentElementhez
        const error = parentElement.querySelector(".error"); // Megkeressük az első elemet amin rajta van az error
        if(error) { //Ha az error
            error.innerHTML = ErrorMessage; // Kiirjuk a hibaüzenetet
        }
        valid = false // A valid változó értékét hamisra cseréljük
    }
    return valid //Valid értékkel térek vissza
}

/**
* Ezzel a függvényel azt ellenőrizzük hogy két mezőből bármelyik üres e
* 
*/
function ValidateField2(firstElement, secondElement, ErrorMessage){ //Függvényt definiálunk
    let valid = true //A valid értéke igaz
    if(firstElement.value != "" && !ValidateField(secondElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    if(secondElement.value != "" && !ValidateField(firstElement, ErrorMessage)){ // Ellenőrizzük hogy a két mező közül az egyik kivan e töltve és ha igen akkor a másik mezőt validáljuk
        valid = false //A valid értéke hamis
    }
    return valid //A valid értékkel térünk vissza
}

/**
* Ezzel a függvényel a fejlécet generáljuk le
* 
*/
function generateHeader(){ //Függvényt definiálunk
    const thead = document.createElement('thead'); //Létrehozok egy thead elemet
    table.appendChild(thead);//Hozzá appendelem a táblázathoz
    const tr = document.createElement('tr');//Létrehozok egy sor elemet
    const headerW = ["Időszak", "Évszám", "Esemény", "Tananyag"]; //Létrehozom a header tömböt
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

/**
* Ezzel a függvényel a formunkat generáljuk le
* 
*/
    function generateForm(formD) {  
        const form = document.createElement('form'); // Létrehozom a form elemet
        document.body.appendChild(form); // Hozzáadom a formot a body-hoz
        form.id = "form"; // Beállítom a form id-ját 'form' értékre
        form.action = "#"; // Beállítom a form action-ját '#'-ra
    
        for (let i = 0; i < formD.length; i++) { // Végigiterálok a formon
            const aktualis = formD[i]; // Hivatkozok az aktuális form elemre
            
            if (aktualis.id == 'tan1' || aktualis.id == 'tan2') { // Ha az id 'tan1' vagy 'tan2'
                const div = document.createElement('div'); // Létrehozok egy div elemet
                form.appendChild(div); // Hozzáadom a div-et a formhoz
                
                const label = document.createElement('label'); // Létrehozom a label elemet
                label.innerHTML = aktualis.label; // Beállítom a label szövegét
                div.appendChild(label); // Hozzáadom a div-hez
                
                const br1 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br1); // Hozzáadom a div-hez
                
                const select = document.createElement('select'); // Létrehozom a select elemet
                select.id = aktualis.id; // A select id-ja megegyezik az aktuális id-val
                select.name = aktualis.id; // A select name-je is az aktuális id-val egyezik
                
  
                const option1 = document.createElement('option'); // Létrehozom a otpion elemet
                option1.value = '';  //Az értéke semmi
                option1.innerHTML = ''; // Üres érték
                select.appendChild(option1); // Hozzáadom a select-hez
                
        
                const option2 = document.createElement('option'); // Létrehozom a option elemet
                option2.value = 'magyar'; //Értéke magyar
                option2.innerHTML = 'Magyar történelem'; // Beállítom az innerhtml szövegét
                select.appendChild(option2); // Hozzáadom a select-hez
                
                
                const option3 = document.createElement('option'); // Létrehozom a option elemet
                option3.value = 'egyetemes'; //Értéke egyetemes
                option3.innerHTML = 'Egyetemes történelem'; // Beállítom az innerhtml szövegét
                select.appendChild(option3); // Hozzáadom a select-hez
                
                div.appendChild(select); // Hozzáadom a select-et a div-hez
                
                const br2 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br2); // Hozzáadom a div-hez
                
                const span = document.createElement('span'); // Létrehozok egy span elemet
                span.classList = "error"; // Az osztálya 'error' lesz
                div.appendChild(span); // Hozzáadom a span-t a div-hez
                
                const br3 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br3); // Hozzáadom a div-hez

            } else { // Ha az id nem 'tan1' vagy 'tan2'
                const div = document.createElement('div'); // Létrehozom a div elemet
                form.appendChild(div); // Hozzáadom a div-et a formhoz
                
                const label = document.createElement('label'); // Létrehozom a label elemet
                label.innerHTML = aktualis.label; // Beállítom a label szövegét
                div.appendChild(label); // Hozzáadom a div-hez
                
                const br1 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br1); // Hozzáadom a div-hez
                
                const input = document.createElement('input'); // Létrehozom az input elemet
                input.type = "text"; // Az input típusa 'text'
                input.id = aktualis.id; // Az input id-ja megegyezik az aktuális id-val
                input.name = aktualis.id; // Az input name-je is az aktuális id-val egyezik
                div.appendChild(input); // Hozzáadom az input-ot a div-hez
                
                const br2 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br2); // Hozzáadom a div-hez
                
                const span = document.createElement('span'); // Létrehozok egy span elemet
                span.classList = "error"; // Az osztálya 'error' lesz
                div.appendChild(span); // Hozzáadom a span-t a div-hez
                
                const br3 = document.createElement('br'); // Sortörést hozok létre
                div.appendChild(br3); // Hozzáadom a div-hez
            }
        }
    
        const button = document.createElement('button'); // Létrehozok egy gombot
        button.innerHTML = "Hozzáadás"; // A gomb szövege "Hozzáadás"
        form.appendChild(button); // Hozzáadom a gombot a formhoz
    }