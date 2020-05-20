---
title: Data Filteren
tags: 
 - where
 - limit
 - offset
 - distinct
 - order by
description: 
---

# DATA FILTEREN

Tabellen in databanken hebben vaak duizenden of miljoenen rijen data. Al deze rijen doornemen is enorm veel werk. Daarom is het belangrijk dat een query niet alleen kolom(men) kan selecteren, maar ook kan kiezen welke rijen getoond worden. Bijvoorbeeld:


<table>
   <tr>
      <th>Id</th>
      <th>Merk/Model</th>
      <th># Wielen</th>
      <th># Deuren</th>
      <th>Type</th>
   </tr>
   <tr>
      <td>1</td>
      <td>Ford Focus</td>
      <td>4</td>
      <td>4</td>
      <td>Sedan</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Tesla Roadster</td>
      <td>4</td>
      <td>2</td>
      <td>Sports</td>
   </tr>
   <tr>
      <td>3</td>
      <td>Kawakasi Ninja</td>
      <td>2</td>
      <td>0</td>
      <td>Motorcycle</td>
   </tr>
   <tr>
      <td>4</td>
      <td>McLaren Formula 1</td>
      <td>4</td>
      <td>0</td>
      <td>Race</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Tesla S</td>
      <td>4</td>
      <td>4</td>
      <td>Sedan</td>
   </tr>
</table>

 - Toon enkel rijen waarvan het aantal wielen gelijk is aan 4
 - Toon enkel rijen waarvan het Type gelijk is aan ‘Sedan’ of ‘Race’

Rijen worden niet geselecteerd zoals kolommen (rijen hebben geen naam zoals kolommen dat hebben), maar wel gefilterd. Data kan op verschillende manieren worden gefilterd.

## Filteren met WHERE

Een `WHERE` filter gebruikt voorwaarden (logische operaties), en toont enkel die rijen die aan die voorwaarden voldoen.

<pre class="linenums lang-sql">
-- Select query met filters
SELECT column, another_column, ...
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR ...;
</pre>

Het is mogelijk om meerdere voorwaarden aan een query op te leggen door gebruik te maken van de keywords AND en OR (bijvoorbeeld: #wheels = 4 AND #doors = 2). 

### Filteren op getalwaardes

De logische operatoren hieronder kunnen gebruikt worden voor data die een getalwaarde voorstellen (zoals integers of decimals):

<table>
   <tr>
      <th>Operator</th>
      <th>Voorwaarde</th>
      <th>SQL Voorbeeld</th>
   </tr>
   <tr>
      <td>=, !=, < <=, >, >=</td>
      <td>Standaard operators</td>
      <td>col_name != 4</td>
   </tr>
   <tr>
      <td>BETWEEN … AND …</td>
      <td>Getal bevindt zich tussen 2 getallen (inclusief)</td>
      <td>col_name BETWEEN 1.5 AND 10.5</td>
   </tr>
   <tr>
      <td>NOT BETWEEN … AND …</td>
      <td>Getal bevindt zich niet tussen 2 getallen (inclusief)</td>
      <td>col_name NOT BETWEEN 1 AND 10</td>
   </tr>
   <tr>
      <td>IN (…)</td>
      <td>Getal bestaat in een lijst</td>
      <td>col_name IN (2, 4, 6)</td>
   </tr>
   <tr>
      <td>NOT IN (…)</td>
      <td>Getal bestaat niet in een lijst</td>
      <td>col_name NOT IN (1, 3, 5)</td>
   </tr>
</table>

### Filteren op tekstwaardes

De logische operatoren hieronder kunnen gebruikt worden voor data die een tekstwaarde voorstellen (zoals `varchar` of `text`):
<table>
   <tr>
      <th>Operator</th>
      <th>Voorwaarde</th>
      <th>SQL Voorbeeld</th>
   </tr>
   <tr>
      <td>=</td>
      <td>Case sensitive exact string comparison (notice the single equals)</td>
      <td>col_name = "abc"</td>
   </tr>
   <tr>
      <td>!= or <></td>
      <td>Case sensitive exact string inequality comparison</td>
      <td>col_name != "abcd"</td>
   </tr>
   <tr>
      <td>LIKE</td>
      <td>Case insensitive exact string comparison</td>
      <td>col_name LIKE "ABC"</td>
   </tr>
   <tr>
      <td>NOT LIKE</td>
      <td>Case insensitive exact string inequality comparison</td>
      <td>col_name NOT LIKE "ABCD"</td>
   </tr>
   <tr>
      <td>%</td>
      <td>Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE)</td>
      <td>"col_name LIKE ""%AT%""</td>
   </tr>
   <tr>
      <td>(matches ""AT"", ""ATTIC"", ""CAT"" or even ""BATS"")"</td>
   </tr>
   <tr>
      <td>_</td>
      <td>Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)</td>
      <td>"col_name LIKE ""AN_""</td>
   </tr>
   <tr>
      <td>(matches ""AND"", but not ""AN"")"</td>
   </tr>
   <tr>
      <td>IN (…)</td>
      <td>String exists in a list</td>
      <td>col_name IN ("A", "B", "C")</td>
   </tr>
   <tr>
      <td>NOT IN (…)</td>
      <td>String does not exist in a list</td>
      <td>col_name NOT IN ("D", "E", "F")</td>
   </tr>
