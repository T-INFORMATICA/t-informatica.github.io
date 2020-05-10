---
title: Data Opvragen
tags: 
 - functie
 - selectie
 - iteratie
description: 
---

# DATA OPVRAGEN

## SELECT queries

Om data uit een databank te halen worden SELECT queries gebruikt. SELECT queries worden vaak gewoon ‘queries’ genoemd. Een query is niet meer dan een instructie waarin 2 dingen worden duidelijk gemaakt:

 - Wat: Welke gegevens zoek je?
 - Waar: Waar vind je die gegevens terug?

Een tabel in een relationele databank dient om een entiteit (bijvoorbeeld “Honden”) te definiëren. Elke rij in de tabel kan dan gebruikt worden om een bepaalde soort (Beagle, Pug, Labrador) aan te duiden. De kolommen duiden dus de gemeenschappelijke eigenschappen aan van elke rij (elke hond heeft bijvoorbeeld een vachtkleur, staartlengte, …)

## Kolommen selecteren

De meest simpele query is een query die zoekt naar een bepaalde kolom(men) (eigenschappen) binnen een bepaalde tabel (entiteit) voor alle mogelijke rijen.

<pre class="prettyprint linenums lang-sql">
-- SELECT query voor een bepaalde kolom(men)
SELECT kolom, andere_kolom, ...
FROM MijnTabel;
</pre>

Het resultaat van een `SELECT` query is altijd een nieuwe tabel, met daarin de rijen en kolommen die werden geselecteerd door de query.

## Alles selecteren

Als je alle kolommen (eigenschappen) van een tabel wilt aanduiden zou je alle kolommen kunnen benoemen in de query. De afkorting hiervoor is een asterisk (*).

<pre class="prettyprint linenums lang-sql">
-- SELECT query voor ALLE kolommen in een tabel
SELECT * 
FROM MijnTabel;
</pre>

De `SELECT *` query is een gemakkelijke manier om alle gegevens in een tabel te kunnen raadplegen.
