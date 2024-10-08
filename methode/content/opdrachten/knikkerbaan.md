+++
title = "O5. Marble Mania Knikkerbaan"
weight = 5
+++

Je maakt een interactieve module voor een grotere knikkerbaan.
<!--more-->

## Opdrachtbeschrijving
In het vakgebied van informatica wordt heel veel projectmatig gewerkt. Een van de manieren om dit te doen is Agile. Bij deze opdracht ga je in groepen van 3 of 4 leerlingen projectmatig werken aan een  knikkerbaan die verbonden is met een computer. Hierbij ga je veel kennis en vaardigheden die bij het vak informatica hebt opgedaan toepassen en integreren. Er vindt op twee momenten een beoordeling plaats.


{{% expand "Wat ga je precies opleveren?" %}}

**Een module voor een knikkerbaan.**
Het is de bedoeling dat je bovenaan knikkers kunt ontvangen en ze onderaan weer laat vallen, zodat een volgende module ze weer kan opvangen. Ook moet de knikkerbaan om kunnen gaan met verschillen in de snelheid waarmee nieuwe knikkers aangeleverd worden en ervoor zorgen dat er geen knikkers vastlopen. [Klik hier voor de basislayout.](tekening-enkele-module.png)

Deze module is interactief: hij maakt gebruik van Arduino, heeft minimaal een teller, een snelheidsmeter (sensors), een poortje en een wissel (actuators). De module staat via USB in verbinding met een website die op een computer draait. De basis van de opdracht wordt aan je gegeven met uitleg hoe je de basis van de knikkerbaan moet maken, inclusief een teller (onderbrekingssensor) en een poortje (servomotor -> actuator).

De knikkerbaanmodule mag natuurlijk meer sensors en actuators krijgen. Je kunt natuurlijk meer tellers toevoegen en meer poortjes, je kunt ook denken aan een kleurensensor, afstandssensor, krachtsensor, gewichtsensor etc. Of als actuators: ledjes, een RGB-ledstrip, display, buzzer, andere bewegende onderdelen (bijv. met behulp van een 360-gradensensor). Als je twijfelt of iets kan / mag, vraag even aan je docent.

**Een kleine webpagina.**
Deze webpagina is een widget waarmee je de statusgeschiedenis van je knikkerbaanmodule kunt weergeven, maar ook het gedrag van de knikkerbaan kunt aanpassen / configureren. Je krijgt informatie van de knikkerbaan, maar geeft ook informatie terug waarop de knikkerbaan moet reageren. Je kunt dus informatie van de sensors zien en het functioneren van de actuators beïnvloeden. De widget kan later door de docent opgenomen worden in een grote webpagina waar een overzicht te zien is van alle modules van de uiteindelijke knikkerbaan.

**Verslaglegging van planning, voortgang en samenwerking.**
We verwachten dat je _minimaal_ aan het begin van iedere sprint een screenshot in de daarvoor bestemde map in GitHub plaatst met de bijgewerkte planning. Nog beter: doe dit _iedere_ eerste les van de week. Daarnaast willen we dat ieder teamlid in gelijke mate bijdraag 
{{% /expand %}}


{{% expand "Inleveren en beoordeling" %}}
-	De laatste les van de week van sprint 3 wordt de knikkerbaan zonder widget beoordeeld. Er wordt beoordeeld op uiterlijk, functionaliteit, techniek en planning. Dit deelcijfer telt voor 50% mee in het totaalcijfer van S13.
- De laatste les van de week van sprint 5 wordt de widget beoordeeld. Ook bij deze beoordeling wordt naar uiterlijk, de functionaliteit, techniek en planning gekeken. Belangrijk is dat de widget en de knikkerbaan echt met elkaar communiceren. Mocht je aan het einde van sprint 5 nog substantiële verbeteringen hebben gedaan aan de knikkerbaan, dan kan je eerste deelcijfer met maximaal 1 punt opgehoogd worden.
{{% /expand %}}


{{% expand "Hulpmiddelen" %}}
- **GitHub** - zodat iedereen aan de code kan werken en alles wel netjes op één plek staat. Daarnaast maken we gebruik van extra functies van GitHub om goed projectmatig te kunnen werken.
-	**GitPod** - voor het ontwerpen/ programmeren van de server-app en de website. Je programmeert deze onderdelen vooral in JavaScript.
-	**Arduino** - voor het programmeren van de knikkerbaan.
{{% /expand %}}

{{% expand "Planning" %}}
Je werkt bij deze opdrachten in sprints. Een sprint is een periode van twee weken waarbij je met elkaar afspreekt wat er aan het einde van de twee weken af is en wie dit doet. Halverwege de sprint kun je daar eventueel een kleine wijziging in aanbrengen. Om INzichtelijke te maken wat er gedaan moet worden, wie wat aan het doen is en wat is afgerond, maken we gebruik van een planningsbord in GitHub.

Voor in ieder geval de eerste drie sprints hebben wij in algemene termen opgeschreven wat er af moet zijn:

- sprint 1: Begin van knikkerbaan moet werken, inclusief een teller en een poortje
- sprint 2: De knikkerbaan moet nu ook een werkende snelheidsmeter en een wissel hebben
- sprint 3: Je hebt de knikkerbaan verder uitgebreid en verbeterd.
{{% /expand %}}


{{% expand "Beoordeling" %}}
De opdracht wordt op de volgende aspecten beoordeeld, waarbij de vragen niet uitputtend beschreven zijn:

**Knikkerbaan**
- Hoeveel uitbreidingen zijn er aan de basis toegevoegd?
- Hoe functioneert de knikkerbaan?
- Werkt de knikkerbaan soepel?
- Hoe is de totale afwerking?
- Hoe is de kwaliteit van de code?
- Is de code een rommeltje of is het netjes?
- Hoe objectgeoriënteerd is het geheel van de code?

**Widget**
- Hoe ziet de widget eruit?
- Hoe slag je de ontvangen en verzonden gegevens op?
- Doet de widget wat het moet doen?
- Hoeveel interactiviteit met de knikkerbaan wordt hierdoor mogelijk?
- Doe je iets met de geschiedenis van de ontvangen en verzonden gegevens?
- Hoe objectgeoriënteerd is het geheel van de code?
- Is de code netjes?
  
**Samenwerking en planning**
- Hoe was de inzet van de groepsleden.
- Heeft ieder groepslid evenveel bijgedragen?
- Heeft iedereen zicht op het hele project, ook als iemand anders daar vooral aan heeft gewerkt?
- Is er planmatig in sprints gewerkt?
- Hoe is de verslaglegging van de planning?


Er wordt verwacht dat elk teamlid een gelijkwaardige bijdrage levert. Je mag taken verdelen, maar iedereen heeft in ieder geval aan een deel van de code zelf meegeschreven. Aan het einde van de opdracht wordt van alle teamleden verwacht dat zij dezelfde kennis hebben van alle onderdelen van de opdracht. Bij twijfel kan de docent dit toetsen in een kort gesprek met de teamleden en onderzoeken welke commits door teamleden zijn gedaan. Het staat de docent vrij om aan groepsleden verschillende cijfers toe te kennen op basis van hoe en wat zij controleerbaar aan het project hebben bijgedragen.
{{% /expand %}}