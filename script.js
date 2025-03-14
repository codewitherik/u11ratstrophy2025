'use strict'

// Setze das Datum für den Start des U11-Turniers
var countdownDate = new Date("March 16, 2025 00:00:00").getTime();

// Update der Countdown alle 1 Sekunde
var x = setInterval(function() {
  
  // Holen des aktuellen Datums und der Uhrzeit
  var now = new Date().getTime();
  
  // Berechne die Differenz zwischen jetzt und dem Ziel-Datum
  var distance = countdownDate - now;
  
  // Berechne Tage, Stunden, Minuten und Sekunden
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Ausgabe des Countdown in das HTML-Element mit der ID "timer"
  document.getElementById("timer").innerHTML = days + "T " + hours + "H " + minutes + "M " + seconds + "S ";
  
  // Wenn der Countdown abgelaufen ist, schreibe eine Nachricht
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Das Turnier hat begonnen!";
  }
}, 1000);

