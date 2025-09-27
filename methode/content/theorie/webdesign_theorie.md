+++
title = "T1. Web Design met HTML en CSS"
weight = 1.1
hidden = true
+++

<!-- ### Introductie
TODO: Schrijf introductie met uitleg $ signs

### Hoofdstuk 1 – HTML tags

### Hoofdstuk 2 – CSS Selectors en Properties -->

### Hoofdstuk 3 – Het Boxmodel 
##### Inline vs Block elementen
In HTML bestaan er grofweg twee soorten elementen: block-elementen en inline-elementen.

Block-elementen beginnen altijd op een nieuwe regel en nemen standaard de volledige breedte van hun parent in beslag, ook al is de inhoud maar één woord. Je kunt block-elementen zien als de grote bouwstenen van je pagina. Voorbeelden zijn paragrafen (`<p>`), koppen (`<h1>–<h6>`), lijsten (`<ol>`, `<ul>`), en ook `<div>`. Binnen een block-element kun je zowel andere block-elementen als inline-elementen plaatsen.

Inline-elementen gedragen zich anders. Ze blijven gewoon in dezelfde regel staan en nemen alleen zoveel ruimte in als hun inhoud nodig heeft. Een link (`<a>`), een stukje vetgedrukte tekst (`<strong>`) of cursief (`<em>`) zijn inline. Inline-elementen zijn dus bedoeld om kleine stukjes tekst of inhoud te markeren binnen een lopende zin.

Het verschil tussen block en inline-elementen is belangrijk omdat het bepaalt of onderdelen van je pagina onder elkaar komen te staan of netjes naast elkaar doorlopen in een zin. Veel problemen komen voort uit het niet begrijpen van dit onderscheid.

###### Oefening 3.1 ($): 
Kopieer de onderstaande HTML code [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) en duw op run. Schrijf op welke tags block elementen zijn en welke inline elementen zijn? Waarom staan de cursieve en vetgedrukte woorden niet op een nieuwe regel?

```html
<p>Dit is een <em>cursief</em> woord en dit is <strong>vetgedrukt</strong>.</p>
```

###### Oefening 3.2 ($$): 
Kopieer onderstaande HTML code [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) en duw op run. Teken hoe de browser de tags van deze code rangschikt. Teken dit door over te tekenen waar elke tag verschijnt, welke tags verschijnen in de box van een andere? Geef daarbij aan welke elementen block zijn en welke inline. Kun je uitleggen waarom de twee div’s onder elkaar verschijnen in plaats van naast elkaar?

```html
<h1>Titel</h1>
<p>Introductie met <strong>belangrijke</strong> woorden en een <a href="#">link</a>.</p>
<div>Blok A</div>
<div>Blok B</div>
```

##### Boxen tekenen en nesting
Een webpagina bestaat uit een structuur van boxen die in elkaar genest zijn. Elke tag is een doosje en sommige doosjes zitten weer in andere doosjes. Dit noemen we de parent-childrelatie. Het `body`-element is bijvoorbeeld de parent van alle zichtbare elementen.

Neem de volgende code:

```html
<body>
  <p>Een paragraaf.</p>
  <ol>
    <li>Eerste punt</li>
    <li>Tweede punt</li>
  </ol>
</body>
```

De body bevat twee children: een paragraaf (`<p>`) en een geordende lijst (`<ol>`). De lijst zelf bevat weer twee list-items (`<li>`). Als je dit tekent, begin je met een grote doos voor de body. Binnen die doos plaats je een doos voor de paragraaf en een doos voor de lijst. Binnen de lijst-doos komen weer twee kleinere dozen voor de list-items.

Soms worden block- en inline-elementen gecombineerd. In dit voorbeeld:

```html
<p>Een paragraaf <a href="#">met link</a> is hier.</p>
<img src="..." alt="..." style="width:50%; height:auto;">
```

Zie je dat de paragraaf een block-element is. Daarin zit tekst en een inline-element (`<a>`), dat gewoon doorloopt in de regel. Onder de paragraaf staat een afbeelding (`<img>`). Standaard wordt een afbeelding behandeld als een inline-element, maar in de praktijk gedraagt hij zich vaak alsof hij zijn eigen blok vormt. Met CSS kun je hem expliciet block maken.

###### Oefening 3.3 ($): 
Teken de boxen van het eerste voorbeeld. Begin met de body als buitenste doos en werk naar binnen.

###### Oefening 3.4 ($$): 
Teken van onderstaande code eerst de stamboom en daarna teken je de boxen binnen de body tag. Onthoud dat elk child element volledig binnen de parent valt, en dat block elementen de volledige breedte innemen en inline enkel de breedte die ze nodig hebben.

```html
<!DOCTYPE html>
<html>
  ...
  <body>
    <p>Een paragraaf <a href="..."> met link </a> is hier. </p>
    <img src="..." alt="..."  style="width:50%; height:auto;">
    <p>Een paragraaf. </p>
    <ol>
      <li>Eerste punt</li>
      <li>Tweede punt</li>
      <li> <ul>
        <li> Een extra sub punt </li>
      </ul> </li>
    </ol>
  </body>
</html>
```

