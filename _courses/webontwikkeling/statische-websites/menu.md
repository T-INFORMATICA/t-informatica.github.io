---
title: Menu
tags: 
 - verticaal menu
 - horizontaal menu
description:
---


# Menu

Een menu is niet meer dan een lijst van hyperlinks, zoals in het voorbeeld hieronder.


```
<ul class="menu">
	<li>
		<a href="#">menu link 1</a>
	</li>
	<li>
		<a href="#">menu link 2</a>
	</li>
	<li>
		<a href="#">menu link 3</a>
	</li>
	<li>
		<a href="#">menu link 4</a>
	</li>
</ul>
```


 \
Door de juiste opmaak toe te voegen aan deze elementen kan deze lijst zo worden aangepast dat deze eruit ziet als een menu.

Hier maakt het vooral uit of de list items **block** of **inline** elementen zijn. Door dit gedrag van een list item aan te passen, kunnen elementen naast elkaar of boven elkaar geplaatst worden, kan er padding of margin toegevoegd worden, ...


## Verticaal menu

Een verticaal menu is een menu waarbij de items in het menu onder elkaar (verticaal) worden geplaatst. De volgende stappen zijn nodig om van een lijst een verticaal menu te maken:



1. Verwijder de bullets van de lijst.
2. Verwijder de margin en padding van de lijst.
3. Geef de lijst een breedte.
4. Geef de **`a`** elementen weer als block-elementen.
5. Geef de **`a`** elementen een hoogte en breedte van 100%, zodat ze hun parent volledig opvullen.

```
.menu {
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 200px;
}

.menu a {
	display: block;
	width: 100%;
	height: 100%;
}
```



 \
Dit is een basis verticaal menu. Hierop kan nu gemakkelijk worden uitgebreid met extra stijlregels. De onderstaande code werkt het voorbeeld hiernaast (rechts) uit.


HTML:


```
<ul class="menu styledMenu">
	<li>
		<a href="#">Home</a>
	</li>
	<li>
		<a href="#">About Us</a>
	</li>
	<li>
		<a href="#">Blog</a>
	</li>
	<li>
		<a href="#">Contact</a>
	</li>
</ul>
```



CSS:


```
.menu {
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 200px;
}

.menu a {
	display: block;
	width: 100%;
	height: 100%;
}

.styledMenu {
	background-color: #3A3A3A;
	font-family: sans-serif;
}

.styledMenu li {
	padding-top: 2px;
}

.styledMenu li:first-of-type {
	padding-top: 0;
}

.styledMenu a {
	padding: 6px;
	color: white;
	text-decoration: none;
	background-color: #3F3F3F;
	font-size: 14px;

}

.styledMenu a:hover {
	background-color: #D70000;
}
```



## Horizontaal menu

Een horizontaal menu werkt op dezelfde manier als een verticaal menu, met één verschil: De **`li`** elementen zijn niet langer block elementen. De code is dus hetzelfde als die van het horizontale menu, met daarin één uitbreiding.


```
.menu {
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 200px;
}

.menu a {
	display: block;
	width: 100%;
	height: 100%;
}

.menu li {
	display: inline-block;
}
```


