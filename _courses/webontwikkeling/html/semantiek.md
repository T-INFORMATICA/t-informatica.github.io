---
title: Semantiek
tags: 
 - instructie
 - commentaar
definitions:
 - name: semantiek
   definition: Het doel van een element, duidelijk gemaakt door de naam van het element.
 - name: <div>
   definition: Een algemeen block-level element dat weinig semantische waarde heeft.
 - name: <section>
   definition: Een block-level element dat een groot onderdeel van een document aanduidt.
 - name: <header>
   definition: Een block-level element dat gebruikt wordt voor inleidende inhoud of navigatielinks.
 - name: <footer>
   definition: Een block-level element dat gebruikt wordt aan het einde van het document. Bevat vaak extra informatie over de auteur, copyright en contact-informatie.
 - name: <main>
   definition: Een block-level element dat gebruikt wordt om de hoofdinhoud aan te duiden. Dit element komt maar één keer voor in het document.
 - name: <aside>
   definition: Een block-level element met extra inhoud, dat naast de inhoud wordt geplaatst waarin het element geplaatst is.
 - name: <article>
   definition: Een block-level element met inhoud die onafhankelijk van de rest van de site verspreidt kan worden, zonder dat die inhoud onduidelijk wordt.
 - name: id attribute
   definition: Geeft een unieke naam aan een element.
 - name: class attribute
   definition: Deelt een element in bij een groep elementen met gelijkaardige semantische waarde.
description: Een website bestaat uit veel verschillende onderdelen. HTML voorziet heel veel mogelijkheden om die onderdelen correct aan te duiden, maar vaak is er maar één optie de meest correcte. In dit hoofdstuk wordt verder uitgelegd welke onderdelen je best op een bepaalde manier aanduidt.
---


## Het doel van een element

Een belangrijk principe in web-ontwikkeling is dat je elementen gebruikt waarvoor ze dienen, niet vanwege hoe ze eruit zien in de browser. Dit heet de semantiek (het doel) van een element.

De semantiek van een element maakt duidelijk wat de bedoeling is van dat gedeelte in jouw HTML-code. Bijvoorbeeld: het `<p>` element maakt duidelijk dat dit gedeelte een tekst-alinea zal bevatten.

Voor sommige elementen heeft de semantiek vooral te maken met hoe ze eruit zien. In dat geval zal de browser er vaak ook voor zorgen dat die semantiek ook zichtbaar is. Bijvoorbeeld: het `<b>` en `<i>` element hebben een duidelijke semantiek. Zij tonen vette of schuine tekst.  

Ook het `<p>` element is hier een voorbeeld van: er wordt steeds voor en na een alinea wat extra spatie gelaten door de browser.

Door het juiste semantische element te gebruiken, geef je aan de jezelf, andere web-ontwikkelaars en de browser extra informatie over de inhoud van je website.


### Foute voorbeelden

Hieronder vind je enkele voorbeelden hoe elementen **fout**  gebruikt kunnen worden.

*   **`<blockquote>`** : Sommige mensen gebruiken dit element om eender welke tekst aan de linkerkant te laten inspringen.<br>
**Wat is wel juist?** `<blockquote>` is een element dat dient om een quote op je website te tonen.
*   **`<p>`** : sommige mensen gebruiken `<p>`&nbsp;`</p>` om een extra spatie toe te voegen in een tekst.<br>
**Wat is wel juist?** Gebruik hiervoor het `<br>` element.
*   **`<h1>`-`<h6>`** : alle heading-elementen maken tekst groter of kleiner, vet of schuingedrukt. Als de inhoud echter geen koptekst is, mag je deze elementen niet gebruiken hiervoor!<br>
**Wat is wel juist?** Gebruik CSS om tekst groter, kleiner, vet of schuingedrukt te maken.


## Onzichtbare semantiek

Alle HTML elementen hebben een semantiek, maar bij een aantal elementen is die semantiek niet zo zichtbaar als in de voorbeelden hierboven. Deze elementen zien er exact hetzelfde uit als een ander element, en doen exact hetzelfde, maar hebben toch **een andere betekenis**. 

Bijvoorbeeld: Zo is het `<header>` element eigenlijk heel gelijkaardig aan een `<footer>` element. De semantiek is echter heel verschillend. 

| website met `<div>` elementen  | website met `block-level`-elementen |
| ------------- | ------------- |
| <img src="{{ site.baseurl }}/assets/img/html-semantiek1.jpg" alt="klassediagram" style="height: auto; max-width: 100%">  | <img src="{{ site.baseurl }}/assets/img/html-semantiek2.jpg" alt="klassediagram" style="height: auto; max-width: 100%">   |
| De linkse website werd opgebouwd met `<div>` elementen.  | De rechtse website werd opgebouwd met block-elementen die semantisch veel juister zijn.  |

## Semantiek met Class en ID

### Het ID-attribute

Het id attribute wordt gebruikt om een element een unieke naam te geven. Het id attribute kan door elk element worden gebruikt. 

> **Belangrijk**:  elke id moet uniek zijn! Eén bepaalde id komt dus maar één maal voor!

Stel dat je een website maakt voor je CV. Deze website bestaat uit 3 `section` elementen:
 - Portfolio
 - Ervaring
 - Opleiding

```html
<section>
	Hierin staat alle code en inhoud voor het portfolio
</section>
<section>
	Hierin staat alle code en inhoud voor de ervaring
</section>
<section>
	Hierin staat alle code en inhoud voor de opleiding
</section>
```

Hoewel elk `section` element een eigen doel heeft, is het moeilijk om deze 3 elementen te onderscheiden. Om de leesbaarheid van de code te vergroten is het daarom belangrijk om hier duidelijk te maken waar elk element voor dient. 

**Let er op dat elke ID uniek moet zijn!** Er staat dus maar één `"portfolio"`-id in het volledige HTML-document!

```html
<section id="portfolio">
	Hierin staat alle code en inhoud voor het portfolio
</section>
<section id="ervaring">
	Hierin staat alle code en inhoud voor de ervaring
</section>
<section id="opleiding">
	Hierin staat alle code en inhoud voor de opleiding
</section>
```

### Het class-attribute

Het class attribute wordt gebruikt om elementen te groeperen. Het class attribute kan door elk element worden gebruikt. 

Stel dat je een website maakt, met daarin een menu. De menu bestaat uit een `nav` element, met daarin een lijst (`ul`) van hyperlinks (`a`).

```html
<nav>
    <ul id="menuList">
        <li>
            <a href="home.html">Home</a>
        </li>
        <li>
            <a href="shop.html">Shop</a>
        </li>
        <li>
            <a href="contact.html">Contact</a>
        </li>
    </ul>
</nav>
```

Om duidelijk te maken dat elk list item een onderdeel van de menu is, kan je elk list item dezelfde class-naam geven.
```html
<nav>
    <ul id="menuList">
        <li class="menuItem">
            <a href="home.html">Home</a>
        </li>
        <li class="menuItem">
            <a href="shop.html">Shop</a>
        </li>
        <li class="menuItem">
            <a href="contact.html">Contact</a>
        </li>
    </ul>
</nav>
```

Op deze manier is duidelijk dat elk <li> element in die lijst een `menuItem` is.
