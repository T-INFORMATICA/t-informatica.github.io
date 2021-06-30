---
title: XML
tags: 
 - 
definitions:
 - name: XML
   definiton: Een markup taal, waarbij je door middel van zelfgekozen tags data kunt aanduiden en organiseren. Bestanden in deze taal doen op zichzelf niets, maar hebben een programma nodig dat deze bestanden inleest.
description:
---

## Wat is XML?

XML (e**X**tensible **M**arkup **L**anguage) heeft veel weg van HTML: het zijn allebei Markup Languages, dus talen die stukken data aanduiden en definieren. Er is echter een groot semantisch verschil tussen de twee talen: XML is gemaakt om **data op te slaan** en transporteren, terwijl HTML gemaakt is om data weer te geven. Een ander belangrijk verschil is dat **XML tags niet vooraf gedefinieerd** zijn. De programmeur kiest dus zelf de tag-namen.

```xml
<email>
    <from>joske@vermeulen.be</from>
    <to>ailin@martinez.be</to>
    <title>hallo</title>
    <body>Dit is een mail van Joske naar Ailin.</body>
</email>
```

XML moet altijd **omschrijvend** zijn. Het voorbeeld hierboven is omschrijvend: het heeft een root-element dat beschrijft wat de xml bevat en informatie over de verzender, de ontvanger, de titel en de tekst. Het is belangrijk om te onthouden dat XML (zoals het voorbeeld hierboven) op **niets doet**. XML is niet meer dan data opgeslagen en omschreven door tags. Je hebt een programma nodig dat deze data kan lezen en omzetten naar iets bruikbaars.