---
title: PHP
tags: 
 - 
description:
---

## Van Server Naar Client

AJAX (**A**synchronous **J**avaScript **A**nd **X**ML) wordt gebruikt om data op te vragen van een server, zonder dat de pagina daarbij moet herladen. Dit gebeurt in 6 stappen:

 1. **Actie**: Er gebeurt iets op de website (je klikt op een knop, de pagina wordt geladen, ...)
 2. **Request maken**: Je maakt een **request** object aan met Javascript. Dit object is van het datatype XMLHttpRequest.
 3. **Request sturen**: Je stuurt de **request** naar de server.
 4. **Process request**: De server bekijkt de request en zoekt de juiste data op.
 5. **Server response**: De server stuurt een antwoord (**response**) naar de client, met daarin de XML-data van de website.
 6. **Reactie**: Je leest de response met Javascript en doet er iets mee (bijvoorbeeld: je toont de data op je website)

De meeste servers kunnen stap 4 uitvoeren, zolang er enkel gevraagd wordt om een bestand in zijn geheel terug te sturen naar de client.

Er zijn echter heel wat situaties waarbij een website vraagt aan de server om data samen te stellen:

 - data uit een bestand filteren (bv. uit een lijst met landen enkel de landen met een 'b' tonen)
 - data uit een bestand omzetten of omrekenen (bv. voor de meest recente posts op een forum 'x uur geleden' tonen in plaats van de datum en het uur)
 - data opvragen uit een databank

Voor elk van deze situaties moet er code geschreven worden die tijdens stap 4 wordt uitgevoerd. Deze code wordt **niet op de client** uitgevoerd, maar op de server. Programmeertalen die hiervoor gebruikt kunnen worden heten **server-side programmeertalen**.

## PHP

Eén van de meest gebruikte server-side talen is **PHP** (**P**HP: **H**ypertext **P**reprocessor). Met deze programmeertaal kan je dus programma's schrijven die op de server wordt uitgevoerd.

Zo kan PHP gebruikt worden om tekst te genereren. Het programma `hello.php` bevat bijvoorbeeld volgende code:

```php
$test = "Hello World!"
echo $test;
```

De server zal deze code uitvoeren en de volgende tekst genereren:

```
Hello World!
```

Voor de **client** _lijkt_ het dan alsof `hello.php` enkel de tekst `Hello World!` bevat. Uiteraard is dit voorbeeld nogal onzinnig. Het zou veel gemakkelijker, korter en sneller zijn om gewoon de tekst `Hello World!` in een tekst-bestand op te slaan. 

## Van JSON naar PHP (en terug)

Met PHP kan een programma geschreven worden dat op de server wordt uitgevoerd. De uitvoer van dit programma kan je met `echo` naar de client sturen.

Eén voorbeeld waarbij PHP gebruikt kan worden is het filteren van een lijst. Hieronder vind je de lijst van enkele Europese landen:

```json
[
  "Andorra",
  "Albania",
  "Austria",
  "Åland Islands",
  "Bosnia",
  "Belgium",
  "Bulgaria",
  "Belarus",
  "Switzerland",
  "Cyprus",
  "Czech Republic",
  "Germany",
  "Denmark",
  "Estonia",
  "Spain",
  "Finland",
  "Faroe Islands",
  "France",
  "United Kingdon",
  "Guernsey",
  "Greece",
  "Croatia",
  "Hungary",
  "Ireland",
  "Isle of Man",
  "Iceland",
  "Italy",
  "Jersey",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Monaco",
  "Moldova",
  "Macedonia",
  "Malta",
  "Netherlands",
  "Norway",
  "Poland",
  "Portugal",
  "Romania",
  "Russian Federation",
  "Sweden",
  "Slovenia",
  "Svalbard and Jan Mayen",
  "Slovakia",
  "San Marino",
  "Ukraine",
  "Vatican City"
]
```