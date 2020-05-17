---
title: Icons
tags: 
 - icon
 - rasterized image
 - vectorized image
 - icon library
description:
---


# ICONS

Icons zijn kleine afbeeldingen die gebruikt worden om een bepaald onderdeel van je webpagina te verduidelijken.  \
Bijvoorbeeld: In een menu kan je elke link een icoontje geven (een huis-icoontje voor de “home” link, een enveloppe-icoontje voor “contact”, enz.

Je kan hiervoor 2 soorten afbeeldingen gebruiken: 

1. Rasterized images
2. Vectorized images

Beide types afbeeldingen hebben hun voor- en nadelen. Het is aan de ontwikkelaar om de beste keuze te maken, afhankelijk van de situatie.


## Rasterized images

Een rasterized image is een moeilijke naam voor een ‘normale’ afbeelding, zoals een .jpg, .gif of .png. Deze afbeeldingen zijn gemakkelijk op te slaan en te bewerken, en kunnen zowat elke vorm en kleur opslaan die je wilt. 

<img src="{{ site.baseurl }}/assets/img/statische-websites-1.png" alt="" style="height: auto; max-width: 100%">

Een rasterized image bestaat in feite uit een groot raster, waar elke cel in het raster 1 pixel voorstelt. Zo’n pixel kan leeg of gevuld zijn, maar nooit slechts voor de helft gevuld worden.

Het voordeel van dit raster is dat dit toestaat elke pixel apart in te kleuren, waardoor afbeeldingen enorm veel detail kunnen bevatten. Dat is ook de reden waarom foto’s steeds een rasterized image zijn.

Het nadeel van een rasterized image is dat je deze afbeeldingen zeer slecht kunt vergroten en verkleinen. Bij het vergroten van de afbeelding, worden immers de pixels gewoon mee vergroot.

De meeste foto’s en tekeningen die je tegenkomt op het internet zijn rasterized images. Wanneer je met een camera een foto trekt, of een document inscant met een scanner, zal je ook een rasterized image krijgen.


## Vectorized images

Een vectorized image is een afbeelding die is opgebouwd uit punten en lijnen tussen die punten, ook wel “paden” genoemd. Deze paden worden berekend door de computer. Het is dus de computer die berekend en bepaald waar elke pixel komt, op basis van de punten die worden meegegeven.

<img src="{{ site.baseurl }}/assets/img/statische-websites-2.png" alt="" style="height: auto; max-width: 100%">

Het voordeel van dit soort afbeeldingen is dat je deze kunt vergroten en verkleinen zonder kwaliteitsverlies.

Het nadeel van een vectorized image is dat je geen raster hebt waarbij je elke pixel apart kunt manipuleren. Je kan dus niet zoveel detail toevoegen als in een rasterized image.

Een bekend voorbeeld van vectorized images zijn lettertypes. Een letter kan zo groot of klein mogelijk gemaakt worden, zonder dat er kwaliteitsverlies optreedt.

**Icons zijn meestal vectorized images**:

*   Een icon heeft zelden veel kleine details. Icons zijn over het algemeen versimpelde, kleine afbeeldingen van een bepaald onderwerp.
*   Een icon wordt vaak in verschillende groottes gebruikt. Knoppen en hun icons zijn vaak groter op een mobile website, zodat ze gemakkelijk aan te klikken zijn op een touch-screen, en kleiner op een desktop-website.

<img src="{{ site.baseurl }}/assets/img/statische-websites-3.png" alt="" style="height: auto; max-width: 100%">


## Icon libraries

Het is niet nodig om zelf icons te tekenen. De bedoeling van een icon is dat het heel herkenbaar en duidelijk is. Daarom wordt vaak aangeraden om gebruik te maken van een icon library.

Een icon library is een grote verzameling icons. Door in het **`<head>`**-element te verwijzen naar een icon-library bestand met een **`<link>`** tag kan je de icons die daarin zijn verzameld gebruiken.

Enkele bekende icon libraries:



*   **Font Awesome**: Deze icon library wordt al enkele jaren gezien als de standaard icon library voor zo goed als elke website. De link hieronder is voor Font Awesome versie 5. Een overzicht van alle icoontjes vind je terug op [fontawesome.com/icons](https://fontawesome.com/icons) 

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">
```


*   **Google Icons**: Google heeft, als onderdeel van zijn Material Design language, een eigen icon library die iedereen vrij mag gebruiken. Een overzicht van alle icoontjes vind je terug op [material.io/icons/](https://material.io/icons/) 

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```


In deze cursus wordt vooral gewerkt met de Google Icons library.