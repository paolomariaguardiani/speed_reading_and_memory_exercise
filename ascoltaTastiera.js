// questo codice per capire quali tasti sono stati premuti l'ho trovato su:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_event_key_keycode
/* In this example, we use a cross-browser solution, because the keyCode property does not work on the onkeypress event in Firefox. However, the which property does.
Explanation of the first line in the function below: if the browser supports event.which, then use event.which, otherwise use event.keyCode */
function myFunction(event) {
    var x = event.keyCode; // event.which || 
    document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
    if (x == 65) {letterA();}
}
        
// questo è un altro codice che funziona meglio //
window.addEventListener("keydown", myFunction);
function myFunction(event) {
    // 48 is '0' in the keyboard; 96 is '0' in the numpad!
    if ((event.which == 48) || (event.which == 96))  { seleziona0(); }
    if ((event.which == 49) || (event.which == 97))  { seleziona1(); }
    if ((event.which == 50) || (event.which == 98))  { seleziona2(); }
    if ((event.which == 51) || (event.which == 99))  { seleziona3(); }
    if ((event.which == 52) || (event.which == 100))  { seleziona4(); }
    if ((event.which == 53) || (event.which == 101))  { seleziona5(); }
    if ((event.which == 54) || (event.which == 102))  { seleziona6(); }
    if ((event.which == 55) || (event.which == 103))  { seleziona7(); }
    if ((event.which == 56) || (event.which == 104))  { seleziona8(); }
    if ((event.which == 57) || (event.which == 105))  { seleziona9(); }

//    if (event.which == 65)  { letterA(); }
//    if (event.which == 66)  { letterB(); }
    if (event.which == 67)  { selezionaCanc(); }
//    if (event.which == 68)  { letterD(); }
//    if (event.which == 69)  { letterE(); }
//    if (event.which == 70)  { letterF(); }
//    if (event.which == 71)  { letterG(); }
    if (event.which == 72)  { buttonH(); }
//    if (event.which == 73)  { letterI(); }
//    if (event.which == 74)  { letterJ(); }
//    if (event.which == 75)  { letterK(); }
//    if (event.which == 76)  { letterL(); }
//    if (event.which == 77)  { letterM(); }
    if (event.which == 78)  { buttonN(); }
    if ((event.which == 79) || (event.which == 13)) { selezionaInvio(); }
//    if (event.which == 80)  { letterP(); }
//    if (event.which == 81)  { letterQ(); }
    if (event.which == 82)  { restart(); }
    if (event.which == 83)  { buttonS(); }
//    if (event.which == 84)  { letterT(); }
//    if (event.which == 85)  { letterU(); }
//    if (event.which == 86)  { letterV(); }
//    if (event.which == 87)  { letterW(); }
//    if (event.which == 88)  { letterX(); }
//    if (event.which == 89)  { letterY(); }
//    if (event.which == 90)  { letterZ(); }
//
//    if (event.which == 37)  { cambiaImmagineDietro(); }
//    if (event.which == 39)  { cambiaImmagineAvanti(); }
//
//    if (event.which == 32)  { spazio(); }
//    if (event.which == 189)  { trattino(); }
//    if (event.which == 222)  { apostrofo(); }
//
    if ((event.which == 8) || (event.which == 46))  { selezionaCanc(); }
//    if (event.which == 13)  { controllaParola(); }
}