---
title: URL Parameters
tags: 
 - 
definitions:
 - name: url
   definiton: Het adres van een website.
 - name: url parameter
   definition: Een naam en waarde die je meegeeft via het adres van de webpagina.
description: 
---

De URL van een pagina is het adres dat je bovenaan in de adresbalk intypt. In PHP is het mogelijk om deze URL uit te breiden met variabelen en waardes, om te gebruiken in de pagina zelf.

Alle gegevens die op deze manier worden doorgegeven, worden opgeslagen in een array met de naam `$_GET`.

Variabelen doorgeven via de URL wordt gedaan in 4 stappen:

 1. Voeg een ? toe achter de pagina waar je de variabele wilt gebruiken
    - product.php**?**
 2. Geef de variabele een naam
    - product.php?**productID**
 3. Geef de variabele een waarde met behulp van het = teken
    - product.php?**productID=1**
 4. Wil je meerdere variabelen doorgeven via de URL, gebruik je een & teken
    - product.php?**productID=1&productNaam=shampoo**
 
Dus om één variabele door te geven ziet de URL er zo uit in je browser:

<img src="{{ site.baseurl }}/assets/img/url-parameters2.jpg" alt="url-parameters" style="height: auto; max-width: 100%">

En om meerdere variabelen door te geven ziet de URL er zo uit:

<img src="{{ site.baseurl }}/assets/img/url-parameters1.jpg" alt="url-parameters" style="height: auto; max-width: 100%">
 
Dit is hetzelfde als de `$_GET` array als volgt in te vullen:

```php
$_GET["productID"] = 1;
$_GET["productnaam"] = "Shampoo";
```

Door deze variabelen via de URL mee te geven, wordt de `$_GET` array echter **automatisch ingevuld**, en moet je dus deze 2 regels code **niet zelf schrijven**.

De `$_GET` array werkt verder zoals elke andere associative array. Zo is het mogelijk om waardes op te vragen, aan te passen of toe te voegen met de volgende code:

```php
echo $_GET["productID"];		// toon 1 op het scherm
echo $_GET["productNaam"];		// toon Shampoo op het scherm
$_GET["productnaam"] = "Zeep";	// verandert de waarde “Shampoo” in “zeep” in de $_GET array
```
