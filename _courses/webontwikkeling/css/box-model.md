---
title: Box Model
tags: 
 - box model
 - padding
 - margin
 - border
 - box-sizing
definitions:
 - name: box model
   definition: De rechthoek die rond elk HTML element bestaat.
 - name: padding
   definition: de ruimte rondom de inhoud, aan de binnenkant van de rand.
 - name: border
   definition: de ruimte tussen padding en margin die zichtbaar gemaakt kan worden tot een rand.
 - name: margin
   definition: de ruimte rondom het HTML element die zorgt dat er ruimte is tussen dit en andere HTML elementen.
 - name: width
   definition: de breedte van de inhoud van het element.
 - name: height
   definition: de hoogte van de inhoud van het element.
description: Bij opmaak zijn de twee meest bepalende factoren kleur en grootte. In dit hoofdstuk wordt getoond hoe je de ruimte kan bepalen die elk element inneemt.
---

## Elementen als Rechthoek

Alle HTML elementen kunnen worden gezien als rechthoeken (**boxes**). 

Het CSS **Box Model** is eigenlijk gewoon een rechthoek dat **rond elk HTML element** wordt geplaatst. Dit rechthoek bevat:



*   **Inhoud** (content): de binnenkant van het rechthoek. Hierin wordt de inhoud (tekst, afbeelding, etc.) getoond van het HTML element.
*   **Padding**: de ruimte rondom de inhoud, aan de binnenkant van de rand.
*   **Rand** (border): de lijn die kan getekend worden rondom een HTML element. Dit is de ruimte tussen padding en margin.
*   **Margin**: De ruimte rondom het volledige HTML element. Deze ruimte zorgt ervoor dat er ruimte is tussen dit en andere HTML elementen.
*   **Width**: De breedte van de content van het HTML element. Standaard is de breedte van een element dus **width + padding + border (+ margin)**.
*   **Height**: De hoogte van de content van het HTML element. Standaard is de hoogte van een element dus **height + padding + border (+ margin)**.



![drawing]({{ site.baseurl }}/assets/img/css-boxmodel1.PNG)


# CODE


## Overzicht

<table>
<tr><th>property</th><th>code</th><th>uitleg</th></tr>
	<tr><td>De width property</td><td><code>width: 500px;</code></td><td>De width-property stelt de breedte van een element in. <br><b>Opgelet!</b> De width-property bevat standaard geen padding, border of margin. <b>De totale, werkelijke breedte van een element bestaat dus uit width + padding + border.</b><br>De mogelijke waardes zijn:<ul> <li>Een pixel waarde</li><li>Een % waarde</li></ul>
</td></tr>
<tr><td>De height property</td><td><code>height: 500px;</code></td><td>De height-property stelt de breedte van een element in. <br><b>Opgelet!</b> De height-property bevat standaard geen padding, border of margin. <b>De totale, werkelijke breedte van een element bestaat dus uit height + padding + border.</b><br>De mogelijke waardes zijn:<ul> <li>Een pixel waarde</li><li>Een % waarde</li></ul>
</td></tr>
</table>



## Box-sizing



<table>
<tr><th>property</th><th>code</th><th>uitleg</th></tr>
  <tr>
   <td>De box-sizing property
   </td>
   <td><code>box-sizing: border-box;</code>
   </td>
   <td><code>Box-sizing: border-box;</code> zorgt ervoor dat het instellen van de width daadwerkelijk de breedte van een element inclusief padding en border-width is.<br>
<b>Belangrijk!</b> Omdat het gedrag van <code>Box-sizing: border-box;</code> vaak intuïtiever aanvoelt, wordt in veel websites als eerste regel aangegeven dat alle elementen de regel <code>Box-sizing: border-box;</code> krijgen.<br>
De mogelijke waardes zijn:
<ul>
<li><b>content-box</b>: Standaard gedrag. De width-property en de height-property omvatten enkel en alleen de content, zonder padding, border of margin.</li>
<li><b>border-box</b>: De width-property en de height-property omvattende content, padding en border, maar nog steeds zonder de  margin.
</li>
</ul>
   </td>
  </tr>
