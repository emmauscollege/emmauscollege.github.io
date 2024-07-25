+++
title = "GitHub"
weight = 10
+++

GitHub is een website waar je code kunt opslaan.
<!--more-->

## Wat is GitHub?
GitHub is een website waar je code kunt opslaan 
- Heel veel goede programmeurs gebruiken GitHub
- Heel veel programmeeromgevingen kunnen samenwerken met GitHub
- GitHub bewaart alle oude versies van je code
- Code op GitHub kun je gemakkelijk delen met anderen
- GitHub biedt heel veel speciale mogelijkheden om in groepen aan dezelfde code te werken

GitHub kun je zien als een soort cloudopslag voor je code. Github slaat code op in repositories. Een repository (kortweg: repo) bevat de code voor één project of opdracht. De kern van een repository zijn de bestanden.

## Een account aanmaken
1. Ga naar https://www.github.com/ (gebruikt Chrome of Firefox, in 21/22 werkt dit niet in Safari)
2. Klik op sign-up
3. Gebruik je email adres van school (1xxxxx@emmauscollege.nl)
4. Zorg dat je het wachtwoord dat je kiest terug kunt vinden
5. Kies als username je voornaam met een letter van je achternaam, als die al bezet is voeg je een nummer toe. Bijvoorbeeld jamesb007
6. Bevestig je account door te klikken op de link in de mail die je ontvangt van GitHub

## Hoe werkt code wijzigen in Github?
Er zijn veel manieren om code die je in GitHub bewaard te wijzigen. Bijna altijd maak je eerst een kopie van GitHub in je eigen ontwikkelomgeving (je computer of een online ontwikkelomgeving zoals Gitpod of Replit). Dit heet clonen (spreek uit als "kloonen"). Vervolgens wijzig en test je code die in je clone zit. Als een wijziging goed is, dan zet je die terug op GitHub. Dit wijzigen gaat in de volgende stappen:
1. **Pull** : Haal alle updates van GitHub binnen in je lokale repository.
2. **Codeer** : Maak / verander je programmeercode en test of het werkt.
3. **Save** : Sla je veranderingen op.
4. **Probeer** : Test uit of het werkt.
5. **Stage** : Zet de gewijzigde bestanden klaar voor de commit.
6. **Message** : Typ een korte maar begrijpelijke commitboodschap.
7. **Commit** : Maak een nieuw punt in je tijdlijn.
8. **Pull** : Kijk of er intussen geen nieuwe wijzigingen in GitHub zijn gemaakt door een team-genoot. 
8. **Push** : Duw je commit van je 'lokale' repository naar je (cloud) repository op GitHub.

### Hoe werkt versiebeheer in GitHub?
Je kunt je git het gemakkelijkst voorstellen als een tijdlijn. De punten op de tijdlijn zijn alle versies die jij vanaf het begin hebt 'opgeslagen':

Hoe werkt dit? Tijdens het programmeren werk je vaak zo:

- Maak / verander je programmeercode.
- Sla je veranderingen op.
- Test uit of het werkt.

Het maakt eigenlijk niet uit of je hierbij gebruik maakt van GitPod, Repl.it, Arduino of een andere programmeeromgeving.

Met het gebruik van git komt daar nog een stap bij: de commit. Een commit doen betekent dat je een nieuw punt aan je tijdlijn toevoegt. Dit doe je als volgt:

- Zet de bestanden klaar voor de commit
- Typ een korte maar begrijpelijke commitboodschap
- Commit

### Hoe werkt samenwerken in GitHub?
GitHub functioneert als de centrale cloudopslag waar iedereen mee synchroniseert.
Het is belangrijk om te beseffen dat je code in je programmeeromgeving en GitHub **wel aan elkaar verbonden, maar niet automatisch gesynchroniseerd** zijn. Je zult dit handmatig moeten doen. Maak je gebruik van GitHub, dan voer je na je commit een synchronisatie uit:

- Duw je commit van je 'lokale' repository naar je repository op GitHub.

