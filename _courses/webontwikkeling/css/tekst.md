---
title: Tekst en Lettertypes
tags: 
 - font
 - generic family
 - font family
 - serif
 - sans-serif
 - monospace
 - em
definitions:
 - name: font
   definition: De manier waarop letters, leestekens en cijfers worden weergegeven.
 - name: generic family
   definition: Een brede verzameling van lettertypes die dezelfde algemene eigenschappen delen.
 - name: font family
   definition: Een verzameling lettertypes die hetzelfde zijn qua stijl en vormgeving.
 - name: serif
   definition: Een lettertype dat een klein lijntje toevoegt aan de uiteindes van elke letter.
 - name: sans-serif
   definition: Een lettertype dat geen klein lijntje toevoegt aan de uiteindes van elke letter.
 - name: monospace
   definition: Een lettertype waarbij elke letter exact even groot is.
description: Een lettertype kan veel vertellen over de inhoud, toon en het doel van een webpagina. In dit hoofdstuk wordt dieper ingegaan op de verschillende manieren waarop je met CSS lettertypes kunt manipuleren.
---


# Tekst en Lettertypes


## Lettertypes

Een ander woord voor lettertype is font. Een lettertype is de manier waarop letters, leestekens en cijfers worden weergegeven.

Fonts worden opgedeeld als volgt:



*   De **generic family**
    *   Bijvoorbeeld: sans-serif, serif, ...
*   De **font family**
    *   Bijvoorbeeld: Arial, Times New Roman, …

Elke font family hoort bij één generic family. Zo is:



*   Arial een sans-serif lettertype
*   Times New Roman een een serif lettertype

In CSS bestaan er 3 generic families:



1. Serif
    *   Dit zijn de lettertypes met kleine uiteindes aan elke letter.
    *   Font families hierin zijn: 
        *   Times New Roman
        *   Georgia
2. Sans-serif
    *   Dit zijn de lettertypes zonder (_sans_ in het frans) kleine uiteindes aan elke letter.
    *   Font families hierin zijn: 
        *   Arial
        *   Calibri
3. Monospace
    *   Dit zijn de lettertypes waarvan elke letter exact evenveel ruimte inneemt op het scherm.
    *   Font families hierin zijn: 
        *   `Courier New`
        *   `Roboto Mono`


## Lettergroottes

In webdesign is het belangrijk om de grootte van je tekst te kunnen bepalen. Wat je echter **niet** mag doen is lettergroottes gebruiken om paragrafen er uit te laten zien als headings, of headings als paragrafen! \
Gebruik daarom altijd de juiste HTML-tags, zoals &lt;h1> - &lt;h7> voor headings en &lt;p> voor paragrafen.

De grootte van je lettertype kan een absolute of relatieve grootte zijn.


### Absolute grootte



*   Zet de tekstgrootte op een bepaalde grootte
*   In sommige browsers is het niet mogelijk om de tekstgrootte te veranderen (nadelig voor bijvoorbeeld voor slechtziende mensen)

Wanneer de fysieke grootte van het scherm bekend is kan absolute grootte nuttig zijn. **Absolute grootte wordt uitgedrukt in pixels (px).**

De standaard grootte van letters in de browser van normale tekst (bijvoorbeeld in paragrafen) is 16px.


### Relatieve grootte



*   Hiermee wordt de tekstgrootte bepaald ten opzichte van andere elementen
*   Hiermee kan een gebruiker de tekstgrootte aanpassen in de browser

**Relatieve grootte wordt uitgedrukt in em.** Met de standaardinstellingen van de meeste browsers komt 1em overeen met 16px.

De meeste browsers staan echter toe om de standaardgrootte te veranderen. Wanneer een gebruikt bijvoorbeeld de standaardgrootte veranderd naar 24px, dan zal bij die persoon 1em overeen komen met 24px in plaats van 16px.


# TEXT PROPERTIES

In deze CODE hoofdstukken worden enkele belangrijke CSS stijlregels aangeleerd die je zeker nodig zult hebben.


## Overzicht


<table class="styledTable">
  <tr>
   <th>property</th>
   <th>code</th>
   <th>uitleg</th>
  </tr>
  <tr>
   <td>De font-family property</td>
   <td><b><code>font-family: Arial;</code></b></td>
   <td>De font-family property zorgt voor het lettertype van de tekst in een element. 
<br>
De mogelijke waardes zijn:
<ul>
<li>Een <b>generic family</b></li>
<li>Een <b>font-family</b></li>
</ul>
   </td>
  </tr>
  <tr>
   <td>De font-size property</td>
   <td><b><code>font-size: 25px;</code></b></td>
   <td>De font-size property zorgt voor de tekstgrootte in een element. 
<br>
De mogelijke waardes zijn:
<ul>
<li>Een absolute waarde (uitgedrukt in px)</li>
<li>Een relatieve waarde (uitgedrukt in em)</li>
<li>Een percentage (uitgedrukt in %)</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>De text-align property
   </td>
   <td><b><code>text-align: center;</code></b>
   </td>
   <td>De text-align property zorgt voor de horizontale uitlijning van tekst in een element. 
<br>
De mogelijke waardes zijn:
<ul>
<li><b>Left</b>: dit lijnt de tekst links uit (dit is de standaard waarde in elke browser)</li>
<li><b>Right</b>: dit lijnt de tekst rechts uit</li>
<li><b>Center</b>: dit lijnt de tekst uit in het midden (gecentreerde tekst)</li>
<li><b>Justify</b>: elke regel wordt verspreid over de volledige breedte, zodat elke lijn een gelijke breedte heeft (zoals in tijdschriften en kranten)</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>De text-decoration property
   </td>
   <td><b><code>text-decoration: 		underline;</code></b>
   </td>
   <td>De text-decoration property zorgt voor het toevoegen of verwijderen van lijnen door en rond de tekst. De meest bekende hiervan is <span style="text-decoration:underline;">onderlijnde tekst</span>. 
<br>
De mogelijke waardes zijn:
<ul>
<li><b>Underline</b>: Voor onderlijnde tekst.</li>
<li><b>Line-through</b>: Voor doorgestreepte tekst.</li>
<li><b>overline</b>: Voor een lijn boven de tekst.</li>
<li><b>none</b>: Om eender welke lijnen door en rond de tekst te verwijderen. 
<ul>
<li>Dit wordt vaak gebruikt voor &lt;a>-elementen, omdat de browser deze standaard onderlijnd.</li>
</ul>
</li> 
</ul>
   </td>
  </tr>
  <tr>
   <td>De font-style property
   </td>
   <td><b><code>font-style: italic;</code></b>
   </td>
   <td>De font-style property zorgt voor het <em>schuin </em>of rechtzetten van de letters in een tekst. 
<br>
De mogelijke waardes zijn:
<ul>
<li><b>Normal</b>: De tekst wordt normaal getoond</li>
<li><b>italic</b>: De tekst wordt <em>schuin</em> getoond</li>
<li><b>oblique</b>: De tekst ‘leunt’ een beetje (lijkt zeer sterk op italic, weinig ondersteund)</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>De font-weight property
   </td>
   <td><b><code>font-weight: bold;</code></b>
   </td>
   <td>De font-weight property zorgt voor het <b>vet </b>maken van de letters in een tekst. 
<br>
De mogelijke waardes zijn:
<ul>
<li><b>Normal</b>: De tekst wordt normaal getoond</li>
<li><b>Bold</b>: De tekst wordt <b>vet </b>getoond</li>
</ul>
   </td>
  </tr>
</table>


