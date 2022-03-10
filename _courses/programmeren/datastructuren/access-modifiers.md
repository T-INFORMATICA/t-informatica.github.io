---
title: Access Modifiers
tags: 
 - public
 - private
 - protected
 - set
 - setter
 - get
 - getter
definitions: 
 - name: public
   definition: De field of method is wel beschikbaar buiten de scope van de klasse.
 - name: private
   definition: de field of method is niet beschikbaar buiten de scope van de klasse.
 - name: protected
   definition: De field of method is niet beschikbaar buiten de scope van de klasse, behalve voor de subklassen.
 - name: setter
   definition: Een functie die ervoor zorgt dat een private field aangepast kan worden op een gecontroleerde manier.
 - name: getter
   definition: Een functie die ervoor zorgt dat een private field opgevraagd kan worden op een gecontroleerde manier.
description: Ook programmeurs maken vaak fouten. Access modifiers zijn een manier om veelgemaakte fouten te voorkomen.
---


## Voorbeeld

Om te verduidelijken wat Access Modifiers precies zijn wordt een voorbeeld klasse `Leerling gebruikt`. Deze klasse heeft 2 fields: `_naam` en `_leeftijd`.

```javascript
class Leerling {
	#naam;
	#leeftijd;
	constructor() {
		this.#naam = "";	
		this.#leeftijd = 0;
	}
}
```
```php
class Leerling {	
	public $_naam = "";
	public $_leeftijd = 0;
}
```
```csharp
class Leerling {	
	string naam = "";
	int _leeftijd = 0;
}
```

Voor dit voorbeeld wordt ook een object aangemaakt van het datatype `Leerling` genaamd `leerling1`.

```javascript
let leerling1 = new Leerling();
```
```php
$leerling1 = new Leerling();
```
```csharp
Leerling leerling1 = new Leerling();
```

## Field en Method access

Variabelen hebben een bepaald datatype. Dit datatype bepaald wat voor soorten waardes in een variabele kunnen worden opgeslagen. Zo kan een integer alleen gehele getallen opslaan, terwijl een string tekst kan opslaan. 

Bij veel fields zijn deze beperkingen niet genoeg. Een leeftijd mag bijvoorbeeld nooit negatief zijn, en een naam bevat geen leestekens. Afhankelijk waar een field voor dient, gelden er dus andere regels. Het doel van een field heet ook wel de **semantiek** van een field. De regels die bepalen wat je in een field steekt zijn dan ook **semantische regels**.

In het voorbeeld kan op dit moment elk field rechtstreeks aangepast worden. Er is dus geen enkele manier om deze semantische regels af te dwingen!

```javascript
let leerling1 = new Leerling();
Leerling1.#naam = "#?!";			// Dit mag niet!
Leerling1.#leeftijd = -2148;			// Dit mag niet!
```
```php
$leerling1 = new Leerling();
Leerling1->_naam = "#?!";			// Dit zou niet mogen!
Leerling1->_leeftijd = -2148;			// Dit zou niet mogen!
```
```csharp
Leerling leerling1 = new Leerling();
Leerling1._naam = "#?!";			// Dit zou niet mogen!
Leerling1._leeftijd = -2148;			// Dit zou niet mogen!
```

Wat hier vooral belangrijk is, is dat de variabelen `_naam` en `_leeftijd` op dit moment gebruikt kunnen worden **buiten de scope van de klasse**, waardoor hun waarden zomaar aangepast kunnen worden.

Dit is dus absoluut niet de bedoeling. Er moeten daarom 2 belangrijke dingen gebeuren:

 1. **Fields beperken tot de scope van de klasse**: fields mogen niet rechtstreeks worden aangepast buiten de scope van de klasse.
 2. **Semantische regels toepassen bij het aanpassen van fields**: De klasse moet ervoor zorgen dat je de waarden kunt aanpassen, waarbij de semantische regels worden toegepast.

### Private, Protected en Public

Om te bepalen wat de scope van een field of method is worden **access modifiers** gebruikt. Dit zijn keywords die je plaatst bij het aanmaken van een field of method.

Er zijn 3 belangrijke access modifiers:

 - Private: de field of method is **niet beschikbaar** buiten de scope van de klasse.
 - Protected: de field of method is **niet beschikbaar** buiten de scope van de klasse, **behalve voor de subklassen**.
 - Public: de field of method is **wel beschikbaar** buiten de scope van de klasse.

**Fields moeten altijd private zijn** (indien mogelijk)! Alleen zo kunnen de semantische regels worden afgedwongen. Elke programmeertaal heeft zijn eigen regels over het gebruik van access modifiers.

