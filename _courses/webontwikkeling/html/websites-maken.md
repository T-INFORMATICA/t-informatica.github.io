---
title: Websites Maken
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



In de volgende hoofdstukken zal je HTML leren schrijven. Het is vooral belangrijk om te onthouden dat je beide talen nodig hebt om websites te maken:

*   HTML om de inhoud aan te duiden als tekst, titel, lijst, link, …
*   CSS om te zeggen hoe een tekst, lijst, link, … eruit zullen zien.


## Websites

Wanneer er wordt gesproken over websites zijn er enkele termen die je zeker moet kennen: 

*   Server
*   Client
*   browser


### Server

Een server is een computer waar alle code en bestanden van een website zijn opgeslagen. Elke server heeft zijn eigen, unieke internet-adres. Als je een website wilt bezoeken, heb je het adres van deze server nodig.


### Browser

Een browser is het programma waarmee je een website kunt bezoeken, als je het adres kent (dit wordt ook wel surfen genoemd). 

Wanneer je een website bezoekt op een bepaald adres adres, zal je browser een kopie van de code van die website krijgen. De browser weet vervolgens perfect hoe deze code moet worden omgezet naar een website die je kan bekijken.


### Client

Een client is de computer van een gebruiker die surft naar een website. Als jij bijvoorbeeld surft naar [www.google.be](http://www.google.be), dan ben jij op dat moment de client van een google-server.

Elke client heeft zijn eigen, unieke internet-adres. Als je een website wilt bezoeken, moet de server weten waarheen de code van website gestuurd moet worden.


## HTML documenten

HTML en CSS worden geschreven in een plain text editor (Kladblok, Notepad++, Visual Studio Code, Sublime Text, …).

HTML documenten worden opgeslagen als .html documenten. Bijvoorbeeld: contact.html, informatie.html, ... \
De hoofdpagina van een website wordt **index.html** genoemd. Dit is de pagina die wordt getoond als een gebruiker surft naar het adres van de website.
