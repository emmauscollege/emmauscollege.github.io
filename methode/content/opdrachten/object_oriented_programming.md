+++
title = "06. OOP voor 6vin2"
weight = 6
+++


## Welkom bij de opdrachten voor OOP

{{% login %}}

Ga naar Replit met de volgende link:

https://replit.com/@Krisvan1/ObjectOrientedProgramming

Fork de repository. Maak eventueel een account aan als je die nog niet hebt.

Elke opdracht kan je zelf testen door op de "Run" knop te drukken.

**TIP:** Je kan ook checken of je opdracht echt klopt door de Unit tests te runnen. Deze vind je of recht naast je console of links onder bij Tools.

**TIP:** Onderaan deze pagina staat een cheat-sheet voor de syntax van JavaScript.

# Classes


{{% checkbox title="Opdracht 1: Maak een object" slug="oop-opdacht1" %}}
Creëer een object genaamd book dat de volgende eigenschappen heeft: title, author, en pages. Print de title en author van het boek naar de console.
{{% /checkbox %}}

{{% checkbox title="Opdracht 2: Maak een array van objecten." slug="oop-opdacht2" %}}
Creëer een array genaamd books die meerdere boekobjecten bevat. Elk boekobject moet de eigenschappen title, author, en pages hebben. Loop door elk boek in de array en print de title en author naar de console.
{{% /checkbox %}}

{{% checkbox title="Opdracht 3: Maak een class." slug="oop-opdacht3" %}}
Maak een class genaamd Book met eigenschappen: title, author, en pages. Deze class moet ook een methode hebben genaamd printDetails die de title en author van het boek print naar de console. Creëer een instantie van deze class, noem het myBook, en roep de printDetails methode aan.
{{% /checkbox %}}

{{% checkbox title="Opdracht 4:  Maak een array van class-instanties." slug="oop-opdacht4" %}}
Creëer een array genaamd myBooks die instanties van de Book class bevat. Loop door elk boek in de array en roep de printDetails methode aan voor elk boek.
{{% /checkbox %}}


Klaar? Ga verder met Opdracht 3 van de oude opdrachten:

https://informatica.emmauscollege.nl/theorie/objectoriented_verwerkingsopdrachten/#opdracht-3


# JavaScript Cheat Sheet

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
