---
title: Structuur
tags: 
 - structuur
 - block
 - hoofdstructuur
 - substructuur
definitions:
 - name: structuur
   definition: De logische manier waarop de ontwikkelaar elementen heeft genest.
description: Websites veranderen vaak. Het is dus belangrijk dat je je code zo opbouwt dat die veranderingen gemakkelijk te maken zijn, zonder dat je daar als ontwikkelaar veel werk aan hebt. Een goede structuur is daarbij enorm belangrijk. In dit hoofdstuk wordt verder uitgelegd hoe je zo'n structuur kunt opbouwen.
---

HTML bepaalt de structuur van een website. Deze structuur bestaat uit blokken waarin ofwel inhoud, ofwel andere, kleinere blokken worden geplaatst.

Het volgende voorbeeld toont hoe een website wordt onderverdeeld in vier blokken, en hoe het linkse blok op zich ook weer wordt onderverdeeld in vier kleinere blokken.

<img src="{{ site.baseurl }}/assets/img/html-structuur1.jpg" alt="klassediagram" style="height: auto; max-width: 100%">


Als web-ontwikkelaar helpt het om een duidelijk beeld van de structuur van de website te hebben voordat er wordt begonnen met HTML code te schrijven. Daarom is het een goed idee om bij een ontwerp zelf **een schets** te **maken** die toont hoe de hoofdstructuur en substructuren in elkaar zitten.

Een goede structuur zorgt ervoor dat je code gemakkelijker leesbaar is voor jezelf en andere programmeurs. Wanneer later opmaak en layout worden toegevoegd aan de website, zorgt een goede structuur er ook voor dat wijzigingen gemakkelijk en snel kunnen geimplementeerd worden. \
In het voorbeeld hieronder zie je 2 websites met dezelfde structuur, maar een andere layout.

<img src="{{ site.baseurl }}/assets/img/html-structuur2.jpg" alt="klassediagram" style="height: auto; max-width: 100%">


## Block elementen

Structuur wordt gegeven door middel van block elementen zoals het **`div`** element. Je kan bijvoorbeeld de gehele website als  één **`div`** element bekijken, waarin 4 verschillende **`div`** elementen worden geplaatst. 

<img src="{{ site.baseurl }}/assets/img/html-structuur3.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Dit vertaalt zich dan naar de volgende code:


```html
<div>
	<div id="1">
	</div>

	<div id="2">
	</div>

	<div id="3">
	</div>

	<div id="4">
	</div>
</div>
```



Deze hoofdstructuur kan dan gemakkelijk uitgebreid worden met een **substructuur**:

<img src="{{ site.baseurl }}/assets/img/html-structuur4.jpg" alt="klassediagram" style="height: auto; max-width: 100%">


```html
<div>
	<div id="1">
		<div id="1.1">
		</div>

		<div id="1.2">
		</div>

		<div id="1.3">
		</div>

		<div id="1.4">
		</div>
	</div>

	<div id="2">
	</div>

	<div id="3">
	</div>

	<div id="4">
	</div>
</div>
```
