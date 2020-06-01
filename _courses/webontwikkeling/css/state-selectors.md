---
title: State Selectors
tags: 
 - hover
 - focus
definitions:
 - name: hover
   definition: Wanneer een gebruiker met de muis over een element gaat.
description: Soms kan opmaak ook tijdelijk zijn. Zo krijgt een knop vaak een andere opmaak wanneer je met je muis over het element gaat. State selectors geven opmaak aan een element als een element zich in een bepaalde status bevindt.
---


# State Selectors

In andere hoofdstukken werd bekeken hoe CSS de standaard opmaak van een element kan veranderen. 

Gebruikers van een website kunnen de opmaak van een element echter aanpassen:



*   Wanneer een gebruiker met zijn muis over een knop gaat, verandert de knop van kleur
*   Wanneer een gebruiker klikt op een tekstveld, verandert de opmaak zodat duidelijk wordt dat het tekstveld is geselecteerd.

De gebruiker past door zijn acties elementen aan, en als webdesigner wil je dat je opmaak deze aanpassingen weergeeft.

Dit gebeurt aan de hand van CSS state selectors. Een state gaat over een specifieke momentopname van een element. 

Enkele voorbeelden:



*   De :**hover** state: dit geeft aan dat een gebruiker met zijn muis boven op een element hangt.
*   De :**focus** state: dit geeft aan dat een gebruiker een element heeft geselecteerd.


## State selectors gebruiken

State selectors zijn een uitbreiding op de CSS selectors die je al kent. Wanneer je een aan de hand van een selector een element hebt opgemaakt, kan je aan die selector een State Selector toevoegen met een **dubbelpunt**.

![drawing]({{ site.baseurl }}/assets/img/css-stateselectors1.PNG)


## Andere State Selectors

Sommige state selectors dienen om specifieke elementen aan te duiden. Enkele voorbeelden:



*   De :**first-child** state: Dit zal het eerste element opmaken dat zich in de selector bevindt.
*   De :**empty** state: Dit zal alle elementen van de selector opmaken die geen enkel ander element bevatten.


## State selector voorbeelden


## Hyperlinks

Hyperlinks hebben 4 State Selectors die je bijna altijd moet definieren:



*   De :**link** state: Een hyperlink waar de gebruiker nog niet op heeft geklikt.
*   De :**visited** state: Een hyperlink waar de gebruiker al wel op heeft geklikt.
*   De :**hover** state: Een hyperlink waar de gebruiker met zijn muis over staat.
*   De :**active** state: Een hyperlink die verwijst naar de huidige pagina.

```css
/* link waar nog niet op geklikt is */
a:link {
    color: #FF0000;
}

/* link waar al wel op geklikt is */
a:visited {
    color: #00FF00;
}

/* link waar de muis over staat */
a:hover {
    color: #FF00FF;
}

/* link die verwijst naar de huidige pagina */
a:active {
    color: #0000FF;
}
```


**Belangrijk**:<br>
a:hover **MOET** komen **na** a:link en a:visited om te werken! _(als je a:link en/of a:visited hebt gedefinieerd)_ <br>
a:active **MOET** komen **na** a:hover om te werken! _(als je a:hover hebt gedefinieerd)_
