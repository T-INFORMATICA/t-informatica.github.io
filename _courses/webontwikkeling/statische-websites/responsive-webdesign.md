---
title: Responsive Webdesign
tags: 
 - media query
 - viewport
 - mobile first
description:
---

# Responsive Webdesign


## Wat is Responsive Web Design?

Websites kunnen bekeken worden op veel verschillende apparaten: computers, tablets, smartphones, …

Een website moet gemakkelijk te gebruiken zijn EN er goed uitzien, ongeacht welk apparaat er gebruikt wordt om de website te bekijken. Websites mogen ook geen informatie weglaten om te kunnen passen op kleinere apparaten. In plaats daarvan zou de inhoud zich zo moeten aanpassen dat het leesbaar is op elk apparaat:

<img src="{{ site.baseurl }}/assets/img/layout-1.png" alt="" style="height: auto; max-width: 100%">

We spreken over Responsive Web Design wanneer je CSS en HTML gebruikt om inhoud te vergroten, verkleinen, verbergen of verplaatsen zodat die inhoud er goed uitziet op elk scherm.

Responsive Web Design gebruikt **enkel** HTML en CSS.

## Mobile First, Desktop Later

Bij het ontwikkelen van een Responsive Website ontwikkel je steeds **mobile first**. Mobile first wilt zeggen dat je je website eerst laat werken voor kleine apparaten (smartphones) en daarna CSS regels toevoegt om de website ook toonbaar te maken voor grotere schermen.

Hoewel deze manier van werken op het eerste zicht de omgekeerde wereld lijkt (je schrijft en test je code waarschijnlijk niet op een smartphone), heeft deze manier van werken een heleboel voordelen:

 - het omzetten van een desktop layout naar een mobile layout vereist veel meer code en werk
 - je bent zeker dat je website zal werken op èlk apparaat, ook de apparaten die geen nieuwere layout-technieken ondersteunen.
 - je leert bewuster nadenken over je HTML code, waardoor het schrijven van je CSS selectors gemakkelijker wordt

## Viewport

Het zichtbare deel van een website in de browser wordt de **viewport** genoemd. 

Op basis van deze viewport kan de browser bepalen hoe groot het scherm is waarop de website wordt weergegeven. Om ervoor te zorgen dat de website deze informatie kan gebruiken, moet een **`<meta>`** tag worden toegevoegd in het **`<head>`**-element.


<img src="{{ site.baseurl }}/assets/img/layout-2.png" alt="" style="height: auto; max-width: 100%">

Een **`<meta>`** tag dient om extra informatie te geven over de website. In dit geval willen we informatie over de grootte en schaal van de website verkrijgen.


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


 \
Dankzij het `name`-attribute weet de browser dat deze meta-tag informatie bevat over de viewport. 

Het `content`-attribute bepaald hoe de viewport zal worden weergegeven: in dit geval zal de breedte gelijk oplopen met de breedte van het apparaat, en wordt de initiele schaal van de website op 1.0 gezet (= 100%).


## Media Query

Een Media Query is een blok CSS regels die enkel wordt uitgevoerd als een bepaalde voorwaarde waar is.

In een Media Query kunnen CSS regels ook overschreven worden zodra de voorwaarde waar is. 

Bijvoorbeeld:  \
Het **`<body>`** element krijgt een lichtgroene achtergrondkleur. Maar wanneer het browservenster kleiner is dan 500px, verandert de achtergrondkleur van het **`<body>`** element naar lichtblauw.


```css
body {
    background-color: lightgreen;
}
@media only screen and (max-width: 500px) {
    body {
        background-color: lightblue;
    }
}
```


Binnen Responsive Web Design worden Media Queries gebruikt om CSS regels te schrijven die **enkel geldig zijn voor schermen met een bepaalde minimum breedte.**
