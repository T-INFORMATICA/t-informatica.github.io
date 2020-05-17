---
title: Popup
tags: 
 - popup
 - target
description:
---

# Popup

Dit hoofdstuk gaat over elementen die verschijnen en verdwijnen. Dat is immers wat een popup is: een element dat verschijnt of verdwijnt wanneer de gebruiker iets doet.

De meeste bronnen op het internet maken hiervoor handig gebruik van Javascript. Deze Javascript-methodes om popups te maken zijn zeker niet fout, en hebben hun eigen voordelen en nadelen waar in deze cursus niet op wordt ingegaan.

In deze cursus wordt op zoek gegaan naar oplossingen die enkel en alleen gebruik maken van HTML en CSS. Ook voor een popup kunnen de mogelijkheden van HTML en CSS worden gebruikt om een simpele, maar effectieve popup in elkaar te steken.

Hiervoor worden 2 technieken van HTML/CSS gebruikt: bookmarks in HTML en de :target CSS selector.


## Bookmarks

Een HTML hyperlink (een **`<a>`**-element) dient om te verwijzen naar een andere bron. Meestal doelt men hiermee op een ander html-document. Wanneer je bijvoorbeeld klikt in een menu op de “Portfolio” link, wordt je meestal naar een andere pagina (bijv. portfolio.html) geleidt.

Dit is echter géén vereiste. Een hyperlink kan evengoed verwijzen naar een onderdeel of element op _dezelfde_ pagina! Wanneer een hyperlink verwijst naar een element op dezelfde pagina, wordt dat ook een **bookmark** genoemd. Je hebt hiervoor 2 zaken nodig:



1. Een element met een unieke ID
2. Een hyperlink om naar dat element te verwijzen

```
<!-- Deze link laat de pagina scrollen naar het element met ID mijnElement --> 
<a href="#mijnElement">Ga naar mijnElement!</a>

<!-- andere code --> 

<div id="mijnElement">
	<!-- hier komt de inhoud van mijnElement -->
</div>
```


Door met de hyperlink naar de juiste ID te verwijzen, zal de pagina scrollen tot de browser dat element tegenkomt.


## CSS selector :target

Wanneer een gebruiker klikt op een bookmark, wordt het element waar de bookmark naar verwijst aangeduid door HTML als het ‘doel’ (engels: _target_) van de gebruiker. Het is deze plaats op de pagina waar de gebruiker naartoe wilt. 

In CSS kan dat doel eigen stijlregels krijgen met de :target selector.


```
:target {
	background-color: red;
}
```


 \
In dit geval zal elk element dat wordt aangeduid door de gebruiker een rode achtergrondkleur krijgen. Klikt de gebruiker dus op de link in het vorige voorbeeld, dan zal de div `#mijnElement` rood oplichten.


## 4.3 Een popup maken

Om een popup te maken moet het voorbeeld hierboven slechts een beetje worden uitgebreid. 

In dit voorbeeld stelt het element `#mijnElement` de popup voor. Daarom moet `#mijnElement` standaard _on_zichtbaar zijn bij het laden van de pagina: een popup is immers onzichtbaar zolang die niet geopend werd door de gebruiker.

Het is pas wanneer de gebruiker een actie onderneemt om de popup te openen (zoals klikken op de link in dit voorbeeld) dat de popup zichbaar mag worden. 



*   #mijnElement wordt onzichtbaar gemaakt met de stijlregel **`display: none;`**
*   Wanneer #mijnElement wordt aangeduid als target, wordt het element zichtbaar gemaakt met de stijlregel **`display: block;`**


## CSS:


```
#mijnElement {
	display: none;
}
#mijnElement:target {
	display: block;
}
```



## HTML:


```
<!-- Deze link laat de pagina scrollen naar het element met ID mijnElement --> 
<a href="#mijnElement">Ga naar mijnElement!</a>

<!-- andere code --> 

<div id="mijnElement">
	<!-- hier komt de inhoud van mijnElement -->
</div>
```


 \
Wanneer nu op de link wordt geklikt, wordt `#mijnElement` zichtbaar gemaakt.

