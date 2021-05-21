---
title: Arrays
tags: 
 - index
 - indexed array
 - associative array
definitions:
 - name: array
   definition: Een lijst van waardes.
 - name: index
   definition: Een waarde (vaak een integer) die aanduidt waar een waarde zich bevindt in een lijst.
 - name: indexed array
   definition: Een lijst waarbij de index een automatisch oplopend getal is. In de meeste programmeertalen begint deze index bij 0 te tellen.
 - name: associative array
   definition: Een lijst waarbij de index een zelfgekozen waarde is.
description: Lijsten gebruiken en aanpassen.
---

## Arrays

Als je een lijst van waardes wilt opslaan (bv. Een lijst met merken van auto’s), zou dit er als volgt kunnen uitzien:

```javascript
var auto1 = "Volvo";
var auto2 = "BMW";
var auto3 = "Toyota";
```
```php
$auto1 = "Volvo";
$auto2 = "BMW";
$auto3 = "Toyota";
```
```csharp
string auto1 = "Volvo";
string auto2 = "BMW";
string auto3 = "Toyota";
```

Dankzij een duidelijke naamgeving weet de programmeur nu dat in auto2 de waarde "BMW" werd opgeslagen. De computer kan echter geen Nederlands of Engels lezen. Je kan dus niet aan de computer vragen: “geef mij de waarde van de tweede en de derde auto”.

De oplossing is het gebruiken van arrays. Arrays zijn een speciaal soort variabele: **Een array is een naam waar je meerdere waardes aan kunt toewijzen**. Een array wordt daarom ook wel eens een lijst genoemd.

## Indexed arrays
Een array is een variabele waarin je meer dan 1 waarde kunt opslaan. Het aanmaken van een array verloopt dan ook heel gelijkaardig als het aanmaken van een variabele:

 - **Declareer** een variabele
 - **Benoem** de variabele
 - **Geef een waard**e aan de variabele

```javascript
 1	2	   	3		// 1: declareer; 2: benoem; 3: waarde;
var autos = ["Volvo", "BMW", "Toyota"];
```
```php
  2	   		3		// 1: declareer; 2: benoem; 3: waarde;
$autos = array("Volvo", "BMW", "Toyota");
```
```csharp
 1	   2	   	     3		// 1: declareer; 2: benoem; 3: waarde;
string[] autos = {"Volvo", "BMW", "Toyota"};
```

De plaats van een waarde in de array wordt ook wel de **index** genoemd. De index is een getal dat aanduidt op welke plaats een waarde zich bevindt in de array.

**Let op!** De index begint te tellen vanaf 0! De eerste waarde heeft daarom index 0, de tweede waarde index 1, enz...

```javascript
// index:	   0	1	 2
var autos = ["Volvo", "BMW", "Toyota"];
var tweedeAuto = autos[1];
```
```php
// index:	  0	  1	    2
$autos = array("Volvo", "BMW", "Toyota");
$tweedeAuto = autos[1];
```
```csharp
// index:	    0	     1	      2
string[] autos = {"Volvo", "BMW", "Toyota"};
string tweedeAuto = autos[1];
```

Met de index kan je waardes in de array **opvragen of aanpassen**.

```javascript
var eersteAuto = autos[0];	// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
```
```php
$eersteAuto = autos[0];		// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
```
```csharp
String eersteAuto = autos[0];	// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
```

Om deze reden worden dit soort arrays ook wel **indexed arrays** genoemd: elke waarde krijgt automatisch een index toegewezen.

## Arrays: eigenschappen en functies

Arrays worden dus gebruikt om meerdere waardes op te slaan onder één naam. Ze hebben ook nog een heleboel andere eigenschappen en functies die ervoor zorgen dat arrays heel erg handig zijn. 

 - Het aantal waardes in de array opvragen
 - Een bepaalde waarde verwijderen uit de array
 - Een bepaalde waarde toevoegen in de array
 - ...
 
Elke programmeertaal heeft zo z'n eigen manieren om die eigenschappen op te vragen. Hier worden enkele voorbeelden getoond van de belangrijkste array-functies.

### Aantal waardes

```javascript
var autos = ["Volvo", "BMW", "Toyota"];
var aantal = autos.length;
```
```php
$autos = array("Volvo", "BMW", "Toyota");
$aantal = count($autos);
```
```csharp
string[] autos = {"Volvo", "BMW", "Toyota"};
int aantal = autos.Length;
```

### Waardes verwijderen

```javascript
var autos = ["Volvo", "BMW", "Toyota"];

var verwijderdeAuto1 = autos.pop();		// verwijdert de laatste waarde
var verwijderdeAuto2 = autos.shift();	// verwijdert de eerste waarde
```
```php
$autos = array("Volvo", "BMW", "Toyota");
$verwijderdeAuto = unset($autos[0]);	// OPGELET! Verwijdert OOK de index, 
					// waardoor dit een associative array wordt!
```
```csharp
// In C# is de grootte van een array vastgelegd wanneer je de array aanmaakt.
// Je kan waardes dus niet zomaar verwijderen.
```

### Waardes toevoegen

```javascript
var autos = ["Volvo", "BMW", "Toyota"];
autos.push("Renault");			// voegt een waarde toe aan het einde
autos.unshift("Renault");		// voegt een waarde toe aan het begin
```
```php
$autos = array("Volvo", "BMW", "Toyota");
$aantal[] = "Renault";			// voegt een waarde toe aan het einde
```
```csharp
// In C# is de grootte van een array vastgelegd wanneer je de array aanmaakt.
// Je kan waardes dus niet zomaar toevoegen.
```



## Associative Arrays
{: .language-php.languageSpecific }

Indexed arrays gebruiken een index om een waarde op te vragen.
{: .language-php.languageSpecific }

```php
// index:	  0	  1	    2
$autos = array("Volvo", "BMW", "Toyota");
$tweedeAuto = autos[1];
```

Een andere manier om deze array te schrijven is als volgt:
{: .language-php.languageSpecific }

```php
$autos = array(0 => "Volvo", 1 => "BMW", 2 => "Toyota");
$tweedeAuto = autos[1];
```

Op deze manier kan je zelf de index kiezen die bij elke waarde hoort. Je kan zelfs een compleet andere index kiezen, en op dezelfde manier een waarde opvragen:
{: .language-php.languageSpecific }

```php
$autos = array (7 => "Volvo", 5 => "BMW", 13 => "Toyota");

echo $autos[7]; 		// toont Volvo op het scherm
echo $autos[5]; 		// toont BMW op het scherm
echo $autos[13]; 		// toont Toyota op het scherm
```

Bovenstaande array wordt ook een **associative array** genoemd. Associative arrays zijn een uitbreiding op indexed arrays. Ze worden zo genoemd omdat in dit soort arrays de waarde wordt geassocieerd met een zelf gekozen index, meestal een naam of getal.
{: .language-php.languageSpecific }

Een naam kan eender wat zijn, zo lang het uniek is:
{: .language-php.languageSpecific }
 - Een getal
 - Een letter
 - Een woord
{: .language-php.languageSpecific }

Het is dus mogelijk om in plaats een getal een woord te gebruiken. Zo kan je automerken bijvoorbeeld associëren met het land waar ze gemaakt worden.
{: .language-php.languageSpecific }

```php
$autos = array ("Zweeds" => "Volvo", "Duits" => "BMW", "Japans" => "Toyota");

echo $autos["Zweeds"]; 		// toont Volvo op het scherm
echo $autos["Duits"]; 		// toont BMW op het scherm
echo $autos["Japans"]; 		// toont Toyota op het scherm
```