##### Onderdelen van een box
Elke box in HTML en CSS heeft vier lagen. Binnenin bevindt zich de content, de tekst of afbeelding die je ziet. Rondom de content zit de padding, dit is de ruimte tussen de inhoud en de rand van de box. De border vormt de rand zelf en daarbuiten zit de margin, de ruimte tussen deze box en de volgende box.

Een voorbeeld in CSS:

```css
.card {
  margin: 16px;
  padding: 12px;
  border: 2px solid black;
}
```

Hier krijgt elk `.card`-element buitenruimte van 16 pixels, binnenruimte van 12 pixels en een rand van 2 pixels. Standaard telt de opgegeven breedte van een element enkel de content. Padding, border en margin worden nog eens toegevoegd aan deze opgegeven breedte.

###### Oefening 3.5 ($): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) twee paragrafen met een rand, padding en margin. Stel dan de achtergrondkleur in. Schrijf op wat het verschil tussen de resultaten van actergrond kleur bij het gebruik van padding en margin is.

###### Oefening 3.6 ($$): 
Plak de onderstaande code [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor). Schrijf volgende zaken neer 
- Hoe breed is de content. 
- Hoe breed is de hele box/border van het element 
- Hoe breed is het element in totaliteit (hoe dicht kan een ander element erlangs komen).

```html
<div class="box">Inhoud</div>
```

```css
.box {
  width: 200px;
  height: 100px;
  background: lightblue;   /* content */
  padding: 20px;           /* ruimte binnen de box */
  border: 5px solid red;   /* rand */
  margin: 30px;            /* ruimte buiten de box */
}

```


##### Vreemde gevallen
Het boxmodel kent enkele uitzonderingen die voor verwarring zorgen. Verticale marges op inline-elementen werken bijvoorbeeld niet zoals je zou verwachten. Inline-elementen volgen de line-height en niet de normale marges.

Een ander veelvoorkomend verschijnsel is margin collapsing. Wanneer twee block-elementen onder elkaar staan, wordt de ruimte tussen hen niet berekend door beide marges op te tellen. In plaats daarvan wordt alleen de grootste marge toegepast. Collapsing van de marges gebeurt alleen als er niks tussen de marges zit. Zodra er een scheiding aanwezig is (een rand, padding of inhoud), telt de browser de marges wél gewoon op.

Stel je hebt deze code:

```css
.a { margin-bottom: 30px; }
.b { margin-top: 50px; }
```

Dan is de afstand tussen `.a` en `.b` geen 80 pixels, maar slechts 50 pixels. Zolang er geen inhoud, padding of border is.

###### Oefening 3.7 ($): 
Maak twee paragrafen, de eerste met `margin-bottom: 30px;`, de tweede met `margin-top: 50px;`. Hoeveel ruimte er werkelijk tussen de paragrafen zit en leg uit waarom.

###### Oefening 3.8 ($$): 
Probeer margin collapsing te voorkomen. Geef de parent bijvoorbeeld een padding-top: 1px; of een transparante border-top. Experimenteer [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) en leg uit waarom de ruimte nu wel optelt.

##### Span en Div
Niet alle HTML-tags hebben een duidelijke betekenis. Soms heb je een neutrale container nodig. Daarvoor bestaan `<div>` en `<span>`.

Een `<div>` is een block-element zonder semantiek. Het wordt vaak gebruikt om grotere stukken content te groeperen of een lay-out te structureren. Een `<span>` is een inline-element zonder betekenis, bedoeld om een stukje tekst apart te stylen.

Voorbeelden:

```html
<p>Dit is <span class="highlight">belangrijk</span>.</p>
```

```css
.highlight { background: yellow; font-weight: bold; }
```

```html
<div class="halve-breedte">
  <p>Eerste paragraaf</p>
  <p>Tweede paragraaf</p>
</div>
```

```css
.halve-breedte { width: 50%; margin: 0 auto; }
```

###### Oefening 3.9 ($): 
Maak een zin waarin je één woord rood en vet maakt met behulp van een span en CSS. Schrijf je code daarvoor op (enkel de tags voor dit stukje zijn genoeg, geen standaard structuur met `<html>` en `<body>` nodig).

###### Oefening 3.10 ($$): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) een `<div>` die een stukje tekst en een afbeelding samen groepeert, en geef die div een rand en achtergrondkleur met CSS. Schrijf je code daarvoor op (enkel de tags voor dit stukje zijn genoeg, geen standaard structuur met `<html>` en `<body>` nodig).


### Hoofdstuk 4 – Floats
##### Standaard gedrag: verticale plaatsing
Wanneer je een aantal divs of paragrafen in je HTML zet, worden deze altijd onder elkaar weergegeven. Zelfs als je ze een vaste breedte van bijvoorbeeld 300 pixels geeft, blijven ze gewoon in een verticale stapel staan. Dit komt doordat block-elementen standaard de volledige breedte claimen.

