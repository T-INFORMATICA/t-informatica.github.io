---
title: Ordening
tags: 
 - ordening
 - sorteren
 - ascending
 - descending
 - order by
definitions: 
 - name: ordening
   definition: De volgorde waarin de rijen van een resultaat-tabel staan.
description: Een resultaattabel mag sommige voorwaarden van een relationele tabel schenden. Zo mag je bijvoorbeeld bepalen dat de volgorde van rijen wel belangrijk is. In dit hoofdstuk leer je om die volgorde te bepalen.
---

# Ordening

Eén van de basisregels van een tabel in een relationele databank is dat de volgorde van rijen geen verschil maakt. Soms kan het echter handig zijn om een volgorde af te dwingen. Dit gebeurt aan de hand van een order by-clausule.

De volgende select-query laat een aantal gegevens van klassieke muziekstukken afdrukken op volgorde van niveau:

<pre class="prettyprint linenums lang-sql">
select nr, genre, niveau, round(speelduur)
from Stuk
where genre = 'klassiek'
order by niveau;
</pre>

Resultaat:

<table>
   <tr>
      <th>NR</th>
      <th>GENRE</th>
      <th>NIVEAU</th>
      <th>ROUND</th>
   </tr>
   <tr>
      <td>8</td>
      <td>klassiek</td>
      <td>&lt;null&gt;</td>
      <td>4</td>
   </tr>
   <tr>
      <td>10</td>
      <td>klassiek</td>
      <td>&lt;null&gt;</td>
      <td>&lt;null&gt;</td>
   </tr>
   <tr>
      <td>14</td>
      <td>klassiek</td>
      <td>A</td>
      <td>4</td>
   </tr>
   <tr>
      <td>3</td>
      <td>klassiek</td>
      <td>A</td>
      <td>5</td>
   </tr>
   <tr>
      <td>5</td>
      <td>klassiek</td>
      <td>B</td>
      <td>5</td>
   </tr>
   <tr>
      <td>9</td>
      <td>klassiek</td>
      <td>B</td>
      <td>4</td>
   </tr>
</table>

Standaard wordt oplopend (‘ascending’) gesorteerd. Desgewenst kunnen we dit expliciet in het statement opnemen: ... order by speelduur asc. Aflopend sorteren (‘descending’) kan ook:

<pre class="prettyprint linenums lang-sql">
select nr, genre, niveau, round(speelduur)
from Stuk
where genre = 'klassiek'
order by niveau desc;
</pre>
