---
title: AJAX en PHP
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

Er zijn echter heel wat situaties waarbij een website vraagt aan de server om niet zomaar *alle* data terug te geven, maar om specifieke data te selecteren:

 - data uit een bestand filteren (bv. uit een lijst met landen enkel de landen met een 'b' tonen)
 - data uit een bestand omzetten of omrekenen (bv. voor de meest recente posts op een forum 'x uur geleden' tonen in plaats van de datum en het uur)
 - data opvragen uit een databank

Voor elk van deze situaties moet er code geschreven worden die tijdens stap 4 wordt uitgevoerd. Deze code wordt **niet op de client** uitgevoerd, maar op de server. Programmeertalen die hiervoor gebruikt kunnen worden heten **server-side programmeertalen**.

## PHP

Eén van de meest gebruikte server-side talen is **PHP** (**P**HP: **H**ypertext **P**reprocessor). Met deze programmeertaal kan je dus programma's schrijven die op de server wordt uitgevoerd.

Zo kan PHP gebruikt worden om tekst te genereren. Het programma `hello.php` bevat bijvoorbeeld volgende code:

```php
$mijnVariabele = "Hello World!";
echo $mijnVariabele;
```

De server zal deze code uitvoeren en de volgende tekst genereren:

```
Hello World!
```

De client krijgt dus nooit de PHP code te zien! Vanuit de client lijkt het dus alsof `hello.php` enkel de tekst `Hello World!` bevat. 

## JSON tonen

Met PHP kan je dus een programma schrijven dat tekst toont op het scherm. 

Hoewel tekst een vorm van data is, is tekst vaak niet gestructureerd. Een betere manier om data gestructureerd weer te geven is door gebruik te maken van **JSON**.

```php
$mijnVariabele = "{
    'from': 'joske@vermeulen.be',
    'to': 'ailin@martinez.be',
    'title': 'hallo',
    'body': 'Dit is een mail van Joske naar Ailin.'
}";
echo $mijnVariabele;
```

Dit PHP programma zal dus letterlijk de volgende tekst genereren:

```json
{
    'from': 'joske@vermeulen.be',
    'to': 'ailin@martinez.be',
    'title': 'hallo',
    'body': 'Dit is een mail van Joske naar Ailin.'
}
```

De client krijgt ook hier nooit de PHP code te zien! In plaats daarvan lijkt het (vanuit de client) of dit gewoon een JSON bestand is.

## JSON genereren

Met PHP kan je dus een programma schrijven dat tekst of JSON toont op het scherm. Wanneer je je JSON code letterlijk opslaat in een variabele en daarna toont met `echo`, is er eigenlijk geen verschil met een JSON bestand.

Maar PHP is een programmeertaal! We kunnen gebruik maken van variabelen, codeblokken, klassen, instructies, ... Met al deze krachtige hulpmiddelen is het mogelijk om zelf een JSON object samen te stellen.

Het voorbeeld hieronder gaat dezelfde JSON samenstellen als in het e-mail voorbeeld hierboven. Alleen wordt er nu gewerkt met een Associative Array:

```php
// maak een array aan
$mijnVariabele = array();

// geef de verschillende indexen ('from', 'to', ...) een waarde
$mijnVariabele["from"] = "joske@vermeulen.be";
$mijnVariabele["to"] = "ailin@martinez.be";
$mijnVariabele["title"] = "hallo";
$mijnVariabele["body"] = "Dit is een mail van Joske naar Ailin.";

// zet om naar JSON
$mijnVariabeleInJSON = json_encode($mijnVariabele);

// toon de JSON op het scherm
echo $mijnVariabeleInJSON;
```

Gaan we nog een stap verder, dan kunnen de waardes van dit object uit de URL parameters worden gehaald:

`mail.php`
```php
$from = $_GET["from"];
$to = $_GET["to"];
$title = $_GET["title"];
$body = $_GET["body"];

// maak een array aan
$mijnVariabele = array();

// geef de verschillende indexen ('from', 'to', ...) een waarde
$mijnVariabele["from"] = $from;
$mijnVariabele["to"] = $to;
$mijnVariabele["title"] = $title;
$mijnVariabele["body"] = $body;

// zet om naar JSON
$mijnVariabeleInJSON = json_encode($mijnVariabele);

// toon de JSON op het scherm
echo $mijnVariabeleInJSON;
```

Roep je dus het bestand `mail.php` aan met de juiste url parameters:

```mail.php?from=joske@vermeulen.be&to=ailin@martinez.be&title=hallo&body=Dit is een e-mail```

Dan worden die waardes ingevuld in de Associative Array, en vervolgens getoond op het scherm in de vorm van een JSON.

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