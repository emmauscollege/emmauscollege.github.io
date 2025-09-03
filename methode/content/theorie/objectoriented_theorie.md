+++
title = "T8 Theorie objectgeoriënteerd programmeren"
weight = 8.1
hidden = true
+++

### Introductie
In de vierde klas heb je in JavaScript met behulp van de _library_ [p5.js](http://p5js.org) een spelletje gemaakt. Later leerde je de taal C++ om daarmee een microcontroller te programmeren. JavaScript en C++ zijn verschillende programmeertalen, toch lijken ze ook wat op elkaar: het programma dat je in deze talen maakt wordt stap voor stap uitgevoerd, commando na commando. Na ieder commando is de toestand waarin je programma zich bevindt weer een beetje anders.

Deze manier van programmeren heet _imperatief programmeren_. Een andere manier van programmeren is bijvoorbeeld [_declaratief programmeren_](http://wikipedia.org). Zo'n manier van programmeren heet een _programmeerparadigma_. Vanuit *imperatief programmeren* is in de loop der tijd een aparte paradigma onstaan: _objectgeoriënteerd programmeren_. De Engelse term hiervoor is _object oriented programming_, ofwel OOP. Heel veel programma's zijn gemaakt met behulp van dit paradigma. Zonder dat je het misschien hebt doorgehad, heb bij bij het werken met Arduino ook gebruik gemaakt van objectgeoriënteerd programmeren. In deze module gaan we leren dit paradigma bewust toe te passen.

<!--
**Maak nu eerst de opfrisopdracht die in [GitHub Classroom](https://classroom.github.com) voor je klaarstaat**
-->

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
Stel dat we meerdere appel-objecten met dezelfde eigenschappen en functionaliteit willen maken. We zouden hiervoor deze code kunnen gebruiken:

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

Om deze twee problemen op te lossen, maken programmeurs gebruik van **klassen**. Een klasse is een soort *blauwdruk* van een groep objecten. We kunnen bijvoorbeeld een klasse `Appel` maken. Ieder appel-object heeft dan gegarandeert beschikking over alle attributen en methodes die in de klasse beschreven zijn.

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
De eerste methode is de zogenaamde `constructor`. Dit is een speciale methode die als doel heeft *een object te creëren* van deze klasse. De code in een constructor doet alles wat hiervoor nodig is. Omdat een appel in onze simulatie *minimaal* de eigenschappen `x`, `y` en `speed` moet hebben, is het het beste om deze drie waarden direct aan de constructor mee te geven. Zo krijg je altijd een object dat gelijk functioneel is.

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
- Wanneer je een nieuw object van de klasse `Appel` wilt maken gebruik je het keyword `new`. Wanneer je `new` gebruikt, wordt automatisch de constructor aangeroepen. Voorbeeld:

```js
var appel = new Appel(300, -50, 4);
```

##### Termen en afspraken
- Een klasse is een blauwdruk voor een bepaald object. Objecten van dezelfde klasse hebben dezelfde attributen en methoden. De waarden die in de attributen zijn opgeslagen, zijn mogelijk wel voor ieder object verschillend.
- Als object `appelA` een object van de klasse `Appel` is, zeggen we ook wel dat `appelA` een instantie (Engels: *instance*) is van de klasse `Appel`. Een nieuw object maken heet ook wel 'instantiëren'
- Afspraken over de schrijfwijze: de naam van een klasse begint altijd met een hoofdletter. De naam van een object begint altijd met een kleine letter. Voor beide gebruik je [Camelcase](https://nl.wikipedia.org/wiki/CamelCase).



<div style="page-break-after: always"></div>

### Hoofdstuk 2 – Overerving, *super*, polymorfie en abstracte klassen
Een programmeur die objectgeoriënteerd programmeert, komt vroeg of laat tot de ontdekking dat er twee klassen zijn, die heel erg op elkaar lijken, zoals een appel (+1 punt) en een rotte appel (-1 punt) in ons 'spelletje'. Beide spel-elementen hebben een positie, punten en een snelheid. Ook hebben ze allebei een constructor, een methode om de y-positie te updaten en één om zichzelf te tekenen. Als programmeur krijg je de rillingen van dubbele code, dus hier moet toch wel een oplossing voor zijn?

Dat klopt! Deze oplossing heet **overerving**. Wat houdt overerving in? Overerving houdt in dat je kunt aangeven dat de ene klasse alle attributen en methoden van een andere klasse erft, overneemt. Alsof je alle code kopieert en plakt. Op basis van die geërfde attributen en methoden kun je dan je klasse verder specificeren. De klasse die de attributen en methodes doorgeeft heet de **superklasse**. De klasse die ze erft, heet de **subklasse**.

Laten we eens kijken naar de code van `Appel` en `RotteAppel`:

```js
class Appel {
  x;
  y;
  speed;
  points;

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.points = 1
  }

  // werk de y-positie bij
  update() {
    this.y = this.y + this.speed;
  }

  // teken een appel als rood vierkant
  show() {
    noStroke();
    fill("red");
    rect(this.x, this.y, 20, 20);
  }
}
```

```js
class RotteAppel {
  x;
  y;
  speed;
  points;

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.points = -1
  }

  // werk de y-positie bij
  update() {
    this.y = this.y + this.speed;
  }

  // teken een rotte appel als bruin vierkant
  show() {
    noStroke();
    fill("red");
    rect(this.x, this.y, 20, 20);
  }
}
```

Welke onderdelen hebben `Appel` en `RotteAppel` gemeenschappelijk?

- De constructors hebben beide code die `x`, `y`, `speed`  van waarden voorziet. Het aantal punten verschilt.
- De methode `update` is voor beide klassen gelijk.
- De methode `show` verschilt.

Je zou `RotteAppel` als een 'speciaal soort `Appel`' kunnen zien. Als een class die alles heeft / kan wat Appel ook heeft, maar een beetje extra / anders is. Je kunt daarom `RotteAppel` alle eigenschappen van `Appel` geven, en alleen veranderen wat er nodig is:

```js
class RotteAppel extends Appel {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.points = -1;
  }

  // teken een rotte appel als gewone appel met een bruine plek
  show() {
    super.show();
    fill("brown");
    ellipse(this.x+10, this.y+10, 10, 10);
  }
}
```

Je ziet dat je met behulp van het keyword `extends` kunt aangeven wat de superclass is. De class erft alle attributen en methoden van de superclass. Die superclass kan overigens zelf ook weer een superclass hebben.

De class `RotteAppel` heeft geen eigen implementatie van de methode `update`. Als je `update` van een RotteAppel-object aanroept, wordt de methode `update` van de superclass gebruikt.

`RotteAppel` heeft wel een eigen implementatie van de methode `show`. Een rotte appel wordt getekend als een rood vierkant met een bruine plek. Het tekenen van een rood vierkant hebben we echter al in de class `Appel` beschreven. Zonde om opnieuw te doen! De regel `super.show()` betekent: voer de methode `show` uit van de superclass, dus zoals die beschreven staat in `Appel`. Als dat is gebeurd, voer dan nog wat extra tekencode uit.


Hetzelfde zien we bij de constructor. Een constructor van een subclass roept eerst de constructor van de superclass aan: `super(x, y, speed)`. Daarna komt constructorcode die specifiek voor deze subclass is.

**LET OP: het lijkt nu misschien alsof je *iedere* methode van een subclass moet beginnen met het aanroepen van diezelfde methode van de superclass. Het gebeurt inderdaad vaak, maar bedenk per geval of het echt nodig is.**

##### Abstracte klassen
Zie onderstaande code voor het mandje waarmee je de appels op kunt vangen:

```js
class Mand {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // teken een mand als bruine rechthoek
  show() {
    noStroke();
    fill("brown");
    rect(this.x, this.y, 150, 40);
  }

  // voor het gemak is code voor het bewegen van het mandje hier weggelaten
}
```

Je ziet dat `Mand` net zoals `Appel` de attributen x en y heeft, en ook een methode `show()`. Je kunt er ook hierbij voor kiezen om een `Mand` en `Appel` een gezamenlijke superklasse te geven. Deze superklasse is geen 'ding' meer in je spel, maar alleen bedoeld om gedeelde code maar op één plek te beschrijven. Zo'n klasse die niet bedoeld is om direct objecten van te maken, noem je een abstracte klasse. In het geval van `Appel` en `Mand` zou je dat zo kunnen doen:

```js
class SpelElement {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {}
}

class Mand extends SpelElement {
  constructor(x, y) {
    super(x,y);
  }

  // teken een mand als bruine rechthoek
  show() {
    noStroke();
    fill("brown");
    rect(this.x, this.y, 150, 40);
  }

  // voor het gemak is code voor het bewegen van het mandje hier weggelaten
}

class Appel extends SpelElement {
  speed;
  points;

  constructor(x, y, speed) {
    super(x, y);
    this.speed = speed;
    this.points = 1
  }

  // werk de y-positie bij
  update() {
    this.y = this.y + this.speed;
  }

  // teken een appel als rood vierkant
  show() {
    noStroke();
    fill("red");
    rect(this.x, this.y, 20, 20);
  }
}
```

Je ziet dat in de klasse `SpelElement` de methode `show()` wel is aangemaakt, maar geen code bevat. Op deze manier weet je zeker dat je op iedere subklasse van SpelElement de methode `show()` kunt aanroepen zonder foutmelding te krijgen. We laten het aan de subklasses om `show()` te overschrijven en daadwerkelijk iets te tekenen.

Nogmaals: in het spel zul je nooit objecten rechtstreeks van SpelElement maken. Dat gaat altijd via `Appel` of `Mand` of `RotteAppel`.


**In het vervolg maken we voor het gemak even geen gebruik meer van de superklasse `SpelElement`.**
<div style="page-break-after: always"></div>



### Hoofdstuk 3 - Privé attributen, getters en setters, inkapseling, klasse variabelen

Je hebt nu een aantal klassen om een grappige spelletje mee te kunnen maken. Zo'n spelletje kun je prima alleen maken. Maar heel veel software wordt gemaakt door meerdere mensen. Tegelijkertijd werken mensen aan hetzelfde project. Maar ook over de tijd gaan verschillende mensen bezig met hetzelfde stukje software.

Je zou je kunnen voorstellen dat een andere programmeur (collega?) een half jaar later jouw game verder uitbouwt. Het zou kunnen dat die collega niet goed doorheeft dat de punten van een `Appel`-object niet veranderd mogen worden. Maar op dit moment houdt niets hem / haar tegen om dit te doen bij een `Appel`-object met de naam `appeltje`:

```js
appeltje.points = 10;
```

Je zou hiervoor het attribuut `points` een beetje willen afschermen. Niet alles mag hier zomaar mee gedaan worden. Maar het uitlezen moet echter wel mogelijk zijn.

Op dezelfde manier kun je ook van `x`, `y` kunnen zeggen dat deze niet van buitenaf veranderd zouden moeten kunnen worden. De positie wordt helemaal autonoom door de klassen geregeld. En laten we `speed` dan ook maar helemaal voor rare programmeurs beschermen. We willen gewoonweg niet dat dit zomaar wordt aangepast. *Als* dit wordt aangepast, dan op onze voorwaarden. Je zou er toch niet aan moeten denken dat een juniorprogrammeur met een negatief getal voor `x` een appel links buiten het scherm plaatst 😱.

Het afschermen van attributen kun je doen door een attribuut *private* te maken. Een attribuut waarvoor dat niet geldt, heet *public*. Hoe je precies een attribuut publiek of privé maakt, verschilt nogal per objectgeoriënteerde taal. Wel heeft bijna iedere objectgeoriënteerde taal hier mogelijkheden voor. In JavaScript werkt het niet het meest fraai van alle programmeertalen, maar het is wel heel duidelijk: een privéattribuut begin met een `#`. Dus wil je `points` private maken, dan verander je door je hele code dit attribuut in `#points`.

Nu hebben we `points` mooi afgeschermd van onverantwoorde veranderingen, we hebben dit attribuut nu ook afgeschermd van uitlezen... Dat was niet de bedoeling want nu kunnen we onze statistieken niet meer maken. Om dat op te lossen maken we een nieuwe methode in `Appel`:

```js
getPoints() {
  return this.#points;
}
```
Omdat deze code binnen de klasse `Appel` staat, heeft deze *wel* toegang tot `points` en dan deze zo teruggegeven worden. Wil je van `appeltje` de waarde van `points` weten? Dan gebruik je `appeltje.getPoints()`. Een methode die de waarde van een attribuut teruggeeft, heet een **getter**.
Dezelfde manier kun je nu gebruiken om van `x`, `y` en `speed` een attribuut te maken dat *read-only* is:

```js
class Appel {
  #x;
  #y;
  #speed;
  #points;

  constructor(x, y, speed) {
    this.#x = x;
    this.#y = y;
    this.#speed = speed;
    this.#points = 1
  }

  // werk de y-positie bij
  update() {
    this.#y = this.#y + this.#speed;
  }

  // teken een appel als rood vierkant
  show() {
    noStroke();
    fill("red");
    rect(this.#x, this.#y, 20, 20);
  }

  // getters voor x, y, speed en points
  getX() {
    return this.#x;
  }

  getY() {
    return this.#y;
  }

  getSpeed() {
    return this.#speed;
  }

  getPoints() {
    return this.#points;
  }
}
```

Het zou kunnen dat je wilt dat je de speed van een appel toch van buitenaf moet kunnen aanpassen, maar dat je wilt voorkomen dat iemand de speed een negatieve waarde geeft (dan zou dat `Appel`-object omhoog gaan). Je legt het schrijven van `speed` dus beperkingen op. Wanneer de gewenste nieuwe snelheid groter of gelijk is aan 0, dan wordt dat de nieuwe snelheid van het `Appel`-object. Maar als de gewenste snelheid negatief is, dan moet de nieuwe snelheid 0 worden. In code doe je dat met een nieuwe methode:

```js
// setter voor speed
setSpeed(speed) {
  if (speed >= 0) {
    this.#speed = speed;
  }
  else {
    this.#speed = 0;
  }
}
```

Je zult nu ook de code in de constructor moeten vervangen om te voorkomen dat je bij het aanmaken van een nieuw `Appel`-object nog *wel* een negatieve snelheid kunt meegeven:

```js
constructor(x, y, speed) {
  this.#x = x;
  this.#y = y;
  this.setSpeed(speed);
  this.#points = 1
}
```

Een methode die schrijftoegang tot een attribuut regelt, heet een **setter**. De werkwijze waarbij je toegang tot de gegevens van een object beperkt en de toegang principieel bij het object zelf legt, heet **inkapseling** (Engels: *encapsulation*). Deze techniek is erg belangrijk bij objectgeoriënteerd programmeren voorkomt allerlei ongewenst gebruik van klassen.

Wanneer je in een superclass attributen private maakt, dan betekent dat ook dat een subclass alleen via getters en setters toegang heeft tot die attributen. Het uitlezen van `x` en `y` en het instellen van de punten in de klasse `RotteAppel` op onderstaande manier gaat dus problemen geven:

```js
class RotteAppel extends Appel {
  constructor(x, y, speed) {
    super(x, y, speed);
    this.#points = -1;       // --> DIT WERKT NU NIET MEER
  }

  // teken een rotte appel als gewone appel met een bruine plek
  show() {
    super.show();
    fill("brown");
    ellipse(this.#x+10, this.#y+10, 10, 10);  // --> DIT WERKT NU NIET MEER
  }
}
```

Het uitlezen van `x` en `y` kunnen we gemakkelijk via de getter doen, dus zo:

```js
ellipse(this.getX()+10, this.getY()+10, 10, 10);
```

Het instellen van de negatieve punten voor een `RotteAppel` kunnen we op verschillende manieren oplossen:
- je kunt een setter maken voor `points`, zodat je de punten zo kunen instellen: `this.setPoints(-1);`. Maar dat betekent ook dat iedereen op ieder willekeurig moment de punten van een `Appel`- of `RotteAppel`-object kan veranderen. En dat wilden we juist niet.
- je kunt ook de `constructor` aanpassen, zodat je daar ook de punten aan mee moet geven. Wat ook mogelijk is (maar zoek zelf na hoe dat moet als je dat interessant vindt) is dat je de punten als laatste argument van de constructor definieert. Je kunt deze dan evt. weglaten bij het aanmaken van een object (m.b.v. `new`) en in dat geval een standaard waarde geven (zoals 1 of -1). In de `RotteAppel`class geef je dan *wel* de specifieke waarde mee aan de superconstructor: `super(x, y, speed, -1)`

Ook dit is niet de oplossing die alles perfect dichttimmert. JavaScript biedt hiervoor helaas niet de mogelijkheden die je nodig hebt. Veel andere objectgeoriënteerde programeertalen bieden mogelijkheid wel. Je hebt dan bijvoorbeeld attributen die naast public, private ook protected kunnen zijn. Een protected attribuut is niet benaderbaar door code buitende klasse, (net zoals bij private), maar *wel* door code van subklasses van de klasse die eigenaar is van het attribuut.

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


#### Voor- en nadelen van objectgeoriënteerd programmeren

Objectgeoriënteerd programmeren is al tientallen jaren een populaire programmeerparadigma. Dit komt omdat deze manier van programmeren een aantal voordelen heeft die het erg aantrekkelijk maken.

##### Voordelen

###### Modulariteit
Objectgeoriënteerd programmeren vereist dat een programma in modules wordt opgebouwd. Dit al handig bij kleine programma's, maar werkt geweldig bij grote systemen die door hun omvang door uit verschillende deelsystemen bestaat die elk door andere personen of teams worden ontwikkeld. Bij objectgeoriënteerd programmeren kun je, als eenmaal is vastgelegd welke methode een klasse heeft, deze onafhankelijk van andere klassen implementeren.

###### Inkapseling
In eerdere vormen van programmeren was het deels mogelijk om een programma in modules te ontwikkelen, maar data was dan gemakkelijk toegankelijk voor allerlei delen van de programmacode, ook delen die de data niet zouden mogen veranderen.

Door *inkapseling* van gegevens binnen klasse is het gemakkelijker om deze gegevens te 'beschermen'. Ze zijn ontoegankelijk voor andere stukken programmeercode en daardoor is het gemakkelijker om regels over de data (zoals dat een waarde nooit kleiner mag zijn van 0) af te dwingen.

###### Flexibel hergebruik
Het is met behulp van objectgeoriënteerd programmeren erg gemakkelijk om code opnieuw te gebruiken in een andere context. Het principe van overerving speelt hierbij een belangrijke rol. Algemene eigenschappen van een klasse definieer je in een superklasse, specifieke eigenschappen in een subklasse. De subklassen gebruik je dan op verschillende plekken in je programma, of zelfs over meerdere programma's. Hierdoor hoef je de algemene code maar één keer te schrijven en hergebruik je deze code dus telkens als je een subklasse gebruikt.

##### Nadelen
Objectgeoriënteerd programmeren heeft echter ook een aantal nadelen. Of, beter gezegd: Er is ook wel wat af te dingen van dit mooie programmeerparadigma:

- Objectgeoriënteerd programmeren is moeilijk en kost veel tijd om een goed objectgeoriënteerd ontwerp te maken
- Het uitvoeren van een objectgeoriënteerd programma kost meer computerkracht en -geheugen dan de oudere manieren van programmeren. Er is sprake van meer overhead.
- Andere vormen van programmeren (zoals procedureel, functioneel of logisch programmeren) bieden voor bepaalde problemen een veel betere oplossing dan objectgeorienteerd programmeren.