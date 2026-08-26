/* Verwerkingsopdracht 4 – Associatie (Association)
*/

/*********** BASISCODE ********/
class Dier {
  naam;
  #leeftijd;

  constructor(naam, leeftijd) {
    this.naam = naam;
    this.setLeeftijd(leeftijd);
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
    console.log(this.naam + " is " + this.getLeeftijd() + " jaar oud.");
  }

  maakGeluid() {
    console.log("Het is onbekend welk geluid dit generieke dier maakt");
  }
}

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
    } else {
      console.log("Snelheid mag niet negatief zijn");
    }
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.kleurVacht + ", Snelheid: " + this.getSnelheid() + " km/u");
  }

  maakGeluid() {
    console.log(this.naam + " hinnikt: Hiiiii!");
  }
}

/*********** STAP 1 ********
  Klasse Dierentuin
***************************/
class Dierentuin {
  naam;
  dieren;
  verzorgers;

  constructor(naam) {
    this.naam = naam;
    this.dieren = [];
    this.verzorgers = [];
  }

  voegDierToe(dier) {
    this.dieren.push(dier);
  }

  toonDieren() {
    for (let i = 0; i < this.dieren.length; i++) {
      this.dieren[i].printGegevens();
    }
  }

  voegVerzorgerToe(verzorger) {
    this.verzorgers.push(verzorger);
  }

  toonVerzorgers() {
    for (let i=0; i < this.verzorgers.length; i++) {
      this.verzorgers[i].printGegevens();
      console.log("Verzorger: " + this.verzorgers[i].naam) + " verzorgt deze dieren:";
      this.verzorgers[i].toonDieren();
    }
  }
}

/*********** STAP 3 ********
  Klasse Verzorger
***************************/
class Verzorger {
  naam;
  dieren;

  constructor(naam) {
    this.naam = naam;
    this.dieren = [];
  }

  voegDierToe(dier) {
    this.dieren.push(dier);
  }

  toonDieren() {
    for (let i=0; i < this.dieren.length; i++) {
      this.dieren[i].printGegevens();
    }
  }
}

/*********** STAP 2 en 4: Test Dierentuin en Verzorger ********/
let artis = new Dierentuin("Artis");
let simba = new Leeuw("Simba", 3, "geel", false);
let bullseye = new Paard("Bullseye", 7, "lichtbruin", 36);
let maximus = new Paard("Maximus", 3, "grijs", 68);

// Voeg dieren toe aan Dierentuin
artis.voegDierToe(simba);
artis.voegDierToe(bullseye);

// Toon dieren
console.log("Dieren in " + artis.naam + ":");
artis.toonDieren();

// Maak Verzorger
let jan = new Verzorger("Jan");
jan.voegDierToe(simba);
jan.voegDierToe(bullseye);

// Toon dieren van Verzorger
console.log("Dieren verzorgd door " + jan.naam + ":");
jan.toonDieren();

/*********** STAP 5 en 6: Associatie van verzorgers ********/
artis.voegVerzorgerToe(jan);

// Toon verzorgers en hun dieren
console.log("Verzorgers in " + artis.naam + " en hun dieren:");
artis.toonVerzorgers();
