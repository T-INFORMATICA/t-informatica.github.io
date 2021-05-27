---
title: Variabelen
tags: 
 - variabele
 - datatype
 - declaratie
 - initialiseren
 - waarde
definitions: 
 - name: variabele
   definition: Een naam die verwijst naar een opslagplaats, waarin je een waarde kunt opslaan.
 - name: declaratie
   definition: Het aanmaken van een variabele.
 - name: initialiseren
   definition: Het geven van een eerste waarde aan een variabele, wanneer die voor het eerst wordt aangemaakt.
description: Hoe maak je een variabele aan?
---


## Variabelen

Variabelen zijn de tweede bouwsteen van een programmeertaal. Zonder variabelen wordt het heel erg moeilijk om waardes op te slaan en op te vragen.

<img src="{{ site.baseurl }}/assets/img/variabelen-1.svg" alt="bouwstenen van programmeren" style="height: auto; max-width: 100%">

Een programma gebruikt en verandert waardes. Deze waardes worden opgeslagen in het **computergeheugen** (RAM). 

Je kan het computergeheugen voorstellen als een gigantisch groot magazijn met rekken. Elk rek heeft genummerde plaatsen waarop iets kan bewaard worden. De eerste plaats die je tegenkomt krijg plaatsnummer 0, de volgende 1, enz.\
Wanneer je dus de naam `"Sam"` opslaat op plaats nummer 2398, dan kan je altijd teruggaan naar het computergeheugen en opvragen wat er precies opgeslagen ligt op die plaats. Je kan vervolgens de instructie geven om de inhoud van plaats 2398 te veranderen naar `"Joske"`.

<img src="/assets/img/variabelen-2.jpg" alt="computergeheugen voorgesteld als een magazijn" style="height: auto; max-width: 100%">

Programmeurs zijn echter ook maar mensen, en onthouden dat plaats 2398 de opslagplaats is voor een naam is niet zo gemakkelijk. Daarom gebruiken we **variabelen**. Een variabele is een naam die verwijst naar één plaats in het geheugen.

```javascript
let naamLeerling = "Sam"; /* Nu kan je naamLeerling gebruiken, in plaats van 2398 */
```
```php
$naamLeerling = "Sam";    /* Nu kan je naamLeerling gebruiken, in plaats van 2398 */
```
```csharp
string naamLeerling = "Sam"; /* Nu kan je naamLeerling gebruiken, in plaats van 2398 */
```


## DataTypes

Sommige programmeertalen (zoals C#) eisen dat de programmeur aanduidt welk datatype de waarde heeft die ze willen opslaan.\
Wanneer er een variabele wordt aangemaakt met als datatype `string`, kunnen ze vanaf dan enkel `string`-waardes opslaan op die plaats in het geheugen.


## Variabelen aanmaken

Het aanmaken van een variabele wordt ook wel het **declareren** van een variabele genoemd. Dit gebeurt in 3 stappen:

 1. **Declareer** een variabele (zoek een lege plaats in het geheugen)
 2. **Benoem** de variabele (geef de lege plaats een naam)
 3. **Geef een waarde** aan de variabele (bewaar iets op die lege plaats)
 
Wil je bijvoorbeeld bijhouden hoeveel levens een speler heeft, dan maak je een variabele zo aan:

```javascript
 1	      2	       3		// 1: declareer; 2: benoem; 3: waarde;
let aantalLevens = 3;

/* Javascript bepaalt zelf het datatype. Als je dus een waarde in de doos steekt, zal javascript de vorm van de doos zelf aanpassen, afhankelijk van wat je erin steekt. */
```
```php
1  2            3		// 1: declareer; 2: benoem; 3: waarde;
$aantalLevens = 3;

/* PHP bepaalt zelf het datatype. Als je dus een waarde in de doos steekt, zal javascript de vorm van de doos zelf aanpassen, afhankelijk van wat je erin steekt. */
```
```csharp
 1	   2	         3		// 1: declareer; 2: benoem; 3: waarde;
int aantalLevens = 3;
```
 
 Wat gebeurt er hier precies?
 1. Een **variabele wordt gedeclareerd**
 2. De variabele **krijgt een naam**
    - "aantalLevens" is de naam die ik hier gekozen heb. Belangrijk:
      - Een naam bestaat uit **enkel letters en cijfers**
      - Een naam **begint met een letter**
      - Een naam bevat **geen spaties**
 3. De variabele **krijgt een waarde**
    - **We willen dus 3** (dat aan de rechterkant van het gelijk-aan teken staat) **bewaren in de variabele 'aantalLevens'** (dat aan de linkerkant staat)

Bepaalde waardes worden op een speciale manier geschreven:

 - Een **kommagetal**
   - Schrijf je **met een punt** in plaats van een komma
   <span class=" lang lang-CS"> en eindigt met een letter 'f'. Bv. 3.141592f</span>
 - **Tekst** moet tussen dubbele aanhalingstekens geplaatst worden: 
   - Bijvoorbeeld: "Dit is een tekst"

## Variabelen aanpassen

Terwijl een programma wordt uitgevoerd (wanneer het spel dus gespeeld wordt) kan de waarde in een variabelen aangepast worden.

Bv.: een speler start het spel opnieuw op, dus het 'aantalLevens' wordt terug op 3 gezet:

```javascript
let aantalLevens = 1;

// de speler start het spel opnieuw:
aantalLevens = 3; 	// let op: 'let' wordt NIET opnieuw geschreven!
			// 'let' dient om een nieuwe variabele te maken
			// en hier passen we een bestaande variabele aan
```
```php
$aantalLevens = 1;

// de speler start het spel opnieuw:
$aantalLevens = 3;	// let op: '$' wordt OOK HIER opnieuw geschreven!
			// '$' dient om een nieuwe variabele te maken
			// en OOK om een bestaande variabele te gebruiken!
```
```csharp
int aantalLevens = 1;

// de speler start het spel opnieuw:
aantalLevens = 3; 	// let op: 'int' wordt NIET opnieuw geschreven!
			// 'int' dient om een nieuwe integer variabele te maken
			// en hier passen we een bestaande variabele aan
```

Als bijvoorbeeld de speler een leven verliest kan het 'aantalLevens' vermindert worden met 1. 
De nieuwe waarde van 'aantalLevens' is dus de oude waarde van 'aantalLevens' min één.

```javascript
let aantalLevens = 3;
aantalLevens = aantalLevens - 1;
```
```php
$aantalLevens = 3;
$aantalLevens = $aantalLevens - 1;
```
```csharp
int aantalLevens = 3;
aantalLevens = aantalLevens - 1;
```

## Coding Guidelines

 - Elke variabele heeft een **duidelijke naam**
   - De naam van een variabele wordt geschreven volgens lowerCamelCase
     - bv: 	**m**y**F**irst**V**ariable
   - De naam van een variabele omschrijft duidelijk waar de variabele voor dient
     - bv: 	**userPhoneNumber**


 - Elke variabele heeft een **initiële waarde**
   - Over het algemeen wordt een variabele geïnitialiseerd op null, 0 of leeg (afhankelijk van het datatype).
     - bv:	userAge = 0<br>
	      	userName = ""
