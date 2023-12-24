+++
title = "GitHub met Codespaces"
weight = 9
+++

**Deze pagina is under constuction**<br>
GitHub is een website waar je code kunt opslaan en delen. Codespaces is een online omgeving binnen GitHub waar je code kunt wijzigen en uitvoeren.
<!--more-->

## Wat is GitHub?
GitHub is een website waar je code kunt opslaan en delen.
- Heel veel goede programmeurs gebruiken GitHub
- Heel veel programmeeromgevingen kunnen samenwerken met GitHub.
- GitHub bewaart alle oude versies van je code
- Code op GitHub kun je gemakkelijk delen met anderen
- GitHub biedt heel veel speciale mogelijkheden om in groepen aan dezelfde code te werken

GitHub kun je zien als een soort cloudopslag voor je code. Github slaat code op in repositories. Een repository (kortweg: repo) bevat de code voor één project of opdracht. De kern van een repository zijn de bestanden.

## Wat is Codespaces?
Codespaces is een Virtual Machine (computer in de cloud) waar je code uit GitHub kunt wijzigen en uitvoeren.

## Een opdracht starten in GitHub met Codespaces

#### Maak een account in GitHub
1. Ga naar https://www.github.com/ (gebruikt Chrome of Firefox, in 21/22 werkt dit niet in Safari)
2 Klik op sign-up
3. Gebruik je email adres van school (1xxxxx@emmauscollege.nl)
4. Zorg dat je het wachtwoord dat je kiest terug kunt vinden
5. Kies als username je voornaam met een letter van je achternaam, als die al bezet is voeg je een nummer toe. Bijvoorbeeld jamesb007
6. Bevestig je account door te klikken op de link in de mail die je ontvangt van GitHub

#### Maak een Codespace met startcode voor je opdracht
1. De docent geeft je toegang tot een repository met startcode in GitHub
2. Klik op de knop "Code", een pop-up box verschijnt, kies in de pop-up box de tab "Codespaces", klik op de "+" om een nieuwe Codespace te maken. De volgende keer kun je de Codespace kiezen die je nu gemaakt hebt.
3. Er wordt voor jou persoonlijk een Virtuele Server gestart waarop jouw Codespace draait. Alle bestanden uit de GitHub repository worden gekopieerd naar jouw Codespace. Dit kan enkele minuten duren.

## In je eentje werken aan je opdracht in Github met Codespaces
Bewaar nieuwe versies van je code steeds in Github. Dan heb heb je een backup als er iets misgaat in Codespaces.

Druk in Codespaces op de knop "Commit & Sync" om je werk in GitHub te bewaren.

## Met zijn tweeën of drieën werken aan je opdracht in Github met Codespaces

Elk teamlid heeft zijn eigen kopie van de code in zijn eigen Codespace. In GitHub staat de gezamenlijke code. 

Het werkt het best als je aanpassingen doet in kleine stapjes.
- Type steeds een paar regels code en test dan of het doet wat je verwacht had.
- Maak per lesuur één of enkele commits en bewaar dit in GitHub. Een commit is een versie met een aantal kleine wijzigingen die samen iets nieuws toevoegen. Het is niet handig om elke minuut een commit te maken, maar minimaal één commit per les zou wel moeten.

Als je werkt aan je code, dan ben je steeds de volgende stappen aan het doen:
1. **Pull** : Als je langer dan een dag niet aan je code gewerkt hebt, dan is het handig om de laatste wijzigingen van jullie gezamenlijke code in GitHub binnen te halen. Dat heet "Pull". Onze Codespace is zo ingesteld, dat je op het pijltje naast "Commit & Sync" kunt drukken om te pullen. Pullen kan alleen als je na je laatste commit geen wijzigingen hebt gedaan. 
2. **Wijzig en test** : Doe steeds kleine wijzigen van een paar regels aan je code en test of het werkt.
3. **Stage** : Zet de gewijzigde bestanden klaar voor de commit. 
4. **Commit** : Maak een nieuw punt in je tijdlijn, je moet daarvoor een korte beschrijving (dit heet een message) intypen.
5. **Pull** : Haal de wijzigingen van teamgenoten uit jullie repository op Github binnen in jouw Codespace. Als jouw teamgenoot in dezelfde regels code heeft gewijzigd als jij, dan kan de code niet automatisch worden ingeladen. Je krijgt dan een merge-conflict. In de veelgestelde vragen staat hoe je dit oplost.
6. **Push** : Duw je commit van je repository in Codespace naar je repository op GitHub.


## Met zijn vieren of meer werken aan je opdracht in Github met Codespaces
In grotere teams worden er heel veel veranderingen tegelijk doorgevoerd. De gezamenlijke code wijzigt daardoor heel vaak. Dat is onhandig. 

Het werkt in grote teams handiger als je het werk verdeeld in branches. Vraag hierover uitleg aan je docent, als jullie daaraan toe zijn.

## Veelgestelde vragen

#### GitHub 404 fout

*Ik heb via email een link ontvangen om toegang te krijgen tot een repo, maar als ik op de link druk dan krijg ik een 404 fout. Wat moet ik doen?*

Login op GitHub en druk daarna nogmaals op de link.

#### Merge conflict

*Ik heb een merge conflict, hoe los ik dat op?*

