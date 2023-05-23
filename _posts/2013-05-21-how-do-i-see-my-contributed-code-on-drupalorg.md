---
title: "How do I \"see\" my contributed code on Drupal.org?"
date: 2013-05-21 03:30:59
redirect_from: /2013/05/21/how-do-i-see-my-contributed-code-on-drupalorg
---

The first time I hosted code, I did it on [Github](https://github.com/bryanbraun). Naturally, I got really used to the slick interface for browsing through my remote files, viewing my commits, and generally visualizing what I had hosted on their site. So when I started contributing code to [drupal.org][1], I felt like I was working in the dark. I'd send up my commits and branches, and trust that they were up there, even if I couldn't "see" them.

 [1]: http://drupal.org

Little did I know, that you actually CAN browse through your code on Drupal.org.

Every project page has a little link at the bottom left called "Repository Viewer"

<p style="text-align: center;">
  <img alt="" src="{{site.url}}/assets/images/repository-viewer.png" />
</p>

This link takes you to *http:// drupalcode.org/project/<your-project>.git*, where you'll find…

<p style="text-align: center;">
  <img alt="" src="{{site.url}}/assets/images/git-browser-1.png" />
</p>

But those are just your commits. To see your files, click the link that says "tree"...

<p style="text-align: center;">
  <img alt="" src="{{site.url}}/assets/images/tree-link.png" />
</p>

<p style="text-align: center;">
  <img alt="" src="{{site.url}}/assets/images/git-browser-2.png"  />
</p>

Your files were there all along… hidden in plain view.

If your curious about how it works, the display is generated using <a href="https://git.wiki.kernel.org/index.php/Gitweb" target="_blank" rel="noopener noreferrer" title="Gitweb">Gitweb</a>, an open source project for viewing remote git repositories in a web browser. This functionality used to be available at <a href="http://cvs.drupal.org" target="_blank" rel="noopener noreferrer" title="...which now redirects to drupalcode.org">cvs.drupal.org</a>, before the community migrated to Git for version control, and the code browser apparently moved to <a href="http://drupalcode.org" target="_blank" rel="noopener noreferrer">drupalcode.org</a>.
