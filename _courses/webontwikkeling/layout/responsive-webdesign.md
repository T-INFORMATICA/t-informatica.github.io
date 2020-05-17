---
title: CSS Grid Uitbreiding
tags: 
 - instructie
 - commentaar
description:
---

# 2 RESPONSIVE WEBDESIGN


## 2.1 Wat is Responsive Web Design?

Responsive Web Design is het schrijven van HTML en CSS code, die ervoor zorgt dat een website zich aanpast aan het apparaat waarop de website wordt bekeken.

Responsive Web Design gebruikt **enkel **HTML en CSS.


## 2.2 Ontwerpen met de gebruiker in gedachten

Websites kunnen bekeken worden op veel verschillende apparaten: computers, tables, smartphones, …

Een website zou gemakkelijk te gebruiken moeten zijn en er goed moeten uitzien, ongeacht welk apparaat er gebruikt wordt om de website te bekijken.

Websites mogen informatie niet weglaten om te kunnen passen op kleinere apparaten. In plaats daarvan zou de inhoud zich zo moeten aanpassen dat het leesbaar is op elk apparaat:


<img src="{{ site.baseurl }}/assets/img/layout-1.png" alt="" style="height: auto; max-width: 100%">

We spreken over Responsive Web Design wanneer je CSS en HTML gebruikt om inhoud te vergroten, verkleinen, verbergen of verplaatsen zodat die inhoud er goed uitziet op elk scherm.

**Belangrijk!** Bij het ontwikkelen van een Responsive Website ontwikkel je steeds **mobile first**. Mobile first wilt zeggen dat je je website eerst laat werken voor kleine apparaten (smartphones) en daarna CSS regels toevoegt om de website ook toonbaar te maken voor grotere schermen.


## 2.3 Viewport

Het zichtbare deel van een website in de browser wordt de **viewport** genoemd. 

<img src="{{ site.baseurl }}/assets/img/layout-2.png" alt="" style="height: auto; max-width: 100%">

Op basis van deze viewport kan de browser bepalen hoe groot het scherm is waarop de website wordt weergegeven. Om ervoor te zorgen dat de website deze informatie kan gebruiken, moet een <code>&lt;<strong>meta</strong>></code> tag worden toegevoegd in het <code>&lt;<strong>head</strong>></code>-element.

Een <code>&lt;<strong>meta</strong>></code> tag dient om extra informatie te geven over de website. In dit geval willen we informatie over de grootte en schaal van de website verkrijgen.


```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```


 \
Dankzij het `name`-attribute weet de browser dat deze meta-tag informatie bevat over de viewport. 

Het `content`-attribute bepaald hoe de viewport zal worden weergegeven: in dit geval zal de breedte gelijk oplopen met de breedte van het apparaat, en wordt de initiele schaal van de website op 1.0 gezet (= 100%).


## 2.4 Media Query

Een Media Query is een blok CSS regels die enkel wordt uitgevoerd als een bepaalde voorwaarde waar is.

In een Media Query kunnen CSS regels ook overschreven worden zodra de voorwaarde waar is. 

Bijvoorbeeld:  \
Het <code>&lt;<strong>body</strong>></code> element krijgt een lichtgroene achtergrondkleur. Maar wanneer het browservenster kleiner is dan 500px, verandert de achtergrondkleur van het <code>&lt;<strong>body</strong>></code> element naar lichtblauw.


```
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
