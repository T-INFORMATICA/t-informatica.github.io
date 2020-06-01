---
title: Joins
tags: 
 - inner join
 - full outer join
 - left outer join
definitions: 
 - name: join
   definition: Een manier om meerdere tabellen met elkaar te combineren.
 - name: cross join
   definition: Een manier om twee tabellen met elkaar te combineren, waarbij alle mogelijke combinaties worden getoond tussen records uit de ene en de andere tabel.
 - name: inner join
   definition: Een manier om twee tabellen met elkaar te combineren, waarbij alle mogelijke combinaties worden getoond tussen records uit de ene en de andere tabel die voldoen aan een voorwaarde.
 - name: full outer join
   definition: Een manier om twee tabellen met elkaar te combineren, waarbij alle mogelijke combinaties worden getoond tussen records uit de ene en de andere tabel die voldoen aan een voorwaarde, met daarbij ook alle rijen die uit elke tabel die niet voldoen aan die voorwaarde.
 - name: left outer join
   definition: Een manier om twee tabellen met elkaar te combineren, waarbij alle mogelijke combinaties worden getoond tussen records uit de ene en de andere tabel die voldoen aan een voorwaarde, met daarbij ook alle rijen die uit de eerste tabel die niet voldoen aan die voorwaarde.
description: Meestal komt de data die je opvraagt uit een databank niet uit één tabel, maar uit verschillende tabellen die onderling verbonden zijn. In dit hoofdstuk leer je hoe je die verschillende tabellen kunt gebruiken om één resultaat tabel te maken.
---

# Joins

Een query bestaat uit 3 onderdelen: 

 1. Projectie
 2. brontabel
 3. selectie
 
Alle query's tot nu toe maakten gebruik van één brontabel. Een databank bestaat echter altijd uit meerdere tabellen. De data die je wilt opvragen zit vaak verspreid over verschillende tabellen.

In SQL is het mogelijk om meerdere tabellen samen te voegen tot één grote tabel, waarin alle gegevens van die tabellen worden verzameld. Deze grote tabel kan dan gebruikt worden als brontabel in een query. Het samenvoegen van deze tabellen wordt ook wel eens een `join` genoemd.

# Soorten Joins

Er zijn verschillende manieren om twee tabellen samen te voegen:

 - Plaats alle rijen van tabel A en B onder elkaar in één nieuwe tabel.
 - Zoek naar alle rijen die in tabel A en B hetzelfde zijn, en plaats die in één nieuwe tabel.
 - Maak combinaties van alle rijen in tabel A en B, en plaats die in één nieuwe tabel.
 - ...
 
Er is dus meer dan één `join` commando. Om elk van deze `join`s uit te leggen worden twee voorbeeldtabellen gebruikt: `Color` en `Size`. Beide tabellen hebben een achtergrondkleur gekregen, om elke soort `join` te verduidelijken.

<table class="styledTable" style="max-width: 400px">
 <tr style="background-color: white">
  <th colspan="2" style="text-align: right">
   Color
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   id
  </th>
  <th>
   color
  </th>
 </tr>
 
 <tr style="background-color: lightblue">
  <td>
   1
  </td>
  <td>
   red
  </td>
 </tr>
 
 <tr style="background-color: lightblue">
  <td>
   2
  </td>
  <td>
   blue
  </td>
 </tr>
</table>


<table class="styledTable" style="max-width: 400px">
 <tr style="background-color: white">
  <th colspan="2" style="text-align: right">
   Size
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   id
  </th>
  <th>
   size
  </th>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td>
   1
  </td>
  <td>
   small
  </td>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td>
   3
  </td>
  <td>
   medium
  </td>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td>
   4
  </td>
  <td>
   large
  </td>
 </tr>
</table>

## Cross Join

Een `cross join` maakt een tabel met alle fields uit tabel A en B. Elke record in de nieuwe tabel is een mogelijke combinatie tussen een record uit tabel A en een record uit tabel B.

```sql
SELECT * 
FROM 
 Color 
 CROSS JOIN 
 Size
```

<table class="styledTable" style="max-width: 600px">
 <tr style="background-color: white">
  <th colspan="4" style="text-align: right">
   Cross Join
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   Color.id
  </th>
  <th>
   Color.color
  </th>
  <th>
   Size.id
  </th>
  <th>
   Size.size
  </th>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
1
  </td>
  <td>
small
  </td>
 </tr>

 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
2
  </td>
  <td style="background-color: lightblue">
blue
  </td>
  <td>
1
  </td>
  <td>
small
  </td>
 </tr>

 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
3
  </td>
  <td>
medium
  </td>
 </tr>

 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
2
  </td>
  <td style="background-color: lightblue">
blue
  </td>
  <td>
3
  </td>
  <td>