Kijk deze video, daarin wordt uitgelegd hoe je een merge conflict in Codespaces oplost.<br>
[https://www.youtube.com/watch?v=HosPml1qkrg](https://www.youtube.com/watch?v=HosPml1qkrg)

Als je er met de video niet uitkomt en er is niemand in de buurt die je kan helpen, dan kun je het volgende doen.
- Maak een nieuwe Codespace. In de nieuwe Codespace wordt de laatste versie van de code van GitHub ingelezen. 
- Knip en plak de wijzigingen van je oude Codespace naar je nieuwe Codespace. 
- Test of je code het doet, haal de fouten eruit. 
- Bewaar je wijzigingen in GitHub door in je nieuwe Codespace op Commit en Sync te klikken.

#### Scherm delen

*Ik wil mijn scherm delen met iemand anders, hoe doe ik dat?*

In de iconenbalk links op je scherm zie een soort gebogen pijl. Dit is de extension "live-share". Hiermee kun je je scherm delen met andere GitHub gebruikers. 

Deze functie is bedoeld om samen snel een klein probleem op te lossen. Gebruik hem niet meer dan een paar minuten per les. Echte programmeurs verdelen het werk, maken elk hun eigen stuk code in hun eigen Codespace en delen het dan via GitHub. Dat moet jij ook leren.

#### Werken met bestanden

*Ik wil een nieuw bestand maken, de naam van een bestand veranderen, een bestand uploaden, bestanden downloaden of andere dingen met bestanden of mappen doen. Hoe doe ik dat?*

- Met bestanden werken doe je het gemakkelijkst in Codespaces.<br>
In de kolom met iconen links op je scherm zie je bovenaan een icoontje met twee velletjes papier. Klik daarop. Je ziet nu een lijst met al je bestanden en mappen. Mappen kun je uitklappen. Als je dubbelklikt op een bestand, dan wordt het geopend. Als je met je rechtermuisknop op een bestand of map klikt, dan verschijnt er een drop-down menu waarin je meer met het bestand of de map kunt doen.
- Een nieuw bestand of map aanmaken:<br>
Als je muis op de lijst met bestanden staat, dan zie je vlak boven de lijst twee icoontjes met een +. Als je op de linker klikt, dan maak je een nieuw bestand. Als je op de rechter klikt, dan maak je een nieuwe map.
- De naam van een bestand of map veranderen:<br>
Klik met de rechtmuisknop op een bestand of map. Er verschijnt een drop-down menu. Kies "Rename..." in het pull-down menu. Pas de naam aan en druk op Enter.
- Een bestand verplaatsen:<br>
Sleep het bestand van de ene naar de andere map.
- Een bestand uploaden:<br>
Sleep een bestand van je bureaublad naar het lijstje bestanden in Codespaces.<br>
Een andere manier om een bestand te oploaden:<br>
Ga op een map staan, klik op de rechtermuisknop, een pull-down menu verschijnt, kies "Upload..." in het pull-down menu.
- Meerdere bestanden selecteren:<br>
Klik op het bovenste bestand. Beweeg je muis naar een bestand verder naar onderen. Houdt SHIFT ingedrukt terwijl je op het onderste bestand klikt.

## Oude veelgestelde vragen

#### De Github dev omgeving gebruiken
In de Github dev-omgeving kun je meerdere bestanden tegelijk wijzigen, verplaatsen of toevoegen. Het lijkt erg op Gitpod, maar in tegenstelling tot Gitpod kan de Github dev-omgeving je code niet uitvoeren. 

Je komt in de Github dev-omgeving door de punt (".") op je toetsenbord in te drukken op het moment dat je een repo ziet in GitHub. 

Links in het scherm zie je al je bestanden. Enkele mogelijkheden zijn:
- Downloaden van een bestand: Klik met de rechtermuisknop op een bestand en kies "download" in het menu dat verschijnt.
- Toevoegen van nieuwe bestanden kan door bestanden van je bureaublad naar de dev-omgeving te slepen.
- Bestanden kopieren, een andere naam geven, verplaatsen of verwijderen.
- Een map maken, een andere naam geven, verplaatsen of verwijderen (letop: Github kan niet goed overweg met mappen waar geen bestanden in staan)

Als je klaar bent met wijzigen, dan commit je de wijzigingen en push je ze naar GitHub. Druk daarvoor links op het versiebeheer icoon (drie rondjes met 2 lijntjes ertussen) en gebruik het menu onder de drie puntjes dat verschijnt op de plek waar je bestanden stonden. <br>
**LETOP: Als je vergeet te committen en pushen dan worden je wijzigingen niet opgeslagen!!!**

#### De Github website gebruiken
De Github website werkt niet handig voor het aanbrengen van wijzigingen in je code, maar er zijn een aantal functies die je hier wel handig kunt doen.

##### Repo's zoeken
Links in het scherm staan de repo's die je recent en vaak gebruikt hebt. Door op een repo te klikken wordt deze geladen. De link van de repo staat bovenin je browser, deze heb je bijvoorbeeld nodig als je de repo in Gitpod of replit wilt gebruiken.

##### Bekijken wat er in een repo zit
Je kunt snel zien wat er in een repo zit door op de bestanden of mappen in de repo te klikken.

##### Bekijken wat er gewijzigd is
Je kunt alle wijzigingen in een repo terugzien. Een lijst met de laatste wijzigingen krijg je door te klikken op het aantal commits, onder de groene knop met "Code". Van elke commit kun je zien wat er is gewijzigd, klik daarvoor op het nummer van de commit aan het einde van de regel.

##### Alle bestanden uit een repo downloaden
Je kunt alle bestanden in een repo downloaden in een zip-bestand. klik op de groene knop "Code" en kies in het menu dat verschijnt voor "Download ZIP".


#### Git gebruiken 
Veel programmeurs gebruiken git op hun computer om code op de slaan in repo's. Git is een programma waarin alle commando's zitten die nodig zijn om met repo's te werken. Als je hier dagelijks mee werkt en veel commando's uit je hoofd kent, dan werkt dit heel snel. Voor leerlingen is dit niet zo een handige methode, wij gebruiken hem daarom niet.