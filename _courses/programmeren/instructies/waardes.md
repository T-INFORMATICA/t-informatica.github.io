---
title: Waardes
tags: 
 - waarde
 - datatype
 - bool
 - integer
 - decimal
 - string
definitions: 
 - name: waarde
   definition: Eender wat door een computer kan worden opgeslagen.
 - name: datatype
   definition: De soort, type of categorie van een waarde.
description: Hoe kijkt een computer naar de wereld?
---

## Simulatie

Computers zijn gemaakt om de realiteit te benaderen. We noemen dat ook weleens 'simuleren'. De manier waarop die realiteit wordt benaderd is door de realiteit te reduceren tot waardes. 

Als programmeur proberen we die simulatie te beperken tot de meest simpele soort waardes die we kunnen weergeven met 0 en 1:
 - De simpelste basiswaarden die we kunnen weergeven met 0 en 1 is een booleaanse waarde. Een booleaanse waarde is niet meer dan 'waar' of 'niet waar' (`true` of `false`). Hierbij zeggen we dat 0 gelijk is aan 'niet waar' en een gelijk is aan 'waar'. 
 - Meerdere nullen en enen achter elkaar schrijven kunnen we binaire getallen maken. Binaire getallen zijn gemakkelijk om te zetten naar decimale waarde. Met andere woorden, we kunnen meerdere nullen en een gebruiken om gehele getallen voor te stellen. Binnen programmeren noemen we deze gehele getallen integers. 
 - Wanneer we meerdere nullen en enen gebruiken om een getal weer te geven kunnen we enkele van die nullen in ene gebruiken om te zeggen waar het decimale teken staat. Het is dus ook mogelijk om met behulp van binaire getallen decimale getallen te maken. 
 - Het is ook mogelijk om als programmeur onderling af te spreken dat we elke letter een bepaald binair getal toewijzen. Als we daar boven afspreken dat binaire getallen die beginnen met een bepaalde volgorde van 0 en ene moeten worden gelezen als een letter, dan is het dus ook mogelijk om letters voor te stellen met binaire cijfers. Een bekend voorbeeld van zo'n lijst met letters is de ASCII standaard.

 ## Datatypes

Deze vier soorten data, die we als programmeur datatypes noemen, zijn de 4 datatypes die we zullen gebruiken om elk programma te schrijven. Elk spel dat je speelt, Welke tekstverwerker die je gebruikt, welk tekenprogramma waar je mee tekent zal enkel en alleen bestaan uit deze 4 data types. De vier data types zijn dus: booleaanse waardes, integers, decimals, Strings. In sommige programmeertalen zijn er voor deze datatypes nog enkele variaties. Zo zal je voor decimals weleens de benaming float en dubbel tegenkomen. Dit heeft veelal te maken met het aantal nullen en enen waarmee het getal gevormd is. Een dubbel heeft twee keer zoveel nullen en enen als een float.