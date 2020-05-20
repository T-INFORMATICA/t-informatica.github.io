---
title: Voorbeeld Databank
tags: 
 - databank
 - relationele databank
definitions: 
 - name: databank
   definition: Een gestructureerde verzameling van data.
 - name: relationele databank
   definition: Een gestructureerde verzameling van data waarbij de opgeslagen data wordt onderverdeeld in tabellen.
description: Met dit voorbeeld kom je voor het eerst in aanraking met data. Bekijk dit voorbeeld goed, want met deze data zullen we proberen een goede databank in elkaar te steken.
---

# Désiré's Dessertenboek

Om elk onderwerp te verduidelijken wordt in deze cursus gebruik gemaakt van een verzonnen app genaamd "Désiré's Dessertenboek", een interactief receptenboek voor lekkere desserts. 

In Désiré's Dessertenboek kan je recepten van desserts opzoeken, de recepten aanpassen of je eigen recepten toevoegen. Je kan ook recepten zoeken volgens allerlei criteria (bv. snel klaar te maken, weinig calorieën, met of zonder aardbeien, …). Uit de informatie van elk ingredient wordt automatisch afgeleid hoeveel energie per persoon elk gerecht bevat, uitgedrukt in kilocalorieën (kcal).

De applicatie heeft ook enkele beperkingen: 

 - de ingrediënten worden altijd gemeten in dezelfde maateenheid.
   - Bv.: melk altijd in liters en bloem altijd in kilogram 
     (dus niet de ene keer in liters, de andere keer in soeplepels, …)
 - De bereidingstijd voor een gerecht is een vaste waarde, ongeacht het aantal personen.
 
 
<img src="{{ site.baseurl }}/assets/img/db-inleiding_1.png" alt="voorbeeld" style="height: auto; max-width: 100%">

### Toelichting
Het aantal personen kan door de gebruiker worden ingesteld; de initiële waarde is 4.

De hoeveelheden per ingrediënt van een gerecht worden door de applicatie berekend uit de hoeveelheden per persoon (niet zichtbaar) en het aantal personen.

De energie per persoon van een gerecht wordt door het rdbms berekend uit de opgeslagen hoeveelheden per persoon en de eveneens opgeslagen cal per eenheid.

### Voorbeeld recepten

Hieronder vindt je drie voorbeeld recepten. 

<table class="styledTable">
<thead><tr><th>gerecht</th><td colspan="4">Coupe Kiwano</td></tr></thead><tbody>
 <tr><th>bereidingstijd (minuten)</th><td colspan="4">20</td></tr>
 <tr><th>bereidingswijze</th><td colspan="4">Schil de kiwano, snijd hem in stukjes, voeg de tequila toe en laat dit mengsel 15 minuten staan. Neem per persoon 3 bolletjes ijs en voeg hier de kiwano met tequila aan toe. Serveer met gezoete, stijfgeslagen slagroom.</td></tr>
 <tr><th rowspan="6">ingrediënten</th><th>product</th><th>hoeveelheid per persoon</th><th>eenheid</th><th>energie per eenheid (kcal)</th></tr>
 <tr><td>ijs</td><td>0.15</td><td>liter</td><td>1600</td></tr>
 <tr><td>kiwano</td><td>0.5</td><td>stuks</td><td>40</td></tr>
 <tr><td>slagroom</td><td>0.3</td><td>deciliter</td><td>336</td></tr>
 <tr><td>suiker</td><td>10</td><td>gram</td><td>4</td></tr>
 <tr><td>tequila</td><td>1</td><td>eetlepel</td><td>30</td></tr>
</tbody></table>

----

<table class="styledTable">
<thead><tr><th>gerecht</th><td colspan="4">Mango Plus Plus</td></tr></thead><tbody>
 <tr><th>bereidingstijd (minuten)</th><td colspan="4">8</td></tr>
 <tr><th>bereidingswijze</th><td colspan="4">Snijd de - geschilde - mango in stukjes, meng deze met de gehalveerde aardbeien, en serveer dit met de zure room.</td></tr>
 <tr><th rowspan="4">ingrediënten</th><th>product</th><th>hoeveelheid per persoon</th><th>eenheid</th><th>energie per eenheid (kcal)</th></tr>
 <tr><td>mango</td><td>0.5</td><td>stuks</td><td>80</td></tr>
 <tr><td>aardbeien</td><td>50</td><td>gram</td><td>0.25</td></tr>
 <tr><td>zure room</td><td>0.4</td><td>deciliter</td><td>195</td></tr>
</tbody></table>
 
 ----

<table class="styledTable">
<thead><tr><th>gerecht</th><td colspan="4">Glace Terrace</td></tr></thead><tbody>
 <tr><th>bereidingstijd (minuten)</th><td colspan="4">5</td></tr>
 <tr><th>bereidingswijze</th><td colspan="4">Neem drie bolletjes ijs, voeg hieraan de gesneden aardbeien toe, besprenkel dit rijkelijk met pernod en maak dit bijzondere gerecht af met versgemalen peper.</td></tr>
 <tr><th rowspan="5">ingrediënten</th><th>product</th><th>hoeveelheid per persoon</th><th>eenheid</th><th>energie per eenheid (kcal)</th></tr>
 <tr><td>ijs</td><td>0.2</td><td>liter</td><td>1600</td></tr>
 <tr><td>aardbeien</td><td>50</td><td>gram</td><td>0.25</td></tr>
 <tr><td>pernod</td><td>2</td><td>eetlepel</td><td>35</td></tr>
 <tr><td>peper</td><td>&nbsp;</td><td>&nbsp;</td><td></td></tr>
</tbody></table>
