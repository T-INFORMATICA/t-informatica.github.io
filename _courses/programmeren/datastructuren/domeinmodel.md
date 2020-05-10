---
title: Domeinmodel
tags: 
 - gemeenschappelijke taal
 - probleembeschrijving
 - kapstok klasse
 - entiteit
 - regel
 - rule
 - actie
 - action
 - state
definitions: 
 - name: probleembeschrijving
   definition: De beschrijving van de applicatie waarvoor een domeinmodel wordt gemaakt.
 - name: gemeenschappelijke taal
   definition: Een lijst van sleutelwoorden uit de probleembeschrijving, met een eenduidige definitie voor elk sleutelwoord.
 - name: rule
   definition: Wat de applicatie wel of niet kan.
 - name: action
   definition: Wat een gebruiker kan doen binnen de applicatie.
 - name: state
   definition: Hoe de applicatie verandert tijdens het gebruik.
description: Een programma bestaat uit een heleboel verschillende klassen die allemaal samen moeten werken. In dit hoofdstuk leer je zelf te bepalen welke klassen en relaties daartussen je best kan aanmaken.
---


## Software ontwikkelen

Elk programma is een oplossing voor een probleem. Zo'n probleem wordt vaak door een opdrachtgever of klant aangereikt.

Een programma bestaat uit veel verschillende klassen die elk een deel van dat probleem oplossen. Al die klassen zijn door middel van verschillende relaties met elkaar verbonden. Dit geheel van klassen, fields en methods wordt het **domein** van het programma genoemd.

Het is niet gemakkelijk om te weten welke klassen er gemaakt moeten worden, welke relaties deze klassen zullen hebben of welke fields en methods er in die klassen thuis horen. Door het probleem goed te analyseren wordt het gemakkelijker om die oplossing te vinden. 

Het uiteindelijke doel van een analyse is voor elke klasse alle fields, methods en relaties te bepalen. Om elke klasse duidelijk weer te geven wordt een klassediagram gebruikt. De schematische voorstelling van alle klassen, fields, methods en relaties wordt het **domeinmodel** genoemd. 

## Probleembeschrijving

De eerste stap in het opstellen van een domeinmodel, is het duidelijk verwoorden van het probleem dat een applicatie moet oplossen. 
Samen met de opdrachtgever moet dus een duidelijke tekst worden opgesteld die het probleem zo nauwkeurig mogelijk omschrijft. Deze tekst is de probleembeschrijving. In deze tekst moet duidelijk zijn:

 - Wat het programma moet kunnen
 - Welke objecten uit de 'echte' wereld in het programma voorkomen
 - Welke beperkingen er zijn
 - Welke gebruikers er zijn
 - In welke toestanden het programma zich kan bevinden

Deze tekst moet duidelijk leesbaar zijn voor iedereen die uiteindelijk met het afgewerkte programma zal werken. Het is dus belangrijk dat je de tekst laat lezen door iemand die niets kent van software ontwikkeling, maar wel kennis heeft van het probleem. 

## Gemeenschappelijke Taal

In de probleembeschrijving bevindt zich heel wat informatie die uiteindelijk in het domeinmodel moet komen. De volgende stap is dus al die informatie uit die tekst te halen en op te lijsten. Al die informatie kan opgedeeld worden in 4 categorieën.

 1. **Entiteiten**: Alle onderwerpen, objecten en voorwerpen die in de tekst staan lijst je hier op. Zorg ervoor dat deze lijst begint met een hoofd-entiteit, een entiteit die het volledige probleem opdeelt in kleinere entiteiten.
    a. Elke entiteit krijgt één duidelijke, unieke naam. Synoniemen worden geschrapt.
    b. Elke entiteit krijgt een duidelijke definitie van enkele zinnen.
 2. **Acties**: Alles dat gebruikers van het programma kunnen doen in het programma.
 3. **Regels**: Definieert wat het programma wel of niet toestaat aan de gebruikers.
 4. **Toestanden**: De verschillende situaties waarin het programma zich kan bevinden, meestal als gevolg van een actie.

De combinatie van entiteiten, acties, regels en toestanden heet de **gemeenschappelijke taal**. 

Ook de gemeenschappelijke taal moet duidelijk leesbaar zijn voor iedereen die uiteindelijk met het afgewerkte programma zal werken. Het is dus belangrijk dat je dit laat lezen door iemand die niets kent van software ontwikkeling, maar wel kennis heeft van het probleem. 

## Eerste domeinmodel

Wanneer de gemeenschappelijke taal is opgesteld, kan een eerste domeinmodel worden gemaakt.

 - Begin bij de hoofd-entiteit van je gemeenschappelijke taal. Dit is een entiteit voor de applicatie zelf. Maak hier een klassediagram voor. Deze klasse wordt vaak een **kapstok-klasse** genoemd.
 - Voor elke entiteit wordt een klassediagram gemaakt. De definitie van elke entiteit bevat veel informatie over de fields en methods die in elke klasse moet voorkomen.
 - De acties, regels en toestanden worden vervolgens ook verwerkt in het domeinmodel. Vaak is dit als field of method in één van de gemaakte entiteit-klassen.

