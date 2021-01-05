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
   definition: Een opslagplaats met een naam, waarin je een waarde kunt opslaan.
 - name: declaratie
   definition: Het aanmaken van een variabele.
 - name: initialiseren
   definition: Het geven van een eerste waarde aan een variabele, wanneer die voor het eerst wordt aangemaakt.
description: Hoe maak je een variabele aan?
---


## Variabelen

Stel: je bent thuis en besluit je kamer op te ruimen. Alle spullen moeten netjes in dozen worden gestoken en bewaard worden. Boeken gaan in de doos met boeken, dvds in de doos met dvds, pennen in de pennenzak, enzovoorts.
 
Als je zo een doos vervolgens wilt bewaren in de kelder, geef je de doos eerst een naam. Uiteraard geef je deze doos een duidelijke naam, want als je een tijdje later terugkomt in de kelder op zoek naar een specifieke doos wil je die ook snel terugvinden. Geef daarom niet de naam "Doos A", "Doos B", enz. maar eerder "Strips A-Z" of "Games".

In principe is dat wat variabelen zijn: dozen met een naam waar je iets kunt insteken.

## DataTypes

Nu zijn variabelen nogal speciale dozen: ze hebben een heel specifieke vorm. Er zijn dus dozen die perfect passen voor je strips, en andere dozen die perfect passen voor je oude posters in op te bergen.

Je boeken passen niet in de doos voor de posters, en je posters passen niet in de doos voor je boeken.

Deze "vormen van dozen" noemen we in programmeer-termen **datatypes**. Voor elk type (elke soort) data hebben we een andere vorm.

Zo heb je:
 - **Number**: getallen. In veel programmeertalen bestaan er verschillende soorten getallen:
   - **Integer**: gehele getallen
   - **<span class=" lang lang-JS lang-PHP">Decimal</span><span class=" lang lang-CS">float</span>**: kommagetallen
 - **Bool**: waar/niet waar. Bijvoorbeeld om te zien of speler wel of niet levend is.
 - **String**: tekst. Je kan hier bijvoorbeeld de naam van de speler in bijhouden.

Het is belangrijk om te weten dat **elke variabele maar één datatype heeft**. Een variabele kan dus niet een integer én een string zijn.

## Variabelen aanmaken

Het aanmaken van een variabele wordt ook wel het **declareren** van een variabele genoemd. Dit gebeurt in 3 stappen:

 1. **Declareer** een variabele (neem een doos)
 2. **Benoem** de variabele (geef de doos een naam)
 3. **Geef een waard**e aan de variabele (steek een waarde in de doos)
 
Wil je bijvoorbeeld bijhouden hoeveel levens een speler heeft, dan maak je een variabele zo aan:

```javascript
 1	2	   3		// 1: declareer; 2: benoem; 3: waarde;
var aantalLevens = 3;

/* Javascript bepaalt zelf het datatype. Als je dus een waarde in de doos steekt, zal javascript de vorm van de doos zelf aanpassen, afhankelijk van wat je erin steekt. */
```
```php
1  2	   	3		// 1: declareer; 2: benoem; 3: waarde;
$aantalLevens = 3;

/* PHP bepaalt zelf het datatype. Als je dus een waarde in de doos steekt, zal javascript de vorm van de doos zelf aanpassen, afhankelijk van wat je erin steekt. */
```
```csharp
 1	   2	   3		// 1: declareer; 2: benoem; 3: waarde;
int aantalLevens = 3;
```
 
 Wat gebeurt er hier precies?
 1. Een **variabele wordt gedeclareerd**
    - Er zijn 3 verschillende keywords die een variabele declareren. **var** is één van deze 3 keywords.
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
var aantalLevens = 1;

// de speler start het spel opnieuw:
aantalLevens = 3; 	// let op: 'var' wordt NIET opnieuw geschreven!
			// 'var' dient om een nieuwe variabele te maken
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
			// 'var' dient om een nieuwe variabele te maken
			// en hier passen we een bestaande variabele aan
```

Als bijvoorbeeld de speler een leven verliest kan het 'aantalLevens' vermindert worden met 1. 
De nieuwe waarde van 'aantalLevens' is dus de oude waarde van 'aantalLevens' min één.

```javascript
var aantalLevens = 3;
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