```javascript
// In Javascript is elk field of method met een # ervoor private.
// Methods zonder access modifier zijn steeds public!
class Leerling {
	#naam;
	#leeftijd;
	constructor() {
		this.#naam = "";	
		this.#leeftijd = 0;
	}
}
```
```php
// In PHP ben je verplicht om bij een field een access modifier te plaatsen!
// In PHP moet je dit niet doen bij methods.  
// Methods zonder access modifier zijn steeds public!
class Leerling {	
	private $_naam = "";			// Dit field is private
	public $_leeftijd = 0;			// Dit field is public (mag niet!)

	private function Slaap2() {		// Deze method is private
	}
}
```
```csharp
// In C# moet je geen access modifier plaatsen bij fields en methods. 
// Fields zonder access modifier zijn steeds private! 
// Methods zonder access modifier zijn steeds public!
class Leerling {	
	string naam = "";				// Dit field is private
	private string voornaam = "";		// Dit field is private
	public int _leeftijd = 0;		// Dit field is public (mag niet!)
	
	private void Slaap() {			// Deze method is private
	}
}
```

### Set functie: semantische regels toepassen

Wanneer elk field een private access modifier krijgt, is het helemaal niet meer mogelijk om de waarde aan te passen of op te vragen. Dit is uiteraard niet de bedoeling! 

Het is wel de bedoeling dat een field kan worden aangepast, maar enkel op zo'n manier dat de semantische regels worden toegepast. Bijvoorbeeld: Wanneer de leeftijd wordt aangepast, mag dit geen negatieve waarde krijgen. Wanneer de naam wordt aangepast, mag dit enkel letters en spaties bevatten.

Om dit te kunnen doen, wordt een truc toegepast. **Elk field dat aanpasbaar moet zijn, krijgt een public functie.** In deze functie kunnen, met behulp van programmeercode, de semantische regels worden toegepast.

Dit soort functie wordt een **Set functie** genoemd. Dit wordt ook wel eens afgekort tot **setter**. Deze functie krijgt een parameter, waaraan de nieuwe waarde voor het field wordt meegegeven. In de functie worden de semantische regels dan bepaald.

Hieronder wordt het voorbeeld zo aangepast dat `_leeftijd` een Set functie krijgt, genaamd `SetLeeftijd`.

```javascript
class Leerling {
	#naam;
	#leeftijd;
	constructor() {
		this.#naam = "";	
		this.#leeftijd = 0;
	}

	set leeftijd(value) {
		If (value > 0) {
			this.#leeftijd = value;
		}
	}
}
```
```php
class Leerling {	
	private $_naam = "";
	private $_leeftijd = 0;

	function SetLeeftijd($leeftijd) {
		If ($leeftijd > 0) {
			$this->_leeftijd = $leeftijd;
		}
	}
}
```
```csharp
class Leerling {	
	string naam = "";
	int _leeftijd = 0;

	public void SetLeeftijd(int leeftijd) {
		If (leeftijd > 0) {
			this._leeftijd = leeftijd;
		}
	}
}
```

Dit systeem heeft enkele voordelen:

 - De naam van een leerling kan niet worden aangepast.
 - De leeftijd van een leerling kan wel worden aangepast, maar enkel door een geldige leeftijd.

### Get functie: private fields opvragen

Wanneer elk field een private access modifier krijgt, is het helemaal niet meer mogelijk om de waarde op te vragen. Ook dit is uiteraard niet de bedoeling! 

Om dit te kunnen doen, wordt dezelfde truc toegepast. **Elk field dat op te vragen moet zijn, krijgt een public functie.** Deze functie geeft de waarde van een private field terug. Dit soort functie wordt een **Get functie** genoemd, vaak afgekort tot **getter**.

Hieronder wordt het voorbeeld zo aangepast dat `_naam` een Get functie krijgt, genaamd `GetNaam`. Dit is een heel simpele functie, die gewoon de waarde van `_naam` teruggeeft.

```javascript
class Leerling {
	#naam;
	#leeftijd;
	constructor() {
		this.#naam = "";	
		this.#leeftijd = 0;
	}

	get naam() {
		return this.#naam;
	}
}
```
```php
class Leerling {	
	private $_naam = "";
	private $_leeftijd = 0;

	function GetNaam() {
		return $this->_naam;
	}
}
```
```csharp
class Leerling {	
	string naam = "";
	int _leeftijd = 0;

	public void GetNaam() {
		return this._naam;
	}
}
```
