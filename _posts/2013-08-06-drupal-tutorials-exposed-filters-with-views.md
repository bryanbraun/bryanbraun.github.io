---
layout: post
title: "Drupal Tutorials: Exposed Filters with Views"
date: 2013-08-06 19:45:02
---

<p class="p1">
  With views, it's easy to create a restricted listing of content. What's more, you can also expose those filters to the user, so they can sort and filter the content themselves. Here's an example of the type of functionality you can enable with "exposed filters":
</p>

<p class="p1" style="text-align: center;">
  <img alt="Filtered results for shoes." src="/assets/images/faceted-search-filters-and-sorting-options-for-sitefinity-ecommerce.png" style="width: 590px; height: 410px;" />
</p>

<p class="p1">
  So here's how you set up a simple exposed filter, using Views 3 in Drupal 7:
</p>

<p class="p1">
  1. Make sure views is installed, and enabled, and that you're looking at the admin screen of the view you are interested in.
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/drupal_views_admin.png" style="width: 803px; height: 508px;" />
</p>

<p class="p1">
  2. Create the filter criteria that we want our users to be able to control, by clicking the "Add" button, in the filter criteria box.
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/drupal_filter_criteria_2_1.png" style="width: 256px; height: 55px;" />
</p>

<p class="p1">
  3. I want to expose a filter that allows users to choose which content types are listed, so for my filter criteria, I'll check Content: Type, and click "Apply".
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/drupal_filter_criteria_1.png" style="width: 574px; height: 161px;" />
</p>

<p class="p1">
   
</p>

<p class="p1">
  4. On the next screen, check the option "Expose this filter to visitors, to allow them to change it. There are lots of other options, but I'll just leave it at the defaults and click "Apply".
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/drupal_exposed_views_1.png" style="width: 545px; height: 486px;" />
</p>

<p class="p1">
  5. Now you can scroll to the bottom of your views admin page and click "Preview" to see a demo of the functionality. Use the select box under "Type" to choose the content type, and click "Apply" to repopulate the view. It works!
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="/assets/images/drupal_exposed_views_2.png" style="width: 454px; height: 384px;" />
</p>

<p class="p1">
  6. We can click Save, to save the view, and browse to the path we defined ("/my-new-view"), to see it on the site.
</p>

<p class="p1" style="text-align: center;">
  <img alt="A basic example of Drupal exposed views." src="/assets/images/drupal_exposed_views_example.png" style="width: 627px; height: 572px;" />
</p>

<p class="p1">
  And that's it! This is the foundation for all kinds of user defined filtering that you can set up. Go forth and build!
</p>

<p class="p1">
  Additional resources:
</p>

<ul class="ul1">
  <li class="li1">
    See an example of exposed filters in action on <a href="http://bryanbraun.com/blog-archives">my archives page</a>
  </li>
  <li class="li1">
    <a href="https://drupal.org/project/better_exposed_filters">Better Exposed Filters</a> - a module for adding more filtering options (here's <a href="http://codekarate.com/daily-dose-of-drupal/drupal-7-better-exposed-filters">a video tutorial on how it works</a>)
  </li>
  <li class="li3">
    <span class="s1">A post on <a href="http://envisioninteractive.com/drupal/drupal-7-views-with-faceted-filters-without-apachesolr/">how to set up faceted filtering</a></span>
  </li>
</ul>