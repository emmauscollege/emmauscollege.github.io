# Co-pilot kennis: de opdrachten
Hieronder staan de opdrachten die de leerlingen in hun oefenrepository hebben:

## opdracht-1.js
```js
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





```

## opdracht-2.js
``` js
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

  // TODO: pas constructor aan zodat naam en leeftijd aan het object meegegeven worden
  constructor() {

  }

  printGegevens() {
    // TODO: print naam en leeftijd
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
  Alle logica die bij naam en leeftijd hoort, zit alleen in de class Dier.
    * De class Leeuw noemt bovenaan alleen vachtkleur en heeftManen.
    * De constructor krijgt parameters voor naam, leeftijd, vachtkleur en heeftManen.
    * De constructor van Leeuw roept eerst de constructor van Dier aan met argumenten voor naam en leeftijd.
    * Zorg dat vachtkleur en heeftManen netjes in het object gezet worden.
    * Uncomment de regels die het objecten simba aanmaakt, laad de pagina in de browser en kijk in de console.
      Wat werkt wel / niet?
    * Neem in maakGeluid van Leeuw de code over die je in opdracht 1 bij maakGeluid() van Leeuw had.
    * Herlaad de pagina en test opnieuw. Klopt het geluid?
    * Zet in printGegevens() van Leeuw deze code: super.printGegevens();
    * Test opnieuw. Welke gegevens worden er geprint?
    * Voeg na de regel met 'super.printGegevens();' nog een console.log()-commando toe waarmee je vachtkleur en heeftManen print.
    * Test of het correct werkt. Toon je werk aan je docent.
***************************/

class Leeuw extends Dier {
  // TODO: noem hier vachtkleur en heeftManen

  constructor(naam, leeftijd, vachtkleur, heeftManen) {
    // eerst roepen we de constructor van de superclass (d.w.z. Dier) aan
    // die heeft twee parameters: naam en leeftijd
    super(naam, leeftijd);

    // TODO: zorg zelf dat de waarden voor vachtkleur en heeftManen goed ingesteld worden.


  }

  printGegevens() {
    // TODO: print de gegevens van alle vier de attributen, maar zorg dat naam en leeftijd door Dier geprint blijven worden.

  }

  maakGeluid() {
    // TODO: laat de Leeuw grommen zoals je dat in opdracht 1 al hebt gedaan.
    // je hoeft NIET maakGeluid() van de superclass Dier aan te roepen. Je 'overschrijft' die als het ware.

  }
}

// Test code voor Leeuw 2.0
// let simba = new Leeuw("Simba", 2, "geel", false);
// simba.printGegevens();
// simba.maakGeluid();


/*********** STAP 3 ********
  Maak nu de class Paard opnieuw, maar als subclass van Dier.

  * Voer dit uit op vergelijkbare wijze als bij de substappen van STAP 2.
    Zorg dat Paard de attributen en het gedrag heeft zoals je Paard in opdracht 1.
  
  * Toon indien mogelijk je werk aan je docent.
***************************/

class Paard extends Dier {
  // TODO: maak Paard een subclass van Dier, met vergelijkbare attributen en gedrag als Paard in opdracht 1
}


// Test code voor Paard 2.0
// let maximus = new Paard("Maximus", 8, "wit", 50);
// maximus.printGegevens();
// maximus.maakGeluid();



/*********** STAP 4 ********
  * Maak nu opnieuw een zelfverzonnen dier dat een subclass van Dier is
  * Geef deze ook een eigen, uniek attribuut
  * Kun je ook een methode verzinnen die alleen voor dit zelfbedachte dier geldt?
    (zoals vlieg(), sis(), graafHol(), etc.)
***************************/

// TODO: vervang de naam "JouwDier" door iets beters en ga helemaal los
class JouwDier extends Dier {
  

}



/*********** STAP 5 ********
  BELANGRIJK: STAP 3 MOET CORRECT WERKEN VOORDAT JE DEZE STAP KUNT DOEN!

  We gaan nu een class voor een eenhoorn maken. De meeste biologen zijn het erover eens dat een Eenhoorn
  een speciaal soort paard is. In ons geval heeft een eenhoorn dezelfde eigenschappen (attributen) als een paard
  en maakt deze ook hetzelfde geluid als een paard.
  Een eenhoorn heeft echter ook een extra eigenschap: kleurHoorn (die moet je ook meegeven aan de constructor)
  en beschikt over speciale krachten: gebruikToverkracht(). Bedenk zelf wat er bij deze methode in de console wordt geprint.

  * Probeer de class Eenhoorn te maken. Denk na: wordt Eenhoorn een subclass van Paard of van Dier?
  * Test je code door het object juniper uit de comments te halen en te kijken wat er in de console komt
  * Verbeter waar nodig
  * Laat het indien mogelijk zien aan je docent

  * Hoeveel code heb je nu moeten schrijven om een compleet nieuw soort Paard te maken?
***************************/

// TODO: beschrijf hieronder de class  Eenhoorn




// TODO: haal de // hieronder weg om je class Eenhoorn te kunnen testen
// let juniper = new Eenhoorn("Juniper", 700, "stralend wit", 167, "roze");
// juniper.printGegevens();
// juniper.maakGeluid(); // zou hetzelfde als een paard moeten zijn
// juniper.gebruikToverkracht(); // wat zou gaan hier gebeuren?


/*********** Extra: STAP 6 ********
  Onze klassenhiërarchie gaat nu van Dier gelijk naar Leeuw en Paard.
  * Voeg een extra laag Zoogdier toe, die 'verantwoordelijk is' voor de vachtkleur
    Omdat de browser JavaScript van boven naar beneden leest, moet de superclass altijd eerder gedefinieerd zijn dan de subclass.
    Tip: zet de definitie van Zoogdier direct NA Dier, zodat alles voor browser in de goede volgorde staat.
  * Zorg dat Leeuw, Paard een subclass worden van Zoogdier.
  * Check of alles nog steeds werkt.
  * Is juniper ook automatisch een zoogdier geworden? Waarom wel / niet?
  * Is jouw zelfverzonnen dier een Zoogdier? Maak ook deze een subclass van Zoogdier i.p.v. Dier.
***************************/

// TODO: omdat de browser de classes in dit document van boven naar beneden leest, moet je de definitie
//       van Zoogdier direct na de definitie van Dier plaatsen.
//       Anders weet de browser bij Leeuw, Paard, etc. nog niet wat een Zoogdier is. 




/*********** Extra: STAP 7 ********
  Er zijn meer categorieën dieren dan zoogdieren, zoals insecten en reptielen.
  * Voeg een class Insect toe die een subclass is van Dier en dus als het ware 'naast' Zoogdier staat.
    Tip zet de definitie van Insect direct NA Zoogdier.
  * Voeg een nieuwe class toe die een subclass is van Insect, zoals Krekel, Termiet, Mug of wat jij leukt vindt.
    Probeer in deze class minimaal nieuwe één attribuut en één nieuwe methode toe te voegen die uniek is voor dit insect 
***************************/
  
// TODO: omdat de browser de classes in dit document van boven naar beneden leest, kun je de definitie
//       van Insect het beste direct voor of na de definitie van Zoogdier plaatsen.


```

