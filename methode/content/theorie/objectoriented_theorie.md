+++
title = "T8 Theorie objectgeoriënteerd programmeren"
weight = 8.1
hidden = true
+++

### Introductie
In de vierde klas heb je in JavaScript met behulp van de _library_ [p5.js](http://p5js.org) een spelletje gemaakt. Later leerde je de taal C++ om daarmee een microcontroller te programmeren. JavaScript en C++ zijn verschillende programmeertalen, toch lijken ze ook wat op elkaar: het programma dat je in deze talen maakt wordt stap voor stap uitgevoerd, commando na commando. Na ieder commando is de toestand waarin je programma zich bevindt weer een beetje anders.

Deze manier van programmeren heet _imperatief programmeren_. Een andere manier van programmeren is bijvoorbeeld [_declaratief programmeren_](http://wikipedia.org). Zo'n manier van programmeren heet een _programmeerparadigma_. Vanuit *imperatief programmeren* is in de loop der tijd een aparte paradigma onstaan: _objectgeoriënteerd programmeren_. De Engelse term hiervoor is _object oriented programming_, ofwel OOP. Heel veel programma's zijn gemaakt met behulp van dit paradigma. Zonder dat je het misschien hebt doorgehad, heb bij bij het werken met Arduino ook gebruik gemaakt van objectgeoriënteerd programmeren. In deze module gaan we leren dit paradigma bewust toe te passen.

Onderstaande uitleg gaat samen op met de [verwerkingsopdrachten](../objectoriented_verwerkingsopdrachten) die horen bij deze module.

### Hoofdstuk 1 – objecten, attributen, methoden, *this*, klassen 
##### Attributen
Je hebt in opdracht 2 van de verwerkingsopdrachten kennisgemaakt met objecten. Voor iedere mens maakte je een object aan met de eigenschappen `x`, `y`, `speedX` en `speedY`. Stel je maakt handmatig zo'n object en in plaats van deze in een array te plaatsen, ken je deze toe aan een variabele. Dat zou er dan zo uit kunnen zien:

```javascript
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


<div style="page-break-after: always"></div>

### Hoofdstuk 2 – Overerving, *super*, polymorfie en abstracte klassen
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

De code onder `draw` moeten we nu zo aanpassen, dat dokters niet besmet kunnen raken en juist zieke mensen genezen. Verander daarom deze code

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

##### Dubbele code van Kat
We hebben zojuist gezien dat we met `Dokter` een actor hebben gemaakt die vrijwel identiek was aan `Mens`. Door `Dokter` een subklasse van `Mens` te laten zijn, hoeven we maar een klein beetje `Dokter`-specifieke code te schrijven. De rest neemt de klasse over van `Mens`.
Maar hoe lossen we dit op voor de code die `Mens` en `Kat` hetzelfde hebben? Immers, `Mens` is niet een speciaal soort `Kat` of vice versa. Maar `Mens` en `Kat` zijn wel beide actors. Deze klasse bestaat nog niet, maar die kunnen we wel maken. Actor wordt dan de superklasse van zowel `Mens` als `Kat` en bevat alle attibuten en methodes die deze twee klassen gemeenschappelijk hebben. Je zou de klasse `Actor` dan kunnen zien als de basisklasse voor alle actoren in onze simulatie.

    @TODO: plaatje van klassen

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


<div style="page-break-after: always"></div>


### Hoofdstuk 3 - Privé attributen, getters en setters, inkapseling, klasse variabelen

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

<!-- ##### # TODO immuniteit (dus toestand en klasse variabelen)? -->


<div style="page-break-after: always"></div>


### Hoofdstuk 4 - C++, polymorfie, voordelen en nadelen
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