---
layout: post
title: "Five basic principles for Drupal UI's that anyone can follow"
date: 2013-07-22 19:11:41
---

<p class="p1">
  As developers who <a href="http://www.palantir.net/blog/drupal-not-cms" target="_blank" title="Drupal in not a CMS">build out Content Management Systems</a> with Drupal, we often become ad-hoc UI designers. We may not be slicing up images in Photoshop, but we build out our own admin pages, arrange fields on node-edit pages, and define the workflows our users must follow. Setting up these kind of user interfaces isn't a light responsibility. Real people will manage your site for years to come… people who are used to using software interfaces that are polished, tested, and designed by UX experts. Now their fate (and their lasting impression of Drupal) is in your hands. What do you do? Here are five principles that anyone (even a developer) can follow.
</p>

<h2 class="p1">
  1. Always use description text
</h2>

<p class="p1">
  Fields, taxonomy terms, blocks, views... you name it. Nearly all of Drupal's core components and a fair amount of contributed components give admins a place to add description text. This text exists to tell CMS users what those components do. Whenever you add a new term, field, or any other component, always add the description text. Don't say you'll come back and add it later, because it'll be much harder then, when deadlines are tight and the work has piled up. It doesn't have to be perfect, just don't leave it empty.
</p>

<p class="p1">
  <strong>Resources:</strong>
</p>

<ul class="ul1">
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/rubik" target="_blank" title="The Rubik Admin Theme"><span class="s2">Rubik admin theme</span></a> (It has <a href="http://drupal.stackexchange.com/questions/12770/how-to-show-descriptions-when-a-user-hovers-over-a-form-element" target="_blank"><span class="s2">nice tooltips for discrete description text</span></a>)</span>
  </li>
  <li class="li3">
    <span class="s1">The <span class="s2"><a href="https://drupal.org/project/label_help" target="_blank" title="Label Help module">Label Help module</a></span></span>
  </li>
</ul>

<h2 class="p1">
  2. Keep things contextual
</h2>

<p class="p1">
  The cardinal sin of context is when a user sees something that needs fixing and they have to embark on a journey to some obscure admin page somewhere to fix it. It derails their current work and forces them into a trial-and-error process to memorize the precise locations of dozens of administrative pages. Suddenly an elaborate training process is necessary to get new users up to speed and the CMS feels larger and more clunky. Good contextual tools require no training, because the functionality you need is discoverable, right where you expect it, when you need it.
</p>

<p class="p1">
  <strong>Resources:</strong>
</p>

<ul class="ul1">
  <li class="li1">
    In-line editing, using the <a href="https://drupal.org/project/edit" target="_blank" title="Edit Module"><span class="s3">Edit module</span></a> (a part of the <a href="https://drupal.org/project/spark" target="_blank" title="Spark Distribution"><span class="s3">Spark distribution</span></a>)
  </li>
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/ccl" target="_blank" title="Custom Contextual Links"><span class="s2">Custom Contextual Links module</span></a></span>
  </li>
  <li class="li3">
    <span class="s2"><a href="http://drupal.stackexchange.com/questions/6116/display-edit-link-for-a-node-in-a-view-when-user-has-permission" target="_blank">Views Edit links</a></span>
  </li>
</ul>

<h2 class="p1">
  3. Preview
</h2>

<p class="p1">
  Users of your system are in unfamiliar territory, so they are constantly scanning for signs that they're on the right trail. There are a lot of ways that you can provide these signs for them. A WYSIWYG editor gives users a mini-preview of how their formatted content is going to look. I'm not a big fan of the Preview button (see <a href="https://drupal.org/node/1510544" target="_blank" title="Allow to preview content in an actual live environment">the ongoing efforts to fix it here</a>), but there are cases when that's helpful as well. People crave feedback, so whenever you have an opportunity to give site admins a preview of what's coming next, do it. 
</p>

<p class="p1">
  <strong>Resources:</strong>
</p>

<ul class="ul1">
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/wysiwyg" target="_blank" title="WYSIWYG Module"><span class="s2">WYSIWYG module</span></a></span>
  </li>
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/view_unpublished" target="_blank" title="View Unpublished module"><span class="s2">View Unpublished module</span></a></span>
  </li>
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/sps" target="_blank"><span class="s2">Site Preview System</span></a></span>
  </li>
  <li class="li1">
    <span class="s4"><a href="https://drupal.org/node/1741498" target="_blank" title="Responsive preview"><span class="s2">Responsive preview</span></a></span> (under works for Drupal 8)
  </li>
