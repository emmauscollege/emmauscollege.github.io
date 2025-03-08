+++
title = "GitHub met Codespaces en VS Code"
weight = 12
+++

GitHub is een website waar je code kunt opslaan en delen. Codespaces is een codeeromgeving binnen GitHub waar je code kunt wijzigen en uitvoeren. Codespaces maakt gebruik van de webversie van de editor Visual Studio Code.
<!--more-->

## 1. Wat zijn GitHub, Codespaces en VS Code?

<div style="width:50%;display:block;float:left">

![github.png](github.png)
<p style="text-align:center">Screenshot van Github</p>
</div>
<div style="width:50%;display:block;float:left">

![codespace.png](codespace.png)
<p style="text-align:center">Screenshot van Codespace</p>
</div>
<div style="width:0px;clear:both">
</div>

##### GitHub is een website waar je code kunt opslaan en delen.
- GitHub bewaart alle oude versies van je code.
- Code op GitHub kun je gemakkelijk delen met anderen.
- Met GitHub kun je in groepen aan dezelfde code werken.
- Bestanden in GitHub worden bewaard in repositories. Een repository (ook wel afgekort tot repo) is een soort hoofdmap. Voor elk project maak je een aparte repository.
- GitHub werkt op basis van Git. Git is open source software. Er zijn veel programmeeromgevingen die via Git kunnen samenwerken met GitHub.

##### Codespaces is een codeeromgeving binnen GitHub waar je code kunt uitvoeren.
- Codespaces biedt een devcontainer (computer in de cloud) waar je op kunt werken via een browser.
- In je browser zie je VS Code. VS Code "praat" met Codespaces.
- Wijzigingen in bestanden in je Codespace kun je bewaren in GitHub.
- Je kunt code uitvoeren in je Codespace, bijvoorbeeld door commando's te typen in de terminal.

##### VS Code is de editor die in Codespaces wordt gebruikt.
- VS Code gebruik je voor het wijzigen en runnen van code in Codespaces.
- VS Code is geschikt voor alle populaire programmeertalen 
- VS Code is meer dan een editor, zo verzorgt VS Code ook de verbinding met je Codespace en GitHub
- Je kunt de instellingen van VS Code naar je eigen smaak aanpassen. Wij gebruiken instellingen om het bewaren van wijzigingen in github gemakkelijker te maken. 
- De functies van VS Code kun je uitbreiden met extensions. Wij gebruiken extentions om previews van .pdf en .html bestanden te bekijken.
- VS Code (spreek uit als "vie es koot") is een veelgebruikte afkorting voor Visual Studio Code.

## 2. Starten met een opdracht

![inschrijven.png](inschrijven.png)

### 2.1 Maak een account in GitHub
1. Ga naar https://www.github.com/ (gebruik bij voorkeur Chrome).
2. Klik op sign-up.
3. Gebruik je email adres van school.
4. Kies een wachtwoord dat je terug kunt vinden.
5. Kies als username je voornaam met de eerste letter van je achternaam, als die al bezet is voeg je een nummer toe. Bijvoorbeeld jamesb007
6. Bevestig je account door te klikken op de link in de mail die je ontvangt van GitHub.

### 2.2 Maak een Codespace met startcode voor je opdracht
1. De docent deelt een link naar GitHub Classroom waarmee jij je kunt inschrijven voor een opdracht. Na inschrijven krijg je automatisch een repository met startcode voor de opdracht. 
2. Als je in een groepje werkt dan maakt het eerste groepslid die zich inschrijft een team aan. De naam van dat team bestaat uit alle voornamen van de groepsleden gescheiden door een streepje. Bijvoorbeeld anne-jasmin-noah. De andere groepsleden joinen bij inschrijven het team dat is aangemaakt.
3. Je maakt je eigen Codespace door op de knop "Create Codespace te klikken". Alle bestanden uit de GitHub repository worden gekopieerd naar jouw Codespace. Dit kan enkele minuten duren.

## 3. Werken aan een opdracht

### 3.1 Codespace starten

Als je een Codespace start, dan zie je het scherm van VS Code in je browser.

![vscode screenshot](vscode.png)
Op bovenstaande plaatje zie je het scherm van VS Code met de volgende onderdelen:
- (A) Activity Bar, klik op het bovenste icoon (Explorer) om je mappen en bestanden te zien, klik op het derde icoon (Source Control) van boven om te werken met GitHub
- (C) Editor Groups, hier verschijnen de bestanden die je opent.
- (D) Panel, hierin zit onder andere de Terminal. De terminal geeft toegang tot de virtuele computer, je kunt er commando's intypen.

### 3.2 Code aanpassen
1. Dubbelklik op een bestand, bijvoorbeeld `index.html` of `main.py`. Het bestand wordt geopend in de editor. 
2. Je kunt nu het bestand aanpassen.