## opdracht-3.js
```
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
```

## opdracht-4.js
```
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
```

## opdracht-5.js
```
/* Verwerkingsopdracht 5 – Bibliotheek (EINDOPDRACHT)

   Wat moet je tonen (zoals in vorige opdrachten):
   - Classes en objecten
   - Overerving
   - Encapsulatie (private velden met #, getters/setters)
   - Associaties (arrays met andere objecten)

   SCENARIO
   --------
   De gemeente wil haar bibliotheeksysteem moderniseren. In plaats van papieren fiches moet voortaan alles digitaal worden beheerd. 
   Jij krijgt de opdracht om een eenvoudige prototypeversie te bouwen waarmee de bibliotheek haar collectie en leden kan beheren.

   Een bibliotheek bezit verschillende producten zoals boeken en dvd's. 
   Elk product dat de bib binnenkomt krijgt een uniek ID toegewezen wat nooit meer veranderd mag worden.
   Beide producten hebben ook een titel en publicatiejaar (altijd na 1960). 
   Boeken hebben ook een auteur en een aantal pagina's. Aantal pagina's is altijd groter dan 0.
   dvd's hebben een regisseur en een duurtijd in minuten. Duur in minuten is altijd groter dan 0.

   De bibliotheek heeft ook leden. Elk lid heeft een naam en krijgt bij registratie standaard een lidnummer dat niet meer gewijzigd mag worden.
   Leden kunnen maximaal 5 verschillende producten lenen van de bib. Ze kunnen producten weer inleveren om opnieuw dingen te mogen lenen.
   Leden kunnen ook een boete krijgen als ze hun producten te laat terugbrengen. Deze boete is altijd positief. De boete kan ook betaald worden waardoor de boete van het lid terug op 0 komt.

   Het hele systeem moet zo werken dat andere gemeenten dit ook kunnen gebruiken. Dit door hun eigen bibliotheek met producten en leden aan te maken.
   Een bibliotheek heeft dus een naam, collectie en leden. 
   Na aanmaken van een bibliotheek moeten er nog producten en leden kunnen worden toegevoegd.
   Op elk moment moeten ook de producten en leden van een specifieke bib kunnen worden geprint.


   DEEL 1 – UML (papier/whiteboard/diagramtool, NIET in code)
   -----------------------------------------------------------
   Teken een UML-diagram met:
    * Alle klassen die nodig zijn om dit project te maken
      * Per klasse de naam van de klasse
      * Per klasse alle atributen die de klasse heeft 
        * Zet de naam van het attribuut : het type (number, string, boolean, date, object, ...)
        * Voeg een +/- vooraan toe om aan te geven of het private of public is
      * Per klasse alle methoden die de klasse heeeft
        * Noteer de naam, en als ze  aanwezig zijn het parameter type en/of return type
    * Teken alle oererving relaties met juiste pijl(en) (met lege driehoek als punt)
    * Noteer naast de klasse naam  "abstract" voor alle abstracte klassen
    * Teken voor alle associatoes de pijlen met de relaties (1-1, 1-5, 1-*, *-*, ...)

   DEEL 2 – Implementatie
   -----------------------------------
   Neem de UML diagram uit de vorige stap en zet deze om naar code. Gebruik de vorige opdrachten als je vastloopt met iets. 
   Begin eerst met de superklasse te maken, daarna de subklassen, en daarna de klassen met Associatie (zodat de klassen die deze klasse nodig heeft al gemaakt zijn).
   Werk per kasse met het opschrijven van de klasse en waarvan het extend, dan de atributen, de constructor, en daarna andere methoden.


*/




```

