+++
title = "Replit"
weight = 11
+++

Replit is een online ontwikkelomgeving waarin je code kunt wijzigen en uitvoeren. We gebruiken dit op de havo.
<!--more-->

## Wat is Replit?
- Replit is een online editor
  - Replit werkt op elk apparaat met internettoegang en een moderne webbrowser, er is geen installatie van apps of programma’s nodig
  - Je code wordt direct bewaard op de replit servers, inclusief oude versies
  - Syntax checks door middel van kleuren van code voorkomt fouten
  - Ondersteuning van heel veel talen: html/css/javascript, python, sqlite, php enzovoort
- Je kunt code die je gemaakt hebt uitvoeren in Replit
  - Snel zien wat je code doet in een preview-venster
  - Bekijk en test je websites uitgebreid in je browser dankzij de ingebouwde webserver
  - Gebruik de ingebouwde shell access voor gevorderde functies
- Je kunt code die je in Replit gemaakt hebt bewaren op GitHub
  - Heel veel goede programmeurs gebruiken GitHub
  - Bewaar de laatste versie van je code op veilig GitHub  (minimaal 1x per week, liefst elke les) 
  - De docent kan helpen als je code op GitHub staat
  - Je kunt efficiënt samenwerken in groepjes als je code op GitHub bewaart


## De eerste keer Replit starten
1. Replit is gratis, sommige functies zoals het wijzigen van private repo's is afgeschermd in de gratis versie.
2. Je hoeft voor het gebruik van Replit niets te installeren, alles werkt vanuit de browser
Gebruik bij voorkeur Chrome of anders Firefox.
3. Ga naar https://replit.com/
4. Gebruik je Github-account om in te loggen
5. Geef Replit rechten in Github om wijzigingen aan te brengen in jouw repo's (deze stap is verder uitgewerkt onder Q&A "Bewaren op Github lukt niet, er is een foutmelding met access")

## Code maken in Replit
1. Ga naar https://replit.com/ en log in met je Github account.
2. Klik op de blauwe knop "+Create" en klik in de popup die verschijnt op "Import from Github"
3. Knip en plak de link naar de repo op github waar je je code hebt staan. Deze kun je vinden in Github. De link lijkt op https://github.com/emmaus-4h/website-piet/. Klik op de knop "Import from Github"
4. Wijzig je code
5. Test je code
6. Commit en Push je wijzigingen. Klik daarvoor op het "version control" icoontje (een gesplitst lijntje met twee bolletjes) links in het scherm.
7. Check in Github dat je codewijzigingen zijn opgeslagen

## Veelgestelde vragen

### Mijn code springt niet goed in, hoe los ik dat op?
Klik op het icoontje met de drie streepjes rechtsboven het bestand dat je aan het bewerken bent. Replit auto-format het bestand dat je aan het bewerken bent. 

## => DEZE INFO MOET NOG WORDEN AANGEPAST
### Bewaren op Replit lukt niet, er is een foutmelding met access
Zet de permissies van Gitpod goed, zodat hij op jouw account in Github wijzigingen kan maken
1. klik op het icoontje van een poppetje linksonderin, een menu verschijnt
2. klik op "Gitpod: Open Acces Control", een nieuw scherm verschijnt nadat je "Open" hebt geklikt in de popup
3. klik op de drie puntjes op de regel "Gitpod" en kies "Edit Permissons" in het menu dat verschijnt
4. Zet alle vinkjes aan in de popup die verschijnt en klik op "update permissions"
5. geef toestemming in github als github daarom vraagt (groene knop).

### Bewaren op Replit lukt niet, er is een foutmelding met conflict
Er zijn conflicten tussen jouw wijzigingen in Gitpod en de wijzigingen die gelijktijdig, meestal door een teamgenoot, gemaakt zijn in een repo. Je moet handmatig kiezen welke wijzigingen je wilt bewaren.
1. Commit je wijzigingen
2. Pull alle wijzigingen uit Github naar Gitpod
3. Kies in de editor welke van de wijzigingen met een conflict je wilt bewaren
4. Test je programma
5. Commit
6. Push je wijzigingen naar Github

### Hoe open ik een voorbeeldvenster met mijn website?
1. Klik rechtsonder op "Ports: xxxx", linksboven verschijnt een menu
2. Klik linksboven op de regel met de poort
3. Klik op het wereldbolletje achteraan op de regel met de poort, een popup verschijnt
4. Klik op "Open" in de popup.

### Hoe update ik het voorbeeldvenster?
Druk op reload in je voorbeeldvenster

### Hoe kan ik terug naar de laatste versie op GitHub?
1. Ga naar https://gitpod.io/ en log in met je Github account.
2. Klik op de groene knop "New workspace"
3. Knip en plak de link naar de repo op github waar je je code hebt staan. Deze kun je vinden in Github. De link lijkt op https://github.com/emmaus-4h/website-piet/

### Mijn code springt niet goed in, hoe los ik dat op?
Klik op [option]+[shift]+f. Gitpod auto-format het bestand dat je aan het bewerken bent. 

### Waar vind ik documentatie over Gitpod?
https://www.gitpod.io/docs/
