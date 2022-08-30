+++
title = "T8. Objectgeoriënteerd Programmeren"
weight = 8
+++

Je leert objectgeoriënteerd programmeren. Dat is een manier van programmeren waarbij data en logica gebundeld zijn in objecten. We leren dit voor zowel JavaScript als C++.
<!--more-->

## Theorie
- [Theorie objectgeoriënteerd programmeren](../objectoriented-theorie)
-

## Uitlegvideo's


## Leerdoelen
1.	Je kunt 
16.	<em>Alleen vwo:</em> Je kunt 

## Verwerkingsopdrachten
Om de overstap naar objectgeoriënteerd programmeren te maken, beginnen we met een puur imperatief programma en werken we dit stap voor stap uit naar een objectgeoriënteerd programma. We maken hiervoor een **epidemiesimulator** die visueel maakt hoe organismen elkaar kunnen besmetten met een ziekteverwekker. Tussen de opdrachten door vind je theorie over objectgeoriënteerd programmeren.

Is het programmeren een beetje weggezakt? Kijk dan eerst nog eens op [Khan Academy](http://khanacademy.org) en gebruik gerust het [syntaxblad](/syntaxblad.pfd).

### Opdracht 0 - Klaar voor de start

#### Start een eigen repo en begrijp de code:
- Ga naar het GitHub-repository '[OOP-template](https://github.com/emmauscollege/OOP-template)'.
- Log in bij GitHub en gebruik de knop **Use Template** om een kopie hiervan te maken in je eigen GitHub account.
- Maak van jouw repo een workspace in GitPod.
- Pin deze workspace in je GitPod Dashboard als je dat handig vindt, zo wordt deze niet automatisch door GitPod verwijderd.

De code doet nog niet veel: het laat een vierkantje bewegen en stuiteren tegen de randen van het scherm. In de code zie je _globale variabelen_ die de positie en de horizontale en verticale snelheid bevatten. Ook zie je de constante `BREEDTE`, die de waarde van de grootte van het vierkantje bevat.

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

### Opdracht 1 – Meerdere mensen
Je simulatie-omgeving bestaat nu uit één mens. Er zijn er natuurlijk meer nodig. Hiervoor hebben we niet één `x`, `y`, `speedX` en `speedY` nodig, maar meerdere. Je kunt dit in je programma voor elkaar krijgen door te werken met arrays. Voor ieder mens staat er in de verschillende arrays een waarde. Dezelfde mens heeft z'n waarde steeds op dezelfde plek / index van de arrays. Dus voor de x- en y posities van 3 mensen zou je deze code kunnen gebruiken:
```js
xPosities = [130, 60, 470];
yPosities = [700, 1010, 40]
```

###### Ondersteuning
- Zie je niet helemaal voor je hoe bovenstaande techniek werkt? Maak eerst weer eens de opdracht [Make it rain](https://khanacademy.org) van KhanAcademy. Daar gebruiken ze deze techniek voor de x- en y-waarde van de regendruppels.

#### Programmeren
- Verander de namen van de globale variabelen zo, dat je ze herkent als een array. Dus bijv. `xPosities` in plaats van `x`, etc.
- Verander in `setup` de initiële waarden in arrays met ieder 5 waarden, zodat er vijf mensen getekend kunnen worden. Je mag *voor nu* zelf beslissen of je de waarden zelf bedenkt of ze random laat zijn. Hoe meer waarden je random laat zijn, hoe verrassender je simulator wordt.
- Verander in `draw` de code zo, dat je voor **iedere mens**:
  - de positie verandert met de bijbehorende snelheden
  - checkt of deze moet stuiteren

  Check nogmaals [Make it rain](https://khanacademy.org) als je hier niet uitkomt. Tip: je moet een `for`-loop gebruiken samen met de `length` van een array.

### Opdracht 2 – objecten
De manier waarop je bij opdracht 1 de gegevens in arrays hebt gestopt werkt prima, maar is niet in overeenstemming met welke gegevens er volgens je gevoel bij elkaar horen: niet alle x-posities, y-posities, etc. horen bij elkaar, maar alle gegevens van 1 bepaald mens. Je zou eigenlijk willen dat je die gegevens bij elkaar zou kunnen zetten. Dat kan met behulp van objecten.

#### Programmeren
- Maak het gehele onderdeel [Objects](https://www.khanacademy.org/computing/computer-programming/programming/objects/pt/intro-to-objects) van Khan Academy. Dus van 'Intro' tot en met 'Bookshelf').
- Gebruik je opgedane kennis om in je Simulator in plaats van 4 arrays met losse waarden, 1 array genaamd `mensen` met objecten te maken: 5 objecten – voor iedere mens één. Zorg ervoor dat alles blijft werken.



<br/><br/><br/>

---

**Lees nu hoofdstuk 1 van de [theorie](../objectoriented-theorie/#hoofdstuk-1)**

---
<br/><br/><br/>



### Opdracht 3 – 25 random mensen maken. En wat doen die katten daar? 😼
In de theorie van hoofdstuk 1 is een heel groot deel van de klasse `Mens` gegeven. Je maakt deze klasse verder af en gebruikt deze om 25 mensobjecten te maken die zich in onze simulatie bewegen:

#### Programmeren

##### a) 25 random mensen
- De klasse `Mens` bevat alle code die nodig is om de positie van een mensobject te updaten. Verwijder deze code uit `draw` en roep in plaats daarvan `update` aan op het betreffende object.
- De code die controleert of een mens tegen de rand van de simulatiewereld botst, moet ook verhuizen naar de klasse `Mens`. Breidt de methode `update` uit. Gebruik hiervoor de betreffende code die je in `draw` vindt en pas deze aan.
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

##### b) besmettingen
Het wordt tijd dat deze mensen elkaar kunnen besmetten. Het idee is dat mensen elkaar besmetten als ze elkaar in hun beweging overlappen.
- Geef de klasse `Mens` een nieuw attribuut `isBesmet`. Dit attribuut initialiseer je in de constructor op `false`. Je hoeft hiervoor dus geen argument aan je constructor toe te voegen.
- Voeg in `setup`, na de `for`-loop die de 25 mensen aanmaakt, deze regel code toe:

  ```js
  mensen[0].besmet = true;
  ```

  Hierdoor wordt alvast één mens besmet.
- Verander de code in de methode `show` zo, dat een mens als rood vierkant wordt getekend als deze besmet is. Als het goed is, wordt één vierkant nu rood getekend.
- Vervolgens maken we een methode die kan controleren of een ander mens-object overlap heeft met het object dat de methode uitvoert. Ga voor jezelf na of je de volgende zin begrijpt: *Omdat een mens getekend wordt als een vierkant, overlappen twee mensen elkaar als één van de hoeken van het ene vierkant zich binnen de randen van het andere vierkant bevindt.*
Onderstaande code bevat het begin van de methode `isOverlappend`. **De methode controleert alleen voor de linkerbovenhoek.** Voeg deze code toe aan de klasse `Mens` en voeg zelf de code toe die de andere drie hoeken van `this` controleert. Als je merkt dat het controleren van overlap moeilijk is, maak dan eerst de oefening [Smarter Button](https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-smarter-button) van Khan Academy weer eens.

```js
isOverlappend(andereMens) {
  // zet teruggeefwaarde standaard op false
  var overlappend = false;

  // zet teruggeefwaarde op true als er een overlap is
  if ( (this.x >= andereMens.x &&
        this.x <= andereMens.x + andereMens.breedte &&
        this.y >= andereMens.y &&
        this.y <= andereMens.Y + andereMens.breedte)

        /* VUL HIER ZELF LATER AAN VOOR DE ANDERE HOEKEN*/
      ) {

    overlappend = true;
  }

  // stuur de teruggeefwaarde terug
  return overlappend;
}
```

- Nu moeten we in `draw` code toevoegen die alle mogelijke paren van mensobjecten controleert of ze overlappen. Indien ze overlappen, controleren we of een van die objecten besmet is. Als dat zo is wordt het andere ook besmet (als het dat nog niet is).
Een simpele manier om dit te controleren is in een `for`-loop ieder object te controleren met ieder ander object, behalve zichzelf. Dit zou er ongeveer zo uitzien:

```js
// ga alle mensen langs
for (var i = 0; i < mensen.length; i++) {
  mensA = mensen.[i];
  // ga met mensA opnieuw alle mensen langs om te checken op overlap, behalve met zichzelf
  for (var j = 0; j < mensen.length; j++) {
    mensB = mensen[j];
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

##### c) katten... 🐈

Helaas komen de gezondheidsinstanties erachter dat ook katten een rol spelen in de verspreiding van de ziekte. We zullen ook deze moeten opnemen in onze simulatie.
- De array `mensen` gaat ook dieren bevatten. Het is raar als deze naam hetzelfde blijft. Alle 'dingen' die iets in onze simulatie doen, heten 'actoren. Verander door je hele code de naam van de array `mensen` in `actoren`.
- Maak een nieuwe klasse met de naam `Kat`. Laat deze precies hetzelfde doen als `Mens`, maar met deze verschillen:
  - de breedte van een kat is 10 pixels
  - een niet-besmette kat is blauw in plaats van wit
  - een besmette kat is oranje in plaats van rood
- Voeg in `setup` na de 25 mensen ook 10 katten toe aan de simulatie. Geef de katten een random snelheid tussen -2 en 2.



<br/><br/><br/>

---

**Lees nu hoofdstuk 2 van de [theorie](../objectoriented-theorie)**

---
<br/><br/><br/>



### Opdracht 4
In de theorie van hoofdstuk 2 heb je de gezien hoe de code van de superklasse `Actor` eruit ziet. Je gaat nu de code van `Mens` en `Kat` aanpassen.

##### Programmeren
- Maak van `Mens` en `Kat` subklassen van `Actor` en pas de code aan. Bedenk goed welke code weg mag en welke code veranderd moet worden. Eén methode blijft onveranderd. Weet je welke?
- Vervolgens gaan we de 'statistieken' van onze simulatie laten zien. De verantwoordelijkheid voor deze code ligt niet bij een van de actoren, maar bij het 'raamwerk' van de simulatie. Deze code schrijven we daarom in dit geval onder `draw`. Zorg dat je op die plek met behulp van de p5js-functie [text](https://p5js.org/reference/#/p5/text) twee regels in de linkerbovenhoek plaatst: een met het aantal onbesmette actoren en een met het aantal besmette actoren. (Tip: hiervoor moet je de array `actoren` doorlopen met een `for`-loop).
- Iedere actor die eenmaal besmet is, wordt in onze simulatie nooit meer beter. We gaan daarvoor een teller maken die bij besmetting voor een `Mens` begint bij 500 en voor een `Kat` begint op 1000. Bij iedere aanroep van de methode `update` wordt de afteltimer 1 kleiner. Als de afteltimer 0 is, wordt het attribuut `isBesmet` weer op `false` gezet. Vraag jezelf hiervoor het volgende af:
  - in welke klasse definieer je `besmettelijkheidsTeller`?
  - hoe maak je het verschil in gedrag tussen `Mens` en `Kat`? Tip:
    - maak het eerst werkend voor één klasse.
    - Maak het daarna werkend voor de andere klasse.
    - Verplaats waar mogelijk dubbele code naar `Actor`.
  - wat gebeurt er met de `besmettelijkheidsTeller` als `update` wordt aangeroepen en de actor niet besmet?
  - wat gebeurt er met de `besmettelijkheidsTeller` als deze aan het aflopen is en er opnieuw contact is met een andere, besmette, actor?



<br/><br/><br/>

---

**Lees nu hoofdstuk 3 van de [theorie](../objectoriented-theorie)**

---
<br/><br/><br/>



### opdracht 5

##### Programmeren
- In de theorie van hoofdstuk 3 is een heel aantal veranderingen genoemd. Verander je code zo, dat de genoemde attributen *private* worden en ze de juiste *getters* en *setters* hebben.
- Alle code staat nog in één bestand: script.js. Dit is niet handig als je code gemakkelijk herbruikbaar wilt maken. Daarom doen we het volgende:
  - we maken voor iedere klasse een apart bestand aan, zoals `actor.js`, `mens.js` etc.
  - je javascript wordt uitgevoerd binnen de HTML-pagina `index.html`. Het JavaScript-bestand wordt hierin netjes geladen. Nu we de code hebben verdeeld over meerdere bestanden, moeten we ook aangeven dat deze worden geladen. Voeg **boven** de regel:
  ```html
  <script id="canvas" href="script.js"></script>
  ```
  voor ieder bestand nieuwe regel toe zoals:
  ```html
  <script href="actor.js"></script>
  ```
- Maak zelf een heel nieuwe actor voor de simulatie. Je mag zelf weten of het een directe subklasse van `Actor`, `Mens`, `Kat` of `Dokter` is, zolang je maar geen code in (één van de) superklassen gaat veranderen om jouw nieuwe klasse te laten werken. Zet deze code in een los bestand.
- Maak een volledig UML klassendiagram van de klassen die in jouw simulatie voorkomen.



<br/><br/><br/>

---

**Lees nu hoofdstuk 4 van de [theorie](../objectoriented-theorie)**

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