### 3.3 Resultaat bekijken
Het hangt van de programmeertaal af hoe je kunt bekijken wat je code voor resultaat geeft. In het `README.md` bestand van de startcode staat beschreven hoe dit moet. Voor een aantal veelgebruikte programmeertalen vind je hier een korte samenvattig

##### html (eventueel met css en/of javascript):
1. Start een webserver in de Codespace, bij de meeste startcode gebeurt dit automatisch als je de Codespace start. De webserver zorgt ervoor dat de html-bestanden uit de Codespace door een browser op je computer kunne worden geladen.
2. Open een browser-venster met het `index.html` bestand uit je Codespace. Klik hiervoor op Ports, klik daarna op de link met het adres van de webserver.

##### python:
1. Type in de terminal `python main.py`, het programma start<br>
2. Als het programma lang duurt, stop het dan met de toetsen `[CRTL]+[C]`
3. Start het programma opnieuw met de toets `[PIJL OMHOOG]`<br>

##### python met pygame:
1. Type in de terminal `python main.py`, het programma start<br>
2. Open een browser-venster dat via novnc is verbonden met het grafische scherm dat pygame gebruikt. Klik hiervoor op Ports, klik daarna op de link met het adres van de novnc-server.

### 3.4 Wijzigingen bewaren in GitHub
1. Klik in de activity bar op het Source Control icoon.
2. Voer een beschrijving van de wijziging in
3. Druk op de groen knop "Commit & Sync". Je wijzigingen worden nu bewaard in GitHub. Je kunt controleren op github.com of het is gelukt.

## 4. Samenwerken

![samenwerken.png](samenwerken.png)

### 4.1 Een team van één persoon
Bewaar nieuwe versies van je code steeds in Github. Dan heb heb je een backup als er iets misgaat in Codespaces.

De laatste versie van je code uit je Codespace bewaren op GitHub doe je zo:
1. In de iconenbalk links op je scherm is een icoon voor "source control". Dit is het derde icoon van boven, als je er even met je muis op staat dan verschijnt de tekst "source control". Klik op het icoon. Je ziet onder "changes" een lijst met bestanden waarin je wijzigingen hebt gemaakt. Daarboven zie je een knop "Commit & Sync". Boven de knop zie je een invoerveld met de tekst "Message".
2. Type een korte beschrijving van je wijziging in het "Message" invulveld. Dit heet een commit message. Klik daarna op "Commit & Sync".
3. Je code wordt nu bewaard in GitHub. Als alles gelukt is dan zie je de beschrijving van je wijziging terug in GitHub. Controleer dat in GitHub.

Het werkt het best als je aanpassingen doet in kleine stapjes.
- Type steeds een paar regels code en test dan of het doet wat je verwacht had.
- Maak per lesuur één of enkele commits en bewaar dit in GitHub. Een commit is een versie met een aantal kleine wijzigingen die samen iets nieuws toevoegen. Het is niet handig om elke minuut een commit te maken, maar minimaal één commit per les zou wel moeten.

### 4.2 Een team van twee of drie

Elk teamlid heeft zijn eigen kopie van de code in zijn eigen Codespace. In GitHub staat de gezamenlijke code.

Als je in teams werkt, dan is het opslaan van je code ingewikkelder. Je moet immers zorgen dat jouw wijzigingen en die van je maatje worden samengevoegd. GitHub helpt daarbij.

De laatste versie van je code uit je Codespace bewaren op GitHub doe je zo:
1. **Wijzig en test** : Type steeds een paar regels code en test dan of het doet wat je verwacht had.
2. **Stage** : Zet de gewijzigde bestanden klaar voor de commit. Een commit is en nieuwe versie.
3. **Commit** : Type een korte beschrijving waaronder je de nieuwe versie terug kan vinden.
4. **Pull** : Haal de wijzigingen van teamgenoten uit Github binnen in jouw Codespace. 
5. **Push** : Duw je commit in Codespace naar je repository op GitHub.

Stap 2, 3, 4, en 5 worden direct achter elkaar gedaan als je klikt op de knop "Commit & Sync". Als je in teams werkt, dan kan het zijn dat je maatje iets in GitHub bewaart, terwijl jij in jouw Codespace aan het werk bent. De wijzigingen van jouw maatje komen niet automatisch in jouw Codespace, zodat jij ongestoord verder kunt coderen. Als jij na je maatje wijzigingen in GitHub bewaart, dan probeert GitHub de wijzigingen van jou en je maatje automatisch samen te voegen. Als jullie dezelfde regels in hetzelfde bestand gewijzigd hebben, dan lukt het samenvoegen niet automatisch. CodeSpace geeft dan aan dat er een merge-conflict is. Jij moet dan zelf aangeven welke wijzigingen GitHub moet kiezen. Daarna klik je op "Continue" om te zorgen dat alle stappen uit "Commit & Sync" worden afgemaakt. 

