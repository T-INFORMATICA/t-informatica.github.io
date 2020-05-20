---
title: Fouten in Relationele Databanken
tags: 
 - redundantie
 - herhalende groep
 - niet-gestandaardiseerde waarde
 - samengestelde data
 - enkelvoudige data
 - cel
 - record
 - field
definitions: 
 - name: redundantie
   definition: Een fout in het databankontwerp waardoor bepaalde informatie meer dan één keer wordt opgeslagen.
 - name: herhalende groep
   definition: Een fout in het databankontwerp waarbij een een waarde uit meerdere kolommen, meerdere rijen of een combinatie van de twee bestaat.
 - name: niet-gestandaardiseerde waarde
   definition: Een fout in het databankontwerp waarbij twee of meer waardes die dezelfde betekenis hebben, toch verschillend zijn in de databank.
 - name: samengestelde data
   definition: Data die bestaat uit meerdere waardes.
 - name: enkelvoudige data
   definition: Data die bestaat uit één waarde.
 - name: cel
   definition: De plaats waar een rij en een kolom kruisen.
description: Wanneer je niet gewend bent om te werken met relationele databanken zijn sommige fouten snel gemaakt. In dit hoofdstuk leer je die fouten te herkennen en vermijden.
---

# FOUTEN IN RELATIONELE DATABANKEN

De structuur van een relationele database bepaalt welke tabellen een database heeft, waarom juist die tabellen, en wat die tabellen met elkaar te maken hebben.

## Hoe het niet moet

In dit onderdeel wordt een databasestructuur besproken waarbij **alle gegevens in één tabel** worden geplaatst. **Dit is géén goede databasestructuur.**

Waarom deze structuur niet goed is wordt hier uitgelegd. Daarbij komen drie belangrijke begrippen aan de orde: **redundantie**, **herhalende groepen** en **niet-gestandaardiseerde waardes**.

In dit hoofdstuk wordt getoond hoe je deze fouten herkend. In een volgend hoofdstuk leer je hoe je deze fouten oplost en voorkomt.

### Kenmerken van recepten

Hieronder staat één van de drie voorbeeld recepten.

<table class="styledTable">
<thead><tr><th>gerecht</th><td colspan="5">Coupe Kiwano</td></tr></thead><tbody>
 <tr><th>bereidingstijd (minuten)</th><td colspan="5">20</td></tr>
 <tr><th>bereidingswijze</th><td colspan="5">Schil de kiwano, snijd hem in stukjes, voeg de tequila toe en laat dit mengsel 15 minuten staan. Neem per persoon 3 bolletjes ijs en voeg hier de kiwano met tequila aan toe. Serveer met gezoete, stijfgeslagen slagroom.</td></tr>
 <tr><th rowspan="6">ingrediënten</th><th>product</th><th>hoeveelheid per persoon</th><th>eenheid</th><th>energie per eenheid (kcal)</th></tr>
 <tr><td>ijs</td><td>0.15</td><td>liter</td><td>1600</td></tr>
 <tr><td>kiwano</td><td>0.5</td><td>stuks</td><td>40</td></tr>
 <tr><td>slagroom</td><td>0.3</td><td>deciliter</td><td>336</td></tr>
 <tr><td>suiker</td><td>10</td><td>gram</td><td>4</td></tr>
 <tr><td>tequila</td><td>1</td><td>eetlepel</td><td>30</td></tr>
</tbody></table>

Per recept zijn vier kenmerken opgenomen:

 - de naam van het gerecht
 - de bereidingstijd
 - de bereidingswijze
 - de ingredienten
 
**De eerste 3 kenmerken** (naam, bereidingstijd en bereidingswijze) zijn allemaal **enkelvoudige data**: ze bevatten allemaal slechts **één waarde**. Enkelvoudige data bestaat meestal uit tekst ("Coupe Kiwano") of een getalwaarde ("403").

**Het 4de kenmerk**, de ingrediënten, bevat **samengestelde data**: hierin bevindt zich niet één waarde, maar een hele subtabel van waardes. Samengestelde data bestaat dus uit **meerdere waardes** (een lijst, een subtabel, …). Elke rij van deze subtabel bevat de gegevens van één ingrediënt:

 - de productnaam van het ingrediënt
 - de hoeveelheid per persoon
 - de maateenheid waarin het product wordt gemeten
 - een kolom ‘energie per eenheid’, gemeten in kcal

### Eén tabel met subtabellen

