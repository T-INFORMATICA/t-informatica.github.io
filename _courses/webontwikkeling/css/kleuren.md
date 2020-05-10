---
title: Kleuren
tags: 
 - hexadecimale waarde
 - kleurnaam
 - rgb waarde
definitions:
 - name: hexadecimale kleurwaarde
   definition: Een kleurwaarde die bestaat uit een rood, groen en blauw gedeelte, waarbij elk deel wordt aangegeven door twee cijfers tussen 0 en 15.
 - name: rgb kleurwaarde
   definition: Een kleurwaarde die bestaat uit een rood, groen en blauw gedeelte, waarbij elk deel wordt aangegeven door een getal tussen 0 en 255.
description: Bij opmaak spelen kleuren een belangrijke rol. In CSS zijn er verschillende manieren om een kleur te bepalen. In dit hoofdstuk krijg je de drie belangrijkste aangeleerd.
---


# Kleuren


## 4.1 Kleuren in CSS

Kleuren in CSS worden meestal bepaald door:



*   een geldige CSS-kleurnaam - zoals "red"
*   een RGB-waarde - zoals "rgb (255, 0, 0)"
*   een HEX waarde - zoals "#ff0000"


### 4.1.1 CSS kleurnamen

CSS kleurnamen zijn  niet hoofdlettergevoelig: "Red" is hetzelfde als "red" of "RED".  \
CSS ondersteunt 140 standaard kleurnamen. 

Enkele voorbeelden:


<table>
  <tr>
   <td><b>Kleur</b>
   </td>
   <td><b>CSS-kleurnaam</b>
   </td>
  </tr>
  <tr>
   <td style="background-color: red"> 
   </td>
   <td>Red
   </td>
  </tr>
  <tr>
   <td style="background-color: Green"> 
   </td>
   <td>Green
   </td>
  </tr>
  <tr>
   <td style="background-color: Blue"> 
   </td>
   <td>Blue
   </td>
  </tr>
  <tr>
   <td style="background-color: Orange"> 
   </td>
   <td>Orange
   </td>
  </tr>
  <tr>
   <td style="background-color: Yellow"> 
   </td>
   <td>Yellow
   </td>
  </tr>
  <tr>
   <td style="background-color: Cyan"> 
   </td>
   <td>Cyan
   </td>
  </tr>
  <tr>
   <td style="background-color: Black"> 
   </td>
   <td>Black
   </td>
  </tr>
</table>



### 4.1.2 RGB-waardes

RGB-waardes worden samengesteld met behulp van deze formule:  \
_RGB (rood, groen, blauw); \
_Elke parameter (rood, groen, blauw) bepaald de intensiteit van de kleur met een waarde tussen 0 en 255. 

Bijvoorbeeld, RGB (255,0,0) is helder rood, omdat de  roodwaarde de hoogste waarde (255) heeft en de andere kleuren de waarde 0 krijgen. [Met de colorpicker van Google](https://www.google.be/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=color+picker) kan je hier zelf mee experimenteren.

Enkele voorbeelden van RGB-waardes:


<table>
  <tr>
   <td><b>Color</b>
   </td>
   <td><b>RGB</b>
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(255,0,0)"> 
   </td>
   <td>rgb(255,0,0)
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(0,255,0)"> 
   </td>
   <td>rgb(0,255,0)
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(0,0,255)"> 
   </td>
   <td>rgb(0,0,255)
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(255,165,0)"> 
   </td>
   <td>rgb(255,165,0)
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(255,255,0)"> 
   </td>
   <td>rgb(255,255,0)
   </td>
  </tr>
  <tr>
   <td style="background-color: rgb(0,255,255)"> 
   </td>
   <td>rgb(0,255,255)
   </td>
  </tr>
</table>



### 4.1.3 Hexadecimale waardes

Kleuren kunnen ook worden samengesteld met behulp van hexadecimale kleurwaarden in de vorm: #RRGGBB, waarbij RR (rood), GG (groen) en BB (blauw) hexadecimale waardes zijn tussen 00 en FF (hetzelfde als de decimale waardes 0-255).

Zo wordt met #FF0000 rood weergegeven, omdat rood is ingesteld op de hoogste waarde (FF) en anderen zijn ingesteld op de laagste waarde (00). 

HEX-waarden zijn **niet** hoofdlettergevoelig: #ff0000 is hetzelfde als #FF0000.

Enkele voorbeelden van HEX-waardes:


<table>
  <tr>
   <td><b>Color</b>
   </td>
   <td><b>HEX</b>
   </td>
  </tr>
  <tr>
   <td style="background-color: #FF0000"> 
   </td>
   <td>#FF0000
   </td>
  </tr>
  <tr>
   <td style="background-color: #00FF00"> 
   </td>
   <td>#00FF00
   </td>
  </tr>
  <tr>
   <td style="background-color: #0000FF"> 
   </td>
   <td>#0000FF
   </td>
  </tr>
  <tr>
   <td style="background-color: #FFA500"> 
   </td>
   <td>#FFA500
   </td>
  </tr>
  <tr>
   <td style="background-color: #FFFF00"> 
   </td>
   <td>#FFFF00
   </td>
  </tr>
  <tr>
   <td style="background-color: #00FFFF"> 
   </td>
   <td>#00FFFF
   </td>
  </tr>
</table>





# 5 CODE: COLOR PROPERTIES

In deze CODE hoofdstukken worden enkele belangrijke CSS stijlregels aangeleerd die je zeker nodig zult hebben.


## 5.1 Overzicht


<table>
  <tr>
   <th>property
   </th>
   <th>code
   </th>
   <th>uitleg
   </th>
  </tr>
  <tr>
   <td>De color property
   </td>
   <td><code>color: red;</code>
   </td>
   <td>De color property zorgt voor de tekstkleur in een element. <br>
De mogelijke waardes zijn:
<ul>
<li>Een CSS-kleurnaam</li>
<li>Een RGB-kleur</li>
<li>Een HEX-kleur</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>De background-color property
   </td>
   <td><code>background-color: green;</code>
   </td>
   <td>De background-color property zorgt voor achtergrondkleur in een element. <br>
De mogelijke waardes zijn:
<ul>
<li>Een CSS-kleurnaam</li>
<li>Een RGB-kleur</li>
<li>Een HEX-kleur</li>
</ul>
   </td>
  </tr>
</table>




