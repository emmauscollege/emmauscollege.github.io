/* Verwerkingsopdracht 3 - Inkapseling (Encapsulation)
   
   Leer hoe je gegevens in een object kunt afschermen met private velden (#)
   en hoe getters en setters ervoor zorgen dat de data gecontroleerd wordt aangepast.
*/


/*********** LEES DEZE UITLEG EERST! ********
  In deze opdracht houden we onze klassenhiërarchie wat eenvoudiger dan bij opdracht 2:
  We hebben een (generieke) superklasse Dier en de klassen Paard en Leeuw.

  In de class Dier is leeftijd een belangrijk attribuut.
  We willen voorkomen dat iemand een negatieve leeftijd kan instellen. Bijvoorbeeld zo:

        let mijnDiertje = new Dier("Jopie", -4);
  
  of door de leeftijd naderhand te veranderen, zoals:

        let mijnDiertje = new Dier("Jopie", 5);
        mijnDiertje.leeftijd = -3;

  Dat doen we door leeftijd een private attribuut te maken. Dat zorgt ervoor dat buiten de
  code van Dier de leeftijd NIET rechtstreeks aangepast kan worden zoals:

        mijnDiertje.leeftijd = 9;

  en ook niet dat je de leeftijd buiten de code van Dier rechtstreeks kan uitlezen, zoals:

        console.log(mijnDiertje.leeftijd);

  maar dat je dat via een speciale methode moet doen zoals:

        mijnDiertje.setLeeftijd(9);              // stelt de leeftijd van het object 'mijnDiertje' in op 9

  of:

        console.log(mijnDiertje.getLeeftijd());  // vraagt de leeftijd van het object 'mijnDiertje' op
***************************/




/*********** STAP 1 ********
  We gaan in een aantal stappen het attribuut leeftijd private maken en getters en setters maken en aanroepen.
  * Check de output in de browser. Als het goed is, is Fluffie 3 jaar en Thor -8 jaar.
  * Maak eerst van 'leeftijd' een privaat attribuut.
    - Noem het attribuut boven de constructor daarvoor #leeftijd (dus met een # ervoor).
    - In de constructor en in printGegevens() zet je ook een # voor leeftijd. Dit is de nieuwe naam van het attribuut.
  * Test je code. Als het goed is, is Fluffie 3 jaar en Thor -8 jaar oud. 
    Het klopt dat Thor nu een negatieve leeftijd heeft.
    Dat is expres, want we moeten nog de setter aanpassen om dit tegen te houden.
  * Test of #leeftijd echt private is: verander de test van Fluffy in:

      let fluffy = new Dier("Fluffy", 3);
      fluffy.printGegevens();
      fluffy.naam = "Jopie";
      fluffy.printGegevens();
      fluffy.#leeftijd = 4;
      fluffy.printGegevens();

    Als het goed is, wordt de naam gewoon veranderd, maar krijg je bij veranderen van de leeftijd een foutmelding.
    Haal de laatste twee regels van de fluffy-tests weg.
  * We gaan nu een methode schrijven die de leeftijd teruggeeft. Deze methode staat in de class Dier.
    Schrijf onder de constructor een methode genaamd 'getLeeftijd()'. Deze methode noemen we de getter
    van het attribuut #leeftijd.
    Geef de getter deze inhoud:

        return this.#leeftijd;

    Binnen de class-beschrijving zelf hebben we toegang tot het attribuut #leeftijd, dus dit gaat gewoon werken.
  * Test of de getter werkt door een regel aan de testcode van fluffy toe te voegen, zodat het wordt:

      let fluffy = new Dier("Fluffy", 3);
      fluffy.printGegevens();
      console.log(fluffy.getLeeftijd());       // deze regel is nieuw. Output zou 3 moeten zijn

  * In de methode printGegevens() lezen we de leeftijd nog uit met 'this.#leeftijd'
    Bij een private attribuut kunnen we echter beter alleen in de getter het attribuut rechtstreeks uitlezen.
    Alle overige plekken gebruiken de getter.

    Gebruik daarom in 'printGegevens()' de code 'this.getLeeftijd()' in plaats van 'this.#leeftijd'.
  * Schrijf onder de getter een setter-methode genaamd 'setLeeftijd(nieuweLeeftijd)'.
    Deze setter wil dus altijd een nieuwe leeftijd meekrijgen. Dat zie je aan de parameter 'nieuweLeeftijd'.  
    We gaan deze leeftijd voor nu eerst gewoon in het attribuut #leeftijd zetten zonder te controleren op negatieve getallen.
    Maak de inhoud van de setter:

        this.#leeftijd = nieuweLeeftijd;
  
  * Test of de setter werkt door de leeftijd aan te passen in de testcode van fluffy:

      let fluffy = new Dier("Fluffy", 3);
      fluffy.printGegevens();
      fluffy.setLeeftijd(6)                 // Fluffy is ineens 6 jaar oud
      console.log(fluffy.getLeeftijd());    // output zou 6 moeten zijn.
  
  * Probeer de nieuwe leeftijd van Fluffy ook eens -6 te maken. Dit kan nog steeds, maar we zijn bijna zover
    dat we dit kunnen voorkomen.
  * De setter stopt nu gewoon de meegegeven leeftijd in het attribuut #leeftijd. Dat gaan we nu veranderen.
    Verander de code zo, dat 'this.#leeftijd = nieuweLeeftijd;' alleen wordt uitgevoerd als
    nieuweLeeftijd groter of gelijk (>=)  is aan nul. In het andere geval print je "Leeftijd mag niet negatief zijn".
    In dat geval veranderen we #leeftijd niet.
    Tip: gebruik een if ... else-constructie
  * Doe opnieuw de vorige test, waarbij je de leeftijd van Fluffy -6 probeerde te maken. Als het goed is, krijg je
    nu de foutmelding "Leeftijd mag niet negatief zijn" en is de leeftijd nog steeds 3.
  * Er klopt nog één ding niet: Thor is nog steeds -8 jaar oud. Er wordt geen foutmelding gegeven.
    Dat komt omdat in de constructor #leeftijd rechtstreeks wordt veranderd.
    Vervang daarom deze regel in de constructor:
        this.#leeftijd = leeftijd;
    en maak gebruik van de zojuist door jou gemaakte constructor.
  * Test of dit werkt en er een foutmelding komt als Thor wordt aangemaakt.
***************************/


