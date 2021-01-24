# Welcome to the Pain Train!
Hiya! I'm regulad, a student doing stupid things at any moment!

![Banner](https://i.imgur.com/kIRjNAr.jpg)

You can check out my [blog](/blog), or my [inventory of stuff](/inventory).

If you would like to get in contact with me, see the [contact page](/contact).

## Source

Long live open source! Check out the sorce for this page [here](https://github.com/regulad/regulad.github.io). 

Yes, there is no licence. This is my own copywritten work. If you are interested in this Jekyll theme, check [this `pages-themes/hacker` fork](https://github.com/regulad/hacker) out.

## Most Recent Posts
{% for post in site.posts limit:3 %}
1. [{{ post.title }}]({{ post.url }})
{% endfor %}