[Deze video legt uit hoe je merge-conflicten in Codespaces oplost](https://www.youtube.com/watch?v=HosPml1qkrg). Als je goede afspraken maakt over wie wat doet, dan heb je weinig merge-conflicten.

Als je langer dan een dag niet aan je code gewerkt hebt, dan is het handig om de laatste wijzigingen van jullie gezamenlijke code in GitHub binnen te halen. Dat heet "Pull". Onze Codespace is zo ingesteld, dat je op het pijltje naast "Commit & Sync" kunt drukken om te pullen. Pullen kan alleen als je na je laatste commit geen wijzigingen meer hebt gedaan. 

## 4.3 Een team van vier of meer
In grotere teams worden er heel veel veranderingen tegelijk doorgevoerd. De gezamenlijke code wijzigt daardoor heel vaak. Dat is onhandig. 

Het werkt in grote teams handiger als je het werk verdeelt in branches. Vraag hierover uitleg aan je docent, als jullie daaraan toe zijn.

## 5. Howto's en veelgestelde vragen

### 5.1 Bestanden en mappen

*Ik wil een nieuw bestand maken, de naam van een bestand veranderen, een bestand uploaden, bestanden downloaden of andere dingen met bestanden of mappen doen. Hoe doe ik dat?*

{{% expand "Bestanden bekijken" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Als je dubbelklikt op een bestand, dan wordt het geopend. 
4. Als je met je rechtermuisknop op een bestand of map klikt, dan verschijnt er een drop-down menu waarin je meer met het bestand of de map kunt doen.
{{% /expand %}}

{{% expand "Nieuw bestand of map maken" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Als je muis op de lijst met bestanden staat, dan zie je vlak boven de lijst twee icoontjes met een +. Als je op de linker klikt, dan maak je een nieuw bestand. Als je op de rechter klikt, dan maak je een nieuwe map.
{{% /expand %}}

{{% expand "Naam van bestand of map wijzigen" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Klik met de rechtmuisknop op een bestand of map. Er verschijnt een drop-down menu. Kies "Rename..." in het pull-down menu. Pas de naam aan en druk op Enter.
{{% /expand %}}

{{% expand "Bestanden verplaatsen" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Sleep het bestand van de ene naar de andere map.
{{% /expand %}}

{{% expand "Bestand uploaden naar Codespaces" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Sleep een bestand van je bureaublad naar het lijstje bestanden in Codespaces.<br>
Als stap 3 niet werkt, probeer dan stap 4.
4. Ga op een map staan, klik op de rechtermuisknop, een pull-down menu verschijnt, kies "Upload..." in het pull-down menu.
{{% /expand %}}

{{% expand "Bestand downloaden uit Codespaces" %}}
1. Open Codespaces.
2. In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. 
3. Ga op een bestand staan, klik op de rechtermuisknop, een pull-down menu verschijnt, kies "Download..." in het pull-down menu.
{{% /expand %}}

{{% expand "Alle bestanden downloaden" %}}
1. Open GitHub, ga naar de pagina met je repository.
2. Klik op de groene knop "Code" en kies in het menu dat verschijnt voor "Download ZIP".
3. Dubbelklik op het gedownloade zip-bestand om alle bestanden uit te pakken.
{{% /expand %}}

### 5.2 github.com gebruiken

{{% expand "Hoe open ik mijn laatste Codespace?" %}}
1. Open GitHub en login.
2. Klik op de drie streepjes links bovenin. Een menu opent.
3. Klik in het menu op Codespaces. Er wordt een lijst al je Codespaces getoond
4. Klik op de Codespace die je wilt openen. Het openen duurt één a twee minuten.
{{% /expand %}}

{{% expand "Hoe maak ik een nieuwe Codespace?" %}}
1. Open GitHub en login. Ga naar je repository.
2. Klik op de groen knop "Code", een popup menu verschijnt.
3. Kies het tabje "Codespaces" in het menu.
4. Klik op de groen knop "Create Codespace" (die zie je als je nog geen Codespace van deze repository hebt), klik op "+" als je die knop er niet is.
5. De nieuwe Codespace wordt gemaakt en al je code uit GitHub wordt naar de Codespace gekopieerd. Dit duurt één a twee minuten.
{{% /expand %}}

{{% expand "Waar staat mijn repository?" %}}
1. Open GitHub en login
2. Links in het scherm staan de repo's die je recent en vaak gebruikt hebt. Door op een repo te klikken wordt deze geladen. De link van de repo staat bovenin je browser.
3. Als je in een team aan een repo werkt, klik dan links op het team, daarna bovenin je scherm op repositories
{{% /expand %}}

{{% expand "Lijst met commits bekijken" %}}
1. Open GitHub, ga naar de pagina met je repository.
2. Een lijst met de laatste wijzigingen krijg je door te klikken op het aantal commits, onder de groene knop met "Code". Van elke commit kun je zien wat er is gewijzigd, klik daarvoor op het nummer van de commit aan het einde van de regel.
{{% /expand %}}

{{% expand "Oude versie van je repository bekijken" %}}
1. Open GitHub, ga naar de pagina met je repository.
2. Een lijst met de laatste wijzigingen krijg je door te klikken op het aantal commits, onder de groene knop met "Code". 
3. Klik op `<>` achter een commit naar keuze. Je ziet nu de versie van de repository op het moment van de commit.
{{% /expand %}}

### 5.3 Overige vragen en problemen

{{% expand "GitHub 404 fout oplossen" %}}

*Ik heb via email een link ontvangen om toegang te krijgen tot een repo, maar als ik op de link druk dan krijg ik een 404 fout. Wat moet ik doen?*

Login op GitHub en druk daarna nogmaals op de link.
{{% /expand %}}

{{% expand "Merge conflict oplossen" %}}

*Ik heb een merge conflict, hoe los ik dat op?*

Kijk deze video, daarin wordt uitgelegd hoe je een merge conflict in Codespaces oplost.<br>
[https://www.youtube.com/watch?v=HosPml1qkrg](https://www.youtube.com/watch?v=HosPml1qkrg)

Als je er met de video niet uitkomt en er is niemand in de buurt die je kan helpen, dan kun je het volgende doen.
- Maak een nieuwe Codespace. In de nieuwe Codespace wordt de laatste versie van de code van GitHub ingelezen. 
- Knip en plak de wijzigingen van je oude Codespace naar je nieuwe Codespace. 
- Test of je code het doet, haal de fouten eruit. 
- Bewaar je wijzigingen in GitHub door in je nieuwe Codespace op Commit en Sync te klikken.
{{% /expand %}}

{{% expand "Scherm delen" %}}
*Ik wil mijn scherm delen met iemand anders, hoe doe ik dat?*

In de iconenbalk links op je scherm zie een soort gebogen pijl. Dit is de extension "live-share". Hiermee kun je je scherm delen met andere GitHub gebruikers. 

Deze functie is bedoeld om samen snel een klein probleem op te lossen. Gebruik hem niet meer dan een paar minuten per les. Echte programmeurs verdelen het werk, maken elk hun eigen stuk code in hun eigen Codespace en delen het dan via GitHub. Dat moet jij ook leren.
{{% /expand %}}

{{% expand "Automatisch inspringen" %}}

1. Open een bestand in VS Code
2. Klik in het bestand op de rechtermuisknop. Er verschijnt een pop-up menu.
3. Klik in het menu op Format Document. Het document wordt aangepast zodat de code netjes inspringt.

{{% /expand %}}

{{% expand "Hoeveel gratis usage heb ik nog?" %}}
Per maand krijg je gratis usage voor allerlei dingen, de belangrijkste voor jou zijn:
- Aantal repositories in GitHub: onbeperkt
- Hoeveelheid opslag in GitHub: onbeperkt
- Aantal uren gebruik van Codespaces: 60 per maand (bij de standaard configuratie met 2 vCPU)
- Hoeveelheid opslag gemiddeld per maand in Codespaces: 15 GB (één Codespace neemt 1 à 2 GB in beslag)

Je kunt zien hoeveel usage je nog hebt op:
[https://github.com/settings/billing/summary](https://github.com/settings/billing/summary)

Om onnodige usage te voorkomen is GitHub als volgt ingesteld:
- Een Codespace die je een half uur open hebt staan zonder dat je erin werkt wordt automatisch gesloten (niet gewist).
- Een Codespace die je twee weken niet opent wordt automatische gewist.
{{% /expand %}}

{{% expand "Mijn gratis usage is op" %}}
Je kunt 3 dingen doen:
- Een tweede account aanmaken, je docent kan dat account toeveogen als collaborator aan de repo waarin je werkte.
- Bijbetalen, dit is vooral handig voor docenten. Je moet een creditcard invoeren en kunt een maximum bedrag per maand instellen.
- Verder werken in een lokaal geïnstalleerde VS Code met Docker, hiervoor heb je een PC of laptop nodig en moet je handig zijn met VS Code en Docker.
{{% /expand %}}

### 5.4 Documentatie
*Waar vind ik meer documentatie?*

##### Documentatie over VS Code
- [https://code.visualstudio.com/docs/getstarted/userinterface](https://code.visualstudio.com/docs/getstarted/userinterface)
