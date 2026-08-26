/* Verwerkingsopdracht 3 - Inkapseling (Encapsulation)
   
   Leer hoe je gegevens in een object kunt afschermen met private velden (#)
   en hoe getters en setters ervoor zorgen dat de data gecontroleerd wordt aangepast.
*/

/*********** STAP 1 ********
  Private attribuut leeftijd in Dier
***************************/

class Dier {
  naam;
  #leeftijd;

  constructor(naam, leeftijd) {
    this.naam = naam;
    this.setLeeftijd(leeftijd); // gebruik setter in constructor
  }

  getLeeftijd() {
    return this.#leeftijd;
  }

  setLeeftijd(nieuweLeeftijd) {
    if (nieuweLeeftijd >= 0) {
      this.#leeftijd = nieuweLeeftijd;
    }
    else {
      console.log("Leeftijd mag niet negatief zijn");
    }
  }

  printGegevens() {
    console.log(this.naam + " is " + this.#leeftijd() + " jaar oud.");
  }

  maakGeluid() {
    console.log("Het is onbekend welk geluid dit generieke dier maakt");
  }
}

// testcode voor (generiek) Dier: Fluffy
let fluffy = new Dier("Fluffy", 3);
fluffy.printGegevens();
console.log(fluffy.getLeeftijd());
fluffy.setLeeftijd(6);
console.log(fluffy.getLeeftijd());
fluffy.setLeeftijd(-6); // foutmelding
console.log(fluffy.getLeeftijd());

// testcode voor (generiek) Dier: Thor
let thor = new Dier("Thor", -8); // foutmelding, leeftijd niet aangepast
thor.printGegevens();

/*********** STAP 2 ********
  Subclass Leeuw met bescherming leeftijd
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

// test Leeuw object
let sarabi = new Leeuw("Sarabi", 9, "donkerbruin", true);
sarabi.printGegevens();
sarabi.setLeeftijd(-3); // foutmelding
sarabi.printGegevens();

/*********** STAP 3 ********
  Subclass Paard met bescherming snelheid en leeftijd
***************************/

class Paard extends Dier {
  kleurVacht;
  #snelheid;

  constructor(naam, leeftijd, kleurVacht, snelheid) {
    super(naam, leeftijd);
    this.kleurVacht = kleurVacht;
    this.setSnelheid(snelheid);
  }

  getSnelheid() {
    return this.#snelheid;
  }

  setSnelheid(nieuweSnelheid) {
    if (nieuweSnelheid >= 0) {
      this.#snelheid = nieuweSnelheid;
    }
    else {
      console.log("Snelheid mag niet negatief zijn");
    }
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.kleurVacht + ", Snelheid: " + this.#snelheid() + " km/u");
  }

  maakGeluid() {
    console.log(this.naam + " hinnikt: Hiiiii!");
  }
}

// testcode voor Paard
let bullseye = new Paard("Bullseye", 10, "lichtbruin", 36);
bullseye.printGegevens();
bullseye.setLeeftijd(12);
bullseye.setSnelheid(-13); // foutmelding
bullseye.printGegevens(); // snelheid blijft 36

let spirit = new Paard("Spirit", 6, "blond", -68); // foutmelding snelheid
spirit.printGegevens();