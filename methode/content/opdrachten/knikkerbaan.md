+++
title = "O5. Marble Mania Knikkerbaan"
weight = 5
+++

Je maakt een interactieve module voor een grotere knikkerbaan.
<!--more-->

## Opdrachtbeschrijving
In het vakgebied van informatica wordt heel veel projectmatig gewerkt. Een van de manieren om dit te doen is Agile. Bij deze opdracht ga je in groepen van 4 (één leerling meer of minder mag ook) projectmatig werken aan een interactieve knikkerbaan die verbonden is met een zelfgemaakte webserver. Hierbij ga je de kennis en vaardigheden die bij het vak informatica hebt opgedaan toepassen en integreren. Je levert een eindproduct op maar je wordt ook beoordeeld op de wijze waarop dit project gemanaged wordt.



{{% expand "Inschrijven" %}}
Je schrijft je in via het onderstaande formulier dat de docent aanlevert. 
- [6Vin1](https://docs.google.com/spreadsheets/d/1f3Y1B4zmQebQ-yE6Cd4uWfoR940aeAQe)
- [6Vin2](https://docs.google.com/spreadsheets/d/1f4t70qRRf8H0lGPCHI4yNTQTmHKCmg_g)
{{% /expand %}}


{{% expand "Wat ga je precies maken?" %}}
-	Een module voor een knikkerbaan. Het is de bedoeling dat je bovenaan knikkers kunt ontvangen en ze onderaan weer laat vallen, zodat een volgende module ze weer kan opvangen. Ook moet de knikkerbaan om kunnen gaan met verschillen in de snelheid waarmee nieuwe knikkers aangeleverd worden.
Deze module is interactief: hij maakt gebruik van Arduino, heeft sensors en actuators en staat via WiFi in verbinding met een server. De basis van de opdracht wordt aan je gegeven met uitleg hoe je de basis van de knikkerbaan moet maken, inclusief een teller (onderbrekingssensor) en een poortje (servomotor -> actuator).
De knikkerbaanmodule moet uiteindelijk meer sensors en actuators krijgen. Je kunt natuurlijk meer tellers toevoegen en meer poortjes, maar je moet ook minimaal andere één sensor en één actuator van een andere soort toevoegen. Denk aan een kleurensensor, afstandssensor, snelheidsmeter, krachtsensor, gewichtsensor etc. Of als actuators: ledjes, een RGB-ledstrip, display, buzzer, bewegende onderdelen. Als je twijfelt of iets kan / mag, vraag even aan je docent.
-	Een kleine webpagina – een widget – waarmee je de status van je knikkerbaanmodule kunt weergeven, maar ook je knikkerbaan kunt ‘besturen’. Je krijgt dus informatie van de knikkerbaan, maar geeft ook informatie terug waarop de knikkerbaan moet reageren. Je kunt dus informatie van de sensors zien en het functioneren van de actuators beïnvloeden. De widget zal later door de docent opgenomen worden in een grote webpagina waar een overzicht te zien is van alle modules van de uiteindelijke knikkerbaan.
-	Een serverprogramma dat een brugfunctie heeft tussen de knikkerbaanmodule en de widget. Dit serverprogramma verwerkt alle informatie die opgevraagd of gegeven wordt. De informatie wordt door de server opgeslagen in een dataobject.
-	Een verslag waarin je je code en het proces documenteert.
{{% /expand %}}


{{% expand "Inleveren" %}}
-	De demonstratie van de knikkerbaan is op een nog nader te bepalen moment in de week van 23 januari 2023. De deadline voor het inleveren van het GitHub repository zondag 29 januari 2022 23:59.
-	De laatste versie van de main branch die op het moment van de deadline in GitHub staat, wordt gebruikt voor de beoordeling.
{{% /expand %}}


{{% expand "Hulpmiddelen" %}}
- **GitHub** - zodat iedereen aan de code kan werken en alles wel netjes op één plek staat. Daarnaast maken we gebruik van extra functies van GitHub om goed projectmatig te kunnen werken.
-	**GitPod** - voor het ontwerpen/ programmeren van de server-app en de website. Je programmeert deze onderdelen vooral in JavaScript.
-	**Arduino** - voor het programmeren van de knikkerbaan.
{{% /expand %}}

{{% expand "Video's" %}}
[Video's over de communicatie met de server](https://www.youtube.com/playlist?list=PLpTljPS--R5AZC4EHBCfVbpz_ABGv64HV)
{{% /expand %}}

{{% expand "Beoordeling" %}}
De opdracht wordt op de volgende aspecten beoordeeld, waarbij de vragen niet uitputtend beschreven zijn:
-	**Knikkerbaan** - Hoeveel uitbreidingen zijn er aan de basis toegevoegd? Hoe functioneert de knikkerbaan? Hoe is de totale afwerking?
-	**Arduino** - Hoe is de kwaliteit van de code? Zitten er nieuwe classes in? Hoe objectgeoriënteerd is het geheel van de code? Is de code een rommeltje of is het netjes? Werkt de knikkerbaan soepel?
-	**Server** – Is de server in staat om nieuwe informatie aan te nemen, op te slaan in het data-object en opgevraagde informatie netjes terug te geven? Is de code netjes of is het een rommeltje?
-	**Widget** - Doet de widget wat het moet doen? Hoeveel interactiviteit met de knikkerbaan wordt hierdoor mogelijk? Zitten er nieuwe classes in? Hoe objectgeoriënteerd is het geheel van de code? Is de code netjes? Is de widget mooi?
-	**Planning** - Is het project onderverdeeld in features en taken (decompositie), weergegeven in issues? Is het scrumboard altijd goed bijgehouden? Zijn er tweewekelijks evaluaties aan het verslag toegevoegd? Is er gebruik gemaakt van bug reports of andere geavanceerde ondersteunende functies?
-	**Verslag** - Bevat het verslag de aangegeven onderdelen? Hoe goed is de documentatie / uitleg van wat de knikkerbaan kan / doet?
- **Inzet** – Welke inzet heb je getoond bij het maken van deze opdracht en het samenwerken in de groep?


Er wordt verwacht dat elk teamlid een gelijkwaardige bijdrage levert. Je mag taken verdelen, maar aan het einde van de opdracht wordt van alle teamleden verwacht dat zij dezelfde kennis hebben van alle onderdelen van de opdracht. Bij twijfel kan de docent dit toetsen in een kort gesprek met de teamleden en onderzoeken welke commits door teamleden zijn gedaan. Het staat de docent vrij om aan groepsleden verschillende cijfers toe te kennen op basis van hoe en wat zij controleerbaar aan het project hebben bijgedragen.
{{% /expand %}}

