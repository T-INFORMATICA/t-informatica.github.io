---
layout: lms
---

<header class="full-bleed bg-accent-B">
    <h1>Rapport</h1>
</header>

<section id="reportcard" class="bg-complement elevated-low">
{%- for coursedata in site.data.courses %}
{% assign courseid=coursedata.name | remove: " " | downcase %}
    <div id="{{courseid}}" class="reportcard-course">

        <table class="reportcard-course__resultsTable">
            <colgroup>
                <col>
                <col>
                <col>
            </colgroup>
            <thead>
                <tr>
                    <th colspan="3">
                        <h2 id="{{courseid}}-title" class="reportcard-course__title">{{coursedata.name}}</h2>
                    </th>
                </tr>
                <tr>
                    <th>
                        result
                    </th>
                    <th>
                        onderwerp
                    </th>
                    <th>
                        theorie
                    </th>
                </tr>
            </thead>
            
            {% for subjectdata in coursedata.subjects %}
                {% assign numTerms = 0 %}
                {%- for chapter in subjectdata.chapters -%}
                    {%- for course in site.courses -%}
                        {%- if course.url == chapter.link %}
                            {%- for definition in course.definitions %}
                                {%- assign numTerms = numTerms | plus: 1 -%}
                            {%- endfor -%}
                        {%- endif -%}
                    {%- endfor -%}
                {%- endfor %}
                {% assign subjectid=subjectdata.name | remove: " " | downcase %}
            <tbody id="{{ subjectid }}" class="reportcard-subject | resultUnknown">
                <tr>
                    <td rowspan="2" class="reportcard-subject__grade">
                        -
                    </td>
                    <td class="reportcard-subject__title">
                        <h3>{{subjectdata.name}}</h3>
                    </td>
                    <td class="reportcard-subject__knownTerms">
                        0
                    </td>
                </tr>
                <tr>
                    <td class="reportcard-subject__levelText">
                        &nbsp;
                    </td>
                    <td class="reportcard-subject__numTerms">
                        /{{ numTerms }}
                    </td>
                </tr>
            </tbody>
            {%- endfor -%}
        </table>
    </div>
{% endfor %}
</section>

<section id="termsTimelines" class="bg-complement elevated-low">
<div id="myChart" style="width:100%; height:500px;"></div>
</section>

<h2 id="toelichting-rapport">Toelichting bij het Rapport</h2>
<ul>
    <li>
        De resultaten die je hier ziet staan, zijn de resultaten die je nu zou krijgen, moest er een rapport uitgedeeld
        worden op school.
    </li>
    <li>
        De evaluatie van Toegepaste Informatica is doorlopend. Met andere woorden, het resultaat op een rapport houdt
        rekening met de vooruitgang gedurende het volledige schooljaar tot dat moment.
    </li>
    <li>
        Een evaluatie geeft weer in welke mate je de leerstof beheerst. Dit gebeurt bij Toegepaste Informatica
        volgens het lettersysteem. In het schoolreglement kan je deze opdeling terugvinden als volgt:
        <ul>
            <li><strong>A</strong> = de leerling beheerst de kennis en vaardigheden uitstekend;</li>
            <li><strong>B</strong> = de leerling beheerst de kennis en vaardigheden goed tot zeer goed;</li>
            <li><strong>C</strong> = de leerling beheerst de kennis en vaardigheden matig tot goed, al kunnen er enkele
                tekorten
                zijn;</li>
            <li><strong>D</strong> = de leerling beheerst de kennis en vaardigheden net voldoende; er zijn ernstige
                tekorten die
                bijgewerkt moeten worden;</li>
            <li><strong>E</strong> = de leerling beheerst de kennis en vaardigheden onvoldoende.</li>
        </ul>
    </li>
    <li>
        <a href="lms-evaluations.html">Op je tijdslijn</a> kan je alle opdrachten, taken en toetsen van dit schooljaar
        terugvinden.
        Je vindt hier ook gedetailleerde commentaar terug.
        Elke opdracht, taak of toets wordt beoordeeld op basis van één of meerdere doelstellingen, waarbij elke
        doelstelling apart wordt
        geevalueerd. Het is dus mogelijk dat een toets of taak meerdere evaluaties toont, één voor elke doelstelling.
    </li>
</ul>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="/assets/js/lms-reportcard.js"></script>
<script>
    firebase.auth().onAuthStateChanged(function (user) {
        FillInReportcard();
    });
</script>