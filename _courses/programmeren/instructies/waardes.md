---
title: Waardes
tags: 
 - waarde
 - datatype
 - bool
 - integer
 - decimal
 - string
 - binair
definitions: 
 - name: waarde
   definition: Eender wat door een computer kan worden opgeslagen.
 - name: datatype
   definition: De soort, type of categorie van een waarde.
description: Hoe kijkt een computer naar de wereld?
---

## Over `0` en `1`

Computers zijn binaire machines: het enige dat ze kennen (en nodig hebben) zijn `0` en `1`! Dit is een groot voordeel. Het idee achter een computer is eigenlijk heel erg simpel: je slaat een hoop `0`-en en `1`-en op in het computergeheugen, voert daar enkele bewerkingen mee uit en krijgt een heleboel nieuwe `0`-en en `1`-en. 

Het grote nadeel is dat een computer heel moeilijk is om mee te werken: hoe ga je alles dat een mens wilt doen met een computer omzetten naar die `0`-en en `1`-en? Hiervoor dienen programmeertalen. Een programmeertaal is dus een taal die je schrijft met letters, cijfers en leestekens (zoals Engels, Frans of Nederlands), met de speciale eigenschap dat deze gemakkelijk kan worden omgezet in binaire code. **Een programmeertaal is dus gemaakt voor mensen, zodat onze ideeën omgezet kunnen worden in `0`-en en `1`-en**. Een speciaal programma, **de compiler**, zet deze programmeertaal vervolgens om in binaire code. 

Net zoals andere talen bestaat een programmeertaal uit een aantal bouwstenen. In het Nederlands gebruiken we onderwerpen, werkwoorden, lidwoorden, enz. als de bouwstenen om onze ideeën te kunnen uitspreken. Een programmeertaal heeft ook bouwstenen, maar deze zijn anders dan degene die je gewend bent. Een eerste, belangrijke bouwsteen zijn de waarden. **Waarden zijn de 'soorten dingen' die je kan opslaan in het computergeheugen.** Het idee achter deze waarden is heel simpel: we willen vermijden dat een programmeur met `0` en `1` moet werken, dus welke dingen zijn (a) gemakkelijk om te begrijpen voor een mens en (b) gemakkelijk om te zetten naar `0` en `1`?

 - Een **booleaanse waarde** is een waarde die 'waar' of 'niet waar' bevat(`true` of `false`). Voor ons mensen is dit een belangrijk en gemakkelijk te begrijpen idee (is de lucht blauw? Is mijn naam Sam? ...). Een booleaanse waarde is ook héél gemakkelijk om te zetten in binaire code: Hierbij zeggen we dat 0 gelijk is aan `false` en 1 gelijk is aan `true`. 
 - Een **integer waarde** is een geheel, decimaal getal (0, 8, -723, ...). Decimale getallen kunnen we dan weer gemakkelijk weergeven als een binaire code door meerdere `0`-en en `1`-en achter elkaar te plaatsen.
 - Een **decimale waarde** is een decimaal komma-getal. Door het komma-getal (waar wij mensen graag mee werken) achter de schermen om te zetten naar een wetenschappelijke notatie (bv. 7x10<sup>-6</sup>) kunnen we een kommagetal gemakkelijk opslaan als een reeks van binaire cijfers. In de praktijk gebruiken we een binaire, wetenschappelijke notatie, maar het is vooral belangrijk om te onthouden dat je ook komma-getallen kunt omzetten naar binaire code.
 - Een **string waarde** is een stukje tekst. Door met alle programmeurs onderling af te spreken dat we elke letter een bepaald binair getal toewijzen, kan een tekst worden vertaald door een reeks van binaire getallen.

 ## Datatypes

Deze vier soorten data, die we als programmeur datatypes noemen, zijn de 4 datatypes die we zullen gebruiken om elk programma te schrijven. Elk spel dat je speelt, elke tekstverwerker die je gebruikt, elk tekenprogramma waar je mee tekent zal enkel en alleen bestaan uit deze 4 data types. De vier datatypes zijn dus: booleaanse waardes, integers, decimals en strings. 

In sommige programmeertalen zijn er voor deze datatypes nog enkele variaties. Zo zal je voor decimals weleens de benaming **float** en **double** tegenkomen. Dit heeft veelal te maken met het aantal nullen en enen waarmee het getal gevormd is. Een double heeft twee keer zoveel nullen en enen als een float.