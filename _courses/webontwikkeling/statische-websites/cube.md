---
title: De CUBE methode voor CSS
tags: 
 - 
description: 
---

## Wat is CUBE?

CUBE staat voor Composition, Utilities, Blocks en Exceptions. Het is een stappenplan waarmee je je CSS code overzichtelijk houdt. 

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
 - Een klasse die een 3-kolom layout geeft