# de modelantwoorden

## opdracht-1.js modelantwoord
```
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

```

## opdracht-2.js modelantwoord
```
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

/*********** Extra laag voor STAP 6 ********
  De class Zoogdier wordt later gebruikt door Leeuw en Paard
***************************/

class Zoogdier extends Dier {
  vachtkleur;

  constructor(naam, leeftijd, vachtkleur) {
    super(naam, leeftijd);
    this.vachtkleur = vachtkleur;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Vachtkleur: " + this.vachtkleur);
  }
}

/*********** Extra voor STAP 7 ********
  Nieuwe basisclass Insect (naast Zoogdier)
***************************/

class Insect extends Dier {
  aantalPoten;

  constructor(naam, leeftijd, aantalPoten) {
    super(naam, leeftijd);
    this.aantalPoten = aantalPoten;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Aantal poten: " + this.aantalPoten);
  }
}

/*********** STAP 2 ********
  Maak nu de class Leeuw opnieuw, maar als subclass van Dier.
***************************/

class Leeuw extends Zoogdier {
  heeftManen;

  constructor(naam, leeftijd, vachtkleur, heeftManen) {
    super(naam, leeftijd, vachtkleur);
    this.heeftManen = heeftManen;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Heeft manen: " + this.heeftManen);
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

class Paard extends Zoogdier {
  snelheid;

  constructor(naam, leeftijd, vachtkleur, snelheid) {
    super(naam, leeftijd, vachtkleur);
    this.snelheid = snelheid;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Snelheid: " + this.snelheid + " km/u");
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

/*********** STAP 7 ********
  Subclass van Insect
***************************/

class Krekel extends Insect {
  geluidNiveau;

  constructor(naam, leeftijd, aantalPoten, geluidNiveau) {
    super(naam, leeftijd, aantalPoten);
    this.geluidNiveau = geluidNiveau;
  }

  printGegevens() {
    super.printGegevens();
    console.log("Geluidniveau: " + this.geluidNiveau + " decibel");
  }

  tjirp() {
    console.log(this.naam + " tjirpt luid in de nacht!");
  }
}

let japie = new Krekel("Japie", 1, 6, 80);
japie.printGegevens();
japie.tjirp();

```

## opdracht-3.js modelantwoord
```
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
```

## opdracht-4.js modelantwoord
```
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

```

