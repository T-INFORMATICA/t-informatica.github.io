---
title: Arrays
tags: 
 - index
 - indexed array
 - associative array
definitions:
 - name: index
   definition: Een getal of andere waarde die aanduidt op welke plaats een waarde zich bevindt in de lijst.
 - name: indexed array
   definition: Een lijst waarbij de index een automatisch oplopend getal is. In de meeste programmeertalen begint deze index bij 0 te tellen.
 - name: associative array
   definition: Een lijst waarbij de index een zelfgekozen waarde is.
description: Lijsten gebruiken en aanpassen.
---

## Arrays

Als je een lijst van waardes wilt opslaan (bv. Een lijst met merken van auto’s), zou dit er als volgt kunnen uitzien:

<pre class="linenums lang lang-JS">
var auto1 = "Volvo";
var auto2 = "BMW";
var auto3 = "Toyota";
</pre>
<pre class="linenums lang lang-PHP">
$auto1 = "Volvo";
$auto2 = "BMW";
$auto3 = "Toyota";
</pre>
<pre class="linenums lang lang-CS">
string auto1 = "Volvo";
string auto2 = "BMW";
string auto3 = "Toyota";
</pre>

Dankzij een duidelijke naamgeving weet de programmeur nu dat in auto2 de waarde "BMW" werd opgeslagen. De computer kan echter geen Nederlands of Engels lezen. Je kan dus niet aan de computer vragen: “geef mij de waarde van de tweede en de derde auto”.

De oplossing is het gebruiken van arrays. Arrays zijn een speciaal soort variabele: **Een array is een naam waar je meerdere waardes aan kunt toewijzen**. Een array wordt daarom ook wel eens een lijst genoemd.

## Indexed arrays
Een array is een variabele waarin je meer dan 1 waarde kunt opslaan. Het aanmaken van een array verloopt dan ook heel gelijkaardig als het aanmaken van een variabele:

 - **Declareer** een variabele
 - **Benoem** de variabele
 - **Geef een waard**e aan de variabele

<pre class="linenums lang lang-JS">
 1	2	   	3		// 1: declareer; 2: benoem; 3: waarde;
var autos = ["Volvo", "BMW", "Toyota"];
</pre>
<pre class="linenums lang lang-PHP">
  2	   		3		// 1: declareer; 2: benoem; 3: waarde;
$autos = array("Volvo", "BMW", "Toyota");
</pre>
<pre class="linenums lang lang-CS">
 1	   2	   	     3		// 1: declareer; 2: benoem; 3: waarde;
string[] autos = {"Volvo", "BMW", "Toyota"};
</pre>

De plaats van een waarde in de array wordt ook wel de **index** genoemd. De index is een getal dat aanduidt op welke plaats een waarde zich bevindt in de array.

**Let op!** De index begint te tellen vanaf 0! De eerste waarde heeft daarom index 0, de tweede waarde index 1, enz...

<pre class="linenums lang lang-JS">
// index:	   0	1	 2
var autos = ["Volvo", "BMW", "Toyota"];
var tweedeAuto = autos[1];
</pre>
<pre class="linenums lang lang-PHP">
// index:	  0	  1	    2
$autos = array("Volvo", "BMW", "Toyota");
$tweedeAuto = autos[1];
</pre>
<pre class="linenums lang lang-CS">
// index:	    0	     1	      2
string[] autos = {"Volvo", "BMW", "Toyota"};
string tweedeAuto = autos[1];
</pre>

Met de index kan je waardes in de array **opvragen of aanpassen**.

<pre class="linenums lang lang-JS">
var eersteAuto = autos[0];	// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
</pre>
<pre class="linenums lang lang-PHP">
$eersteAuto = autos[0];		// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
</pre>
<pre class="linenums lang lang-CS">
String eersteAuto = autos[0];	// vraag de eerste waarde in de array op
autos[0] = "Renault";		// pas de eerste waarde in de array aan
</pre>

Om deze reden worden dit soort arrays ook wel **indexed arrays** genoemd: elke waarde krijgt automatisch een index toegewezen.

## Arrays: eigenschappen en functies

Arrays worden dus gebruikt om meerdere waardes op te slaan onder één naam. Ze hebben ook nog een heleboel andere eigenschappen en functies die ervoor zorgen dat arrays heel erg handig zijn. 

 - Het aantal waardes in de array opvragen
 - Een bepaalde waarde verwijderen uit de array
 - Een bepaalde waarde toevoegen in de array
 - ...
 
