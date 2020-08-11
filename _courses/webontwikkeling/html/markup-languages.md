---
title: Markup met Markdown
tags: 
 - 
definitions:
 - name: 
   definition: 
description: 
---

## Structuur vs. opmaak

**Markup duidt aan waar inhoud voor dient**. Het bepaalt **de structuur** van je website. Markup duidt aan wat een titel is, wat een lijst is, wat een link is, wat gewone tekst is, ...

**Opmaak zegt hoe de inhoud eruit ziet**. Het bepaalt dus **de opmaak** van je website. Opmaak zegt hoe een titel, lijst, link, tekst, … eruit ziet. 

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
        <td>De structuur is hetzelfde. De markup code is dus identiek. De opmaak is anders. </td>
    </tr>
</table>

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
 - Je kan een document met markup-code maken in de meest simpele tekst-programma's (bv. Kladblok)
 - Een document met markup-code bestaat alleen uit tekst. Je kan elk tekst-programma gebruiken om zo'n document te openen en bewerken.
 - markup-code kan weinig of geen opmaak voorzien aan een document. Hiervoor gebruik je vaak een andere code-taal (vaak zelfs in een apart document).

## Markdown

Markdown is de naam van een heel simpele markup-taal. De code die je toevoegt aan een tekst is vaak een speciaal teken of een combinatie van speciale tekens, waarbij elk speciaal teken een eigen effect heeft.

### Schuine Tekst

Om een woord schuin te maken (ook wel **italic** genoemd) met Markdown zet je het woord tussen _underscores_ ( `_` ). Bijvoorbeeld `_woord_` wordt getoond als _`woord`_.

### Vette Tekst

Om een woord vet te maken (ook wel **bold** genoemd) met Markdown zet je het woord tussen _twee sterretjes_ ( `**` ). Bijvoorbeeld `**woord**` wordt getoond als **`woord`**.

### Schuine Vette Tekst

Je kan uiteraard woorden ook bold _en_ italic maken. Je kunt zelfs meerdere woorden tegelijk bold, italic of beide maken.

Bijvoorbeeld:
 -  `**_zowel bold als italic_**` wordt getoond als **_`zowel bold als italic`_**
 - `**alles bold en _enkel dit italic_**` wordt getoond als **`alles bold en `_`enkel dit italic`_**

### Kopteksten

Kopteksten worden vaak gebruikt in websites, documenten, artikels, ... om aandacht te vestigen op een bepaald deel van de tekst. Het zijn een soort titels van een stuk tekst.

Er zijn 6 niveau's van kopteksten:

# koptekst 1
## koptekst 2
### koptekst 3
#### koptekst 4
##### koptekst 5
###### koptekst 6

Om een koptekst in Markdown aan te duiden gebruik je een hekje (`#`), ook wel **hash** of **hashtag** genoemd. 

Om een koptekst van niveau 1 te maken, begin je de koptekst met 1 hekje. Om een koptekst van niveau 5 te maken, begin je de koptekst met 5 hekjes.

```
# koptekst 1
## koptekst 2
### koptekst 3
#### koptekst 4
##### koptekst 5
###### koptekst 6
```

Over het algemeen gebruik je niveau 1 zo weinig mogelijk (meestal maar één keer), en gebruik je niveau 5 en 6 zelden.

Tekst vet maken in een titel heeft vaak weinig zin (de meeste kopteksten zijn al bold), maar het is perfect mogelijk om een titel te voorzien van italic tekst.

Bijvoorbeeld `### _Dit_ is de titel` wordt getoond als 

###  _`Dit`_` is de titel`

### Hyperlinks

Een hyperlink, vaak ook afgekort tot 'link', is een stukje tekst waarop geklikt kan worden, waarna de gebruiker ergens anders naartoe wordt gebracht. Bijvoorbeeld de link [Google](www.google.com) brengt je naar de zoekpagina van Google.

Om een link te maken met Markdown plaats je **de tekst die je wilt tonen** tussen **vierkante haakjes**. De pagina waar je naartoe wilt gaan zet je daarachter tussen gewone haakjes.

Bijvoorbeeld: 

`de link ` `[Google](www.google.com)` `brengt je naar de zoekpagina van Google.` 
<br>wordt getoond als<br>
`de link ` [Google](`www.google.com`) `brengt je naar de zoekpagina van Google.` 

Het is ook perfect mogelijk om de tekst van een link bold of italic te maken.

`[xkcd is een **heel erg grappige** website!](www.xkcd.com)`
<br>wordt getoond als<br>
[xkcd is een **heel erg grappige** website!](www.xkcd.com)

### Afbeeldingen

Afbeeldingen werken heel gelijkaardig als hyperlinks: Je geeft een alternatieve tekst tussen vierkante haakjes (die wordt getoond als de afbeelding niet meer werkt of gebruikt door slechtzienden) en een link naar de afbeelding tussen gewone haakjes. 

Om aan te duiden dat dit een afbeelding is, en geen hyperlink, plaats je aan het begin een uitroepteken (`!`).

Bijvoorbeeld:

`![Een tijger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)`
<br>wordt getoond als<br>
![Een tijger](https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg)

### Lijsten

Er bestaan twee soorten lijsten: genummerde en ongenummerde lijsten. Of nog simpeler, lijsten met getallen en lijsten met bullet points.

Om een ongenummerde lijst te maken, is het voldoende om elk item in de lijst op een eigen lijn te zetten en te laten beginnen met een sterretje (`*`) of streepje (`-`).

```
 - eieren
 - kaas
 - tomaten
```
wordt getoond als 
 - eieren
 - kaas
 - tomaten

Om een genummerde lijst te maken, plaats je een getal gevolgd door een punt aan het begin van elk item.


```
 1. kluts de eieren
 2. voeg de kaas toe
 3. snij de tomaten in blokjes
 4. voeg de tomatenblokjes toe
 5. bak in de pan
```
wordt getoond als 
 1. kluts de eieren
 2. voeg de kaas toe
 3. snij de tomaten in blokjes
 4. voeg de tomatenblokjes toe
 5. bak in de pan

Je kan zelfs lijsten in lijsten steken, waarbij je verschillende soorten lijsten door elkaar gebruikt. 

**Belangrijk**: zorg ervoor dat het lijst-teken van de tweede lijst op dezelfde hoogte staat als de eerste letter van de eerste lijst. Zo staat in het voorbeeld hieronder het sterretje van `* A reporter` op dezelfde hoogte als de **T** van `1. Tintin`. Gebruik hiervoor extra spaties.

En zoals altijd, kan je ook hier tekst vet of italic maken.

```
1. Tintin
   * A reporter
   * Has **_poofy orange hair_**
   * Friends with the world's most awesome dog
2. Haddock
   * A **sea captain**
   * Has a fantastic **beard**
   * Loves whiskey
     * Possibly also scotch?
```
wordt getoond als 
1. Tintin
   * A reporter
   * Has **_poofy orange hair_**
   * Friends with the world's most awesome dog
2. Haddock
   * A **sea captain**
   * Has a fantastic **beard**
   * Loves whiskey
     * Possibly also scotch?

   