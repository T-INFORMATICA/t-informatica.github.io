---
title: Tabellen
tags: 
 - field
 - record
 - populatie
definitions: 
 - name: record
   definition: Een enkele rij in een tabel die alle gegevens van één entiteit opslaat.
 - name: field
   definition: Een enkele kolom die één eigenschap van een entiteit in de tabel voorstelt.
 - name: populatie
   definition: De verzameling van alle records van een tabel.
description: Elke relationele databank bestaat uit tabellen (ook wel relaties genoemd). Elke tabel moet voldoen aan enkele voorwaarden, zodat je een optimale databank kunt ontwerpen.
---

# TABELLEN

# Tabellen

Een tabel geeft één ding weer in een database. De kolommen van de tabel (fields) vertegenwoordigen de attributen van een entiteit. De rijen (records) zijn de ingevulde gegevens van een entiteit.

Bijvoorbeeld: een tabel Ingrediënt, dat bestaat uit een gerecht, product en hoeveelheid per persoon.

<table class="styledTable">
   <tr>
      <th>gerecht</th>
      <th>product</th>
      <th>hoeveelheidPP</th>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>ijs</td>
      <td>0.15</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>kiwano</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>slagroom</td>
      <td>0.3</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>suiker</td>
      <td>10</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>tequila</td>
      <td>1</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>ijs</td>
      <td>0.2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>pernod</td>
      <td>2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>peper</td>
      <td></td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>mango</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>zure room</td>
      <td>0.4</td>
   </tr>
</table>

Elke tabel in een relationele databank moet aan bepaalde voorwaarden voldoen:

 - Elke rij moet uniek zijn: twee rijen mogen nooit helemaal hetzelfde zijn (geen duplicaten).
 - de volgorde van de rijen en kolommen maakt geen verschil: het verplaatsen van rijen en/of kolommen heeft geen invloed op de betekenis van de bewaarde gegevens.
 - elke cel moet atomair zijn: er mag maar één waarde in voorkomen. Een cel kan dus geen lijst van waardes bevatten, of een waarde die is samengesteld.

### Records

De rijen van een tabel worden de records genoemd. De opgeslagen gegevens in een tabel vormen rij per rij een record.
In dit voorbeeld zijn er 12 records: 

<table class="styledTable">
   <tr>
      <th>gerecht</th>
      <th>product</th>
      <th>hoeveelheidPP</th>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>ijs</td>
      <td>0.15</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>kiwano</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>slagroom</td>
      <td>0.3</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>suiker</td>
      <td>10</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>tequila</td>
      <td>1</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>ijs</td>
      <td>0.2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>pernod</td>
      <td>2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>peper</td>
      <td></td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>mango</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>zure room</td>
      <td>0.4</td>
   </tr>
</table>

### Fields
De kolommen van een tabel worden de fields genoemd. Hierin worden de eigenschappen van een ding gedefinieerd. Ze bestaan uit 3 belangrijke onderdelen:
 - Een naam.
 - Een domein. Dit zijn de mogelijke waardes die je kan invoeren in de field.<br>
Bv.: alle natuurlijke getallen, text, waar/niet waar, ...
 - Verplicht of niet. Dit geeft aan of de field verplicht moet ingevuld worden of niet.

In dit voorbeeld zijn er 3 velden: 
 - Gerecht
 - Product
 - HoeveelheidPP
 
 <table class="styledTable">
   <tr>
      <th>gerecht</th>
      <th>product</th>
      <th>hoeveelheidPP</th>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>ijs</td>
      <td>0.15</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>kiwano</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>slagroom</td>
      <td>0.3</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>suiker</td>
      <td>10</td>
   </tr>
   <tr>
      <td>Coupe Kiwano</td>
      <td>tequila</td>
      <td>1</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>ijs</td>
      <td>0.2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>pernod</td>
      <td>2</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>peper</td>
      <td></td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>mango</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>aardbeien</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>zure room</td>
      <td>0.4</td>
   </tr>
</table>

Omdat de naam bepaalt wat er wordt opgeslagen in een veld is het belangrijk dat:

 - elk veld een duidelijke naam krijgt die binnen zijn tabel uniek is. 
 - Je kunt bijvoorbeeld in één tabel geen twee velden hebben met allebei de naam “Adres”.
 - het veld duidelijk te onderscheiden valt van alle andere velden in de tabel. <br>
Je moet er bijvoorbeeld voor zorgen dat je je velden niet “Adres 1” en “Adres 2” noemt, maar wel “thuisadres” en “werkadres”.

## Populaties

De populatie van een tabel bestaat uit alle records van die tabel.  De populatie van een database bestaat uit alle records van alle tabellen in die database.

Wanneer de populatie getoond wordt in het diagram heet dit een populatiediagram. Alle voorbeelden die tot nu toe werden gebruikt waren populatiediagrammen.

Wanneer de populatie wordt weggelaten, blijft enkel nog de structuur over. Dit heet dan een strokendiagram. Het strokendiagram van de tabel hierboven ziet er zo uit:

Bij het ontwerpen van een databank is de populatie niet van belang. Een populatie kan handig zijn om na te kijken of je structuur correct en volledig is, maar tijdens het ontwerpen wordt meestal gebruik gemaakt van een strokendiagram.
