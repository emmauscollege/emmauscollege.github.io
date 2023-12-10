+++
title = "Ontwikkelomgeving: GitHub, Codespaces en Classroom"
weight = 10
+++

## GitHub

GitHub is een online omgeving waar programmeurs code opslaan en delen. GitHub is gebaseerd op Git. 

Het kost tijd om Git te leren begrijpen, maar een team dat Git begrijpt kan veel efficienter werken. Leeringen die beginnen met programmeren werken veelal samen tegelijk achter 1 computer of typen tegelijk online in hetzelfde document. Het typen en runnen moet dan synchroon lopen. Professionele teams van programmeurs verdelen werk, maken en testen dat in hun eigen kopie van de omgeving en voegen stukjes die werken toe aan het gezamenlijke product. Zo is er altijd een werkende versie van het product en kan iedereen zijn eigen versie op elk moment runnen.

#### GitHub: Functionaliteit

Functionaliteit van GitHub:
- Opslaan van code
- Versiebeheer
- Met meerdere mensen werken aan dezelfde code
- Hosting van static websites
- Toegankelijk via website
- API beschikbaar
- ...

#### GitHub: Gratis aanbod

Git is open-source.

GitHub is eigendom van Microsoft. Met een gratis account kun je bijna alle functionaliteit gebruiken. De betaalde functies zijn gericht op software-bedrijven, in het onderwijs heb je die niet nodig.

#### GitHub: Aan de slag

Tips voor gebruik:
- Maak een gratis GitHub account aan en start met het maken van repositories.
- Maak een organisatie aan in GitHub. Nodig de informaticadocenten op je school uit als (mede)owner van de organisatie. Je kunt dan gemakkelijker met collega informatica-docenten op je school samenwerken en je kunt je schoolwerk gescheiden houden van andere dingen die je op je GitHub account doet. Het is handig om een aparte organisatie te maken waarin je werk van leerlingen bewaard (zie ook onder Classroom).
- Wijzigen van code gaat in de volgende stappen: 
    - change (maak wijzigingen in de code met een editor)
    - stage changes (kies de wijzigingen waarmee je verder wilt, meestal allemaal)
    - commit (maak een foto van je wijzigingen)
    - pull (haal de laatste wijzigingen van anderen op uit GitHub)
    - los eventuele merge-conflicten op (als jij en anderen in dezelfde regels code aanpassingen hebben gedaan, dan moet je handmatig aangeven welke aanpassingen voorrang krijgen) 
    - push (upload jouw wijzigingen inclusief opgeloste merge-conflicten naar GitHub)
- Er zijn instellingen in Git die het gemakkelijker maken voor beginners om ermee te werken, bijvoorbeeld dat alle changes automatisch gestaged worden, dat bij commit automatisch geprobeerd wordt te pullen en pushen, een merge-editor aanzetten die helpt met het oplossen van merge-conflicten etc. In de template-repositories van Emmauscollege vind je de instellingen die wij handig vinden.
- Voor grotere projecten kun je gebruik maken van branches. Een branch bevat een nieuwe functies die meerdere commits bevat. Als de feature klaar is, dan merge je de branch in de main branche. Je kunt incidenten aanmaken om bij te houden welke bugs er zijn of welke uitbreidingen nog gedaan moeten worden. De indicenten kun je koppelen aan wijzigingen in de code. Dit kan handig zijn voor grotere projecten, bijvoorbeeld in 6-vwo. 

#### GitHub: Alternatieven

GitHub wordt heel veel gebruikt, als je specifieke wensen hebt dan zijn er alternatieven voor GitHub.
- Git lokaal op je PC installeren en via de commandline je code opslaan op een andere git-server dan GitHub.
- Gitlab, eveneens gebaseerd op Git, zowel te gebruiken in een cloud omgeving als op eigen servers.

## Codespaces

Codespaces is een online ontwikkelomgeving.

#### Codespaces: Functionaliteit

Functionaliteit van Codespaces:
- Virtual machine in de cloud waarop je een docker image kunt draaien. Configureerbaar via bestanden in .codespaces map.
- Online toegang via webbrowser, inclusief mogelijkheden om bestanden te wijzigen, terminal commando's te geven en server-applicaties te draaien (zoals webserver, database, vnc-server).
- Visual Studio Code editor ingebouwd.
- Met enkel kliks in GitHub kun je een Codespace maken vanuit een GitHub repository. Wijzigingen in je Codespace bewaar je in GitHub (middels commit en push).
- ...

Wat kan niet:
- Een Codespace dag en nacht laten draaien kan niet, want als je de browser afsluit dan stopt de Codespace na enige tijd (half uur). Als een Codespace stopt dan blijven de bestanden in de Codespace bewaard, dus je kunt de Codespace later weer opnieuw starten. Als een Codespace langere tijd (30 dagen) niet gebruikt is, dan wordt hij gewist. De bestanden uit de Codespace verdwijnen dan, wat je vanuit de CodeSpace in GitHub hebt gezet blijft uiteraard wel bestaan.

#### Codespaces: Gratis aanbod

