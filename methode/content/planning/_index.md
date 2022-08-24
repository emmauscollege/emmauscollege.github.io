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
Week|Theorie (enkel uur)|Praktijk (blokuur)
--|--|--
34|intro|
35|[T1 Uitleg HTML tags ](/theorie/webdesign/)|[T1 Khan t/m 2 intro to CSS](/theorie/webdesign/)
36|[T1 Uitleg CSS selectors en properties ](/theorie/webdesign/)|[T1 Khan t/m 4 CSS text properties](/theorie/webdesign/)
37|[T1 Uitleg boxmodel](/theorie/webdesign/)|[T1 Khan t/m 6 CSS layout](/theorie/webdesign/)
38|[T1 Uitleg floats](/theorie/webdesign/)|[T1 Khan t/m 9 Further learning](/theorie/webdesign/)
39|[T1 Uitleg wireframes](/theorie/webdesign/)|[O1 Website stap 1 eerste wijziging gemaakt](/opdrachten/website/)
40|[T1 Uitleg client-server](/theorie/webdesign/)|[O1 Website stap 2 menu + vier lege pagina's](/opdrachten/website/)
41|[T1 Uitleg intro security](/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](/opdrachten/website/)
42|[T1 Uitleg intellectueel eigendom](/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](/opdrachten/website/)
43|**Herfstvakantie**|
44|[T2 Uitleg bits & IA gestart](/theorie/informatie/)|[O1 Website stap 4 inhoud en plaatjes hoofdpagina](/opdrachten/website/)
45|[T2 Uitleg BIN & IA t/m 1](/theorie/informatie/)|[O1 Website stap 5 layout subpagina's](/opdrachten/website/)
46|**TW1: Toets 4H-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Uitleg HEX & IA t/m 2](/theorie/informatie/)|[O1 Website stap 6 inhoud en plaatjes subpagina's](/opdrachten/website/)
49|[T2 Uitleg kleuren + plaatjes & IA t/m 3](/theorie/informatie/)|[O1 Website stap 7 kleuren](/opdrachten/website/)
50|[T2 Uitle tekst + geluid + video & IA t/m 6](/theorie/informatie/)|[O1 Website stap 8 perfectioneren](/opdrachten/website/)
51|[T2 Uitleg compressie + bestanden & IA t/m 8](/theorie/informatie/)|[O1 Website stap 9 eyecathers](/opdrachten/website/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[Beeldbewerking](/theorie/informatie/)|[O1 Website stap 9 eyecathers](/opdrachten/website/)
3|[Beeldbewerking](/theorie/informatie/)|**PO 4H-IN-S04 website inleveren**
4|[T3 Uitleg programmeertalen](/theorie/programmeren/)|[T3 Khan t/m 5 Animation basics](/theorie/programmeren/)
5|[T3 Uitleg P5js](/theorie/programmeren/)|[T3 Khan t/m 10 Functions](/theorie/programmeren/)
6|[T3 Uitleg variabelen](/theorie/programmeren/)|[T3 Khan t/m 13 Loopings](/theorie/programmeren/)
7|[T3 Uitleg functies](/theorie/programmeren/)|[T3 Khan t/m 15 Arrays](/theorie/programmeren/)
8|[T3 Uitleg logica en if](/theorie/programmeren/)|[O2 Game: eerste wijziging gemaakt](/opdrachten/game/)
9|**Voorjaarsvakantie**|
10|[T3 Uitleg loops](/theorie/programmeren/)|[O2 Game: speler beweegt](/opdrachten/game/)
11|**TW2: Toets 4H-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T3 Uitleg lijsten](/theorie/programmeren/)|[O2 Game: vijand](/opdrachten/game/)
14|[T3 Uitleg nesten](/theorie/programmeren/)|[O2 Game: botsingdetectie + afgaan](/opdrachten/game/)
15|[T4 Uitleg stroomdiagrammen](/theorie/algoritmen/)|[O2 Game: punten + gameoverscherm](/opdrachten/game/)
16|[T4 Oefenen eenvoudige algoritmen 1/m 2](/theorie/algoritmen/)|[O2 Game: uitlegscherm (je hebt nu een speelbaar spel)](/opdrachten/game/)
17|**meivakantie**|
18|**meivakantie**|
19|[T4 Oefenen eenvoudige algoritmen t/m 6](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](/opdrachten/game/)
20|[T4 oefenen eenvoudige algoritmen t/m 8](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](/opdrachten/game/)
21|[T4 oefenen eenvoudige algoritmen t/m 10](/theorie/algoritmen/)|[O2 Game: uitbreiding 1 af](/opdrachten/game/)
22|[T4 Uitleg: bubble sort (geen leerdoel)](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](/opdrachten/game/)
23|[Algoritmen, nader te bepalen](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](/opdrachten/game/)
24|[Algoritmen, nader te bepalen](/theorie/algoritmen/)|**PO 4H-IN-S05 game inleveren**
25|**TW3: Toets 4H-IN-S03** over T3 Programmeren + T4 Algoritmen|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="5H" %}}
Week|Theorie+Praktijk (les 1)|Praktijk (les 2)
--|--|--
34|intro|
35|[T6 Arduinolessen gestart](/theorie/robotica)|[T6 Arduinolessen 1](/theorie/robotica)
36|[T6 Uitleg microcontrollers deel 1](/theorie/robotica)|[T6 Arduinolessen 2](/theorie/robotica)
37|[T6 Uitleg microcontrollers deel 2](/theorie/robotica)|[T6 Arduinolessen 3](/theorie/robotica)
38|[T6 Uitleg toestandsdiagrammen deel 1](/theorie/robotica)|[T6 Arduinolessen 4](/theorie/robotica)
39|[T6 Uitleg toestandsdiagrammen deel 2](/theorie/robotica)|[T6 Arduinolessen 5](/theorie/robotica)
40|[T6 Toestandsdiagrammen opdracht 1](/theorie/robotica)|[T6 Toestandsdiagrammen opdracht 2](/theorie/robotica)
41|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
42|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
43|**Herfstvakantie**|
44|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
45|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
46|**TW1: Toets 5H-IN-S06** over T6 Robotica|
47|**TW1**|
48|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
49|[O4-Robot](/opdrachten/robot/)|[**PO 5H-IN-S08 robot inleveren**](/opdrachten/robot/)
50|[T5 Khan t/m 1 SQL Basics](/theorie/databases/)|[T5 Khan t/m halverwege 2 More advanced SQL-queries](/theorie/databases/)
51|[T5 uitleg SELECT WHERE](/theorie/databases/)|[T5 Khan t/m halverwege eind 2 More advanced SQL-queries](/theorie/databases/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[T5 uitleg GROUP BY](/theorie/databases/)|[T5 Khan t/m halverwege 3 Relational Queries](/theorie/databases/)
3|[T5 uitleg JOIN](/theorie/databases/)|[T5 Khan t/m eind 3 Relational Queries ](/theorie/databases/)
4|[T5 uitleg nader te bepalen](/theorie/databases/)|[T5 Khan t/m 4 Modifying Databases](/theorie/databases/)
5|[T5 Oefentoets eerste helft](/theorie/databases/)|[T5 Oefentoets tweede helft](/theorie/databases/)
6|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
7|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
8|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
9|**Voorjaarsvakantie**|
10|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
11|**TW2: Toets 5H-IN-S07** over T5 Databases|
12|**TW2**|
13|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
14|[O3 Webshop](/opdrachten/webshop/)|[**PO 5H-IN-S08 webshop inleveren**](/opdrachten/webshop/)
15|nader te bepalen|nader te bepalen
16|nader te bepalen|**informatica afgerond**
17|**meivakantie**|
18|**meivakantie**|**examencijfer informatica bekend**
19|**CE** |**geen CE voor informatica**
      
{{% /tab %}}

{{% tab name="4V" %}}
Week|Theorie (enkel uur)|Praktijk (blokuur)
--|--|--
Week|Les 1 theorie|Les 2+3 praktijk
34|intro|
35|[T1 Uitleg HTML tags ](/theorie/webdesign/)|[T1 Khan t/m 2 intro to CSS](/theorie/webdesign/)
36|[T1 Uitleg CSS selectors en properties ](/theorie/webdesign/)|[T1 Khan t/m 4 CSS text properties](/theorie/webdesign/)
37|[T1 Uitleg boxmodel](/theorie/webdesign/)|[T1 Khan t/m 6 CSS layout](/theorie/webdesign/)
38|[T1 Uitleg floats](/theorie/webdesign/)|[T1 Khan t/m 9 Further learning](/theorie/webdesign/)
39|[T1 Uitleg wireframes](/theorie/webdesign/)|[O1 Website stap 1 eerste wijziging gemaakt](/opdrachten/website/)
40|[T1 Uitleg client-server](/theorie/webdesign/)|[O1 Website stap 2 menu + vier lege pagina's](/opdrachten/website/)
41|[T1 Uitleg intro security](/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](/opdrachten/website/)
42|[T1 Uitleg intellectueel eigendom](/theorie/webdesign/)|[O1 Website stap 3 layout hoofdpagina](/opdrachten/website/)
43|**Herfstvakantie**|
44|[T2 Uitleg bits & IA gestart](/theorie/informatie/)|[O1 Website stap 4 inhoud en plaatjes hoofdpagina](/opdrachten/website/)
45|[T2 Uitleg BIN & IA t/m 1](/theorie/informatie/)|[O1 Website stap 5 layout subpagina's](/opdrachten/website/)
46|**TW1: Toets 4V-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Uitleg HEX & IA t/m 2](/theorie/informatie/)|[O1 Website stap 6 inhoud en plaatjes subpagina's](/opdrachten/website/)
49|[T2 Uitleg kleuren + plaatjes & IA t/m 3](/theorie/informatie/)|[O1 Website stap 7 kleuren](/opdrachten/website/)
50|[T2 Uitle tekst + geluid + video & IA t/m 6](/theorie/informatie/)|[O1 Website stap 8 perfectioneren](/opdrachten/website/)
51|[T2 Uitleg compressie + bestanden & IA t/m 8](/theorie/informatie/)|[O1 Website stap 9 eyecathers](/opdrachten/website/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[Beeldbewerking](/theorie/informatie/)|[O1 Website stap 9 eyecathers](/opdrachten/website/)
3|[Beeldbewerking](/theorie/informatie/)|**PO 4V-IN-S04 website inleveren**
4|[T3 Uitleg programmeertalen](/theorie/programmeren/)|[T3 Khan t/m 5 Animation basics](/theorie/programmeren/)
5|[T3 Uitleg P5js](/theorie/programmeren/)|[T3 Khan t/m 10 Functions](/theorie/programmeren/)
6|[T3 Uitleg variabelen](/theorie/programmeren/)|[T3 Khan t/m 13 Loopings](/theorie/programmeren/)
7|[T3 Uitleg functies](/theorie/programmeren/)|[T3 Khan t/m 15 Arrays](/theorie/programmeren/)
8|[T3 Uitleg logica en if](/theorie/programmeren/)|[O2 Game: eerste wijziging gemaakt](/opdrachten/game/)
9|**Voorjaarsvakantie**|
10|[T3 Uitleg loops](/theorie/programmeren/)|[O2 Game: speler beweegt](/opdrachten/game/)
11|**TW2: Toets 4V-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T3 Uitleg lijsten](/theorie/programmeren/)|[O2 Game: vijand](/opdrachten/game/)
14|[T3 Uitleg nesten](/theorie/programmeren/)|[O2 Game: botsingdetectie + afgaan](/opdrachten/game/)
15|[T4 Uitleg stroomdiagrammen](/theorie/algoritmen/)|[O2 Game: punten + gameoverscherm](/opdrachten/game/)
16|[T4 Oefenen eenvoudige algoritmen 1/m 2](/theorie/algoritmen/)|[O2 Game: uitlegscherm (je hebt nu een speelbaar spel)](/opdrachten/game/)
17|**meivakantie**|
18|**meivakantie**|
19|[T4 Oefenen eenvoudige algoritmen t/m 6](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](/opdrachten/game/)
20|[T4 oefenen eenvoudige algoritmen t/m 8](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 1](/opdrachten/game/)
21|[T4 oefenen eenvoudige algoritmen t/m 10](/theorie/algoritmen/)|[O2 Game: uitbreiding 1 af](/opdrachten/game/)
22|[T4 Uitleg: bubble sort (geen leerdoel)](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](/opdrachten/game/)
23|[Algoritmen, nader te bepalen](/theorie/algoritmen/)|[O2 Game: werk aan uitbreiding 2](/opdrachten/game/)
24|[Algoritmen, nader te bepalen](/theorie/algoritmen/)|**PO 4V-IN-S05 game inleveren**
25|**TW3: Toets 4V-IN-S03** over T3 Programmeren + T4 Algoritmen|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="5V" %}}
Week|Theorie+Praktijk (les 1)|Praktijk (les 2)
--|--|--
34|intro|
35|[T7 uitleg lagen](/theorie/netwerken/)|[T7 oefeneningen in IA met Filius](/theorie/netwerken/)
36|[T7 uitleg netwerken](/theorie/netwerken/)|[T7 netwerken](/theorie/netwerken/)
37|[T7 uitleg netwerken](/theorie/netwerken/)|[T7 netwerken](/theorie/netwerken/)
38|[T7 uitleg netwerken](/theorie/netwerken/)|[T7 netwerken](/theorie/netwerken/)
39|[T7 uitleg netwerken](/theorie/netwerken/)|[T7 netwerken](/theorie/netwerken/)
40|...|...
41|[T5 Khan t/m 1 SQL Basics](/theorie/databases/)|[T5 Khan t/m halverwege 2 More advanced SQL-queries](/theorie/databases/)
42|[T5 uitleg SELECT WHERE](/theorie/databases/)|[T5 Khan t/m halverwege eind 2 More advanced SQL-queries](/theorie/databases/)
43|**Herfstvakantie**|
44|[T5 uitleg GROUP BY](/theorie/databases/)|[T5 Khan t/m halverwege 3 Relational Queries](/theorie/databases/)
45|[T5 uitleg JOIN](/theorie/databases/)|[T5 Khan t/m eind 3 Relational Queries ](/theorie/databases/)
46|**TW1: Toets 5V-IN-S06** over T7 Netwerken|
47|**TW1**|
48|[T5 uitleg multipliciteiten- en strokendiagram](/theorie/databases/)|[T5 Khan t/m 4 Modifying Databases](/theorie/databases/)
49|[T5 Ruimtedatabase eerste helft](/theorie/databases/)|[T5 Ruimtedatabase tweede helft](/theorie/databases/)
50|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
51|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
3|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
4|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
5|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
6|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
7|[O3 Webshop](/opdrachten/webshop/)|[** 5V-IN-S09 webshop inleveren **](/opdrachten/webshop/)
8|[T6 Arduinolessen gestart](/theorie/robotica)|[T6 Arduinolessen 1](/theorie/robotica)
9|**Voorjaarsvakantie**|
10|[T6 Uitleg microcontrollers deel 1](/theorie/robotica)|[T6 Arduinolessen 2](/theorie/robotica)
11|**TW2: Toets 5V-IN-S07** over T5 Databases|
12|**TW2**|
13|[T6 Uitleg microcontrollers deel 2](/theorie/robotica)|[T6 Arduinolessen 3](/theorie/robotica)
14|[T6 Uitleg toestandsdiagrammen deel 1](/theorie/robotica)|[T6 Arduinolessen 4](/theorie/robotica)
15|[T6 Uitleg toestandsdiagrammen deel 2](/theorie/robotica)|[T6 Arduinolessen 5](/theorie/robotica)
16|[T6 Toestandsdiagrammen opdracht 1](/theorie/robotica)|[T6 Toestandsdiagrammen opdracht 2](/theorie/robotica)
17|**meivakantie**|
18|**meivakantie**|
19|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
20|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
21|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
22|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
23|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
24|[O4-Robot](/opdrachten/robot/)|[** 5V-IN-S10 robot inleveren **](/opdrachten/robot/)
25|**TW3: Toets 5V-IN-S08** over T6 Robotica|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="6V" %}}
Week| Les 1 | Les 2
----|-------|------
34  | **T8 - Objectgeoriënteerd programmeren** - introweek | 
35  | T8 - Theorieles 1 <br/> maak vooraf [opdracht 1](/theorie/objectoriented#opdracht-1) | T8 - Praktijkles <br/> maak vooraf [opdracht 2](/theorie/objectoriented#opdracht-2)
36  | T8 - Theorieles 2 <br/>maak vooraf [opdracht 3](/theorie/objectoriented#opdracht-3) | T8 - Praktijkles
37  | T8 - Theorieles 3 <br/> maak vooraf [opdracht 4](/theorie/objectoriented#opdracht-4) | T8 - Praktijkles
38  | T8 - Theorieles 4 <br/> maak vooraf [opdracht 5](/theorie/objectoriented#opdracht-5) | T8 - Praktijkles
39  | T8 - Theorieles 5 <br/> maak vooraf [opdracht 6](/theorie/objectoriented#opdracht-6) | T8 - Praktijkles <br/> hierin maak je opdracht 7 af
40  | T8 - Praktijkles <br/> maak vooraf [opdracht 7](/theorie/objectoriented#opdracht-7) | T8 - Eindles <br/> maak vooraf maak vooraf [opdracht 8](/theorie/objectoriented#opdracht-8)
41 | Marble Mania / CanSat - intro, taakverdeling, repository aanmaken, SCRUM | Marble Mania / CanSat - uitleg techniek achter knikkerbaan
42 | Marble Mania / CanSat <br/>**Start run 1:** Proof of concept / Primary mission | Marble Mania / CanSat – run 1
43 | **Herfstvakantie**|
44 | Marble Mania / CanSat – run 1 | Marble Mania / CanSat – run 1
45 | Marble Mania / CanSat – run 1 | Marble Mania / CanSat – **Einde run 1:** demo en retro
46 | **TW1: Toets 6V-IN-S11** over T8 Object Oriented Programming|
47 | **TW1**|
48 | Marble Mania / CanSat <br/>**Start run 2:** Minimal Viable Product | Marble Mania / CanSat – run 2
49 | Marble Mania / CanSat – run 2 & bespreken 6V-IN-S11 | Marble Mania / CanSat – run 2
50 | Marble Mania / CanSat – run 2 | Marble Mania / CanSat – **Einde run 2:** demo en retro
51 | Marble Mania / CanSat – **Start run 3:** Uitbreiding | Marble Mania / CanSat – run 3
52 | **Kerstvakantie**|
1  | **Kerstvakantie**|
2  | Marble Mania / CanSat – run 3 | Marble Mania / CanSat – run 3
3  | Marble Mania / CanSat – run 3 | Marble Mania / CanSat – **Einde run 3:** demo en retro
4  | Uitloop | Uitloop
5  | [T9 Security](/theorie/security/)|[T9 Security](/theorie/security/)
6  | [T9 Security](/theorie/security/)|[T9 Security](/theorie/security/)
7  | [T9 Security](/theorie/security/)|[T9 Security](/theorie/security/)
8  | [T9 Security](/theorie/security/)|[T9 Security](/theorie/security/)
9  | **Voorjaarsvakantie**|
10 | [T9 Security](/theorie/security/)|[T9 Security](/theorie/security/)
11  | **TW2: Toets 6V-IN-S12** over T9 Security |
12  | **TW2** |
13  | [T9 Security](/theorie/security/) - Capture the flag | [T9 Security](/theorie/security/) - Capture the flag
14  | Bespreken 6V-IN-S11 | nader te bepalen
15  | nader te bepalen | nader te bepalen
16  | nader te bepalen | **informatica afgerond**
17  | **Meivakantie** |
18  | **Meivakantie** | *examencijfer informatica bekend*
19  | **Start CE** | **geen CE voor informatica**

{{% /tab %}}

{{< /tabs >}}

## Toetsen en inlevermomenten
{{< tabs >}}

{{% tab name="4H" %}}
Datum        | Code     | Toetsvorm      | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |4H-IN-S01 | Digitale toets | [2.1 Web Design](/theorie/webdesign/#leerdoelen)
 Zondag 22 jan 23:59|4H-IN-S04 | Praktische Opdracht | [3.1 Website](/opdrachten/website/)
 Toetsweek 2 |4H-IN-S02 | Digitale toets | [2.2 Digitale Informatie](/theorie/informatie/#leerdoelen) 
 Zondag 18 jun 23:59|4H-IN-S05 | Praktische Opdracht | [3.2 Game](/opdrachten/game/)
 Toetsweek 3 |4H-IN-S03 | Digitale Toets | [2.3 Programmeren](/theorie/programmeren/#leerdoelen) + [2.4 Algoritmen](/theorie/algoritmen/#leerdoelen)  

{{% /tab %}}

{{% tab name="5H" %}}
Datum        | Code     | Toetsvorm      | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |5H-IN-S06 | Digitale toets | [T6 Robotica](/theorie/robotica/#leerdoelen)
 Zondag 11 dec 23:59|5H-IN-S08 | Praktische Opdracht | [O4 Robot](/opdrachten/robot/)
 Zondag 9 apr 23:59|5H-IN-S09 | Praktische Opdracht | [O3 Webshop](/opdrachten/webshop/)
 Toetsweek 2 |5H-IN-S07 | Digitale toets | [T5 Databases](/theorie/databases/#leerdoelen)  
      
{{% /tab %}}

{{% tab name="4V" %}}
Datum        | Code     | Toetsvorm      | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |4V-IN-S01 | Digitale toets | [2.1 Web Design](/theorie/webdesign/#leerdoelen)
 Zondag 22 jan 23:59|4V-IN-S04 | Praktische Opdracht | [3.1 Website](/opdrachten/website/)
 Toetsweek 2 |4V-IN-S02 | Digitale toets | [2.2 Digitale Informatie](/theorie/informatie/#leerdoelen) 
 Zondag 18 jun 23:59|4V-IN-S05 | Praktische Opdracht | [3.2 Game](/opdrachten/game/)
 Toetsweek 3 |4V-IN-S03 | Digitale Toets | [2.3 Programmeren](/theorie/programmeren/#leerdoelen) + [2.4 Algoritmen](/theorie/algoritmen/#leerdoelen) 

{{% /tab %}}

{{% tab name="5V" %}}
Datum        | Code     | Toetsvorm      | Stof
-------------|----------|----------------|-----
 Toetsweek 1 |5V-IN-S06 | Digitale toets | [T7 Netwerken](/theorie/netwerken/#leerdoelen)
 Zondag 19 feb 23:59|5V-IN-S09 | Praktische Opdracht | [O3 Webshop](/opdrachten/webshop/)
 Toetsweek 2 |5V-IN-S07 | Digitale toets | [T5 Databases](/theorie/databases/#leerdoelen) 
 Zondag 18 juni 23:59|5V-IN-S10 | Praktische Opdracht | [O4 Robot](/opdrachten/robot/)
 Toetsweek 3 |5V-IN-S08 | Digitale Toets | [T6 Robotica](/theorie/robotica/#leerdoelen) 

{{% /tab %}}

{{% tab name="6V" %}}
Datum        | Code     | Toetsvorm      | Stof
-------------|----------|----------------|-----
Toetsweek 1 | 6V-IN-S11 | Digitale toets | [T8 Objectgeoriënteerd Programmeren](/theorie/objectoriented/#leerdoelen)
week 3 - 1e les | 6V-IN-S13 | Praktische Opdracht | [O5 Marble Mania](/opdrachten/knikkerbaan/) of [CanSat](https://esero.nl/paginas/doe-mee-aan-de-cansat-competitie)
Toetsweek 2 |6V-IN-S12 | Digitale toets | [T9 Security](/theorie/security/#leerdoelen) 
     
{{% /tab %}}

{{< /tabs >}}

Advies voor inleveren van Praktische Opdrachten: Lever een bijna af concept in vóór de laatste les voor de deadline, als er dan iets misgaat dan kun je nog een vraag stellen in de laatste les!

## Vakoverzicht

![vakoverzicht havo](./vakoverzicht.png)     

## PTA

De leerlingen raden we aan om vooral te kijken naar het vakoverzicht en de toets- en inlevermomenten hierboven op deze web-pagina. Voor wie het echt wil weten, is hier een linkje naar ons [PTA in Excel](./PTA.xlsx), zoals we dat jaarlijks aanleveren aan de school.
