---
title: HTML Elementen
tags: 
 - zelfsluitend
 - element
 - nesten
 - inhoud
 - indentatie
definitions: 
 - name: element
   definition: Een blok code, bestaande uit een openingstag, inhoud en sluitingstag.
 - name: zelfsluitend element
   definition: Een element dat de inhoud dat het aanduidt zelf toevoegt. Dit element heeft daarom enkel een openingstag.
 - name: nesten
   definition: Het insluiten van één element in een ander element.
 - name: inhoud
   definition: Alles dat tussen de openingstag en sluitingstag van een element staat.
 - name: indentatie
   definition: Het aantal spaties voor elke lijn code, dat aanduidt in welk element die lijn code is genest.
 - name: <html>
   definition: Een element dat de basis van de volledige webpagina bepaalt.
 - name: <head>
   definition: Een element dat meta-informatie over de webpagina bevat.
 - name: <body>
   definition: Een element waarin alle zichtbare inhoud van de webpagina wordt geplaatst.
 - name: <title>
   definition: Een element dat de titel van de webpagina aanduidt. Dit element hoort thuis in het <head> element.
description: Elk document bestaat uit verschillende inhoud, of het nu een Word-document of een webpagina is. Elke inhoud die aangeduid wordt met specifieke markup, wordt ook een element genoemd. Zo wordt het mogelijk om elementen *in* andere elementen te plaatsen.
---


## Elementen

Een **HTML-element** is een blok code, bestaande uit een **openingstag**, **inhoud** en **sluitingstag**.


``` html
<p> Dit is een paragraaf element. </p>
<h1> Dit is een koptekst element. </h1>
```


In HTML kan inhoud niet bestaan zonder dit tussen een openingstag en sluitingstag te plaatsen. HTML wordt gebruikt om inhoud toe te voegen aan een website, dus spreken we nooit over het schrijven van tags, maar over het schrijven van elementen.


### Zelfsluitende elementen

**Sommige elementen voegen de inhoud die ze aanduiden zelf toe.** 



*   **`<hr>`** (horizontal rule) duidt een horizontale regel aan, en voegt die zelf ook toe.
*   **`<br>`** (break) duidt een witregel aan in tekst, en voegt die witregel zelf ook toe.

Je kan hier zelf geen inhoud meer aan toevoegen, want deze elementen doen dit zelf al. Deze speciale elementen bestaan dus <strong>enkel uit een openingstag</strong>, zonder inhoud of sluitingstag.


``` html
<p>
	Dit is een gewoon element.
</p>
Hieronder volgt een zelfsluitend element (zonder sluitingstag!):
<hr>				→ toevoegen en aanduiden van een horizontale lijn
```



## Nesten

Het **nesten** van elementen wilt zeggen dat je **een element insluit in een ander element**. Het ingesloten element is deel van de inhoud van het andere element.

Bijvoorbeeld: Hieronder is het h1-element (groen) ingesloten door het body-element (rood):


``` html
<body>
	<h1>
		Dit element is genest in het body element.
		Dit element is deel van de inhoud van het body element.
	</h1>
</body>
```


Of een iets uitgebreider voorbeeld:


``` html
<html>
	<body>
		<h1>
			Dit is een kop1-element.
		</h1>
		<p>
			Dit is een paragraaf. Hierin staat meestal wat meer tekst!
			<b>Deze tekst wordt in het vet weergegeven.</b>
		</p>
	</body>
</html>
```


Hierboven wordt duidelijk gemaakt dat:



*   Het `h1` element en het `p` element zijn genest in het `body` element.
*   In het `p` element is een `b` element genest.
*   De **inhoud** van het **`<body>`**-element bestaat uit het **`<h1>`**-element, het **`<p>`**-element, het **`<b>`** element dat in het **`<p>`**-element steekt, en de teksten in de elementen **`<h1>`**, **`<p>`** en **`<b>`**


## Indentatie

Indentatie is **het aantal spaties voor elke lijn code**, dat aanduidt **in welk element die lijn code is genest**.

Hoewel indentatie in HTML niet verplicht is, helpt het om de leesbaarheid van je code enorm te verhogen. Als je indentatie correct is, kan je in één oogopslag zien op hoe je code genest is.

In het volgende voorbeeld staat het aantal indentaties aangeduid door zwarte lijnen voor elke lijn code.


```html
<p>
---→Dit is tekst in de paragraaf.
	
---→<ul>
---→---→<li>
---→---→---→<a>
---→---→---→---→Dit is een link
---→---→---→</a>
---→---→</li>
---→</ul>

---→<ol>
---→---→<li>
---→---→---→Dit is een genummerd item
---→---→</li>
---→</ol>
</p>
```

Zo zie je dat:

*   Het `p` element niet genest is
*   De elementen `ul` en `ol` genest zijn in het `p` element
*   Alle `li` elementen genest zijn in een `ul` of `ol` element


## Coding Guidelines

Hoewel HTML niet hoofdlettergevoelig is, worden alle tag-namen in **lowercase** geschreven.

Bij het schrijven van code let je steeds op de correcte **indentatie**.

