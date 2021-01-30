# Archived
These are posts that I'm not too proud of anymore, but I don't want to delete them.

{% for post in site.categories.archive %}
1. [{{ post.title }}]({{ post.url }})
{% endfor %}

# All Posts
This is just every post on this website.

{% for category in site.categories %}
  {% capture category_name %}{{ category | first }}{% endcapture %}
  1. ## {{ category_name }}
    {% for post in site.categories[category_name] %}
      1. [{{ post.title }}]({{ post.url }})
    {% endfor %}
{% endfor %}
