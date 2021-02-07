---
title: Talstelsels
tags: 
 - binair
 - decimaal
 - hexadecimaal
definitions:
 - name: cijfer
   definition: een teken dat een waarde aanduidt.
 - name: getal
   definition: een combinatie van 1 of meer cijfers achter elkaar geschreven.
description: 
---

## Het Decimaal Stelsel

Wij, mensen, rekenen tegenwoordig met het Decimale Talstelsel. Dit wilt zeggen dat we een combinatie van 10 tekens gebruiken om de waarde van iets weer te geven. Deze tekens, ook wel **cijfers** genoemd, zijn: 

```
0 1 2 3 4 5 6 7 8 9
```

We noemen dit het Decimale talstelsel omdat we **10 cijfers** gebruiken ('Deci' komt van het Latijnse woord voor '10').

Hoewel we maar 10 cijfers hebben, zijn we toch in staat om véél grotere waardes dan `9` te creëren. We doen dit door een **getal** te maken. **Een getal is een combinatie van 1 of meer cijfers achter elkaar geschreven.** Bijvoorbeeld: 

```
723
```

Hoewel we dus géén cijfer hebben om de waarde van `723` weer te geven, kunnen we meerdere cijfers na elkaar schrijven en zo heel grote (en heel kleine) getallen samen te stellen.

## Hoe Werkt het Decimaal Talstelsel?

Maar hoe weten we nu eigenlijk wat het getal `723` voorstelt? We kunnen niet zomaar de cijfers `7`, `2` en `3` optellen bij elkaar: `723` is véél groter dan `7 + 2 + 3`. 

Je kent dit waarschijnlijk nog van de lagere school: 
 - het eerste getal toont de **eenheden**
 - het tweede getal toont de **tientallen**
 - het derde getal toont de **honderdtallen**
 - ...

Wanneer je dus wilt weten hoeveel `723` is, moet je `(7 x 100) + (2 x 10) + (3 x 1)` uitrekenen.

Stel dat je getal bestaat uit 6 cijfers (bv. 859326), hoe weet je dan met hoeveel je het eerste cijfer moet vermenigvuldigen?

```
(eenheden)             1      = 1 
(tientallen)           10     = 1 x 10 
(honderdtallen)        100    = 1 x 10 x 10 
(duizendtallen)        1000   = 1 x 10 x 10 x 10 
(tienduizendtallen)    10000  = 1 x 10 x 10 x 10 x 10 
(honderdduizendtallen) 100000 = 1 x 10 x 10 x 10 x 10 x 10 
```

Een getal met 6 cijfers heeft dus als éérste getal een honderdduizendtal. Zoals je ziet, vermenigvuldigen we telkens met `10` extra. Waar komt die `10` dan vandaan? Die komt van ons `10`-tallig (decimaal) stelsel!

De tabel hierboven kan je ook korter schrijven:

<div class="highlight">
<pre class="highlight"><code>(eenheden)             1      = 10<sup>0</sup>
(tientallen)           10     = 10<sup>1</sup>
(honderdtallen)        100    = 10<sup>2</sup>
(duizendtallen)        1000   = 10<sup>3</sup>
(tienduizendtallen)    10000  = 10<sup>4</sup>
(honderdduizendtallen) 100000 = 10<sup>5</sup>
</code></pre>
</div>

Let eens goed op de machten van `10`! Die beginnen met tellen bij `0` en gaan zo telkens één stapje hoger!

**Het `10`-tallig stelsel gebruikt de machten van `10`.**

## Optellen in het Decimaal Talstelsel

Wanneer we optellen in het decimaal talstelsel, gebruiken we het rijtje van 10 cijfers:

```
0 1 2 3 4 5 6 7 8 9
```

Wanneer we optellen gaan we dus gewoon het rijtje af. Kom je aan het einde van de rij, dan ga je terug naar het begin.

 1. Begin bij het getal `00`
 2. Ga naar het volgende cijfer (`1`) en zet het op de laatste plaats (`01`)
 3. Ga naar het volgende cijfer (`2`) en zet het op de laatste plaats (`02`)
 4. ...
 5. Blijf dit doen tot je aan het einde van de rij komt (`09`)
 6. Ga terug naar het eerste cijfer (`0`) en ga bij het volgende cijfer ééntje verder in de rij (`10`)

<img src="{{ site.baseurl }}/assets/img/basis-talstelsels-3-decimaal.gif" alt="voorbeeld" style="height: auto; max-width: 100%">

## Andere Talstelsels



<img src="{{ site.baseurl }}/assets/img/basis-talstelsels-4-hex.gif" alt="voorbeeld" style="height: auto; max-width: 100%">

<img src="{{ site.baseurl }}/assets/img/basis-talstelsels-5-binair.gif" alt="voorbeeld" style="height: auto; max-width: 100%">