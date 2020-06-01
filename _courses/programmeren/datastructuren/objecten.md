---
title: Objecten
tags: 
 - complex
 - simpel
 - primitive
 - object
 - instantie
 - constructor
 - new
definitions: 
 - name: complex
   definition: Wanneer iets meervoudig is. Met andere woorden, het kan bestaan uit meerdere onderdelen.
 - name: simpel
   definition: Wanneer iets enkelvoudig is. Met andere woorden, het bestaat uit slechts 1 onderdeel.
 - name: primitive
   definition: Een datatype dat simpel is.
 - name: object
   definition: Een datatype dat complex is.
 - name: instantie
   definition: Een variabele van een complex datatype.
 - name: constructor
   definition: Een speciale functie die een nieuw object van een bepaald complex datatype kan maken. 
description: Een datatype bepaalt welke soort waarde je kan opslaan in een variabele. Tot nu toe werden er enkel simpele datatypes voor variabelen behandelt - datatypes waarin slechts één waarde kon worden opgeslagen. Objecten zijn een manier om meerdere waardes die bij elkaar horen in één variabele te steken.
---


## Complex vs simpel

Simpel en complex zijn twee belangrijke termen binnen programmeren. Het zijn twee categorieën waarin je data kunt opdelen.

**Let op!** Simpel en complex beschrijven niet hoe gemakkelijk of moeilijk iets is!

Wanneer iets **simpel** is, bedoelt men dat iets enkelvoudig is, met andere woorden: het bestaat uit slechts 1 onderdeel. Zo is er het datatype integer, waarmee je één geheel getal kunt opslaan in een variabele.
Wanneer een datatype simpel is, wordt dit in programmeren een **primitive datatype** genoemd.

Wanneer iets **complex** is, bedoelt men dat iets meervoudig is, met andere woorden: het kan bestaan uit meerdere onderdelen. Zo is er het datatype Date, waarmee je een datum (bestaande uit een jaar, maand en dag) en tijd (bestaande uit een uur, minuut, seconde en milliseconde) kunt opslaan.

## Objecten en instanties

Een datatype bepaalt welke soort waarde je kan opslaan in een variabele. 

 - Integer bepaalt dat je een geheel getal kan opslaan.
 - Decimal bepaalt dat je een komma getal kan opslaan.
 - Bool bepaalt dat je true of false kunt opslaan.
 - String bepaalt dat je tekst kunt opslaan.

De datatypes hierboven zijn voorbeelden van **primitive datatypes**, omdat ze maar één waarde kunnen bijhouden (een variabele van het datatype integer kan immers maar één getal bijhouden).

Een variabele van een primitive datatype (in dit voorbeeld integer) wordt op de volgende manier aangemaakt:

 1. **Declareer** de variabele
 2. **Geef een naam** aan de variabele
 3. **Geef een initiële waarde** aan de variabele

```javascript
    let myVariable = 0;
//   1	    2	     3
```
```php
    $myVariable = 0;
//  1    2        3
```
```csharp
    int myVariable = 0;
//   1	   2	     3
```

Een **complex datatype** is een datatype waarin meerdere waardes kunnen worden bijgehouden. Een voorbeeld hiervan is het datatype Date.

Het datatype Date wordt gebruikt om, aan de hand van een datum (jaar, maand, dag) en tijd (uur, minuut, seconde, milliseconde), een moment in de tijd bij te houden. Date is dus een voorbeeld van een complex datatype omdat **het bestaat uit meerdere waardes**.

Een variabele van een complex datatype (in dit voorbeeld Date) wordt op dezelfde manier aangemaakt als een variabele van een simpel datatype:

 1. **Declareer** de variabele
 2. **Geef een naam** aan de variabele
 3. **Geef een initiële waarde** aan de variabele

 Het probleem is echter stap 3: Hoe initialiseer je de waarde van een complexe variabele?
 
```javascript
// !! DIT IS FOUT !!
let verjaardag = 0; 		// verjaardag is nu een integer, geen Date
let verjaardag = "11/10/1987";	// verjaardag is nu een string, geen Date
let verjaardag = 11/10/1987; 	// dit is geen geldige waarde, en zal dus een
				// error geven
```
```php
// !! DIT IS FOUT !!
$verjaardag = 0; 		 // verjaardag is nu een integer, geen Date
$verjaardag = "11/10/1987"; 	// verjaardag is nu een string, geen Date
$verjaardag = 11/10/1987;   	// dit is geen geldige waarde, en zal dus een
				// error geven
```
```csharp
// !! DIT IS FOUT !!
Date verjaardag = 0; 		// verjaardag is nu een integer, geen Date
Date verjaardag = "11/10/1987"; // verjaardag is nu een string, geen Date
Date verjaardag = 11/10/1987;   // dit is geen geldige waarde, en zal dus een
				// error geven
```

De oplossing hiervoor is het aanmaken van een object. **Een object is een een waarde met een complex datatype**. Een object wordt op de volgende manier aangemaakt:

```javascript
let verjaardag = new Date();
```
```php
$verjaardag = new Date();
```
```csharp
Date verjaardag = new Date();
```

Het **new** keyword geeft aan dat je een object wilt aanmaken. Dit wordt dan gevolgd door het aanroepen van een speciale functie: de **constructor**. De constructor is een speciale functie die een nieuw object kan maken. Deze functie heeft dezelfde naam als het datatype waarvoor de constructor een object zal maken.

Elke keer dat je een nieuw object aanmaakt, maak je een nieuwe **instantie** aan van dat complexe datatype. 

```javascript
let verjaardag = new Date();		// met Date() roep je de 
					// constructor-functie aan, waarmee je 
					// een object van het datatype Date maakt
```
```php
$verjaardag = new Date();		// met Date() roep je de 
					// constructor-functie aan, waarmee je 
					// een object van het datatype Date maakt
```
```csharp
Date verjaardag = new Date();		// met Date() roep je de 
					// constructor-functie aan, waarmee je 
					// een object van het datatype Date maakt
```

## Complexe datatypes

Complexe datatypes kunnen uit meerdere waarden bestaan. Een complex datatype is dus een verzameling van waardes. Bijvoorbeeld: Het datatype Date zou 2 waarden kunnen bevatten:

 - Een **datum** waarde. Omdat een datum uit 3 waarden bestaat (jaar, maand, dag) is dit op zich ook weer een complex datatype.
 - Een **tijd** waarde. Omdat een tijd uit 4 waarden bestaat (uur, minuut, seconde, milliseconde) is dit op zich ook weer een complex datatype.

Het datatype van de datum-waarde zou op zich dan weer 3 waarden kunnen bevatten:

 - Een integer waarde waarin het jaar wordt bijgehouden. 
 - Een integer waarde waarin de maand wordt bijgehouden. 
 - Een integer waarde waarin de dag wordt bijgehouden. 

En het datatype van de tijd-waarde zou op zich 4 waarden kunnen bevatten:

 - Een integer waarde waarin het uur wordt bijgehouden. 
 - Een integer waarde waarin de minuten worden bijgehouden. 
 - Een integer waarde waarin de seconden worden bijgehouden. 
 - Een integer waarde waarin de milliseconden worden bijgehouden. 
