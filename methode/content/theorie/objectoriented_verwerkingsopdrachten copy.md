+++
title = "T8 Verwerkingsopdrachten"
weight = 8.2
hidden = true
+++

### Inleiding
Om te leren hoe je objectgeoriënteerd programmeert, gaan we stap voor stap een objecgeoriënteerd programma maken. We maken hiervoor een **epidemiesimulator** die visueel maakt hoe organismen elkaar kunnen besmetten met een ziekteverwekker. Tussen de opdrachten door vind je theorie over objectgeoriënteerd programmeren.


### Opdracht 0 - Klaar voor de start

#### Start een eigen repo en begrijp de code:
- Ga naar [GitHub classroom](https://classroom.github.com) en schrijf je in voor de opdracht 'Epidemiesimulator'
- Bekijk in je browser wat de simulator nu al doet. De simulator doet nog niet veel: het laat een vierkantje bewegen en stuiteren tegen de randen van het scherm.
- Bekijk de code van de simulator. In de code zie je _globale variabelen_ die de positie en de horizontale en verticale snelheid bevatten. Ook zie je de constante `BREEDTE`, die de waarde van de grootte van het vierkantje bevat.

``` js
var x;
var y;
var speedX;
var speedY;

const BREEDTE = 20;
```

In `setup` krijgen deze variabelen hun initiële waarde. De positie is in het midden van het canvas. (Het midden van het vierkant is overigens niet exact in het midden. De waarden `x` en `y` worden gebruikt voor de linkerbovenhoek...) De horizontale en verticale snelheid krijgen bij de start een random waarde tussen -5 en 5.

```js
x = width / 2;
y = heigth / 2;
speedX = random(-5, 5);
speedY = random(-5, 5);
```

In `draw` wordt netjes een wit vierkantje getekend met behulp van de waarden van `x`, `y` en `BREEDTE`. Herinner je je nog dat de functie [`rect`](https://p5js.org/reference/#/p5/rect) een vierkant tekent met de linkerbovenhoek op de meegeven positie?

```js
rect(x, y, BREEDTE, BREEDTE);
```



---

**Lees nu hoofdstuk 1 van de [theorie](../objectoriented_theorie/#hoofdstuk-1)**

---
<br/><br/><br/>



### Opdracht 1 – 25 random mensen maken. En wat doen die katten daar? 😼
In de theorie van hoofdstuk 1 is een heel groot deel van de klasse `Mens` gegeven. Je maakt deze klasse verder af en gebruikt deze om 25 mensobjecten te maken die zich in onze simulatie bewegen:

#### Programmeren

##### a) 25 random mensen
- De klasse `Mens` bevat alle code die nodig is om de positie van een mensobject te updaten. Verwijder deze code uit `draw` en roep in plaats daarvan `update` aan op het betreffende object.
{{% expand "Hint 1" %}}
  De code die `speedX` bij `x` optelt en `speedY` bij `y` hebben we verhuisd naar de class `Mens`. Die hebben we in `draw` niet meer nodig.
{{% /expand %}}
{{% expand "Hint 2" %}}
  De code staat in de for-loop:
  ```js
    mensen[i].x = mensen[i].x + mensen[i].speedX;
    mensen[i].y = mensen[i].y + mensen[i].speedY;
  ```
  Deze updatecode zit nu in de class `Mens` en mag dus weg.
{{% /expand %}}
- De code die controleert of een mens tegen de rand van de simulatiewereld botst, moet ook verhuizen naar de klasse `Mens`. Breidt de methode `update` uit. Gebruik hiervoor de betreffende code die je in `draw` vindt en pas deze aan. Je kunt nu op de oude plek van de code de methode `update()` aanroepen.
{{% expand "Hint 3" %}}
  Bij de updatecode hoort niet alleen het geven van een nieuwe positie, maar ook het stuiteren. Haal deze code uit de for-loop en plaats deze in de methode update van de class `Mens`. Je moet het hiervoor nog wel even omvormen naar `this` enz.
{{% /expand %}}

- De code die een mens tekent, is ook typisch iets wat bij de klasse Mens hoort. Maak een nieuwe methode `show` en teken hierin het vierkantje. Haal ook de constante `BREEDTE` weg. Maak hiervan een attribuut (gebruik dan `breedte`) en zet de waarde hiervan in de constructor op 50. Je hoeft hiervoor dus niet een argument aan de constructor toe te voegen. Verwijder de code die het vierkant tekent uit `draw` en roep in plaats daarvan `show` op de objecten aan.

We gaan nu de array `mensen` vullen met 25 random mens-objecten. Verwijder de code die je bij opdracht 2 in `setup` hebt gezet om handmatig 5 mens-objecten te maken. Schrijf in plaats daarvan deze code:

```js
// maak 25 random mensen
for (var teller = 0; teller < 25; teller++) {
  // we moeten ze niet te dicht bij de rand tekenen
  // om geen problemen met stuiteren te krijgen
  var ruimteTotRand = 50;
  
  // creëer random positie en snelheid
  var randomX = random(ruimteTotRand, width - ruimteTotRand);
  var randomY = random(ruimteTotRand, height - ruimteTotRand);
  var randomSpeedX = random(-5, 5);
  var randomSpeedY = random(-5, 5);

  // maak nieuw mensobject
  var nieuwMens = new Mens(randomX, randomY, randomSpeedX, randomSpeedY);
  
  // voeg mensobject toe aan array
  mensen.push(nieuwMens);
}
```

Deze code maakt 25 keer een nieuw mens-object met [random](https://p5js.org/reference/#/p5/random) waarden aan en voegt deze toe aan de array `mensen`. Zorg ervoor dat je deze regels begrijpt. Uitleg over push vind je onder andere op de shite van [w3schools](https://www.w3schools.com/jsref/jsref_push.asp)
Bekijk het resultaat. Als het goed is, heb je nu 25 vierkantjes die door elkaar heen vliegen en tegen de randen stuiteren.

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-3a/script.js)

##### b) besmettingen
Het wordt tijd dat deze mensen elkaar kunnen besmetten. Het idee is dat mensen elkaar besmetten als ze elkaar in hun beweging overlappen.
- Geef de klasse `Mens` een nieuw attribuut `isBesmet`. Dit attribuut initialiseer je in de constructor op `false`. Je hoeft hiervoor dus geen argument aan je constructor toe te voegen.
{{% expand "Hint" %}}
  Bovenin de class `Mens`, onder `speedY`, schrijf je `isBesmet;` In de constructor typ je onder de regel `this.speedY = speedY`: `this.isBesmet = false;`

  Daar heb je dus geen extra informatie voor nodig die meegegeven zou moeten worden aan de constructor. Het is gewoon altijd `false` als een mens-object wordt aangemaakt.
{{% /expand %}}

- Voeg in `setup`, na de `for`-loop die de 25 mensen aanmaakt, deze regel code toe:

  ```js
  mensen[0].isBesmet = true;
  ```

  Hierdoor wordt alvast één mens besmet.
- Verander de code in de methode `show` zo, dat een mens als rood vierkant wordt getekend als deze besmet is. Als het goed is, wordt één vierkant nu rood getekend.
{{% expand "Hint" %}}
  Als `isBesmet` waar is, moet er iets anders getekend worden dan wanneer `isBesmet` onwaar is. Gebruik hiervoor een `if`-statement.
{{% /expand %}}
- Vervolgens maken we een methode die kan controleren of een ander mens-object overlap heeft met het object dat de methode uitvoert. Ga voor jezelf na of je de volgende zin begrijpt: *Omdat een mens getekend wordt als een vierkant, overlappen twee mensen elkaar als één van de hoeken van het ene vierkant zich binnen de randen van het andere vierkant bevindt.*
Onderstaande code bevat het begin van de methode `isOverlappend`. Voeg deze code toe aan de klasse `Mens`.
```js
isOverlappend(andereMens) {
  // zet teruggeefwaarde standaard op false
  var overlappend = false;

  // zet teruggeefwaarde op true als er een overlap is
  if ( (this.x + this.breedte >= andereMens.x &&
        this.x <= andereMens.x + andereMens.breedte &&
        this.y + this.breedte >= andereMens.y &&
        this.y <= andereMens.y + andereMens.breedte)
      ) {

    overlappend = true;
  }

  // stuur de teruggeefwaarde terug
  return overlappend;
}
```
{{% expand "Uitleg" %}}
  Pak een vel papier en teken twee vierkantjes: één voor 'this', één voor 'andereMens'. Schrijf bij de randen van de vierkanten welke waarden daarbij horen. De bovenrand van 'andereMens' hoort bijvoorbeeld bij `andereMens.y`.

  Als je dit voor alle 8 zijden hebt gedaan, teken de vierkantjes dan eens zo, dat het vierkant van 'this' met de linkerbovenhoek *in* het vierkant van 'andereMens' zit. Probeer nu te kijken of je de code in het `if`-statement hierboven kunt begrijpen.
{{% /expand %}}

- Nu moeten we in `draw` code toevoegen die alle mogelijke paren van mensobjecten controleert of ze overlappen. Indien ze overlappen, controleren we of een van die objecten besmet is. Als dat zo is wordt het andere ook besmet (als het dat nog niet is).
Een simpele manier om dit te controleren is in een `for`-loop ieder object te controleren met ieder ander object, behalve zichzelf. Dit ziet er zo uit:

```js
// ga alle mensen langs
for (var i = 0; i < mensen.length; i++) {
  var mensA = mensen[i];
  // ga met mensA opnieuw alle mensen langs om te checken op overlap, behalve met zichzelf
  for (var j = 0; j < mensen.length; j++) {
    var mensB = mensen[j];
    if (mensA != mensB) {
      // check overlap
      var mensenOverlappen = mensA.isOverlappend(mensB);
      if (mensenOverlappen) {
        // check of er een besmetting optreedt
        if (mensA.isBesmet || mensB.isBesmet) {
          // als er één besmet is, wordt ze allebei besmet
          // als ze allebei besmet zijn, verandert deze code niets.
          mensA.isBesmet = true;
          mensB.isBesmet = true;
        }
      }
    }
  }
}
```

Ga de code eens regel voor regel af en leg aan jezelf (of je buur) uit wat hier gebeurt.

<!--
Met bovenstaande code worden alle mogelijke paren echter *twee keer* gecontroleerd. Kun je bedenken hoe dit komt? Stel, het eerste mensObject in de array `mensen` vergelijkt zijn positie met de andere mensen. Tot zover niets dubbels. Vervolgens gaat het tweede mensobject uit de array `mensen` zijn positie vergelijken met de andere mensen. De eerste waarmee de vergelijking plaatsvindt is het eerste object uit `mensen`. Er is echter al zojuist gecontroleerd of deze twee objecten overlap hadden. Dit was weliswaar andersom, maar dat maakt niet uit voor de uitkomst. Wanneer het laatste object uit `mensen` zijn positie gaat vergelijken, zijn al die vergelijkingen al eens gedaan. Om dit probleem op te lossen kunnen we mensen verlijken met mensen in de array `mensen` die een hogere index hebben, dus 'verder' staan in de lijst. Deze betere code heeft maar één wijziging nodig: in plaats van

```js
for (var j = 0; j < mensen.length; j++)
```

schrijf je

```js
for (var j = i+1; j < mensen.length; j++)
```

Op deze wijze is de eerste mensB altijd het *volgende* object in `mensen` en gaat de *loop* daarna netjes de array af.
-->

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-3b/script.js)

##### c) katten... 🐈

Helaas komen de gezondheidsinstanties erachter dat ook katten een rol spelen in de verspreiding van de ziekte. We zullen ook deze moeten opnemen in onze simulatie.
- De array `mensen` gaat ook dieren bevatten. Het is raar als deze naam hetzelfde blijft. Alle 'dingen' die iets in onze simulatie doen, heten 'actoren'. Verander door je hele code de naam van de array `mensen` in `actoren`. Dat kan in GitPod heel handig: Zoek de regel waar je de `mensen` als globale variabele declareert. Waarschijnlijk staat er `var mensen;`. Klik met de rechtermuisknop op `mensen` en kies in het menu dat verschijnt 'Rename Symbol'. Wanneer je op deze manier de naam wijzigt, wordt de naam van deze variabele overal gewijzigd. Wel moet je nog even door de comments gaan om te zien of je ook daar misschien 'mensen' moet wijzigen in 'actoren'

- Maak onder de klasse `Mens` een nieuwe klasse met de naam `Kat`. Laat deze precies hetzelfde doen als `Mens`, maar met deze verschillen:
  - de breedte van een kat is 10 pixels
  - een niet-besmette kat is blauw in plaats van wit
  - een besmette kat is oranje in plaats van rood

- Voeg in `setup` na de 25 mensen ook 10 katten toe aan de simulatie. Geef de katten een random snelheid tussen -2 en 2.
{{% expand "Hint" %}}
  Je kunt hiervoor even snel de `for`-loop die je voor de 25 mensen gebruikt, kopiëren en direct daaronder plakken en aanpassen naar 10 katten.
{{% /expand %}}

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-3c/script.js)

<br/><br/><br/>

---

**Lees nu hoofdstuk 2 van de [theorie](../objectoriented_theorie)**

---
<br/><br/><br/>



### Opdracht 4
In de theorie van hoofdstuk 2 heb je de gezien hoe de code van de superklasse `Actor` eruit ziet. Je gaat nu de code van `Mens` en `Kat` aanpassen.

##### Programmeren
a)
- Voeg, zoals in de theorie voorgedaan, de klasse `Dokter` toe aan je code en voeg 1 dokterobject toe aan de actoren. Controleer of de dokter verschijnt en anderen geneest.

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-4a/script.js)

