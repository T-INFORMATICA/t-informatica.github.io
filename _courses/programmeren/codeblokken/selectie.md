---
title: Selectie
tags: 
 - selectie
 - sequentie
 - if
 - else if
 - else
definitions: 
 - name: sequentie
   definition: Het uitvoeren van instructies in de volgorde dat ze geschreven zijn.
 - name: selectie
   definition: Het eenmalig uitvoeren van code wanneer een voorwaarde waar is. 
description: Met een selectie kiest een programma welke code er uitgevoerd moet worden op basis van een voorwaarde.
---


## Sequentie
Alle code die tot nu toe werd behandeld heeft één ding gemeen: instructies worden één per één uitgevoerd, van boven naar onder, zonder uitzondering. Dit wordt ook wel een **sequentie** genoemd. 

Bijvoorbeeld: De functie Explodeer maakt eerst een geluid, laat daarna een licht flikkeren, en doet vervolgens schade. Deze instructies zullen altijd in deze volgorde worden uitgevoerd, geen enkele instructie zal worden overgeslagen.

```javascript
function Explodeer(x) 	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe x schade
	// aan alle spelers binnen 5 meter van de explosie
}
```
```php
function Explodeer(x) 	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe x schade
	// aan alle spelers binnen 5 meter van de explosie
}
```
```csharp
void Explodeer(x)  	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe x schade
	// aan alle spelers binnen 5 meter van de explosie
}
```

## Selectie

Selectie is het uitvoeren van code als een voorwaarde waar of niet waar is. 

Bijvoorbeeld: Een explosie mag pas geluid maken als de schade groter is dan 10. Met andere woorden: Als x groter is dan 10, maak dan een geluid (anders sla je die instructie over).

```javascript
function Explodeer(x) 
{
	if (x > 10) {
		// maak een geluidje
	}
	// laat een licht rood/oranje flikkeren
	// doe x schade
}
```
```php
function Explodeer(x) 
{
	if ($x > 10) {
		// maak een geluidje
	}
	// laat een licht rood/oranje flikkeren
	// doe x schade
}
```
```csharp
void Explodeer(x) 
{
	if (x > 10) {
		// maak een geluidje
	}
	// laat een licht rood/oranje flikkeren
	// doe x schade
}
```

Een **selectie-codeblok gaat, aan de hand van een voorwaarde, selecteren welke instructies mogen uitgevoerd worden**. Een selectie kan bestaan uit meerdere codeblokken:
 - Het IF-codeblok
 - Het ELSE IF-codeblok
 - Het ELSE-codeblok

### IF blok

Elke selectie begint met 1 IF blok. Het IF blok is altijd het eerste codeblok van een selectie, en er kan maximaal 1 IF blok in een selectie bestaan. Het IF blok maakt gebruik van een voorwaarde om te selecteren welke instructies worden uitgevoerd.

IF wilt dus eigenlijk zeggen: **als de voorwaarde waar is**, voer dan deze instructies uit. 

Bijvoorbeeld: 

```javascript
var intTest = 0;

if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
```
```php
$intTest = 0;

if ($intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
```
```csharp
int intTest = 0;

if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
```

### ELSE IF-blok

Een ELSE IF blok kan worden toegevoegd aan een selectie, volgend op een IF-blok of een ander ELSE IF blok.  

 - Er mogen meerdere ELSE IF blokken worden toegevoegd aan een selectie.
 - Het ELSE IF blok maakt gebruik van een voorwaarde om te selecteren welke instructies worden uitgevoerd.
 - Een ELSE IF blok wordt nooit uitgevoerd als een voorgaand IF of ELSE IF blok reeds werd uitgevoerd.
 
ELSE IF wilt dus eigenlijk zeggen: **als de voorgaande IF en ELSE IFs niet waar zijn, en deze voorwaarde wel waar is**, voer dan deze instructies uit. Bijvoorbeeld: 

```javascript
var intTest = 2;
if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if (intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
else if (intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
	// Deze code wordt NIET uitgevoerd, ook al is de voorwaarde
	// WAAR. Het vorige blok werd immers reeds uitgevoerd!
}
```
```php
$intTest = 2;
if ($intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if ($intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
else if ($intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
	// Deze code wordt NIET uitgevoerd, ook al is de voorwaarde
	// WAAR. Het vorige blok werd immers reeds uitgevoerd!
}
```
```csharp
int intTest = 2;
if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if (intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
	// In dit voorbeeld wordt de code hier uitgevoerd.
}
else if (intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
	// Deze code wordt NIET uitgevoerd, ook al is de voorwaarde
	// WAAR. Het vorige blok werd immers reeds uitgevoerd!
}
```

### ELSE blok

Een ELSE blok kan als laatste worden toegevoegd aan een selectie. Het ELSE blok is altijd het laatste codeblok van een selectie, en er kan maximaal 1 ELSE blok in een selectie bestaan.

 - Een ELSE blok is niet verplicht. Een selectie kan bestaan zonder ELSE blok.
 - Het ELSE blok heeft geen voorwaarde. Een ELSE blok wordt alleen uitgevoerd als alle voorgaande IF en ELSE IF blokken niet werden uitgevoerd.
 
ELSE wilt dus eigenlijk zeggen: **in alle andere gevallen**, voer dan het volgende codeblok uit.
Bijvoorbeeld: 

```javascript
var intTest = 6;

if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if (intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
}
else if (intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
}
else
{
	// In ELK ANDER GEVAL wordt deze code uitgevoerd.
	// In dit voorbeeld wordt deze code uitgevoerd.
}
```
```php
$intTest = 6;

if ($intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if ($intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
}
else if ($intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
}
else
{
	// In ELK ANDER GEVAL wordt deze code uitgevoerd.
	// In dit voorbeeld wordt deze code uitgevoerd.
}
```
```csharp
int intTest = 6;

if (intTest < 1) 
{
	// voer deze code uit enkel als intTest kleiner is dan 1.
}
else if (intTest < 3) 
{
	// voer deze code uit enkel als intTest kleiner is dan 3.
}
else if (intTest < 5) 
{
	// voer deze code uit enkel als intTest kleiner is dan 5.
}
else
{
	// In ELK ANDER GEVAL wordt deze code uitgevoerd.
	// In dit voorbeeld wordt deze code uitgevoerd.
}
```

## Coding Guidelines

Wanneer je een IF / ELSE IF blok schrijft, laat je een spatie tussen het keyword en de haakjes:
 - WEL:	if (intTest < 1)
 - NIET:	if(intTest < 1)
