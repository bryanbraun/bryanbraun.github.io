---
layout: post
title: "5 settings you didn't know you could control in Drupal"
date: 2013-09-18 17:55:09
---

<p class="p1">
  As I've been building Drupal sites, there were several moments when I was surprised to see that I could go into the admin interface and customize an aspect of my site. In many cases I assumed that these settings were defined by the theme I was using. I knew that the default Drupal install was flexible, but I didn't think it was THIS flexible. If you're a site builder learning the ropes of the Drupal admin options, then here are 5 settings you didn't know you could control in Drupal.
</p>

## 1. The Front Page

<p class="p1">
  Drupal's default front page is a feed of content that has been published with the "Promote to front page" box checked. While you can define the front page specifically in your theme, you can also customize it with some simple configuration. To do that, go to the admin bar and click <i>Configuration > Site Information </i>(also at admin/config/system/site-information).
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-customize-front-page.png" />
</p>

<p class="p1">
  Here, you can change the number of items that show up on the page, or make a different page your front page (like one you've built using the Page content type, or Views).
</p>

## 2. Date Formats

<p class="p1">
  Drupal displays dates at several places on your website, like in the authoring information in an article or the time stamp in a user contributed comment. The default formats for these dates can be difficult to read, so it's good to define your own. To do that, go to the admin bar and click <em>Configuration > Date and Time</em> (also at admin/config/regional/date-time).
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-customize-date-types.png" />
</p>

<p class="p1">
  You'll see several "date types" which is just a date format with a nickname. You can point to these date types in various places in Drupal and they'll adopt the formats. <a href="http://webwash.net/tutorials/handling-date-and-time-drupal-7" target="_blank" title="Create Custom Date formats in Drupal">Here's a great article</a> if you want to learn more about creating and customizing your own date formats in the admin UI.
</p>

## 3. Default Field Values

<p class="p1">
  When you're defining your content types, you're probably aware that you can add your own fields. What you may not know is that you can also pre-populate those fields with default values that make sense to your users. For example, if you user doesn't upload a profile image, you can define a default generic image to represent them (like <a href="http://confluencemedia.com/wp-content/uploads/2011/03/2011-03-12-twitter-egg.png" target="_blank">that egg</a> you see on twitter profiles). To do this, just browse to Content Type, click "manage fields" and edit the field in question. There you'll see a section for default values.
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-customize-default-field.png" />
</p>

<p class="p1">
  You can also set default values for several of the settings in your vertical tabs on the edit page of your content types. For example, you can set it to create new revisions, disable the preview button, or uncheck the "promoted to front page" button by default.
</p>

## 4. Comment Fields

<p class="p1">
  There are several things about Drupal's default comments that I find a bit awkward, like the field for adding a title to your comment. Fortunately you can customize this and other settings through the content type's edit page (<em>Admin > Structure > Content Types > Edit</em>).
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-customize-comments.png" />
</p>

<p class="p1">
  In the vertical tab for Comment Settings, you can uncheck "Allow comment title" and alter other settings as needed. Some settings have unexpected results like how the option "Anonymous posters may leave their contact information" exposes an email field and and homepage field (<a href="http://www.massimilianomarini.com/16/08/2011/how-enable-email-field-and-homepage-field-drupal-7-comment-form"><span class="s1">more on that here</span></a>). You can get even more control over the comment fields by clicking the "Comment Fields" tab at the top of the screen. By adding fields, you can have commenters do everything from upload files, to upvotes and downvotes.
</p>

## 5. Display Modes

<p class="p1">
  Display Modes allow you to define how a node displays in different places. For example, you can tell a node to display all it's information if it shows up on its own page, but to just show the title, thumbnail image, and summary if it shows up in a sidebar view. To do this, browse to <em>Structure > Content Types > Manage Display</em> (for your content type), and expand the box at the bottom called "Custom Display Settings."
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-display-modes-1.png" />
</p>

<p class="p1">
  Here you can check boxes for each context that you want your content to display differently in. After checking a box<span style="color: rgb(0, 0, 0); font-family: verdana, sans-serif; line-height: 17.984375px;">—</span>like teaser, for example<span style="color: rgb(0, 0, 0); font-family: verdana, sans-serif; line-height: 17.984375px;">—</span>and clicking save, you'll see sub-navigation at the top that lets you adjust how the display looks.
</p>

<p class="p1" style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/drupal-display-modes-2.png" />
</p>

<p class="p1">
  For example, you can hide the body field, but display the tags. By picking this display mode in a view, you'll only get the fields you specified. If you want to see it in action, here's <a href="http://getlevelten.com/blog/tom/managing-drupal-display-modes"><span class="s1">a video tutorial</span></a>.
</p>

<p class="p1">
  You can really get clever by building your own display modes and extending their functionality with modules like <a href="https://drupal.org/project/DS">display suite</a>.
</p>

## ...and more.

<p class="p1">
  While there are other neat settings I didn't mention (like <a href="https://drupal.org/node/15366"><span class="s1">setting your own 404 pages</span></a>) these were the ones that caught me off-guard. Hopefully you are just as pleasantly surprised as I was.
</p>