---
title: Instructies
tags: 
 - instructie
 - commentaar
definitions:
 - name: instructie
   definition: Een bevel aan een computer dat meestal bestaat uit het opslaan of aanpassen van data.
 - name: toewijzing
   definition: Het opslaan van een waarde in een variabele.
 - name: commentaar
   definition: Tekst die je kan toevoegen aan je code, die wordt genegeerd door de computer. Dit kan gebruikt worden om wat extra uitleg te geven aan moeilijke code.
description: Programmeren is niet meer dan het geven van bevelen aan een computer. Zo'n bevel heet een instructie.
---

## Instructie

Programmeren is het geven van instructies (bevelen) aan een computer. Als je een instructie geeft aan je computer, doe je 1 van volgende zaken:
 - Het opslaan van data (het getal 7 bewaren in een variabele)
 - Het aanpassen van data (een nieuwe waarde opslaan in de variabele)

Om te zorgen dat de computer weet waar een instructie begint en eindigt, wordt in de meeste programmeertalen aan het einde van een instructie een bepaald teken geplaatst. In Javascript is dat teken een puntkomma ( ; ).

```javascript
5 + 2 /* geen instructie, want geen toewijzing (enkel een expressie) */

5 + 2; /* geen instructie (enkel een expressie, geeft een fout omdat het resultaat van de expressie niet wordt opgeslagen) */

var getal = 5 + 2; // wel een instructie
```
```php
5 + 2 /* geen instructie, want geen puntkomma (enkel een expressie) */

5 + 2; /* geen instructie (enkel een expressie, geeft een fout omdat het resultaat van de expressie niet wordt opgeslagen) */

$getal = 5 + 2; // wel een instructie
```
```csharp
5 + 2 /* geen instructie, want geen puntkomma (enkel een expressie) */

5 + 2; /* geen instructie (enkel een expressie, geeft een fout omdat het resultaat van de expressie niet wordt opgeslagen) */

int getal = 5 + 2; // wel een instructie
```

Heb je de hoofdstukken variabelen en expressies goed begrepen, kan je dus nu in feite programmeren.

Het verschil tussen iemand die kan programmeren en een programmeur is dat een programmeur zijn code kan organiseren in blokken code, en die blokken zo gebruiken dat er een duidelijk gestructureerd programma ontstaat.

## 3.2 Commentaar

Soms gebeurt het dat code niet gemakkelijk leesbaar is, hoe hard je ook je best doet om duidelijke namen te gebruiken. In dat geval is het handig om gewone, door mensen leesbare tekst toe te voegen aan code die enkel bedoeld is voor de programmeur, maar niet voor de computer. 

Dit soort tekst wordt commentaar genoemd. Commentaar is onzichtbaar voor de computer.

In de voorbeelden hierboven (en in andere hoofdstukken) werd er reeds gebruik gemaakt van commentaar. 
Je kan commentaar op 2 manieren toevoegen:
 - Commentaar die 1 lijn tekst gebruikt.
 - Commentaar die meerdere lijnen tekst gebruiken.
 
### 3.2.1 Commentaar op één lijn
Commentaar op één lijn duid je aan met 2 forward slashes ( // ). Alles dat daarop volgt wordt genegeerd door de computer.

```javascript
// Dit gedeelte wordt door de computer genegeerd
```
```php
// Dit gedeelte wordt door de computer genegeerd
```
```csharp
// Dit gedeelte wordt door de computer genegeerd
```

### 3.2.2 Commentaar op meerdere lijnen
Commentaar kan je ook verspreiden over meerdere lijnen.
Je kan dit doen door:
 - Ofwel plaats je aan het begin van elke lijn 2 forward slashes (//).
 - Ofwel plaats je aan het begin van je eerste lijn commentaar een forward slash, gevolgd door een sterretje ( /* ) en aan het einde van je laatste lijn commentaar een sterretje, gevolgd door een forward slash ( */ ).

Alles dat zich tussen /* en */ bevindt zal dan genegeerd worden door de computer.

```javascript
// Dit gedeelte wordt
// door de computer genegeerd


/* Heel deze zin
wordt genegeerd
door de computer.
Je kan niet programmeren
totdat je het ster-slash einde
Typt */
```
```php
// Dit gedeelte wordt
// door de computer genegeerd


/* Heel deze zin
wordt genegeerd
door de computer.
Je kan niet programmeren
totdat je het ster-slash einde
Typt */
```
```csharp
// Dit gedeelte wordt
// door de computer genegeerd


/* Heel deze zin
wordt genegeerd
door de computer.
Je kan niet programmeren
totdat je het ster-slash einde
Typt */
```
