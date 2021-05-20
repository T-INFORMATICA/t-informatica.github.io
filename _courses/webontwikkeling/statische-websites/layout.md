---
title: Layout
tags: 
 - 
description: 
---

## Wat is Layout?

De layout van een website bepaalt waar elk element zich bevindt op het scherm. Een goede layout verhoogt de leesbaarheid en gebruiksvriendelijkheid van je website. 

<img src="https://www.w3.org/TR/css-template-3/diagram.png" alt="klassediagram" style="height: auto; max-width: 100%">

Layout is voor HTML en CSS in het verleden vaak een probleem geweest. HTML is bedoeld om (web)documenten te maken, en documenten zijn 1-dimensionaal: Je kan elementen gemakkelijk naar boven of onder verplaatsen, maar moeilijk naast elkaar. Wie ooit geprobeerd heeft om in een Word document een afbeelding rechts naast een tekst te plaatsen, weet dat dit niet gemakkelijk werkt.

Sinds 2010 heeft het W3C twee belangrijke onderdelen aan CSS toegevoegd, specifiek om het probleem van Layout op te lossen:
 - Flexbox (2012) 
 - Grid (2017)

Flexbox maakt nog steeds gebruik van 1-dimensionele layouts, maar geeft je de mogelijkheid om zowel horizontaal als verticaal te werken, en zelfs van onder naar boven of van rechts naar links.\
Grid is daarentegen een 2-dimensionaal systeem: door gebruik te maken van rijen en kolommen, kan je elementen zowel naast als onder elkaar plaatsen.

Beide systemen hebben hun voor- en nadelen. Grid is een uitgebreider en veelzijdiger systeem, maar voegt soms ook complexiteit toe waar het niet noodzakelijk is. Flexbox heeft heel uitgebreide mogelijkheden om in één richting te werken, maar vraagt een complexe HTML structuur om in meerdere dimensies te werken.

## Flexbox Voorbeeld

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.wrapper > div {
  flex: 1 1 150px;
}
```


<div style="display: flex; flex-wrap: wrap; border: 2px solid red; border-radius: 5px; color: red; max-width: 600px;">
  <div style="flex: 1 1 150px; border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">One</div>
  <div style="flex: 1 1 150px; border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Two</div>
  <div style="flex: 1 1 150px; border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Three</div>
  <div style="flex: 1 1 150px; border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Four</div>
  <div style="flex: 1 1 150px; border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Five</div>
</div>

## Grid Voorbeeld

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```


<div style="display: grid; grid-template-columns: repeat(3, 1fr); border: 2px solid red; border-radius: 5px; color: red; max-width: 600px;">
  <div style="border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">One</div>
  <div style="border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Two</div>
  <div style="border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Three</div>
  <div style="border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Four</div>
  <div style="border: 2px solid orange; border-radius: 5px; background-color: #ffd8a8; height: 2rem; padding: 1rem">Five</div>
</div>