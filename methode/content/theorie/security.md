+++
title = "T9. Security"
weight = 9
+++

Over de beveiliging van computers en data.
<!--more-->

## Theorie
- [Reader security](Module-SECURITY-H1-H6.pdf), hoofdstuk 2 t/m 6
- [Handout lespresentaties](handout-security-2223.pdf)
- Overig materiaal op deze pagina

## Naslagmateriaal toets
- [Klik om te downloaden](referentieblad_security.pdf)

## Uitlegvideo's
Onderstaande video's horen niet bij de verplichte stof, maar kunnen wel helpen de stof te begrijpen of extra informatie geven als je meer wilt weten.
- [AES-encryptie: de details](https://www.youtube.com/watch?v=O4xNJsjtN6E)
- [Diffie Hellman m.b.v. verf](https://www.youtube.com/watch?v=YEBfamv-_do)
- [Uitleg en mogelijkheden van public key cryptography](https://www.youtube.com/watch?v=GSIDS_lvRv4)
- [Extra uitleg asymmetrische encryptie](https://www.youtube.com/watch?v=AQDCe585Lnc)
- [De wiskundige kant van RSA-encryptie](https://www.youtube.com/watch?v=wXB-V_Keiu8)


## Leerdoelen

##### Thematisch geordend:
###### algemeen
-  Je kent in de context van security de principes confidentiality, integrity, availability, kunt deze uitleggen en toepassen op een casus.
-  Je kunt uitleggen wat phishing is.
-  Je kunt uitleggen wat social engineering is.
-  Je kunt drie methoden om te hacken beschrijven.
-  Je kunt uitleggen wat een dictionary attack is.
-  Je kunt uitleggen hoe een botnet wordt opgezet en wat er mee wordt gedaan.
-  Je kunt uitleggen wat authenticatie is.
-  Je kunt de sterkte van wachtwoorden kunnen bepalen of vergelijken.
-  Je kun aan de hand van een wachtwoordformaat uitrekenen hoeveel mogelijkheden maximaal moeten worden gecontroleerd in een brute force attack, zowel met als zonder gebruik van een dictionary. [46 + overig materiaal]
-  Je kunt uitleggen wat two factor authentication (2FA) is.
- Je kunt werken met de analogie van Alice, Bob en Eve (of Chris).
- Je kunt uitleggen wat een 'man-in-the-middle-attack' is.

###### hashing
- Je kent de algemene kenmerken van een hash(functie).
- Je kunt een paar voorbeelden geven van populaire hash-algoritmen
- Je kent in de context van hashing de begrippen salting en collision 
- Je kunt verschillende toepassingen van hashing uitleggen, zoals wachtwoordverificatie, het controleren van de authenticiteit van data of het identificeren van bestanden.

###### encryptie
- Je kunt uitleggen wat het verschil is tussen symmetrische en asymmetrische cryptografie en herkennen of een vorm van encryptie symmetrisch of asymmetrisch is.
- Je begrijpt hoe de versleuteling met behulp van (Caesar)substitutie werkt en je kunt er een boodschap mee versleutelen en ontcijferen
- Je begrijpt hoe de versleuteling met behulp van transpositie werkt en je kunt met behulp van een gegeven transpositiemethode een boodschap versleutelen en ontcijferen.
- Je begrijpt hoe de versleuteling met behulp van Vigenèresubstitutie werkt en je kunt er met een uitgeprinte hulptabel een boodschap mee versleutelen en ontcijferen.
- Je kunt uitleggen wat versleuteling met m.b.v. een one time pad (of: eenmalig blokcijfer) inhoudt en waarom deze manier van versleutelen, onder de juiste voorwaarden, niet te kraken is. Je kent deze voorwaarden.
- Je weet wat de (binaire) XOR-operatie is, op welke wijze deze een rol kan vervullen bij versleuteling en kunt deze operatie toepassen.
- Je kunt in grote lijnen uitleggen via welke vier stappen AES-encryptie werkt.

###### Diffie-Hellman
- Je weet hoe sleuteluitwisseling m.b.v. Diffie-Hellman plaatsvindt en kunt dit voordoen met gegeven getallen p en g.
- Je begrijpt hoe de versleuteling met behulp van RSA werkt en je kunt er met gegeven eenvoudige sleutels m.b.v. je grafische rekenmachine een boodschap mee versleutelen en ontcijferen.
- Je kunt met een gegeven getal p en q m.b.v. je grafische rekenmachine zelf een publiek en privé sleutelpaar genereren.
- Je kunt uitleggen welke twee functies encryptie met een public en private sleutelpaar heeft.

###### web
- Je kunt uitleggen welke de functies van een webcertificaat heeft en welke informatie het daarvoor bevat.
- Je weet welke stappen een browser uitvoert om een webcertificaat te controleren.
- Je weet wat een stamcertificaat / rootcertificate is.
- Je kunt de rol van certificaat-autoriteiten beschrijven.
- Je kunt uitleggen welke stappen in de communicatie tussen browser en webserver plaatsvindt om een versleutelde verbinding tot stand te brengen.
- Je kunt uitleggen wat een cookie is en welke functie een cookie heeft.
- Je kunt het verschil tussen HTTP en HTTPS uitleggen.
- Je kunt aan de hand van de inhoud van een website beredeneren of het onverantwoord is om deze met behulp van HTTP te benaderen.



##### Behorende bij reader Security met toegevoegd [paginanummer]:

###### H2:
- Je kunt uitleggen wat authenticatie is. [44]
- Je kunt uitleggen wat two factor authentication (2FA) is. [44]
- Je kunt uitleggen hoe een botnet wordt opgezet en wat er mee wordt gedaan. [45]
- Je kunt de sterkte van wachtwoorden kunnen bepalen of vergelijken. [46]
- Je kun aan de hand van een wachtwoordformaat uitrekenen hoeveel mogelijkheden maximaal moeten worden gecontroleerd in een brute force attack, zowel met als zonder gebruik van een dictionary. [46 + overig materiaal]
- Je kunt uitleggen wat phishing is. [52]

###### H3:
- Je kunt uitleggen wat social engineering is [55]
- Je kunt drie methoden om te hacken beschrijven. [59]
- Je kent in de context van security de principes confidentiality, integrity, availability, kunt deze uitleggen en toepassen op een casus. [61]
-  Je kunt werken met de analogie van Alice, Bob en Eve (of Chris). [63]

###### H4:
- Je begrijpt hoe de versleuteling met behulp van (Caesar)substitutie werkt en je kunt er een boodschap mee versleutelen en ontcijferen [65]
- Je begrijpt hoe de versleuteling met behulp van transpositie werkt en je kunt met behulp van een gegeven transpositiemethode een boodschap versleutelen en ontcijferen [66]
- Je begrijpt hoe de versleuteling met behulp van Vigenèresubstitutie werkt en je kunt er met een uitgeprinte hulptabel een boodschap mee versleutelen en ontcijferen. [72]

###### H5
- Je kunt uitleggen wat versleuteling met m.b.v. een one time pad (of: eenmalig blokcijfer) inhoudt en waarom deze manier van versleutelen, onder de juiste voorwaarden, niet te kraken is. Je kent deze voorwaarden. [76]
- Je weet wat de (binaire) XOR-operatie is, op welke wijze deze een rol kan vervullen bij versleuteling en kunt deze operatie toepassen [78]
- Je kunt in grote lijnen uitleggen via welke vier stappen AES-encryptie werkt. [80 + overig materiaal]

###### H6
- Je kunt het verschil tussen HTTP en HTTPS uitleggen. [86]
- Je kunt uitleggen wat het verschil is tussen symmetrische en asymmetrische cryptografie en herkennen of een vorm van encryptie symmetrisch of asymmetrisch is. [89]
- Je weet hoe sleuteluitwisseling m.b.v. Diffie-Hellman plaatsvindt en kunt dit voordoen met gegeven getallen p en g. [92]
- Je kunt uitleggen welke stappen in de communicatie tussen browser en webserver plaatsvindt om een versleutelde verbinding tot stand te brengen. [93]
- Je kunt aan de hand van de inhoud van een website beredeneren of het onverantwoord is om deze met behulp van HTTP te benaderen. [93]
- Je begrijpt hoe de versleuteling met behulp van RSA werkt en je kunt er met gegeven eenvoudige sleutels m.b.v. je grafische rekenmachine een boodschap mee versleutelen en ontcijferen. [94 + overig materiaal]
- Je kunt met een gegeven getal p en q m.b.v. je grafische rekenmachine zelf een publiek en privé sleutelpaar genereren. [overig materiaal]
- Je kunt uitleggen welke twee functies encryptie met een public en private sleutelpaar heeft. [94 + overig materiaal]
- Je kunt uitleggen wat een 'man-in-the-middle-attack' is. [96]
- Je kan uitleggen welke de functies van een webcertificaat heeft en welke informatie het daarvoor bevat. [97]
- Je weet welke stappen een browser uitvoert om een webcertificaat te controleren. [97]
- Je weet wat een stamcertificaat / rootcertificate is. [98]
- Je kunt de rol van certificaat-autoriteiten beschrijven. [100]


##### Behorend bij overig materiaal:

- Je kunt uitleggen wat een cookie is en welke functie een cookie heeft.
- Je kunt uitleggen wat een dictionary attack is.
- Je kent de algemene kenmerken van een hash(functie).
- Je kunt een paar voorbeelden geven van populaire hash-algoritmen
- Je kent in de context van hashing de begrippen salting en collision 
- Je kunt verschillende toepassingen van hashing uitleggen, zoals wachtwoordverificatie, het controleren van de authenticiteit van data of het identificeren van bestanden.

## Oefenopgaven
- [Oefenopgaven](security_oefenopgaven.pdf)
- [Uitwerkingen](security_oefenopgaven_uitwerking.pdf)
