/* Verwerkingsopdracht 2 - Overerving (Inheritance)
   
   Leer hoe je een superclass maakt en subclasses laat overerven
*/

/*********** STAP 1 ********
  * Pas de class Dier zo aan, dat de constructor de naam en leeftijd in de attributen zet.
  * Zorg ervoor dat de naam en leeftijd met printGegevens() geprint worden.
  * De class Dier beschrijft een niet-specifiek dier. Omdat dat een onbekend geluid heeft, print maakGeluid()
    de boodschap "Het is onbekend welk geluid dit generieke dier maakt".
  * Check de output van onbekendDier.printGegevens() en onbekendDier.maakGeluid(). Is dit wat je had verwacht?
***************************/

class Dier {
  naam;
  leeftijd;

  constructor(naam, leeftijd) {
    this.naam = naam;
    this.leeftijd = leeftijd;
  }

  printGegevens() {
    console.log(this.naam + " is een dier van " + this.leeftijd + " jaar.");
  }

  maakGeluid() {
    console.log("Het is onbekend welk geluid dit generieke dier maakt");
  }
}

// testcode voor Dier:
let onbekendDier = new Dier("Fluffy", 3);
onbekendDier.printGegevens();
onbekendDier.maakGeluid();

/*********** STAP 2 ********
  Maak nu de class Leeuw opnieuw, maar als subclass van Dier.
***************************/

class Leeuw extends Dier {
  vachtkleur;
  heeftManen;

  constructor(naam, leeftijd, vachtkleur, heeftManen) {
    super(naam, leeftijd);
    this.vachtkleur = vachtkleur;
    this.heeftManen = heeftManen;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.vachtkleur + ", Heeft manen: " + this.heeftManen);
  }

  maakGeluid() {
    console.log(this.naam + " brult: ROARRR!");
  }
}

// Test code voor Leeuw 2.0
let simba = new Leeuw("Simba", 2, "geel", false);
simba.printGegevens();
simba.maakGeluid();

/*********** STAP 3 ********
  Maak nu de class Paard opnieuw, maar als subclass van Dier.
***************************/

class Paard extends Dier {
  vachtkleur;
  snelheid;

  constructor(naam, leeftijd, vachtkleur, snelheid) {
    super(naam, leeftijd);
    this.vachtkleur = vachtkleur;
    this.snelheid = snelheid;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.vachtkleur + ", Snelheid: " + this.snelheid + " km/u");
  }

  maakGeluid() {
    console.log(this.naam + " hinnikt: Hiiiiih!");
  }
}

// Test code voor Paard 2.0
let maximus = new Paard("Maximus", 8, "wit", 50);
maximus.printGegevens();
maximus.maakGeluid();

/*********** STAP 4 ********
  Zelfverzonnen dier dat subclass is van Dier
***************************/

class Dolfijn extends Dier {
  kleur;
  kanTrucs;

  constructor(naam, leeftijd, kleur, kanTrucs) {
    super(naam, leeftijd);
    this.kleur = kleur;
    this.kanTrucs = kanTrucs;
  }

  printGegevens() {
    console.log(this.naam + " is een " + this.kleur + " dolfijn van " + this.leeftijd + " jaar en kan trucs: " + this.kanTrucs);
  }

  maakGeluid() {
    console.log(this.naam + " maakt geluid: klik klik fluit fluit");
  }

  spring() {
    console.log(this.naam + " springt hoog uit het water!");
  }
}

let flipper = new Dolfijn("Flipper", 5, "grijs", true);
flipper.printGegevens();
flipper.maakGeluid();
flipper.spring();

/*********** STAP 5 ********
  Class Eenhoorn (subclass van Paard)
***************************/

class Eenhoorn extends Paard {
  kleurHoorn;

  constructor(naam, leeftijd, vachtkleur, snelheid, kleurHoorn) {
    super(naam, leeftijd, vachtkleur, snelheid);
    this.kleurHoorn = kleurHoorn;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Kleur van de hoorn: " + this.kleurHoorn);
  }

  gebruikToverkracht() {
    console.log(this.naam + " gebruikt zijn toverkracht! Er verschijnt een regenboog in de lucht!");
  }
}

// Test code voor Eenhoorn
let juniper = new Eenhoorn("Juniper", 700, "stralend wit", 167, "roze");
juniper.printGegevens();
juniper.maakGeluid();
juniper.gebruikToverkracht();
