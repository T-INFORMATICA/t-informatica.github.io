---
title: Projecties
tags: 
 - select
 - projectie
 - constante
 - alias
definitions: 
 - name: projectie
   definition: De nieuwe tabel die wordt gevormd door middel van een select query.
 - name: constante
   definition: Een vaste waarde die in elke rij van een projectie hetzelfde is.
 - name: alias
   definition: De naam van de kolom in de projectie, wanneer die kolom in de oorspronkelijke tabel een andere naam had.
description: SQL wordt gebruikt om informatie op te vragen uit een databank. Die informatie krijg je terug in de vorm van een tabel. Deze tabel wordt ook wel eens de projectie genoemd.
---

# Projecties

Een select query gebruikt een tabel om een nieuwe tabel te maken. Die nieuwe tabel wordt ook wel eens een **projectie** genoemd. De data van de eerste tabel wordt geprojecteerd op een nieuwe tabel. Afhankelijk van hoe de projectie wordt gedaan, toont de nieuwe tabel andere data.

## Kolommen in Select Queries

Een kolom projectie is de meest eenvoudige soort projectie. Hierbij worden de gewenste kolommen opgesomd in de query.

<pre class="prettyprint linenums lang-sql">
select componist, titel, niveau
from Stuk;
</pre>

Resultaat:

<table>
   <tr>
      <td>COMPONIST</td>
      <td>TITEL</td>
      <td>NIVEAU</td>
   </tr>
   <tr>
      <td>1</td>
      <td>Blue bird</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Blue bird</td>
      <td>B</td>
   </tr>
   <tr>
      <td>4</td>
      <td>Air pour</td>
      <td>charmer B</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Lina</td>
      <td>B</td>
   </tr>
   <tr>
      <td>8</td>
      <td>Berceuse</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Cradle song</td>
      <td>B</td>
   </tr>
   <tr>
      <td>8</td>
      <td>Non piu andrai</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>9</td>
      <td>I'll never go</td>
      <td>A</td>
   </tr>
   <tr>
      <td>10</td>
      <td>Swinging Lina</td>
      <td>B</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Little Lina</td>
      <td>A</td>
   </tr>
   <tr>
      <td>10</td>
      <td>Blue sky</td>
      <td>A</td>
   </tr>
</table>

Een projectie op alle kolommen kan ook. De afkorting hiervoor is een asterisk (`*`).

<pre class="prettyprint linenums lang-sql">
select *
from Stuk;
</pre>

## Constanten in Select Queries

Een projectie moet niet alleen kolomnamen bevatten. Dit mag ook een constante zijn, bijvoorbeeld een constant stukje tekst, een constant getal of een constante datum:

<pre class="prettyprint linenums lang-sql">
select componist, titel, 'heeft als niveau', niveau
from Stuk;
</pre>

Resultaat:

<table>
   <tr>
      <td>COMPONIST</td>
      <td>TITEL</td>
      <td>heeft als niveau</td>
      <td>NIVEAU</td>
   </tr>
   <tr>
      <td>1</td>
      <td>Blue bird</td>
      <td>heeft als niveau</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Blue bird</td>
      <td>heeft als niveau</td>
      <td>B</td>
   </tr>
   <tr>
      <td>4</td>
      <td>Air pour</td>
      <td>heeft als niveau</td>
      <td>charmer B</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Lina</td>
      <td>heeft als niveau</td>
      <td>B</td>
   </tr>
   <tr>
      <td>8</td>
      <td>Berceuse</td>
      <td>heeft als niveau</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Cradle song</td>
      <td>heeft als niveau</td>
      <td>B</td>
   </tr>
   <tr>
      <td>8</td>
      <td>Non piu andrai</td>
      <td>heeft als niveau</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>9</td>
      <td>I'll never go</td>
      <td>heeft als niveau</td>
      <td>A</td>
   </tr>
   <tr>
      <td>10</td>
      <td>Swinging Lina</td>
      <td>heeft als niveau</td>
      <td>B</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Little Lina</td>
      <td>heeft als niveau</td>
      <td>A</td>
   </tr>
   <tr>
      <td>10</td>
      <td>Blue sky</td>
      <td>heeft als niveau</td>
      <td>A</td>
   </tr>
</table>

<!--
## Expressies in Select Queries

Een select-query mag ook expressies bevatten. De waarde van die expressie wordt dan berekend uit kolomwaardes en/of constanten.

<pre class="prettyprint linenums lang-sql">
select naam || ' is gevestigd in ' || plaats
from Muziekschool;
</pre>

De expressie hierboven heet een concatenation. Een concatenation is het samenvoegen van tekst-waarden zodat het één tekst wordt.

<table>
   <tr>
      <td>CONCATENATION</td>
   </tr>
   <tr>
      <td>Muziekschool Amsterdam is gevestigd in Amsterdam</td>
   </tr>
   <tr>
      <td>Reijnders' Muziekschool is gevestigd in Nijmegen</td>
   </tr>
   <tr>
      <td>Het Muziekpakhuis is gevestigd in Amsterdam</td>
   </tr>
</table> -->

## Kolomnamen wijzigen in Select-Queries

Om de naam van een kolom in een projectie te wijzigen kan een kolom-alias gebruikt worden.

<pre class="prettyprint linenums lang-sql">
select nr as stuk,
       titel,
       speelduur * 1.1 as effectieve_speelduur
from Stuk;
</pre>

Hierboven krijgt de kolom nr de nieuwe naam stuk. De kolom met de expressie speelduur * 1.1 krijgt de nieuwe naam effectieve_speelduur. Hiervoor wordt het keyword as gebruikt.

## Distinct

Eén van de basisregels van een tabel in een relationele databank is dat alle rijen uniek moeten zijn. In een projectie gebeurt het echter heel vaak dat rijen meerdere keren voorkomen.

Bijvoorbeeld:

<pre class="prettyprint linenums lang-sql">
select genre, niveau
from Stuk;
</pre>

Resultaat:

<table>
   <tr>
      <th>GENRE</th>
      <th>NIVEAU</th>
   </tr>
   <tr>
      <td>jazz</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>jazz</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>pop</td>
      <td>A</td>
   </tr>
   <tr>
      <td>jazz</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>A</td>
   </tr>
   <tr>
      <td>jazz</td>
      <td>A</td>
   </tr>
</table>

In deze projectie staan 11 rijen, waarvan enkele meerdere keren voorkomen. Dit kan soms handig zijn, maar vaak ook niet. Moest de projectie een èchte relationele tabel zijn, dan zouden er maar 7 rijen staan. 

Om de dubbele rijen weg te laten, moet er een speciaal keyword worden gebruikt in de select-query: `distinct`.

<pre class="prettyprint linenums lang-sql">
select distinct genre, niveau
from Stuk;
</pre>

Resultaat:


<table>
   <tr>
      <th>GENRE</th>
      <th>NIVEAU</th>
   </tr>
   <tr>
      <td>jazz</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>jazz</td>
      <td>A</td>
   </tr>
   <tr>
      <td>jazz</td>
      <td>B</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>A</td>
   </tr>
   <tr>
      <td>klassiek</td>
      <td>B</td>
   </tr>
   <tr>
      <td>pop</td>
      <td>A</td>
   </tr>
</table>

**Opgelet!** `Distinct` werkt op de **volledige projectie**, en niet op één enkele kolom.
