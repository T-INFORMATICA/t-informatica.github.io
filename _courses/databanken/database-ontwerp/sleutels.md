---
title: Sleutels
tags: 
 - primaire sleutel
 - kandidaatsleutel
 - alternatieve sleutel
 - refererende sleutel
 - relatie
 - kindtabel
 - oudertabel
definitions: 
 - name: primaire sleutel
   definition: Een kolom of combinatie van kolommen die ervoor zorgt dat je een rij op unieke wijze kunt identificeren.
 - name: kandidaatsleutel
   definition: Alle kolommen of combinaties van kolommen die mogelijk als primaire sleutel gekozen kunnen worden.
 - name: alternatieve sleutel
   definition: Alle kolommen of combinaties van kolommen die mogelijk als primaire sleutel gekozen kunnen worden, maar geen primaire sleutel zijn.
 - name: refererende sleutel
   definition: een kolom waarvan de waarde verwijst naar een rij in een andere tabel, via de primaire sleutel van die tweede tabel. 
 - name: relatie tussen tabellen
   definition: Een link die gelegd wordt tussen twee tabellen door naar de primaire sleutel te verwijzen met een refererende sleutel.
 - name: kindtabel
   definition: De tabel in een relatie tussen tabellen die de refererende sleutel bevat.
 - name: oudertabel
   definition: De tabel in een relatie tussen tabellen die de primaire sleutel bevat waarnaar verwezen wordt.
description: Een relationele databank bestaat uit tabellen. Maar hoe zijn die tabellen met elkaar verbonden? In dit hoofdstuk wordt uitgelegd hoe sleutels hier een sleutelrol in spelen.
---

# Sleutels

## Primaire sleutel

Eén van de regels voor een tabel zegt dat elke rij (record) uniek moet zijn. We kunnen daarom zeggen dat één kolom of een combinatie van kolommen ervoor zorgt dat de rij uniek is. Deze kolom of combinatie van kolommen wordt de **primaire sleutel** genoemd. De primaire sleutel is dus altijd uniek binnen de tabel.
Een primaire sleutel van een tabel is een kolom of kolomcombinatie waarvoor geldt:

Hij is verplicht.
Hij is uniek.
Hij bestaat uit zo weinig mogelijk kolommen.

Soms kunnen meerdere kolommen of combinaties van kolommen als primaire sleutel gebruikt worden. Dit zijn dan **kandidaatsleutels**. In dat geval wordt één ervan als primaire sleutel gekozen. Alle anderen zijn dan **alternatieve sleutels**.

- Een primaire sleutel wordt aangeduid door de dubbele pijlen met een 'p' tussen:  <br>
← p → 
 - Een alternatieve sleutel wordt aangeduid door de dubbele pijlen met een 'a' tussen: <br>
← a → 

In het voorbeeld hieronder:

 - De kolom 'naam' is een **goede** primaire sleutel
 - De combinatie 'naam' en 'eenheid' is een **slechte** primaire sleutel
   - Hoewel deze primaire sleutel voldoet aan eis 2 (de combinatie 'naam' en 'eenheid' is uniek'), voldoet hij niet aan eis 1 (het deel 'eenheid' van de sleutel is niet verplicht) en ook niet aan eis 3 (je kan het deel 'eenheid' laten vallen en nog steeds een primaire sleutel verkrijgen)

<table class="styledTable">
   <tr>
      <th>← p →</th>
      <td></td>
      <td></td>
   </tr>
   <tr>
      <th>naam</th>
      <th>eenheid°</th>
      <th>energiePE°</th>
   </tr>
   <tr>
      <td>ijs</td>
      <td>liter</td>
      <td>1600</td>
   </tr>
   <tr>
      <td>kiwano</td>
      <td>stuks</td>
      <td>40</td>
   </tr>
   <tr>
      <td>slagroom</td>
      <td>deciliter</td>
      <td>336</td>
   </tr>
   <tr>
      <td>suiker</td>
      <td>gram</td>
      <td>4</td>
   </tr>
   <tr>
      <td>tequila</td>
      <td>eetlepel</td>
      <td>30</td>
   </tr>
</table>

## Refererende sleutel

Een referende sleutel is een kolom of kolomcombinatie waarvan de waarden (of waardencombinaties) naar rijen in een andere tabel verwijzen, via de primaire sleutel daarvan. Dit creëert een **relatie** tussen de beide tabellen.

Een relatie is een verbinding tussen een **kindtabel** en een **oudertabel**. In het voorbeeld hieronder is de ingrediënt-tabel het kind en de product-tabel de ouder. Een relatie werkt altijd in beide richtingen.

Een refererende sleutelkolom **bevat altijd redundante gegevens**. Het is door de redundante gegevens enkel in refererende sleutels te hebben, dat redundantie wordt beperkt tot het minimum.

In het voorbeeld hieronder is de kolom `product` uit de tabel ingredient een refererende sleutel naar de primaire sleutel `naam` uit de tabel product.
 
<img src="{{ site.baseurl }}/assets/img/sleutels_1.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Het strokendiagram ziet er dan zo uit:
 
<img src="{{ site.baseurl }}/assets/img/sleutels_2.jpg" alt="klassediagram" style="height: auto; max-width: 100%">
