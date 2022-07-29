+++
title = "T8. Objectgeoriënteerd Programmeren"
weight = 8
+++

Je leert object georienteerd programmeren. Dat is een manier van programmeren waarbij data en logica gebundeld zijn in objecten. We leren dit voor zowel JavaScript als C++.
<!--more-->

## Theorie
[Arduino-lessen.nl, les 1 t/m 5](https://arduino-lessen.nl)
- 
-

## Uitlegvideo's
{{<youtube id="">}}
Uitlegvideo's bij deze theorie moeten we nog opzoeken

## Leerdoelen
1.	Je kunt 
16.	<em>Alleen vwo:</em> Je kunt 

# Objectgeoriënteerd programmeren

## Introductie
In de vierde klas heb je in JavaScript met behulp van de _library P5js_ een spelletje gemaakt. Later leerde je de taal C++ om daarmee een microcontroller te programmeren. JavaScript en C++ zijn verschillende programmeertalen, toch lijken ze ook wat op elkaar: het programma dat je in deze talen maakt wordt stap voor stap uitgevoerd, commando na commando. Na ieder commando is de toestand waarin je programma zich bevindt weer een beetje anders.

Deze manier van programmeren heet _imperatief programmeren_. Een andere manier van programmeren is bijvoorbeeld [_declaratief programmeren_](http://wikipedia.org). Zo'n manier van programmeren heet een _programmeerparadigma_. Vanuit *imperatief programmeren* is in de loop der tijd een aparte paradigma onstaan: _objectgeoriënteerd programmeren_. De Engelse term hiervoor is _object oriented programming_, ofwel OOP. Heel veel programma's zijn gemaakt met behulp van dit paradigma. Zonder dat je het misschien hebt doorgehad, heb bij bij het werken met Arduino ook gebruik gemaakt van objectgeoriënteerd programmeren. In deze module gaan we leren dit paradigma bewust toe te passen.

## Aan de slag met OOP
Om de overstap naar objectgeoriënteerd programmeren te maken, beginnen we met een puur imperatief programma en werken we dit stap voor stap uit naar een objectgeoriënteerd programma. We maken hiervoor een **epidemiesimulator** die visueel maakt hoe organismen elkaar kunnen besmetten met een ziekteverwekker. Tussen de opdrachten door vind je theorie over objectgeoriënteerd programmeren.

Is het programmeren een beetje weggezakt? Kijk nog eens op [Khan Academy](http://khanacademy.org) en gebruik gerust het [syntaxblad](/syntaxblad.pfd).

#### Opdracht 1 - Eén mens

##### Start een eigen repo:
- Ga naar het GitHub-repository [objectgeorienteerd programmeren](http://github.com/emmaus-6V).
- Gebruik de knop **Use Template** om een kopie hiervan te maken in je eigen GitHub account.
- Maak van jouw repo een workspace in GitPod.

De code doet nog niet veel: het tekent een vierkantje in het midden van het scherm. In onze simulator stelt dit vierkantje een mens voor. Het is de bedoeling dat deze mens zich door onze wereld gaat bewegen. In de code zie je _globale variabelen_ die de positie en de horizontale en verticale snelheid bevatten:

``` js
var x;
var y;
var speedX;
var speedY;
```

In `setup` krijgen deze variabelen hun initiële waarde. De positie is in het midden van het canvas. (Het midden van het vierkant is overigens niet exact in het midden. De waarden `x` en `y` worden gebruikt voor de linkerbovenhoek...) De horizontale en verticale snelheid hebben een random waarde tussen -5 en 5.

```js
x = width / 2;
y = heigth / 2;
speedX = random(-5, 5);
speedY = random(-5, 5);
```

In `draw` wordt netjes een wit vierkantje getekend dat 20 pixels breed is. Herinner je je nog dat de functie `rect` een vierkant tekent vanuit de linkerbovenhoek?

```js
rect(x, y, 20, 20);
```

##### Zelf programmeren:
De breedte van 20 pixels gaan we waarschijnlijk heel vaak gebruiken. Overal de waarde 20 typen gaat uiteindelijk leiden tot onoverzichtelijke code en waarschijnlijk ook tot fouten.

- Maak bij de globale variabelen een nieuwe constante `BREEDTE` aan met de waarde 20; Verander de code zo, dat het vierkantje getekend wordt, gebruik makend van deze constante. Gebruik voortaan deze constante als je de breedte van het vierkantje nodig heb.
- Voeg op de aangegeven plek code in `draw` toe die de variabelen `x` en `y` met behulp van `speedX` en `speedY` verandert. Test of je simulatiemens beweegt.
- De mens beweegt zich waarschijnlijk al snel uit jouw simulatiewereld. Voeg in `draw` code toe die ervoor zorgt dat hij tegen de kanten 'stuitert'.
  Tips:
    - je hebt hier meerdere `if`-statements voor nodig.
    - De p5js-variabelen `width` en `height` bevatten automatisch de juiste breedte en hoogte van het p5js-canvas.
    - Vermenigvulden met -1 maakt van een negatief een positief getal en andersom (handig bij het botsen).
- Controleer of het vierkantje stuitert als deze *met de buitenrand* tegen de kant botst. Dus bijvoorbeeld niet pas als de linkerrand van het vierkantje tegen de rechterkant van de wereld botst.

### Opdracht 2 – meerdere mensen
Je simulatie-omgeving bestaat nu uit één mens. Er zijn er natuurlijk meer nodig. Hiervoor hebben we niet één `x`, `y`, `speedX` en `speedY` nodig, maar meerdere. Je kunt dit in je programma voor elkaar krijgen door te werken met een arrays. Voor iedere mens staat er in verschillende de arrays een waarde. Dezelfde mens heeft z'n waarde steeds op dezelfde plek / index van de array.

##### Begrijpen
- Zie je niet helemaal voor je hoe bovenstaande techniek werkt? Maak eerst weer eens de opdracht [Make it rain](https://khanacademy.org) van KhanAcademy. Daar gebruiken ze deze techniek voor de x- en y-waarde van de regendruppels.

##### Zelf programmeren
- Verander in `setup` de initiële waarden zo in arrays met 5 waarden, zo dat er vijf mensen getekend kunnen worden.
- Verander in `draw` de code zo, dat je voor iedere mens:
  - de positie verandert met de bijbehorende snelheden
  - checkt of deze moet stuiteren

  Check nogmaals [Make it rain](https://khanacademy.org) als je hier niet uitkomt. Tip: je moet een `for`-loop gebruiken samen met de `length` van een array.

### Opdracht 3 – objecten
De manier waarop je bij opdracht 2 de gegevens in arrays hebt gestopt werkt prima, maar is niet in overeenstemming met welke gegevens er volgens je gevoel bij elkaar horen: niet alle x-posities, y-posities, etc. horen bij elkaar, maar alle gegevens van 1 bepaald mens. Je zou eigenlijk willen dat je die gegevens bij elkaar zou kunnen zetten. Dat kan met behulp van objecten.

- Maak het gehele onderdeel [Objects](https://www.khanacademy.org/computing/computer-programming/programming/objects/pt/intro-to-objects) van Khan Academy. Dus van 'Intro' tot en met 'Bookshelf').
- Gebruik je opgedane kennis om in je Simulator in plaats van 4 arrays met losse waarden, 1 array genaamd `mensen` met objecten te maken: 5 objecten – voor iedere mens één. Zorg ervoor dat alles blijft werken.

### College 1 – objecten, attributen, methoden, *this*, klassen 
##### Attributen
Je hebt in de vorige opdracht kennisgemaakt met objecten. Voor iedere mens maakte je een object aan met de eigenschappen `x`, `y`, `speedX` en `speedY`. Stel je maakt handmatig zo'n object en in plaats van deze in een array te plaatsen, ken je deze toe aan een variabele. Dat zou er dan zo uit kunnen zien:

```js
var mensA = { x: 300,
              y: 600,
              speedX: 2,
              speedY: -3
            }
```

Bij objectgeoriënteerd programmeren heet een eigenschap van objecten een **attribuut**. Je krijgt toegang tot een attribuut met behulp van puntnotatie. Om de waarde van attribuut `x` van mensA uit te lezen, gebruik je `mensA.x`, bijv:

```js
console.log(mensA.x);
```

Wil je de waarde van een attribuut aanpassen, dan gebruik je dezelfde schrijfwijze:

```js
mensA.x = mensA.x + mensA.speedX;
```

##### Methoden
De laatste regel code zul je in array-vorm vast ook in je simulatie-opdracht hebben staan. We hebben nu dus objecten die gegevens die bij elkaar hoort netjes in bij elkaar hebben staan. Maar hoort programmeercode die de positie van het object op basis van de snelheid aanpast eigenlijk ook niet bij datzelfde object? Dat klopt. En daarom is het ook mogelijk om een object acties / handelingen te laten uitvoeren. Je zou je het kunnen voorstellen als een functie die bij een bepaald object hoort. In objectgeoriënteerd programmeren heet zo'n 'functie van een object' een **methode**.

Als mensA ook een methode `update` moet hebben die de positie van mensA updatet, moeten we de code herschrijven:

```js
var mensA = { x: 300,
              y: 600,
              speedX: 2,
              speedY: -3,

              update() {
                this.x = this.x - this.speedX;
                this.y = this.y - this.speedY;
              }
            }
```

Als we vervolgens `mensA.update` aanroepen, wordt de methode uitgevoerd.

##### *this*
Maar wat doet het *keyword* `this` in de code van `update`? Je zou je het als volgt kunnen voorstellen: de code binnen `update` heeft 'geen idee' dat dat object uiteindelijk via de naam `mensA` toegankelijk is. Die toekenning aan de naam `mensA` is als het ware onzichtbaar voor de code binnen het object. Toch wil je in de code van methode vaak een attribuut of methode van datzelfde object aanroepen. Daarvoor gebruikt je *this*. De code `this.x = 90` betekent zoveel als: geef het attrituut `x` van mijzelf de waarde 90. 

##### Klassen
Stel dat we meerdere mensobjecten met dezelfde eigenschappen en functionaliteit willen maken. We zouden hiervoor deze code kunnen gebruiken:

```js
var mensA = { x: 300,
              y: 600,
              speedX: 2,
              speedY: -3,

              update() {
                this.x = this.x - this.speedX;
                this.y = this.y - this.speedY;
              }
            }
var mensB = { x: 50,
              y: 100,
              speedX: -2,
              speedY: -1,

              update() {
                this.x = this.x - this.speedX;
                this.y = this.y - this.speedY;
              }
            }
var mensC = { x: 200,
              y: 350,
              speedX: 3,
              speedY: 1,

              update() {
                this.x = this.x - this.speedX;
                this.y = this.y - this.speedY;
              }
            }
```

Als het goed is, krijg je als programmeur jeuk van deze code. De code voor de methode `update` is drie keer precies hetzelfde! Dit moet toch beter kunnen? En kunnen we er wel vanuit gaan dat `mensA`, `mensB` en `mensC` wel dezelfde attributen en methoden hebben? Het is handig dat ze bijna dezelfde namen hebben, maar zijn ze wel vergelijkbaar?

Om deze twee problemen op te lossen, maken programmeurs gebruik van **klassen**. Een klasse is een soort *blauwdruk* van een groep objecten. We kunnen bijvoorbeeld een klasse `Mens` maken. Ieder object van de klasse mens heeft dan gegarandeert beschikking over alle attributen en methodes die in de klasse beschreven zijn.

Een klasse `Mens` zou er in JavaScript zo uit kunnen zien:

```js
class Mens {
  x;
  y;
  speedX;
  speedY;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }
}
```

*Uitleg*
- De eerste 4 regels van de klasse `Mens` geven aan welke attributen deze klasse heeft.
De eerste methode is de zogenaamde `constructor`. Dit is een speciale methode die als doel heeft *een object te creëren* van deze klasse. De code in een constructor doet alles wat hiervoor nodig is. Omdat een mens in onze simulatie *minimaal* de eigenschappen `x`, `y`, `speedX` en `speedY` moet hebben, is het het beste om deze vier waarden direct aan de constructor mee te geven. Zo krijg je altijd een object dat gelijk functioneel is.

- De argumenten van de constructor heten hetzelfde als de attributen van de klasse. Dat is niet verplicht. Je zou de parameter `x` ook `newX` (of – doe eens gek – `a`) mogen noemen. Merk wel op dat in de constructor `x` slaat op het eerste argument van de constructor en `this.x` op het attribuut x van de klasse.
Deze constructorcode doet precies hetzelfde als de constructorcode hierboven, maar is veel slechter te begrijpen:

```js
  constructor(a, b, c, d) {
    this.x = a;
    this.y = b;
    this.speedX = c;
    this.speedY = d;
  }
```

- De code van `update` herken je zo langzamerhand wel. Valt je op dat de code in een klasse zo algemeen mogelijk is? Het is zo geschreven dat het werkt voor waarden die je *nu nog niet weet*, maar er wel zijn als van deze klasse een object gemaakt wordt.
- Wanneer je een nieuw object van de klasse Mens wilt maken gebruik je het keyword `new`. Wanneer je `new` gebruikt, wordt automatisch de constructor aangeroepen. Voorbeeld:

```js
var mensA = new Mens(300, 600, 2 -3);
```

##### Termen en afspraken
- Een klasse is een blauwdruk voor een bepaald object. Objecten van dezelfde klasse hebben dezelfde attributen en methoden. De waarden die in de attributen zijn opgeslagen, zijn mogelijk wel voor ieder object verschillend.
- Als object `mensA` een object van de klasse `Mens` is, zeggen we ook wel dat `mensA` een instantie (Engels: *instance*) is van de klasse `Mens`. Een nieuw object maken heet ook wel 'instantiëren'
- Afspraken over de schrijfwijze: de naam van een klasse begint altijd met een hoofdletter. De naam van een object begint altijd met een kleine letter. Voor beide gebruik je [Camelcase](https://nl.wikipedia.org/wiki/CamelCase).


### Opdracht 4 – 25 random mensen maken. En wat doen die katten daar? 😼
In de theorie hierboven is een heel groot deel van de klasse `Mens` gegeven. Je maakt deze klasse verder af en gebruikt deze om 25 mensobjecten te maken die zich in onze simulatie bewegen.

- De klasse `Mens` bevat alle code die nodig is om de positie van een mensobject te updaten. Verwijder deze code uit `draw` en roep in plaats daarvan `update` aan op het betreffende object.
- De code die controleert of een mens tegen de rand van de simulatiewereld botst, moet ook verhuizen naar de klasse `Mens`. Breidt de methode `update` uit. Gebruik hiervoor de betreffende code die je in `draw` vindt en pas deze aan.
- De code die een mens tekent, is ook typisch iets wat bij de klasse Mens hoort. Maak een nieuwe methode `show` en teken hierin het vierkantje. Haal ook de constante `BREEDTE` weg. Maak hiervan een attribuut (gebruik dan `breedte`) en zet de waarde hiervan in de constructor op 50. Je hoeft hiervoor dus niet een argument aan de constructor toe te voegen. Verwijder de code die het vierkant tekent uit `draw` en roep in plaats daarvan `show` op de objecten aan.

We gaan nu de array `mensen` vullen met 25 random mens-objecten. Verwijder de code die je bij opdracht 3 in `setup` hebt gezet om handmatig 5 mens-objecten te maken. Schrijf in plaats daarvan deze code:

```js
// maak 25 random mensen
for (var teller = 0; teller < 25; teller++) {
  // we moeten ze niet te dicht bij de rand tekenen
  // om geen problemen met stuiteren te krijgen
  var ruimteTotRand = 50;
  
  // creëer random positie en snelheid
  var randomX = random(ruimteTotRand, width-ruimteTotRand);
  var randomY = random(ruimteTotRand, height-ruimteTotRand);
  var randomSpeedX = random(-5, 5);
  var randomSpeedY = random(-5, 5);

  // maak nieuw mensobject
  var nieuwMens = new Mens(randomX, randomY, randomSpeedX, randomSpeedY);
  
  // voeg mensobject toe aan array
  mensen.push(nieuwMens);
}
```

Deze code maakt 25 keer een nieuw mens-object met [random](https://p5js.org/reference/#/p5/random) waarden aan en voegt deze toe aan de array `mensen`. Zorg ervoor dat je deze regels begrijpt.
Bekijk het resultaat. Als het goed is, heb je nu 25 vierkantjes die door elkaar heen vliegen en tegen de randen stuiteren.

Het wordt tijd dat deze mensen elkaar kunnen besmetten. Het idee is dat mensen elkaar besmetten als ze elkaar in hun beweging overlappen.
- Geef de klasse `Mens` een nieuw attribuut `isBesmet`. Dit attribuut initialiseer je in de constructor op `false`. Je hoeft hiervoor dus geen argument aan je constructor toe te voegen.
- Voeg in `setup` deze regel code toe na de `for`-loop die de 25 mensen aanmaakt:

  ```js
  mensen[0].besmet = true;
  ```

  Hierdoor wordt alvast één mens besmet.
- Verander de code in de methode `show` zo, dat een mens als rood vierkant wordt getekend als deze besmet is. Als het goed is, wordt één vierkant nu rood getekend.
- Vervolgens maken we een methode die kan controleren of een ander mens-object overlap heeft met het object dat de methode uitvoert. Ga voor jezelf na of je de volgende zin begrijpt: *Omdat een mens getekend wordt als een vierkant, overlappen twee mensen elkaar als één van de hoeken van het ene vierkant zich binnen het andere vierkant bevindt.*
Onderstaande code bevat het begin van de methode `isOverlappend`. De methode controleert alleen voor de linkerbovenhoek. Voeg deze code toe aan de klasse `Mens` en voeg zelf de code toe die de andere drie hoeken van `this` controleert. Als je merkt dat het controleren van overlap moeilijk is, maak dan eerst de oefening [Smarter Button](https://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pc/challenge-smarter-button) van Khan Academy weer eens.

```js
isOverlappend(andereMens) {
  // zet teruggeefwaarde standaard op false
  var overlappend = false;

  // zet teruggeefwaarde op true als een hoekpunt overlapt met andereMens
  if (this.x >= andereMens.x && this.x <= andereMens.x + andereMens.breedte  &&
      this.y >= andereMens.y && this.y <= andereMens.y + andereMens.breedte) {
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

Met bovenstaande code worden alle mogelijke paren echter *twee keer* gecontroleerd. Kun je bedenken hoe dit komt? Stel, het eerste mensObject in de array `mensen` vergelijkt zijn positie met de andere mensen. Tot zover niets dubbels. Vervolgens gaat het tweede mensobject uit de array `mensen` zijn positie vergelijken met de andere mensen. De eerste waarmee de vergelijking plaatsvindt is het eerste object uit `mensen`. Er is echter al zojuist gecontroleerd of deze twee objecten overlap hadden. Dit was weliswaar andersom, maar dat maakt niet uit voor de uitkomst. Wanneer het laatste object uit `mensen` zijn positie gaat vergelijken, zijn al die vergelijkingen al eens gedaan. Om dit probleem op te lossen kunnen we mensen verlijken met mensen in de array `mensen` die een hogere index hebben, dus 'verder' staan in de lijst. Deze betere code heeft maar één wijziging nodig: in plaats van

```js
for (var j = 0; j < mensen.length; j++)
```

schrijf je

```js
for (var j = i+1; j < mensen.length; j++)
```

Op deze wijze is de eerste mensB altijd het *volgende* object in `mensen` en gaat de *loop* daarna netjes de array af.

#### Katten... 🐈

Helaas komen de gezondheidsinstanties erachter dat ook katten een rol spelen in de verspreiding van de ziekte. We zullen ook deze moeten opnemen in onze simulatie.
- De array `mensen` gaat ook dieren bevatten. Het is raar als deze naam hetzelfde blijft. Alle 'dingen' die iets in onze simulatie doen, heten 'actoren. Verander door je hele code de naam van de array `mensen` in `actoren`.
- Maak een nieuwe klasse met de naam `Kat`. Laat deze precies hetzelfde doen als `Mens`, maar met deze verschillen:
  - de breedte van een kat is 10 pixels
  - een niet-besmette kat is blauw in plaats van wit
  - een besmette kat is oranje in plaats van rood
- Voeg in `setup` na de 25 mensen ook 10 katten toe aan de simulatie. Geef de katten een random snelheid tussen -2 en 2.

### College 2 – Overerving, *super*, polymorfie en abstracte klassen
Een programmeur die objectgeoriënteerd programmeert, komt vroeg of laat tot de ontdekking dat er twee klassen zijn, die heel erg op elkaar lijken, zoals een mens en een kat in onze simulatie. Beide organismen hebben een positie en een snelheid en kunnen besmet raken. Als programmeur krijg je de rillingen van dubbele code, dus hier moet toch wel een oplossing voor zijn?
Dat klopt! Deze oplossing heet **overerving**. Wat houdt overerving in? Overerving houdt in dat je kunt aangeven dat de ene klasse alle attributen en methoden van een andere klasse erft, overneemt. Alsof je alle code kopieert en plakt. Op basis van die geërfde attributen en methoden kun je dan je klasse verder specificeren. De klasse die de attributen en methodes doorgeeft heet de **superklasse**. De klasse die ze erft, heet de **subklasse**.
Voordat we kijken naar de oplossing voor klassen als `Mens` en `Kat`, richten we ons eerst een andere actor. We gaan dit niet doorvoeren in onze simulatie maar houden een gedachte-experiment: Stel dat er in onze simulatie dokters bestaan die zieken in één keer kunnen genezen. Ze hebben zelf toegang tot een vaccin en zijn daarom immuun. Een dokter heeft alle eigenschappen van een mens, maar ziet er anders uit: hij heeft een rood kruis. Ook zouden we iets aan de code moeten veranderen die de besmetting 'regelt'. Hieronder zie je de code die nodig is om een dokter in het spel op te nemen:

```js
class Mens {
  x;
  y;
  speedX;
  speedY;
  breedte;

  isBesmet;

  const GEZOND = 0;
  const ZIEK   = 1;
  const IMMUUN = 2;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;

    this.breedte = 20;
    this.isBesmet = false;
  }

  update() {
    // stuiteren tegen linker- of rechterkant
    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }

    if (this.y <= 0 || this.y + this.breedte >= height) {
      speedY = this.speedY * -1;
    }

    // geef nieuwe positie
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }

  show() {
    noStroke();

    // kleur op basis van besmetting
    if (this.isBesmet) {
      fill(255, 0, 0);
    }
    else {
      fill(255, 255, 255);
    }
    
    // teken vierkant
    rect(x, y, breedte, breedte);
  }

  
  isOverlappend(andereMens) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;

    // zet teruggeefwaarde op true als een hoekpunt overlapt met andereMens
    if ( (this.x >= andereMens.x && this.x <= andereMens.x + andereMens.breedte  &&
          this.y >= andereMens.y && this.y <= andereMens.y + andereMens.breedte)
        ||
         (this.x + this.breedte >= andereMens.x && this.x + this.breedte <= andereMens.x + andereMens.breedte  &&
          this.y >= andereMens.y && this.y <= andereMens.y + andereMens.breedte)
        ||
         (this.x >= andereMens.x && this.x <= andereMens.x + andereMens.breedte  &&
          this.y + this.breedte >= andereMens.y && this.y + this.breedte <= andereMens.y + andereMens.breedte)
        ||
         (this.x + this.breedte >= andereMens.x && this.x + this.breedte <= andereMens.x + andereMens.breedte  &&
          this.y + this.breedte >= andereMens.y && this.y + this.breedte <= andereMens.y + andereMens.breedte)
       ) {
      overlappend = true;
    }

    // stuur de teruggeefwaarde terug
    return overlappend;
  }
}

class Dokter extends Mens {
  show() {
    // teken zoals de klasse Mens dat doet
    super.show();

    // en daarna nog een rood kruis
    strokeWeight(5);
    stroke(255, 0, 0);    // rood
    line(this.x + this.breedte / 2, this.y, this.x + this.breedte / 2, this.y + this.breedte);
    line(this.x, this.y + this.breedte / 2, this.x + this.breedte, this.y + this.breedte / 2);
  }
}
```

De code onder `draw` moeten we nu zo aanpassen, dat dokters niet besmet kunnen raken en zieke mensen genezen. Verander daarom deze code

```js
// check of er een besmetting optreedt
if (mensA.isBesmet || mensB.isBesmet) {
  // als er één besmet is, wordt ze allebei besmet
  // als ze allebei besmet zijn, verandert deze code niets.
  mensA.isBesmet = true;
  mensB.isBesmet = true;
}
```

in:

```js
// check of er een besmetting optreedt
if (mensA.isBesmet || mensB.isBesmet) {
  if (mensA instanceof Dokter || mensB instanceof Dokter) {
    // minimaal één van de mensen is dokter,
    // dus ze worden / blijven beide gezond
    mensA.isBesmet = false;
    mensB.isBesmet = false;
  }
  else {
    // geen van de mensen is dokter, dus
    // als er één besmet is, wordt ze allebei besmet
    // als ze allebei besmet zijn, verandert deze code niets.
    mensA.isBesmet = true;
    mensB.isBesmet = true;
  }  
}
```

Bestudeer de code hierboven. Er vallen een paar dingen op.
- De klasse `Dokter` geeft met het keyword `extends` aan dat het en subklasse van `Mens` is.
- De klasse `Dokter` bevat verder alleen de methode `show`. Wanneer op een dokterobject `show` wordt aangeroepen, wordt niet de methode `show` van de klasse `Mens` uitgevoerd, maar die van `Dokter`. Een methodes uit subklassen *overschaduwen* als het ware methodes met dezelfde naam uit de superklasse. Omdat we in dit geval *wel* gebruik willen maken van de fucntionaliteit van de methode `show` van `Mens`, zouden we die graag alsnog willen aanroepen. Dat doen we met `super.show`. Daardoor wordt bij het uitvoeren van `show` eerst getekend zoals de klasse `Mens` dat doet, en tekent de klasse `Dokter` daar nog wat bovenop.
- met de operator `instanceof` kun je controleren of een object een instantie is van een bepaalde klasse. Deze operator geeft `true` terug als het object een instantie van die specifieke klasse is, maar ook als het een subklasse daarvan is. Dus, stel dat `mensA` een dokterobject is, dan geeft `mensA instanceof Mens` ook `true` terug.

##### Iets over polymorfie?

##### Dubbele code van Kat
We hebben zojuist gezien dat we met `Dokter` een actor hebben gemaakt die vrijwel identiek was aan `Mens`. Door `Dokter` een subklasse van `Mens` te laten zijn, hoeven we maar een klein beetje `Dokter`-specifieke code te schrijven. De rest neemt de klasse over van `Mens`.
Maar hoe lossen we dit op voor de code die `Mens` en `Kat` hetzelfde hebben? Immers, `Mens` is niet een speciaal soort `Kat` of vice versa. Maar `Mens` en `Kat` zijn wel beide actors. Deze klasse bestaat nog niet, maar die kunnen we wel maken. Actor wordt dan de superklasse van zowel `Mens` als `Kat` en bevat alle attibuten en methodes die deze twee klassen gemeenschappelijk hebben. Je zou de klasse `Actor` dan kunnen zien als de basisklasse voor alle actoren in onze simulatie.

    plaatje van klassen

Welke onderdelen hebben `Mens` en `Kat` gemeenschappelijk?

- De constructors hebben beide code die `x`, `y`, `speedX` en `speedY` van waarden voorziet. De ingestelde breedte is echter voor beide anders.
- De methode `update` is voor beide klassen gelijk. Deze werkt de positie bij op basis van de snelheid en de randen.
- De methode `isOverlappend` is voor beide identiek.
- De methode `show` verschilt enorm. Hierin kunnen we geen gemeenschappelijke code destileren.

Dit geeft ons in ieder geval de volgende code voor klasse `Actor`:

```js
class Actor {
  x;
  y;
  speedX;
  speedY;
  breedte;

  isBesmet;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;

    this.isBesmet = false;
  }

  update() {
    // stuiteren tegen linker- of rechterkant
    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }

    if (this.y <= 0 || this.y + this.breedte >= height) {
      speedY = this.speedY * -1;
    }

    // geef nieuwe positie
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }

  show() {}

  isOverlappend(andereActor) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;

    // zet teruggeefwaarde op true als een hoekpunt overlapt met andereActor
    if ( (this.x >= andereActor.x && this.x <= andereActor.x + andereActor.breedte  &&
          this.y >= andereActor.y && this.y <= andereActor.y + andereActor.breedte)
        ||
         (this.x + this.breedte >= andereActor.x && this.x + this.breedte <= andereActor.x + andereActor.breedte  &&
          this.y >= andereActor.y && this.y <= andereActor.y + andereActor.breedte)
        ||
         (this.x >= andereActor.x && this.x <= andereActor.x + andereActor.breedte  &&
          this.y + this.breedte >= andereActor.y && this.y + this.breedte <= andereActor.y + andereActor.breedte)
        ||
         (this.x + this.breedte >= andereActor.x && this.x + this.breedte <= andereActor.x + andereActor.breedte  &&
          this.y + this.breedte >= andereActor.y && this.y + this.breedte <= andereActor.y + andereActor.breedte)
       ) {
      overlappend = true;
    }

    // stuur de teruggeefwaarde terug
    return overlappend;
  }

}
```

Merk het volgende op:
- De code van `update` is exact de code zoals die in `Mens` en `Kat` staat.
- De code van `isOverlappend` is hetzelfde, maar voor de juistheid is `andereMens` veranderd in `andereActor`.

We moeten echter ook een principiële keuze maken. Kijk daarom eens naar het volgende in de code:
- De code in de `constructor` is hetzelfde, maar `this.breedte` krijgt geen waarde mee.
- De methode `show` is leeg.

Deze code van `Actor` heeft tot gevolg dat we over een `Actor` weten dat deze in principe een breedte heeft en in pricipe met `show` zichzelf zou moeten kunnen tekenen. De klas `Actor` *zelf* bevat echter niet de code om getekend te worden. Hiermee bepalen we als programmeur dus dat je allerlei actors kunt maken en dat we de basisfunctionaliteit in `Actor` hebben gedefinieerd. We bepalen echter ook dat wij of andere programmeurs geen directe instanties van de klasse `Actor` in de simulatie mogen gebruiken. Zo'n superklasse die zelf niet bedoeld is om te instantiëren maar alleen gedeelde eigenschappen en functionaliteit definieert noemen we een **abstracte klasse**.

##### Let op
Je *kunt* goede redenen hebben om van `Actor` juist GEEN abstracte klasse te maken. Dit is *niet verplicht* als een klasse meerdere subklassen als `Mens` en `Kat` heeft. Om van `Actor` een *concrete* klasse te kunnen maken, moeten we ervoor zorgen dat deze invulling geeft aan *alle* gedeclareerde attributen en methoden:

- we geven `this.breedte` een waarde in de constructor
- we definiëren `show` met code die een 'actor in het algemeen' tekent zoals wij dat willen. (Tip: wel vierkant, want onze code in 'isOverlappend' gaat uit van een vierkant).

Wat vind jij het meest logisch? `Actor` als abstracte klasse of juist niet?


### Opdracht 5
In de theorie hierboven heb je de gezien hoe je een code van de superklasse `Actor` eruit ziet. Je gaat nu de code van `Mens` en `Kat` aanpassen.

- Maak van `Mens` en `Kat` superklassen van `Actor` en pas de code aan. Bedenk goed welke code weg mag en welke code veranderd moet worden. Eén methode blijft onveranderd. Weet je welke?
- Vervolgens gaan we de 'statistieken' van onze simulatie laten zien. De verantwoordelijkheid voor deze code ligt niet bij een van de actoren, maar bij het 'raamwerk' van de simulatie. Deze code schrijven we daarom in dit geval onder `draw`. Zorg dat je op die plek met behulp van de p5js-functie [text](#TODO) twee regels in de linkerbovenhoek plaatst: een met het aantal onbesmette actoren en een met het aantal besmette actoren. (Tip: hiervoor moet je de array `actoren` doorlopen met een `for`-loop).
- Iedere actor die eenmaal besmet is, wordt in onze simulatie nooit meer beter. We gaan daarvoor een teller maken die bij besmetting voor een `Mens` begint bij 500 en voor een `Kat` begint op 1000. Bij iedere aanroep van de methode `update` wordt de afteltimer 1 kleiner. Als de afteltimer 0 is, wordt het attribuut `isBesmet` weer op `false` gezet. Vraag jezelf hiervoor het volgende af:
  - in welke klasse definieer je `besmettelijkheidsTeller`?
  - hoe maak je het verschil in gedrag tussen `Mens` en `Kat`? Tip:
    - maak het eerst werkend voor één klasse.
    - Maak het daarna werkend voor de andere klasse.
    - Verplaats waar mogelijk dubbele code naar `Actor`.
  - wat gebeurt er met de `besmettelijkheidsTeller` als `update` wordt aangeroepen en de actor niet besmet?
  - wat gebeurt er met de `besmettelijkheidsTeller` als deze aan het aflopen is en er opnieuw contact is met een andere, besmette, actor?

### College 3 - Privé attributen, getters en setters, inkapseling, klasse variabelen

Je hebt op dit moment al echt een heel leuke simulator gebouwd! Wees blij met het resultaat dat je hebt bereikt. We gaan ontwikkelen 'm nog een kleine stukje verder en dan is het genoeg geweest.
Je zou je kunnen voorstellen dat een andere programmeur (collega?) een half jaar later jouw simulator verder uitbouwt. Deze collega heeft misschien geen idee van de exacte logica achter de `Dokter`klasse. Het zou met de huidige code zomaar kunnen dat die andere programmeur het attribuut `isBesmet` bij een dokter toch (per ongeluk) op `true` zet. Terwijl *wij* hadden bedacht dat dit juist niet zou moeten kunnen. We zouden hiervoor het attribuut `isBesmet` een beetje willen afschermen. Niet alles mag hier zomaar mee gedaan worden. Het uitlezen moet echter wel mogelijk zijn.
Op dezelfde manier kun je ook van `x`, `y` kunnen zeggen dat deze niet van buitenaf veranderd zouden moeten kunnen worden. De positie wordt helemaal autonoom door de klassen geregeld. En laten we `speedX`, `speedY`, `breedte` en `besmettelijkheidsTeller` dan ook maar helemaal voor rare programmeurs beschermen. We willen gewoonweg niet dat dit zomaar wordt aangepast. *Als* dit wordt aangepast, dan op onze voorwaarden. Je zou er toch niet aan moeten denken dat een juniorprogrammeur een de breedte van een mensobject verandert in een negatief getal 😱.
Dit kun je doen door een attribuut *private* te maken. Een attribuut waarvoor dat niet geldt, heet *public*. Hoe je precies een attribuut publiek of privé maakt, verschilt nogal per objectgeoriënteerde taal. Wel heeft bijna iedere objectgeoriënteerde taal hier mogelijkheden voor. In JavaScript werkt het niet het meest fraai van alle programmeertalen, maar het is wel heel duidelijk: een privéattribuut begin met een `#`. Dus wil je `isBesmet` een private maken, dan verander je door je hele code dit attribuut in `#isBesmet`.
Nu hebben we `isBesmet` mooi afgeschermd van onverantwoorde veranderingen, we hebben dit attribuut nu ook afgeschermd van uitlezen... Dat was niet de bedoeling want nu kunnen we onze statistieken niet meer maken. Om dat op te lossen maken we een nieuwe methode in `Actor`:
```js
getIsBesmet() {
  return this.#isBesmet
}
```
Omdat deze code binnen de klasse `Actor` staat, heeft deze *wel* toegang tot `isBesmet` en dan deze zo teruggegeven worden. Wil je van `mensA` de waarde van `isBesmet` weten? Dan gebruik je `mensA.getIsBesmet()`. (Toegegeven: 'getIsBesmet' is geen mooie code, maar om het niet moeilijker te maken houdt ik het even zo voorspelbaar mogelijk). Een methode die de waarde van een attribuut teruggeeft, heet een **getter**.
Dezelfde manier kun je nu gebruiken om van `x`, `y`, `speedX`, `speedY` en `breedte` een attribuut te maken dat *read-only* is.

Het zou kunnen dat je wilt dat je de positie van een actor toch van buitenaf moet kunnen aanpassen, maar dat dit wil een positie moet zijn *binnen de simulatie*. Je legt het schrijven van `x` en `y` dus beperkingen op. Dat kan zo:

```js
setX(x) {
  var validX = x;
  if (validX < 0) {
    validX = 0;
  }
  if (validX > width) {
    validX = width;
  }
  this.#x = validX;
}

setY(y) {
  // constrain zorgt er net zoals de code onder setX voor
  // dat een variabele binnen een bepaald bereik valt.
  this.#y = constrain(y, 0, height);
}
```
De code onder `setX` en `setY` werkt hetzelfde, maar bij `setY` wordt gebruik gemaakt van de p5js-functie [constrain](https://p5js.org/reference/#/p5/constrain), wat heel veel regels code scheelt! Wil je een actorobject een andere x-waarde geven? Dan kan dat zo: `mensA.setX(145)`
Een methode die schrijftoegang tot een attribuut regelt, heet een **setter**. De werkwijze waarbij je toegang tot de gegevens van een object beperkt en de toegang principieel bij het object zelf legt, heet **inkapseling** (Engels: *encapsulation*). Deze techniek is erg belangrijk bij objectgeoriënteerd programmeren voorkomt allerlei ongewenst gebruik van klassen.

Wanneer je de simulator runt, zul je erachter komen dat de besmettingen niet meer werken. Dit komt doordat de code in `update` die de besmettingen 'regelt', geen waarde in `#isBesmet` kan schrijven. We kunnen dit regelen door in `Actor` een *setter* `setIsBesmet(besmet)` te maken:
```js
setIsBesmet(besmet) {
   this.#isBesmet = besmet;
}
```
Maar dan hebben we opnieuw het probleem dat ook een dokterobject op deze manier besmet kan raken! Dit is echter gemakkelijk op te lossen. We definiëren *ook* in de klasse `Dokter` de methode `setIsBesmet(besmet)`, waardoor bij de aanroep hiervan op een dokterobject *deze* code wordt uitgevoerd:
```js
setIsBesmet(besmet) {
  this.#isBesmet = false
}
```


##### # TODO immuniteit (dus toestand en klasse variabelen)?




### opdracht 6
- In de theorie hierboven zijn een heel aantal veranderingen genoemd. Verander je code zo, dat de genoemde attributen *private* worden en ze de juiste *getters* en *setters* hebben.
- Alle code staat nog in één bestand. Dit is niet handig als je code gemakkelijk herbruikbaar wilt maken. Daarom doen we het volgende:
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
  

### College 4 - C++, polymorfie, voordelen en nadelen
Je hebt nu op een redelijk niveau objectgeoriënteerd leren programmeren in JavaScript. Zoals eerder gezegd heb je, misschien zonder dat je het wist, ook al in C++ object georiënteerd geprogrammeerd. Neem bijvoorbeeld het gebruik van de Seriële Communicatie tussen je Arduino en de computer. Een heel simpel Arduinoprogramma dat elke seconde een berichtje stuurt, ziet er zo uit:
```c++
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Dit is een bericht");

  delay(1000);
}
```

`Serial` is een object dat de Arduinosoftware aanmaakt om ons, eenvoudige programmeurs, toegang te geven tot seriële communicatie. Dit object heeft onder andere de methodes `begin` en `println`. (Hoewel Arduino zelf de naam van enkele objecten met een hoofdletter begint, houden wij ons aan de afspraak dat klassennamen met een hoofdletter beginnen en objectnamen met een kleine letter.)

En als je al eens een servomotor hebt aangestuurd, herken je hieronder ook objectgeoriënteerde code:
```c++
#include <Servo.h>

Servo mijnServo;

void setup() {
  mijnServo.attach(9);
}

void loop() {
  mijnServo.write(0);
  delay(500);

  mijnServo.write(180);
  delay(500);
}

```

Nu je weet hoe je klassen en objecten in JavaScript maakt, is het gemakkelijk om te leren hoe dit in C++ werkt. Hierbij maken we één belangrijke versimpeling, wanneer je klassen in losse bestanden aanlevert, moet dit verdeeld worden in twee bestanden. Eén bestand is de *header file*, eindigend op `.h`, die beschrijft welke attributen en methodes de klasse heeft en of het een superklasse heeft. Het andere bestand, eindigend op `.cpp`, bevat de programmeercode. **Wij stoppen de code van een klasse echter voor het gemak in één bestand.**

```cpp
#include <Arduino.h>

class Stoplicht {
  private:
    int toestand;
    int pinRood;
    int pinOranje;
    int pinGroen;

    void update() {
      if (this->toestand == this->ROOD) {
        digitalWrite(this->pinRood, HIGH);
      }
      else {
        digitalWrite(this->pinRood, LOW);
      }

      // je kunt het ook korter schrijven:
      digitalWrite(this->pinOranje, this->toestand == this->ORANJE);
      digitalWrite(this->pinGroen,  this->toestand == this->GROEN);
    }
    
  public:
    // constante klasse attributen
    static const int GROEN  = 0;
    static const int ORANJE = 1;
    static const int ROOD   = 2;
  
    Stoplicht(int newPinRood, int newPinOranje, int newPinGroen) {
      // neem de opgegeven pinNummers over
      this->pinRood = newPinRood;
      this->pinOranje = newPinOranje;
      this->pinGroen = newPinGroen;

      // maak van de pinnen OUTPUTs
      pinMode(this->pinRood, OUTPUT);
      pinMode(this->pinOranje, OUTPUT);
      pinMode(this->pinGroen, OUTPUT);

      this->toestand = GROEN;
    }

    void rood() {
      this->toestand = ROOD;
    }

    void oranje() {
      this->toestand = ORANJE;
    }

    void groen() {
      this->toestand = GROEN;
    }

    int getToestand() {
      return this->toestand;
    }
};
```

Je hebt gezien dat C++ ook gebruik maakt van de `.` om attributen en methodes van objecten aan te spreken. Bij `this` wordt echter `->` gebruik. Het voert te ver om precies uit te leggen waarom dit is. Het gebruik van `this` is in C++ echter niet verplicht. Je zult daarom ook vaker code tegenkomen zoals hieronder, waarbij de gewoonte is dat men private attributen laat beginnen met een `_`:

```cpp
#include <Arduino.h>

class Stoplicht {
  private:
    int _toestand;
    int _pinRood;
    int _pinOranje;
    int _pinGroen;

    void update() {
      if (_toestand == ROOD) {
        digitalWrite(_pinRood, HIGH);
      }
      else {
        digitalWrite(_pinRood, LOW);
      }

      // je kunt het ook korter schrijven:
      digitalWrite(_pinOranje, _toestand == ORANJE);
      digitalWrite(_pinGroen,  _toestand == GROEN);
    }
    
  public:
    // constante klasse attributen
    static const int GROEN  = 0;
    static const int ORANJE = 1;
    static const int ROOD   = 2;
  
    Stoplicht(int newPinRood, int newPinOranje, int newPinGroen) {
      // neem de opgegeven pinNummers over
      _pinRood = newPinRood;
      _pinOranje = newPinOranje;
      _pinGroen = newPinGroen;

      // maak van de pinnen OUTPUTs
      pinMode(_pinRood, OUTPUT);
      pinMode(_pinOranje, OUTPUT);
      pinMode(_pinGroen, OUTPUT);

      _toestand = GROEN;
    }

    void rood() {
      _toestand = ROOD;
      update();
    }

    void oranje() {
      _toestand = ORANJE;
      update();
    }

    void groen() {
      _toestand = GROEN;
      update();
    }

    int getToestand() {
      return _toestand;
    }
};
```

Je mag zelf kiezen welke stijl je het meest aanspreekt, als je maar consistent bent.

Het aanmaken van een stoplichtobject gebeurt als volgt:

`Stoplicht lichtA(9, 10, 11);`

Deze regel code roept de constructor van de klasse Stoplicht aan met 9, 10 en 11 als waarden voor de pinnen van resp. het rode, oranje en groene licht.

Een aantal zaken valt op:
- De toegang wordt geregeld met de gedeelten `public` en `private`.
- Niet alleen attributen, maar ook methoden kunnen private zijn. De enige publieke methoden zijn `rood`, `oranje` en `groen` en de getter van `_toestand`. De methode `update` is private. Het aanpassen van de status van de pinnen wordt gedaan naar aanleiding van het aanroepen van `rood`, `oranje` of `groen`, maar hoeft niet door 'een ander' te gebeuren.
- De constructor draagt de naam van de klasse.
- C++ is een sterk getypeerde (Engels: *strongly typed*) taal, dus attributen hebben een type en de methoden hebben een teruggeefwaarde (behalve de constructor)
- De `;` na de klasse declaratie is noodzakelijk.

Subclassing in C++ gaat (in eenvoudige vorm) vrijwel hetzelfde als in JavaScript:

```c++
class Lamp {
  private:
    bool _pin
    bool _isAan;
  public:
    Lamp(int newPin) {
      _isAan = false;
      pinMode(_pin, OUTPUT);
    }

    void zetAan() {
      _isAan = true;
    }

    void zetUit() {
      _isAan = false;
    }

    // voer in elke loop deze methode uit
    void update() {
      digitalWrite(_pin, _isAan);
    }
};

class KnipperLamp : public Lamp {
  private:
    int _wachtTijd;
    unsigned long _veranderTimer;
  public:
    KnipperLamp(int newPin, int newWachtTijd) : Lamp(newPin) {
      _wachtTijd = newWachtTijd;
      _veranderTimer = millis() + _wachtTijd;
    }

    void update() {
      if (millis() > _veranderTimer) {
        _isAan = !_isAan;
        _veranderTimer = millis() + _wachtTijd;
      }

      Lamp :: update();
    }

    int getWachtTijd() {
      return _wachtTijd;
    }
}
```

#### Polymorfisme
Stel, we hebben een aantal lampobjecten en knipperlampobjecten waarop we met behulp van een `for`-loop `update` willen aanroepen. De inhoud van een array moet in C++ van hetzelfde soort zijn, dus alleen `int`s, `float`s, of objecten van dezelfde klasse. Moeten we voor lampen en knipperlampen dan misschien twee afzonderlijke arrays maken? Nee, dat is niet noodzakelijk. Omdat `Knipperlamp` een subklasse is van `Lamp`, voldoet deze daarmee ook aan alle eigenschappen van Lamp. De volgende code is dus geldig:

```c++
// een array met zowel lamp- als knipperlampobjecten
Lamp lampen[] = { Lamp(3), KnipperLamp(9, 500), Lamp(5) }

void setup() {
  lampen[0].zetAan();
  lampen[1].zetAan();
  // de laatste lamp laten we uit
}

void loop() {
  for (int i = 0; i < lampen.length(); i++>) {
    Lamp l = lampen[i];
    l.update();
  }

}
```
Laten we stap voor stap de for-loop hierboven doorlopen:
We weten zeker dat er objecten in de array lampen objecten zitten die Lamp als klasse of superklasse hebben. We kunnen kunnen er dus vanuit gaan dat deze objecten de objecten en methoden hebben zoals die in Lamp staan.

###### i = 0
`l` wordt behandeld als lampobject en *is dat ook* (het eerste element van de array `lampen`). De aanroep `l.update()` laat de methode update van de klasse `Lamp` uitvoeren.

###### i = 1
`l` wordt behandeld als lampobject, maar *is eigenlijk een knipperlampobject* (het tweede element van de array `lampen`). De aanroep van `l.update()` laat de methode update van de klasse `KnipperLamp` uitvoeren.

###### i = 2
Gaat net zoals bij i=0, maar dan voor het laatste object van `lampen`.

De aanroep van `update` kan, omdat we zeker weten dat de objecten in de array `lampen` die methode hebben. Omdat één van die objecten echter een subklasse van `Lamp` is, (namelijk `KnipperLamp`) die een eigen implementatie van `update` heeft, wordt in dat geval *die* code uitgevoerd. In principe hoeven we hier echter helemaal geen rekening mee te houden. In de for-loop mag je uitgaan van lamp-objecten.

Wanneer een object / functie / methode in verschillende scenario's zich anders gedraagt, spreken we in de informatica van **polymorfisme**. Je komt dit ook op andere manieren tegen. De operator `+` kan in C++ zowel gebruikt worden om integers bij elkaar op te tellen, maar ook om strings aan elkaar vast te plakken.

### Opdracht 7
Maak met bovenstaande theorie in je achterhoofd, een beschrijving (d.w.z. een UML-schets en informele beschrijving van methoden) van de nieuwe klasse die:

- Twee LEDs om en om laat knipperen, dus als de waarschuwingslichten bij een spoorwegovergang. Deze lichten kunnen aan en uit gaan.

of:

- Een klasse die een knop uitleest. Bij het indrukken van de knop wisselt de status van het bebehorende object van `aan` naar `uit` en andersom.

### Opdracht 8
- Maak in C++ de klasse zoals je die hebt bedacht.
- Test de klasse uit
- Heb je gekozen voor de waarschuwingslichten -> kun je het zo maken dat je de snelheid kunt aanpassen?
- Heb je gekozen voor de knop -> kun je het zo maken dat de lichte storing die optreedt rond het indrukken van de knop weggefilterd wordt? Je noemt dit debouncen. Check deze [voorbeeldcode](https://www.arduino.cc/en/Tutorial/BuiltInExamples/Debounce) voor een idee.
