---
title: "New in Writer 2.1"
date: 2013-05-18 22:31:41
related: [
  "Writer: A Blogging Theme for Developers",
  "Tips for Setting up Writer",
  "Writer: Customizing the default front page",
  "Writer Block Regions",
  "We're on Drupal 8!"
]
---

Writer 2.1 has been released for Drupal 7 and is <a href="http://drupal.org/project/writer" target="_blank" rel="noopener noreferrer">now up on Drupal.org</a>. Here's what's new:

*   Now supports a site logo (this looks best if the logo is 64x64 px or smaller).
*   Fixes one bug where Drupal system messages would not display, and another where content display types didn't behave as expected properly. See also <a href="http://drupal.org/node/1951474" target="_blank" rel="noopener noreferrer">Messages and fields not displayed [1951474]</a>.
*   Enables menus by default.
*   Includes *fastclick.js*, for improving user experience on touch devices (see https://github.com/ftlabs/fastclick).
*   Added various improvements based off of <a href="http://html5boilerplate.com/" target="_blank" rel="noopener noreferrer">HTML5 Boilerplate.</a>
*   CSS improvements, including table styling, rule styling, content centering when dates aren't displayed, and other various fixes.

If you have a 1.x version installed, and you upgrade to this version your standard Drupal content feeds will probably change from just displaying titles, to displaying the settings in your Teaser display modes. You may want to adjust your display modes after upgrading to achieve the look and feel you want. Here is how:

1.  Log in to your Drupal site and browse to "Structure > Content Types > Article > Manage Display" (or `admin/structure/types/manage/article/display`)
2.  Hide any display items you do not want to be visible. You can also trim the display text, and make other changes.
3.  Click save, and see the result at http://yoursite.gov/node
4.  Repeat steps 2-3 until you are satisfied with the look.

Of course, you can always use Views to have even greater customization of the look and feel of your feeds. If you are interested in that, check out this post: [Writer: Customizing the Default Front Page][1].

 [1]: {{site.url}}/2013/03/16/writer-customizing-default-front-page/

Otherwise, enjoy.
