+++
title = "Extra: OOP voor 6vin2"
weight = 10
+++

{{% login %}}

## ❗️ Voordat je start

Ga naar Replit met de volgende link:

https://replit.com/@Krisvan1/ObjectOrientedProgramming

Fork de repository. Maak eventueel een account aan als je die nog niet hebt.

Elke opdracht kan je zelf testen door op de "Run" knop te drukken.

**TIP:** Je kan ook checken of je opdracht echt klopt door de Unit tests te runnen. Deze vind je of recht naast je console of links onder bij Tools.

**TIP:** Onderaan deze pagina staat een cheat-sheet voor de syntax van JavaScript.

# 📦️ Classes


{{% checkbox title="Opdracht 1: Maak een object" slug="oop-opdacht1" %}}
Creëer een object genaamd book dat de volgende eigenschappen heeft: title, author, en pages. Print de title en author van het boek naar de console.
{{% /checkbox %}}

{{% checkbox title="Opdracht 2: Maak een array van objecten." slug="oop-opdacht2" %}}
Creëer een array genaamd books die meerdere boekobjecten bevat. Elk boekobject moet de eigenschappen title, author, en pages hebben. Loop door elk boek in de array en print de title en author naar de console.
{{% /checkbox %}}

{{% checkbox title="Opdracht 3: Maak een class." slug="oop-opdacht3" %}}
Maak een class genaamd Book met eigenschappen: title, author, en pages. Deze class moet ook een methode hebben genaamd printDetails die de title en author van het boek print. Creëer een boek van deze class, noem het myBook, en roep de printDetails methode aan.

**TIP:**: Je kan een methode aanroepen door de naam van de class te gebruiken, gevolgd door een punt en de naam van de methode. Bijvoorbeeld: `myBook.printDetails()`
{{% /checkbox %}}

{{% checkbox title="Opdracht 4:  Maak een array van class-instanties." slug="oop-opdacht4" %}}
Creëer een array genaamd myBooks die instanties van de Book class bevat. Loop door elk boek in de array en roep de printDetails methode aan voor elk boek.
{{% /checkbox %}}


# 🗺️ UML Diagrams

Je hebt keuze! Kies uit een **makkelijke** of **moeilijke** opdracht.

Pak papier of je iPad erbij om een UML diagram te tekenen.

