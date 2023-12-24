+++
title = "Gitpod (tot eind 2023)"
weight = 12
+++

*Vanaf begin 2024 wordt GitPod vervangen door GitHub met Codespaces*<br>
Gitpod is een online ontwikkelomgeving waarin je code kunt wijzigen en uitvoeren (en veel meer). We gebruiken dit op het vwo.
<!--more-->

## Wat is Gitpod?
- Gitpod is een online editor (en veel meer)
  - De Gitpod editor is gebaseerd op VS Code. VS Code is een heel populaire editor onder professionele programmeurs.
  - Gitpod werkt op elk apparaat met internettoegang en een moderne webbrowser, er is geen installatie van apps of programma’s nodig
  - Je code wordt direct bewaard op de Gitpod servers, inclusief oude versiesLETOP: In de gratis versie van Gitpod wordt je code van Gitpod verwijderd als je twee weken niets doet.
  - Syntax checks door middel van kleuren van code voorkomt fouten
  - Ondersteuning van heel veel talen: html/css/javascript, python, sqlite, php enzovoort
- Je kunt code die je gemaakt hebt uitvoeren in Gitpod
  - Snel zien wat je code doet in een preview-venster
  - Bekijk en test je websites uitgebreid in je browser door webserver te starten
  - Gebruik de ingebouwde shell access voor gevorderde functies
- Je kunt code die je in Gitpod gemaakt hebt bewaren op GitHub
  - Heel veel goede programmeurs gebruiken GitHub
  - Bewaar de laatste versie van je code op veilig GitHub  (minimaal 1x per week, liefst elke les) 
  - De docent kan helpen als je code op GitHub staat
  - Je kunt efficiënt samenwerken in groepjes als je code op GitHub bewaart

## De eerste keer Gitpod starten
1. Gitpod is gratis, tot maximaal 50 uur per maand.
2. Je hoeft voor het gebruik van Gitpod niets te installeren, alles werkt vanuit de browser
Gebruik Chrome of anders Firefox, in 21/22 zijn er problemen met een wit-scherm geconstateerd bij gebruik in Safari.
3. Ga naar https://gitpod.io/
4. Gebruik je Github-account om in te loggen
5. Geef Gitpod rechten in Github om wijzigingen aan te brengen in jouw repo's (deze stap is verder uitgewerkt onder Q&A "Bewaren op Github lukt niet, er is een foutmelding met access")

## Code maken in Gitpod
1. Ga naar https://gitpod.io/ en log in met je Github account.
2. Klik op de groene knop "New workspace"
3. Knip en plak de link naar de repo op github waar je je code hebt staan. Deze kun je vinden in Github. De link lijkt op https://github.com/emmaus-4h/website-piet/
4. Wijzig je code
5. Test je code
6. Commit je wijzigingen
7. Synchroniseer je code in Gitpod met Github
8. Check in Github dat je codewijzigingen zijn opgeslagen

## Veelgestelde vragen
### Bewaren op Github lukt niet, er is een foutmelding met access
Zet de permissies van Gitpod goed, zodat hij op jouw account in Github wijzigingen kan maken
1. klik op het icoontje van een poppetje linksonderin, een menu verschijnt
2. klik op "Gitpod: Open Acces Control", een nieuw scherm verschijnt nadat je "Open" hebt geklikt in de popup
3. klik op de drie puntjes op de regel "Gitpod" en kies "Edit Permissons" in het menu dat verschijnt
4. Zet alle vinkjes aan in de popup die verschijnt en klik op "update permissions"
5. geef toestemming in github als github daarom vraagt (groene knop).

### Bewaren op Github lukt niet, er is een foutmelding met conflict
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

### Ik kan mijn workspace in gitpod nergens meer vinden 
Als je een workspace twee weken niet gebruikt, dan wordt hij door gitpod verwijderd. Je kunt dan een nieuwe workspace maken van de laatste versie van je code die je in github hebt gecommit. 

### Hoe kan ik zien hoeveel gitpod gebruik ik deze maand nog over heb? 
1. Klik linkonder op het icoontje van een poppetje (je account)
2. Kies "Gitpod: Upgrade subscription", een nieuw scherm verschijnt nadat je in de popup die verschijnt op "Open" hebt geklikt
3. Je ziet midden boven het aantal gebruikte en resterende uren.
4. Beweeg met je muis over de tijd, er verschijnt een kleine popup die aangeeft van welke tot welke datum de huidige maand loopt

### Mijn 50 uur gratis gitpod gebruik zijn op 
Bijna alle leerlingen hebben genoeg aan 50 uur per maand. Als dit bij jouw een keer niet zo is, dan kun je dit als volgt oplossen.
1. Bewaar al je werk op Github vlak voordat je tijd op is. 
2. Maak met een ander e-email adres een nieuwe Github account aan.
3. Vraag de docent je Github account toe te voegen aan de repo waarin je werkt.
4. Login bij Gitpod met je nieuwe Github-account en maak een nieuwe workspace aan met de repo waarin je werkte.

Je hebt nu weer 50 uur.

### Waar vind ik documentatie over Gitpod?
https://www.gitpod.io/docs/
