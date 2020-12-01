---
title: Inleiding SQL
tags: 
 - SQL
 - keyword
 - identifier
 - relationele databank
 - tabel
 - record
 - field
 - cel
 - atomair
definitions: 
 - name: SQL
   definition: Een databanktaal die gebruik maakt van gestructureerde opdrachten om te communiceren met een databank.
 - name: keyword
   definition: Een woord dat vastgelegd is door de SQL-taal.
 - name: identifier
   definition: Een woord dat gekozen is door de programmeur.
description: Net zoals een programmeertaal wordt gebruikt om te communiceren met een computer, wordt een databanktaal gebruikt om met een databank te communiceren. Een databanktaal maakt gebruik van opdrachten om te communiceren met de databank. SQL is één van de meest gebruikte databanktalen ter wereld.
---

# Inleiding

## Wat is SQL?

Net zoals een programmeertaal wordt gebruikt om te communiceren met een computer, wordt een databanktaal gebruikt om met een databank te communiceren. Een databanktaal maakt gebruik van opdrachten om te communiceren met de databank. 

Deze opdrachten worden ook Query’s genoemd.  SQL staat dan ook voor Structured Query Language. Een Query kan slechts een beperkt aantal dingen doen:

 - Records opvragen / toevoegen / aanpassen / verwijderen
 - Tabellen toevoegen / verwijderen
 - Tabellen aanpassen door:
 - Velden toevoegen / aanpassen / verwijderen
 
## Keywords en Identifiers

Een SQL-query is een soort 'zin' met daarin 'woorden' en symbolen. Er zijn daarbij twee soorten 'woorden':

 1. **Keywords**: deze woorden zijn vastgelegd door de SQL-taal. <br>
    Bv.: SELECT, AS, …
 2. **Identifiers**: woorden die gekozen zijn door de programmeur. <br>
    Bv.: de namen van tabellen en kolommen, een kolom-alias, …

Identifiers moeten aan een aantal voorwaarden voldoen:

 - Ze mogen niet overeenkomen met een keyword.
 - Ze mogen enkel bestaan uit letters, cijfers en underscores (_)
 - Ze moeten beginnen met een letter

## Relationele databanken

Het is belangrijk om te begrijpen wat een relationele databank is, voordat de SQL taal en syntax wordt uitgelegd.

Een relationele databank is **een verzameling tabellen die met elkaar verbonden zijn**. Een tabel bestaat uit **rijen en kolommen**. Elke tabel in een relationele databank moet aan bepaalde voorwaarden voldoen:

 - Elke rij moet **uniek** zijn: twee rijen mogen nooit helemaal hetzelfde zijn (geen duplicaten).
 - **de volgorde** van de rijen en kolommen **maakt geen verschil**: het verplaatsen van rijen en/of kolommen heeft geen invloed op de betekenis van de bewaarde gegevens.
 - De gegevens in **elke cel** moeten **atomair** zijn: er mag maar één waarde van het attribuut in voorkomen. Er worden dus geen samengestelde of afgeleide attributen opgeslagen.

Een tabel dient om een entiteit (bijvoorbeeld “Honden”) te definiëren. Elke rij in de tabel kan dan gebruikt worden om een bepaalde soort hond (Beagle, Pug, Labrador) aan te duiden. De kolommen duiden dus de gemeenschappelijke eigenschappen aan van elke rij (elke hond heeft bijvoorbeeld een vachtkleur, staartlengte, …)

Als de Overheidsdienst Mobiliteit een database heeft, bevindt zich daar waarschijnlijk een tabel in met alle voertuigen die mensen in België gebruiken. Deze tabel zou bijvoorbeeld de modelnaam, het type, aantal wielen en aantal deuren kunnen bijhouden.

<table class="styledTable">
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

SQL wordt gebruikt om specifieke vragen over deze gegevens te kunnen beantwoorden:

 - Welke types voertuigen bestaan er met minder dan 4 wielen?
 - Hoeveel modellen worden gemaakt door het merk Tesla?
 
### Velden

De kolommen van een tabel noemen we ook wel de **velden** (fields). In bovenstaand voorbeeld staan 5 velden: Id, Merk/Model, #Wielen, #Deuren en Type.

Elk veld moet aan bepaalde voorwaarden voldoen:

 - elk veld krijgt een duidelijke naam die binnen zijn tabel uniek is. 
   - Je kunt bijvoorbeeld in één tabel geen twee velden hebben met allebei de naam “Adres”.
 - het veld duidelijk valt te onderscheiden van alle andere velden in de tabel. 
   - Je moet er bijvoorbeeld voor zorgen dat je je velden niet “Adres 1” en “Adres 2” noemt, maar wel “thuisadres” en “werkadres”.

### Records

De rijen van een tabel noemen we ook wel de **records**. In het voorbeeld hierboven staan 5 records. Het eerste record in deze tabel is: 

 - Id: 1 / Merk/Model: ‘Ford Focus’ / #Wielen: 4 / #Deuren: 4 / Type: ‘Sedan’
 
## SQL databanken

Een SQL databank is een relationele databank die de SQL taal kan gebruiken. Het is één van de meest gebruikte databank-systemen ter wereld vanwege z’n eenvoud, veiligheid en mogelijkheden tot uitbreiding.

Er bestaan een heleboel verschillende soorten SQL databanken:

 - SQLite
 - MySQL
 - Postgres
 - Oracle
 - Microsoft SQL Server
 - ...
 
Al deze databanken kunnen gebruikt worden met de standaard SQL queries die je in deze cursus zal leren. In deze cursus wordt gebruik gemaakt van MySQL.

**Opgepast!** Elk van deze databanksystemen heeft de SQL databanktaal echter op z’n eigen manier uitgebreid met extra queries, datatypes en andere functies. Het kan dus zijn dat sommige queries op een andere manier geschreven worden, afhankelijk van het type databank.