###### Oefening 4.1 ($): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) drie divs met elk een verschillende achtergrondkleur en een vaste breedte van 200px. Zet er tekst in en kijk in de browser. Verklaar waarom ze nog steeds onder elkaar verschijnen.

###### Oefening 4.2 ($$): 
Geef diezelfde drie divs een breedte van 200px en een hoogte van 100px. Zet de parent-div op 700px breed. Leg uit waarom de drie blokken toch niet naast elkaar komen te staan, ook al is er technisch gezien genoeg ruimte.

##### Horizontale plaatsing met float
Met de eigenschap `float` kun je dit gedrag doorbreken. Zet je bijvoorbeeld op een div `float: left;` `width: 300px;`, dan schuift deze div naar links en neemt alleen de opgegeven breedte in beslag. De volgende div met `float: left;` schuift er direct naast, zolang er genoeg ruimte in de parent is. Op die manier kun je meerdere blokken horizontaal naast elkaar zetten.

```html
<div class="box">Blok A</div>
<div class="box">Blok B</div>
<div class="box">Blok C</div>
```

```css
.box {
  float: left;
  width: 300px;
}
```

###### Oefening 4.3 ($): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) drie divs van 150px breed en 150px hoog en gebruik `float: left;`. Controleer of ze netjes naast elkaar komen te staan. Schrijf op waarom dit gebeurd.

###### Oefening 4.4 ($$): 
Voeg een vierde div toe. Stel de parent-div in op 450px breed. Beschrijf wat er gebeurt met de vierde div en waarom.

##### Clear gebruiken
Float heeft een belangrijk gevolg: een element dat erna komt, ziet de gefloatte elementen vaak niet meer in de normale flow. Hierdoor kan tekst of een volgende paragraaf vreemd om de blokken heen lopen. Met de eigenschap `clear` kun je dit corrigeren.
- `clear: left;` zorgt dat een element onder alle floats links wordt geplaatst.
- `clear: right;` doet hetzelfde voor floats rechts.
- `clear: both;` reset zowel links als rechts.

```css
p {
  clear: both;
}
```

Zo krijg je weer een nette scheiding tussen de gefloatte blokken en de rest van de content. De browser plaatst float elementen net alsof ze zweven (vandaar de naam), en de rest van de boxen gaat gewoon verder alsof die float er niet is. Alleen door clear toe te passen, dwing je de volgende elementen weer onder de float.

###### Oefening 4.5 ($): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) drie divs met float: left; en zet er daarna een paragraaf onder. Bekijk in de browser hoe de paragraaf “naast” de divs komt te staan. Voeg daarna clear: both; toe aan de paragraaf en leg uit wat er verandert.

###### Oefening 4.6 ($$): 
Plaats nu vijf divs naast elkaar met `float: left;`. Zet na de derde div een extra paragraaf met clear: left;. Leg uit waar deze paragraaf verschijnt en waarom?

##### Float left en right combineren
Je kunt floats niet alleen links, maar ook rechts toepassen. Dit maakt het mogelijk om bijvoorbeeld één element links en een ander rechts uit te lijnen. De overige content stroomt dan in de ruimte die overblijft.

```css
.left { float: left; width: 300px; }
.right { float: right; width: 300px; }
```

###### Oefening 4.7 ($): 
Maak [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) een div links (200px breed) en een div rechts (200px breed). Zet in het midden een paragraaf met tekst. Schrijf op waar alles verschijnt en waarom?

###### Oefening 4.8 ($$): 
Maak een lay-out met drie kolommen: links een menu lijst, rechts een kleine extra info kolom, en in het midden een vak met inhoud. Schrijf op hoe je dit voor elkaar hebt gekregen.

##### Float bij een afbeelding
Een klassiek gebruik van float is bij afbeeldingen in tekst. Zonder float staat een afbeelding als een blok boven de tekst. Met `float: left;` schuift de afbeelding naar de linkerzijde en loopt de tekst er netjes naast door. Met `float: right;` gebeurt hetzelfde, maar dan aan de rechterkant.

###### Oefening 4.9 ($): 
Plaats een afbeelding boven een paragraaf. Voeg daarna `float: left;` toe aan de afbeelding en bekijk hoe de tekst naast de afbeelding doorloopt. Beschrijf waarom dit gebeurd.

###### Oefening 4.10 ($$): 
Maak een artikel met een titel, een afbeelding en drie paragrafen. Laat de afbeelding rechts boven verschijnen. Zorg dat de tekst mooi naast de afbeelding doorloopt, maar de volgende sectie van de pagina (bijvoorbeeld een credits paragraaf) netjes onder de afbeelding begint. Tip: gebruik `clear`. Schrijf je code daarvoor op (enkel de tags voor dit stukje zijn genoeg, geen standaard structuur met `<html>` en `<body>` nodig).