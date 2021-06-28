---
title: AJAX
tags: 
 - 
description:
---

## Van Server Naar Client

Een **server** is een computer waar alle code en bestanden van een website zijn opgeslagen. Elke server heeft zijn eigen, unieke internet-adres. Als je een website wilt bezoeken, heb je het adres van deze server nodig. Een **client** is de computer van een gebruiker die surft naar een website. Als jij bijvoorbeeld surft naar [www.google.be](http://www.google.be), dan ben jij op dat moment de client van een google-server. De client vraagt dus aan de server of hij de HTML-pagina die daar staat opgeslagen mag gebruiken en weergeven in de browser. 

Een website bezoeken gebeurt dus meestal met een paar tussenstappen.

 1. **Actie**: Je klikt op een knop naar een website of typt het adres van een website in de adresbalk.
 2. **Request maken**: De client (jouw computer) maakt een vraag (**request**) om naar de server te sturen. In die vraag zit bijvoorbeeld welke pagina je wilt bekijken.
 3. **Request sturen**: De client (jouw computer) verstuurt een vraag (**request**) naar de server van de website.
 4. **Process request**: De server bekijkt de request en zoekt de juiste HTML-pagina op.
 5. **Server response**: De server stuurt een antwoord (**response**) naar de client, met daarin de HTML-pagina van de website.
 6. **Reactie**: De client leest de response en toont de website.

De client kan ook andere dingen dan een HTML-pagina aan de server vragen om te gebruiken. Dit moeten dus niet per sé HTML of CSS pagina's zijn die de browser gebruikt om een website weer te geven.

## Van Server Naar Client (met AJAX)

AJAX staat voor **A**synchronous **J**avaScript **A**nd **X**ML.

 - Asynchronous: je kan vragen stellen aan de server zonder dat je de pagina moet herladen.
 - JavaScript: AJAX is géén programmeertaal. Het is een manier om data aan een server op te vragen met behulp van Javascript.
 - XML: De data die wordt gevraagd aan de server moet in de vorm van XML-data zijn.

AJAX werkt heel gelijkaardig als het bezoeken van een website. 

 1. **Actie**: Er gebeurt iets op de website (je klikt op een knop, de pagina wordt geladen, ...)
 2. **Request maken**: Je maakt een **request** object aan met Javascript. Dit object is van het datatype XMLHttpRequest.
 3. **Request sturen**: Je stuurt de **request** naar de server.
 4. **Process request**: De server bekijkt de request en zoekt de juiste (XML-)data op.
 5. **Server response**: De server stuurt een antwoord (**response**) naar de client, met daarin de XML-data van de website.
 6. **Reactie**: Je leest de response met Javascript en doet er iets mee (bijvoorbeeld: je toont de data op je website)

## XML Data

De **X** in AJAX staat voor **XML**. Om AJAX te gebruiken moet er dus XML-data zijn opgeslagen op de server van je website.

{:.warning}
> **Opgelet**: Om veiligheidsredenen staan moderne browsers niet toe dat je een bestand kan gebruiken dat is opgeslagen op een andere server. Dit betekent dat zowel de HTML-pagina als het XML-bestand zich op dezelfde server moeten bevinden. 

## AJAX Voorbeeld

In dit voorbeeld wordt [dit XML-bestand gebruikt](https://www.w3schools.com/js/cd_catalog.xml). Je kan dit kopiëren en opslaan op je eigen server om het voorbeeld te volgen.

De stappen hieronder tonen de code 

### Stap 1: Actie

Als eerste heb je een website nodig waar je een actie op kan doen. In het voorbeeld hieronder wordt een knop gemaakt (`<button>`)

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="voorbeeld">
            <h2>AJAX Voorbeeld</h2>
            <!-- een knop waar je op kan klikken -->
            <button>Klik hier!</button>
        </div>
    </body>
</html>
```

Je hebt ook een functie nodig die wordt uitgevoerd wanneer de gebruiker klikt op de knop.

Hier worden 2 zaken toegevoegd aan de code:
 - een `onclick` attribute aan de `<button>`
 - een `script` tag met daarin de javascript functie


```html
<!DOCTYPE html>
<html>
    <body>
        <div id="voorbeeld">
            <h2>AJAX Voorbeeld</h2>
            <!-- Wanneer je klikt op deze knop wordt nu de functie TestAjax() uitgevoerd -->
            <button onclick="TestAjax()">Klik hier!</button>
        </div>
        <script>
// De functie TestAjax() is leeg, en doet dus voorlopig niets...
function TestAjax() {

}
        </script>
    </body>
</html>
```

### Stap 2: Een AJAX Request maken

Nu moet de javascript functie ingevuld worden. De HTML code wordt vanaf nu niet meer getoond, omdat die niet meer verandert. 

Als eerste moet er een Request-variabele worden gemaakt. Dit is een variabele van het datatype XMLHttpRequest.

```javascript
let request = new XMLHttpRequest();

function TestAjax() {
}
```

### Stap 3: De AJAX Request versturen

De volgende stap is het versturen van de request naar de server. De request heeft minstens 2 dingen nodig voor je hem verstuurt:
 - de manier waarop je de data verstuurt
 - welke data je wilt opvragen

Deze dingen worden toegevoegd aan de request met de functie `open()`.

```javascript
let request = new XMLHttpRequest();

function TestAjax() {
    /*
    De request heeft minstens 2 dingen nodig voor je hem verstuurt:
     - de manier waarop je de data verstuurt
     - welke data je wilt opvragen
    */
    request.open("GET", "cd_catalog.xml");
    request.send();
}
```

### Stap 4: Process Request op de Server

Wanneer de server jouw request ontvangt, moet hij allerlei dingen doen: 
 - De verbinding tussen de client en de server bevestigen
 - Je request in detail bekijken
 - De data opzoeken die je hebt gevraagd
 - Een response samenstellen
 
Wanneer de server klaar is om een response te geven, laat hij je dit weten met behulp van het `load` event. Je hoeft hier zelf niets voor te doen, dus er moet niets gewijzigd worden aan de huidige code.

>Als je wilt weten in welke stap de server zich momenteel bevindt, kan je in de `XMLHttpRequest` kijken naar de variabele `readyState`. Hierin bevindt zich een waarde van 0 tot en met 4:
> - **0**: geen request ontvangen
> - **1**: er is een verbinding tussen client en server
> - **2**: de server heeft een request ontvangen
> - **3**: de server is de request aan het bekijken
> - **4**: de server heeft een response klaar

### Stap 5: Server Response ophalen

Wanneer de server klaar is om een response te geven laat hij je dit weten met behulp van het `load` event. 

Een event is een signaal dat je kan vasthangen aan een functie. Wanneer dat signaal afgaat, wordt ook automatisch die functie aangeroepen.

{:.warning}
> **Opgelet**: De functie vasthangen aan het event doe je best voordat je de request verstuurt. Anders zou het kunnen gebeuren dat je server je te snel af is, en dat je het event dus nooit opvangt.


```javascript
let request = new XMLHttpRequest();

function TestAjax() {
    request.open("GET", "cd_catalog.xml");

    // hang de functie 'VeranderTekst' vast aan het LOAD event
    request.addEventListener("load", DoeIetsMetResponse);

    request.send();
}

/* Deze functie zal worden aangeroepen als de server het LOAD event laat afgaan. */
function DoeIetsMetResponse() {

}
```

### Stap 6: Reactie

De laatste stap is het invullen van de functie `DoeIetsMetResponse()`. 

In dit voorbeeld ga je de tekst in het HTML-element met id "voorbeeld" veranderen naar de data die je terugkreeg van de server.


```javascript
function DoeIetsMetResponse() {
    document.getElementById("voorbeeld").innerHTML = request.response;
}
```


### Voorbeeld code

Hieronder kan je alle code nog eens volledig terugvinden.

Zoals je ziet is er niet veel code nodig om XML data op te vragen van een server.


```html
<!DOCTYPE html>
<html>
    <body>
        <div id="voorbeeld">
            <h2>AJAX Voorbeeld</h2>
            <button onclick="TestAjax()">Klik hier!</button>
        </div>

        <script>
let request = new XMLHttpRequest();

function TestAjax(event) {
    event.preventDefault();
    request.open("GET", "cd_catalog.xml");
    request.addEventListener("load", DoeIetsMetResponse);
    request.send();
}

function DoeIetsMetResponse() {
    document.getElementById("voorbeeld").innerHTML = request.response;
}
        </script>
    </body>
</html>
```