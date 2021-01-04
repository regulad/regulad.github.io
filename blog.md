# Blog Pages

{% for post in site.posts %}
1. [{{ post.title }}]({{ post.url }})
    * {{ post.excerpt }}
{% endfor %}
