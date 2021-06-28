---
title: CSS Grid
tags: 
description:
---

## Inleiding

CSS Grid is een systeem dat een website voorziet van een twee-dimensionale layout (horizontaal én verticaal). CSS is altijd al de taal geweest om layout aan een website te geven, maar dankzij CSS Grid was nog nooit zo gemakkelijk.


### Rasters

Een raster is niet meer dan een structuur met kolommen en rijen. Een gekend voorbeeld van een raster is bijvoorbeeld het werkblad in Google Sheets. **Een raster bestaat uit kolommen, rijen en cellen.** Het is belangrijk om te weten wat deze drie termen precies willen zeggen.


<!-- <img src="{{ site.baseurl }}/assets/img/css-grid-1.png" alt="" style="height: auto; max-width: 100%"> -->


#### Kolommen

**Een kolom is een verticale reeks cellen** in een raster. In het voorbeeld hieronder is de kolom A aangeduid.

<img src="{{ site.baseurl }}/assets/img/css-grid-2.png" alt="" style="height: auto; max-width: 100%">

#### Rijen

**Een rij is een horizontale reeks cellen** in een raster. In het voorbeeld hieronder is rij 1 aangeduid.

<img src="{{ site.baseurl }}/assets/img/css-grid-3.png" alt="" style="height: auto; max-width: 100%">

#### Cellen

**Een cel is één enkele plaats in het raster** waarin data (meestal tekst) kan geplaatst worden, waarvan de naam wordt bepaald door de kolom en de rij waarop de cel zich zich bevindt. 

De cel in het voorbeeld hieronder bevindt zich op positie A1.

<img src="{{ site.baseurl }}/assets/img/css-grid-4.png" alt="" style="height: auto; max-width: 100%">

#### Vlakken

**Vlakken zijn cellen die meerdere rijen en/of kolommen overspannen.** In het voorbeeld bevindt het vlak waarin “Hallo” staat geschreven zich op positie A1, en is 2 kolommen breed en 2 rijen hoog.

<img src="{{ site.baseurl }}/assets/img/css-grid-5.png" alt="" style="height: auto; max-width: 100%">

<!--
## Basisbegrippen

### Belangrijke termen

Omdat sommige termen hieronder gemakkelijk te verwarren zijn, is het belangrijk om deze te leren zoals gedefinieerd in de Grid-specificatie. 


#### Grid Container

Dit is het element waarop **`display: grid;`** op wordt toegepast. Dit is ook het hoofd-element waarin alle Grid-elementen zullen geplaatst worden.

In het voorbeeld hieronder is het element met de klasse **`container`** de Grid Container.


```html
<div class="container">
  <div class="item item-1"></div>
  <div class="item item-2"></div>
  <div class="item item-3"></div>
</div>
```



#### Grid Item

Grid Items zijn enkel de elementen die **rechtstreeks** in de Grid Container geplaatst zijn. 

In het voorbeeld hieronder zijn alle elementen van de klasse **`item`** Grid Items, maar de elementen van de klasse **`sub-item`** niet.


```html
<div class="container">
  <div class="item"></div> 
  <div class="item">
  	<p class="sub-item"></p>
  </div>
  <div class="item"></div>
</div>
```



#### Grid Line

De scheidingslijnen die de structuur van het rooster vormen. Ze kunnen verticaal ("column Grid Lines") of horizontaal ("row Grid Lines") zijn en bevinden zich aan weerszijden van een rij of kolom.

In het voorbeeld hieronder is de gele lijn een voorbeeld van een column Grid Line.

<img src="{{ site.baseurl }}/assets/img/css-grid-6.png" alt="" style="height: auto; max-width: 100%">



#### Grid Track

De ruimte tussen twee aangrenzende Grid Lines. Een Grid Track is vergelijkbaar met de rijen of kolommen in een raster. 

In het voorbeeld hieronder wordt de Grid Track getoond tussen de Grid Lines van de tweede en derde rij.