Alle recepten en hun ingredienten kunnen we samenbrengen in één grote tabel genaamd Recept. Om de tabel wat kleiner en leesbaarder te maken zijn sommige namen van kolommen veranderd ("hoeveelheid per persoon" wordt "hoeveelheid PP"). 

<table class="styledTable">
   <tr>
      <th rowspan="2">naam</th>
      <th rowspan="2">energiePP</th>
      <th rowspan="2">bereidingstijd</th>
      <th rowspan="2">bereidingswijze</th>
      <th colspan="4">ingrediënten</th>
   </tr>
   <tr>
      <th>product</th>
      <th>hoeveelheidPP</th>
      <th>eenheid</th>
      <th>energiePE</th>
   </tr>
   <tr>
      <td rowspan="5">Coupe Kiwano</td>
      <td rowspan="5">431</td>
      <td rowspan="5">20</td>
      <td rowspan="5">Schil </td>
      <td>ijs</td>
      <td>0.15</td>
      <td>liter</td>
      <td>1600</td>
   </tr>
   <tr>
      <td>kiwano</td>
      <td>0.5</td>
      <td>stuks</td>
      <td>40</td>
   </tr>
   <tr>
      <td>slagroom</td>
      <td>0.3</td>
      <td>deciliter</td>
      <td>336</td>
   </tr>
   <tr>
      <td>suiker</td>
      <td>10</td>
      <td>gram</td>
      <td>4</td>
   </tr>
   <tr>
      <td>tequila</td>
      <td>1</td>
      <td>eetlepel</td>
      <td>30</td>
   </tr>
   <tr>
      <td rowspan="4">Glace Terrace</td>
      <td rowspan="4">403</td>
      <td rowspan="4">5</td>
      <td rowspan="4">Neem </td>
      <td>ijs</td>
      <td>0.2</td>
      <td>liter</td>
      <td>1600</td>
   </tr>
   <tr>
      <td>aardbeien</td>
      <td>50</td>
      <td>gram</td>
      <td>0.25</td>
   </tr>
   <tr>
      <td>pernod</td>
      <td>2</td>
      <td>eetlepel</td>
      <td>35</td>
   </tr>
   <tr>
      <td>peper</td>
      <td> </td>
      <td> </td>
      <td> </td>
   </tr>
   <tr>
      <td rowspan="3">Mango Plus Plus</td>
      <td rowspan="3">131</td>
      <td rowspan="3">8</td>
      <td rowspan="3">Snij </td>
      <td>mango</td>
      <td>0.5</td>
      <td>stuks</td>
      <td>80</td>
   </tr>
   <tr>
      <td>aardbeien</td>
      <td>50</td>
      <td>gram</td>
      <td>0.25</td>
   </tr>
   <tr>
      <td>zure room</td>
      <td>0.4</td>
      <td>deciliter</td>
      <td>195</td>
   </tr>
</table>



Elke rij stelt in deze tabel één "ding" voor (een recept). Een **rij** wordt daarom een **record** genoemd: het houdt alle gegevens bij (engels: 'to record') van één "ding" in de tabel.

Elke kolom stelt in deze tabel één "eigenschap van een ding" voor (onderdeel van een recept). Een **kolom** wordt een **field** (veld) genoemd. Elk veld heeft een **kolomnaam**.

**Belangrijk!** De volgorde waarin rijen en kolommen staan maakt geen verschil voor de tabel.

De kolom genaamd **"ingrediënten" is één kolom**. Dit is een **samengestelde kolom**. Met andere woorden, deze kolom bestaat uit meerdere subkolommen. 

De plaats waar een rij en een kolom kruisen heet een **cel**. Dit is de plaats waar een waarde wordt ingevuld. Op die manier weet je dat "20" de waarde is van "Coupe Kiwano" voor het veld "bereidingstijd".

De cellen in de kolom "ingrediënten" bevatten een samengestelde waarde: elke cel bevat een subtabel met daarin weer 4 aparte kolommen.
Er zijn 3 belangrijke problemen met deze tabel:

 1. **Redundantie**: bepaalde informatie wordt meer dan één keer opgeslagen.
 2. **Herhalende groepen**: een tabelstructuur met subtabellen maakt het databasebeheer erg ingewikkeld.
 3. **Structuur problemen**: Ingrediënten worden alléén als onderdeel van een recept opgeslagen, terwijl ingrediënten eigenlijk ook een 'soort ding' zijn dat losstaat van een recept.

### Redundantie
Op dit moment wordt op twee verschillende plaatsen vermeld dat ijs gemeten wordt in 'liter'. Dit is vaker dan nodig is: producten in Désiré's Dessertenboek worden altijd in dezelfde eenheid gemeten (IJs bijvoorbeeld in liter en aardbeien in gram).