</table>

Opgelet! Zorg ervoor dat alle tekst waardes tussen dubbele aanhalingstekens staan. 

## Filteren met DISTINCT

De `DISTINCT` filter verwijdert alle dubbele rijen uit het resultaat van een query.

<pre class="linenums lang-sql">
-- Select query met unieke resultaten
SELECT DISTINCT column, another_column, ...
FROM mytable
WHERE condition(s);
</pre>

Bijvoorbeeld:
Uit de volgende tabel wil je te weten komen hoeveel wielen een voertuig kan hebben. Je wilt dus een resultaat zien met daarin 2 en 4.

<table>
   <tr>
      <th>Id</th>
      <th>Merk/Model</th>
      <th># Wielen</th>
      <th># Deuren</th>
      <th>Type</th>
   </tr>
   <tr>
      <td>1</td>
      <td>Ford Focus</td>
      <td>4</td>
      <td>4</td>
      <td>Sedan</td>
   </tr>
   <tr>
      <td>2</td>
      <td>Tesla Roadster</td>
      <td>4</td>
      <td>2</td>
      <td>Sports</td>
   </tr>
   <tr>
      <td>3</td>
      <td>Kawakasi Ninja</td>
      <td>2</td>
      <td>0</td>
      <td>Motorcycle</td>
   </tr>
   <tr>
      <td>4</td>
      <td>McLaren Formula 1</td>
      <td>4</td>
      <td>0</td>
      <td>Race</td>
   </tr>
   <tr>
      <td>5</td>
      <td>Tesla S</td>
      <td>4</td>
      <td>4</td>
      <td>Sedan</td>
   </tr>
</table>

<pre class="linenums lang-sql">
-- selecteer de kolom wielen uit de tabel autos
SELECT Wielen
FROM autos;
</pre>

Deze query geeft als resultaat de tabel hieronder. In deze resultaattabel is niet elke rij uniek: het getal 4 komt immers 4 keer voor.

<table>
   <tr>
      <th> # Wielen</th>
   </tr>
   <tr>
      <td>4</td>
   </tr>
   <tr>
      <td>4</td>
   </tr>
   <tr>
      <td>2</td>
   </tr>
   <tr>
      <td>4</td>
   </tr>
   <tr>
      <td>4</td>
   </tr>
</table>

Om dit op te lossen gebruik je het keyword DISTINCT. Dit zorgt ervoor dat elke rij die de query teruggeeft een unieke rij is. 

<pre class="linenums lang-sql">
-- selecteer de kolom wielen uit de tabel autos
SELECT DISTINCT Wielen
FROM autos;
</pre>

Deze query geeft als resultaat de tabel hieronder.

<table>
   <tr>
      <th> # Wielen</th>
   </tr>
   <tr>
      <td>4</td>
   </tr>
   <tr>
      <td>2</td>
   </tr>
</table>

## Sorteren met ORDER BY

In een tabel in een relationele databank maakt de volgorde van rijen geen verschil. Dit is heel handig wanneer data toegevoegd wordt aan een databank (rijen kunnen in eender welke volgorde worden toegevoegd aan een tabel), maar wanneer data wordt opgevraagd is het vaak handig om deze data op een bepaalde manier gesorteerd te krijgen.

Sorteren gebeurt met het ORDER BY keyword. Hierbij wordt aangeduid welke kolom gebruikt wordt om te sorteren, en of er oplopend (ascending → `ASC`) of aflopend (descending → `DESC`) wordt gesorteerd.

<pre class="linenums lang-sql">
-- Select query with ordered results
SELECT column, another_column, ...
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
</pre>

## Filteren met LIMIT en OFFSET

De LIMIT filter toont enkel de eerste zoveel rijen uit je query. De OFFSET filter bepaalt na welke rij de LIMIT filter begint. 
Hoewel je deze filter kan gebruiken zonder een ORDER BY sortering, heeft dit zelden zin. Daarom worden deze twee SQL commando’s vaak samen gebruikt.

<pre class="linenums lang-sql">
-- Select query met beperkt aantal rijen
SELECT column, another_column, … 
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT aantal_rijen OFFSET vanaf_rij_nummer;
</pre>

Bijvoorbeeld:
Hoewel een webshop zoals bol.com vaak honderden of duizenden producten verkoopt, worden die data niet allemaal tegelijk getoond. In plaats daarvan worden de producten in pagina’s van 50 producten per pagina gestoken.

De eerste pagina toont dus 50 producten vanaf rij 1 (LIMIT 50 OFFSET 0; ), de tweede pagina 50 producten vanaf rij 51 (LIMIT 50 OFFSET 0; ), …
