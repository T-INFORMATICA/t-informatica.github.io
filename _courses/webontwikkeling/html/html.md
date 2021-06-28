---
title: Markup met HTML
tags: 
 - tag
 - tagnaam
 - openingstag
 - sluitingstag
 - zelfsluitend
definitions: 
 - name: tag
   definition: Een kleiner dan (<) en groter dan (>) teken waartussen een codewoord staat.
 - name: tagnaam
   definition: Een codewoord dat inhoud aanduidt voor een bepaald doel.
 - name: openingstag
   definition: Een kleiner dan (<) en groter dan (>) teken waartussen een codewoord staat, dat aanduidt waar de inhoud begint.
 - name: sluitingstag
   definition: Een kleiner dan (<) en groter dan (>) teken waartussen een forward slash en codewoord staat, dat aanduidt waar de inhoud eindigt.
 - name: <h1>-<h6>
   definition: Een element dat een koptekst aanduidt.
 - name: <p>
   definition: Een element dat een alinea aanduidt.
 - name: <img>
   definition: Een element dat een afbeelding aanduidt. De attributes src en alt zijn verplicht voor dit element.
 - name: <hr>
   definition: Een element dat een horizontale lijn aanduidt.
 - name: <br>
   definition: Een element dat inhoud op de volgende tekst-lijn plaatst.
 - name: <a>
   definition: Een element dat een hyperlink aanduidt. Het attribute href is verplicht voor dit element.
description: Een website bestaat vaak uit verschillende onderdelen. Met HTML worden die onderdelen door jou, de ontwikkelaar, correct aangeduid. In dit hoofdstuk wordt uitgelegd hoe HTML jou daartoe in staat stelt.
---


## HTML tags

Een webpagina dient om inhoud te laten zien aan een bezoeker. Om te zorgen dat de computer begrijpt wat voor inhoud de website bevat wordt een markup taal gebruikt, in dit geval HTML (**H**yper**T**ext **M**arkup **L**anguage). HTML dient dus om die inhoud aan te duiden als tekst, titel, lijst, link, … Hiervoor worden **tags** gebruikt. Tags zijn de codewoorden die HTML gebruikt om aan te duiden waar elk deel van de inhoud voor dient.

Een tag is een **codewoord tussen een kleiner dan (`<`) en groter dan (`>`) teken.**

HTML heeft een lijst met codewoorden die je kan gebruiken (je mag codewoorden niet verzinnen). Afhankelijk van welk codewoord je gebruikt, wordt de inhoud aangeduid als iets anders.


``` html
<img>		→ duidt een afbeelding (image) aan
<video>		→ duidt een video aan
<h1>		→ duidt een koptekst (heading niveau 1) aan
```

Er bestaan 2 soorten tags:



1. Openingstags:		**`<h1>`**		Duidt aan waar de inhoud (koptekst) begint
2. Sluitingstags:		**`</h1>`**		Duidt aan waar de inhoud (koptekst) eindigt

``` html
<p>dit is een paragraaf</p> en dit niet meer	→ duidt een paragraaf aan
<a>dit is een link</a> en dit niet meer		→ duidt een link aan
<h1>dit is een koptekst</h1> en dit niet meer	→ duidt een koptekst aan
```

## Coding Guidelines

Hoewel HTML niet hoofdlettergevoelig is, worden alle tag-namen in **lowercase** geschreven.

Bij het schrijven van code let je steeds op de correcte **indentatie**.

