---
title: CSS
tags: 
 - instructie
 - commentaar
definitions: 
 - name: CSS
   definition: De taal die gebruikt wordt om een website van opmaak te voorzien.
 - name: selector
   definition: CSS-code die aanduidt welke HTML elementen aangepast zullen worden door de stijlregels.
 - name: declaratie
   definition: De verzameling van stijlregels die toegepast zullen worden op één of meerdere HTML elementen.
 - name: opmaak
   definition: Hoe een HTML element wordt weergegeven.
 - name: property
   definition: De naam van de stijlregel die aangeeft wat er veranderd wordt aan de opmaak.
 - name: property-value (waarde)
   definition: De waarde van de stijlregel die bepaalt in welke mate er iets veranderd wordt aan de opmaak.
 - name: stylesheet
   definition: De verzameling van stijlregels voor een webpagina.
 - name: externe stylesheet
   definition: Een apart bestand waarin de verzameling van stijlregels voor een webpagina wordt bijgehouden.
 - name: "*.css"
   definition: Met deze bestands-extensie worden externe stylesheets van een website opgeslagen als document.
description: Opmaak is een belangrijk onderdeel van elke website. Hoe laat je een element er goed uitzien? In dit hoofdstuk wordt een algemene inleiding gegeven over de rol van CSS in webontwikkeling.
---


## Wat is CSS?

CSS (**<span style="text-decoration:underline;">C</span>ascading <span style="text-decoration:underline;">S</span>tyle <span style="text-decoration:underline;">S</span>heets**) is **de taal die een HTML document opmaakt**. CSS zegt hoe HTML-elementen moeten worden weergegeven in de browser.


## Syntax

CSS-code bestaat uit codeblokken. Elk codeblok bestaat uit 2 delen:



*   **Selector**: De selector duidt aan welke HTML elementen opmaak zullen krijgen. 
*   **Declaratie**: De declaratie bestaat uit 1 of meerdere opmaakregels die tussen accolades worden geplaatst.

Een **opmaakregel** bestaat uit een **property** en **waarde** en eindigt met een **puntkomma**. 

![drawing]({{ site.baseurl }}/assets/img/css-css.PNG)

Bijvoorbeeld:

Stel dat alle &lt;p> elementen op dezelfde manier moeten opgemaakt worden:



*   De tekst moet gecentreerd staan.
*   De tekstkleur moet rood zijn.

De selector moet dan p (de naam van het element) selecteren.  \
De declaratie bestaat dan uit 2 opmaakregels:

<pre>
p
{
	text-align: center;
	color: red;
}
</pre>


 \
In dit voorbeeld wordt het &lt;p> element opgemaakt met een rode tekstkleur en gecentreerde tekst.

Door verschillende codeblokken onder elkaar te schrijven, krijgen verschillende elementen een bepaalde opmaak toegewezen.

Bijvoorbeeld:

Onderstaande CSS code doet het volgende:



*   Elke paragraaf wordt gecentreerd en krijgt een rode tekstkleur.
*   Elke h1 koptekst wordt onderlijnd en krijgt een rode achtergrondkleur.
*   Elke hyperlink wordt vet getoond en krijgt een oranje tekstkleur.

<pre>
p
{
	text-align: center;
	color: red;
}

h1
{
	text-decoration: underline;
	background-color: red
}

a
{
	font-weight: bold;
	color: orange;
}
</pre>




## Het &lt;STYLE> element

CSS beschrijft hoe elk element moet worden weergegeven in de browser. Het geeft dus informatie over de website, maar bevat zelf geen zichtbare informatie. CSS-code hoort daarom thuis in het &lt;head> element van de webpagina.

Nu is het niet mogelijk om zomaar CSS te beginnen typen in een HTML document. Het is aan jou als ontwikkelaar om duidelijk te maken waar er HTML-code staat, en waar er CSS code staat.

Om aan te duiden waar CSS code wordt geschreven bestaat het &lt;style> element. Alle inhoud van het &lt;style> element wordt door de browser gelezen als CSS code.


<pre>
&lt;!DOCTYPE html>
&lt;html>
	&lt;head>
		&lt;style>
body {
    background-color: lightblue;
}
h1 {
    color: white;
    text-align: center;
}
p {
    font-family: verdana;
    font-size: 20px;
}
		&lt;/style>
	&lt;/head>
	&lt;body>
		&lt;h1>Mijn eerste CSS pagina</h1>
		&lt;p>Dit is een paragraaf.</p>
	&lt;/body>
&lt;/html>
</pre>



## Externe stylesheets

Met een externe stylesheet kan het uiterlijk van een hele website veranderd worden door slechts één bestand te wijzigen! 

Een externe stylesheet is een manier om CSS code in een apart bestand te plaatsen, zodat HTML en CSS code grotendeels gescheiden blijft.

Elke pagina die de stijlregels in dit bestand gebruikt moet een verwijzing naar de externe stylesheet bevatten in het <code>&lt;<strong>link</strong>></code>-element. Het <code>&lt;<strong>link</strong>></code>-element wordt geplaatst binnen in het element &lt;head>:

<pre>
&lt;head>
&lt;link rel="stylesheet" type="text/css" href="mystyle.css">
&lt;/head>
</pre>


Een externe stylesheet kan in elke teksteditor worden geschreven. Het bestand mag geen HTML-tags bevatten. Het stylesheet bestand moet worden opgeslagen met de extensie .css. Hier is hoe het bestand 'mystyle.css' er uit ziet:


<pre>
body {
    background-color: lightblue;
}

h1 {
    color: navy;
    margin-left: 20px;
}
</pre>