## opdracht-5.js modelantwoord
```
/* DOCENTENOPLOSSING – Bibliotheek */

/* =========================
   Superklasse: Product
   - Bevat gedeelde attributen voor alle producten (Boek/Dvd).
   - publicatieJaar via setter (moet > 1960).
   - productId is read-only (alleen getter).
========================= */
class Product {
  titel;            // publiek, mag rechtstreeks gelezen
  #publicatieJaar;  // privé, via setter bewaken dat jaar > 1960
  #productId;       // privé + read-only (alleen getter)

  constructor(titel, publicatieJaar, productId) {
    this.titel = titel;
    this.#productId = productId;      // read-only: geen setter voorzien
    this.setPublicatieJaar(publicatieJaar);
  }

  getProductId() {
    return this.#productId;
  }

  getPublicatieJaar() {
    return this.#publicatieJaar;
  }

  // Constraint: jaar moet groter zijn dan 1960
  setPublicatieJaar(jaar) {
    if (jaar > 1960) {
      this.#publicatieJaar = jaar;
    }
  }
}

/* =========================
   Subklasse: Boek
   - Erft titel/publicatieJaar/productId van Product.
   - Extra velden: auteur (publiek), paginas (privé met setter > 0).
   - super(...) roept de constructor van Product aan.
========================= */
class Boek extends Product {
  auteur;      // publiek
  #paginas;    // privé met setter

  constructor(titel, publicatieJaar, productId, auteur, paginas) {
    super(titel, publicatieJaar, productId); // altijd eerst super aanroepen
    this.auteur = auteur;
    this.setPaginas(paginas);                // constraint via setter
  }

  getPaginas() {
    return this.#paginas;
  }

  // Constraint: paginas > 0
  setPaginas(n) {
    if (n > 0) {
      this.#paginas = n;
    }
  }
}

/* =========================
   Subklasse: Dvd
   - Erft van Product.
   - Extra velden: regisseur (publiek), duurMinuten (privé met setter > 0).
========================= */
class Dvd extends Product {
  regisseur;      // publiek
  #duurMinuten;   // privé met setter

  constructor(titel, publicatieJaar, productId, regisseur, duurMinuten) {
    super(titel, publicatieJaar, productId);
    this.regisseur = regisseur;
    this.setDuurMinuten(duurMinuten);       // constraint via setter
  }

  getDuurMinuten() {
    return this.#duurMinuten;
  }

  // Constraint: duur > 0
  setDuurMinuten(minuten) {
    if (minuten > 0) {
      this.#duurMinuten = minuten;
    }
  }
}

/* =========================
   Lid
   - lidnummer is read-only (alleen getter).
   - boeteSaldo privé, wijzigen via krijgBoete()/betaalBoete().
   - geleendCount (teller) houdt bij hoeveel items het lid nu heeft (max 5).
   - Lenen/terugbrengen is bewust eenvoudig: enkel op basis van de teller.
========================= */
class Lid {
  naam;            // publiek
  #lidnummer;      // privé + read-only
  #boeteSaldo;     // privé
  #geleendCount;   // privé: aantal gelijktijdige leningen

  constructor(naam, lidnummer) {
    this.naam = naam;
    this.#lidnummer = lidnummer;  // read-only
    this.#boeteSaldo = 0;
    this.#geleendCount = 0;
  }

  getLidnummer() {
    return this.#lidnummer;
  }

  getBoeteSaldo() {
    return this.#boeteSaldo;
  }

  // Boete verhogen met een positief bedrag
  krijgBoete(bedrag) {
    if (bedrag > 0) {
      this.#boeteSaldo += bedrag;
      console.log("Nieuw boete saldo: " + this.#boeteSaldo);
    }
  }

  // Hele boete in één keer betalen (naar 0)
  betaalBoete() {
    this.#boeteSaldo = 0;
    console.log(this.naam + " heeft boete betaald");
  }

  // Lenen: enkel hoeveelheid tellen, geen specifieke items bijhouden
  leen(product) {
    if (this.#geleendCount >= 5) {
      console.log("Heeft al maximale aantal leningen");
    }
    else {
      this.#geleendCount++;
      console.log("Nieuw product geleend");
    }
  }

  // Terugbrengen: gewoon 1 van de teller aftrekken als er iets geleend is
  brengTerug(product) {
    if (this.#geleendCount > 0) {
      this.#geleendCount--;
      console.log("Terug gebracht");
    }
    else {
      console.log("Had niets geleend");
    }
  }
}

/* =========================
   Bibliotheek
   - Houdt lijsten bij van producten en leden.
   - Simpele overzichten met for-lussen in standaardvorm.
========================= */
class Bibliotheek {
  naam;
  collectie;  // array van Product
  leden;      // array van Lid

  constructor(naam) {
    this.naam = naam;
    this.collectie = [];
    this.leden = [];
  }

  voegProductToe(product) {
    this.collectie.push(product);
    console.log("voegProductToe: " + this.naam);
  }

  registreerLid(lid) {
    this.leden.push(lid);
    console.log("registreerLid: " + this.naam);
  }

  toonCollectie() {
    console.log("toonCollectie bib " + this.naam);
    for (let i = 0; i < this.collectie.length; i++) {
      console.log(this.collectie[i].titel);
    }
  }

  toonLeden() {
    console.log("toonLeden bib " + this.naam);
    for (let i = 0; i < this.leden.length; i++) {
      console.log(this.leden[i].naam);
    }
  }
}
```
