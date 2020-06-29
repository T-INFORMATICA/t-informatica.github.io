---
title: Selectors
tags: 
 - voorrang
 - conflicterende stijlregels
definitions:
 - name: selector
   definition: CSS-code die aanduidt welke HTML elementen aangepast zullen worden door de stijlregels.
 - name: conflicterende stijlregel
   definition: Wanneer twee verschillende declaraties dezelfde stijlregel op hetzelfde element toepassen.
 - name: hover
   definition: Wanneer een gebruiker met de muis over een element gaat.
description: Bij het opmaken van een website wil je vaak dezelfde stijlregels toepassen op veel verschillende elementen. Selectors geven CSS de mogelijkheid om bijvoorbeeld alle h1 elementen er hetzelfde te laten uitzien.
---


# Selectors

![drawing]({{ site.baseurl }}/assets/img/css-selectors1.PNG)

**De Selector selecteert welke HTML elementen worden aangepast door CSS**. Een CSS selector kan bijvoorbeeld alle <code>&lt;<b>p</b>></code> elementen selecteren, zodat CSS de tekstkleur daarvan kan aanpassen. \
Een stijlregel wordt dus toegepast op <b>alle elementen die overeenkomen met de selector</b>. CSS heeft verschillende soorten selectors.


## Selectors overzicht


<table class="styledTable" style="text-align: center">
  <tr>
   <th>selector</th>
   <th>voorbeeld</th>
   <th>uitleg</th>
  </tr>
  <tr>
   <td>De element selector</td>
   <td><code>p</code></td>
   <td style="text-align: left">
	   Selecteer alle &lt;p> elementen.<br>
De element selector is de simpelste: Je gebruikt de tagnaam van het HTML element als selector, en alle HTML elementen met die tagnaam zullen vanaf dan deze stijlregels volgen.
   </td>
  </tr>
  <tr>
   <td>De ALL selector</td>
   <td><code>*</code></td>
   <td style="text-align: left">
	   Selecteer alle elementen.<br>
De * selector wordt gebruikt om stijlregels toe te passen op <b>alle elementen</b>. Wil je dat alle elementen op je website een bepaald lettertype gebruiken, kan je hiervoor de * selector gebruiken.
   </td>
  </tr>
  <tr>
   <td>De class selector</td>
   <td><code>.intro</code></td>
   <td style="text-align: left">
	   Selecteer alle elementen met class="intro".<br>
Wanneer elementen zijn gemarkeerd met het class-attribute kan je deze elementen ook een eigen stijl geven.
Je doet dit door middel van een <b>punt</b>, gevolgd door de naam die je in het class-attribute hebt geschreven.
   </td>
  </tr>
  <tr>
   <td>De id selector</td>
   <td><code>#firstname</code></td>
   <td style="text-align: left">
	   Selecteer het element met  id="firstname".<br>
Wanneer elementen zijn gemarkeerd met het ID-attribute kan je deze elementen een eigen stijl geven.
Je doet dit door middel van een <b>hekje</b>, gevolgd door de naam die je in het ID-attribute hebt geschreven.
   </td>
  </tr>
  <tr>
   <td>Selectors combineren</td>
   <td><code>div, p</code></td>
   <td style="text-align: left">Selecteer alle &lt;div> elementen en alle &lt;p> elementen.</td>
  </tr>
  <tr>
   <td>Geneste elementen selector</td>
   <td><code>div p</code></td>
   <td style="text-align: left">Selecteer alle &lt;p> elementen die zich bevinden in &lt;div> elementen.</td>
  </tr>
  <tr>
   <td>Parent-child selector</td>
   <td><code>div > p</code></td>
   <td style="text-align: left">Selecteer alle &lt;p> elementen waarvan de parent een &lt;div> element is.</td>
  </tr>
  <tr>
   <td>After selector</td>
   <td><code>div + p</code></td>
   <td style="text-align: left">Selecteer alle &lt;p> elementen die direct na &lt;div> elementen staan.</td>
  </tr>
  <tr>
   <td>Before selector</td>
   <td><code>p ~ ul</code></td>
   <td style="text-align: left">Selecteer elk &lt;ul> element dat wordt voorafgegaan door een &lt;p> element.</td>
  </tr>
</table>



## Voorrang van selectors


### Opbouw van stijlregels

Wanneer verschillende selectors van toepassing zijn, gaat CSS proberen al deze selectors met elkaar te combineren. 

Een div element van de klasse “content” en een ID “koptekst” kan reageren op 3 selectors:



