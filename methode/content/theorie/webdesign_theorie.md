+++
title = "T1. Web Design met HTML en CSS"
weight = 1.1
hidden = true
+++

<!-- ### Introductie
TODO: Schrijf introductie

### Hoofdstuk 1 – HTML tags

### Hoofdstuk 2 – CSS Selectors en Properties -->

### Hoofdstuk 3 – Het Boxmodel 
##### Inline vs Block elementen
In HTML bestaan er grofweg twee soorten elementen: block-elementen en inline-elementen.

Block-elementen beginnen altijd op een nieuwe regel en nemen standaard de volledige breedte van hun parent in beslag, ook al is de inhoud maar één woord. Je kunt block-elementen zien als de grote bouwstenen van je pagina. Voorbeelden zijn paragrafen (`<p>`), koppen (`<h1>–<h6>`), lijsten (`<ol>`, `<ul>`), en ook `<div>`. Binnen een block-element kun je zowel andere block-elementen als inline-elementen plaatsen.

Inline-elementen gedragen zich anders. Ze blijven gewoon in dezelfde regel staan en nemen alleen zoveel ruimte in als hun inhoud nodig heeft. Een link (`<a>`), een stukje vetgedrukte tekst (`<strong>`) of cursief (`<em>`) zijn inline. Inline-elementen zijn dus bedoeld om kleine stukjes tekst of inhoud te markeren binnen een lopende zin.

Het verschil tussen block en inline-elementen is belangrijk omdat het bepaalt of onderdelen van je pagina onder elkaar komen te staan of netjes naast elkaar doorlopen in een zin. Veel problemen komen voort uit het niet begrijpen van dit onderscheid.

###### Oefening 1 ($): 
Kopieer volgende HTML code [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) en duw op run

```html
<p>Dit is een <em>cursief</em> woord en dit is <strong>vetgedrukt</strong>.</p>
```

Vraag: welke tags zijn block en welke zijn inline? Waarom staan de cursieve en vetgedrukte woorden niet op een nieuwe regel?

###### Oefening 2 ($$): 
Kopieer volgende HTML code [hier](https://www.w3schools.com/html/tryit.asp?filename=tryhtml_editor) en duw op run

```html
<h1>Titel</h1>
<p>Introductie met <strong>belangrijke</strong> woorden en een <a href="#">link</a>.</p>
<div>Blok A</div>
<div>Blok B</div>
```

Vraag: Teken hoe de browser de tags van deze code rangschikt. Teken dit door over te tekenen waar elke tag verschijnt. Geef daarbij aan welke elementen block zijn en welke inline. Kun je uitleggen waarom de twee div’s onder elkaar verschijnen in plaats van naast elkaar?

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

zie je dat de paragraaf een block-element is. Daarin zit tekst en een inline-element (`<a>`), dat gewoon doorloopt in de regel. Onder de paragraaf staat een afbeelding (`<img>`). Standaard wordt een afbeelding behandeld als een inline-element, maar in de praktijk gedraagt hij zich vaak alsof hij zijn eigen blok vormt. Met CSS kun je hem expliciet block maken.

###### Oefening 3 ($): 
Teken de boxen van het eerste voorbeeld. Begin met de body als buitenste doos en werk naar binnen.

###### Oefening 4 ($$): 
Teken de structuur van het tweede voorbeeld en label elk element als block of inline. Leg uit waarom de link in dezelfde regel blijft staan en waarom de afbeelding onder de paragraaf verschijnt.

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


Hier krijgt elk `.card`-element buitenruimte van 16 pixels, binnenruimte van 12 pixels en een rand van 2 pixels.

Standaard telt de opgegeven breedte van een element alleen de content. Padding en border komen er nog bovenop. Met `box-sizing: border-box;` zorg je ervoor dat padding en border binnen de opgegeven breedte vallen, waardoor de berekening voorspelbaarder wordt.

Makkelijke oefening
Maak een paragraaf met een rand, padding en margin. Kijk in de browser wat er gebeurt als je box-sizing: border-box; toevoegt en een vaste breedte instelt.

Moeilijke oefening
Plaats twee div’s naast elkaar, beide met een breedte van 50% en wat padding en border. Waarom passen ze niet naast elkaar zonder af te breken? Pas de CSS aan zodat ze wel netjes naast elkaar blijven s