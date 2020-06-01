---
title: CSS Grid Uitbreiding
tags: 
 - instructie
 - commentaar
description:
---



# Uitbreiding


## Ruimte tussen grid items

In veel ontwerpen wordt er tussen de verschillende grid-items wat ruimte gelaten. In het ontwerp rechts zie je dat er lege ruimte tussen elk item gelaten wordt.


<img src="{{ site.baseurl }}/assets/img/css-grid-13.png" alt="" style="height: auto; max-width: 100%">

CSS Grid heeft ook hier een nieuwe stijlregel voor voorzien:


```css
/* voeg 10px ruimte toe tussen elke kolom */
grid-column-gap: 10px; 
/* voeg 10px ruimte toe tussen elke rij */
grid-row-gap: 10px;
/* voeg 10px ruimte toe tussen elke kolom EN rij */
grid-gap: 10px;
/* voeg 10px ruimte toe tussen elke kolom,
en voeg 20px ruimte toe tussen elke rij */
grid-gap: 10px 20px;
```

