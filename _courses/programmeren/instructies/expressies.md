---
title: Expressies
tags: 
 - expressie
 - rekenkundige operatie
 - logische operatie
 - operatie
 - voorwaarde
 - operator
 - vergelijking
definitions:
 - name: expressie
   definition: Een bewerking met als resultaat een waarde.
 - name: rekenkundige operatie
   definition: Een wiskundige bewerking tussen twee getallen.
 - name: logische operatie
   definition: Een logische bewerking tussen twee waardes.
 - name: operatie
   definition: De verschillende soorten bewerkingen die een programmeur kan gebruiken. 
 - name: voorwaarde
   definition: Een bewerking met als resultaat een booleaanse waarde.
 - name: operator
   definition: Het teken van een bewerking.
description: Elk programma maakt bewerkingen met data. In dit hoofdstuk leer je de meest gekende bewerkingen toepassen binnen een programmeertaal.
---


## Expressie

Een expressie is een bewerking met als resultaat een waarde. Bijvoorbeeld:

<pre class="prettyprint linenums lang lang-PHP lang-CS lang-JS">
5 		// resultaat is 5
2 > 7 		// resultaat is false (= niet waar)
3 * 18 / 2 	// resultaat is 27
</pre>

Wanneer het resultaat van de expressie *waar* of *niet waar* is, wordt dit een **voorwaarde** genoemd.

Er zijn verschillende soorten bewerkingen die een programmeur kan gebruiken. Zo’n bewerking wordt ook wel een **operatie** genoemd. Er zijn verschillende soorten operaties. De 2 meest bekende zijn:

 - **rekenkundige operaties**
 - **logische operaties**

Een operatie is een bewerking van 2 waardes. Wanneer je verschillende operaties achter elkaar schrijft (bijv.: 3 * 18 / 2 ) dan worden die operaties uitgevoerd volgens de wiskundige volgorde van bewerkingen.

Een expressie is het geheel van alle operaties die bij elkaar horen. Een expressie kan dus bestaan uit geen, één of meerdere operaties, zolang het resultaat maar een waarde is. Bijvoorbeeld:

<pre class="prettyprint linenums lang lang-PHP lang-CS lang-JS">
5 		// 1 expressie, 0 operaties (waarde is 5)
2 > 7 		// 1 expressie, 1 operatie  (waarde is false)
3 * 18 / 2 	// 1 expressie, 2 operaties (waarde is 27)
</pre>

Om een expressie te gebruiken moet de programmeur zich houden aan 2 regels:
 - Een expressie mag nooit op zichzelf staan
 - Het resultaat van een expressie moet altijd gebruikt worden

<pre class="prettyprint linenums lang lang-JS">
5 + 2			// error, een expressie kan niet op zichzelf staan
5 + 2;			// error, het resultaat wordt niet gebruikt
var getal = 5 + 2; 	// correct
</pre>
<pre class="prettyprint linenums lang lang-PHP">
5 + 2			// error, een expressie kan niet op zichzelf staan
5 + 2;			// error, het resultaat wordt niet gebruikt
$getal = 5 + 2; 	// correct
</pre>
<pre class="prettyprint linenums lang lang-CS">
5 + 2			// error, een expressie kan niet op zichzelf staan
5 + 2;			// error, het resultaat wordt niet gebruikt
int getal = 5 + 2; 	// correct
</pre>

In dit hoofdstuk worden variabelen gebruikt om de waarde van een operatie op te slaan. Op die manier zal de code geen errors of warnings tonen.

## Rekenkundige operaties

In programmeren zal je vaak wiskundige bewerkingen nodig hebben. Dit hoofdstuk gaat over de 4 basis bewerkingen:
 - Optellen
 - Aftrekken
 - Vermenigvuldigen
 - Delen

Wanneer we in programmeren spreken over een bewerking, noemen we dit ook wel een **operatie**. Het teken van de bewerking noemen we dan ook de **operator**. Bijvoorbeeld:

 - Optellen:		+
 - Aftrekken:		-
 - Vermenigvuldigen:	*
 - Delen:		/
  
Getallen kunnen gebruikt worden om met te rekenen. Variabelen worden gebruikt om het resultaat van die bewerking bij te houden.
 
<pre class="prettyprint linenums lang lang-JS">
var voorbeeld1 = 5 * 2;
var voorbeeld2 = 9 / 3;
var voorbeeld3 = 7 + 4;
var voorbeeld4 = 8 - 1;
</pre>
<pre class="prettyprint linenums lang lang-PHP">
$voorbeeld1 = 5 * 2;
$voorbeeld2 = 9 / 3;
$voorbeeld3 = 7 + 4;
$voorbeeld4 = 8 - 1;
</pre>
<pre class="prettyprint linenums lang lang-CS">
int voorbeeld1 = 5 * 2;
int voorbeeld2 = 9 / 3;
int voorbeeld3 = 7 + 4;
int voorbeeld4 = 8 - 1;
</pre>

Ook variabelen kunnen gebruikt worden om met te rekenen:

<pre class="prettyprint linenums lang lang-JS">
var voorbeeld1 = 6;
var voorbeeld2 = 2;

