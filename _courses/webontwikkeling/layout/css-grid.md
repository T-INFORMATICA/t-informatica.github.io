---
title: CSS Grid Inleiding
tags: 
 - instructie
 - commentaar
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