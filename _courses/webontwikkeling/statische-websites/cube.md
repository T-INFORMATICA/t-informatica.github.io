---
title: De CUBE methode voor CSS
tags: 
 - 
description: 
---

## Wat is CUBE?

CUBE staat voor Composition, Utilities, Blocks en Exceptions. Deze nieuwe methode om je CSS code overzichtelijk te leren schrijven, is ideaal voor zowel kleine als grote projecten.

In deze cursus wordt een afgeleide versie gebruikt, die CUBE gebruikt als leermiddel. Hierdoor kan het zijn dat er af en toe wordt afgeweken van het oorspronkelijke idee van CUBE. Het doel blijft echter hetzelfde: CSS op een overzichtelijke manier leren schrijven.

## Composition

Composition draait rond **ruimte** en **layout** voor het **grotere geheel**:

 - ruimte: hoeveel ruimte krijgt elk element? 
 - layout: op welke plaats staat elk element?
 - grotere geheel: waar 

Ruimte creëer je door het [Box Model](../css/box-model.html) toe te passen. Door handig gebruik te maken van padding, margin, border, width, height, ... zorg je ervoor dat elk element exact de juiste grootte krijgt toegewezen. Ook typografie is hierbij belangrijk: werken met de verschillende `font` en `text` stijlregels komt hier aan bod.

Layout creëer je door te werken met layout technieken. Je gebruikt hiervoor best één van de moderne technieken ([Flexbox](css-flexbox.html) of [Grid](css-grid.html)). Je kan ook de verschillende `position` stijlregels gebruiken om elementen een specifieke plaats te geven.

De selectors bij je composition zijn zo algemeen mogelijk: vermijdt het gebruik van `id` selectors, en probeer te eindigen op de `*` selector. Bijvoorbeeld:

```css
main>* {}

#menu-top * + * {}

footer>.social>* {}

header>nav {}
```

> **Opgelet!** Denk er steeds aan dat je **mobile first** werkt!

## Utilities

Een utility is een klasse in CSS die zich specialiseert in één taak:
 - Een klasse die een donkere achtergrondkleur geeft
 - Een klasse die een element centreert in de layout
 - ...

Bijvoorbeeld:

```css
.bg-primary {
  background: #ff00ff;
}

.bg-secondary {
  background: #ffbf81;
}

.color-primary {
  color: #ff00ff;
}

.centered {
    margin: 0 auto;
}
```

Wanneer je deze klassen hebt aangemaakt, kan je ze vervolgens gebruiken in je html:

```html
<article class="bg-primary color-primary centered"></article>
```

Belangrijk hierbij is dat je probeert om deze Utility klassen niet te gebruiken op het allerkleinste niveau: gebruik je Utilities voor grotere elementen.

## Blocks


Blocks zijn de bouwstenen van je website: je knoppen, je menu, je grotere onderdelen. Nadat je Composition de ruimte en layout heeft bepaald, en je utilities al heel wat extra functionaliteit en kleur hebben voorzien, schieten er vaak nog enkele details over. Daardoor zullen de specifieke stijlregels voor een block vaak heel minimaal zijn om je website af te werken.

```css
.my-block .title {
  /* Cool CSS goes here */
}

.my-block h2 {
  /* Cool CSS goes here */
}
```

## Exceptions

Exceptions (Nederlands: "uitzonderingen"), zijn kleine variaties op een bepaald block. Zo zou je bijvoorbeeld een "omgekeerde" of "gedeactiveerde" versie kunnen hebben van een block. Hiervoor worden **data attributes** gebruikt.

In het voorbeeld hieronder zijn er twee `article` elementen, die beide gebruik maken van de klasse `card`. De tweede heeft echter het `data-state="reversed"` gekregen, waardoor de elementen in dat `article` van onder naar boven worden getekend, in plaats van boven naar onder.\
Hierdoor blijven de overige stijlregels (in de klasse `card`) nog altijd gelden, en zullen beide `articles` er heel gelijkaardig blijven uitzien. De tweede is gewoon een uitzondering/variatie geworden op de eerste.

```html
<article class="card"></article>
<article class="card" data-state="reversed"></article>
```

```css
.card[data-state='reversed'] {
  display: flex;
  flex-direction: column-reverse;
}
```

