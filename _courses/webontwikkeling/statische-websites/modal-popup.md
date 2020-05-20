---
title: Modal Popup Window
tags: 
 - modal
 - popup
 - window
 - target
description:
---

# Modal Popup Window

Een modal popup window bestaat uit 3 delen:

*   **Modal**: het venster bevindt zich bovenop alle andere inhoud.
*   **Popup**: het venster wordt geopend of gesloten door een actie van de gebruiker.
*   **Window**: het is een venster dat een beperkt deel van het scherm inneemt.

<img src="{{ site.baseurl }}/assets/img/statische-websites-4.png" alt="" style="height: auto; max-width: 100%">

Een modal popup bestaat meestal uit 2 delen:


1. **Het popup venster zelf**: meestal een **`<div>`** element met daarin tekst, afbeeldingen, knoppen en een simpele layout. 
    *   Het popup venster wordt meestal standaard verborgen met de **`display: none;`** stijlregel
2. **Een hyperlink, knop of icoontje** waarop je kan klikken om de popup te openen. 
    *   Wanneer de popup wordt geopend wordt meestal de rest van de website vager gemaakt met een doorzichtige overlay, die zich tussen de popup en de website bevindt.

## Modal

Wanneer een element Modal is, wilt dit zeggen dat het venster bovenop alle andere content wordt weergegeven. Vaak staat dit element ook gecentreerd op het scherm. Meestal wordt de achtergrond ook verduisterd.

Deze techniek maakt daarom gebruik van 3 onderdelen:

1. Een **container** die alle modal elementen verzamelt. (`.modal`)
2. De aanklikbare, verduisterde **achtergrond** van het Modal Window. (`.modalBackground`)
3. Een tweede container, waarin het **venster** komt. (`.window`)

<pre class="linenums lang-sql">
&lt;div class=&quot;modal&quot;&gt;
	&lt;a href=&quot;#&quot; class=&quot;modalBackground&quot;&gt;&lt;/a&gt;
	&lt;div class=&quot;window&quot;&gt;
		test
	&lt;/div&gt;
&lt;/div&gt;
</pre>

<pre class="linenums lang-sql">
.modal>a.modalBackground {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
}

.modal {
	position: fixed;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	display: grid;
	justify-items: center;
	align-items: center;
}
</pre>

## Popup

Er worden aan de CSS code 2 selectors toegevoegd:

*   De `.popup` selector, die elk element met de klasse popup standaard onzichtbaar maakt.
*   De `.popup:target` selector[^1], die elk element met de klasse popup zichtbaar maakt vanaf deze geselecteerd wordt.

De HTML code wordt slechts op 2 plaatsen aangepast: 

*   De div met klasse `.modal` krijgt nu ook de klasse `.popup` toegewezen.
*   Een hyperlink wordt op de website geplaatst die het popup window opent.

<pre class="linenums lang-sql">
.modal>a.modalBackground {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
}

.modal {
	position: fixed;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	display: grid;
	justify-items: center;
	align-items: center;
}

.popup {
	display: none;
}

.popup:target {
	display: grid;
}
</pre>



<pre class="linenums lang-sql">
&lt;a href=&quot;#modal1&quot;&gt;KLIK&lt;/a&gt;
&lt;div class=&quot;modal popup&quot;&gt;
	&lt;a href=&quot;#&quot; class=&quot;modalBackground&quot;&gt;&lt;/a&gt;
	&lt;div class=&quot;window&quot;&gt;
		test
	&lt;/div&gt;
&lt;/div&gt;
</pre>




## Window

In dit voorbeeld wordt een simpel, wit venster met een close-icon uitgewerkt.

<img src="{{ site.baseurl }}/assets/img/statische-websites-5.png" alt="" style="height: auto; max-width: 100%">

*   In het venster (`.window`) worden een **`<a>`** en **`<p>`**-element geplaatst. 
*   Het  **`<a>`**-element (`.fa.fa-times`)  is een inline element, dus kan hier een Font Awesome icon van gemaakt worden. Daarom dat de classes `fa` en `fa-times` worden toegevoegd.

<pre class="linenums lang-sql">
&lt;div class=&quot;modal popup&quot;&gt;
	&lt;a href=&quot;#&quot; class=&quot;modalBackground&quot;&gt;&lt;/a&gt;
	&lt;div class=&quot;window&quot;&gt;
		&lt;a href=&quot;#&quot; class=&quot;fa fa-times&quot;&gt;&lt;/a&gt;
		&lt;p&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor sagittis, aliquet dui id, maximus ex. Pellentesque ut dictum nisl, non suscipit sapien. 
		&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;
</pre>

De stijlregels hieronder geven het voorbeeld hetzelfde uitzicht als op de afbeelding:


<pre class="linenums lang-sql">
.window {
	position: relative;		/* Dit zorgt ervoor dat het venster bovenop de 						   verduisterde achtergrond getoond wordt. */
	background-color: white;	/* zet de achtergrondkleur op wit, in 								   plaats van doorzichtig. */
	border: 1px solid black;	/* geef het popup venster een dunne rand. */

	margin: 10% auto;		/* plaats de popup in het midden, met een 							   beetje ruimte van de bovenrand. */
	width: 400px;			/* geef de popup een breedte van 400px */
}


.window>.fa-times {
	float: right;			/* plaats het kruis aan de rechterkant van het 
					   venster */
	padding: 5px;			/* zorg ervoor dat het kruis niet tegen de 
					   rand plakt */

	color: black;			/* geef het kruis een zwarte kleur */
	text-decoration: none;	/* verwijder de onderlijning */
}

.window>p {
	margin: 30px;			/* zorg dat de paragraaf-tekst wat ruimte 
					   heeft rondom de tekst */
}

.modal>a.modalBackground {
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: 0.5;
}

.modal {
	position: fixed;
	top: 0px;
	left: 0px;
	bottom: 0px;
	right: 0px;
	display: grid;
	justify-items: center;
	align-items: center;
}

.popup {
	display: none;
}

.popup:target {
	display: grid;
}
</pre>


