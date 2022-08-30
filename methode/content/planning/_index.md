+++
title = "Planning"
weight = 1
+++

Hier vind je de lesplanner, geplande toetsen en inlevermomenten, vakoverzicht en PTA's per jaarlaag.

<!--more-->


## Lesplanners

<!-- 
Tip voor het maken van nieuwe lesplanners:
Maak een bronbestand in Excel
Knip en plak de juiste kolommen naar een editor
Vervang tab door | (kan in texteditor maar ook in Word: knip en plak een tab in het zoeken veld en type | in vervangen veld)
Knip en plak het resultaat hieronder
-->

<!-- Zet de huidige datum en weeknummer op de pagina -->
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
35|[T1 Web Design](/theorie/webdesign/) Uitleg: HTML tags|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 2 intro to CSS
36|[T1 Web Design](/theorie/webdesign/) Uitleg: CSS selectors en properties|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 4 CSS text properties
37|[T1 Web Design](/theorie/webdesign/) Uitleg: boxmodel|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 6 CSS layout
38|[T1 Web Design](/theorie/webdesign/) Uitleg: floats|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 9 Further learning
39|[T1 Web Design](/theorie/webdesign/) Uitleg: wireframes|[T1 Web Design](/theorie/webdesign/) Oefentoets in Woots maken
40|[T2 Informatie](/theorie/informatie/) Uitleg: bits|[O1 Website](/opdrachten/website/) stap 1 eerste wijziging gemaakt
41|[T2 Informatie](/theorie/informatie/) Uitleg: BIN|[O1 Website](/opdrachten/website/) stap 2 menu + vier lege pagina's
42|[T2 Informatie](/theorie/informatie/) Uitleg: HEX|[O1 Website](/opdrachten/website/) stap 3 layout hoofdpagina
43|**Herfstvakantie**|
44|[T2 Informatie](/theorie/informatie/) Oefening: IA gestart|[O1 Website](/opdrachten/website/) stap 4 inhoud en plaatjes hoofdpagina
45|[T2 Informatie](/theorie/informatie/) Oefening: IA t/m 3|[O1 Website](/opdrachten/website/) stap 5 layout subpagina's
46|**TW1: Toets 4H-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Informatie](/theorie/informatie/) Oefening: IA t/m 6|[O1 Website](/opdrachten/website/) stap 6 inhoud en plaatjes subpagina's
49|[T2 Informatie](/theorie/informatie/) kleuren + plaatjes| [O1 Website](/opdrachten/website/) stap 7 kleuren
50|[T2 Informatie](/theorie/informatie/) tekst + geluid + video + compressie| [O1 Website](/opdrachten/website/) stap 8 perfectioneren
51|[T2 Informatie](/theorie/informatie/) Oefening: Beeldbewerking|[O1 Website](/opdrachten/website/) stap 9 eyecathers
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[T2 Informatie](/theorie/informatie/) Oefening: Beeldbewerking|**PO 4H-IN-S04 website inleveren**
3|[T3 Programmeren](/theorie/programmeren/) Uitleg: programmeertalen + P5JS|[T3 Oefening](/theorie/programmeren/) Khan t/m 5 Animation basics
4|[T3 Programmeren](/theorie/programmeren/) Uitleg: variabelen|[T3 Oefening](/theorie/programmeren/) Khan t/m 10 Functions
5|[T3 Programmeren](/theorie/programmeren/) Uitleg: functies|[T3 Oefening](/theorie/programmeren/) Khan t/m 11 Logic and if statements
6|[T3 Programmeren](/theorie/programmeren/) Uitleg: logica en if|[T3 Oefening](/theorie/programmeren/) Khan t/m 13 Loopings
7|[T3 Programmeren](/theorie/programmeren/) Uitleg: loops (les) arrays (thuis kijken)|[T3 Oefening](/theorie/programmeren/) Khan t/m 15 Arrays
8|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: stroomdiagrammen|[O2 Game](/opdrachten/game/) eerste wijziging gemaakt
9|**Voorjaarsvakantie**|
10|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: lijsten|[O2 Game](/opdrachten/game/) speler beweegt
11|**TW2: Toets 4H-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: nesten|[O2 Game](/opdrachten/game/) vijand
14|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 2|[O2 Game](/opdrachten/game/) botsingdetectie + afgaan
15|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 4|[O2 Game](/opdrachten/game/) punten + gameoverscherm
16|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 6|[O2 Game](/opdrachten/game/) uitlegscherm (je hebt nu een speelbaar spel)
17|**meivakantie**|
18|**meivakantie**|
19|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 8|[O2 Game](/opdrachten/game/) werk aan uitbreiding 1
20|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 10|[O2 Game](/opdrachten/game/) werk aan uitbreiding 1
21|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: bubble sort (geen leerdoel)|[O2 Game](/opdrachten/game/) uitbreiding 1 af
22|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: kortste pad (geen leerdoel)| **PO 4H-IN-S05 game inleveren**
23|nog niet bepaald|nog niet bepaald
24|nog niet bepaald|nog niet bepaald
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
49|[O4-Robot](/opdrachten/robot/)|**PO 5H-IN-S08 robot inleveren**
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
14|[O3 Webshop](/opdrachten/webshop/)|**PO 5H-IN-S08 webshop inleveren**
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
35|[T1 Web Design](/theorie/webdesign/) Uitleg: HTML tags|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 2 intro to CSS
36|[T1 Web Design](/theorie/webdesign/) Uitleg: CSS selectors en properties|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 4 CSS text properties
37|[T1 Web Design](/theorie/webdesign/) Uitleg: boxmodel|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 6 CSS layout
38|[T1 Web Design](/theorie/webdesign/) Uitleg: floats|[T1 Web Design](/theorie/webdesign/) Oefening: Khan t/m 9 Further learning
39|[T1 Web Design](/theorie/webdesign/) Uitleg: wireframes|[T1 Web Design](/theorie/webdesign/) Oefentoets in Woots maken
40|[T2 Informatie](/theorie/informatie/) Uitleg: bits|[O1 Website](/opdrachten/website/) stap 1 eerste wijziging gemaakt
41|[T2 Informatie](/theorie/informatie/) Uitleg: BIN|[O1 Website](/opdrachten/website/) stap 2 menu + vier lege pagina's
42|[T2 Informatie](/theorie/informatie/) Uitleg: HEX|[O1 Website](/opdrachten/website/) stap 3 layout hoofdpagina
43|**Herfstvakantie**|
44|[T2 Informatie](/theorie/informatie/) Oefening: IA gestart|[O1 Website](/opdrachten/website/) stap 4 inhoud en plaatjes hoofdpagina
45|[T2 Informatie](/theorie/informatie/) Oefening: IA t/m 3|[O1 Website](/opdrachten/website/) stap 5 layout subpagina's
46|**TW1: Toets 4H-IN-S01** over T1 Web Design|
47|**TW1**|
48|[T2 Informatie](/theorie/informatie/) Oefening: IA t/m 6|[O1 Website](/opdrachten/website/) stap 6 inhoud en plaatjes subpagina's
49|[T2 Informatie](/theorie/informatie/) kleuren + plaatjes| [O1 Website](/opdrachten/website/) stap 7 kleuren
50|[T2 Informatie](/theorie/informatie/) tekst + geluid + video + compressie| [O1 Website](/opdrachten/website/) stap 8 perfectioneren
51|[T2 Informatie](/theorie/informatie/) Oefening: Beeldbewerking|[O1 Website](/opdrachten/website/) stap 9 eyecathers
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[T2 Informatie](/theorie/informatie/) Oefening: Beeldbewerking|**PO 4H-IN-S04 website inleveren**
3|[T3 Programmeren](/theorie/programmeren/) Uitleg: programmeertalen + P5JS|[T3 Oefening](/theorie/programmeren/) Khan t/m 5 Animation basics
4|[T3 Programmeren](/theorie/programmeren/) Uitleg: variabelen|[T3 Oefening](/theorie/programmeren/) Khan t/m 10 Functions
5|[T3 Programmeren](/theorie/programmeren/) Uitleg: functies|[T3 Oefening](/theorie/programmeren/) Khan t/m 11 Logic and if statements
6|[T3 Programmeren](/theorie/programmeren/) Uitleg: logica en if|[T3 Oefening](/theorie/programmeren/) Khan t/m 13 Loopings
7|[T3 Programmeren](/theorie/programmeren/) Uitleg: loops (les) arrays (thuis kijken)|[T3 Oefening](/theorie/programmeren/) Khan t/m 15 Arrays
8|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: stroomdiagrammen|[O2 Game](/opdrachten/game/) eerste wijziging gemaakt
9|**Voorjaarsvakantie**|
10|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: lijsten|[O2 Game](/opdrachten/game/) speler beweegt
11|**TW2: Toets 4H-IN-S01** over T2 Informatie|
12|**TW2**|
13|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: nesten|[O2 Game](/opdrachten/game/) vijand
14|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 2|[O2 Game](/opdrachten/game/) botsingdetectie + afgaan
15|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 4|[O2 Game](/opdrachten/game/) punten + gameoverscherm
16|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 6|[O2 Game](/opdrachten/game/) uitlegscherm (je hebt nu een speelbaar spel)
17|**meivakantie**|
18|**meivakantie**|
19|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 8|[O2 Game](/opdrachten/game/) werk aan uitbreiding 1
20|[T4 Algoritmen](/theorie/algoritmen/) Oefenen: eenvoudige algoritmen t/m 10|[O2 Game](/opdrachten/game/) werk aan uitbreiding 1
21|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: bubble sort (geen leerdoel)|[O2 Game](/opdrachten/game/) uitbreiding 1 af
22|[T4 Algoritmen](/theorie/algoritmen/) Uitleg: kortste pad (geen leerdoel)| **PO 4H-IN-S05 game inleveren**
23|nog niet bepaald|nog niet bepaald
24|nog niet bepaald|nog niet bepaald
25|**TW3: Toets 4H-IN-S03** over T3 Programmeren + T4 Algoritmen|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="5V" %}}
Week|Theorie+Praktijk (les 1)|Praktijk (les 2)
--|--|--
34|intro|
35|[T7 Netwerken](/theorie/netwerken/) Uitleg: lagen deel 1|[T7 Netwerken](/theorie/netwerken/) Oefenen: 1. IA (met Filius)
36|[T7 Netwerken](/theorie/netwerken/) Uitleg: lagen deel 2|[T7 netwerken](/theorie/netwerken/) Oefenen: 2. IA (met Filius)
37|[T7 Netwerken](/theorie/netwerken/) Uitleg: ethernet|[T7 netwerken](/theorie/netwerken/) Oefenen: 3. IA (met Filius)
38|[T7 Netwerken](/theorie/netwerken/) Uitleg: IP|[T7 netwerken](/theorie/netwerken/) Oefenen: 4 + 5 IA (met Filius)
39|[T7 Netwerken](/theorie/netwerken/) Uitleg: RFC's|[T7 netwerken](/theorie/netwerken/) Oefentoets in Woots
40|[T5 Databases](/theorie/databases/) Uitleg: SELECT WHERE |[T5 Khan t/m 1 SQL Basics](/theorie/databases/)
41|[T5 Databases](/theorie/databases/) Uitleg: GROUP BY| [T5 Khan t/m 2 More advanced SQL-queries](/theorie/databases/)
42|[T5 Databases](/theorie/databases/) Uitleg: JOIN|[T5 Khan t/m halverwege 3 Relational Queries](/theorie/databases/)
43|**Herfstvakantie**|
44|[T5 Databases](/theorie/databases/) Uitleg: multipliciteiten- en strokendiagram|[T5 Khan t/m eind 3 Relational Queries ](/theorie/databases/)
45|[T5 Databases](/theorie/databases/) Uitleg: Ruimtedatabase voorbeeldopgave<br>Maak vooraf: Ruimtedatabase vragen met meerdere tabellen in Woots|[T5 Khan t/m 4 Modifying Databases](/theorie/databases/)
46|**TW1: Toets 5V-IN-S06** over T7 Netwerken|
47|**TW1**|
48|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
49|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
50|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
51|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
52|**Kerstvakantie**|
1|**Kerstvakantie**|
2|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
3|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
4|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
5|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
6|[O3 Webshop](/opdrachten/webshop/)|[O3 Webshop](/opdrachten/webshop/)
7|[O3 Webshop](/opdrachten/webshop/)|** 5V-IN-S09 webshop inleveren **
8|[T6 Robotica](/theorie/robotica) Intro en Arduino uitdelen|[T6 Arduinolessen 1 + 2](/theorie/robotica)
9|**Voorjaarsvakantie**|
10|[T6 Robotica](/theorie/robotica) Uitleg: microcontrollers deel 1|[T6 Arduinolessen 3 + 4](/theorie/robotica)
11|**TW2: Toets 5V-IN-S07** over T5 Databases|
12|**TW2**|
13|[T6 Robotica](/theorie/robotica) Uitleg: microcontrollers deel 2|[T6 Arduinolessen 5](/theorie/robotica)
14|[T6 Robotica](/theorie/robotica) Uitleg: toestandsdiagrammen deel 1|[T6 Toestandsdiagrammen opdracht 1](/theorie/robotica)
15|[T6 Robotica](/theorie/robotica) Uitleg: toestandsdiagrammen deel 2|[T6 Toestandsdiagrammen opdracht 2](/theorie/robotica)
16|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
17|**meivakantie**|
18|**meivakantie**|
19|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
20|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
21|[O4-Robot](/opdrachten/robot/)|[O4-Robot](/opdrachten/robot/)
22|[O4-Robot](/opdrachten/robot/)|** 5V-IN-S10 robot inleveren **
23|nog te bepalen|nog te bepalen
24|nog te bepalen|nog te bepalen
25|**TW3: Toets 5V-IN-S08** over T6 Robotica|
26|**TW3**|
27|**Zomervakantie**|