Elke programmeertaal heeft zo z'n eigen manieren om die eigenschappen op te vragen. Hier worden enkele voorbeelden getoond van de belangrijkste array-functies.

### Aantal waardes

<pre class="linenums lang lang-JS">
var autos = ["Volvo", "BMW", "Toyota"];
var aantal = autos.length;
</pre>
<pre class="linenums lang lang-PHP">
$autos = array("Volvo", "BMW", "Toyota");
$aantal = count($autos);
</pre>
<pre class="linenums lang lang-CS">
string[] autos = {"Volvo", "BMW", "Toyota"};
int aantal = autos.Length;
</pre>

### Waardes verwijderen

<pre class="linenums lang lang-JS">
var autos = ["Volvo", "BMW", "Toyota"];

var verwijderdeAuto1 = autos.pop();		// verwijdert de laatste waarde
var verwijderdeAuto2 = autos.shift();	// verwijdert de eerste waarde
</pre>
<pre class="linenums lang lang-PHP">
$autos = array("Volvo", "BMW", "Toyota");
$verwijderdeAuto = unset($autos[0]);	// OPGELET! Verwijdert OOK de index, 
					// waardoor dit een associative array wordt!
</pre>
<pre class="linenums lang lang-CS">
// In C# is de grootte van een array vastgelegd wanneer je de array aanmaakt.
// Je kan waardes dus niet zomaar verwijderen.
</pre>

### Waardes toevoegen

<pre class="linenums lang lang-JS">
var autos = ["Volvo", "BMW", "Toyota"];
autos.push("Renault");			// voegt een waarde toe aan het einde
autos.unshift("Renault");		// voegt een waarde toe aan het begin
</pre>
<pre class="linenums lang lang-PHP">
$autos = array("Volvo", "BMW", "Toyota");
$aantal[] = "Renault";			// voegt een waarde toe aan het einde
</pre>
<pre class="linenums lang lang-CS">
// In C# is de grootte van een array vastgelegd wanneer je de array aanmaakt.
// Je kan waardes dus niet zomaar toevoegen.
</pre>



<div class="lang lang-PHP"> 

<h2>Associative Arrays</h2>

<p>Indexed arrays gebruiken een index om een waarde op te vragen.</p>

<pre class="linenums lang lang-PHP">
// index:	  0	  1	    2
$autos = array("Volvo", "BMW", "Toyota");
$tweedeAuto = autos[1];
</pre>

<p>Een andere manier om deze array te schrijven is als volgt:</p>

<pre class="linenums lang lang-PHP">
$autos = array(0 =&gt; "Volvo", 1 =&gt; "BMW", 2 =&gt; "Toyota");
$tweedeAuto = autos[1];
</pre>

<p>Op deze manier kan je zelf de index kiezen die bij elke waarde hoort. Je kan zelfs een compleet andere index kiezen, en op dezelfde manier een waarde opvragen:</p>

<pre class="linenums lang lang-PHP">
$autos = array (7 =&gt; "Volvo", 5 =&gt; "BMW", 13 =&gt; "Toyota");

echo $autos[7]; 		// toont Volvo op het scherm
echo $autos[5]; 		// toont BMW op het scherm
echo $autos[13]; 		// toont Toyota op het scherm
</pre>

<p>Bovenstaande array wordt ook een <b>associative array</b> genoemd. Associative arrays zijn een uitbreiding op indexed arrays. Ze worden zo genoemd omdat in dit soort arrays de waarde wordt geassocieerd met een zelf gekozen index, meestal een naam of getal.<p>

<p>Een naam kan eender wat zijn, zo lang het uniek is:</p>
<ul>
	<li>Een getal</li>
 <li>Een letter</li>
 <li>Een woord</li>
</ul>

<p>Het is dus mogelijk om in plaats een getal een woord te gebruiken. Zo kan je automerken bijvoorbeeld associëren met het land waar ze gemaakt worden.</p>

<pre class="linenums lang lang-PHP">
$autos = array ("Zweeds" =&gt; "Volvo", "Duits" =&gt; "BMW", "Japans" =&gt; "Toyota");

echo $autos["Zweeds"]; 		// toont Volvo op het scherm
echo $autos["Duits"]; 		// toont BMW op het scherm
echo $autos["Japans"]; 		// toont Toyota op het scherm
</pre>
