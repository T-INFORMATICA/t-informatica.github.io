---
layout: homepagina
title: Home
---

<header markdown="1" class="full-bleed bg-accent-B">

# Welkom

</header>



<section id="reportcard" class="forUser | bg-complement elevated-low" style="display: none">
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

<section id="termsTimelines" class="forUser | bg-complement elevated-low" style="display: none">
<div id="myChart" style="width:100%; height:500px;"></div>
</section>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="/assets/js/lms-reportcard.js"></script>
<script>
    firebase.auth().onAuthStateChanged(function (user) {
        FillInReportcard();
    });
</script>