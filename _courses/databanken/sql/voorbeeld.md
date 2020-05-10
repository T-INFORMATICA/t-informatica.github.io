---
title: Muziek Database
tags: 
 - populatie
 - voorbeeldpopulatie
 - illustratieve populatie
 - primaire sleutel
 - alternatieve sleutel
definitions: 
 - name: populatie
   definition: De verzameling van alle records van een tabel.
 - name: voorbeeldpopulatie
   definition: Een populatie die de databank van records voorziet voor elke tabel. Het is mogelijk dat deze populatie niet alle uitzonderlijke gevallen bevat.
 - name: illustratieve populatie
   definition: Een populatie die de databank van records voorziet die alle uitzonderlijke gevallen bevatten.
description: Met dit voorbeeld wordt een volledig uitgewerkte tabel aangereikt, waarmee je aan de slag kunt gaan om SQL te oefenen.
---

# Muziek Database

In deze cursus wordt een voorbeelddatabase gebruikt: de Muziekdatabase.

De Muziekdatabase is in gebruik bij een organisatie die verschillende muziekscholen beheert. Die muziekscholen kunnen een database van muziekstukken raadplegen.

Veel stukken zijn door leraren van de scholen zelf gecomponeerd of bewerkt. Bij niet-originele stukken (bewerkingen) kan informatie over het originele muziekstuk worden opgezocht.

Elk stuk heeft een genre (bijvoorbeeld jazz) en een niveau (bijvoorbeeld A = eenvoudig). 

Sommige muziekstukken zijn niet bedoeld om te spelen, maar staan alleen in de databank als referentie. De echte muziekstukken zijn degenen waaraan een niveau is toegekend. Hiervan is altijd de instrumentbezetting (welke instrumenten er gebruikt worden) opgenomen.

De maker van een muziekstuk is de componist (ook als het muziekstuk een bewerking is van iets anders).

<img src="{{ site.baseurl }}/assets/img/muziekdatabase_1.png" alt="klassediagram" style="height: auto; max-width: 100%">

 - Een muziekschool wordt geïdentificeerd door een unieke code (primaire sleutel) en tevens door een unieke naam (alternatieve sleutel).
 - Van elke muziekschool is de plaats(naam) vermeld. Men heeft het niet nodig gevonden deze te standaardiseren, vandaar dat een aparte tabel Plaats ontbreekt.
 - Componisten worden op een vergelijkbare manier geïdentificeerd met een uniek nummer (nr). Ook zij hebben een unieke naam. Daarnaast kunnen een geboortedatum en de muziekschool waaraan zij verbonden zijn worden opgenomen.
 - Stukken hebben een uniek stuknummer (primaire sleutel). De alternatieve sleutel over componist en titel impliceert dat stukken van één componist verschillende titels moeten hebben. De optionele kolom origineel bevat voor bewerkingen een (recursieve) verwijzing naar het origineel. Verder hoort elk stuk tot een genre en hebben de meeste stukken (de echte muziekstukken) ook een niveau. Voor genres en niveaus zijn er standaardisatietabellen Genre en Niveau. Tot slot kan bij ieder stuk de speelduur worden opgenomen en heeft elk stuk een jaartal.
 - De tabel Bezettingsregel geeft voor elk speelstuk de bezetting. Ziet men een muziekstuk als een muzikaal gerecht, dan zou men kunnen zeggen dat Bezettingsregel de ingrediënten bevat.
 - Instrument bevat de gestandaardiseerde instrumenten.

Hieronder staat tot slot nog een voorbeeldpopulatie van de databank.

<img src="{{ site.baseurl }}/assets/img/muziekdatabase_2.png" alt="klassediagram" style="height: auto; max-width: 100%">
