---
layout: post
title: "There's more than one way to save a node"
date: 2014-01-01 19:22:01
---

Every day, millions of nodes are saved. It happens every time content is created, migrated, or updated. It's probably the most common content management task in Drupal.

But there are lots of ways you can change the node-save experience for your users, and there are many contributed modules that offer alternative approaches to saving nodes. Here are a few that I like.

## Add another

<p style="text-align: center;">
  <img alt="" src="http://bryanbraun.com/sites/default/files/add_another.png" />
</p>

[The Add Another module][1] allows gives users the option to save a node while quickly creating a new one. You can choose to add the option to the admin form itself, or as part of the save confirmation message. It's great for those content types, like "Image" or "Video" for example, where your users find themselves creating a series of nodes in succession.

 [1]: https://drupal.org/project/addanother

## Hide Submit

Occasionally you'll see an issue where an end user clicks submit on a the node-edit form and, being ignorant of the fact that the request is being processed, clicks submit several more times to see  if it's broken. Sometimes this can lead to multiple form submissions, resulting in bad things like duplicate content. [The Hide Submit module][2] does one simple thing: Prevent forms from being submitted multiple times. It does this by disabling the submit button once it's been clicked, with settings to fade out the button, append text, or hide it all together. This prevents errors, but it also signals to the user that the submission is in progress, helping to alleviate a bit of the frustration.

 [2]: https://drupal.org/project/hide_submit

## Publish Button

<p style="text-align: center;">
  <img alt="" src="http://bryanbraun.com/sites/default/files/publish-button.png" />
</p>

*"Does the word "Save" mean that I'm saving a draft or does it mean that I'm publishing the content live?"* While it may be obvious for those familiar with Drupal, the intent of the button isn't always clear for new users. [The Publish Button module][3] aims to make it more explicit by splitting up the "Save" button into two buttons: "Save" and "Publish". If a node is published, the publish button is replaced with an "Unpublish" button.

 [3]: https://drupal.org/project/publish_button

## Node Buttons Edit

<p style="text-align: center;">
  <img alt="" src="http://bryanbraun.com/sites/default/files/node_buttons_edit.png" />
</p>

What if you have your own idea on what button text should be used? You could use "string overrides" module for a universal approach to text customization, but [the Node Buttons Edit module][4] gives you a straightforward admin page for customizing the button text specifically. No need to incur the additional overhead if you don't have to.

 [4]: https://drupal.org/project/node_buttons_edit

## More Buttons

<p style="text-align: center;">
  <img alt="" src="http://bryanbraun.com/sites/default/files/more_buttons.png" />
</p>

[The More Buttons module][5] gives you the option of turning on more buttons (shocking, I know), to further customize your content saving experience. For example, you may want a "Save and Continue" button to save the status of the current input while continuing to make changes. Or maybe you'd like a cancel button, to close the form altogether. If so, this module makes these (and other options) available to you.

 [5]: https://drupal.org/project/mb

So next time you see users tripping over the node saving workflow, remember that you, as a sitebuilder, have a handful of options at your disposal to make things a bit more clear.