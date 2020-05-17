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
description: Sommige onderdelen op een website hebben meer informatie nodig. HTML gebruikt attributes om deze extra informatie aan te duiden. In dit hoofdstuk leer je werken met attributes.
---



## Extra informatie

Een attribute geeft extra informatie aan een element. Bijvoorbeeld:



*   het href attribute duidt aan waar je naartoe surft als je op een link klikt.
*   Het target attribute duidt aan of je de link opent op hetzelfde tabblad, of een nieuw tabblad.

<pre class="prettyprint">
&lt;a>						 duidt een link aan die niets doet
dit is een link
&lt;/a>

&lt;a href="https://www.google.be">	  	 duidt een link aan naar de website van 
	dit is een link			  	 google
&lt;/a>

&lt;a href="https://www.google.be" target="_blank">
	dit is een link			 	 duidt een link aan naar de website van 
&lt;/a>			  			 google, die in een nieuw tabblad wordt 
</pre>



Een attribute is dus een **extra codewoord** dat aan de **openingstag** wordt toegevoegd. 



*   Elk element heeft zijn eigen attributes. Je mag **meerdere** attributes toevoegen aan de openingstag van een element.
*   Een attribute bestaat uit een **codewoord** en een **waarde**:
    *   `codewoord="waarde"`
*   De waarde staat **altijd** tussen dubbele aanhalingstekens.