Wanneer je samenwerkt met anderen, wil je als je later verdergaat eerst eventuele aanpassingen van je teamgenoten binnenhalen. Als zij die netjes hebben geduwd naar de repository op GitHub, kun jij die eenvoudig binnenhalen. Bij samenwerken in een team wordt stap 1 dus:

- Haal eventuele nieuwe commits van je GitHub repository binnen.


## Gitpod gebruiken
Gitpod (of andere online ontwikkelomgevingen) heeft een koppeling met GitHub. Dat betekent dat je vanuit Gitpod wijzigingen in GitHub kunt opslaan. Zie de [handleiding van Gitpod](../gitpod/) op deze deze website voor meer informatie.

## De Github dev omgeving gebruiken
In de Github dev-omgeving kun je meerdere bestanden tegelijk wijzigen, verplaatsen of toevoegen. Het lijkt erg op Gitpod, maar in tegenstelling tot Gitpod kan de Github dev-omgeving je code niet uitvoeren. 

Je komt in de Github dev-omgeving door de punt (".") op je toetsenbord in te drukken op het moment dat je een repo ziet in GitHub. 

Links in het scherm zie je al je bestanden. Enkele mogelijkheden zijn:
- Downloaden van een bestand: Klik met de rechtermuisknop op een bestand en kies "download" in het menu dat verschijnt.
- Toevoegen van nieuwe bestanden kan door bestanden van je bureaublad naar de dev-omgeving te slepen.
- Bestanden kopieren, een andere naam geven, verplaatsen of verwijderen.
- Een map maken, een andere naam geven, verplaatsen of verwijderen (letop: Github kan niet goed overweg met mappen waar geen bestanden in staan)

Als je klaar bent met wijzigen, dan commit je de wijzigingen en push je ze naar GitHub. Druk daarvoor links op het versiebeheer icoon (drie rondjes met 2 lijntjes ertussen) en gebruik het menu onder de drie puntjes dat verschijnt op de plek waar je bestanden stonden. <br>
**LETOP: Als je vergeet te committen en pushen dan worden je wijzigingen niet opgeslagen!!!**

## De Github website gebruiken
De Github website werkt niet handig voor het aanbrengen van wijzigingen in je code, maar er zijn een aantal functies die je hier wel handig kunt doen.

### Repo's zoeken
Links in het scherm staan de repo's die je recent en vaak gebruikt hebt. Door op een repo te klikken wordt deze geladen. De link van de repo staat bovenin je browser, deze heb je bijvoorbeeld nodig als je de repo in Gitpod of replit wilt gebruiken.

### Bekijken wat er in een repo zit
Je kunt snel zien wat er in een repo zit door op de bestanden of mappen in de repo te klikken.

### Bekijken wat er gewijzigd is
Je kunt alle wijzigingen in een repo terugzien. Een lijst met de laatste wijzigingen krijg je door te klikken op het aantal commits, onder de groene knop met "Code". Van elke commit kun je zien wat er is gewijzigd, klik daarvoor op het nummer van de commit aan het einde van de regel.

### Alle bestanden uit een repo downloaden
Je kunt alle bestanden in een repo downloaden in een zip-bestand. klik op de groene knop "Code" en kies in het menu dat verschijnt voor "Download ZIP".


## Git gebruiken 
Veel programmeurs gebruiken git op hun computer om code op de slaan in repo's. Git is een programma waarin alle commando's zitten die nodig zijn om met repo's te werken. Als je hier dagelijks mee werkt en veel commando's uit je hoofd kent, dan werkt dit heel snel. Voor leerlingen is dit niet zo een handige methode, wij gebruiken hem daarom niet.

## Veelgestelde vragen
### GitHub 404 fout
*Ik heb via email een link ontvangen om toegang te krijgen tot een repo, maar als ik op de link druk dan krijg ik een 404 fout. Wat moet ik doen?*

Login op GitHub en druk daarna nogmaals op de link.
