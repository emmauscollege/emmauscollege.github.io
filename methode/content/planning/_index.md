+++
title = "Planning"
weight = 1
+++

Hier vind je de lesplanner, geplande toetsen en inlevermomenten, vakoverzicht en PTA's per jaarlaag.

<!--more-->


## Lesplanners

<!-- 
Tip voor het actualiseren van de lesplanners:
Edit het bronbestand in Excel (zie Emmauscollege gdrive/informatica/overzichten/lesplanners)
Knip en plak de juiste kolommen naar een editor
Vervang tab door | (kan in texteditor maar ook in Word: knip en plak een tab in het zoeken veld en type | in vervangen veld)
Knip en plak het resultaat hieronder
-->

Het is vandaag <span id="vandaag"></span>.
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/luxon@3.0.1/build/global/luxon.min.js"></script>
<script>
/* source: https://stackoverflow.com/questions/6117814/get-week-of-year-in-javascript-like-in-php */
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [weekNo];
}
const days =["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
const months =["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]
const date = new Date();
document.getElementById("vandaag").innerHTML = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, week ${getWeekNumber(date)}`;
console.log("done");
</script>

{{< tabs >}}

{{% tab name="4H" %}}
Week|Theorieles (enkel uur)|Praktijkles (blokuur)
--|--|--
34|intro|
35|[T1 Uitleg HTML tags ](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 2 intro to CSS](https://informatica.emmauscollege.nl/theorie/webdesign/)
36|[T1 Uitleg CSS selectors en properties ](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 4 CSS text properties](https://informatica.emmauscollege.nl/theorie/webdesign/)
37|[T1 Uitleg boxmodel](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 6 CSS layout](https://informatica.emmauscollege.nl/theorie/webdesign/)
38|[T1 Uitleg floats](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 9 Further learning](https://informatica.emmauscollege.nl/theorie/webdesign/)
39|[T1 Uitleg wireframes](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 1 eerste wijziging gemaakt](https://informatica.emmauscollege.nl/opdrachten/website/)
40|[T1 Uitleg client-server](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 2 menu + vier lege pagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
41|[T1 Uitleg intro security](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
42|[T1 Uitleg intellectueel eigendom](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
43|**Herfstvakantie**|
44|[T2 Uitleg bits & IA gestart](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 4 inhoud en plaatjes hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
45|[T2 Uitleg BIN & IA t/m 1](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 5 layout subpagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
46|**TW1: Toets 4H-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Uitleg HEX & IA t/m 2](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 6 inhoud en plaatjes subpagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
49|[T2 Uitleg kleuren + plaatjes & IA t/m 3](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 7 kleuren](https://informatica.emmauscollege.nl/opdrachten/website/)
50|[T2 Uitle tekst + geluid + video & IA t/m 6](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 8 perfectioneren](https://informatica.emmauscollege.nl/opdrachten/website/)
51|[T2 Uitleg compressie + bestanden & IA t/m 8](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 9 eyecathers](https://informatica.emmauscollege.nl/opdrachten/website/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[Beeldbewerking](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 9 eyecathers](https://informatica.emmauscollege.nl/opdrachten/website/)
3|[Beeldbewerking](https://informatica.emmauscollege.nl/theorie/informatie/)|**PO 4H-IN-S04 website inleveren**
4|[T3 Uitleg programmeertalen](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 5 Animation basics](https://informatica.emmauscollege.nl/theorie/programmeren/)
5|[T3 Uitleg P5js](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 10 Functions](https://informatica.emmauscollege.nl/theorie/programmeren/)
6|[T3 Uitleg variabelen](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 13 Loopings](https://informatica.emmauscollege.nl/theorie/programmeren/)
7|[T3 Uitleg functies](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 15 Arrays](https://informatica.emmauscollege.nl/theorie/programmeren/)
8|[T3 Uitleg logica en if](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: eerste wijziging gemaakt](https://informatica.emmauscollege.nl/opdrachten/game/)
9|**Voorjaarsvakantie**|
10|[T3 Uitleg loops](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: speler beweegt](https://informatica.emmauscollege.nl/opdrachten/game/)
11|**TW2: Toets 4H-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T3 Uitleg lijsten](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: vijand](https://informatica.emmauscollege.nl/opdrachten/game/)
14|[T3 Uitleg nesten](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: botsingdetectie + afgaan](https://informatica.emmauscollege.nl/opdrachten/game/)
15|[T4 Uitleg stroomdiagrammen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: punten + gameoverscherm](https://informatica.emmauscollege.nl/opdrachten/game/)
16|[T4 Oefenen eenvoudige algoritmen 1/m 2](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: uitlegscherm (je hebt nu een speelbaar spel)](https://informatica.emmauscollege.nl/opdrachten/game/)
17|**Meivakantie **|
18|**Meivakantie **|
19|[T4 Oefenen eenvoudige algoritmen t/m 6](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](https://informatica.emmauscollege.nl/opdrachten/game/)
20|[T4 oefenen eenvoudige algoritmen t/m 8](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](https://informatica.emmauscollege.nl/opdrachten/game/)
21|[T4 oefenen eenvoudige algoritmen t/m 10](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: uitbreiding 1 af](https://informatica.emmauscollege.nl/opdrachten/game/)
22|[T4 Uitleg: bubble sort (geen leerdoel)](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](https://informatica.emmauscollege.nl/opdrachten/game/)
23|[Algoritmen, nader te bepalen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](https://informatica.emmauscollege.nl/opdrachten/game/)
24|[Algoritmen, nader te bepalen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|**PO 4H-IN-S05 game inleveren**
25|**TW3: Toets 4H-IN-S03** over T3 Programmeren + T4 Algoritmen|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="5H" %}}
Week|Theorieles (enkel uur)|Praktijkles (blokuur)
--|--|--
      
{{% /tab %}}

{{% tab name="4V" %}}
Week|Theorieles (enkel uur)|Praktijkles (blokuur)
--|--|--
Week|Les 1 theorie|Les 2+3 praktijk
34|intro|
35|[T1 Uitleg HTML tags ](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 2 intro to CSS](https://informatica.emmauscollege.nl/theorie/webdesign/)
36|[T1 Uitleg CSS selectors en properties ](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 4 CSS text properties](https://informatica.emmauscollege.nl/theorie/webdesign/)
37|[T1 Uitleg boxmodel](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 6 CSS layout](https://informatica.emmauscollege.nl/theorie/webdesign/)
38|[T1 Uitleg floats](https://informatica.emmauscollege.nl/theorie/webdesign/)|[T1 Khan t/m 9 Further learning](https://informatica.emmauscollege.nl/theorie/webdesign/)
39|[T1 Uitleg wireframes](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 1 eerste wijziging gemaakt](https://informatica.emmauscollege.nl/opdrachten/website/)
40|[T1 Uitleg client-server](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 2 menu + vier lege pagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
41|[T1 Uitleg intro security](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
42|[T1 Uitleg intellectueel eigendom](https://informatica.emmauscollege.nl/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
43|**Herfstvakantie**|
44|[T2 Uitleg bits & IA gestart](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 4 inhoud en plaatjes hoofdpagina](https://informatica.emmauscollege.nl/opdrachten/website/)
45|[T2 Uitleg BIN & IA t/m 1](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 5 layout subpagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
46|**TW1: Toets 4V-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Uitleg HEX & IA t/m 2](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 6 inhoud en plaatjes subpagina's](https://informatica.emmauscollege.nl/opdrachten/website/)
49|[T2 Uitleg kleuren + plaatjes & IA t/m 3](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 7 kleuren](https://informatica.emmauscollege.nl/opdrachten/website/)
50|[T2 Uitle tekst + geluid + video & IA t/m 6](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 8 perfectioneren](https://informatica.emmauscollege.nl/opdrachten/website/)
51|[T2 Uitleg compressie + bestanden & IA t/m 8](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 9 eyecathers](https://informatica.emmauscollege.nl/opdrachten/website/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[Beeldbewerking](https://informatica.emmauscollege.nl/theorie/informatie/)|[O1 Website stap 9 eyecathers](https://informatica.emmauscollege.nl/opdrachten/website/)
3|[Beeldbewerking](https://informatica.emmauscollege.nl/theorie/informatie/)|**PO 4V-IN-S04 website inleveren**
4|[T3 Uitleg programmeertalen](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 5 Animation basics](https://informatica.emmauscollege.nl/theorie/programmeren/)
5|[T3 Uitleg P5js](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 10 Functions](https://informatica.emmauscollege.nl/theorie/programmeren/)
6|[T3 Uitleg variabelen](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 13 Loopings](https://informatica.emmauscollege.nl/theorie/programmeren/)
7|[T3 Uitleg functies](https://informatica.emmauscollege.nl/theorie/programmeren/)|[T3 Khan t/m 15 Arrays](https://informatica.emmauscollege.nl/theorie/programmeren/)
8|[T3 Uitleg logica en if](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: eerste wijziging gemaakt](https://informatica.emmauscollege.nl/opdrachten/game/)
9|**Voorjaarsvakantie**|
10|[T3 Uitleg loops](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: speler beweegt](https://informatica.emmauscollege.nl/opdrachten/game/)
11|**TW2: Toets 4V-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T3 Uitleg lijsten](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: vijand](https://informatica.emmauscollege.nl/opdrachten/game/)
14|[T3 Uitleg nesten](https://informatica.emmauscollege.nl/theorie/programmeren/)|[O2 Game: botsingdetectie + afgaan](https://informatica.emmauscollege.nl/opdrachten/game/)
15|[T4 Uitleg stroomdiagrammen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: punten + gameoverscherm](https://informatica.emmauscollege.nl/opdrachten/game/)
16|[T4 Oefenen eenvoudige algoritmen 1/m 2](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: uitlegscherm (je hebt nu een speelbaar spel)](https://informatica.emmauscollege.nl/opdrachten/game/)
17|**Meivakantie **|
18|**Meivakantie **|
19|[T4 Oefenen eenvoudige algoritmen t/m 6](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](https://informatica.emmauscollege.nl/opdrachten/game/)
20|[T4 oefenen eenvoudige algoritmen t/m 8](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](https://informatica.emmauscollege.nl/opdrachten/game/)
21|[T4 oefenen eenvoudige algoritmen t/m 10](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: uitbreiding 1 af](https://informatica.emmauscollege.nl/opdrachten/game/)
22|[T4 Uitleg: bubble sort (geen leerdoel)](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](https://informatica.emmauscollege.nl/opdrachten/game/)
23|[Algoritmen, nader te bepalen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](https://informatica.emmauscollege.nl/opdrachten/game/)
24|[Algoritmen, nader te bepalen](https://informatica.emmauscollege.nl/theorie/algoritmen/)|**PO 4V-IN-S05 game inleveren**
25|**TW3: Toets 4V-IN-S03** over T3 Programmeren + T4 Algoritmen|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="5V" %}}
Week|Theorieles (enkel uur)|Praktijkles (blokuur)
--|--|--

{{% /tab %}}

{{% tab name="6V" %}}
Week|Theorieles (enkel uur)|Praktijkles (blokuur)
--|--|--
     
{{% /tab %}}

{{< /tabs >}}

## Toetsen en inlevermomenten
{{< tabs >}}

{{% tab name="4H" %}}
Datum        | Code     | Toestvorm.     | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |4H-IN-S01 | Digitale toets | [2.1 Web Design](https://informatica.emmauscollege.nl/theorie/webdesign/#leerdoelen)
 Zondag 22 jan 23:59|4H-IN-S04 | Praktische Opdracht | [3.1 Website](https://informatica.emmauscollege.nl/opdrachten/website/)
 Toetsweek 2 |4H-IN-S02 | Digitale toets | [2.2 Digitale Informatie](https://informatica.emmauscollege.nl/theorie/informatie/#leerdoelen) 
 Zondag 18 jun 23:59|4H-IN-S05 | Praktische Opdracht | [3.2 Game](https://informatica.emmauscollege.nl/opdrachten/game/)
 Toetsweek 3 |4H-IN-S03 | Digitale Toets | [2.3 Programmeren](https://informatica.emmauscollege.nl/theorie/programmeren/#leerdoelen) + [2.4 Algoritmen](https://informatica.emmauscollege.nl/theorie/algoritmen/#leerdoelen)  

{{% /tab %}}

{{% tab name="5H" %}}
Datum        | Code     | Toestvorm.     | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |5H-IN-S06 | Digitale toets | [T6 Robotica](https://informatica.emmauscollege.nl/theorie/robotica/#leerdoelen)
 Zondag xx 23:59|5H-IN-S08 | Praktische Opdracht | [O4 Robot](https://informatica.emmauscollege.nl/opdrachten/robot/)
 Zondag xx 23:59|5H-IN-S09 | Praktische Opdracht | [O3 Webshop](https://informatica.emmauscollege.nl/opdrachten/webshop/)
 Toetsweek 2 |5H-IN-S07 | Digitale toets | [T5 Databases](https://informatica.emmauscollege.nl/theorie/databases/#leerdoelen)  
      
{{% /tab %}}

{{% tab name="4V" %}}
Datum        | Code     | Toestvorm.     | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |4V-IN-S01 | Digitale toets | [2.1 Web Design](https://informatica.emmauscollege.nl/theorie/webdesign/#leerdoelen)
 Zondag 22 jan 23:59|4V-IN-S04 | Praktische Opdracht | [3.1 Website](https://informatica.emmauscollege.nl/opdrachten/website/)
 Toetsweek 2 |4V-IN-S02 | Digitale toets | [2.2 Digitale Informatie](https://informatica.emmauscollege.nl/theorie/informatie/#leerdoelen) 
 Zondag 18 jun 23:59|4V-IN-S05 | Praktische Opdracht | [3.2 Game](https://informatica.emmauscollege.nl/opdrachten/game/)
 Toetsweek 3 |4V-IN-S03 | Digitale Toets | [2.3 Programmeren](https://informatica.emmauscollege.nl/theorie/programmeren/#leerdoelen) + [2.4 Algoritmen](https://informatica.emmauscollege.nl/theorie/algoritmen/#leerdoelen) 

{{% /tab %}}

{{% tab name="5V" %}}
Datum        | Code     | Toestvorm.     | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |4V-IN-S06 | Digitale toets | [T7 Netwerken](https://informatica.emmauscollege.nl/theorie/netwerken/#leerdoelen)
 Zondag xx 23:59|4V-IN-S09 | Praktische Opdracht | [O3 Webshop](https://informatica.emmauscollege.nl/opdrachten/webshop/)
 Toetsweek 2 |4V-IN-S07 | Digitale toets | [T5 Databases](https://informatica.emmauscollege.nl/theorie/databases/#leerdoelen) 
 Zondag xx 23:59|4V-IN-S10 | Praktische Opdracht | [O4 Robot](https://informatica.emmauscollege.nl/opdrachten/robot/)
 Toetsweek 3 |4V-IN-S08 | Digitale Toets | [T6 Robotica](https://informatica.emmauscollege.nl/theorie/robotica/#leerdoelen) 

{{% /tab %}}

{{% tab name="6V" %}}
Datum        | Code     | Toestvorm.     | Stof
-------------|----------|----------------|-----
Toetsweek 1 |6V-IN-S09 | Digitale toets | [T8 Object Oriented Programming](https://informatica.emmauscollege.nl/theorie/objectoriented/#leerdoelen)
 Zondag xx 23:59|6V-IN-S11 | Praktische Opdracht | [T5 Eindopdracht Mania deel 1](https://informatica.emmauscollege.nl/opdrachten/knikkerbaan/)
 Zondag xx 23:59|6V-IN-S12 | Praktische Opdracht | [T5 Eindopdracht deel 2](https://informatica.emmauscollege.nl/opdrachten/knikkerbaan/)
 Toetsweek 2 |6V-IN-S10 | Digitale toets | [T9 security](https://informatica.emmauscollege.nl/theorie/security/#leerdoelen) 
     
{{% /tab %}}

{{< /tabs >}}

Advies voor inleveren van Praktische Opdrachten: Lever een bijna af concept in vóór de laatste les voor de deadline, als er dan iets misgaat dan kun je nog een vraag stellen in de laatste les!

## Vakoverzicht

![vakoverzicht havo](./vakoverzicht.png)     

## PTA

De leerlingen raden we aan om vooral te kijken naar het vakoverzicht en de toets- en inlevermomenten hierboven op deze web-pagina. Voor wie het echt wil weten, is hier een linkje naar ons [PTA in Excel](./PTA.xlsx), zoals we dat jaarlijks aanleveren aan de school.