{{% /tab %}}

{{% tab name="6V" %}}
Week| Les 1 | Les 2
----|-------|------
34  | **T8 - Objectgeoriënteerd programmeren** <br/> introweek | 
35  | T8 - Praktijkles <br/>maak vooraf [opdracht 0](/theorie/objectoriented#opdracht-0) | T8 - Praktijkles
36  | T8 - Theorieles 1 <br/>maak vooraf [opdracht 1](/theorie/objectoriented#opdracht-1) en [opdracht 2](/theorie/objectoriented#opdracht-2) | T8 - Praktijkles
37  | T8 - Theorieles 2 <br/> maak vooraf [opdracht 3](/theorie/objectoriented#opdracht-3) | T8 - Praktijkles
38  | T8 - Theorieles 3 <br/> maak vooraf [opdracht 4](/theorie/objectoriented#opdracht-4) | T8 - Praktijkles
39  | T8 - Theorieles 4 <br/> maak vooraf [opdracht 5](/theorie/objectoriented#opdracht-5) | T8 - Praktijkles <br/> hierin maak je [opdracht 6](/theorie/objectoriented#opdracht-6) af
41 | Marble Mania / CanSat <br/>intro, repo, werkwijze | Marble Mania / CanSat <br/>uitleg techniek achter knikkerbaan
42 | Marble Mania / CanSat <br/>Start sprint 1: Basisfunctionaliteit | Marble Mania / CanSat <br/>sprint 1
43 | **Herfstvakantie**|
44 | Marble Mania / CanSat <br/>sprint 1 | Marble Mania / CanSat <br/>**Einde sprint 1:** demo en evaluatie
45 | Marble Mania / CanSat <br/>start sprint 2 | Marble Mania / CanSat <br/>sprint 2
46 | **TW1: Toets 6V-IN-S11** <br/> over T8 Object Oriented Programming|
47 | **TW1**|
48 | Marble Mania / CanSat <br/>sprint 2 | Marble Mania / CanSat <br/>**Einde sprint 2:** demo en evaluatie
49 | Marble Mania / CanSat <br/>start sprint 3: Minimal Viable Product <br/>*bespreken 6V-IN-S11* | Marble Mania / CanSat <br/>sprint 3
50 | Marble Mania / CanSat <br/>sprint 3 | Marble Mania / CanSat <br/>**Einde sprint 3:** demo en evaluatie
51 | Marble Mania / CanSat <br/>start sprint 4: Uitbreiding | Marble Mania / CanSat <br/>sprint 4
52 | **Kerstvakantie**|
1  | **Kerstvakantie**|
2  | Marble Mania / CanSat <br/> sprint 4 | Marble Mania / CanSat <br/>**Einde sprint 4:** demo en evaluatie
3  | Marble Mania / CanSat <br/> start sprint 5 : Perfectioneren | Marble Mania / CanSat <br/>sprint 5
4  | Marble Mania / CanSat <br/>sprint 5 | Marble Mania / CanSat <br/> **Einde sprint 5: demo eindproduct**
5  | **Nieuw theorie-onderdeel:** <br/>[T9 Security](/theorie/security/) – Theorieles | [T9 Security](/theorie/security/) – Praktijkles 
6  | [T9 Security](/theorie/security/) – Theorieles | [T9 Security](/theorie/security/) – Praktijkles
7  | [T9 Security](/theorie/security/) – Theorieles | [T9 Security](/theorie/security/) – Praktijkles
8  | [T9 Security](/theorie/security/) – Theorieles | [T9 Security](/theorie/security/) – Praktijkles
9  | **Voorjaarsvakantie**|
10 | [T9 Security](/theorie/security/) – Theorieles | [T9 Security](/theorie/security/) – Praktijkles
11  | **TW2: Toets 6V-IN-S12** <br/> over T9 Security |
12  | **TW2** |
13  | nader te bepalen | nader te bepalen
14  | *Bespreken 6V-IN-S11* | nader te bepalen
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
week 4 - 2e les | 6V-IN-S13 | Praktische Opdracht | [O5 Marble Mania](/opdrachten/knikkerbaan/) of [CanSat](https://esero.nl/paginas/doe-mee-aan-de-cansat-competitie)
Toetsweek 2 |6V-IN-S12 | Digitale toets | [T9 Security](/theorie/security/#leerdoelen) 
     
{{% /tab %}}

{{< /tabs >}}

Advies voor inleveren van Praktische Opdrachten: Lever een bijna af concept in vóór de laatste les voor de deadline, als er dan iets misgaat dan kun je nog een vraag stellen in de laatste les!

## Vakoverzicht

![vakoverzicht havo](./vakoverzicht.png)     

## PTA

De leerlingen raden we aan om vooral te kijken naar het vakoverzicht en de toets- en inlevermomenten hierboven op deze web-pagina. Voor wie het echt wil weten, is hier een linkje naar ons [PTA in Excel](./PTA.xlsx), zoals we dat jaarlijks aanleveren aan de school.
