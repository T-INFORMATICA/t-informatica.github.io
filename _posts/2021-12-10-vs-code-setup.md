---
title:  "Mijn VS Code Setup"
---

# VS Code

Visual Studio Code is een [code editor](/courses/informatica/basiskennis/code-editors.html) van Microsoft. De kracht van dit programma zit 'em in hoe gemakkelijk je het programma kunt aanpassen. Naast een gigantische hoeveelheid instellingen die instaan voor zowel de werking als het uitzicht van VS Code, kan je ook uitbreidingen downloaden en installeren in de vorm van 'Extensions'. Met behulp van extensions maak je van VS Code een code editor die specifiek gericht is op jouw noden.

Ik gebruik VS Code sinds een jaar of 4. Als leraar Informatica is Visual Studio (de grote broer van VS Code) vaak *overkill*, en het is fantastisch hoe gemakkelijk ik deze code editor kan aanpassen op maat van mijn lessen en leerlingen. Het feit dat je je instellingen en extensions kan delen tussen computers is voor mij ook een enorm gebruiksgemak.

Mijn gebruik van VS Code richt zich vooral op schoolwerk en persoonlijke projecten. De technologieën die ik gebruik zijn dan ook redelijk beperkt:

- HTML, CSS en Javascript voor webontwikkeling
- Markdown, Git en Github om opdrachten en projecten te beheren
- Docker om ontwikkelingsomgevingen te installeren (LAMP servers, Jekyll, ~~Latex~~)
- C# en Unity voor game development
- ~~Latex om mijn thesis te schrijven~~ (hoera! Mijn thesis is eindelijk klaar!)


<!--more-->

## Settings

### Telemetrie (aka Data Collection)

Zoals met elk product van Microsoft, verzamelt ook VS Code data over jou en je gebruik van hun product. Als je je hier niet comfortabel bij voelt, kan je dit altijd uitzetten.

![telemetry settings in VS Code](/assets/img/2021-12-10-settings-telemetry.gif)

### Zoom Levels

Wanneer ik lesgeef zal ik vaak in- en uitzoomen om code te tonen aan mijn leerlingen. Tegelijk vind ik het vervelend dat ik elke keer de zoom-level moet resetten voor mijn eigen projecten, waar ik van weet dat het zoom-level altijd op `0` mag staan.

Deze instelling vereist dat je in de JSON van de Workspace Settings gaat prutsen.

Open eerst het project waarin je wilt dat het zoom-level niet afhankelijk is van de globale zoom-level instelling. Open vervolgens de Workspace Settings en open de JSON hiervan.

![Workspace Zoom levels](/assets/img/2021-12-10-settings-workspace.gif)

In dit bestand kan je vervolgens deze regel toevoegen:

```json
    "window.zoomLevel": 0,
```


### Emmet en Markdown

Markdown is een fantastische taal om mee aan de slag te gaan om snel documenten op te bouwen. Als ontwikkelaar kan je dit zelfs uitbreiden met behulp van wat HTML en CSS kennis! Wanneer je HTML toevoegt aan je Markdown documenten, merk je echter als snel dat Emmet niet geactiveerd wordt in een Markdown document.

Om Emmet voor HTML te activeren in Markdown-documenten, ga je naar je User settings, zoek je naar "emmet" en voeg je bij "Emmet: Include Languages" de volgende regel toe (alles in kleine letters!):

| Item | Value |
| --- | --- |
| markdown | html |

![enabling emmet in markdown](/assets/img/2021-12-10-markdown-emmet.gif)

### Auto Save

### Sidebar Location

### Preview Mode

### 'Open Editors' Gedeelte

### Color Theme

## Extensions

### Live Server

### Live Share

### Jupyter

### Python

### Markdown All in One

### Markdownlint

<!--more-->