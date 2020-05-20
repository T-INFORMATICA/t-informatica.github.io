---
title: Projecties
tags: 
 - where
 - between
 - in
 - like
 - null
definitions: 
 - name: selectie
   definition: Dit bepaalt welke rijen uit een tabel worden genomen om een nieuwe tabel te maken.
description: De selectie bepaalt welke records er in de resultaat-tabel van een query worden meegenomen. Hier zijn een heleboel verschillende methodes voor.
---

# Selecties

Met een projectie wordt, met een select-query, bepaald welke kolommen uit een tabel worden genomen om een nieuwe tabel te maken.

Een selectie is heel gelijkaardig, maar werkt met de records in plaats van de fields. Met een selectie wordt bepaald welke rijen uit een tabel worden genomen om een nieuwe tabel te maken.

Een selectie legt voorwaarden op aan elke rij, in een extra where-clausule. Alleen rijen die aan de voorwaarde(n) voldoen, worden opgenomen in de resultaattabel.

<pre class="linenums lang-sql">
select componist, titel, niveau 	-- 3: projectie
from Stuk 				-- 1: brontabel
where genre = 'klassiek'; 		-- 2: selectie
</pre>

## Voorwaarde met vergelijking

De meest eenvoudige voorwaarde vergelijkt twee waarden met elkaar, met behulp van de gekende logische operators:

 - = 	is gelijk aan
 - &gt; 	is groter dan
 - &gt;= 	is groter dan of gelijk aan
 - &lt; 	is kleiner dan
 - &lt;= 	is kleiner dan of gelijk aan
 - &lt;&gt; 	is ongelijk aan

Al deze logische operators kunnen vergelijkingen maken tussen getallen, tekst en datums. Meerdere voorwaarden kunnen aan elkaar verbonden worden met behulp van and en or.

## Voorwaarde met between … and …

Een voorwaarde kan ook opgebouwd worden met behulp van `between ... and ...`

<pre class="linenums lang-sql">
select naam, geboortedatum
from Componist
where geboortedatum between '1700-01-01' and '1799-12-31';
</pre>

In dit geval is de voorwaarde hetzelfde als `geboortedatum >= '1700-01-01' and geboortedatum <= '1799-12-31'`. De resultaattabel bestaat uit alle componisten die geboren zijn in de achttiende eeuw:

<table>
   <tr>
      <td>NAAM</td>
      <td>GEBOORTEDATUM</td>
   </tr>
   <tr>
      <td>W.A. Mozart</td>
      <td>1756-01-27</td>
   </tr>
</table>

Een `between ... and ...`  voorwaarde kan ook worden omgekeerd met behulp van het not keyword. Dit geeft dan alle componisten terug die niet zijn geboren tussen die data.

<pre class="linenums lang-sql">
select naam, geboortedatum
from Componist
where geboortedatum not between '1700-01-01' and '1799-12-31';
</pre>

## Voorwaarde met like …

Voor tekst bestaat er een speciale voorwaarde: like. De like voorwaarde kan op delen van een tekst zoeken.

Zo kan bijvoorbeeld een selectie worden gemaakt van componisten op basis van een deel van hun naam:

<pre class="linenums lang-sql">
select naam componist
from Componist
where naam like '%ar%';
</pre>

Het resultaat bevat iedereen met ‘ar’ in de naam:

<table>
   <tr>
      <td>COMPONIST</td>
   </tr>
   <tr>
      <td>Charlie Parker</td>
   </tr>
   <tr>
      <td>W.A. Mozart</td>
   </tr>
   <tr>
      <td>Karl Schumann</td>
   </tr>
</table>

De like voorwaarde maakt gebruikt van **wildcards**. Een wildcard is een speciaal symbool, waar een like-voorwaarde mee bepaald of twee teksten gelijk zijn of niet.

<table>
   <tr>
      <th>Symbool</th>
      <th>Omschrijving</th>
      <th>Voorbeeld</th>
   </tr>
   <tr>
      <td>%</td>
      <td>0 of meer tekens in een tekst</td>
      <td>bl% vindt bl, black, blue, en blob</td>
   </tr>
   <tr>
      <td>_</td>
      <td>Één teken in een tekst</td>
      <td>h_t vindt hot, hat, en hit, maar niet hoot of heart</td>
   </tr>
   <tr>
      <td>[ ]</td>
      <td>Alle tekens die tussen de haakjes staan</td>
      <td>h[oa]t vindt hot en hat, maar niet hit</td>
   </tr>
   <tr>
      <td>^</td>
      <td>Geen enkele van de tekens die tussen de haakjes staan</td>
      <td>h[^oa]t vindt hit, maar niet hot en hat</td>
   </tr>
   <tr>
      <td>-</td>
      <td>Een reeks van tekens</td>
      <td>c[a-b]t vindt cat en cbt</td>
   </tr>
</table>

## Voorwaarde met in …
Een select-query met or kan soms worden vereenvoudigd door het gebruik van in voorwaarde.

<pre class="linenums lang-sql">
select *
from Stuk
where genre = 'klassiek' or genre = 'jazz' or genre = 'house';
</pre>

kan worden vereenvoudigd tot:

<pre class="linenums lang-sql">
select *
from Stuk
where genre in ('klassiek', 'jazz', 'house');
</pre>

## Vergelijking met null

Ook op nulls kan worden gecontroleerd binnen een selectievoorwaarde. In de volgende query worden alle originele stukken geselecteerd:

<pre class="linenums lang-sql">
select *
from Stuk
where origineel is null; -- alle originele stukken
</pre>

Want: de originele stukken zijn de niet-bewerkte stukken, dus de stukken waarvan de kolom 'origineel' niet is ingevuld. 

**Let op!** Bij null kan geen gebruik worden gemaakt van de '=' operator. Er moet gebruik gemaakt worden van het keyword 'is'.

Bewerkingen zijn dan de stukken waarbij origineel juist wel is ingevuld, dus ‘not null’ is:

<pre class="linenums lang-sql">
select *
from Stuk
where origineel is not null; -- alle bewerkingen
</pre>