Wanneer er dus bij Coupe Kiwano staat dat ijs in liter wordt gemeten, weet je zonder verder te kijken dat dit ook voor Glace Terrace geldt, en omgekeerd. 

Dit heet **redundantie**. Redundant betekent overtollig: je kan een gegeven ergens anders ook al terugvinden in de databank. Ook de subkolom energiePE heeft redundante gegevens, want voor ijs wordt twee keer vermeld wat de energiewaarde is.

Redundantie is slecht om twee redenen:

 1. **Extra opslagruimte**: je slaat sommige gegevens meerdere keren opnieuw op.
 2. **Gevaar voor inconsistente data**: Inconsistente data zijn waardes waarvan de betekenissen niet overeen komen. Redundantie brengt vaak het gevaar van inconsistentie met zich mee.

bijvoorbeeld: bij Coupe Kiwano staat dat ijs 1600 kilocalorie per maateenheid bevat, en bij Glace Terrace dat het 1450 is. Eén van de twee moet dan fout zijn. 

Redundantie kan nooit volledig weggewerkt worden, maar het doel is om redundantie tot een minimum te beperken.

### Herhalende groepen

Als een waarde uit meerdere kolommen, meerdere rijen of een combinatie van de twee bestaat, is dit een **herhalende groep**. Een goede databank kan data gemakkelijk **toevoegen, opvragen of aanpassen**. Herhalende groepen zorgen ervoor dat deze drie bewerkingen veel moeilijker worden. Dit maakt het **beheren van de databank veel moeilijker**.

#### Herhalend

Met 'herhalend' wordt bedoeld dat hetzelfde soort "ding" meerdere keren voorkomt in dezelfde cel. 

Bv.: 

| ijs |
| kiwano |
| slagroom |
| suiker | 
| tequila | 

#### Groep

Met 'groep' wordt bedoeld dat één "ding" uit meerdere waardes bestaat in dezelfde cel.

Bv.: 

| ijs | 0.15 | liter | 1600 | 

#### Toevoegen van Data

Wanneer een nieuw recept wordt toegevoegd, moet het invoegen van een nieuwe record gebeuren op twee verschillende niveau's:
 1. In de subtabel met ingrediënten, waar elk ingrediënt met z'n eigenschappen wordt ingevoerd.
 2. In de hoofdtabel, waar de rest van de gegevens van een recept wordt ingevoerd.

#### Aanpassen

Wanneer een eigenschap van een ingrediënt wordt aangepast, moet elk recept worden nagekeken, om zo op elke plaats waar dat ingrediënt aanwezig is het recept aan te passen.

Bv.: als het ingrediënt 'ijs' vanaf nu wordt uitgedrukt in 'kilogram' in plaats van 'liter', moet in elk recept worden nagekeken of er 'ijs' gebruikt wordt, en zo ja, moet daar 'liter' worden veranderd in 'kilogram'.

#### Opvragen

Om te weten welke recepten gebruik maken van het ingrediënt 'ijs' moet, net zoals bij het aanpassen, elk recept z'n ingrediënten-subtabel worden nagekeken of daar 'ijs' in voorkomt.

### Niet-gestandaardiseerde waardes
Een laatste probleem dat ook vaak voorkomt zijn verschillende waardes die dezelfde betekenis hebben. Een goed voorbeeld hiervan zijn de ingrediënten 'slagroom' en 'zure room': Slagroom wordt gemeten in 'deciliter', zure room wordt gemeten in 'dl'. Allebei de ingrediënten worden gemeten in dezelfde meeteenheid (namelijk deciliter), maar ze gebruiken een verschillende notatie.

Ook dit kan voor problemen zorgen, zeker bij het opvragen van gegevens. Als je alle ingrediënten wilt zoeken die de maateenheid 'deciliter' gebruiken, moet je dus zowel zoeken naar 'deciliter' als naar 'dl'.

**Niet-gestandaardiseerde waardes** zijn waardes die dezelfde betekenis hebben, maar toch verschillend zijn in de databank. Bijvoorbeeld: 'deciliter' en 'dl'.

### Tabellen omkeren

Tot nu toe hebben we elk recept als één "ding" gezien in de tabel, waarbij elk recept meerdere ingrediënten bevat. Daardoor werd de kolom 'ingrediënten' een herhalende groep.

Je zou ook omgekeerd kunnen denken: bekijk een ingrediënt als één "ding", waarbij elk ingrediënt meerdere recepten bevat. Het gevolg hiervan is dat de kolom 'recepten' een herhalende groep wordt.

