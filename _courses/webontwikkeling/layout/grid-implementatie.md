---
title: CSS Grid Implementatie
tags: 
 - instructie
 - commentaar
description:
---


# Een CSS Grid maken

Een CSS Grid maken gebeurt in een paar eenvoudige, maar vooral ook logische stappen. 

Om te beginnen heb je, zoals bij elke layout, een ontwerp nodig. In dit hoofdstuk wordt gewerkt aan de hand van onderstaand voorbeeld:

<img src="{{ site.baseurl }}/assets/img/css-grid-10.png" alt="" style="height: auto; max-width: 100%">


## Stap 0: voorbereiding

Om een CSS Grid te kunnen gebruiken is het belangrijk om op voorhand, op papier, het ontwerp in een raster om te zetten. Dit gaat je bij de volgende stappen enorm hard verder helpen. Bijvoorbeeld:

<img src="{{ site.baseurl }}/assets/img/css-grid-11.png" alt="" style="height: auto; max-width: 100%">


## Stap 1: Definieer elementen

Definieer de belangrijkste elementen in het ontwerp. Hierbij kan gebruik gemaakt worden van alle block-level elementen zoals **`header`**, **`footer`**, **`aside`**, enz. Om het simpel te houden kies ik hier voor **`div`** elementen.

Omdat het voor CSS Grid niet langer een verschil maakt in welke volgorde HTML elementen worden geplaatst, kies je best voor de **meest logische **volgorde. Je moet hiervoor niet langer kijken naar je ontwerp!

Zo is het bijvoorbeeld logisch dat als eerste de header wordt gedefinieerd, vervolgens de titel, gevolgd door de menu, de main content en als laatste de footer.

Deze elementen zullen de Grid Items in de CSS Grid layout worden.


```
<div class="header">
</div>

<h1 class="title">
</h1>

<div class="menu">
</div>

<div class="main">
</div>

<div class="footer">
</div>
```



## Stap 2: Maak een Grid Container

Maak nu een Grid Container die al deze elementen omvat. Meestal wordt hier een **`div`** element voor gebruikt.


```
<div class="site">
	<div class="header">
	</div>

	<h1 class="title">
	</h1>

	<div class="main">
	</div>

	<div class="menu">
	</div>

	<div class="footer">
	</div>
</div>
```


 \
Vervolgens gebruik je CSS om hier **`display: grid;`** op toe te passen.


```
.site {
	display: grid;
}
```



## Stap 3: kolommen en rijen

De volgende stap is het bepalen van de kolommen en rijen in de Grid Container. Hiervoor wordt gebruik gemaakt van 2 CSS properties:



*   **`grid-template-columns`**
*   **`grid-template-rows`**

 \
Beide properties werken op dezelfde manier:  \
Wil je 3 kolommen in je CSS Grid? Dan geef je **`grid-template-columns`** 3 waardes. \
Onderstaand voorbeeld maakt dus 3 kolommen, met de eerste en laatste kolom 25 pixels breed, en de middelste kolom 50px breed:


```
grid-template-columns: 25px 50px 25px;
```


 \
Je kan hiervoor werken met de volgende waardes:



*   pixel-waardes (px)
*   procentuele waardes (%)
*   em-eenheden (em)
*   de nieuwe fractie-eenheid (fr)
*   auto

Je mag deze waardes door elkaar gebruiken. In onderstaand voorbeeld is de eerste kolom 50% breed, de tweede 50 pixels breed en de laatste kolom 25 pixels breed:


```
grid-template-columns: 50% 50px 25px;
```


Afhankelijk van jouw specifieke ontwerp ga je een andere eenheid nodig hebben, maar vaak wordt gekozen binnen CSS Grid om, indien mogelijk, gebruik te maken van de fractie-eenheid.

De fractie eenheid zegt hoeveel delen van de totale vrije ruimte iets zal innemen. Bijvoorbeeld:

Als we de totale vrije ruimte indelen in 4 delen (4fr), dan zal de eerste kolom 2fr innemen, de tweede kolom 1fr en de derde kolom ook 1fr.


<img src="{{ site.baseurl }}/assets/img/css-grid-12.png" alt="" style="height: auto; max-width: 100%">

Hetzelfde geld voor **`grid-template-rows`**, waarbij je de hoogte gaat bepalen van elke opeenvolgende rij.

Op dit moment ziet de HTML code er nog steeds als volgt uit:


```
<div class="site">
	<div class="header">
	</div>

	<h1 class="title">
	</h1>

	<div class="main">
	</div>

	<div class="menu">
	</div>

	<div class="footer">
	</div>
</div>
```


En de CSS code ziet er als volgt uit:


```
.site {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto 1fr 3fr;
}
```



## Stap 4: Grid Areas definieren

Op dit punt is er een Grid Container gemaakt, en heeft deze Grid Container de correcte rijen en kolommen gedefinieerd voor het ontwerp. Het raster (de combinatie van rijen en kolommen) bestaat momenteel uit Grid Cells, maar zoals te zien in het ontwerp moeten sommige onderdelen verschillende Grid Cells overspannen.

Hiervoor dienen Grid Areas. Een Grid Area is één of meerdere Grid Cells die je één naam geeft. Die naam kan vervolgens gebruikt worden om een Grid Item op de juiste plaats te zetten. Om elk onderdeel van het ontwerp op de juiste plaats te kunnen zetten, moeten we Grid Areas definiëren.

Hiervoor wordt gebruik gemaakt van de volgende CSS property:



*   **`grid-template-areas`**: deze property geeft aan elke Grid Cell in de Grid Container een naam. Cellen die dezelfde naam krijgen behoren tot dezelfde Grid Area.

In onderstaand voorbeeld kan je zien dat de bovenste 3 Grid Cells de naam “title” krijgen. Deze 3 cellen vormen dus één Grid Area genaamd “title”.  \
Zo worden ook de Grid Areas “main”, “header”, “menu” en “footer” gedefinieerd.

**opgelet!** Soms wil je een cel leeg laten. Gebruik hiervoor een **punt**. Een punt duidt aan dat een bepaalde cel niet gebruikt zal worden in een area.


```
.site {
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


```
.site {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: auto 1fr 3fr;
	Grid-template-areas: 
		"title title title"
		"main header header"
		"main menu footer";
}

.header {
	grid-area: header;
	background-color: magenta;
}

.title {
	grid-area: title;
	background-color: blue;
}

.menu {
	grid-area: menu;
	background-color: orange;
}

.main {
	grid-area: main;
	background-color: green;
}

.footer {
	grid-area: footer;
	background-color: red;
}
```