<img src="{{ site.baseurl }}/assets/img/css-grid-7.png" alt="" style="height: auto; max-width: 100%">



#### Grid Cell

De ruimte tussen twee aangrenzende row Grid Lines **en **twee aangrenzende column Grid Lines. Het is één enkele "eenheid" op het raster. Een Grid Cell is vergelijkbaar met een cel op een raster.

In het voorbeeld hieronder wordt de roostercel getoond tussen row Grid Line 1 en 2, en column Grid Line 2 en 3.

<img src="{{ site.baseurl }}/assets/img/css-grid-8.png" alt="" style="height: auto; max-width: 100%">



#### Grid Area

De totale ruimte omringd door vier Grid Lines. Een Grid Area kan bestaan ​​uit verschillende Grid Cells. Een Grid Area is vergelijkbaar met een cel die meerdere kolommen en/of rijen overspant.

In het voorbeeld hieronder wordt het Grid Area getoond tussen row Grid Line 1 en 3 en column Grid Line 1 en 3.


<img src="{{ site.baseurl }}/assets/img/css-grid-9.png" alt="" style="height: auto; max-width: 100%">


-->


## Een CSS Grid maken

Een CSS Grid maken gebeurt in een paar eenvoudige, maar vooral ook logische stappen. 

Om te beginnen heb je, zoals bij elke layout, een ontwerp nodig. In dit hoofdstuk wordt gewerkt aan de hand van onderstaand voorbeeld:

<img src="{{ site.baseurl }}/assets/img/css-grid-10.png" alt="" style="height: auto; max-width: 100%">


### Stap 0: voorbereiding

Om een CSS Grid te kunnen gebruiken is het belangrijk om op voorhand, op papier, het ontwerp in een raster om te zetten. Dit gaat je bij de volgende stappen enorm hard verder helpen. Bijvoorbeeld:

<img src="{{ site.baseurl }}/assets/img/css-grid-11.png" alt="" style="height: auto; max-width: 100%">


### Stap 1: Definieer elementen

Definieer de belangrijkste elementen in het ontwerp. Hierbij kan gebruik gemaakt worden van alle block-level elementen zoals **`header`**, **`footer`**, **`aside`**, enz. Kies altijd voor de **semantisch correcte elementen!**

Omdat het voor CSS Grid niet langer een verschil maakt in welke volgorde HTML elementen worden geplaatst, kies je best voor de **meest logische **volgorde. Je moet hiervoor niet langer kijken naar je ontwerp!

Zo is het bijvoorbeeld logisch dat als eerste de header wordt gedefinieerd, vervolgens de titel, gevolgd door de menu, de main content en als laatste de footer.

Deze elementen zullen de Grid Items in de CSS Grid layout worden.


```html
<header>
</header>

<div id="title">
</div>

<nav>
</nav>

<article>
</article>

<footer>
</footer>
```



### Stap 2: Maak een Grid Container

Maak nu een Grid Container die al deze elementen omvat. Meestal wordt hier een **`div`** element voor gebruikt.


```html
<div id="site-container">
	<header>
	</header>

	<div id="title">
	</div>

	<nav>
	</nav>

	<article>
	</article>

	<footer>
	</footer>
</div>
```


 \
Vervolgens gebruik je CSS om hier **`display: grid;`** op toe te passen.


```css
#site-container {
	display: grid;
}
```



### Stap 3: kolommen en rijen

De volgende stap is het bepalen van de kolommen en rijen in de Grid Container. Hiervoor wordt gebruik gemaakt van 2 CSS properties:



*   **`grid-template-columns`**
*   **`grid-template-rows`**

 \
Beide properties werken op dezelfde manier:  \
Wil je 3 kolommen in je CSS Grid? Dan geef je **`grid-template-columns`** 3 waardes. \
Onderstaand voorbeeld maakt dus 3 kolommen, met de eerste en laatste kolom 25 pixels breed, en de middelste kolom 50px breed:


```css
#site-container {
	grid-template-columns: 25px 50px 25px;
}
```


 \
