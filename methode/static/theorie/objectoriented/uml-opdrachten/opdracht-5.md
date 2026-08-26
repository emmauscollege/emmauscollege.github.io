# Opdracht 5: Beheer van een sportclub

Ontwerp en programmeer een systeem voor het beheren van een sportclub.  
Het systeem moet gebruikmaken van **alle vier de OOP-principes die je hebt geleerd**:

- Klassen & objecten  
- Overerving  
- Inkapseling (private velden met getters/setters)  
- Associaties (objecten die andere objecten gebruiken)

---

## Wat moet het systeem kunnen?

De sportclub heeft:

- verschillende **soorten leden**  
  (bijv. gewone leden, jeugdleden, trainers)
- **teams** waarin leden samen sporten
- een **club** die de teams en leden beheert
- **activiteiten** zoals trainingen of wedstrijden, waaraan teams deelnemen

### Gegevens
- Een **lid** heeft een naam, een lidnummer en een geboortedatum  
- Een **trainer** is een soort lid en heeft daarnaast een specialisatie (bijv. voetbal of tennis)
- Een **team** heeft een naam en een lijst van leden die in het team spelen
- Een **activiteit** heeft een titel, een datum en een team dat meedoet
- De **club** heeft een naam en houdt lijsten bij van alle leden, teams en activiteiten

---

## Eisen aan je ontwerp

- Gebruik **getters en setters** om gegevens veilig aan te passen  
- Gebruik **overerving** om dubbelingen te voorkomen  
- Gebruik **associaties** om relaties tussen objecten weer te geven  
  (bijv. een activiteit **hoort bij** een team)

---

## Hulpvragen

Om je op weg te helpen, denk na over deze vragen:

- Welke **klassen** heb je nodig?  
  (bijv. Club, Team, Lid, Jeugdlid, Trainer, Activiteit)
- Welke **eigenschappen (attributen)** moet elke klasse hebben?
- Welke klassen kunnen een **hiërarchie** vormen door overerving?
- Welke **methodes** zijn handig?  
  (bijv. leden toevoegen aan een team, activiteiten tonen, geboortedatum ophalen, alle teams en hun leden tonen)
- Waar moet je **private velden** gebruiken met getters en setters?

---

## Inleveren

- Teken een **UML-diagram** van jouw ontwerp en maak er een foto/screenshot van.
- Noem het bestand: `5` en upload dit in de inlevermap.

---

## Extra uitdaging

- Maak in de inlevermap een bestand genaamd **`sportclub.js`**.
- Zet daarin de **JavaScriptcode die bij jouw UML-diagram hoort**.



