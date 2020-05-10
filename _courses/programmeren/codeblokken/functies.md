---
title: Functies
tags: 
 - functie
 - signature
 - return
 - return value
 - parameter
 - void
definitions: 
 - name: signature
   definition: De unieke naam van een functie. Bij veel programmeertalen horen de parameters hier ook bij.
 - name: return value
   definition: De waarde die een functie teruggeeft aan de plaats waar de functie werd aangeroepen.
 - name: parameter
   definition: Een waarde die aan een functie wordt meegegeven.
description: Functies zijn één van de belangrijkste codeblokken om te leren gebruiken. Ze worden gebruikt om je code beter te verdelen en structureren.
---


## Wat is een functie?

**Een functie is een codeblok met een naam**. Aangezien een codeblok een lijst met instructies is, is een functie dus een lijst met instructies waar je een naam aan geeft.

 - De instructies in dat codeblok worden pas uitgevoerd als je de juiste naam aanroept.
 - Roep je de functie nergens aan, dan worden die instructies nooit uitgevoerd!

Je kan een functie vergelijken met een To Do-lijst. Op zo’n lijst staan een aantal instructies (koop paprika’s, koop aardappelen, …), en je geeft dat lijstje een logische naam (boodschappen).
Boodschappen doen is zo heel gemakkelijk. Je neemt het To Do-lijstje met de juiste naam ('Boodschappen ALDI') en overloopt alle instructies één voor één tot je het lijstje hebt afgewerkt.

Een functie werkt op dezelfde manier:

Je plaatst alle **instructies** die bij elkaar horen in het lijstje (het codeblok), en je geeft dat lijstje een **naam** (Explodeer).

<pre class="prettyprint linenums lang lang-JS lang-CS lang-PHP">
FUNCTIE: EXPLODEER
</pre>
<pre class="prettyprint linenums lang lang-JS lang-CS lang-PHP">
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter 
	// van de explosie
}
</pre>

## Een functie maken

<pre class="prettyprint linenums lang lang-JS lang-PHP">
function Explodeer() 	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
void Explodeer()  	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
}
</pre>

Het gedeelte `function Explodeer()` heet de **signature** van de functie. Deze signature moet **uniek** zijn in de scope van de functie. De signature geeft aan dat dit de enige functie Explodeer is binnen de scope.

**Opgelet!** Een declaratie is **GEEN instructie**! Aan het einde volgt er dus **GEEN puntkomma**.

## Een functie gebruiken

Een functie is een codeblok met een naam. De instructies in dat codeblok worden pas uitgevoerd als je de juiste naam aanroept. Roep je de functie nergens aan, dan worden die instructies nooit uitgevoerd!

De volgende code doet dus niets, want hoewel de functie wel gedeclareerd is wordt deze nergens bij naam aangeroepen: 

<pre class="prettyprint linenums lang lang-JS lang-PHP">
function Explodeer() 	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
void Explodeer()  	// de signature
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
}
</pre>

De functie moet nog worden aangeroepen (= gebruikt) voordat de instructies worden uitgevoerd. Bij een functie aanroep gebruik je gewoon de naam van de functie, gevolgd door de haakjes:

<pre class="prettyprint linenums lang lang-JS lang-CS lang-PHP">
Explodeer();
</pre>

**Opgelet!** Een functie aanroep is **WEL een instructie!** Aan het einde volgt er dus **WEL een puntkomma**.


## Parameters

Een functie is een lijst met instructies waar je een naam aan geeft. Die lijst van instructies kan eender welke instructie bevatten, van het aanmaken van variabelen tot het aanroepen van andere functies.

De Scope van variabelen in een functie zorgt ervoor dat die variabelen (en dus de waarde die daarin zit opgeslagen) enkel en alleen binnen die functie bereikbaar is. Een vervelend effect hiervan is dat je geen variabelen kunt gebruiken die in andere functies zijn aangemaakt.

Bijvoorbeeld:

