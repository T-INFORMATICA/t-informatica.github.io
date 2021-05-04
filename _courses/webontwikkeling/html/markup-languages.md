---
title: Markup
tags: 
 - HTML
 - CSS
definitions:
 - name: HTML
   definition: Een taal die gebruikt wordt om de structuur van een website te bepalen.
 - name: CSS
   definition: Een taal die gebruikt wordt om de opmaak van een website te bepalen.
 - name: commentaar
   definition: Een stuk tekst in de code dat genegeerd wordt door de computer. Dit kan gebruikt worden om extra uitleg bij code te geven.
 - name: server
   definition: Een computer met een eigen, uniek internet-adres waar alle code en bestanden van een website zijn opgeslagen.
 - name: browser
   definition: Het programma waarmee je een website kunt bezoeken.
 - name: viewport
   definition: De ruimte in de browser waarin een website getoond wordt.
 - name: client
   definition: De computer van een gebruiker die surft naar een website.
 - name: "*.html"
   definition: Met deze bestands-extensie worden pagina's van een website opgeslagen als document.
 - name: index.html
   definition: De standaard startpagina van een website. Als je geen pagina meegeeft aan het adres van de website, wordt deze pagina automatisch geladen.
description: Wanneer je begint met webontwikkeling, is het belangrijk om het verschil te kennen tussen structuur en opmaak. Ook de termen server, client en browser mogen je niet vreemd zijn. In dit hoofdstuk wordt dus een algemene inleiding gegeven hoe websites worden ontwikkeld, en wat je hiervoor allemaal nodig hebt.
---


## Talen van het web

Elke website ter wereld maakt gebruikt van (minstens) 2 talen:

*   **HTML**: **H**yper**T**ext **M**arkup **L**anguage
*   **CSS**: **C**ascading **S**tyle **S**heets

Deze 2 talen vullen elkaar zodanig aan, dat je snel en gemakkelijk een website kunt maken.


## Structuur vs. opmaak

**HTML is de taal die aanduid waar inhoud voor dient**. Het bepaalt **de structuur** van je website. HTML duidt aan wat een titel is, wat een lijst is, wat een link is, wat gewone tekst is, enz...

**CSS is de taal die zegt hoe de inhoud eruit ziet**. CSS bepaalt dus **de opmaak** van je website. CSS zegt hoe een titel, lijst, link, tekst, … eruit ziet. 

<table class="styledTable">
    <tr>
        <th style="width: 50%">
            website 1
        </th>
        <th style="width: 50%">
            website 2
        </th>
    </tr>
    <tr>
        <td><img src="{{ site.baseurl }}/assets/img/websites-maken-1.jpg"></td>
        <td><img src="{{ site.baseurl }}/assets/img/websites-maken-2.jpg"></td>
    </tr>
    <tr>
        <td>De websites links en recht hebben dezelfde inhoud.</td>
        <td>De structuur is hetzelfde. De HTML code is dus identiek. De opmaak is anders. De CSS code is dus verschillend.</td>
    </tr>
</table>



In de volgende hoofdstukken zal je markup leren schrijven met verschillende talen. Het is vooral belangrijk om te onthouden dat je beide talen nodig hebt om websites te maken:

*   HTML om de inhoud aan te duiden als tekst, titel, lijst, link, …
*   CSS om te zeggen hoe een tekst, lijst, link, … eruit zullen zien.

## Markup

Markup is code die je toevoegt aan een tekstdocument, waarbij die code aanduidt waar de tekst van dat document voor dient. Er is dus code die aanduidt welk deel van het tekstdocument de titel is, welk deel een lijst is, ...

Met een markup-taal doe je eigenlijk hetzelfde als je met een programma zoals Microsoft Word of Google Docs doet: je duidt een woordje aan als **vette tekst** of _schuine tekst_, je duidt een onderdeel aan als titel of je lijst onderdelen in je tekst op. Het verschil is dat je met een markup-taal dit doet door code te schrijven in plaats van op een knop te klikken. 

Werken met een programma zoals Microsoft Word heeft uiteraard heel wat voordelen. Het is vaak heel gemakkelijk om gewoon op een knop te moeten klikken in plaats van code te schrijven. Er zijn echter ook wel heel wat nadelen aan verbonden.
 - De meeste van dit soort programma's zijn niet gratis.
 - Documenten van één programma kan je moeilijk openen in een ander programma.
 - Om iets te veranderen in zo'n document **moet** je de juiste software gebruiken.
 - Markup en opmaak worden vaak door elkaar gebruikt, wat voor problemen kan zorgen in je document-structuur.<br>
   Zo kan je bijvoorbeeld een tekst opmaken als een titel, zonder dat je het aanduidt als een titel. Het programma maakt daardoor geen goede inhoudsopgave, omdat het jouw tekst niet herkent als een titel.

Wanneer je werkt met een markup-taal vallen deze nadelen weg:
 - Je kan een document met markup-code maken en bewerken in de meest simpele tekst-programma's (bv. Kladblok)
 - Een document met markup-code bestaat alleen uit tekst. Je kan elk tekst-programma gebruiken om zo'n document te openen en bewerken.
 - markup-code kan weinig of geen opmaak voorzien aan een document. Hiervoor gebruik je vaak een andere code-taal (vaak zelfs in een apart document).