Je kan hiervoor werken met de volgende waardes:



*   pixel-waardes (px)
*   procentuele waardes (%)
*   em-eenheden (em)
*   de nieuwe fractie-eenheid (fr)
*   auto

Je mag deze waardes door elkaar gebruiken. In onderstaand voorbeeld is de eerste kolom 50% breed, de tweede 50 pixels breed en de laatste kolom 25 pixels breed:


```css
#site-container {
	grid-template-columns: 50% 50px 25px;
}
```


Afhankelijk van jouw specifieke ontwerp ga je een andere eenheid nodig hebben, maar vaak wordt gekozen binnen CSS Grid om, indien mogelijk, gebruik te maken van de fractie-eenheid.

De fractie eenheid zegt hoeveel delen van de totale vrije ruimte iets zal innemen. Bijvoorbeeld:

Als we de totale vrije ruimte indelen in 4 delen (4fr), dan zal de eerste kolom 2fr innemen, de tweede kolom 1fr en de derde kolom ook 1fr.


<img src="{{ site.baseurl }}/assets/img/css-grid-12.png" alt="" style="height: auto; max-width: 100%">

Hetzelfde geld voor **`grid-template-rows`**, waarbij je de hoogte gaat bepalen van elke opeenvolgende rij.

Op dit moment ziet de HTML code er nog steeds als volgt uit:


```html
<div id="site-container">
	<header>
	</header>

	<div id="title">
	</div>

	<nav>
	</nav>

	<article>
	</article>

	<footer>
	</footer>
</div>
```


En de CSS code ziet er als volgt uit:


```css
#site-container {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto 1fr 3fr;
}
```



### Stap 4: Grid Areas definieren

Op dit punt is er een Grid Container gemaakt, en heeft deze Grid Container de correcte rijen en kolommen gedefinieerd voor het ontwerp. Het raster (de combinatie van rijen en kolommen) bestaat momenteel uit Grid Cells, maar zoals te zien in het ontwerp moeten sommige onderdelen verschillende Grid Cells overspannen.

Hiervoor dienen Grid Areas. Een Grid Area is één of meerdere Grid Cells die je één naam geeft. Die naam kan vervolgens gebruikt worden om een Grid Item op de juiste plaats te zetten. Om elk onderdeel van het ontwerp op de juiste plaats te kunnen zetten, moeten we Grid Areas definiëren.

Hiervoor wordt gebruik gemaakt van de volgende CSS property:



*   **`grid-template-areas`**: deze property geeft aan elke Grid Cell in de Grid Container een naam. Cellen die dezelfde naam krijgen behoren tot dezelfde Grid Area.

In onderstaand voorbeeld kan je zien dat de bovenste 3 Grid Cells de naam “title” krijgen. Deze 3 cellen vormen dus één Grid Area genaamd “title”.  \
Zo worden ook de Grid Areas “main”, “header”, “menu” en “footer” gedefinieerd.

{:.warning}
> **opgelet!** Soms wil je een cel leeg laten. Gebruik hiervoor een **punt**. Een punt duidt aan dat een bepaalde cel niet gebruikt zal worden in een area.


```css
#site-container {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto 1fr 3fr;
	Grid-template-areas: 
		"title title title"
		"main header header"
		"main menu footer";
}
```


Om elk Grid Item in de juiste Grid Area te krijgen, wordt op elk Grid Item de volgende property toegepast:



*   **`grid-area`**: deze property geeft aan in welke Grid Area het Grid Item moet komen.

Bijvoorbeeld:


```css
#site-container {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto 1fr 3fr;
	Grid-template-areas: 
		"title title title"
		"main header header"
		"main menu footer";
}

#site-container>header {
	grid-area: header;
	background-color: magenta;
}

#title {
	grid-area: title;
	background-color: blue;
}

#site-container>nav {
	grid-area: menu;
	background-color: orange;
}

#site-container>article {
	grid-area: main;
	background-color: green;
}

#site-container>footer {
	grid-area: footer;
	background-color: red;
}
```



