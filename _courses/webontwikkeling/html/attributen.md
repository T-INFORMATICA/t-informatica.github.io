---
title: Attributes
tags: 
 - instructie
 - commentaar
definitions:
 - name: attribute
   definition: Een deel van de openingstag dat meer informatie geeft over het element.
 - name: attribute-key
   definition: De naam van het attribute. Dit staat aan de linkerkant van het = teken.
 - name: attribute-value
   definition: De waarde van het attribute. Dit staat aan de rechterkant van het = teken.
 - name: src attribute
   definition: Dit attribute geeft een verwijzing naar een extern bestand (zoals een afbeelding of javascript bestand).
 - name: alt attribute
   definition: Dit attribute geeft een naam aan een afbeelding. Wanneer de afbeelding zelf niet geladen kan worden, wordt deze naam getoond in de plaats.
 - name: href attribute
   definition: Dit attribute geeft een verwijzing naar een andere website of pagina.
description: Sommige onderdelen op een website hebben meer informatie nodig. HTML gebruikt attributes om deze extra informatie aan te duiden. In dit hoofdstuk leer je werken met attributes.
---



## Extra informatie

Een attribute geeft extra informatie aan een element. Bijvoorbeeld:



*   het href attribute duidt aan waar je naartoe surft als je op een link klikt.
*   Het target attribute duidt aan of je de link opent op hetzelfde tabblad, of een nieuw tabblad.

``` html
<a>		<!-- duidt een link aan die niets doet -->
dit is een link
</a>

<a href="https://www.google.be">    <!-- duidt een link aan naar de website van google -->
	dit is een link			  	 
</a>

<a href="https://www.google.be" target="_blank"> <!-- duidt een link aan naar de website van google, die in een nieuw tabblad wordt  -->
	dit is een link			 	 
</a>			  			 
```



Een attribute is dus een **extra codewoord** dat aan de **openingstag** wordt toegevoegd. 



*   Elk element heeft zijn eigen attributes. Je mag **meerdere** attributes toevoegen aan de openingstag van een element.
*   Een attribute bestaat uit een **codewoord** en een **waarde**:
    *   `codewoord="waarde"`
*   De waarde staat **altijd** tussen dubbele aanhalingstekens.



