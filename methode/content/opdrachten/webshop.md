+++
title = "O3. Webshop"
weight = 3
+++

Je gaat je eigen webshop maken!
<!--more-->

## Opdrachtbeschrijving
De opdracht in het kort is: Maak in groepjes van twee of drie je eigen webshop. Je gebruikt de startcode en breidt de database uit met jouw producten. De api en het website deel pas je aan waar dat nodig is.

{{% expand "Inschrijven" %}}
Je schrijft je in via het onderstaande formulier dat de docent aanlevert. 
- 4hin1, link naar formulier volgt
- 4hin2, link naar formulier volgt
- 4vin1, link naar formulier volgt
- 4vin2, link naar formulier volgt
{{% /expand %}}

{{% expand "Kies wat je gaat verkopen" %}}
Je bent vrij om zelf te kiezen wat je in je webshop gaat verkopen. Je docent moet goedkeuren wat je verkoopt. Je kunt denken aan kleding, producten die te maken hebben met je idool, zelfgemaakte sieraden, tweedehandsspullen enzovoort. Het hoeven niet persé bestaande producten te zijn. 
{{% /expand %}}

{{% expand "Werkwijze" %}}
- Je maakt deze opdracht in een team van twee personen. De docent geeft aan hoe de teams gemaakt worden. Je bepaalt zelf hoe je het werk binnen je team verdeelt, zolang iedereen een gelijkwaardige bijdrage levert. Je krijgt één cijfer per team, maar de docent kan hiervan afwijken als teamleden geen gelijkwaardige bijdrage hebben geleverd. 
- Je krijgt van de docent startcode voor deze opdracht. Deze staat klaar in een repo op GitHub. Er is één repo per team. 
- Je maakt code in Replit (havo) of Gitpod (vwo). Elk teamlid heeft zijn eigen Replit of Gitpod omgeving.
- Elke week (liefst vaker) slaan alle teamleden hun tussentijdse werk op in de repo op GitHub. Zo zorgen jullie ervoor dat de laatste werkende versie van jullie game steeds op GitHub staat.
- Deze opdracht maak je alsof het een echt project is. Je maakt eerst een planning. Daarna kijk je wekelijks of je nog volgens plan loopt. Als je niet volgens plan loopt, dan stuur je bij. In de les word je hiermee geholpen, maar uiteindelijk moet jij zorgen dat je op tijd klaar bent en een goed resultaat oplevert. 
{{% /expand %}}

{{% expand "Beoordeling" %}}
Het cijfer dat je voor je PO krijgt wordt vanuit verschillende invalshoeken bepaald: 
- De technische kwaliteit van de database (vwo 40%, havo 60%)
- De technische kwaliteit van de aanpassingen in de api en het website-deel (vwo 20%, havo 10%)
- Wat je extra hebt toegevoegd (vwo 20%, havo 10%)
- Inzet, planning en samenwerking (20%)

**Minimale eisen**

Voordat je een cijfer krijgt voor je PO, wordt gekeken of je werk voldoet aan de minimale eisen. Werk dat niet voldoet aan de minimale eisen krijgt het cijfer 1,0. De minimale eisen zijn:
- De inhoud van je webshop is moreel verantwoord: het is niet beledigend, visueel gewelddadig of op andere manieren onfatsoenlijk.
- Natuurlijk mag je overleggen met klasgenoten en mag je op internet kijken hoe je bepaalde dingen kunt maken. Let wel op dat je geen plagiaat pleegt. Je mag maximaal 5 regels code overnemen van andere leerlingen of internet en je schrijft in het commentaar erbij waar je het voorbeeld vandaan hebt. Dat geldt ook voor code die je zelf vertaalt naar het Nederlands. Overtypen van code uit een Youtube-video of een tutorial van internet volgen en dat resultaat inleveren is niet toegestaan.
- Je gebruikt de startcode die je krijgt.
- Je gebruikt het stappenplan dat in README.md van het template staat.
- Een download in zip-formaat van je opdracht mag maximaal 50 MB groot zijn.

**Database**
Enkele punten waarop gelet kan worden bij de beoordeling zijn
- Je database is genormaliseerd, dat betekent dat je redundante gegevens hebt voorkomen door het gebruik van meerdere tabellen.
- Je database bevat minimaal tien producten
- Je neemt ten minste vier eigenschappen van producten op.
- Je database bevat minimaal vijf tabellen.
- Je database bevat minimaal één relatie van de vorm 1:n en minimaal één relatie van de vorm n:m.
- Je SQL-code is toegankelijk, dat wil zeggen niet complexer dan nodig, logisch georganiseerd en waar nodig voorzien van commentaar.

