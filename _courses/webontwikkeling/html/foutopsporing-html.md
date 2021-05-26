---
title: Foutopsporing in HTML en CSS
tags: 

definitions:
 - name: w3c validation error
   definitions: Dit is meestal een syntax fout in HTML, waarbij een tag-naam of attribute verkeerd is geschreven, of een element of attribute op een plaats staat waar deze niet thuishoort.
 - name: w3c validation warning
   definitions: Dit is meestal een poging om een runtime fout op te sporen in HTML. Wordt vaak getoond wanneer een attribute wordt aangeraden of een element leeg is.
description: 
---

## Fouten in HTML en CSS

Om fouten op te sporen, is het belangrijk om te weten welke fouten er kunnen voorkomen. 

Allereerst is het belangrijk om te weten dat HTML en CSS andere talen zijn: ze worden anders geschreven, hebben een ander doel en zullen dus ook andere soorten fouten kunnen bevatten.

Toch is het belangrijk om de twee talen samen te bekijken. HTML en CSS worden steeds samen gebruikt, waardoor het vaak moeilijk is om de fouten in de ene taal volledig los te zien van fouten in de andere. Is je HTML-structuur niet in orde, dan zijn je CSS selectors waarschijnlijk complexer dan nodig. Zijn je CSS selectors heel rigide opgesteld, dan wordt het moeilijk om je HTML-structuur aan te passen of uit te breiden.

Bij het schrijven van HTML en CSS code wordt aangeraden om [de browser Firefox](https://www.mozilla.org/en-US/firefox/new/) te gebruiken. Deze browser biedt de meeste mogelijkheden aan om fouten in HTML en CSS terug te vinden. [Google Chrome](https://www.google.com/chrome/) kan je ook gebruiken, en biedt ook een uitgebreid gamma aan hulpmiddelen aan, maar Firefox is op dit moment iets uitgebreider.\
We raden ook aan om de [W3C Validator plugin](https://addons.mozilla.org/nl/firefox/addon/html-validator/) te installeren in Firefox. Deze plugin is trouwens [ook beschikbaar voor Google Chrome](https://chrome.google.com/webstore/detail/html-validator/mpbelhhnfhfjnaehkcnnaknldmnocglk).

## Syntax Fouten

De gemakkelijkste fouten om te vinden zijn Syntax-fouten: Schrijf je bv de tag-naam `foter` in plaats van `footer`, of het attribute `scr="afbeelding.png"` in plaats van `src="afbeelding.png"`, dan zal HTML niet begrijpen wat je bedoelt.
Ook bij CSS kan je Syntax-fouten maken: Schrijf je bijvoorbeeld de stijlregel `backgrond-color: blue` in plaats van `background-color: blue`, of vergeet je een `;` te plaatsen aan het einde van een stijl-regel, dan zal je CSS code niet werken.\
Door gebruik te maken van de juiste hulpmiddelen zal je heel snel deze Syntax-fouten kunnen opsporen en oplossen.

### Voorbeeld

In HTML:
 - De footer moet de tagnaam `footer` krijgen
 - Het correcte attribute is `src`, niet `scr`

```html
<foter>
    Dit is mijn footer!
</foter>

<img scr="afbeelding.png">
```

In CSS:
 - De juiste stijlregel is `background-color`
 - CSS gebruikt de Amerikaanse schrijfwijze van `color`

```css
* {
    backgound-color: black;
    colour: red;
}
```

### Syntax Fouten Detecteren



## Runtime Fouten

De volgende zin is (volgens de Nederlandse taal) volledig correct geschreven: \
**"De zee gaat onder in de zon."** \
En toch is dit complete onzin. 
Deze foute zin zal geen enkele spell-checker kunnen verbeteren. Ze is nu eenmaal volledig juist geschreven. \
Waarschijnlijk wordt bedoeld: \
**"De zon gaat onder in de zee."** \
Deze zin is even correct geschreven, maar nu begrijpt iedereen wat je bedoelt. 

Dit zijn runtime-fouten: code die volledig correct geschreven is, maar voor fouten zorgt wanneer je de website uittest. Runtime-fouten zijn daarom vaak moeilijker te detecteren. 

### Voorbeeld

In dit voorbeeld wil de programmeur de `list items` binnen in de `section` een rode achtergrondkleur geven. In CSS wordt er dus een selector gemaakt die de `list items` selecteert binnen in de `section`.

Deze HTML en CSS code is volledig correct, maar de selector doet niet wat de programmeur verwacht: het `>` teken selecteert de `li` elementen die zich *rechtstreeks* in een `section` element bevinden.

Voorbeelden van juiste selectors (in deze situatie) zijn:
 - `section>ul>li`
 - `section li`

```html
<section>
    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>
</section>
```

```css
section>li {
    background-color: red;
}
```

