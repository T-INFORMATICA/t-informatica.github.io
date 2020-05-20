---
title: SQL Functies
tags: 
 - functie
 - SUM
 - MIN
 - MAX
 - COUNT
 - AVG
description: 
---

# SQL Functies en Operaties

Een SQL query bestaat uit drie onderdelen:

 - projectie
 - brontabel
 - selectie
 
Met een projectie wordt bepaald welke kolommen uit een tabel worden genomen om een nieuwe tabel te maken. 
 
<pre class="linenums lang-sql">
select componist, titel, niveau 	-- 3: projectie
from Stuk 				-- 1: brontabel
where genre = 'klassiek'; 		-- 2: selectie
</pre>
 
Een projectie moet niet alleen kolomnamen bevatten. Dit mag ook een constante zijn, bijvoorbeeld een constant stukje tekst, een constant getal of een constante datum. In het voorbeeld hieronder wordt een kolom toegevoegd, waar in elke cel de waarde "heeft als niveau" wordt gezet.

<pre class="linenums lang-sql">
select componist, titel, 'heeft als niveau', niveau
from Stuk;
</pre>

Een projectie kan dus meer dan alleen kolomnamen bevatten. 

## Waardes per Kolom Aanpassen

In de databank heeft elk muziekstuk een bepaalde, officiële speelduur gekregen. Om tijdens een concert elk nummer voldoende tijd te geven (de speler op het podium laten komen, tijd voor applaus, ...) wilt een muziekschool een resultaattabel waarin elk nummer 10% meer tijd krijgt.

Een SQL query kan hiervoor in de projectie gebruik maken van de gekende wiskundige operaties: optellen (+), vermenigvuldigen (\*), delen (/) en aftrekken (-).

<pre class="linenums lang-sql">
select nr,
 titel,
 speelduur * 1.1 -- verhoog de speelduur met 10%
from Stuk;
</pre>

## Waardes per Kolom Samenvoegen

Concatenatie is het samenvoegen van twee of meer kolommen in één kolom. 

Zo kan een 

<pre class="linenums lang-sql">
SELECT CONCAT(titel, 'heeft als niveau', niveau)
FROM Stuk;
</pre>



## Rijen Samenvoegen

