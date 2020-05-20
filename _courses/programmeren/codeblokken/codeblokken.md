---
title: Codeblokken
tags: 
 - functie
 - selectie
 - iteratie
definitions: 
 - name: codeblok
   definition: Een lijst met instructies dat begint en eindigt met een bepaald teken.
 - name: functie
   definition: Een lijst met instructies dat begint en eindigt met een bepaald teken waar je een naam aan geeft. De instructies worden uitgevoerd als je de naam aanroept.
 - name: selectie
   definition: Een lijst met instructies dat enkel wordt uitgevoerd wanneer een voorwaarde waar is.
 - name: iteratie
   definition: Een lijst met instructies dat verschillende keren achter elkaar wordt uitgevoerd.
description: Wat zijn codeblokken?
---

## Codeblokken

**Een codeblok is een lijst met instructies dat begint en eindigt met een bepaald teken**. Het begin en einde van een codeblok wordt aangeduid met **accolades**. 

**Er bestaan verschillende soorten codeblokken**, die elk in hun eigen hoofdstuk wordt besproken.

 - **Functie**-blok: een codeblok waar je een naam aan geeft.
 - **Selectie**-blok: een codeblok dat enkel wordt uitgevoerd wanneer een voorwaarde waar is.
 - **Iteratie**-blok: een codeblok dat verschillende keren achter elkaar wordt uitgevoerd.

Een codeblok ziet er bijvoorbeeld zo uit:

<pre class="linenums lang lang-JS lang-CS lang-PHP">
{
	// instructies
	// instructies
}
</pre>

## Nesten

Het **nesten** van codeblokken wilt zeggen dat **een codeblok *in* een ander codeblok** staat. 

 - In de afbeelding hieronder staan het blauwe en rode codeblok in het groene codeblok.
 - Het groene codeblok is de **parent** van het rode en blauwe codeblok.
 - Het rode en blauwe codeblok zijn de **children** van het groene codeblok.
 - Het blauwe codeblok is de **sibling** van het rode codeblok en andersom (het rode codeblok is de sibling van het blauwe codeblok).
 
<img src="{{ site.baseurl }}/assets/img/codeblokken_1.png" alt="codeblokken" style="max-width: 50%">

## Indentatie

Indentatie is de hoeveelheid inspringing (*spaties* of *tabs*) voor elke lijn code. Het is een manier om gemakkelijk te zien wie de parent, children en siblings zijn van een codeblok.

Hieronder staat twee maal dezelfde code geschreven. Links staat het voorbeeld met indentatie. Rechts staat hetzelfde voorbeeld, maar zonder indentatie.


<table style="width: 100%">
 <tr>
  <td>
	  Met indentatie:
  </td>
  <td>
	  Zonder indentatie:
  </td>
 </tr>
 <tr>
  <td>
<pre class="linenums lang lang-JS lang-CS lang-PHP">
{ // blok 1
	// instructies
	// instructies

	{ // blok 2
		// instructies
		// instructies
	}

	{ // blok 3
		// instructies
		// instructies		
	}
}
</pre>
  </td>
  <td>
<pre class="linenums lang lang-JS lang-CS lang-PHP">
{ // blok 1
// instructies			
// instructies

{ // blok 2
// instructies
// instructies
}

{ // blok 3
// instructies
// instructies
}
}
</pre>
  </td>
 </tr>
</table>


In het linkse voorbeeld kan je heel duidelijk zien welke de children zijn van Blok 1. In het rechtse voorbeeld is dit veel moeilijker. Bij indentatie worden de volgende regels gevolgd:

 - 1 inspringing is gelijk aan 1 tab.
 - De instructies van een codeblok krijgen 1 inspringing meer dan de open- en sluit accolade.
 - De children van een codeblok krijgen 1 inspringing meer dan de open- en sluit accolade.
 
## Scope

De scope van een stuk code laat zien op welke plaatsen in de programma-code je instructies bereikbaar zijn.Hiervoor gebruiken de meeste programmeertalen dezelfde regels:
 - Variabelen kan je gebruiken in het codeblok waarin de variabele werd aangemaakt en in alle children van het codeblok.
   - De variabele groen kan je dus gebruiken in het blauwe en rode blok.
   - De variabele blauw kan je enkel in het blauwe blok gebruiken.

<pre class="linenums lang lang-JS">
{ // parent blok
	var inParent = "groen";		// scope is de parent en beide children
	
	{ // child 1 blok
		var inChild1 = "blauw";	// scope is enkel child blok 1
	}

	{ // child 2 blok
		var inChild2 = "rood";	// scope is enkel child blok 2
	}
}
</pre>
<pre class="linenums lang lang-PHP">
{ // parent blok
	$inParent = "groen";		// scope is de parent en beide children
	
	{ // child 1 blok
		$inChild1 = "blauw";	// scope is enkel child blok 1
	}

	{ // child 2 blok
		$inChild2 = "rood";	// scope is enkel child blok 2
	}
}
</pre>
<pre class="linenums lang lang-CS">
{ // parent blok
	string inParent = "groen";		// scope is de parent en beide children
	
	{ // child 1 blok
		string inChild1 = "blauw";	// scope is enkel child blok 1
	}

	{ // child 2 blok
		string inChild2 = "rood";	// scope is enkel child blok 2
	}
}
</pre>


## DRY

In programmeren zijn er bepaalde principes waar programmeurs zich graag aan houden. Eén van die principes heet 
<div style="text-align: center">
	<p style="font-size: 40px;">DRY</p>
	<p>Don't Repeat Yourself</p>
</div>

Dit wil zeggen: probeer jezelf niet keer op keer te herhalen in je code. 

Waarom is dit principe zo belangrijk? Stel je voor dat we een codeblok hebben om een explosie te maken. Het codeblok zou er waarschijnlijk als volgt uitzien:

<pre class="linenums lang lang-JS lang-CS lang-PHP">
// codeblok voor explosie:
{
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
}
</pre>

In een spel zijn er verschillende dingen die kunnen exploderen: wanneer een auto of granaat ontploft, moet in beide gevallen het explosie-codeblok worden uitgevoerd. Zowel de auto als de granaat krijgen dus hetzelfde explosie-codeblok:

<table style="width: 100%">
 <tr>
  <td>
<pre class="linenums lang lang-JS lang-CS lang-PHP">
AUTO:

// explosie instructies:
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
</pre>
  </td>
  <td>
<pre class="linenums lang lang-JS lang-CS lang-PHP">
GRANAAT:

// explosie instructies:
	// maak een geluidje
	// laat een licht rood/oranje flikkeren
	// doe 10 schade
	// aan alle spelers binnen 5 meter van de explosie
</pre>
  </td>
 </tr>
</table>

Als er nu een kleine aanpassing gemaakt moet worden in de explosie-code (bijvoorbeeld om een rook-effect toevoegen) moet die aanpassing in al die explosie-codeblokken worden gedaan. 
 - Dit is heel erg veel werk.
 - Het is gemakkelijk om per ongeluk één of twee plaatsen te vergeten aanpassen.

Dit allemaal omdat al die objecten zelf hun eigen explosie-codeblok hebben.

Door het DRY principe correct te gebruiken, zou het explosie-codeblok slechts op één plaats staan. Zo moet je ook maar op één plaats een aanpassing maken. Dit is uiteraard veel gemakkelijker, en je kan niet meer vergeten om je rook-effectje voor één of twee objecten toe te voegen. 
