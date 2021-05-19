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

Bij een Responsive website werk je met minstens 2 versies van je website:
 - een simpele versie die (meestal) uit één kolom bestaat, om te tonen op een klein scherm (Smartphones etc.)
 - een complexe versie die uit meerdere kolommen en rijen bestaat, om te tonen op een groot scherm (desktops, laptops, etc.)

Omdat beide versies sterk op elkaar lijken (ze delen dus heel wat stijlregels), zijn er 2 manieren om deze website te ontwikkelen:
 1. Het **Mobile First** principe: Vertrek vanuit de simpele versie, en voeg complexiteit toe.
 2. Het **Desktop First** principe: Vertrek vanuit de complexe versie, en neem complexiteit weg.

Om complexiteit toe te voegen (het Mobile First principe), voeg je een nieuwe stijlregel toe aan je CSS document. Doe je dit binnen een Media Query die enkel geldt voor grotere schermen, dan zal die stijlregel enkel op grotere schermen worden toegepast.\
Om complexiteit weg te nemen (het Desktop First principe), voeg je eerst een stijlregel toe om de complexiteit er in te steken, en ga je daarna een extra stijlregel toevoegen die de complexiteit terug wegneemt. Doe je dit binnen een Media Query die enkel geldt voor kleine schermen, dan zal die complexiteit enkel weggenomen worden op kleinere schermen.\
Dit maakt duidelijk dat het Mobile First principe veel minder werk bevat, om tot hetzelfde resultaat te komen: Elke regel die je twee maal moet schrijven bij een Desktop First werkwijze (één maal voor de complexiteit, één maal voor de reset), moet je maar één keer schrijven bij een Mobile First aanpak.

Bij het ontwikkelen van een Responsive Website ontwikkel je dus steeds **Mobile First**. 

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