class Dier {
  naam;
  leeftijd; // TODO: moet worden aangepast. Zie STAP 1

  constructor(naam, leeftijd) {
    this.naam = naam;
    this.leeftijd = leeftijd;   // TODO: moet worden aangepast. Zie STAP 1
  }

  // TODO: maak een getter voor leeftijd

  // TODO: schrijf een setter voor leeftijd

  printGegevens() {
    console.log(this.naam + " is " + this.leeftijd + " jaar oud.");   // TODO: moet worden aangepast. Zie STAP 1
  }

  maakGeluid() {
    console.log("Het is onbekend welk geluid dit generieke dier maakt");
  }
}

// testcode voor (generiek) Dier: Fluffy
let fluffy = new Dier("Fluffy", 3);
fluffy.printGegevens();

// testcode voor (generiek) Dier: Thor
let thor = new Dier("Thor", -8);
thor.printGegevens();


/*********** STAP 2 ********
  * Maak onder de klassendefinitie van Leeuw nu zelf een test-object Sarabi (de moeder van Simba)
  * Controleer of de leeftijd van een Leeuw ook 'beschermd' is tegen negatieve leeftijden.
    Omdat Leeuw een subclass van Dier is, moet dit automatisch ook voor Leeuw gelden.
***************************/

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

// TODO: Maak hier je eigen Leeuw-testobject


/*********** STAP 3 ********
  Zorg ervoor dat een Paard-object geen negatieve snelheid kan hebben.
    * De testcode is al gegeven. Uncomment deze nu eerst, zie hiervoor de TODO's hieronder
    * Pas op Paard toe wat je in STAP 1 bij Dier hebt geleerd.
***************************/

// Subclass Paard
class Paard extends Dier {
  kleurVacht;
  snelheid;

  constructor(naam, leeftijd, kleurVacht, snelheid) {
    super(naam, leeftijd);
    this.kleurVacht = kleurVacht;
    this.snelheid = snelheid;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.kleurVacht + ", Snelheid: " + this.snelheid + " km/u");
  }

  maakGeluid() {
    console.log(this.naam + " hinnikt: Hiiiii!");
  }
}

// testcode voor Paard
// nieuw paard "Bullseye"

// TODO: haal de bij de volgende 5 regels de // weg 
// let bullseye = new Paard("Bullseye", 10, "lichtbruin", 36);
// bullseye.printGegevens();
// bullseye.setLeeftijd(12);
// bullseye.setSnelheid(-13);  // dit moet een foutmelding geven.
// bullseye.printGegevens();   // de snelheid moet nog steeds 36 zijn.

// nieuw paard "Spirit"
// Als je het goed hebt gedaan, zie je een foutmelding bij de constructor
// en wordt snelheid niet aangepast (blijft nu 'undefined').

// TODO: haal bij de volgende twee regels de // weg
// let spirit = new Paard("Spirit", 6, "blond", -68);
// spirit.printGegevens();