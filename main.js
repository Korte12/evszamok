const table = document.createElement('table'); //Létrehozom a table-t
document.body.appendChild(table);//Hozzá appendelem a body-hoz

const thead = document.createElement('thead');//Létrehozom a thead-et
table.appendChild(thead);//Hozzá appendelem a table-hez

const tr = document.createElement('tr');//Létrehozom a tr-t
thead.appendChild(tr);//Hozzá appendelem a thead-hez

const th1 = document.createElement('th');//Létrehozom az első th-t
th1.innerHTML = "Időszak"; //Megadom az értékét
tr.appendChild(th1);//Hozzá appendelem a sorhoz

const th2 = document.createElement('th');//Létrehozom a második th-t
th2.innerHTML = "Évszám";//Megadom az értékét
tr.appendChild(th2);//Hozzá appendelem a sorhoz

const th3 = document.createElement('th');//Létrehozom a harmadik th-t
th3.innerHTML = "Esemény";//Megadom az értékét
th3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
tr.appendChild(th3);//Hozzá appendelem a sorhoz

const th4 = document.createElement('th');//Létrehozom a harmadik th-t
th4.innerHTML = "Tananyag";//Megadom az értékét
tr.appendChild(th4);//Hozzá appendelem a sorhoz

const tbody = document.createElement('tbody');//Létrehozom a tbody-t
table.appendChild(tbody);//Hozzá appendelem a table-hez


const row1 = document.createElement('tr');//Létrehozom az első sort
tbody.appendChild(row1);// Hozzá appendelem a tbody-hoz


const cell1_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_1.innerHTML = "XVI. század";//Megadom az értékét
cell1_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_1);//Hozzá appendelem a sorhoz a cellát

const cell1_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_2.innerHTML = "1514";//Megadom az értékét
row1.appendChild(cell1_2);//Hozzá appendelem a sorhoz a cellát

const cell1_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_3.innerHTML = "Dózsa-féle parasztháború";//Megadom az értékét
cell1_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row1.appendChild(cell1_3);//Hozzá appendelem a sorhoz a cellát

const cell1_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell1_4.innerHTML = "magyar";//Megadom az értékét
row1.appendChild(cell1_4);//Hozzá appendelem a sorhoz a cellát



const row2 = document.createElement('tr');//Létrehozom a második sort
tbody.appendChild(row2);// Hozzá appendelem a tbody-hoz


const cell2_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_1.innerHTML = "1519-1522";//Megadom az értékét
row2.appendChild(cell2_1);//Hozzá appendelem a sorhoz a cellát

const cell2_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_2.innerHTML = "Magellán körülhajózza a földet";//Megadom az értékét
cell2_2.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row2.appendChild(cell2_2);//Hozzá appendelem a sorhoz a cellát

const cell2_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell2_3.innerHTML = "egyetemes";//Megadom az értékét
cell2_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row2.appendChild(cell2_3);//Hozzá appendelem a sorhoz a cellát



const row3 = document.createElement('tr');//Létrehozom a harmadik sort
tbody.appendChild(row3);// Hozzá appendelem a tbody-hoz


const cell3_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_1.innerHTML = "XVII. század";//Megadom az értékét

row3.appendChild(cell3_1);//Hozzá appendelem a sorhoz a cellát

const cell3_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_2.innerHTML = "1664";//Megadom az értékét
row3.appendChild(cell3_2);//Hozzá appendelem a sorhoz a cellát

const cell3_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_3.innerHTML = "vasvári béke";//Megadom az értékét
cell3_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row3.appendChild(cell3_3);//Hozzá appendelem a sorhoz a cellát

const cell3_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell3_4.innerHTML = "magyar";//Megadom az értékét
row3.appendChild(cell3_4);//Hozzá appendelem a sorhoz a cellát


const row4 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row4);// Hozzá appendelem a tbody-hoz


const cell4_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_1.innerHTML = "XVIII. század";//Megadom az értékét
cell4_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row4.appendChild(cell4_1);//Hozzá appendelem a sorhoz a cellát

const cell4_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_2.innerHTML = "1701-1714";//Megadom az értékét
row4.appendChild(cell4_2);//Hozzá appendelem a sorhoz a cellát

const cell4_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_3.innerHTML = "spanyol örökösödési haború";//Megadom az értékét
cell4_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row4.appendChild(cell4_3);//Hozzá appendelem a sorhoz a cellát

const cell4_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell4_4.innerHTML = "egyetemes";//Megadom az értékét
row4.appendChild(cell4_4);//Hozzá appendelem a sorhoz a cellát

const row5 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row5);// Hozzá appendelem a tbody-hoz

const cell5_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_1.innerHTML = "1703-1711";//Megadom az értékét
row5.appendChild(cell5_1);//Hozzá appendelem a sorhoz a cellát

const cell5_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_2.innerHTML = "Rákóczi szabadságharc";//Megadom az értékét
cell5_2.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row5.appendChild(cell5_2);//Hozzá appendelem a sorhoz a cellát

const cell5_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell5_3.innerHTML = "magyar";//Megadom az értékét
cell5_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row5.appendChild(cell5_3);//Hozzá appendelem a sorhoz a cellát

const row6 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row6);// Hozzá appendelem a tbody-hoz


const cell6_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_1.innerHTML = "XIX. század";//Megadom az értékét
cell6_1.rowSpan = 2;//rowSpan-t állitok be hogy jó legyen az elrendezés
row6.appendChild(cell6_1);//Hozzá appendelem a sorhoz a cellát

const cell6_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_2.innerHTML = "1812";//Megadom az értékét
row6.appendChild(cell6_2);//Hozzá appendelem a sorhoz a cellát

const cell6_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_3.innerHTML = " Napóleon oroszországi hadjárata";//Megadom az értékét
cell6_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row6.appendChild(cell6_3);//Hozzá appendelem a sorhoz a cellát

const cell6_4 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell6_4.innerHTML = "egyetemes";//Megadom az értékét
row6.appendChild(cell6_4);//Hozzá appendelem a sorhoz a cellát

const row7 = document.createElement('tr');//Létrehozom a negyedik sort
tbody.appendChild(row7);// Hozzá appendelem a tbody-hoz

const cell7_1 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_1.innerHTML = "1809";//Megadom az értékét
row7.appendChild(cell7_1);//Hozzá appendelem a sorhoz a cellát

const cell7_2 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_2.innerHTML = "győri csata";//Megadom az értékét
cell7_2.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row7.appendChild(cell7_2);//Hozzá appendelem a sorhoz a cellát

const cell7_3 = document.createElement('td');//Létrehozok egy td-t a táblázat egyik celláját
cell7_3.innerHTML = "magyar";//Megadom az értékét
cell7_3.colSpan = 2;//colSpan-t állitok be hogy jó legyen az elrendezés
row7.appendChild(cell7_3);//Hozzá appendelem a sorhoz a cellát