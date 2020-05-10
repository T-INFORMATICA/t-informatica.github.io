---
title: Multipliciteit
tags: 
 - optionaliteit
 - kardinaliteit
 - multipliciteit
 - relatie
 - kindtabel
 - oudertabel
definitions: 
 - name: optionaliteit
   definition: Hoeveel rijen van een tabel minimaal verbonden kunnen zijn met één rij van een andere tabel.
 - name: kardinaliteit
   definition: Hoeveel rijen van een tabel maximaal verbonden kunnen zijn met één rij van een andere tabel.
 - name: multipliciteit
   definition: Hoeveel rijen van een tabel minimaal en maximaal verbonden kunnen zijn met één rij van een andere tabel.
description: Een relatie toont dat een oudertabel en kindtabel zijn verbonden met elkaar. Het is vaak belangrijk te weten op welke manier deze verbonden zijn. De multipliciteit in een relatie is daarbij heel belangrijk.
---

# Multipliciteit
Een relatie toont dat een oudertabel en kindtabel zijn verbonden met elkaar. 

<img src="{{ site.baseurl }}/assets/img/sleutels_2.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Het is vaak belangrijk te weten op welke manier deze verbonden zijn:

 - Hoeveel rijen van de kindtabel horen bij één rij in de oudertabel?<br>
   Bv.: hoeveel ingrediënten horen er bij één recept?
 - Hoeveel rijen van de oudertabel horen bij één rij in de kindtabel?<br>
   Bv.: hoeveel recepten maken er gebruik van één ingrediënt?

Een strokendiagram kan deze informatie niet weergeven. Daarom wordt er gewerkt met een multipliciteitendiagram. Een **multipliciteitendiagram** geeft de structuur van een database overzichtelijk weer, **zonder de kolommen**. 

<img src="{{ site.baseurl }}/assets/img/multipliciteit_1.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Een multipliciteitendiagram geeft voor elke kant van een relatie weer hoeveel rijen er minimaal verbonden zijn (**optionaliteit**) en hoeveel er maximaal verbonden zijn (**kardinaliteit**). Het is echter heel moeilijk om hier een exact aantal op te plakken. Het ene gerecht gebruikt maar twee ingrediënten, het volgende misschien achttien. Daarom worden er enkel ruwe schattingen gemaakt op basis van **nul, één of veel**.

## Optionaliteit

Optionaliteit wilt zeggen hoeveel rijen van een tabel **minimaal** verbonden kunnen zijn met één rij van een andere tabel. Dit is **nul of één**. Optionaliteit bepaalt of er minstens één rij verplicht aanwezig moet zijn of niet.

Bijvoorbeeld: 

 - Één recept heeft minstens één ingrediënt. <br>
   (een recept kan niet bestaan zonder de nodige ingrediënten).
 - Één ingrediënt wordt gebruikt door minstens nul recepten. <br>
   (er kunnen ingrediënten in het systeem zitten die nog niet gebruikt worden door de huidige recepten).

<img src="{{ site.baseurl }}/assets/img/multipliciteit_2.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Bijvoorbeeld:

 - Iedere chauffeur heeft minimaal één auto (anders is die persoon geen chauffeur).
 - Een auto moet niet per sé een chauffeur hebben (zelfrijdende auto's).

<img src="{{ site.baseurl }}/assets/img/multipliciteit_3.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

## Kardinaliteit

Kardinaliteit wilt zeggen hoeveel rijen van een tabel **maximaal** verbonden kunnen zijn met één rij van een andere tabel. Dit is **één of veel**.

Bijvoorbeeld:

 - Iedere chauffeur heeft maximaal veel auto's.
 - Een auto heeft maximaal één chauffeur (tegelijk).

<img src="{{ site.baseurl }}/assets/img/multipliciteit_4.jpg" alt="klassediagram" style="height: auto; max-width: 100%">

Bijvoorbeeld:

 - Één recept heeft maximaal veel ingrediënten. <br>
   (een recept kan zoveel ingrediënten gebruiken als nodig is).
 - Één ingrediënt wordt gebruikt door maximaal veel recepten. <br>
   (er kunnen ingrediënten in het systeem zitten die nog niet gebruikt worden door de huidige recepten).

<img src="{{ site.baseurl }}/assets/img/multipliciteit_5.jpg" alt="klassediagram" style="height: auto; max-width: 100%">
