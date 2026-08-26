/* Verwerkingsopdracht 1 - Objectgeoriënteerd programmeren
   
   Zelf classes maken en gebruiken
*/

/*********** STAP 1 ********
  De constructor stelt nu alleen de naam en de leeftijd goed in.
  * Zorg ervoor dat je aan de constructor ook een vachtkleur (bijv. "geel") en heeftManen (true of false)
    mee kan geven en dat dit ook overgenomen wordt door het object (met 'this').
  * Voeg een brulgeluid toe aan de methode maakGeluid().
***************************/

class Leeuw {
  naam;
  leeftijd;
  vachtkleur;
  heeftManen;

  // breidt de constructor uit
  constructor(naam, leeftijd) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    // TODO: voeg hier vachtkleur en heeftManen toe
  }

  printGegevens() {
    console.log(this.naam + " is een leeuw van " + this.leeftijd + " jaar, met " + this.vachtkleur + " vacht.");
  }

  maakGeluid() {
    // TODO: voeg de brul toe na de dubbele punt, zoals ROARRR!, 
    console.log(this.naam + " brult: ");
  }
}

/*********** STAP 2 ********
  Uncomment de volgende drie regels en check in het andere browservenster of de uitvoer klopt
***************************/

// let simba = new Leeuw("Simba", 2, "geel", false);
// simba.printGegevens();
// simba.maakGeluid();

/*********** STAP 3 ********
  Maak een tweede object van de klasse Leeuw, noem deze "Nala" of "Mufasa", print ook de gegevens en laat het dier grommen
  Check of de uitvoer klopt.
  (tip: kijk naar de code van stap 2)
***************************/

// TODO: maak Nala of Mufasa aan en roep printGegevens() en maakGeluid() aan



/*********** STAP 4 ********
  Maak een nieuwe class Paard met de volgende attributen en methodes:
  attributen: naam, leeftijd, vachtkleur, snelheid
  methodes:   printGegevens() en maakGeluid()

  Zorg dat de constructor correct werkt en dat de methoden alle gegevens correct uitprinten
  Check of de uitvoer klopt door de regels onder de class Paard actief te maken.
  Deze regels maken een nieuw paard-object genaamd Maximus
  (tip: kijk naar de code van stap 2)
***************************/

class Paard {
  // TODO: definieer attributen, constructor en overige methoden


}

// let maximus = new Paard("Maximus", 8, "wit", 50);
// maximus.printGegevens();
// maximus.maakGeluid();


/*********** STAP 5 ********
  Maak hieronder een nieuwe class met een zelfverzonnen dier.
  attributen: naam, leeftijd
              en nog twee zelfbedachte attributen die bij het dier passen
  methodes:   printGegevens() en maakGeluid()
              en nog een zelfbedachte methode zoals eet() of spring() die iets bijpassends uitprint

  Maak zelf een object van de class aan en check of alles correct werkt.
***************************/

// TODO: en nu helemaal zelf, je eigen, zelfverzonnen dier-class + een check met objecten




