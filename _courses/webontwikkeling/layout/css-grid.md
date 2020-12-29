---
title: CSS Grid Inleiding
tags: 
description:
---

# Inleiding

CSS Grid is een systeem in CSS dat gemaakt is om de manier waarop een website van layout wordt voorzien te veranderen. CSS is altijd de taal geweest om layout aan een website te geven, maar dit was nog nooit zo gemakkelijk.

Terugkijkend naar het verleden HTML en CSS zijn er al veel manieren geprobeerd om layout aan websites te geven. Eerst werden tabellen gebruikt, vervolgens floats, positionering en inline-block. Al deze methoden waren in feite hacks en waren vaak heel beperkt in hun mogelijkheden. 

Grid is de allereerste CSS module die speciaal is gecreëerd om deze lay-out problemen op te lossen.


## Rasters

Een raster is niet meer dan een structuur met kolommen en rijen. Een gekend voorbeeld van een raster is bijvoorbeeld het werkblad in Google Sheets. 

Een raster bestaat steeds uit kolommen, rijen en cellen. Het is belangrijk om te weten wat deze drie termen precies willen zeggen.


<img src="{{ site.baseurl }}/assets/img/css-grid-1.png" alt="" style="height: auto; max-width: 100%">


### Kolommen

Een kolom is een verticale reeks cellen in een raster. In het voorbeeld hieronder is de kolom A aangeduid.

<img src="{{ site.baseurl }}/assets/img/css-grid-2.png" alt="" style="height: auto; max-width: 100%">

### Rijen

Een rij is een horizontale reeks cellen in een raster. In het voorbeeld hieronder is rij 1 aangeduid.

<img src="{{ site.baseurl }}/assets/img/css-grid-3.png" alt="" style="height: auto; max-width: 100%">

### Cellen

Een cel is een plaats in het raster waarin data (meestal tekst) kan geplaatst worden, waarvan de naam wordt bepaald door de kolom en de rij waarop de cel zich zich bevindt. 

De cel in het voorbeeld hieronder bevindt zich op positie A1.

<img src="{{ site.baseurl }}/assets/img/css-grid-4.png" alt="" style="height: auto; max-width: 100%">

Cellen kunnen meerdere rijen en/of kolommen overspannen, om zo meer plaats in te nemen op het raster. Ook in het voorbeeld hiernaast bevindt de cel waarin “Hallo” staat geschreven zich op positie A1, maar is ditmaal 2 kolommen breed en 2 rijen hoog.

<img src="{{ site.baseurl }}/assets/img/css-grid-5.png" alt="" style="height: auto; max-width: 100%">


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




