+++
title = "Arduino IDE"
weight = 13
+++

Arduino IDE is een programma waarin je code kunt schrijven en downloaden in je Arduino.
<!--more-->

## Wat is de Arduino IDE?
De Arduino IDE is een programma waarmee je je Arduino kunt programmeren.
De Arduino IDE is beschikbaar voor computers met Windows, Linux en MacOS. Het programma is niet beschikbaar voor iPads en Chromebooks.
Functies van de Arduino IDE:
- code-editor
- compileren
- gecompileerde code uploaden naar een Arduino microcontroller (via een USB-kabel)

## Installeren van het programma
Op de schoolcomputers is de Arduino-IDE al geïnstalleerd. Als je Arduino thuis wilt gebruiken, dan moet je het zelf installeren. Dat gaat als volgt.
1. De Arduino IDE is gratis. Je hoeft geen account aan te maken.
2. Download de Arduino IDE van
[https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
3. Installeer het programma zoals je gewend bent om andere programma's te installeren op je computer.

## Je eerste Arduino schets
1. Start de Arduino IDE
2. Sluit de Arduino met een USB-kabel aan op de laptop
3. Stel de juiste Arduino in. Klik in het menu op "Hulpmiddelen"->"Board"->de_Arduino_die_je_hebt. De rode Arduino's op school zijn "Aduino Nano".
4. Stel de USB-poort in waarop je de Arduino hebt aangesloten. Klik in het menu op "Hulpmiddelen"->"Poort"->kies_de_juiste_poort. Meestal is de juiste poort iets met "arduino" of "mega" en iets zonder "bluetooth". 
5. Maak een schets. Een programma voor je Arduino microcontroller wordt vaak een schets (Engels: sketch) genoemd. Je kunt beginnen met een voorbeeld-schets. Klik in het menu op "Bestand"->"Voorbeelden"->"Basics"->"Blink"
6. Compileer de schets (vertaal je code naar machinetaal die de Arduino gebruikt). Klik in het menu op "Schets"->"Verifeer/Compileer".
7. Upload (verstuur naar je Arduino via de USB-kabel). Klik in het menu op "Schets"->"Upload". 
8. Je ziet nu een klein ledje op je Arduino die knippert.
9. Verander de code, bijvoorbeeld delay(1000) aanpassen in delay(200). Herhaal stap 7. Je zult zien dat de Arduino stap 6 (compileren) vanzelf opnieuw doet, omdat je de code hebt aangepast. Het ledje knippert nu sneller. Nu je stap 9 gedaan hebt, weet je zeker dat het jouw programma is dat in de Arduino zit. De Arduino onthoudt namelijk het laatste programma, ook als de stroom eraf is geweest, dus het kan zijn dat het knipperend-led programma er al door een vorige leerling in is gezet. 

## Extra libraries installeren
1. De ingewikkeldere sensoren en actuatoren die je kunt aansluiten op je Arduino, zoals displays, hebben libraries nodig om ze te kunnen programmeren. \
   Het installeren van libraries in de Arduino kan via het menu "Hulpmiddelen" -> "Bibliotheken beheren". \
   Het vinden van de juiste bibliotheek kan wel eens lastig zijn, vraag het de docent als je twijfelt. \
   Goede biblitheken bevatten voorbeeld-code die na installatie van de bibliotheek in de Arduino IDE terug te vinden is in het menu onder "Bestand" -> "Voorbeelden"

## Meer informatie
1. Meer informatie over de Arduino-taal vind je op \
   [https://www.arduino.cc/](https://www.arduino.cc/) klik op "documentation" -> "reference"
2. Meer informatie over de pinnen van je Arduino vind je op \
   [https://www.arduino.cc/](https://www.arduino.cc/) klik op "hardware" -> kies jouw Arduino -> kies het tabblad "FAQ"
    
## How-to
### Schets opslaan
1. Kies in het menu "Bestand" -> "Opslaan als", kies een map en geef je schets een naam. Een schets wordt altijd opgeslagen in een map met dezelfde naam als de schets.

## Q&A
### Hij doet het niet
1. Kijk of de USB-kabel goed in de Arduino zit (je voelt een kleine klik)
2. Kijk of je de juiste Arduino hebt aangeven in de IDE (Arduino Nano)
3. Kijk of je de juiste USB-poort het aangegeven in de IDE
4. Kijk of er foutmeldingen zijn bij uploaden en lees die aandachtig
### Bij het uploaden krijg ik de melding "avrdude: ser_open(): can't open device"...
Je hebt waarschijnlijk vergeten de juiste USB-poort te kiezen. Kies de juiste USB-poort in het menu onder "Hulpmiddelen"->"Poort"
### Ik krijg één of meerdere foutmelding(en) tijdens het compileren
Je hebt fout gemaakt in de code. Bekijk de bovenste foutmelding. Kijk of je de melding begrijpt. Er staat bij op welke regel de fout gevonden is. Probeer de fout in je code op te lossen. Compileer de code daarna opnieuw.
### Ik krijg een foutmelding met "undefined" tijdens het compileren
Je hebt waarschijnlijk een variabele gebruikt zonder deze te declareren of een typefout gemaakt in de naam van de variabele.
### Compileren en uploaden gaat goed, maar mijn programma doet niet wat ik wil
Laat je programma berichten op de Seriële monitor zetten, zodat kunt meekijken wat er gebeurt en de fout kunt vinden. De seriële monitor van Arduino is een soort console, die je misschien kent van eerdere opdrachten.
1. Zet in de setup() functie de opdracht `Serial.begin(115200);`
2. Zet aan het begin van loop() functie de opdracht `Serial.println("Start");`
3. Voeg op meer nuttige plaatsen berichten toe, zodat je weet welke code wel en niet wordt uitgevoerd.
5. Je kunt ook de inhoud van variabelen of de uitkomst van functies afdrukken, bijvoorbeeld met `Serial.println("Milliseconde na opstarten" + millis());`
4. Open voordat je programma upload de seriele monitor door in de Arduino-IDE te klikken op het menu "Hulpmiddelen" -> "Seriële monitor", let op dat de snelheid staat ingesteld op 115200.