Wanneer dit klaar is, wordt gekeken of er voor bepaalde klassen superklassen gemaakt kunnen worden. Alle informatie (fields en methods) die semantisch hetzelfde is wordt dan in de superklasse geplaatst, en de overerving wordt aangeduid met de juiste pijl.

Als laatste is het belangrijk dat alle associaties en composities worden aangeduid op de correcte manier.

Wanneer het domeinmodel is afgewerkt, zou het mogelijk moeten zijn om, vertrekkend vanuit de kapstok-klasse, elke andere klasse te bereiken door de verschillende associatie-, compositie- en overerving-pijlen te volgen. Geen enkele klasse of groep klassen mag losstaan van de rest van het programma.

## Voorbeeld

Hieronder kan je een voorbeeld vinden voor een slideshow programma genaamd PiusPoint.

### Probleembeschrijving PiusPoint

Piuspoint is een programma dat gebruikt wordt om slideshows te tonen.

De verzameling slides die iemand gebruikt tijdens een presentatie wordt een slideshow genoemd. Slides worden gebruikt voor verschillende redenen: Als geheugensteun voor de spreker, waarbij er bullet points gebruikt worden om de boodschap over te bregen. Slides kunnen ook afbeeldingen, belangrijke definities, tabellen met getallen, enz… bevatten.

Een slideshow bevat meestal een titel, een subtitel en wat extra informatie (zoals de naam van de spreker, de datum, etc…). De eerste slide, die de titel-slide wordt genoemd, toont deze informatie.

De overige slides tonen soms extra informatie (zoals de titel van de slideshow of het aantal slides in de slideshow). Er zijn ook bepaalde 'speciale' slides, zoals een slide die de inhoudstafel toont. 'Gewone' slides kunnen extra informatie tonen (meestal de titel van de slide) en bevatten één of meerdere items.

Sommige items staan in een lijst. Text items hebben een textniveau. Een textniveau bepaald het lettertype, de lettergrootte en de kleur van de tekst. Andere items, zoals een afbeelding, kan enkel getoond worden met behulp van een URL naar de afbeelding.

### Gemeenschappelijke Taal PiusPoint

#### Entiteiten

|  Concept  |  Definitie  | 
|-----------|-------------|
| Slideshow | Een volgorde van slides die iemand gebruikt tijdens een presentatie. |
| Slide | Eén enkele pagina in een slideshow. Bevat een lijst van items die worden weergegeven. Kan ook extra informatie weergeven over de slideshow. |
| Speciale slide | Een slide die een specifiek soort informatie toont, zoals een inhoudstafel. |
| Gewone slide | Bevat één of meerdere items waarin informatie wordt weergegeven. | 
| Titel slide | Toont informatie over de slideshow, zoals de titel, subtitel en extra informatie (zoals naam van de spreker, datum, …). | 
| Presentatie | Eén enkele voorstelling waarbij de slideshow wordt gebruikt om informatie van de spreker naar het publiek door te geven. De informatie over de presentatie wordt opgeslagen in de slideshow. | 
| Spreker | Degene die de presentatie geeft. De informatie van de spreker wordt opgeslagen in de slideshow. | 
| Publiek | De personen die de presentatie bijwonen. | 
| Item | Eén enkel stukje informatie dat op de slide staat. | 
| Item: lijstitem | Een verzameling van tekst items op een slide die worden gescheiden door een bepaald teken. | 
| Item: tekstitem | Geeft een stukje tekst weer op een slide. Een tekst item heeft een tekstniveau. | 
| Item: tabelitem | Een verzameling van items op een slide die worden ingedeeld in rijen en kolommen. | 
| Item: afbeeldingitem | Een item dat een afbeelding toont aan de hand van een URL naar de bron van de afbeelding. | 
| Extra informatie | Informatie die wordt meegegeven aan een slideshow, waarin je een naam en een waarde bijhoudt over die informatie. | 
| Tekst niveau | Bepaalt het lettertype, de lettergrootte en kleur van de tekst van een tekst item. | 

#### Regels

 - Er is maar één spreker.
 - Er is één slideshow per presentatie.
 - Een Lijst Item bevat enkel Tekst Items.
 - De eerste slide moet de titel slide zijn.
 
#### Acties

 - Ga naar de volgende slide
 - Ga naar de vorige slide
 - Ga naar de titel slide
 - De presentatie afsluiten
 - De presentatie opstarten
 
#### States

 - De slideshow is opgestart
 - De slideshow is op slide [X]


### Domeinmodel Piuspoint

<div class="mxgraph" style="max-width:100%;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;lightbox&quot;:false,&quot;nav&quot;:true,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;www.draw.io\&quot; modified=\&quot;2020-01-13T20:08:27.434Z\&quot; agent=\&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36\&quot; etag=\&quot;6BM3rolPMa_4pxjY0D3k\&quot; version=\&quot;12.5.1\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;tBlvyOymtR_KPyO7PkFj\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://www.draw.io/js/viewer.min.js"></script>
