+++
title = "T8 Verwerkingsopdrachten"
weight = 8.2
hidden = true
+++

### Inleiding
Om te leren hoe je objectgeoriënteerd programmeert, gaan we stap voor stap een objecgeoriënteerd programma maken. We maken hiervoor een **epidemiesimulator** die visueel maakt hoe organismen elkaar kunnen besmetten met een ziekteverwekker. Tussen de opdrachten door vind je theorie over objectgeoriënteerd programmeren.


### Opdracht 0 - Klaar voor de start

#### Begrijp de code:
Bekijk in je browser wat de simulator nu al doet. Je ziet 25 'mensen', waarvan er één besmet is. Mensen kunnen elkaar nog niet besmetten.

De class `Mens` beschrijft de eigenschappen van een mens in onze simulator. Het wordt getekend als een vierkantje met een bepaalde kleur. Een mens heeft een bepaalde positie en snelheid, kan stuiteren tegen de randen en kan besmet zijn.

In `setup` worden 25 mens-objecten aangemaakt met random waarden. Deze objecten worden toegevoegd aan de array `mensen`. Bij het eerste element van de array wordt het attribuut `isBesmet` op true gezet.

In `draw` wordt netjes een wit vierkantje getekend met behulp van de waarden van `this.x`, `this.y` en `this.breedte`. Herinner je je nog dat de functie [`rect`](https://p5js.org/reference/#/p5/rect) een vierkant tekent met de linkerbovenhoek op de meegeven positie?


### Opdracht 1 - Maak een dokter

Voeg een dokter toe aan de simulatie. Een dokter is een speciaal soort mens. In deze opdracht zullen we alleen nog maar bezig zijn met het uiterlijk van de Dokter: wit met een rood kruis (+). Deze kun je tekenen als twee dikke lijnen, met behulp van [`line(x, y, w, h)`](https://p5js.org/reference/p5/line/).

Maak hiervoor onder de class `Mens` een nieuwe class `Dokter`. Pas de theorie van overerving zo goed mogelijk toe.
Voeg deze code toe aan het einde van de `setup`, om zo een dokter-object aan te maken en toe te voegen aan de array met mens-objecten.

```js
var dokter = new Dokter(400, 200, 5, 5);
mensen.push(dokter);
```
