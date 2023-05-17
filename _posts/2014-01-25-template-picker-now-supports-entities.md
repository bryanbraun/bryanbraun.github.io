---
title: "Template Picker Now Supports Entities"
date: 2014-01-25 11:29:29
---

Several months back, I released a module to drupal.org, called [Template Picker][1]. The idea was that it was too difficult to set up a workflow where content creators could pick how they want their content to be displayed. It either required heavy site building using tools like [Panelizer][2] (outside version control), or one-off custom development.

 [1]: https://drupal.org/project/template_picker
 [2]: https://drupal.org/project/panelizer

The way Template Picker works, you drop node templates into your theme for each way you'd like to display your content, and, as long as the file name matches the naming convention, it will be available as an option on the corresponding node-edit page. If that's too much Drupal lingo for you, [you can see a video demo here][3].

 [3]: http://www.youtube.com/watch?v=nv_WouvjrK8

<p style="text-align: center;">
  <img alt="" src="/assets/images/template-picker-2.png" />
</p>

But what I really wanted was to think outside the node and see if we could allow template picking for all sorts of entities. This way, a user could choose a style for their user profile, or a content admin could assign taxonomy term listings to predefined displays. It took some digging into the entity API, but I finally got it coded up and [released][4] over the Christmas holiday. I also depricated the old project on Drupal.org to fix [a renaming issue][5] (kind of a pain, but that's the price of learning).

 [4]: https://drupal.org/node/2163781
 [5]: https://drupal.org/node/2008024

If you think something like this could be useful for your next project, you can [check it out on Drupal.org][1].
