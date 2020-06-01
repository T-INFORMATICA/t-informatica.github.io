---
title: Iteratie
tags: 
 - iteratie
 - for
 - while
 - array
 - itereren
definitions: 
 - name: itereren
   definition: Het herhaaldelijk uitvoeren van code zo lang een voorwaarde waar is. 
description: 
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

## Iteratie

Iteratie is het herhaaldelijk uitvoeren van code zo lang een voorwaarde *waar* is. 
 - Herhaal een codeblok 6 keer
 - Herhaal een codeblok tot Y gelijk is aan 10
 - …

Bijvoorbeeld: Een explosie laat een licht 10 maal flikkeren. Hiervoor wordt een variabele y gemaakt die optelt. Pas als de variabele y niet langer kleiner is dan 10, gaat het codeblok verder met z’n instructies (`doe 5 schade`). 

```javascript
function Explodeer() 
{
	// maak een geluidje
	var y = 0;
	while (y < 10) {
		// laat een licht flikkeren
		y = y + 1;
	}
	// doe 5 schade
}
```
```php
function Explodeer() 
{
	// maak een geluidje
	$y = 0;
	while ($y < 10) {
		// laat een licht flikkeren
		$y = $y + 1;
	}
	// doe 5 schade
}
```
```csharp
function Explodeer() 
{
	// maak een geluidje
	int y = 0;
	while (y < 10) {
		// laat een licht flikkeren
		y = y + 1;
	}
	// doe 5 schade
}
```

Een **iteratie-codeblok gaat, aan de hand van een voorwaarde, instructies herhalen** zolang die voorwaarde waar is. 

Het herhalen van instructies wordt ook wel **itereren** genoemd. Eén herhaling is dus één iteratie. Wanneer een codeblok itereert, gebeuren er meerdere iteraties (herhalingen) van de instructies in het codeblok. Iteratie is een belangrijk onderdeel van het DRY principe.

Er zijn verschillende soorten iteratie-codeblokken:

 - Het WHILE codeblok
 - Het FOR codeblok
 
Beide blokken itereren (herhalen) hun instructies op een andere manier.

### WHILE blok

WHILE wilt in het Nederlands zeggen: zolang. Het while codeblok herhaalt de instructies in in het codeblok **zolang een voorwaarde waar is**.
WHILE wilt dus eigenlijk zeggen: **zolang de voorwaarde waar is**, voer deze instructies opnieuw uit. Bijvoorbeeld: 

```javascript
var intTest = 0;

while (intTest < 10) 
{
	intTest = intTest + 1;
	// voer deze code opnieuw uit zolang intTest kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```
```php
$intTest = 0;

while ($intTest < 10) 
{
	$intTest = $intTest + 1;
	// voer deze code opnieuw uit zolang intTest kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```
```csharp
int intTest = 0;

while (intTest < 10) 
{
	intTest = intTest + 1;
	// voer deze code opnieuw uit zolang intTest kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```

### FOR blok

In het vorige voorbeeld werd een WHILE blok gebruikt gedurende een specifiek aantal keer (10 maal). Dit is één van de meest voorkomende manieren om code te herhalen. Deze manier van werken vereist 3 stappen:

 1. Maak een variabele aan
 2. Kijk na of die variabele kleiner is dan 10
 3. Verhoog de variabele met 1
 
Vergeet een programmeur 1 van deze 3 stappen, bevat het programma fouten of (nog erger) loopt het programma vast. Om zeker te zijn dat programmeurs deze stappen allemaal uitvoeren, bestaat er een kortere versie. Deze kortere versie is het FOR blok.

Het FOR blok is een iteratie waarbij deze 3 stappen in 1 regel code worden geschreven:

 1. Maak een variabele aan
 2. Kijk na of die variabele kleiner is dan 10
 3. Verhoog de variabele met 1

```javascript
//     stap 1   stap 2	  stap 3
for (var i = 0; i < 10; i = i + 1)
{
	// voer deze code opnieuw uit zolang i kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```
```php
//    stap 1  stap 2	stap 3
for ($i = 0; $i < 10; $i = $i + 1)
{
	// voer deze code opnieuw uit zolang i kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```
```csharp
//     stap 1   stap 2	  stap 3
for (int i = 0; i < 10; i = i + 1)
{
	// voer deze code opnieuw uit zolang i kleiner is dan 10.
	// In dit voorbeeld wordt de code 10 maal uitgevoerd.
}
```

## Itereren door een array

De index van een indexed array is een integer (een geheel getal). Dat wilt zeggen dat elke variabele die een geheel getal bevat gebruikt kan worden om een element uit de array op te vragen.

```javascript
var autos = ["Volvo", "BMW", "Toyota"];
var index = 1;
var tweedeAuto = autos[index];
```
```php
$autos = array("Volvo", "BMW", "Toyota");
$index = 1;
$tweedeAuto = autos[$index];
```
```csharp
string[] autos = {"Volvo", "BMW", "Toyota"};
int index = 1;
string tweedeAuto = autos[index];
```

Zo'n index variabele wordt heel vaak gebruikt in een for-loop wanneer het nodig is om alle items in een lijst te overlopen. 

Een for-loop maakt een variabele aan, en verhoogt deze variabele bij elke iteratie. Wanneer die variabele groter wordt dan een bepaalde maximumwaarde stopt de for-loop.

Als de variabele van een for-loop dus begint bij 0, en eindigt voor het aantal waardes in een array, kan je met een for-loop elke index van een array overlopen.

```javascript
var autos = ["Volvo", "BMW", "Toyota"];
var aantal = autos.length;

for (let i = 0; i < aantal; ++i) {
	console.log(autos[i]);
}
```
```php
$autos = array("Volvo", "BMW", "Toyota");
$aantal = count($autos);

for ($i = 0; $i < $aantal; ++$i) {
	echo $autos[$i];
}
```
```csharp
string[] autos = {"Volvo", "BMW", "Toyota"};
int aantal = autos.Length;

for (int i = 0; i < aantal; ++i) {
	console.log(autos[i]);
}
```

## Coding Guidelines

Wanneer je een `WHILE` blok schrijft, laat je een spatie tussen het keyword en de haakjes:

 - WEL:		`while (intTest < 1)`
 - NIET:	`while(intTest < 1)`

Wanneer je een FOR blok schrijft, laat je een spatie:
Tussen het keyword for en de haakjes
Na elke puntkomma
 - WEL:		`for (int i = 0; i < 10; i += 1)`
 - NIET:	`for(int i = 0; i < 10; i += 1)`
