# DumbSchool

### planning
 - events
 - deadlines
  
### vak
 - updates
 - schoolwerk
	 - materiaal (bv. cursus/links/...)
	 - planning (bv. taken/testen/...)
 - puntenboek
	 - nieuwe evaluatie
	 - rapport
  
### ledenbeheer
 - leden
   - leerlingen
   - ouders
   - leerkrachten
   - admins
 - groepen
	 - klassen
	 - graden
	 - ...
  
### Leerlingendossier
 - aanwezigheden
 - nota's
 - rapportgeschiedenis

## docker/jekyll command
```
docker run --rm --volume="${PWD}:/srv/jekyll" -p 4000:4000 jekyll/jekyll jekyll serve --force_polling
```
[http://localhost:4000/](http://localhost:4000/)