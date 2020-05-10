---
title: Relaties
tags: 
 - associatie
 - compositie
 - overerving
 - inheritance
 - relatie
 - klasse
definitions: 
 - name: associatie
   definition: Wanneer een klasse A gebruik maakt van een klasse B op eender welke manier.
 - name: compositie
   definition: Wanneer een klasse A een field heeft met als datatype klasse B.
 - name: relatie
   definition: De manier waarop twee klassen met elkaar zijn verbonden.
description: Wanneer een klasse een variabele bevat, is er een relatie tussen die klasse en het datatype van de variabele. Ook wanneer een klasse een method bevat met een parameter van een datatype, is er een relatie tussen die klasse en het datatype van die parameter.
---


## Relaties
Wanneer een klasse een variabele bevat, is er een relatie tussen die klasse en het datatype van de variabele. Ook wanneer een klasse een method bevat met een parameter van een datatype, is er een relatie tussen die klasse en het datatype van die parameter. In het voorbeeld hieronder zou je bijvoorbeeld kunnen zeggen dat er een relatie is tussen Leerling en string, want de klasse Leerling heeft een field van het datatype string.

<pre class="prettyprint linenums lang lang-JS">
class Leerling {
	constructor(naamLeerling) {
		this._naam = "";		// Een relatie tussen Leerling en string
	}
}
</pre>
<pre class="prettyprint linenums lang lang-PHP">
class Leerling {	
	public $_naam = "";		// Een relatie tussen Leerling en string
}
</pre>
<pre class="prettyprint linenums lang lang-CS">
class Leerling {	
	string naam = "";			// Een relatie tussen Leerling en string
}
</pre>

Wanneer het gaat over simpele datatypes, zoals string, integer, boolean, etc., zijn deze relaties niet zo belangrijk om aan te duiden. Deze datatypes zijn immers universeel gekend door alle gebruikers van de programmeertaal, dus is ook duidelijk wat de effecten en mogelijkheden zijn bij het gebruiken van die datatypes.

Wanneer het echter gaat over objecten is het echter wel belangrijk om deze relaties aan te duiden. Zeker wanneer het gaat over zelfgemaakte klassen is het belangrijk om de verschillende soorten relaties aan te duiden.

Er bestaan een heleboel soorten relaties tussen klassen. Hieronder worden 3 van de belangrijkste besproken: Associatie, compositie en overerving.

**Als er verschillende relaties tussen 2 klassen bestaan, teken je enkel degenen die het meest specifiek zijn.** 

### Associatie

Een associatie tussen 2 klassen doet zich voor wanneer een klasse A gebruik maakt van een klasse B op eender welke manier:

 - Een method in klasse A met returntype B
 - Een method in klasse A met een parameter met datatype B
 - …

Een associatie is de minst specifieke relatie die er bestaat. Het zegt gewoon dat 2 klassen iets met elkaar te maken hebben en wordt in een klassediagram aangeduid door een gewone, open pijl.

<img src="{{ site.baseurl }}/assets/img/relaties_1.png" alt="klassediagram" style="height: auto; max-width: 100%">

### Compositie

Een compositie is een specifiek soort associatie. Het wilt zeggen dat een klasse A een field heeft met als datatype klasse B.

Een compositie is dus een meer specifieke relatie dan een associatie. Het zegt dat één klasse een object van een andere klasse bevat en wordt in een klassediagram aangeduid door een gewone, open pijl met een gevuld diamantje aan het andere uiteinde.

<img src="{{ site.baseurl }}/assets/img/relaties_2.png" alt="klassediagram" style="height: auto; max-width: 100%">

### Overerving

Een overerving is, zoals de naam zelf zegt, een relatie die aanduidt dat een klasse A overerft van klasse B. Dit wordt ook wel eens inheritance genoemd.

Ook een overerving is een meer specifieke relatie dan een associatie, en wordt in een klassediagram aangeduid door een volle of streepjeslijn met een lege pijl aan het uiteinde.

<img src="{{ site.baseurl }}/assets/img/relaties_3.png" alt="klassediagram" style="height: auto; max-width: 100%">
