---
layout: post
title: "Let's make software that's easy to extend."
date: 2013-02-09 16:23:47
---

Open source is at its best when it is easily extendible. It's a win for developers who can make contributions in small functional chunks, and it's a win for users who can piece together a tool that fits their needs perfectly. It was Firefox's plugin system that propelled it forward to challenge IE. The large number of quality Wordpress themes is key to it's success as a web CMS. An iPhone would be nothing without the ability to extend its functionality through the app store.

But the process of extending needs to be easy. Why? Because users are impatient, and they won't stand for complexity.

One of the Drupal project's greatest strengths is its system of modules, but let's be honest, every significant open source project is extendable. <a href="http://wordpress.org/extend/plugins/" target="_blank" title="Official Wordpress Plugins Directory">Wordpress has plugins</a>. <a href="https://rubygems.org/" target="_blank" title="RubyGems.org">Ruby has gems</a>. Unfortunately, Drupal's process of extending became easy for its expert users (see <a href="http://drupal.org/project/drush" target="_blank" title="Drush">Drush</a> and <a href="http://api.drupal.org/api/drupal/includes!module.inc/group/hooks/7" target="_blank" title="Drupal Hooks">hooks</a>) while remaining difficult for its beginners.

<img alt="Modules Directory" src="http://www.leveltendesign.com/files/drupal-contrib-modules.png" style="width: 161px; height: 273px; float: right;" />Think about it. In Drupal 6, using a module or theme meant downloading the file and dropping the folder into an obscure directory four levels deep in your site's root. This requires knowledge of the Drupal directory structure, FTP/SSH, file permissions, the Drupal dependency system, and the confidence to know that you aren't going to do irreparable harm. To uninstall themes or modules, you must turn them off, run an un-installation script (although sometimes you don't need to... and it still isn't clear to me when), and finally delete them from the file directory. Even in Drupal 7, you cannot delete themes or modules from the admin interface.

What if it were that difficult to install a Google Chrome plugin? How many of your friends and family would be downloading Chrome plugins?

I'm aware that <a href="http://drupal.org/project/apps" target="_blank" title="Drupal Apps">many</a> <a href="http://bryanbraun.com/sites/default/files/drupal-gardens-extend-ui.png" target="_blank" title=" Drupal Gardens">attempts</a> have been made to simplify this process, but for out-of-the-box Drupal we still have a long way to go.