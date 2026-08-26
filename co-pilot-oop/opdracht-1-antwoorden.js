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

  constructor(naam, leeftijd, vachtkleur, heeftManen) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.vachtkleur = vachtkleur;
    this.heeftManen = heeftManen;
  }

  printGegevens() {
    console.log(this.naam + " is een leeuw van " + this.leeftijd + " jaar, met een " + this.vachtkleur + " vacht en heeft manen: " + this.heeftManen);
  }

  maakGeluid() {
    console.log(this.naam + " brult: ROARRR!");
  }
}

/*********** STAP 2 ********
  Uncomment de volgende drie regels en check in het andere browservenster of de uitvoer klopt
***************************/

let simba = new Leeuw("Simba", 2, "gele", false);
simba.printGegevens();
simba.maakGeluid();

/*********** STAP 3 ********
  Maak een tweede object van de klasse Leeuw, noem deze "Nala" of "Mufasa", print ook de gegevens en laat het dier grommen
  Check of de uitvoer klopt.
  (tip: kijk naar de code van stap 2)
***************************/

let mufasa = new Leeuw("Mufasa", 10, "donkergeel", true);
mufasa.printGegevens();
mufasa.maakGeluid();

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
  naam;
  leeftijd;
  vachtkleur;
  snelheid;

  constructor(naam, leeftijd, vachtkleur, snelheid) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.vachtkleur = vachtkleur;
    this.snelheid = snelheid;
  }

  printGegevens() {
    console.log(
      this.naam + " is een paard van " + this.leeftijd + " jaar, met een " + this.vachtkleur + " vacht en een topsnelheid van " + this.snelheid + " km/u.");
  }

  maakGeluid() {
    console.log(this.naam + " hinnikt: Hiiiiih!");
  }
}

let maximus = new Paard("Maximus", 8, "witte", 50);
maximus.printGegevens();
maximus.maakGeluid();

/*********** STAP 5 ********
  Maak hieronder een nieuwe class met een zelfverzonnen dier.
  attributen: naam, leeftijd
              en nog twee zelfbedachte attributen die bij het dier passen
  methodes:   printGegevens() en maakGeluid()
              en nog een zelfbedachte methode zoals eet() of spring() die iets bijpassends uitprint

  Maak zelf een object van de class aan en check of alles correct werkt.
***************************/

class Dolfijn {
  naam;
  leeftijd;
  kleur;
  kanTrucs;

  constructor(naam, leeftijd, kleur, kanTrucs) {
    this.naam = naam;
    this.leeftijd = leeftijd;
    this.kleur = kleur;
    this.kanTrucs = kanTrucs;
  }

  printGegevens() {
    console.log( this.naam + " is een " + this.kleur + " dolfijn van " + this.leeftijd + " jaar en kan trucs: " + this.kanTrucs);
  }

  maakGeluid() {
    console.log(this.naam + " klikt en fluit: *klik klik fluit fluit*");
  }

  spring() {
    console.log(this.naam + " maakt een hoge sprong uit het water!");
  }
}

let flipper = new Dolfijn("Flipper", 5, "grijze", true);
flipper.printGegevens();
flipper.maakGeluid();
flipper.spring();
