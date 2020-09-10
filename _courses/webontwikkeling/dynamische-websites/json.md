---
title: JSON
tags: 
 - 
description:
---

## Wat is JSON?

JSON (**J**avaScript **O**bject **N**otation) is, net zoals XML, een manier om data op te slaan en transporteren. 

JSON heeft echter één groot voordeel ten opzichte van XML: je kan JSON data rechtstreeks omzetten naar een Javascript object/variabele. 'Omzetten' is daarbij een belangrijk woord: wanneer je data verstuurt van een server naar de browser (of omgekeerd) kan je enkel text gebruiken. JSON is dus gewoon tekst, tot je het terug omzet naar een object.

## Javascript Objecten

In het voorbeeld hieronder wordt een object `email` aangemaakt. Het object `email` met al zijn eigenschappen (from, to, title, body) kan dan gebruikt worden in Javascript.

```javascript
let email = {
    "from": "joske@vermeulen.be",
    "to": "ailin@martinez.be",
    "title": "hallo",
    "body": "Dit is een mail van Joske naar Ailin."
};

// het object gebruiken in Javascript
console.log(email.from);
```

Met **J**avaScript **O**bject **N**otation wordt alle code-tekst bedoelt die gebruikt wordt om het object aan te maken. In het voorbeeld hierboven is dat:


```json
{
    "from": "joske@vermeulen.be",
    "to": "ailin@martinez.be",
    "title": "hallo",
    "body": "Dit is een mail van Joske naar Ailin."
}
```

Dit stuk code wordt vervolgens opgeslagen als een bestand: `email.json`. Met Javascript kan dit bestand terug naar een object worden omgezet en opgeslagen in een variabele.