<pre class="prettyprint linenums lang lang-JS">
function Functie1()  	// de signature van functie 1
{
	let mijnVar = 7;	// maak een variabele aan
	Functie2();		// roep functie 2 aan
}
function Functie2()  	// de signature van functie 2
{
	// Functie 2 kan de waarde van mijnVar NIET gebruiken vanwege de scope van mijnVar!
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
function Functie1()  	// de signature van functie 1
{
	$mijnVar = 7;	// maak een variabele aan
	Functie2();		// roep functie 2 aan
}
function Functie2()  	// de signature van functie 2
{
	// Functie 2 kan de waarde van mijnVar NIET gebruiken vanwege de scope van mijnVar!
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
void Functie1()  	// de signature van functie 1
{
	int mijnVar = 7;	// maak een variabele aan
	Functie2();		// roep functie 2 aan
}
void Functie2()  	// de signature van functie 2
{
	// Functie 2 kan de waarde van mijnVar NIET gebruiken vanwege de scope van mijnVar!
}
</pre>

Moest je in Functie2() de variabele mijnVar willen gebruiken, is dit dus niet mogelijk.

Functies hebben echter een handige manier om de *waarde* van een variabele aan de functie te kunnen doorgeven. Functies kunnen gebruik maken van speciale functie-variabelen, die je bij het aanroepen van die functie kunt invullen. Deze speciale functie-variabelen heten **parameters**.

Een parameter is een variabele in de functie, waarvan de waarde wordt bepaald bij het aanroepen van de functie.

<pre class="prettyprint linenums lang lang-JS">
function Functie1()  	// de signature van functie 1
{
	Functie2(7);		// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde 7.
}
function Functie2(mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnParameter WEL gebruiken.
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
function Functie1()  	// de signature van functie 1
{
	Functie2(7);		// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde 7.
}
function Functie2($mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnParameter WEL gebruiken.
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
void Functie1()  	// de signature van functie 1
{
	Functie2(7);		// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde 7.
}
void Functie2(int mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnParameter WEL gebruiken.
}
</pre>

Je kan hiermee zelfs de waarde van een andere variabele doorgeven aan de parameter.

<pre class="prettyprint linenums lang lang-JS">
function Functie1()  	// de signature van functie 1
{
	let mijnVar = 7;
	Functie2(mijnVar);	// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde van mijnVar.
}
function Functie2(mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnVar niet gebruiken, maar die van mijnParameter wel!
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
function Functie1()  	// de signature van functie 1
{
	$mijnVar = 7;
	Functie2($mijnVar);	// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde van mijnVar.
}
function Functie2($mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnVar niet gebruiken, maar die van mijnParameter wel!
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
void Functie1()  	// de signature van functie 1
{
	int mijnVar = 7;
	Functie2(mijnVar);	// roep functie 2 aan, en vul de parameter mijnParameter in met de waarde van mijnVar.
}
void Functie2(int mijnParameter)  	// de signature van functie 2 met één parameter
{
	// Functie 2 kan de waarde van mijnVar niet gebruiken, maar die van mijnParameter wel!
}
</pre>

## Return waarde

Een functie is een lijst met instructies waar je een naam aan geeft. Die lijst van instructies kan eender welke instructie bevatten, van het aanmaken van variabelen tot het aanroepen van andere functies. Parameters zijn een manier om een waarde door te geven van de aanroep naar de functie. Ook het omgekeerde is soms nodig: een waarde doorgeven van de functie naar de plaats waar je de functie aanroept.

Het is belangrijk om te weten dat een functie in principe maar één doel (één 'functie') mag hebben. Als een functie dus iets teruggeeft aan de plaats waar de functie werd aangeroepen, dan kan dat maar één waarde zijn.

Bijvoorbeeld:

De functie Optellen(getal1, getal2) heeft één duidelijk doel: tel de waardes van de twee parameters op. Deze functie kan je aanroepen met Optellen(3, 7), waarop de variabele som de waarde 10 zal bevatten.

<pre class="prettyprint linenums lang lang-JS">
Optellen(3, 7);

function Optellen(getal1, getal2)  	// de signature van functie 1
{
	let som = getal1 + getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
Optellen(3, 7);

function Optellen($getal1, $getal2)  	// de signature van functie 1
{
	$som = getal1 + getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
Optellen(3, 7);

void Optellen(int getal1, int getal2)  	// de signature van functie 1
{
	int som = getal1 + getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
}
</pre>

Het probleem is ook hier de scope van de variabele in de functie. De functie is aangeroepen, de getallen zijn samengeteld, maar ik kan het resultaat van die som nergens anders gebruiken.

<pre class="prettyprint linenums lang lang-JS lang-PHP lang-JS">
Optellen(3, 7); // de getallen zijn opgeteld, maar nu wil ik aan het resultaat van die som geraken!
</pre>

Hiervoor wordt het keyword return gebruikt. Return zorgt ervoor dat een functie niet alleen iets kan berekenen, maar het resultaat van die berekening ook kan teruggeven aan de plaats waar de functie werd aangeroepen.

<pre class="prettyprint linenums lang lang-JS">
let resultaat = Optellen(3, 7); // maak een variabele aan, waarin het resultaat van de functie optellen bewaard kan worden

function Optellen(getal1, getal2)  	// de signature van functie 1
{
	let som = getal1 + getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
	return som;			// geef de waarde van som terug naar de aanroep!
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
$resultaat = Optellen(3, 7); // maak een variabele aan, waarin het resultaat van de functie optellen bewaard kan worden

function Optellen($getal1, $getal2)  	// de signature van functie 1
{
	$som = $getal1 + $getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
	return $som;			// geef de waarde van som terug naar de aanroep!
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
int resultaat = Optellen(3, 7); // maak een variabele aan, waarin het resultaat van de functie optellen bewaard kan worden

int Optellen(int getal1, int getal2)  	// OPGELET: in C# moet je het datatype van de return waarde ook tonen!
{
	int som = getal1 + getal2;	// bevat de waarde 10 bij de aanroep Optellen(3, 7);
	return som;			// geef de waarde van som terug naar de aanroep!
}
</pre>
<div class="lang lang-CS">// OPGELET: in C# moet je het datatype van de return waarde ook tonen!</div>