1. `div`
2. `.content`
3. `#koptekst`

Bijvoorbeeld:


```css
div {
	background-color: red;
}
.content {
	color: green;
}
#koptekst {
	font-family: verdana;
}
```


Wanneer, zoals in bovenstaand voorbeeld, alle 3 de selectors stijlregels krijgen, wordt voor het element <code>&lt;<b>div</b> class="content" id="koptekst"></code> een combinatie gemaakt van deze 3 stijlregels:

```css
	background-color: red;
	color: green;
	font-family: verdana;
```



### Conflicterende stijlregels

Stijlregels kunnen soms conflicteren: Wanneer je een div element van de klasse “content” hebt voorzien en een ID “koptekst” hebt gegeven, kan het wel eens gebeuren dat verschillende selectors dezelfde stijlregels proberen toe te passen:


```css
div {
	Background-color: red;
}
.content {
	Background-color: green;
}
#koptekst {
	Background-color: blue;
}
```


 \
Het is daarom belangrijk om te weten welke selector voorrang krijgt.De algemene regel is: **hoe specifieker de selector, hoe meer voorrang.**

De selectors die we tot nu toe bekeken hebben hebben hun voorrang als volgt:



1. De ID selector overschrijft alle andere stijlregels.
2. De Class selector overschrijft alle stijlregels, behalve die van de ID selector.
3. De element selector volgt na de Class selector.
4. De * selector wordt enkel aan het einde toegevoegd, als alle andere stijlregels zijn toegepast.

Wanneer twee selectors **even specifiek zijn** geldt de **onderste stijlregel in de css code**.

In volgend voorbeeld zal elke `<div>` een groene achtergrond kleur krijgen.

```css
div {
	Background-color: red;
}
div {
	Background-color: green;
}
```


## State Selectors

In andere hoofdstukken werd bekeken hoe CSS de standaard opmaak van een element kan veranderen. 

Gebruikers van een website kunnen de opmaak van een element echter aanpassen:



*   Wanneer een gebruiker met zijn muis over een knop gaat, verandert de knop van kleur
*   Wanneer een gebruiker klikt op een tekstveld, verandert de opmaak zodat duidelijk wordt dat het tekstveld is geselecteerd.

De gebruiker past door zijn acties elementen aan, en als webdesigner wil je dat je opmaak deze aanpassingen weergeeft.

Dit gebeurt aan de hand van CSS state selectors. Een state gaat over een specifieke momentopname van een element. 

Enkele voorbeelden:



*   De :**hover** state: dit geeft aan dat een gebruiker met zijn muis boven op een element hangt.
*   De :**focus** state: dit geeft aan dat een gebruiker een element heeft geselecteerd.


## State selectors gebruiken

State selectors zijn een uitbreiding op de CSS selectors die je al kent. Wanneer je een aan de hand van een selector een element hebt opgemaakt, kan je aan die selector een State Selector toevoegen met een **dubbelpunt**.

![drawing]({{ site.baseurl }}/assets/img/css-stateselectors1.PNG)


## Andere State Selectors

Sommige state selectors dienen om specifieke elementen aan te duiden. Enkele voorbeelden:



*   De :**first-child** state: Dit zal het eerste element opmaken dat zich in de selector bevindt.
*   De :**empty** state: Dit zal alle elementen van de selector opmaken die geen enkel ander element bevatten.


## State selector voorbeelden


## Hyperlinks

Hyperlinks hebben 4 State Selectors die je bijna altijd moet definieren:



*   De :**link** state: Een hyperlink waar de gebruiker nog niet op heeft geklikt.
*   De :**visited** state: Een hyperlink waar de gebruiker al wel op heeft geklikt.
*   De :**hover** state: Een hyperlink waar de gebruiker met zijn muis over staat.
*   De :**active** state: Een hyperlink die verwijst naar de huidige pagina.

```css
/* link waar nog niet op geklikt is */
a:link {
    color: #FF0000;
}

/* link waar al wel op geklikt is */
a:visited {
    color: #00FF00;
}

/* link waar de muis over staat */
a:hover {
    color: #FF00FF;
}

/* link die verwijst naar de huidige pagina */
a:active {
    color: #0000FF;
}
```


**Belangrijk**:<br>
a:hover **MOET** komen **na** a:link en a:visited om te werken! _(als je a:link en/of a:visited hebt gedefinieerd)_ <br>
a:active **MOET** komen **na** a:hover om te werken! _(als je a:hover hebt gedefinieerd)_
