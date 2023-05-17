---
title: "Using hook_form_BASE_FORM_ID_alter() "
date: 2013-08-17 12:47:48
---

<a href="https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_form_alter/7">hook_form_alter()</a> is the go-to function for making changes to forms that are used across Drupal. We all use it. We all love it.

But since Drupal 7, you can also use a variant of this function: <a href="https://api.drupal.org/api/drupal/modules%21system%21system.api.php/function/hook_form_BASE_FORM_ID_alter/7">hook_form_BASE_FORM_ID_alter()</a>. Here's a simple visual of how it works: 

<p class="p2" style="text-align: center;">
  <img alt="All drupal forms can be divided into subsets, like comment forms or node-edit forms." src="/assets/images/drupal-forms-diagram.png" style="width: 375px; height: 355px;" />
</p>

`hook_form_alter()` fires on all Drupal forms (the big circle). With `hook_form_BASE_FORM_ID_alter()`, you can restrict it to firing on a subset of forms (one of the smaller circles), which can save Drupal some processing. (to get even more specific, you could target a single form by using <a href="https://api.drupal.org/api/drupal/modules!system!system.api.php/function/hook_form_FORM_ID_alter/7" target="_blank" rel="noopener noreferrer" title="Drupal API: hook_form_FORM_ID_alter()">hook_form_FORM_ID_alter(),</a> but I'll leave that discussion for another day).

You can find the Base Form ID by printing out the `$form_state variable` in a normal `hook_form_alter`, like so:

<pre>function mymodule_form_alter(&$form, &$form_state, $form_id) {
  // You must enable the devel module in order to use this function.
  dpm($form_state); // Prints $form_state to the page.
}
</pre>

The "base_form_id" is tucked away in the "build_info" array.

<p class="p1" style="text-align: center;">
  <img alt="The base form id is tucked away in the build_info array." src="/assets/images/drupal_BASE_FORM_ID.png" />
</p>

If you want to implement `hook_BASE_FORM_id_alter`, here is a simple example:

<pre>function mymodule_form_node_form_alter(&$form, &$form_state, $form_id) {
  // Find the content type of the node we are editing.
  $content_type = $form[&#39;#node&#39;]-&gt;type;
  if ($content_type == &#39;article&#39;) {
    // Alter the &#39;article&#39; form here.
  }
}
</pre>

As you can imagine, these tools aren't worth much if you don't know which Base Form ID's are out there. I dug around Drupal core a bit and these are the ones I was able to find.

## Base Form IDs in Drupal 7:

* <code>node_form</code> --- for node edit forms
* <code>comment_form</code> --- for comment forms

## Base Form IDs in Drupal 8

(as of August 16, 2013)
* <code>node_form</code> --- for node edit forms
* <code>comment_form</code> --- for comment forms
* <code>menu_form</code> --- for menu forms
* <code>menu_link_form</code> --- for menu link forms
* <code>node_type_form</code> --- for content type forms
* <code>custom_block_form</code> --- for custom block forms
* <code>taxonomy_term_form</code> --- for taxonomy term forms
* <code>contact_category_form</code> --- for site-wide contact category forms
* <code>date_format_form</code> --- for date/time format forms
* <code>image_style_form</code> --- for image style forms
* <code>filter_format_form</code> --- for text format forms
* <code>view_form</code> --- for views forms
* <code>custom_block_type_form</code> --- for block type forms (new in Drupal 8)
* <code>form_mode_form</code> --- for form mode forms (new in Drupal 8)
* <code>view_mode_form</code> --- for view mode forms (new in Drupal 8)

## Base Form IDs in major Contrib modules:

* <code>webform_client_form</code><b> </b>--- for webforms (from the webform module)

As you can see, the API is implemented most thoroughly in Drupal 8. If you know about ones that I missed, just mention them in the comments below and I'll add them to the list.