![UML Diagram](https://krisvanmelis.nl/wp-content/uploads/2023/09/UMLExample2.png)

{{% expand "Makkelijk" %}}
{{% checkbox title="Opdracht 5 - Makkelijk: Maak een UML diagram" slug="oop-opdacht5-makkelijk" %}}

Je bent gevraagd om een basis UML klassendiagram te ontwerpen voor een bakkerij systeem. Het systeem moet producten en klanten bijhouden.

## Vereisten

1. **Product**:
    - Elk product heeft een unieke productcode, een naam (bijv. brood, taart, croissant) en een prijs.
    - Producten kunnen worden verkocht of bijgevuld.

2. **Klant**:
    - Klanten hebben een unieke klantID, naam en een aankoopgeschiedenis (een lijst van gekochte producten).
    - Klanten kunnen producten kopen.

## Taak
Ontwerp een UML klassendiagram dat de klassen, attributen, methoden en relaties vastlegt op basis van de verstrekte vereisten.


{{% /checkbox %}}


{{% /expand %}}
{{% expand "Moeilijk" %}}
{{% checkbox title="Opdracht 5 - Moeilijk: Bibliotheeksysteem" slug="oop-opdacht5-moeilijk" %}}


## Achtergrond
Je hebt de taak om een basis UML klassendiagram te ontwerpen voor een bibliotheeksysteem. Het systeem moet boeken, leners en personeelsleden bijhouden.

## Vereisten

1. **Boek**:
    - Elk boek heeft een uniek ISBN-nummer, een titel, een auteur, een publicatiejaar en een status (bijv. beschikbaar, uitgeleend, in onderhoud).
    - Boeken kunnen worden geleend of teruggebracht.

2. **Lener**:
    - Leners hebben een unieke ID, naam, adres en een lijst van boeken die ze hebben geleend.
    - Leners kunnen een boek lenen, mits ze geen achterstallige boeken hebben.
    - Leners kunnen een boek terugbrengen.

3. **Personeel**:
    - Personeelsleden hebben een ID, naam, functie (bijv. bibliothecaris, onderhoud, admin) en een werkschema.
    - Personeel kan boeken aan het systeem toevoegen of verwijderen.
    - Bibliothecarissen kunnen boeken uitlenen aan leners.
    - Onderhoudspersoneel kan een boek markeren als in onderhoud.

4. **Relaties**:
    - Een lener kan meerdere boeken lenen, maar elk boek kan op een bepaald moment slechts door één lener worden geleend.
    - Personeel kan meerdere boeken beheren, en elk boek kan door meerdere personeelsleden worden beheerd.

Geef bij elke relatie aan of het een één-op-één, één-op-veel of veel-op-veel relatie is.

## Taak
Ontwerp een UML klassendiagram dat de klassen, attributen, methoden en relaties vastlegt op basis van de verstrekte vereisten.

{{% /checkbox %}}

{{% /expand %}}

## Oplossingen

{{% expand "Makkelijk" %}}

Je tekening moet er ongeveer zo uitzien:

## Klassen, Attributen en Methoden

### Product
- Attributen:
    - productCode: String (Uniek)
    - naam: String
    - prijs: Number
- Methoden:
    - verkoop(): Void
    - vulBij(): Void

### Klant
- Attributen:
    - klantID: String (Uniek)
    - naam: String
    - aankoopgeschiedenis: Lijst<Product>
- Methoden:
    - koop(product: Product): Void

## Relaties
De volgende relatie zijn met pijlen getekend:
- **Klant - Product**: Een één-op-veel relatie aangezien een klant meerdere producten kan kopen, maar elk product op een bepaald moment slechts door één klant wordt gekocht (per transactie).

{{% /expand %}}

{{% expand "Moeilijk" %}}

Je tekening moet er ongeveer zo uitzien:

## Klassen, Attributen en Methoden

1. **Boek**:
    - Attributen:
        - ISBN: String (Uniek)
        - titel: String
        - auteur: String
        - publicatieJaar: Integer
        - status: String of Enum (beschikbaar, uitgeleend, in onderhoud)
    - Methoden:
        - leenUit(): Void
        - brengTerug(): Void

2. **Lener**:
    - Attributen:
        - lenerID: String (Uniek)
        - naam: String
        - adres: String
        - geleendeBoeken: Lijst<Boek>
    - Methoden:
        - leenBoek(boek: Boek): Void
        - brengBoekTerug(boek: Boek): Void

3. **Personeel**:
    - Attributen:
        - personeelID: String (Uniek)
        - naam: String
        - functie: String of Enum (bibliothecaris, onderhoud, admin)
        - werkschema: String
    - Methoden:
        - voegBoekToe(boek: Boek): Void
        - verwijderBoek(boek: Boek): Void
        - leenBoekUit(boek: Boek, lener: Lener): Void
        - markeerOnderhoud(boek: Boek): Void

## Relaties
De volgende relatie zijn met pijlen getekend:
- **Lener - Boek**: Een één-op-veel relatie aangezien een lener meerdere boeken kan lenen, maar elk boek kan op een bepaald moment slechts door één lener worden geleend.
- **Personeel - Boek**: Een veel-op-veel relatie aangezien een personeelslid meerdere boeken kan beheren en elk boek kan door meerdere personeelsleden worden beheerd.

{{% /expand %}}

# 🌳 Overerving (Inheritence)

Maak de opdrachten van de volgende replit:

https://replit.com/@Krisvan1/Inheritence#index.js

Fork de repository. Maak eventueel een account aan als je die nog niet hebt.

Elke opdracht kan je zelf testen door op de "Run" knop te drukken.


{{% checkbox title="Opdracht 1: Basis class Dier" slug="oop-in-opdacht1" %}}
Maak een basis klasse genaamd Dier met de volgende attributen: naam, leeftijd, en gewicht. Deze klasse moet ook de methoden eten() en slapen() bevatten die respectievelijk "[naam] is aan het eten!" en "[naam] slaapt!" naar de console afdrukken.
{{% /checkbox %}}

{{% checkbox title="Opdracht 2: Afgeleide class Vogel" slug="oop-in-opdacht2" %}} 
Creëer een afgeleide klasse genaamd Vogel die erft van de Dier klasse. Deze klasse moet een extra attribuut vleugelspanwijdte en een methode vliegen() hebben. De vliegen() methode moet "[naam] is aan het vliegen met een vleugelspanwijdte van [vleugelspanwijdte] meters!" afdrukken.

{{% /checkbox %}}

{{% checkbox title="Opdracht 3: Afgeleide class Zoogdier" slug="oop-in-opdacht3" %}}
Maak een andere afgeleide klasse genaamd Zoogdier die ook erft van de Dier klasse. Deze klasse moet een extra attribuut vachtkleur hebben en een methode rennen(). De methode rennen() moet "[naam] is aan het rennen!" naar de console afdrukken.

{{% /checkbox %}}

{{% checkbox title="Opdracht 4: Test je code" slug="oop-in-opdacht4" %}}
Maak een instantie van de Vogel klasse genaamd "Adelaar" met een leeftijd van 5, gewicht van 8 kg, en een vleugelspanwijdte van 2,3 meter. Laat de adelaar eten, slapen, en vliegen.

Maak vervolgens een instantie van de Zoogdier klasse genaamd "Leeuw" met een leeftijd van 3, gewicht van 190 kg, en een vachtkleur van "goudkleurig". Laat de leeuw eten, slapen, en rennen.

{{% /checkbox %}}


**Klaar?** Ga verder met Opdracht 3 van de reguliere opdrachten:

https://informatica.emmauscollege.nl/theorie/objectoriented_verwerkingsopdrachten/#opdracht-3


# 🗒️ JavaScript Cheat Sheet

## Creating an Object
```javascript
var player = {
    name: 'John',
    score: 100,
    level: 2
};
```

## Creating an Array of Objects
```javascript
var players = [
    {
        name: 'John',
        score: 100,
        level: 2
    },
    {
        name: 'Jane',
        score: 150,
        level: 3
    }
];
```

## Accessing Object Properties
```javascript
console.log(player.name); // John
```

## Looping Through an Array of Objects
```javascript
for(var i = 0; i < players.length; i++) {
    console.log(players[i].name + ' has a score of ' + players[i].score);
}
```

## Creating a Class
```javascript
class Player {
    constructor(name, score, level) {
        this.name = name;
        this.score = score;
        this.level = level;
    }

    increaseScore(amount) {
        this.score += amount;
    }

    increaseLevel() {
        this.level++;
    }
    
    printDetails() {
        console.log(this.name + ' has a score of ' + this.score + ' and is on level ' + this.level);
    }
}
```

## Creating an Instance of a Class
```javascript
var player1 = new Player('John', 100, 2);
```

## Accessing Class Properties
```javascript
console.log(player1.name); // John
```

## Using Class Methods
```javascript
player1.increaseScore(20);
console.log(player1.score); // 120

player1.increaseLevel();
console.log(player1.level); // 3

player1.printDetails(); // John has a score of 120 and is on level 3
```

## Creating an Array of Class Instances
```javascript
var players = [
    new Player('John', 100, 2),
    new Player('Jane', 150, 3)
];
```

## Looping Through an Array of Class Instances
```javascript
for(var i = 0; i < players.length; i++) {
    console.log(players[i].name + ' has a score of ' + players[i].score);
}
```
## Inheritance in JavaScript

### Creating a Subclass (Inheritance)
```javascript
class Goalkeeper extends Player {
    constructor(name, score, level, savedGoals) {
        super(name, score, level);
        this.savedGoals = savedGoals;
    }

    printGoalkeeperStatistics() {
        this.printStatistics();
        console.log(`Saved Goals: ${this.savedGoals}`);
    }
}
```

### Creating an Instance of a Subclass
```javascript
var goalkeeper1 = new Goalkeeper('Sam', 90, 3, 5);
```

### Accessing Subclass Properties and Methods
```javascript
console.log(goalkeeper1.savedGoals); // 5
goalkeeper1.printGoalkeeperStatistics();
```