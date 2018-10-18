---
layout: post
title: "Empowering Content Creators with the Template Picker Module"
date: 2013-05-25 12:04:46
---

Drupal's template hierarchy gives themers the power to define the look and feel of nodes. This allows content creators to focus on the content while Drupal handles how it is displayed.

But sometimes it would be nice to provide a way for the content creators themselves to pick between predefined displays of their content, like this:

<img alt="" src="http://www.bryanbraun.com/assets/images/option1-option2.png" style="width: 100%; height: auto;" />

<p style="text-align: center;">
  (...personally, I like option 2)
</p>

You could probably do this with <a href="http://drupal.org/project/panels" target="_blank" rel="noopener noreferrer" title="Panels">Panels</a> or <a href="http://drupal.org/project/ds" target="_blank" rel="noopener noreferrer" title="Display Suite">Display Suite</a>, but those tools may be overwhelming for content creators. You could do custom development by adding some fields and custom logic, but it takes some Drupal development chops, and if you aren't careful, you'll end up with code spread across modules and themes, or dependencies on configuration that may or may not be in version control.

Enter <a href="http://drupal.org/project/template-picker" target="_blank" rel="noopener noreferrer" title="Template Picker">Template Picker</a>.

I built Template Picker to give content creators a choice over which template to use for a piece of content, using a simple select box (shown in the image below, on the right). The box contains a "default" option, which uses the standard template suggestion, or you can add additional options by naming your new templates (shown below, on the left) according the the template picker naming convention: **node--content-type--tp*.tpl.php**.

<img alt="" src="http://www.bryanbraun.com/assets/images/template-picker_1.png" style="width: 100%; height: auto;" />

This makes adding new options as simple as duplicating an existing template, renaming it, and making the desired changes to the html/css. It keeps the codebase clean, eliminates dependencies, and it's so easy that anyone with a little front-end experience can do it.

If you have any experience with Wordpress, this concept may be familiar. Functionality like this has been a part of core Wordpress for their page templates for a while, and this is an attempt to provide a similar experience in Drupal.

Template picker also supports clean names, which let you rename items in the select list so content creators can know what they are picking. To create a clean name for a template, just add a line of code into the template's comments (as shown circled below):

<img alt="" src="http://www.bryanbraun.com/assets/images/template-picker_2.png" style="width: 100%; height: auto;" />

This early version of template picker works for node templates on all your content types, but if there is interest in expanding the tool, we could also add support for block templates, and possibly more.

If you want to learn more, [download Template Picker from Drupal.org][1], or [watch the online video tutorial][2].

 [1]: http://drupal.org/project/template-picker
 [2]: https://www.youtube.com/watch?v=nv_WouvjrK8