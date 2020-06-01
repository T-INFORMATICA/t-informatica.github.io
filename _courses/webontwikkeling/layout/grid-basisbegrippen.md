---
title: CSS Grid Basisbegrippen
tags: 
 - instructie
 - commentaar
description:
---


# Basisbegrippen


## Belangrijke termen

Omdat sommige termen hieronder gemakkelijk te verwarren zijn, is het belangrijk om deze te leren zoals gedefinieerd in de Grid-specificatie. 


### Grid Container

Dit is het element waarop **`display: grid;`** op wordt toegepast. Dit is ook het hoofd-element waarin alle Grid-elementen zullen geplaatst worden.

In het voorbeeld hieronder is het element met de klasse **`container`** de Grid Container.


```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```



### Grid Item

Grid Items zijn enkel de elementen die **rechtstreeks** in de Grid Container geplaatst zijn. 

In het voorbeeld hieronder zijn alle elementen van de klasse **`item`** Grid Items, maar de elementen van de klasse **`sub-item`** niet.


```html
<div class="container">
  <div class="item"></div> 
  <div class="item">
  	<p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```



### Grid Line

De scheidingslijnen die de structuur van het rooster vormen. Ze kunnen verticaal ("column Grid Lines") of horizontaal ("row Grid Lines") zijn en bevinden zich aan weerszijden van een rij of kolom.

In het voorbeeld hieronder is de gele lijn een voorbeeld van een column Grid Line.

<img src="{{ site.baseurl }}/assets/img/css-grid-6.png" alt="" style="height: auto; max-width: 100%">



### Grid Track

De ruimte tussen twee aangrenzende Grid Lines. Een Grid Track is vergelijkbaar met de rijen of kolommen in een raster. 

In het voorbeeld hieronder wordt de Grid Track getoond tussen de Grid Lines van de tweede en derde rij.

<img src="{{ site.baseurl }}/assets/img/css-grid-7.png" alt="" style="height: auto; max-width: 100%">



### Grid Cell

De ruimte tussen twee aangrenzende row Grid Lines **en **twee aangrenzende column Grid Lines. Het is één enkele "eenheid" op het raster. Een Grid Cell is vergelijkbaar met een cel op een raster.

In het voorbeeld hieronder wordt de roostercel getoond tussen row Grid Line 1 en 2, en column Grid Line 2 en 3.

<img src="{{ site.baseurl }}/assets/img/css-grid-8.png" alt="" style="height: auto; max-width: 100%">



### Grid Area

De totale ruimte omringd door vier Grid Lines. Een Grid Area kan bestaan ​​uit verschillende Grid Cells. Een Grid Area is vergelijkbaar met een cel die meerdere kolommen en/of rijen overspant.

In het voorbeeld hieronder wordt het Grid Area getoond tussen row Grid Line 1 en 3 en column Grid Line 1 en 3.


<img src="{{ site.baseurl }}/assets/img/css-grid-9.png" alt="" style="height: auto; max-width: 100%">




