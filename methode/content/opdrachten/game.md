+++
title = "O2. Game"
weight = 2
+++

Je gaat je eigen game programmeren!
<!--more-->

## Opdrachtbeschrijving
De opdracht in het kort is: Maak in groepjes van twee je eigen spel in JavaScript. Je gebruikt de startcode en maakt gebruik van de p5js-library.

{{% expand "Inschrijven" %}}
Je schrijft je in via het onderstaande formulier dat de docent aanlevert. 
- 4hin1, link naar formulier volgt
- 4hin2, link naar formulier volgt
- 4vin1, link naar formulier volgt
- 4vin2, link naar formulier volgt
{{% /expand %}}

{{% expand "Game kiezen" %}}
Je bent vrij om zelf te kiezen welke game je gaat maken. Je docent moet de game die je kiest goedkeuren. Enkele voorbeelden van een game die je kunt maken zijn: Tennis, Flappy Bird, Snake (voorganger van Slither.io), een Break Out Game (zoals Arkanoid), een race spelletje, een eenvoudige platform game (zoals pacman), een puzzelspel enzovoort. 
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

**Minimale eisen**

Voordat je een cijfer krijgt voor je PO, wordt gekeken of je werk voldoet aan de minimale eisen. Werk dat niet voldoet aan de minimale eisen krijgt het cijfer 1,0. De minimale eisen zijn:
- De inhoud is moreel verantwoord: het is niet beledigend, visueel gewelddadig of op andere manieren onfatsoenlijk.
- Natuurlijk mag je overleggen met klasgenoten en mag je op internet kijken hoe je bepaalde dingen kunt maken. Let wel op dat je geen plagiaat pleegt. Je mag maximaal 5 regels code overnemen van andere leerlingen of internet en je schrijft in het commentaar erbij waar je het voorbeeld vandaan hebt. Dat geldt ook voor code die je zelf vertaalt naar het Nederlands. Overtypen van code uit een Youtube-video of een tutorial van internet volgen en dat resultaat inleveren is niet toegestaan.
- Je gebruikt de startcode die je krijgt.
- Je gebruikt het stappenplan dat in README.md van het template staat.
- Een download in zip-formaat van je opdracht mag maximaal 50 MB groot zijn.

**Werking en aantrekkelijkheid**
- Spel start op
- Het spel werkt (hoe klein ook)
- Behaalde punten zijn zichtbaar bij game-over
- Het doel en de bediening van het spel is duidelijk
- Aantrekkelijk uiterlijk
- Prettige bediening
- Eenvoudig om mee te beginnen en moeilijker als je verder komt
- Afwisselend

**Techniek**
- De code volgt de lijn van het template
- De code is netjes en duidelijk leesbaar
- De code bevat geen dubbele stukken code
- Je hebt de technieken gebruikt die in de programmeerlessen zijn aangeboden.
- Je hebt dingen toegevoegd waarvan je zelf hebt uitgezocht hoe ze werken

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
- Je zorgt dat het README.md bestand met je planning aanwezig is. Je hebt aangegeven welke onderdelen gereed zijn. Uit de versie historie in GitHub blijkt hoe je je planning tussentijds hebt gevolgd en bijgesteld. 
- De laatste versie van je PO die op het moment van de deadline in GitHub staat, wordt gebruikt voor de beoordeling.
{{% /expand %}}

## Hulpmiddelen
We gebruiken in deze opdracht de volgende tools:
1. [GitHub](/tools/github/)
2. [Replit](/tools/replit/) (havo)
3. [Gitpod](/tools/gitpod/) (vwo)

## Startcode
Je krijgt van de docent een kopie van onderstaande startcode. 
{{<figure src="../game_github.png" link="https://github.com/emmauscollege/4HV-game-template">}}

## Stappenplan
Het stappenplan vind je in het README.md bestand uit de startcode. Daarin staat in welke stappen je je startcode moet uitbreiden en aanpassen.
<pre id="github-code-1"></pre>
<style>
    #github-code-1 {
        height:300px;
        overflow:scroll;
    }
</style>

<script> // inspired on: https://stackoverflow.com/questions/28338017/is-there-a-way-to-embed-github-code-into-an-iframe
    fetch('https://api.github.com/repos/emmauscollege/4HV-website-template/contents/README.md') // GET /repos/:owner/:repo/contents/:path
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            var pre = document.getElementById('github-code-1');
            pre.innerHTML = atob(data.content); // decode base64 to normal text
        });
</script>

## Uitlegvideo's
{{<youtube id="videoseries?list=PLpTljPS--R5CgvkhsT9EODw2ng4Rkp1HC">}}
