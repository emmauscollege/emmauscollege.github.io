/* Verwerkingsopdracht 4 – Associatie (Association)

  Tot nu toe hebben we geleerd dat je klassen kunt maken (Dier, Paard, Leeuw, …)
  en dat je gedrag kunt hergebruiken via overerving.

  In deze opdracht leer je hoe objecten met elkaar kunnen samenwerken (associatie).

  Een object van de ene klasse kan een eigenschap zijn in een andere klasse.

  Voorbeeld: een Dierentuin heeft een naam en een lijst met dieren.
  De Dierentuin *heeft* Dieren. Dit noemen we een associatie.

  In code zie je dit als een array waarin andere objecten zitten.
  Het werkt als een normaal attribuut, maar omdat het objecten van andere klassen bevat,
  spreken we officieel van een associatie.
*/


/*********** BASISCODE ********
  Deze code heb je al eerder gezien of gemaakt in de vorige opdrachten.
  We gebruiken hem hier opnieuw zodat de Dierentuin ermee kan samenwerken.
***************************/

// Superclass Dier
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
    } else {
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

// Subclass Leeuw
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

// Subclass Paard
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
  * Maak een nieuwe klasse Dierentuin.
  * De Dierentuin heeft minstens deze velden:
      - naam (string)
      - dieren (array, begint als lege lijst [])
  * In de constructor geef je alleen de naam van de Dierentuin mee.
    De dieren-array zet je daar altijd op een lege array.
  * Maak een methode 'voegDierToe(dier)' die een dier aan de lijst toevoegt.
  * Maak een methode 'toonDieren()' die alle dieren in de Dierentuin netjes afdrukt.
    (Tip: gebruik een for-of loop over de array en roep per dier printGegevens() aan)
***************************/

class Dierentuin {
  naam;
  dieren;

  constructor(naam) {
    // TODO: stel de naam van de Dierentuin in
    // TODO: maak de array dieren leeg ([])
  }

  // TODO: voegDierToe(dier) methode schrijven

  // TODO: toonDieren() methode schrijven
}


/*********** STAP 2 ********
  Test je Dierentuin met wat dieren:
    * Maak een nieuwe Dierentuin "Artis"
    * Maak een Leeuw "Simba"
    * Maak een Paard "Bullseye"
    * Voeg deze dieren toe aan Artis
    * Toon alle dieren van Artis
***************************/

// TODO: schrijf testcode voor Artis, Simba en Bullseye


/*********** STAP 3 ********
  Nu gaan we een nieuwe klasse maken: Verzorger.
  * Een Verzorger heeft een naam en een lijst met dieren die hij/zij verzorgt.
  * In de constructor geef je alleen de naam mee.
  * De lijst van dieren begint altijd leeg.
  * Maak een methode 'voegDierToe(dier)' die een dier toevoegt aan de lijst van de verzorger.
  * Maak een methode 'toonDieren()' die alle dieren van de verzorger afdrukt (gebruik printGegevens()).

  Tip: Dit is opnieuw een associatie: een Verzorger *heeft* Dieren.
*/

class Verzorger {
  naam;
  dieren;

  constructor(naam) {
    // TODO: stel de naam van de verzorger in
    // TODO: maak de dierenlijst leeg
  }

  // TODO: voegDierToe(dier) methode

  // TODO: toonDieren() methode
}

/*********** STAP 4 ********
  Test je Verzorger:
    * Maak een Verzorger "Jan"
    * Laat Jan zorgen voor Simba en Bullseye
    * Laat Jan alle dieren tonen
*/



/*********** STAP 5 ********
  Breid de klasse Dierentuin uit:

    * Voeg een nieuw attribuut 'verzorgers' toe (array, begint leeg)
    * Schrijf een methode 'voegVerzorgerToe(verzorger)' die een Verzorger toevoegt
    * Schrijf een methode 'toonVerzorgers()' die alle verzorgers print
        - Voor elke verzorger print je de naam
        - Daarna print je de dieren die deze verzorger verzorgt (gebruik printGegevens())

  Tip: de structuur is hetzelfde als bij de dieren-array in de Dierentuin.
***************************/




/*********** STAP 6 ********
  Test je nieuwe associaties:

    1. Maak een Dierentuin "Artis"
    2. Maak een Leeuw "Simba" en een Paard "Bullseye"
    3. Voeg de dieren toe aan de Dierentuin
    4. Maak een Verzorger "Jan"
    5. Laat Jan zorgen voor Simba en Bullseye
    6. Voeg Jan toe aan de Dierentuin
    7. Roep 'toonVerzorgers()' aan en controleer of de dieren correct getoond worden
***************************/