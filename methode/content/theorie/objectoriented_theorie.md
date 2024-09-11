+++
title = "T8 Theorie objectgeoriënteerd programmeren"
weight = 8.1
hidden = true
+++

### Introductie
In de vierde klas heb je in JavaScript met behulp van de _library_ [p5.js](http://p5js.org) een spelletje gemaakt. Later leerde je de taal C++ om daarmee een microcontroller te programmeren. JavaScript en C++ zijn verschillende programmeertalen, toch lijken ze ook wat op elkaar: het programma dat je in deze talen maakt wordt stap voor stap uitgevoerd, commando na commando. Na ieder commando is de toestand waarin je programma zich bevindt weer een beetje anders.

Deze manier van programmeren heet _imperatief programmeren_. Een andere manier van programmeren is bijvoorbeeld [_declaratief programmeren_](http://wikipedia.org). Zo'n manier van programmeren heet een _programmeerparadigma_. Vanuit *imperatief programmeren* is in de loop der tijd een aparte paradigma onstaan: _objectgeoriënteerd programmeren_. De Engelse term hiervoor is _object oriented programming_, ofwel OOP. Heel veel programma's zijn gemaakt met behulp van dit paradigma. Zonder dat je het misschien hebt doorgehad, heb bij bij het werken met Arduino ook gebruik gemaakt van objectgeoriënteerd programmeren. In deze module gaan we leren dit paradigma bewust toe te passen.

**Maak nu eerst de opfrisopdracht die in [GitHub Classroom](https://classroom.github.com) voor je klaarstaat**

### Hoofdstuk 1 – objecten, attributen, methoden, *this*, klassen 
##### Attributen
In de vierde klas heb je geleerd hoe je variabelen gebruikt in je programma. Je kunt in JavaScript een variabele creëren met `var` of `let`, zoals `var xPositie = 10`. Ook leerde je dat er arrays bestaan. Hiermee kun je een lijstje van waarden maken. Je hebt hiervoor een variable nodig en een index, zoals `xPosities[2]`.
In de opfrisopdracht moest je een spelletje programmeren waarbij 'appels' naar beneden vielen. Zo'n appel heeft een x-positie, y-positie en een verticale snelheid. Je kunt hiervoor prima de volgende variabelen gebruiken (de waarden zijn willekeurig gekozen):
```js
var x = 300;
var y = -50;
var speed = 4;
```

Wanneer je meer dan één appeltje tegelijkertijd in het spel wilt hebben, kun je het beter gebruik maken van arrays (de waarden zijn opnieuw willekeurig gekozen):

```js
var xPosities = [300, 500];
var yPosities = [-50, -150];
var speeds = [4, 2];
```

Je kunt vervolgens een loop gebruiken om alle elementen (of waarden) van de arrays te doorlopen:
```js
// updatet yPosities met de bijbehorende speed:
for (var i=0; i<yPosities.length; i++) {
  yPosities[i] = yPosities[i] + speeds[i];
}
```

In bovenstaande arrays staan twee appels beschreven: één met een x-waarde van 300, een y-waarde van -50 en een speed van 4 en één met een x-waarde van 500, een y-waarde van -150 en een speed van 2. Het is het een beetje vreemd dat we waarden die eigenlijk bij elkaar horen (omdat ze bij dezelfde appel horen), opsplitsen in arrays die dezelfde soort informatie bevatten (namelijk, allemaal x- of y-waarden).

Gelukkig heeft JavaScript hier iets voor: objecten. Je kunt op deze manier een object maken:
```js
var appel = { x: 300,
              y: -50,
              speed: 4
            };
```
De eigenschappen `x`, `y` en `speed`, noemen we _attributen_ van het object `appel`. Wanneer je nu het x-attribuut van `appel` wilt lezen of veranderen, maak je gebruik van puntnotatie: `appel.x`. Bijvoorbeeld, om de waarde van het x-attribuut te printen in de JavaScript console: `console.log(apple.x)`. Of om de waarde van attribuut `y` te veranderen met de hoeveelheid die in `speed` staat: `appel.y = appel.y + appel.speed`.

Het is ook mogelijk om objecten in een array te zetten:
```js
var appels = { x: 300,    // dit is het eerste appel-object
               y: -50,
               speed: 4
             },
             { x: 500,    // dit is het tweede appel-object
               y: -150,
               speed: 2
             };
```

##### Methoden
De laatste regel code zul je in array-vorm vast ook in je simulatie-opdracht hebben staan. We hebben nu dus objecten die gegevens die bij elkaar hoort netjes in bij elkaar hebben staan. Maar hoort programmeercode die de positie van het object op basis van de snelheid aanpast eigenlijk ook niet bij datzelfde object? Dat klopt. En daarom is het ook mogelijk om een object acties / handelingen te laten uitvoeren. Je zou je het kunnen voorstellen als een functie die bij een bepaald object hoort. In objectgeoriënteerd programmeren heet zo'n 'functie van een object' een **methode**.

Als het appel-object ook een methode `update` moet hebben die de y-positie van de appel updatet, moeten we de code herschrijven:

```js
var appel = { x: 300,
              y: -50,
              speed: 4,

              update() {
                this.y = this.y - this.speed;
              }
            }
```

Als we vervolgens `appel.update()` aanroepen, wordt de methode uitgevoerd.

##### *this*
Maar wat doet het *keyword* `this` in de code van `update`? Je zou je het als volgt kunnen voorstellen: de code binnen `update` heeft 'geen idee' dat dat object uiteindelijk via de naam `appel` toegankelijk is. Die naam `appel` is als het ware onzichtbaar voor de code binnen het object. Toch wil je in de code van methode vaak een attribuut of methode van datzelfde object aanroepen. Daarvoor gebruikt je *this*. De code `this.x = 90` betekent zoveel als: geef het attrituut `x` van mijzelf de waarde 90. 

##### Klassen
Stel dat we meerdere mensobjecten met dezelfde eigenschappen en functionaliteit willen maken. We zouden hiervoor deze code kunnen gebruiken:

```js
var appelA = { x: 300,
               y: -50,
               speed: 4,

               update() {
                 this.x = this.x - this.speedX;
                 this.y = this.y - this.speedY;
               }
             }
var appelB = { x: 500,
               y: -150,
               speed: 2,

               update() {
                 this.x = this.x - this.speedX;
                 this.y = this.y - this.speedY;
               }
             }
var appelC = { x: 200,
               y: -350,
               speed: 3,

               update() {
                 this.x = this.x - this.speedX;
                 this.y = this.y - this.speedY;
               }
             }
```

Als het goed is, krijg je als programmeur jeuk van deze code. De code voor de methode `update` is drie keer precies hetzelfde! Dit moet toch beter kunnen? En kunnen we er wel vanuit gaan dat `appelA`, `appelB` en `appelC` wel dezelfde attributen en methoden hebben? Het is handig dat ze bijna dezelfde namen hebben, maar zijn ze wel vergelijkbaar?

Om deze twee problemen op te lossen, maken programmeurs gebruik van **klassen**. Een klasse is een soort *blauwdruk* van een groep objecten. We kunnen bijvoorbeeld een klasse `Appel` maken. Ieder object van de klasse mens heeft dan gegarandeert beschikking over alle attributen en methodes die in de klasse beschreven zijn.

Een klasse `Appel` zou er in JavaScript zo uit kunnen zien:

```js
class Appel {
  x;
  y;
  speed;

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }
}
```

*Uitleg*
- De eerste 4 regels van de klasse `Appel` geven aan welke attributen deze klasse heeft.
De eerste methode is de zogenaamde `constructor`. Dit is een speciale methode die als doel heeft *een object te creëren* van deze klasse. De code in een constructor doet alles wat hiervoor nodig is. Omdat een mens in onze simulatie *minimaal* de eigenschappen `x`, `y` en `speed` moet hebben, is het het beste om deze drie waarden direct aan de constructor mee te geven. Zo krijg je altijd een object dat gelijk functioneel is.

- De argumenten van de constructor heten hetzelfde als de attributen van de klasse. Dat is niet verplicht. Je zou de parameter `x` ook `newX` (of – doe eens gek – `a`) mogen noemen. Merk wel op dat in de constructor `x` slaat op de eerste parameter van de constructor en `this.x` op het attribuut x van de klasse.
Deze constructorcode doet precies hetzelfde als de constructorcode hierboven, maar is veel slechter te begrijpen:

```js
  constructor(a, b, c) {
    this.x = a;
    this.y = b;
    this.speed = c;
  }
```

- De code van `update` herken je zo langzamerhand wel. Valt je op dat de code in een klasse zo algemeen mogelijk is? Het is zo geschreven dat het werkt voor waarden die je *nu nog niet weet*, maar er wel zijn als van deze klasse een object gemaakt wordt.
- Wanneer je een nieuw object van de klasse Mens wilt maken gebruik je het keyword `new`. Wanneer je `new` gebruikt, wordt automatisch de constructor aangeroepen. Voorbeeld:

```js
var appel = new Appel(300, -50, 4);
```

##### Termen en afspraken
- Een klasse is een blauwdruk voor een bepaald object. Objecten van dezelfde klasse hebben dezelfde attributen en methoden. De waarden die in de attributen zijn opgeslagen, zijn mogelijk wel voor ieder object verschillend.
- Als object `appelA` een object van de klasse `Appel` is, zeggen we ook wel dat `mensA` een instantie (Engels: *instance*) is van de klasse `Appel`. Een nieuw object maken heet ook wel 'instantiëren'
- Afspraken over de schrijfwijze: de naam van een klasse begint altijd met een hoofdletter. De naam van een object begint altijd met een kleine letter. Voor beide gebruik je [Camelcase](https://nl.wikipedia.org/wiki/CamelCase).



<div style="page-break-after: always"></div>
