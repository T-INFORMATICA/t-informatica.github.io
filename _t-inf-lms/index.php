 
<!-- application page -->
<?php
  session_start();
?>


<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="/_t-inf-lms/assets/css/styles.css">

    <script src="/_t-inf-lms/assets/encodeHTML.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  </head>
  <body>
    <header>
      <nav id="mainNavigation">
  <!-- COURSE DROPDOWN -->
  <span class="dropdownButton">
    cursussen
    <span class="material-icons">
      expand_more
    </span>
    <div class="dropdown">
      
      <div class="courseNav">
        <h1><a href="/_t-inf-lms/courses/programmeren/">programmeren</a></h1>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/programmeren/instructies/">Instructies</a></h2>
            
            <a href="/_t-inf-lms/courses/programmeren/instructies/variabelen.html">Variabelen</a>
            
            <a href="/_t-inf-lms/courses/programmeren/instructies/expressies.html">Expressies</a>
            
            <a href="/_t-inf-lms/courses/programmeren/instructies/arrays.html">Arrays</a>
            
            <a href="/_t-inf-lms/courses/programmeren/instructies/instructies.html">Instructies</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/programmeren/codeblokken/">Codeblokken</a></h2>
            
            <a href="/_t-inf-lms/courses/programmeren/codeblokken/codeblokken.html">Codeblokken</a>
            
            <a href="/_t-inf-lms/courses/programmeren/codeblokken/functies.html">Functies</a>
            
            <a href="/_t-inf-lms/courses/programmeren/codeblokken/selectie.html">Selectie</a>
            
            <a href="/_t-inf-lms/courses/programmeren/codeblokken/iteratie.html">Iteratie</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/programmeren/datastructuren/">Datastructuren</a></h2>
            
            <a href="/_t-inf-lms/courses/programmeren/datastructuren/objecten.html">Objecten</a>
            
            <a href="/_t-inf-lms/courses/programmeren/datastructuren/klassen.html">Klassen</a>
            
            <a href="/_t-inf-lms/courses/programmeren/datastructuren/inheritance.html">Inheritance</a>
            
            <a href="/_t-inf-lms/courses/programmeren/datastructuren/access-modifiers.html">Access Modifiers</a>
            
            <a href="/_t-inf-lms/courses/programmeren/datastructuren/relaties.html">Relaties</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/programmeren/software-ontwikkeling/">Software Ontwikkeling</a></h2>
            
            <a href="/_t-inf-lms/courses/programmeren/software-ontwikkeling/domeinmodel.html">Domeinmodel</a>
            
          </div>
          
        </div>
      
      <div class="courseNav">
        <h1><a href="/_t-inf-lms/courses/webontwikkeling/">webontwikkeling</a></h1>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/webontwikkeling/html">HTML</a></h2>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/websites-maken.html">Websites Maken</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/elementen.html">Elementen</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/attributen.html">Attributen</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/block-en-inline.html">Block en Inline</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/structuur.html">Structuur</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/html/semantiek.html">Semantiek</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/webontwikkeling/css">CSS</a></h2>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/css.html">CSS</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/selectors.html">Selectors</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/kleuren.html">Kleuren</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/tekst.html">Tekst</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/box-model.html">Box Model</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/css/state-selectors.html">State Selectors</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/webontwikkeling/layout">Layout</a></h2>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/layout/responsive-webdesign.html">Responsive Webdesign</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/layout/css-grid.html">CSS Grid</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/layout/grid-basisbegrippen.html">Grid Basisbegrippen</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/layout/grid-implementatie.html">Grid Implementatie</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/layout/uitbreiding.html">Uitbreiding</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/webontwikkeling/statische-websites">Statische Websites</a></h2>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/statische-websites/icons.html">Icons</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/statische-websites/menu.html">Menu</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/statische-websites/popup.html">Popup</a>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/statische-websites/modal-popup.html">Modal Popup</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/webontwikkeling/dynamische-websites">Dynamische Websites</a></h2>
            
            <a href="/_t-inf-lms/courses/webontwikkeling/dynamische-websites/url-parameters.html">URL Parameters</a>
            
          </div>
          
        </div>
      
      <div class="courseNav">
        <h1><a href="/_t-inf-lms/courses/databanken/">databanken</a></h1>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/databanken/database-ontwerp">Database Ontwerp</a></h2>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/inleiding.html">Inleiding</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/voorbeeld.html">Désirée's Dessertenboek</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/fouten.html">Fouten</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/tabellen.html">Tabellen</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/sleutels.html">Sleutels</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/multipliciteit.html">Multipliciteit</a>
            
            <a href="/_t-inf-lms/courses/databanken/database-ontwerp/normalisatie.html">Normalisatie</a>
            
          </div>
          
          
          <div class="subjectNav">
            <h2><a href="/_t-inf-lms/courses/databanken/sql">SQL</a></h2>
            
            <a href="/_t-inf-lms/courses/databanken/sql/inleiding.html">Inleiding</a>
            
            <a href="/_t-inf-lms/courses/databanken/sql/voorbeeld.html">Muziek Database</a>
            
            <a href="/_t-inf-lms/courses/databanken/sql/projecties.html">Projecties</a>
            
            <a href="/_t-inf-lms/courses/databanken/sql/selecties.html">Selecties</a>
            
            <a href="/_t-inf-lms/courses/databanken/sql/ordening.html">Ordening</a>
            
            <a href="/_t-inf-lms/courses/databanken/sql/meerdere-tabellen.html">Joins</a>
            
          </div>
          
        </div>
      
    </div>
  </span>
  <!-- PROFILE DROPDOWN -->
  <a href="/_t-inf-lms/" class="material-icons profileButton">person</a>
  <!-- SEARCH BUTTON -->
  <span  class="searchButton" id="searchButton">
    <a href="#searchButton" class="material-icons">search</a>
    <div class="searchBar">
      <!-- Html Elements for Search -->
      <div id="search-container">
        <a href="#close" class="closeBackground">&nbsp;</a>
          <input type="text" id="search-input" placeholder="search...">
          <hr>
          <ul id="results-container"></ul>
      </div>
      
      <!-- Script pointing to search-script.js -->
      <script src="/_t-inf-lms/assets/js/search.js" type="text/javascript"></script>
      
    </div>
  </span>
</nav>
    </header>
    <div id="mainLayoutGridContainer">
        <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once $_SERVER['DOCUMENT_ROOT'] . "/_t-inf-lms/application/autoloader.php";

require_once('client.GoogleLogin.php');

$view = new MainView();
$model = new MainModel($view);
$controller = new MainController($model);
?>

<section id="profileContent">
    <a href="#studentNavigation" id="openNavButton" class="material-icons">menu</a>
    <nav id="studentNavigation">
        <h1>LMS</h1>
        <div class="studentLinks"> 
<?php
    echo $view->GetMenuHTML();
?>
        </div>
    </nav>
    <a href="#close" id="closeNavButton" class="material-icons">close</a>

    <section id="chapterContent"> 
<?php
    echo $view->GetContentHTML();
?>
    </section>
</section>
      <footer>
        
      </footer>
    </div>
  </body>
  <!-- Configuration -->
  <script>
      SimpleJekyllSearch({
      searchInput: document.getElementById('search-input'),
      resultsContainer: document.getElementById('results-container'),
      json: '/_t-inf-lms/search.json'
      })
  </script>
</html>
