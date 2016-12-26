---
layout: post
title: "Can you make a sub-theme of a sub-theme?"
date: 2013-03-09 22:31:02
---

Drupal has this concept of "sub-themes" where you can take an existing Drupal theme and override it in a clean way. How does it work? Well, instead of altering the original theme files, you create new theme files that are automatically discovered and called in the place of the original ones. This allows you to continue using the original theme (and keep it easy to upgrade) while adding stylistic customizations of your own. For more details, checkout this <a href="http://drupal.org/node/225125" target="_blank" title="Creating a sub-theme">explanation on how Drupal sub-themes work</a>.

So, can you make a sub-theme of a sub-theme?

**Yes.** You can build sub-themes down as many layers as you want. To do this, the sub-theme to-be should be located in its own directory. Prior to Drupal 6, this directory had to be a subdirectory of its base theme; in Drupal 6 and 7 it can be placed outside of the base theme's directory. Personally, I find it more organized to nest each sub-theme as a subdirectory of the parent theme like so:

<pre>Theme
  |
  &gt;--Subtheme
  |   |
  .   |
  .   &gt;--Sub-sub-theme-1
  .   |
      |
      &gt;--Sub-sub-theme-2
      |   |
      |   |
      |   &gt;--Sub-sub-sub-theme-2a
      |   |
      .   .
      .   .
      .   .
</pre>

Most importantly, each subtheme declares its parent theme in its .info file with `base theme = theme_name.` Ultimately, this is what determines the theme relationships, not the folder strucutre.

The main idea with nesting subthemes is that you never need to directly alter the CSS or template files in any theme. As you use them, I think you'll find they are a slick way to make your theming less redundant and more maintainable.