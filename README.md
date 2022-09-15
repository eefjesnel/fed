# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Eefje Snel

  #### Je startniveau:
  Blauw (+ klein beetje rood)

  #### Je focus:
  Surface plane
 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
  https://www.fairtradenederland.nl/

  #### Screenshot(s) van de eerste pagina (small screen): 
  Fairtrade home  
  <img src="readme-images/fairtradehome.png" width="375px" alt="omschrijving van de pagina">

  #### Screenshot(s) van de tweede pagina (small screen):
  Wat is fairtrade?  
  <img src="readme-images/watisfairtrade.png" width="375px" alt="omschrijving van de pagina">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 1e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  Ik had een begrafenis op de dag van de tests. Thuis heb ik de tests geprobeerd na te bootsen.

  #### Screenreader
  Ik ben zelf niet ervaren met screenreaders maar na verloop van tijd werd het duidelijker en makkelijker te gebruiken.
  Wat me opviel is de headings die als vragen zijn gesteld, zijn moeilijker te begrijpen met een screenreader. 
  Verder staan er te veel headings op de website, die allemaal worden uitgesproken door de screenreader.
  Daarnaast hebben veel afbeeldingen en video's geen alt-teksten en worden dus niet omschreven. Dit voelde voor mij vrij frustrerend omdat de stem 
  voorlas dat er een afbeelding was maar vervolgens krijg ik geen informatie of een idee van diezelfde afbeelding.

  Het lijkt me handig om de headings te veranderen naar standaard woorden of zinnen i.m.v. vragen. 
  Door semantische html te schrijven kan ik voorkomen dat elke tekst wordt uitgesproken door de screenreader. Daarnaast verkom ik er ook mee
  dat de afbeeldingen en video's geen alt-tekst hebben.


  #### Muis en Toetsenbord 
  Met tab en pijltjes had ik de Fairtrade site getest met een vrij schokkend resultaat. Om te beginnen werd bij elk filmpje moest je als gebruiker door alle verschillende buttons en links bewegen en kon je deze niet overslaan. Maar wat vooral erg tegenviel was dat alle headings standaard werden overgeslagen en die op geen enkele manier gereikbaar waren voor alleen toetsenbord. Na het laaste filmpje op de pagina, sprong de site direct naar de footer en sloeg de rest over. 

  Het is naar mijn mening erg belangrijk op alle headings bereikbaar te maken en om de buttons en links in video's te kunnen overslaan. Dit maakt de navigatie door de site een stuk soepeler. Hoe ik dat moet doen weet ik nog niet helemaal en zou ik graag willen vragen in het eerst voortgangsgesprek. 


  #### Motoriek (shocks, elastiekjes)
  Ik had geen apparaatje kunnen gebruiken om een goede weergave te geven van een gebruik van een computer met de ziekte van Parkinson. 
  Wel had ik gelukkig een lieftallige huisgenoot die aan mijn hand schudde om toch nog een (misschien niet al te realistische) test te kunnen doen.
  Het bleek dat de Fairtrade website behoorlijk inclusive is voor mensen met de ziekte van Parkinson.
  De buttons en links zijn groot en zijn erg goed klikbaar. Ook als de muis trilt, klik je 7 uit de 10 keer juist.

  Wat misschien nog wat beter kan is dat bij buttons en links die wat aan de kleine kan zijn, toch nog iets meer ruimte geven.
  Of er wat ruimte omheen die niet zichbaar is maar wel klikbaar. 


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Ik had ook helaas geen mooie brillen om meerdere beperkingen te kunnen na bootsen, wel had ik een enorm versterkte bril van mijn ouders ;) en gelukkig een vriend met kleurenblindheid. 
  Het lettertype van de Fairtrade website is groot maar erg vet, Het feit dat het groot is helpt met de leesbaarheid maar de vetheid spreekt dat weer tegen. Verder is de letter-spacing vrij dichtbij elkaar, dit maakt het ook minder leesbaar voor mensen met een minder goed zicht.
  Over het algemeen is het contrast vrij goed om de site, op sommige plekken is er iets minder contrast waar de vriend met kleurenblindheid ook last van had. Verder vond hij de site vrij duidelijk. 

  Door goed na te denken over contrast en een lettertype te kiezen die wat meer open is, kan ik de meeste problemen verhelpen. Mijn focus punt hier is om voor duidelijkheid te zorgen.

</details>



## Breakdownschets (week 1)

<details>
  <summary>De breakdownschetsen vond ik nog vrij moeilijk te maken. Dat kwam vooral omdat de site af en toe wat aangepast moest worden, hierdoor wist ik niet altijd meteen wat ik moest neerzetten. Ik heb de meeste dingen in de breakdownschets gezet, waarschijnlijk missen er nog wat onderdelen maar ik hoop dat bij te kunnen werken in de html.</summary>

  ### de hele pagina: 
  <img src="readme-images/WordPartnerBreakDown.svg" width="375px" alt="breakdown van de hele pagina word partner">

  ### de hele pagina: 
  <img src="readme-images/ProductenBreakDown.svg" width="375px" alt="breakdown van de hele pagina producten">

  ### dynamisch deel (bijv menu): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

  ### wellicht nog een dynamisch deel (bijv filter): 
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1e voortgang</summary>

  ### Stand van zaken
  De html opzetten ging vrij goed, wat ik wel moeilijk vind is het correct semantisch schrijven. Dit hebben we wel geleerd maar ik weet de juiste attributen niet. Soms weet ik bijvoorbeeld niet hoe ik alt-text toevoeg of hoe ik iets de optie kan geven om het over te slaan. Verder heb ik een aantal fouten in mijn site gevonden maar ik weet nog niet helemaal hoe ik dat het best kan verbeteren, ik hoop daar een plan of een handige tip voor de te kunnen maken/vinden. 


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1: Eefje               | student 2: Nicole          | student 3    | student 4        |
  | ---                            | ---                        | ---          | ---              |
  | Verbeteringen site             | Verbeteringen site         | en ik dit    | en dan ik dat    |
  | Semantische html               |                            | nog een punt | dit wil ik zeker |
  | Footer                         | ...                        | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 8e werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

  #### Screenreader
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Muis en Toetsenbord 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Motoriek (shocks, elastiekjes)
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)


  #### Visueel (brillen, contrast, kleurenblind, dark/light). 
  Hier korte omschrijving (met indien nodig afbeeldingen)

  Hier een omschrijving van hoe het opgelost kan worden (met indien nodig afbeeldingen)

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3e voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

  1. bron 1
  2. bron 2
  3. ...

</details>