medium
  </td>
 </tr>

 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
4
  </td>
  <td>
large
  </td>
 </tr>

 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
2
  </td>
  <td style="background-color: lightblue">
blue
  </td>
  <td>
4
  </td>
  <td>
large
  </td>
 </tr>
</table>

## (Inner) Join

Een `inner join` (vaak ook afgekort tot `join`) is een `cross join` waarin enkel de rijen staan die voldoen aan een voorwaarde.

```sql
SELECT * 
FROM 
 Color 
 INNER JOIN 
 Size
 ON Color.id = Size.id
```

<table class="styledTable" style="max-width: 600px">
 <tr style="background-color: white">
  <th colspan="4" style="text-align: right">
   Inner Join
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   Color.id
  </th>
  <th>
   Color.color
  </th>
  <th>
   Size.id
  </th>
  <th>
   Size.size
  </th>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
1
  </td>
  <td>
small
  </td>
 </tr>
</table>

## Left (Outer) Join

Een `left outer join` (ook wel `left join` genoemd) is, net als de `inner join`, een `join` met een voorwaarde. Het resultaat hiervan is een `inner join`, met daarbij ook **alle rijen uit de eerste tabel die niet aan de voorwaarde voldoen**. De kolommen uit de tweede tabel worden met een `null` waarde ingevuld.


```sql
SELECT * 
FROM 
 Color 
 LEFT OUTER JOIN 
 Size
 ON Color.id = Size.id
```

<table class="styledTable" style="max-width: 600px">
 <tr style="background-color: white">
  <th colspan="4" style="text-align: right">
   Left Outer Join
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   Color.id
  </th>
  <th>
   Color.color
  </th>
  <th>
   Size.id
  </th>
  <th>
   Size.size
  </th>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
1
  </td>
  <td>
small
  </td>
 </tr>
 
 <tr style="background-color: white">
  <td style="background-color: lightblue">
2
  </td>
  <td style="background-color: lightblue">
blue
  </td>
  <td>
null
  </td>
  <td>
null
  </td>
 </tr>
</table>

## Right (Outer) Join

Een `right outer join` (ook wel `right join` genoemd) is, net als de `inner join`, een `join` met een voorwaarde. Het resultaat hiervan is een `inner join`, met daarbij ook **alle rijen uit de tweede tabel die niet aan de voorwaarde voldoen**. De kolommen uit de eerste tabel worden met een `null` waarde ingevuld.


```sql
SELECT * 
FROM 
 Color 
 LEFT OUTER JOIN 
 Size
 ON Color.id = Size.id
```

<table class="styledTable" style="max-width: 600px">
 <tr style="background-color: white">
  <th colspan="4" style="text-align: right">
   Right Outer Join
  </th>
 </tr>
 
 <tr style="background-color: white">
  <th>
   Color.id
  </th>
  <th>
   Color.color
  </th>
  <th>
   Size.id
  </th>
  <th>
   Size.size
  </th>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: lightblue">
1
  </td>
  <td style="background-color: lightblue">
red
  </td>
  <td>
1
  </td>
  <td>
small
  </td>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: white">
null
  </td>
  <td style="background-color: white">
null
  </td>
  <td>
3
  </td>
  <td>
medium
  </td>
 </tr>
 
 <tr style="background-color: lightgreen">
  <td style="background-color: white">
null
  </td>
  <td style="background-color: white">
null
  </td>
  <td>
4
  </td>
  <td>
large
  </td>
 </tr>
</table>


# Voorwaarden en Relaties

Bij de `inner join`, `left join` en `right join` wordt een voorwaarde meegegeven met behulp van het `on` keyword. Deze voorwaarde drukt het verband uit tussen tabel A en tabel B: namelijk, welke velden komen voor in tabel A èn tabel B, en bevatten dezelfde semantische gegevens? In het overgrote deel van situaties is dit verband een refererende sleutel die verwijst naar een primaire sleutel. 

Het databankontwerp toont heel duidelijk welke verbanden je kan gebruiken om twee tabellen samen te voegen. Staat er een pijl tussen twee tabellen? Dan is er een verband tussen de tabellen.

Bijvoorbeeld: 

In de muziekschooldatabase bevat het veld `Stuk.componist` dezelfde semantische gegevens als `Componist.nr`. Het is dus mogelijk om een verband tussen deze twee tabellen te maken.
Dit is ook zichtbaar in het databankontwerp: `Stuk.componist` is een refererende sleutel naar `Componist.nr`, wat ook duidelijk is aangegeven met een pijl tussen de twee velden.

Een inner join tussen deze twee tabellen ziet er dus zo uit:


```sql
SELECT * 
FROM 
 Stuk
 INNER JOIN 
 Componist
 ON Stuk.componist = Componist.nr
```