**API en web**
Enkele punten waarop gelet kan worden bij de beoordeling zijn.
- De API is aangepast, zodat hij alle informatie uit de database kan doorgeven aan je website.
- De html en scripts in je website zijn aangepast, zodat ze alle data die de api levert netjes laten zien.

**Extra’s**
Enkele punten waarop gelet kan worden bij de beoordeling zijn.
- Je hebt functies toegevoegd waaruit blijkt dat je heel goed begrijpt hoe de database, api en website samenwerken. Je kunt bijvoorbeeld denken aan het aanbrengen van filters waarmee je snel producten kunt zoeken, of een zoekfunctie.
- Je hebt substantiële (grote) toevoegingen gedaan aan de html/css van het web-site gedeelte, zowel wat betreft de layout als de functionaliteit. Je kunt bijvoorbeeld denken aan een uitbreiding van meerdere pagina’s met nuttige informatie voor kopers.
- … 

**Inzet, planning en samenwerking**
- Je toont inzet tijdens de lessen
- De planning is vooraf gemaakt, gevolgd en als nodig bijgesteld.
- De taakverdeling is duidelijk en alle teamleden dragen in gelijke mate bij.
- Het werk is verdeeld over de weken waarin aan de opdracht kon worden gewerkt, dit blijkt onder andere uit de commits in Github.
{{% /expand %}}

{{% expand "Inleveren" %}}
- De deadline voor inleveren vind je in de lesplanner.
- Je kunt vragen stellen tot de laatste les voor de deadline.
- Je zorgt dat alle bestanden in die nodig zijn om je spel te spelen in GitHub staan, dit zijn ten minste: index.html, style.css en script.js. Als je plaatjes gebruikt, dan staan die er ook bij.
- Uit de versie historie in GitHub blijkt wanneer je wat gedaan hebt.
- De laatste versie van je PO die op het moment van de deadline in GitHub staat, wordt gebruikt voor de beoordeling.
{{% /expand %}}

## Hulpmiddelen
We gebruiken in deze opdracht de volgende tools:
1. [GitHub](/tools/github/)
2. [Replit](/tools/replit/) (havo)
3. [Gitpod](/tools/gitpod/) (vwo)

## Startcode
{{<figure src="../webshop_github.png" link="https://github.com/emmauscollege/5HV-webshop-template">}}

## Stappenplan
Werk de planning af van boven naar beneden. Vul de planning aan en stel bij terwijl je aan de opdracht werkt.

{{% expand "Stap 1: Start" %}} 
1. Pas de achtergrondkleur van de shop aan (zie mapje web)
2. Pas de titel van het eerste product in de shop aan (zie mapje db)
3. Pas de query aan zodat getoonde producten gesorteerd worden op naam (zie mapje api)
{{% /expand %}}

{{% expand "Stap 2: Database opzetten" %}}
1. Maak tabellen en velden (CREATE TABLE commando) in je database waarin alle informatie kan worden opgeslagen die je over je producten wilt tonen.<br>
Tip: je kunt een multipliciteitendiagram gebruiken als tussenstap voor je database-ontwerp
2. Vul de tabellen met informatie (INSERT commando)
3. Voeg eventueel plaatjes toe (web/images map)
{{% /expand %}}

{{% expand  "Stap 3: API aanpassen" %}} 
1. Pas de API aan, zodat je alle informatie uit je database kunt opvragen via de API
{{% /expand %}}

{{% expand "Stap 4: Website aanpassen" %}}
1. Pas de website aan, zodat alle informatie getoond wordt.
{{% /expand %}}

{{% expand "Stap 5: Webshop verder verbeteren" %}}
1. Herhaal stap 2 t/m 4 om je webshop verder te verbeteren. 
Voor en goed cijfer is het belangrijk dat je laat zien dat je uitstekend begrepen hebt hoe je een webshop moet opzetten.
{{% /expand %}}

## Uitlegvideo's (havo)
{{<youtube id="https://www.youtube.com/playlist?list=PLpTljPS--R5CZQu8A4igpazZsRUEA7NHJ">}}

## Uitlegvideo's (vwo)
{{<youtube id="https://www.youtube.com/playlist?list=PLpTljPS--R5CiJtenJC9FZT7vZcOklU4X">}}
  