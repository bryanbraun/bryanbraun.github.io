---
layout: post
title: "Making Targeted Drupal Cache Clears using Drush"
date: 2014-04-07 07:21:07
---

The standard Drush command for clearing Drupal's cache looks like this:

<pre>drush cache-clear all</pre>

(You can also use the shortened alias `cc` like this: `drush cc all`)

These commands give you the same result as when you click that cache clear button in the UI <span style="color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 18.200000762939453px;">—</span> it clears all of Drupal's internal caches.

But clearing all of Drupal's caches at once can be overkill. You usually don't need to clear everything, and doing so can put heavy load on your servers (especially if your site is large or gets a lot of traffic). Beneath the surface, Drupal's caching is actually pretty granular, and tools like Drush give us the ability to target and clear caches on the subsystem level.

Using Drush, you can see your caching options with:

<pre># Using the shortened alias from this point on.
	drush cc</pre>

Which returns something like this:

<pre>[0] : cancel
[1] : all
[2] : drush
[3] : theme-registry
[4] : menu
[5] : css-js
[6] : block
[7] : module-list
[8] : theme-list
[9] : registry
...</pre>

Let's look at what each of these does (as a quick note, I'm specifically looking at Drush 6, which is the major version at this time):

**`drush cc all`**  
Remember how I said that this does the same thing as the cache clear button in the UI? Well, that's technically false. Yes, `drush cc all` will clear all your Drupal caches (as long as it can bootstrap Drupal), but it will also clear its own internal Drush cache. That's why when Drush cannot bootstrap Drupal, you will still see a success command saying `&#39;drush&#39; cache was cleared`.

**`drush cc drush`**  
This only clears Drush's internal cache (the same one I just mentioned). You don't need a Drupal site available to clear this cache.

**`drush cc theme-registry`**  
This command simply calls `drupal_theme_rebuild()` to rebuild the theming system. This is needed whenever new ".tpl.php" files or theme hooks are added to the system. This specific cache clear only applies for Drupal 7 and up.

**`drush cc menu`**  
This runs a menu rebuild, which refreshes the database tables used by various menu functions. For example, any new router items (like those defined in `hook_menu`) are added to the `menu_links` table, and stale ones are removed. This also clears the page and block caches, to prevent the display of stale menu links.

**`drush cc css-js`**  
If you have CSS or JS aggregation enabled, this will rebuild the aggregated files. It also increments the query string on CSS & JS links, forcing clients that have cached an old copy to download a fresh one.

**`drush cc block`**  
Block caching exists so Drupal doesn't have to look up the locations and visibility of blocks with each page load. This command refreshes that cache.

**`drush cc module-list`**  
This re-scans the module directories in your codebase and refreshes Drupal's internal list of which modules are available.

**`drush cc theme-list`**  
This re-scans the theme directories in your codebase and refreshes Drupal's internal list of which themes are available.

**`drush cc registry`**  
Drupal maintains an internal registry of all functions or classes in the system, allowing it to lazy-load code files as needed (reducing the amount of code that must be parsed on each request). The list of these files is known as the "code registry" and it is stored in the `system` table in your Drupal database. This cache clear will look at this list of files and update the contents of any files that have been changed. Note: it will not rebuild the registry from scratch. For more information, see `<a href="https://api.drupal.org/api/drupal/includes%21bootstrap.inc/function/registry_update/7">registry_update</a>`.

**`drush cc ?????`**  
You may see other options in this list, because contributed modules (like views and advanced aggregation) can add their own kinds of cache clears. In each case, you'll see a file in the contrib module named something like `mymodule.drush.inc` that contains the code which defines what the cache clear does.

 

If you want to see what each of these options does on a code level, you can download Drush and inspect the file found at `Drush/commands/core/cache.drush.inc`.