b)
- Maak `Mens` en `Kat` subklassen van `Actor`. Bedenk goed welke code weg mag en welke code veranderd moet worden. Eén methode blijft onveranderd. Weet je welke?
{{% expand "Hint" %}}
  De methode `show` van `Actor` moet leeg blijven, omdat we `Actor` abstract maken. Dus de tekencode van `show` moet in subklassen staan.
{{% /expand %}}
{{% expand "Hint" %}}
  Het is raar om in een abstracte klasse als `Actor` wel een breedte mee te geven. We definiëren `breedte` daarom wel in `Actor`, maar geven er geen waarde aan. Dat moet in de constructor van `Mens` en `Kat` gebeuren.
{{% /expand %}}

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-4b/script.js)

c)
- Vervolgens gaan we de 'statistieken' van onze simulatie laten zien. De verantwoordelijkheid voor deze code ligt niet bij een van de actoren, maar bij het 'raamwerk' van de simulatie. Deze code schrijven we daarom in dit geval onder `draw`. Zorg dat je op die plek met behulp van de p5js-functie [text](https://p5js.org/reference/#/p5/text) twee regels in de linkerbovenhoek plaatst: een met het aantal onbesmette actoren en een met het aantal besmette actoren.
{{% expand "Hint" %}}
  Tip: hiervoor moet je de array `actoren` doorlopen met een `for`-loop. Er is overigens al een `for`-loop die hier prima geschikt voor is.
{{% /expand %}}
{{% expand "Hint" %}}
  Je hebt variabelen nodig om de telling tijdelijk in op te slaan. Zou je kieen voor globale of lokale variabelen?
{{% /expand %}}

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-4c/script.js)

