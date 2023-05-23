---
title: "Drupal Tutorials: Exposed Filters with Views"
date: 2013-08-06 19:45:02
related: [
  "A Drupal 7 Image Gallery Tutorial"
]
---

With views, it's easy to create a restricted listing of content. What's more, you can also expose those filters to the user, so they can sort and filter the content themselves. Here's an example of the type of functionality you can enable with "exposed filters":

<img alt="Filtered results for shoes." src="/assets/images/faceted-search-filters-and-sorting-options-for-sitefinity-ecommerce.png" style="width: 590px; height: 410px;" />

So here's how you set up a simple exposed filter, using Views 3 in Drupal 7:

<p>
  1. Make sure views is installed, and enabled, and that you're looking at the admin screen of the view you are interested in.
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal_views_admin.png"  />
</p>

<p>
  2. Create the filter criteria that we want our users to be able to control, by clicking the "Add" button, in the filter criteria box.
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal_filter_criteria_2_1.png" />
</p>

<p>
  3. I want to expose a filter that allows users to choose which content types are listed, so for my filter criteria, I'll check Content: Type, and click "Apply".
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal_filter_criteria_1.png" />
</p>

<p>
  4. On the next screen, check the option "Expose this filter to visitors, to allow them to change it. There are lots of other options, but I'll just leave it at the defaults and click "Apply".
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal_exposed_views_1.png" />
</p>

<p>
  5. Now you can scroll to the bottom of your views admin page and click "Preview" to see a demo of the functionality. Use the select box under "Type" to choose the content type, and click "Apply" to repopulate the view. It works!
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/drupal_exposed_views_2.png" style="width: 454px; height: 384px;" />
</p>

<p>
  6. We can click Save, to save the view, and browse to the path we defined ("/my-new-view"), to see it on the site.
</p>

<p style="text-align: center;">
  <img alt="A basic example of Drupal exposed views." src="/assets/images/drupal_exposed_views_example.png" style="width: 627px; height: 572px;" />
</p>

And that's it! This is the foundation for all kinds of user defined filtering that you can set up. Go forth and build!

Additional resources:

* <a href="https://drupal.org/project/better_exposed_filters">Better Exposed Filters</a> - a module for adding more filtering options (here's <a href="http://codekarate.com/daily-dose-of-drupal/drupal-7-better-exposed-filters">a video tutorial on how it works</a>)
* A post on <a href="http://envisioninteractive.com/drupal/drupal-7-views-with-faceted-filters-without-apachesolr/">how to set up faceted filtering</a>
