/*
// Demander a l'utilisateur de remplire deux tableaux (tab1 et tab2) dont la taille est 5
var tab1 = [];
var tab2 = [];

for (let i = 0; i < 5; i++ ) {
    tab1.push(prompt("velleilez saisir un elemebt pour tab1"));
}
for (let i = 0; i < 5; i++) {
    tab2.push(prompt("velleilez saisir un elemebt pour tab2"));
}

// Creer tab3 a partir des elements du tab1 qui ne se trouvent pas dans tab2
var tab3 = tab1.filter(function(el) {
    return !tab2.includes(el);
})
// Creer tab4 a partir des elements du tab1 qui se trouvent dans tab2
var tab4 = tab1.filter(function(el) {
    return tab2.includes(el);
})
// afficher les resultats
document.getElementById("tab1").innerHTML = `voici les elements de tab1 : [${tab1}]`
document.getElementById("tab2").innerHTML = `voici les elements de tab2 : [${tab2}]`
document.getElementById("tab3").innerHTML = `voici les elements de tab3 : [${tab3}]`
document.getElementById("tab4").innerHTML = `voici les elements de tab4 : [${tab4}]` 
*/
                /*****Partie2*****/
// Ecrire une fonction qui  reçoit en parametre tab1 et qui permet de le trier
var tableau = [12, 13, 4, 35, 46, 7,];
tableau.sort();

document.getElementById('trier').innerHTML = `voici le tableau Javascript [ ${tableau} ].`;
document.getElementById('max').innerHTML = `Voici le nombre maximale du tableau ( ${Math.max(...tableau)} ).`; 
document.getElementById('min').innerHTML = `Voici le nombre maximale du tableau ( ${Math.min(...tableau)} ).`; 