</ul>

<h2 class="p1">
  4. Undo
</h2>

<p class="p1">
  Mistakes happen. If you don't give users the tools to correct their mistakes quickly and easily, they'll be tiptoeing around the CMS, afraid to touch anything for fear of making an irreparable mistake. Not my idea of a good time. <a href="http://alistapart.com/article/neveruseawarning%20" target="_blank" title="Never use a Warning"><span class="s3">In lieu of warning dialog boxes</span></a>, give your users the ability to 'undo'. One of my favorite ways to do this is with <a href="https://drupal.org/node/320614" target="_blank"><span class="s3">content revisions</span></a>. Revisions are to content creators, what version control is to developers. There's very little reason not to use them. Maybe one day we'll have <a href="https://groups.drupal.org/node/21913" target="_blank" title="Remove warning modal dialogs and replace them with undo">other "undo" functionality</a>, like <a href="https://drupal.org/node/1442998" target="_blank" title="Views Revisions">revisioning of views</a>. Until then, you'll have to find contributed modules to make up the ground.
</p>

<p class="p1">
  <strong>Resources:</strong>
</p>

<ul class="ul1">
  <li class="li1">
    The <a href="https://drupal.org/project/revisioning" target="_blank" title="Revisioning Module"><span class="s3">Revisioning module</span></a> (for building workflows around revisions)
  </li>
  <li class="li3">
    <span class="s1">The <a href="https://drupal.org/project/revision_all" target="_blank" title="Revision All Module"><span class="s2">Revision All module</span></a></span>
  </li>
  <li class="li1">
    The <a href="https://drupal.org/project/diff" target="_blank" title="Diff Module"><span class="s3">Diff module</span></a> (for seeing differences between revisions visually)
  </li>
  <li class="li3">
    <span class="s1">The <span class="s2"><a href="http://www.ostraining.com/blog/drupal/revisions/" target="_blank">Absolute Beginners Guide to Revisions in Drupal</a></span></span>
  </li>
</ul>

<h2 class="p1">
  5. Improve the default form elements.
</h2>

<p class="p1">
  I'll be honest, the default form elements in Drupal are like the can opener on a swiss-army-knife: they get the job done, but they aren't all that pleasant to use. Any user of modern applications like Gmail, or Evernote is used to much better. There are ongoing discussions about improving many of them in Drupal 8 & 9, but in the meantime, here are several modules you can use to improve things.
</p>

<p class="p1">
  <strong>Resources:</strong>
</p>

<ul class="ul1">
  <li class="li1">
    Improvements to autocomplete / Node Reference <span style="color: rgb(68, 68, 68); font-family: arial, sans-serif; font-size: small; line-height: 16px;">–</span> the <a href="https://drupal.org/project/autocomplete_deluxe" target="_blank" title="Autocomplete Deluxe">Autocomplete Deluxe module</a> and the <a href="https://drupal.org/project/linkit" target="_blank"><span class="s3">link-it module</span></a>.
  </li>
  <li class="li1">
    Improvements to Multi-select <span style="color: rgb(68, 68, 68); font-family: arial, sans-serif; font-size: small; line-height: 16px;">–</span> the <a href="https://drupal.org/project/chosen" target="_blank" title="Chosen Drupal module"><span class="s3">Chosen module</span></a> and the <a href="https://drupal.org/project/Multiselect">multi-select module</a>
  </li>
  <li class="li1">
    Improvements to Weight <span style="color: rgb(68, 68, 68); font-family: arial, sans-serif; font-size: small; line-height: 16px;">–</span> the <span class="s3"><a href="https://drupal.org/project/weight" target="_blank" title="Weight Module">Weight module</a></span>
  </li>
</ul>

<p class="p1">
  I'm not a UX guru (at least, not yet), and you don't have to be either to make a big difference in Drupal's default user experience. While these may seem like nice-to-haves, they really help new users struggling with <a href="http://bojhan.nl/author-ux-known-problems"><span class="s3">Drupal's known UX issues</span></a>. So don't settle for the bare minimum… in many cases a contributed module or two can make all the difference. Just do it. Your CMS users with thank you.
</p>