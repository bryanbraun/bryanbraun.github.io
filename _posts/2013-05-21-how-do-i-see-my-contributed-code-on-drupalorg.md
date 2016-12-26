---
layout: post
title: "How do I \"see\" my contributed code on Drupal.org?"
date: 2013-05-21 03:30:59
---

The first time I hosted code, I did it on [Github](https://github.com/bryanbraun). Naturally, I got really used to the slick interface for browsing through my remote files, viewing my commits, and generally visualizing what I had hosted on their site. So when I started contributing code to [drupal.org][1], I felt like I was working in the dark. I'd send up my commits and branches, and trust that they were up there, even if I couldn't "see" them.

 [1]: http://drupal.org

Little did I know, that you actually CAN browse through your code on Drupal.org.

Every project page has a little link at the bottom left called "Repository Viewer"

<p style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/repository-viewer.png" style="width: 770px; height: 445px;" />
</p>

This link takes you to *http:// drupalcode.org/project/<your-project>.git*, where you'll find…

<p style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/git-browser-1.png" style="width: 770px; height: 507px;" />
</p>

But those are just your commits. To see your files, click the link that says "tree"...

<p style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/tree-link.png" style="width: 561px; height: 404px;" />
</p>

<p style="text-align: center;">
   
</p>

<p style="text-align: center;">
  <img alt="" src="http://www.bryanbraun.com/sites/default/files/git-browser-2.png" style="width: 770px; height: 509px;" />
</p>

Your files were there all along… hidden in plain view.

If your curious about how it works, the display is generated using <a href="https://git.wiki.kernel.org/index.php/Gitweb" target="_blank" title="Gitweb">Gitweb</a>, an open source project for viewing remote git repositories in a web browser. This functionality used to be available at <a href="http://cvs.drupal.org" target="_blank" title="...which now redirects to drupalcode.org">cvs.drupal.org</a>, before the community migrated to Git for version control, and the code browser apparently moved to <a href="http://drupalcode.org" target="_blank">drupalcode.org</a>.
