---
layout: homepagina
activity: blog
title: Blog
---

<header markdown="1" class="full-bleed bg-accent-B">

# Blog

</header>

<ul id="blog-overview">
    {% for post in site.posts %}
    <li class="bg-complement elevated-low rounded">
        <a href="{{ post.url }}">{{ post.date | date: "%-d-%m-'%y" }} {{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
    </li>
    {% endfor %}
</ul>