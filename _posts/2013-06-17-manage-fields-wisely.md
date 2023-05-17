---
title: "Manage Fields Wisely"
date: 2013-06-17 17:28:02
---

Drupal makes it easy to add fields to your site, which you can use to trigger custom functionality in your modules and themes. It's nice, but there's also a dark side. As sites grow more complex, these fields can get out of hand, resulting in one or more of these outcomes:

* An utterly exhausting number of fields, without any way to see which ones are important
* Fields without any logical grouping 
* Fields that do nothing
* Fields where certain combinations of choices result in poorly displayed content or broken functionality
* Fields more suitable for admins than content creators

These problems grow out of fairly innocuous roots. Let me use a simple example:

You've added a field to your page content type called "layout" which lets you choose between two options: a page layout that prominently displays the image you've uploaded to the image field, and one that emphasizes text without displaying any image (you use some CSS being the scenes to do this magic).

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/fields-that-do-nothing.png" style="width: 353px; height: 176px;" />
</p>

Naturally, choosing the "Strong Text w/out Image" option, turns the image field into a "field that does nothing." It's easy to justify, but the more you let this, and other field mismanagement creep into your UI's, the more frustrated your new users will become.

Fortunately, we have some options for managing these kinds of issues:

* The <a href="https://drupal.org/project/conditional_fields">Conditional Fields module</a> provides an admin UI for letting you set up dependencies and conditions for fields without any programming. One great use is to hide "fields that do nothing" based on the contents of previous fields. It's like usability gold.
* The <a href="https://drupal.org/project/field_permissions">Field Permissions</a> module lets you hide fields on a user permissions basis, which is great if you've got advanced functionality in fields, and you really want to simplify things for content creators.
* The <a href="https://drupal.org/project/field_group">Field Group module</a> lets you combine fields into groups with a variety of UI options, like collapsible containers, vertical tabs, horizontal tabs, and others. This is great for providing whatever form interface is most intuitive for your users. You can also look into <a href="https://drupal.org/project/field_collection">the Field Collection module</a> for a additional options.
* The <a href="https://drupal.org/project/computed_field">Computed Field module</a> lets you dynamically pre-populate fields with whatever values make sense. Smart default values = big win for users.

If you'd rather make changes in the code than the UI, the Form API in Drupal 7 has a lot of the features that these modules provide. <a href="https://api.drupal.org/api/drupal/developer%21topics%21forms_api_reference.html/7#states">Form states</a> allow developers to programmatically trigger behaviors like hiding, showing, or populating fields based on the states of other fields. Collapsible <a href="https://api.drupal.org/api/drupal/developer!topics!forms_api_reference.html/7#fieldset">fieldsets</a> allow for logical grouping of fields and you can set whether their collapsed by default or not.

And being sensitive to the default state of fields makes a huge difference. Here's my usability rule of thumb, regardless of whether I'm using contributed modules with admin UI's or the Form API that comes with Drupal:

<em>Required fields (or those of major importance):</em> <strong>Expanded by default</strong><br />
<em>Optional fields (or those of minor importance):</em> <strong>Collapsed by default</strong><br />
<em>Fields that do nothing:</em> <strong>Hidden</strong>

What advice do you have for managing fields in Drupal?