d)
- Iedere actor die eenmaal besmet is, wordt in onze simulatie nooit meer beter, tenzij de dokter langskomt. Dat moet veranderen. Actoren moeten ook uit zichzelf weer beter kunnen worden. We gaan daarvoor een teller maken die bij besmetting voor een `Mens` begint bij 400 en voor een `Kat` begint op 200. Bij iedere aanroep van de methode `update` wordt de afteltimer 1 kleiner. Als de afteltimer 0 is, wordt het attribuut `isBesmet` weer op `false` gezet. Vraag jezelf hiervoor het volgende af:
  - in welke klasse definieer je `besmettelijkheidsTeller`?
  - hoe zorg je dat `besmettelijkheidsTeller` wordt ingesteld wanneer er een besmetting plaatsvindt? Tip: maak een methode `besmet()` die `isBesmet` op `true` zet EN de `besmettelijkheidsTeller` instelt.
  - hoe maak je het verschil in gedrag tussen `Mens` en `Kat`? Als je het in kleine stapjes wilt doen:
    - Maak het eerst werkend voor één klasse.
    - Maak het daarna werkend voor de andere klasse.
    - Verplaats waar mogelijk dubbele code naar `Actor`.
  - wat gebeurt er met de `besmettelijkheidsTeller` als `update` wordt aangeroepen en de actor is niet besmet?
  - wat gebeurt er met de `besmettelijkheidsTeller` als deze aan het aflopen is en er opnieuw contact is met een andere, besmette, actor?

