# Blog
New one every week! (at least)

{% for post in site.posts %}
* [{{ post.title }}]({{ post.url }})
{% endfor %}