</table>


Wanneer de width van een element wordt instelt op 400 pixels is het logisch om te denken dat dit element ook daadwerkelijk 400 pixels breed zal zijn, ongeacht padding of border-width.

Zoals hierboven al aangegeven is dit niet het geval: Het standaard gedrag van CSS zegt dat de breedte van een element gelijk is aan de width + padding + border.

Dit kan voor onaangename verrassingen zorgen: 2 elementen die elk 50% breed zijn passen niet naast elkaar wanneer ze padding of border krijgen.



*   Stel: je scherm is 1000 pixels breed, dan is elk element 500px + padding + border breed. Dit is breder dan de helft, dus passen deze 2 elementen niet naast elkaar;

De box-sizing-property kan dit gedrag aanpassen.


# BORDER PROPERTIES

<table>
<tr><th>property</th><th>code</th><th>uitleg</th></tr>
  <tr>
   <td>De border-width property</td>
   <td><code>border-width: 5px;</code></td>   
   <td>
	   De border-width property zorgt voor de breedte van de rand rond een element. <br>
De mogelijke waardes zijn:
<ul>
	<li>Een pixel waarde</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Border-color</td>
   <td><code>border-color: red;</code></td>
   <td>
	   De border-color property zorgt voor de kleur van de rand rond een element. <br>
De mogelijke waardes zijn:
<ul>
<li>Een CSS-kleurnaam</li>
<li>Een RGB kleurwaarde</li>
<li>Een HEX kleurwaarde</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Border-style
   </td>
   <td><code>border-style: dotted;</code>
   </td>
   <td>De border-style property zorgt voor de opmaak van de rand rond een element. <br>
De mogelijke waardes zijn:
<ul>
<li><b>dotted</b>: een gestippelde rand</li>
<li><b>dashed</b>: een gestreepte rand</li>
<li><b>solid</b>: een volle rand</li>
<li><b>double</b>: een dubbele volle lijn als rand</li>
<li><b>groove</b>: een rand waarbij het lijkt alsof die wat diepte heeft. Dit effect hangt af van de border-color.</li>
<li><b>ridge</b>: een rand waarbij het lijkt alsof die naar buiten steekt. Dit effect hangt af van de border-color.</li>
<li><b>inset</b>: een rand waarbij het lijkt alsof het element wat diepte heeft. Dit effect hangt af van de border-color.</li>
<li><b>outset</b>: een rand waarbij het lijkt alsof het element naar buiten steekt. Dit effect hangt af van de border-color.</li>
<li><b>none</b>: verwijdert alle randen</li>
<li><b>hidden</b>: een onzichtbare rand</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Border
   </td>
   <td><code>border: borderwidth borderstyle bordercolor;</code></td>
   <td>Omdat de drie border-properties vaak in combinatie met elkaar worden gebruikt, bestaat er ook de border property. De border property combineert border-width, border-style en border-color tot 1 property.
   </td>
  </tr>
</table>

# LAYOUT PROPERTIES


## Float

De float property zorgt ervoor dat block-level elementen niet op de standaard HTML manier wordt geplaatst. In plaats daarvan wordt het element aan de linker- of rechterkant geplaatst, waarbij tekst en inline elementen zich **rondom** het element plaatsen in plaats van erboven en eronder. 

De mogelijke waardes zijn:



*   **Left**: Geeft aan dat het element aan de linkerkant van het overkoepelende element wordt geplaatst.
*   **Right**: Geeft aan dat het element aan de rechterkant van het overkoepelende element wordt geplaatst.
*   **None**: Het element wordt terug op de standaard HTML positie geplaatst

Onderstaand voorbeeld zorgt dat de &lt;h1> heading aan de linkerkant in het &lt;div>-element getoond wordt, waarbij de tekst in het &lt;p>-element zich rondom het &lt;h1> element schikt.


<pre>
&lt;style>
h1 { 
	float: left;
}
&lt;/style>

&lt;div>
	&lt;h1>
		HALLO!
	&lt;/h1>
	This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.
	This is some text. This is some text. This is some text.
&lt;/div>
</pre>
