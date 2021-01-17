# Blog Pages
Here are some of my "Blogs." Mostly awful, check them out!

{% for post in site.categories.blog %}
1. [{{ post.title }}]({{ post.url }})
{% endfor %}