[Controleer je code](https://github.com/emmauscollege/objectgeorienteerd-programmeren/blob/opdracht-4d/script.js)

Speel gerust eens met de waarden van de besmettelijkheidsTeller of het aantal dokters om te zien wat er in je simulatie gebeurt.

<br/><br/><br/>

---

**Lees nu hoofdstuk 3 van de [theorie](../objectoriented_theorie)**

---
<br/><br/><br/>



### opdracht 5

##### Programmeren
- In de theorie van hoofdstuk 3 is een heel aantal veranderingen genoemd. Verander je code zo, dat de genoemde attributen *private* worden en ze de juiste *getters* en *setters* hebben.
- Alle code staat nog in één bestand: script.js. Dit is niet handig als je code gemakkelijk herbruikbaar wilt maken. Daarom doen we het volgende:
  - we maken voor iedere klasse een apart bestand aan, zoals `actor.js`, `mens.js` etc.
  - je javascript wordt uitgevoerd binnen de HTML-pagina `index.html`. Het JavaScript-bestand wordt hierin netjes geladen. Nu we de code hebben verdeeld over meerdere bestanden, moeten we ook aangeven dat deze worden geladen. Voeg **boven** de regel:
  ```html
  <script id="canvas" src="script.js"></script>
  ```
  voor ieder bestand nieuwe regel toe zoals:
  ```html
  <script src="actor.js"></script>
  ```
- Maak zelf een heel nieuwe actor voor de simulatie. Je mag zelf weten of het een directe subklasse van `Actor`, `Mens`, `Kat` of `Dokter` is, zolang je maar geen code in (één van de) superklassen gaat veranderen om jouw nieuwe klasse te laten werken. Zet deze code in een los bestand.
- Maak een volledig UML klassendiagram van de *vijf* klassen die in jouw simulatie voorkomen.
- Wissel met een klasgenoot jullie zelfbedachte actorklassen uit en neem deze op in je eigen simulatie. Als het goed is, heb je niet veel code nodig om dit voor elkaar te krijgen.
{{% expand "Hint" %}}
  Wissel uit door:
  - de bijbehorende bestanden elkaar te sturen.
  - in je HTML bestand ook dit nieuwe bestand te laden.
  - in je `setup` een zelfbedacht aantal van deze nieuwe klasse actoren op te nemen.
{{% /expand %}}



<br/><br/><br/>

---

**Lees nu hoofdstuk 4 van de [theorie](../objectoriented_theorie)**

---
<br/><br/><br/>



### Opdracht 6

In deze opdracht maak je een eigen klasse in C++. Kies uit de volgende twee klassen:
- Een klasse die twee LEDs om en om laat knipperen, dus als de waarschuwingslichten bij een spoorwegovergang. Deze lichten kunnen ook in zijn geheel uit staan.
- Een klasse die een knop uitleest. Bij het indrukken van de knop wisselt de status van het bebehorende object van `aan` naar `uit` en andersom.

##### a) uitdenken
Maak, met theorie van het hoofdstuk 4 in je achterhoofd, een beschrijving (d.w.z. een UML-schets en informele beschrijving van methoden) van de nieuwe klasse. Probeer uit hoever je kan bedenken wat er allemaal in de klasse moet komen.


##### b) programmeren
- Maak in C++ de klasse zoals je die hebt bedacht.
- Test de klasse uit en pas aan waar nodig, totdat deze werkt zoals gevraagd.

##### c) uitbreiden
- Heb je gekozen voor de waarschuwingslichten? Kun je het zo maken dat je de knippersnelheid kunt aanpassen? Op welke manier maak je deze eigenschap toegankelijk voor andere programmeurs?
- Heb je gekozen voor de knop. Kun je het zo maken dat de lichte storing die optreedt rond het indrukken van de knop weggefilterd wordt? Je noemt dit debouncen. Check deze [voorbeeldcode](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Debounce) voor een idee.
