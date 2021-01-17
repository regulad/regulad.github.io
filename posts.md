# All Posts
{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  1. ### {{ category_name }}
    {% for post in site.categories[category_name] %}
      1. [{{ post.title }}]({{ post.url }})
    {% endfor %}
{% endfor %}
