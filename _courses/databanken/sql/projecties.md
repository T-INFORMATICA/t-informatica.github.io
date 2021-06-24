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

```sql
select componist, titel, niveau
from Stuk;
```

Resultaat:

{:.styledTable}
| COMPONIST | TITEL          | NIVEAU       |
| --------- | -------------- | ------------ |
| 1         | Blue bird      | &lt;null&gt; |
| 2         | Blue bird      | B            |
| 4         | Air pour       | charmer B    |
| 5         | Lina           | B            |
| 8         | Berceuse       | &lt;null&gt; |
| 2         | Cradle song    | B            |
| 8         | Non piu andrai | &lt;null&gt; |
| 9         | I'll never go  | A            |
| 10        | Swinging Lina  | B            |
| 5         | Little Lina    | A            |
| 10        | Blue sky       | A            |


Een projectie op alle kolommen kan ook. De afkorting hiervoor is een asterisk (`*`).

```sql
select *
from Stuk;
```

## Constanten in Select Queries

Een projectie moet niet alleen kolomnamen bevatten. Dit mag ook een constante zijn, bijvoorbeeld een constant stukje tekst, een constant getal of een constante datum:

```sql
select componist, titel, 'heeft als niveau', niveau
from Stuk;
```

Resultaat:


{:.styledTable}
| COMPONIST | TITEL            | heeft als niveau | NIVEAU       |
| --------- | ---------------- | ---------------- | ------------ |
| 1         | Blue bird        | heeft als niveau | &lt;null&gt; |
| 2         | Blue bird        | heeft als niveau | B            |
| 4         | Air pour charmer | heeft als niveau | B            |
| 5         | Lina             | heeft als niveau | B            |
| 8         | Berceuse         | heeft als niveau | &lt;null&gt; |
| 2         | Cradle song      | heeft als niveau | B            |
| 8         | Non piu andrai   | heeft als niveau | &lt;null&gt; |
| 9         | I'll never go    | heeft als niveau | A            |
| 10        | Swinging Lina    | heeft als niveau | B            |
| 5         | Little Lina      | heeft als niveau | A            |
| 10        | Blue sky         | heeft als niveau | A            |


<!--
## Expressies in Select Queries

Een select-query mag ook expressies bevatten. De waarde van die expressie wordt dan berekend uit kolomwaardes en/of constanten.

```sql
select naam || ' is gevestigd in ' || plaats
from Muziekschool;
```

De expressie hierboven heet een concatenation. Een concatenation is het samenvoegen van tekst-waarden zodat het één tekst wordt.

<table class="styledTable">
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

```sql
select nr as stuk,
       titel,
       speelduur * 1.1 as effectieve_speelduur
from Stuk;
```

Hierboven krijgt de kolom nr de nieuwe naam stuk. De kolom met de expressie speelduur * 1.1 krijgt de nieuwe naam effectieve_speelduur. Hiervoor wordt het keyword as gebruikt.

## Distinct

Eén van de basisregels van een tabel in een relationele databank is dat alle rijen uniek moeten zijn. In een projectie gebeurt het echter heel vaak dat rijen meerdere keren voorkomen.

Bijvoorbeeld:

```sql
select genre, niveau
from Stuk;
```

Resultaat:

{:.styledTable}
| GENRE    | NIVEAU       |
| -------- | ------------ |
| jazz     | &lt;null&gt; |
| jazz     | B            |
| klassiek | B            |
| klassiek | B            |
| klassiek | &lt;null&gt; |
| klassiek | B            |
| klassiek | &lt;null&gt; |
| pop      | A            |
| jazz     | B            |
| klassiek | A            |
| jazz     | A            |


In deze projectie staan 11 rijen, waarvan enkele meerdere keren voorkomen. Dit kan soms handig zijn, maar vaak ook niet. Moest de projectie een èchte relationele tabel zijn, dan zouden er maar 7 rijen staan. 

Om de dubbele rijen weg te laten, moet er een speciaal keyword worden gebruikt in de select-query: `distinct`.

```sql
select distinct genre, niveau
from Stuk;
```

Resultaat:

{:.styledTable}
| GENRE    | NIVEAU       |
| -------- | ------------ |
| jazz     | &lt;null&gt; |
| jazz     | A            |
| jazz     | B            |
| klassiek | &lt;null&gt; |
| klassiek | A            |
| klassiek | B            |
| pop      | A            |



{:.warning}
> **Opgelet!** `Distinct` werkt op de **volledige projectie**, en niet op één enkele kolom.