Codespaces maakt onderdeel uit van GitHub. CodeSpaces is geïntegreerd in GitHub. Je GitHub account gebruik je voor CodeSpaces. 

Met een gratis GitHub account kun je per maand 60 uur gebruik maken van Codespaces en gemiddeld 15 GB opslag gebruiken. Je kunt je gebruik inzien, bij overschrijding van de limit wordt Codespaces (niet GitHub) geblokkeerd totdat de maand voorbij is. 

Eén codespace vraagt ongeveer 1 GB data, tegen de opslag limiet loop je normaliter niet aan. 

De 60 uur is voldoende voor bijna alle leerlingen. Een enkele leerling die door de limiet gaat kan een 2e GitHub account aanmaken op een ander email adres, zichzelf als collaborator toevoegen aan de repositories waarin die werkt en dan weer 60 uur vooruit.

Een docent die door de limieten heen gaat kan creditcardgegevens en een bestedingslimiet toevoegen aan zijn account. Dat is normaal gesproken niet nodig. Een tweede account aanmaken kan ook.

#### Codespaces: Aan de slag

Login op GitHub, ga naar een repository, klik op de groene code knop en maak een Codespace. Er wordt een standaard image van een linux server gestart en je bestanden uit de repository worden gekopieerd naar de server. Je kunt de Codespace configureren door een devcontainer.json bestand in de .devcontainer map te plaatsen. Open het Source-Control tab links in het scherm om wijzigingen te bewaren in GitHub. 

#### Codespaces: Alternatieven

Alle alternatieven kunnen samenwerken met GitHub, maar zijn ook zonder GitHub te gebruiken.
- https://gitpod.io/
- https://replit.com/

## GitHub Classroom

Met GitHub Classroom kun je opdrachten klaarzetten voor (grote aantallen) leerlingen.

#### Classroom: Functionaliteit

Wat wel kan:
- Opdrachten aanmaken en uitnodigingen versturen per email naar leerlingen.
- Leerlingen schrijven zichzelf in.
- Leerlingen kunnen zelf groepjes maken, als je groepjes maken aanzet voor die opdracht.
- Bij het inschrijven krijgen leerlingen een kopie van een template-repository uit GitHub die de docent bij de opdracht meegeeft.

Wat niet kan:
- Template-repository aanpassen nadat opdracht is uitgezet.
- Groepjes aanpassen nadat opdracht is uitgezet. Je kunt dit wel handmatig in GitHub doen door de teams die Classroom aanmaakt in GitHub aan te passen.

#### Classroom: Gratis aanbod

Je gebruikt je GitHub account voor classroom. Classroom is geheel gratis, zonder beperkingen. Je kunt de educatie-status aanvragen voor je GitHub account, maar dat is niet nodig. 

#### Classroom: Aan de slag

Tips voor gebruik:
- Maak een organisatie in GitHub waarin je alle leerlingopdrachten neerzet. Gebruik een andere organisatie voor je eigen voorbeelden en templates. Op die manier hou je werk van leerlingen en van docenten gemakkelijk uit elkaar.
- Bij elke opdracht die je aanmaakt kunt je aangeven waarmee de naam van de repositoty die Classroom voor leerlingen in GitHub aanmaakt moet beginnen. Gebruik een systematische naam, dat maakt het vinden van klassen en leerlingen veel gemakkelijker. Bijvoorbeeld :2324-5hin1-website (jaar-klas-opdracht).
- Geef herkenbare identifiers voor leerlingen op in Classroom. Voornamen werkt handiger dan leerlingnummers. Leerlingen koppelen bij inschrijven hun GitHub account aan de identifier. Deze identifiers worden door Classroom toegevoegd aan de namen van de repositories voor leerlingen.
- Leerlingen kiezen hun eigen GitHub accountnaam, deze zie je terug in de teams die Classroom in GitHub aanmaakt. Hou een beetje in de gaten dat de namen die leerlingen kiezen okee zijn.

#### Classroom: Alternatieven

Alternatieven voor Classroom:
- Laat leerlingen zelf hun repo's aanmaken, eventueel op basis van een template-repository die de docent online zet. Voor een eerste keer en niet al teveel leerlingen is dit een prima oplossing.
- De docent maakt de repositories met de hand aan. In een situatie met niet al teveel (enkele tientallen) leerlingen is dit prima te doen.
- Gebruik eigen scripts om repo's aan te maken. Dit hebben wij enige jaren gedaan, omdat Classroom toen nog niet betrouwbaar werkte.

## Documentatie
- GitHub<br>
To be added, er is heeeel veel te vinden. 
    - The EXTREMELY helpful guide to merge conflicts [YouTube](https://youtu.be/HosPml1qkrg?si=r02MvcxlS9AbuPky)
- Codespaces, officiele documentatie<br>
[https://docs.github.com/en/codespaces](https://docs.github.com/en/codespaces)
- GitHub Classroom, officiele documentatie<br>
[https://docs.github.com/en/education/manage-coursework-with-github-classroom](https://docs.github.com/en/education/manage-coursework-with-github-classroom)

