# Stuff I own

Here is a record of some shiz I own and what is inside of them.

## Entries
{% for post in site.categories.inventory %}
  1. ### [{{ post.title }}]({{ post.url }})
  {{ post.excerpt }}
{% endfor %}
