+++
title = "GitHub"
+++

## TL;DR
Git en GitHub zijn superhandig bij het programmeren, zowel alleen als in een team.
Ga naar [het stappenplan](#8-stappen) hieronder om te zien hoe je dit bij het programmeren gebruikt.


## Wat is GitHub?
GitHub is een website waarop je gemakkelijk je programmeercode kunt opslaan. Je moet het zien als een soort cloudopslag voor je code.
Heb je eenmaal een account in GitHub aangemaakt, dan kun je *repositories* maken. Een repository bevat de code voor één project of opdracht.
De kern van een repository zijn de bestanden. GitHub biedt echter nog veel meer functies aan, zoals planborden (projects) en lijsten waarop je taken (issues) kunt bijhouden.

## Git
GitHub is genoemd naar *git*. Git is zgn. versiecontrolesysteem, ontwikkeld door Linus Torvalds, de maker van het besturingssysteem Linux.
Git is een prachtig hulpmiddel waarmee je:
- gemakkelijk terugkunt naar eerdere versies van je code.
- gemakkelijk tegelijk met anderen aan dezelfde code kunt werken zonder dat alles door de war gaat

### Tijdlijn
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

### Lokaal en cloud (=>GitHub)
Git heeft GitHub niet nodig om goed te kunnen werken.
Toch heeft het veel voordelen om gebruik te maken van git in combinatie met GitHub, helemaal als je met anderen wilt samenwerken aan dezelfde code.
GitHub functioneert dan als de centrale cloudopslag waar iedereen mee synchroniseert.
Het is belangrijk om te beseffen dat je code in je programmeeromgeving en GitHub **wel aan elkaar verbonden, maar niet automatisch gesynchroniseerd** zijn. Je zult dit handmatig moeten doen. Maak je gebruik van GitHub, dan voer je na je commit een synchronisatie uit:

- Duw je commit van je 'lokale' repository naar je repository op GitHub.

Wanneer je samenwerkt met anderen, wil je als je later verdergaat eerst eventuele aanpassingen van je teamgenoten binnenhalen. Als zij die netjes hebben geduwd naar de repository op GitHub, kun jij die eenvoudig binnenhalen. Bij samenwerken in een team wordt stap 1 dus:

- Haal eventuele nieuwe commits van je GitHub repository binnen.


## 8 Stappen:
1. **Pull** : Haal alle updates van GitHub binnen in je lokale repository.
2. **Codeer** : Maak / verander je programmeercode.
3. **Save** : Sla je veranderingen op.
4. **Probeer** : Test uit of het werkt.
5. **Stage** : Zet de bestanden klaar voor de commit.
6. **Message** : Typ een korte maar begrijpelijke commitboodschap.
7. **Commit** : Maak een nieuw punt in je tijdlijn.
8. **Push** : Duw je commit van je 'lokale' repository naar je (cloud) repository op GitHub.

## Q&A
### GitHub 404 fout
*Ik heb via email een link ontvangen om toegang te krijgen tot een repo, maar als ik op de link druk dan krijg ik een 404 fout. Wat moet ik doen?*

Login op GitHub en druk daarna nogmaals op de link.