De tabel heet dan 'Ingrediënt', met één rij per ingrediënt. Deze tabel heeft vervolgens vier kolommen, waarvan er één een samengestelde kolom is ('recepten').

**Beide voorbeelden hebben gelijkaardige problemen met redundantie en herhalende groepen.** Het is bovendien niet duidelijk welk voorbeeld 'beter' is dan de andere: beschouw je de recepten als "ding", of de ingrediënten? Je kan willekeurig kiezen welke van de twee je het liefst gebruikt, maar je komt altijd dezelfde problemen en fouten tegen.

Deze willekeur staat dan ook haaks op een goede structuur: De kracht van een goede structuur ligt in het gelijkwaardig behandelen van informatie, ongeacht wat de gebruiker later met die informatie doet of hoe de gebruiker die informatie bekijkt.

<table class="styledTable">
   <tr>
      <th rowspan="2">naam</th>
      <th rowspan="2">eenheid</th>
      <th rowspan="2">energiePE</th>
      <th colspan="4">gerechten</th>
   </tr>
   <tr>
      <th>gerecht</th>
      <th>bereidingstijd</th>
      <th>bereidingswijze</th>
      <th>hoeveelheidPP</th>
   </tr>
   <tr>
      <td rowspan="2">ijs</td>
      <td rowspan="2">liter</td>
      <td rowspan="2">1600</td>
      <td>Coupe Kiwano</td>
      <td>20</td>
      <td>Schil ...</td>
      <td>0.15</td>
   </tr>
   <tr>
      <td>Glace Terrace</td>
      <td>5</td>
      <td>Neem ...</td>
      <td>0.2</td>
   </tr>
   <tr>
      <td>kiwano</td>
      <td>stuks</td>
      <td>40</td>
      <td>Coupe Kiwano</td>
      <td>20</td>
      <td>Schil ...</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>slagroom</td>
      <td>deciliter</td>
      <td>336</td>
      <td>Coupe Kiwano</td>
      <td>20</td>
      <td>Schil ...</td>
      <td>0.3</td>
   </tr>
   <tr>
      <td>suiker</td>
      <td>gram</td>
      <td>4</td>
      <td>Coupe Kiwano</td>
      <td>20</td>
      <td>Schil ...</td>
      <td>10</td>
   </tr>
   <tr>
      <td>tequila</td>
      <td>eetlepel</td>
      <td>30</td>
      <td>Coupe Kiwano</td>
      <td>20</td>
      <td>Schil ...</td>
      <td>1</td>
   </tr>
   <tr>
      <td rowspan="2">aardbeien</td>
      <td rowspan="2">gram</td>
      <td rowspan="2">0.25</td>
      <td>Glace Terrace</td>
      <td>5</td>
      <td>Neem ...</td>
      <td>50</td>
   </tr>
   <tr>
      <td>Mango Plus Plus</td>
      <td>8</td>
      <td>Snijd ...</td>
      <td>50</td>
   </tr>
   <tr>
      <td>pernod</td>
      <td>eetlepel</td>
      <td>35</td>
      <td>Glace Terrace</td>
      <td>5</td>
      <td>Neem ...</td>
      <td>2</td>
   </tr>
   <tr>
      <td>peper</td>
      <td></td>
      <td></td>
      <td>Glace Terrace</td>
      <td>5</td>
      <td>Neem ...</td>
      <td></td>
   </tr>
   <tr>
      <td>mango</td>
      <td>stuks</td>
      <td>80</td>
      <td>Mango Plus Plus</td>
      <td>8</td>
      <td>Snijd ...</td>
      <td>0.5</td>
   </tr>
   <tr>
      <td>zure room</td>
      <td>deciliter</td>
      <td>195</td>
      <td>Mango Plus Plus</td>
      <td>8</td>
      <td>Snijd ...</td>
      <td>0.4</td>
   </tr>
</table>

Belangrijk! De kolom 'hoeveelheid PP' bevindt zich in beide voorbeelden in de subtabel. Dit komt doordat de hoeveelheid per persoon zowel afhangt van het recept als van het ingrediënt. 

Bv.: 

 - Zowel in Coupe Kiwano als in Glace Terrace gebruik je het ingrediënt 'ijs', maar in verschillende hoeveelheden per persoon.
 - In Coupe Kiwano gebruik je zowel het ingrediënt 'ijs' als het ingrediënt 'slagroom', maar in verschillende hoeveelheden per persoon.
