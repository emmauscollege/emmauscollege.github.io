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