var voorbeeld3 = voorbeeld1 * 3;
var voorbeeld4 = 8 + voorbeeld2;

var voorbeeld5 = voorbeeld1 / voorbeeld2;
</pre>
<pre class="prettyprint linenums lang lang-PHP">
$voorbeeld1 = 6;
$voorbeeld2 = 2;

$voorbeeld3 = $voorbeeld1 * 3;
$voorbeeld4 = 8 + $voorbeeld2;

$voorbeeld5 = $voorbeeld1 / $voorbeeld2;
</pre>
<pre class="prettyprint linenums lang lang-CS">
int voorbeeld1 = 6;
int voorbeeld2 = 2;

int voorbeeld3 = voorbeeld1 * 3;
int voorbeeld4 = 8 + voorbeeld2;

int voorbeeld5 = voorbeeld1 / voorbeeld2;
</pre>

## Logische operaties

Net zoals bij rekenkundige operaties, wordt ook bij logische operaties gesproken over operaties en operators. Logische operaties zijn vergelijkingen tussen 2 waarden of variabelen. Zo'n vergelijking heeft altijd als uitkomst *true* of *false*.

In programmeren zal je vaak logische vergelijkingen nodig hebben. De 4 basis vergelijkingen zijn:

 - **Groter** dan
 - **Kleiner** dan
 - Is **gelijk** aan
 - Is **niet** gelijk
 
Een vergelijking is een soort **operatie**. Het teken van de vergelijking heet de **operator**. Volgende operators kunnen gebruikt worden bij vergelijkingen.
 
 - **Groter** dan:			>
 - **Kleiner** dan:			<
 - Is **gelijk** aan:			==
 - Is **niet gelijk**:			!=
 - Is **groter of gelijk**:		>=
 - Is **kleiner of gelijk**:		<=
 
 Opgelet! Er is **een verschil tussen = en ==**. 
 
 - **=**	dit is de **assignment** operator: een enkel gelijk-aan teken wordt gebruikt om een waarde aan een variabele **toe te wijzen**.
 - **==**	dit is de **equal** operator: een dubbel gelijk-aan teken wordt gebruikt om 2 waarden of variabelen met elkaar te **vergelijken**.
 
**Vergelijkingen geven altijd een booleaanse uitkomst: *waar* of niet *waar*.** Vergelijkingen worden immers steeds gebruikt om een vraag te stellen:

 - Is X groter dan Y?
 - Is X kleiner dan Y?
 - Is X gelijk aan Y?
 - Is X niet gelijk aan Y?

Het antwoord op deze vraag is altijd ja (true) of neen (false).

### Vergelijkingen 

Omdat de uitkomst van een vergelijking een booleaanse waarde is (true of false), kan dit worden bijgehouden in een booleaanse variabele.

Bijvoorbeeld:

<pre class="prettyprint linenums lang lang-JS">
var voorbeeld1 = 5 > 3; // true, want 5 is groter dan 3
var voorbeeld2 = 5 < 3; // false, want 5 is niet kleiner dan 3
var voorbeeld2 = 5 == 3; // false, want 5 is niet gelijk aan 3
</pre>
<pre class="prettyprint linenums lang lang-PHP">
$voorbeeld1 = 5 > 3; // true, want 5 is groter dan 3
$voorbeeld2 = 5 < 3; // false, want 5 is niet kleiner dan 3
$voorbeeld2 = 5 == 3; // false, want 5 is niet gelijk aan 3
</pre>
<pre class="prettyprint linenums lang lang-CS">
bool voorbeeld1 = 5 > 3; // true, want 5 is groter dan 3
bool voorbeeld2 = 5 < 3; // false, want 5 is niet kleiner dan 3
bool voorbeeld2 = 5 == 3; // false, want 5 is niet gelijk aan 3
</pre>

Uiteraard is het nogal onzinnig om deze vergelijkingen te maken: het is op voorhand al duidelijk dat 3 kleiner is dan 5. Waar vergelijkingen dus echt interessant worden is wanneer je gebruik maakt van variabelen.

<pre class="prettyprint linenums lang lang-JS">
var test1 = 27;
var test2 = 17;

var test = test1 < test2; // false, want test1 is groter

test2 = 32;

var test = test1 < test2; // true, want test1 is kleiner
</pre>
<pre class="prettyprint linenums lang lang-PHP">
$test1 = 27;
$test2 = 17;

$test = $test1 < $test2; // false, want test1 is groter

$test2 = 32;

$test = $test1 < $test2; // true, want test1 is kleiner
</pre>
<pre class="prettyprint linenums lang lang-CS">
int test1 = 27;
int test2 = 17;

bool test = test1 < test2; // false, want test1 is groter

test2 = 32;

bool test = test1 < test2; // true, want test1 is kleiner
</pre>

### Voorwaarden

**Een voorwaarde is een expressie met als uitkomst true of false**. Voorwaarden worden gebruikt om code uit te voeren als de voorwaarde waar is. Hierover meer in een ander hoofdstuk.

## Coding Guidelines

Wanneer we een operatie uitvoeren, zorgen we steeds voor een spatie voor en na de operator:
 - WEL:		1 < 3<br>
	  	1 + 3
 - NIET:	1<3<br>
	  	1+3
