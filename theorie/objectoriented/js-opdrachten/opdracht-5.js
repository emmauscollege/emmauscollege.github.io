/* Verwerkingsopdracht 5 – Bibliotheek (EINDOPDRACHT)

   Wat moet je tonen (zoals in vorige opdrachten):
   - Classes en objecten
   - Overerving
   - Encapsulatie (private velden met #, getters/setters)
   - Associaties (arrays met andere objecten)

   SCENARIO
   --------
   De gemeente wil haar bibliotheeksysteem moderniseren. In plaats van papieren fiches moet voortaan alles digitaal worden beheerd. 
   Jij krijgt de opdracht om een eenvoudige prototypeversie te bouwen waarmee de bibliotheek haar collectie en leden kan beheren.

   Een bibliotheek bezit verschillende producten zoals boeken en dvd's. 
   Elk product dat de bib binnenkomt krijgt een uniek ID toegewezen wat nooit meer veranderd mag worden.
   Beide producten hebben ook een titel en publicatiejaar (altijd na 1960). 
   Boeken hebben ook een auteur en een aantal pagina's. Aantal pagina's is altijd groter dan 0.
   dvd's hebben een regisseur en een duurtijd in minuten. Duur in minuten is altijd groter dan 0.

   De bibliotheek heeft ook leden. Elk lid heeft een naam en krijgt bij registratie standaard een lidnummer dat niet meer gewijzigd mag worden.
   Leden kunnen maximaal 5 verschillende producten lenen van de bib. Ze kunnen producten weer inleveren om opnieuw dingen te mogen lenen.
   Leden kunnen ook een boete krijgen als ze hun producten te laat terugbrengen. Deze boete is altijd positief. De boete kan ook betaald worden waardoor de boete van het lid terug op 0 komt.

   Het hele systeem moet zo werken dat andere gemeenten dit ook kunnen gebruiken. Dit door hun eigen bibliotheek met producten en leden aan te maken.
   Een bibliotheek heeft dus een naam, collectie en leden. 
   Na aanmaken van een bibliotheek moeten er nog producten en leden kunnen worden toegevoegd.
   Op elk moment moeten ook de producten en leden van een specifieke bib kunnen worden geprint.


   DEEL 1 – UML (papier/whiteboard/diagramtool, NIET in code)
   -----------------------------------------------------------
   Teken een UML-diagram met:
    * Alle klassen die nodig zijn om dit project te maken
      * Per klasse de naam van de klasse
      * Per klasse alle atributen die de klasse heeft 
        * Zet de naam van het attribuut : het type (number, string, boolean, date, object, ...)
        * Voeg een +/- vooraan toe om aan te geven of het private of public is
      * Per klasse alle methoden die de klasse heeeft
        * Noteer de naam, en als ze  aanwezig zijn het parameter type en/of return type
    * Teken alle oererving relaties met juiste pijl(en) (met lege driehoek als punt)
    * Noteer naast de klasse naam  "abstract" voor alle abstracte klassen
    * Teken voor alle associatoes de pijlen met de relaties (1-1, 1-5, 1-*, *-*, ...)

   DEEL 2 – Implementatie
   -----------------------------------
   Neem de UML diagram uit de vorige stap en zet deze om naar code. Gebruik de vorige opdrachten als je vastloopt met iets. 
   Begin eerst met de superklasse te maken, daarna de subklassen, en daarna de klassen met Associatie (zodat de klassen die deze klasse nodig heeft al gemaakt zijn).
   Werk per kasse met het opschrijven van de klasse en waarvan het extend, dan de atributen, de constructor, en daarna andere methoden.


*/



