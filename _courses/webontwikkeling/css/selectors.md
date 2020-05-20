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
description: Bij het opmaken van een website wil je vaak dezelfde stijlregels toepassen op veel verschillende elementen. Selectors geven CSS de mogelijkheid om bijvoorbeeld alle h1 elementen er hetzelfde te laten uitzien.
---


# Selectors

![drawing]({{ site.baseurl }}/assets/img/css-selectors1.PNG)

**De Selector selecteert welke HTML elementen worden aangepast door CSS**. Een CSS selector kan bijvoorbeeld alle <code>&lt;<b>p</b>></code> elementen selecteren, zodat CSS de tekstkleur daarvan kan aanpassen. \
Een stijlregel wordt dus toegepast op <b>alle elementen die overeenkomen met de selector</b>. CSS heeft verschillende soorten selectors.


## Selectors overzicht


<table class="styledTable">
  <tr>
   <th>selector</th>
   <th>voorbeeld</th>
   <th>uitleg</th>
  </tr>
  <tr>
   <td>De element selector</td>
   <td><code>p</code></td>
   <td>
	   Selecteer alle &lt;p> elementen.<br>
De element selector is de simpelste: Je gebruikt de tagnaam van het HTML element als selector, en alle HTML elementen met die tagnaam zullen vanaf dan deze stijlregels volgen.
   </td>
  </tr>
  <tr>
   <td>De ALL selector</td>
   <td><code>*</code></td>
   <td>
	   Selecteer alle elementen.<br>
De * selector wordt gebruikt om stijlregels toe te passen op <b>alle elementen</b>. Wil je dat alle elementen op je website een bepaald lettertype gebruiken, kan je hiervoor de * selector gebruiken.
   </td>
  </tr>
  <tr>
   <td>De class selector</td>
   <td><code>.intro</code></td>
   <td>
	   Selecteer alle elementen met class="intro".<br>
Wanneer elementen zijn gemarkeerd met het class-attribute kan je deze elementen ook een eigen stijl geven.
Je doet dit door middel van een <b>punt</b>, gevolgd door de naam die je in het class-attribute hebt geschreven.
   </td>
  </tr>
  <tr>
   <td>De id selector</td>
   <td><code>#firstname</code></td>
   <td>
	   Selecteer het element met  id="firstname".<br>
Wanneer elementen zijn gemarkeerd met het ID-attribute kan je deze elementen een eigen stijl geven.
Je doet dit door middel van een <b>hekje</b>, gevolgd door de naam die je in het ID-attribute hebt geschreven.
   </td>
  </tr>
  <tr>
   <td>Selectors combineren</td>
   <td><code>div, p</code></td>
   <td>Selecteer alle &lt;div> elementen en alle &lt;p> elementen.</td>
  </tr>
  <tr>
   <td>Geneste elementen selector</td>
   <td><code>div p</code></td>
   <td>Selecteer alle &lt;p> elementen die zich bevinden in &lt;div> elementen.</td>
  </tr>
  <tr>
   <td>Parent-child selector</td>
   <td><code>div > p</code></td>
   <td>Selecteer alle &lt;p> elementen waarvan de parent een &lt;div> element is.</td>
  </tr>
  <tr>
   <td>After selector</td>
   <td><code>div + p</code></td>
   <td>Selecteer alle &lt;p> elementen die direct na &lt;div> elementen staan.</td>
  </tr>
  <tr>
   <td>Before selector</td>
   <td><code>p ~ ul</code></td>
   <td>Selecteer elk &lt;ul> element dat wordt voorafgegaan door een &lt;p> element.</td>
  </tr>
</table>



## Voorrang van selectors


### Opbouw van stijlregels

Wanneer verschillende selectors van toepassing zijn, gaat CSS proberen al deze selectors met elkaar te combineren. 

Een div element van de klasse “content” en een ID “koptekst” kan reageren op 3 selectors:



1. div
2. .content
3. #koptekst

Bijvoorbeeld:


<pre>
div {
	background-color: red;
}
.content {
	color: green;
}
#koptekst {
	font-family: verdana;
}
</pre>


Wanneer, zoals in bovenstaand voorbeeld, alle 3 de selectors stijlregels krijgen, wordt voor het element <code>&lt;<b>div</b> class="content" id="koptekst"></code> een combinatie gemaakt van deze 3 stijlregels:

<pre>
	background-color: red;
	color: green;
	font-family: verdana;
</pre>



### Conflicterende stijlregels

Stijlregels kunnen soms conflicteren: Wanneer je een div element van de klasse “content” hebt voorzien en een ID “koptekst” hebt gegeven, kan het wel eens gebeuren dat verschillende selectors dezelfde stijlregels proberen toe te passen:


<pre>
div {
	Background-color: red;
}
.content {
	Background-color: green;
}
#koptekst {
	Background-color: blue;
}
</pre>


 \
Het is daarom belangrijk om te weten welke selector voorrang krijgt.De algemene regel is: **hoe specifieker de selector, hoe meer voorrang.**

De selectors die we tot nu toe bekeken hebben hebben hun voorrang als volgt:



1. De ID selector overschrijft alle andere stijlregels.
2. De Class selector overschrijft alle stijlregels, behalve die van de ID selector.
3. De element selector volgt na de Class selector.
4. De * selector wordt enkel aan het einde toegevoegd, als alle andere stijlregels zijn toegepast.

Wanneer twee selectors **even specifiek zijn** geldt de **onderste stijlregel in de css code**.

In volgend voorbeeld zal elke &lt;div> een groene achtergrond kleur krijgen.

<pre>
div {
	Background-color: red;
}
div {
	Background-color: green;
}
</pre>
