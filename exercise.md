---
title: Exercises
---

<section id="profileContent">
    <section id="chapterContent"> 
{%- for datacourse in site.data.courses %}
    <div>
        <h1>{{ datacourse.name }}</h1>
            {% for subject in datacourse.subjects %}
          
                <div class="subjectNav">
                    <h2>{{ subject.name }}</h2>
                    <ul>
                    {%- for chapter in subject.chapters -%}
                        <li><a href="{{site.baseurl}}?show=exercise&doelstelling={{ chapter.doel }}">{{ chapter.name }}</a></li>
                    {%- endfor %}
                    </ul>
                </div>
            {% endfor %}
    </div>
{% endfor -%}
    </section>
</section>