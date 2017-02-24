---
title: "Five basic principles for Drupal UIs that anyone can follow"
date: 2013-07-22 19:11:41
related: [
  "8 ways to take the pain out of Drupal's admin forms",
  "If Gmail were built with Drupal"
]
---

As developers who <a href="http://www.palantir.net/blog/drupal-not-cms" title="Drupal in not a CMS">build out Content Management Systems</a> with Drupal, we often become ad-hoc UI designers. We may not be slicing up images in Photoshop, but we build out our own admin pages, arrange fields on node-edit pages, and define the workflows our users must follow. Setting up these kind of user interfaces isn't a light responsibility. Real people will manage your site for years to come… people who are used to using software interfaces that are polished, tested, and designed by UX experts. Now their fate (and their lasting impression of Drupal) is in your hands. What do you do? Here are five principles that anyone (even a developer) can follow.

## 1. Always use description text

Fields, taxonomy terms, blocks, views... you name it. Nearly all of Drupal's core components and a fair amount of contributed components give admins a place to add description text. This text exists to tell CMS users what those components do. Whenever you add a new term, field, or any other component, always add the description text. Don't say you'll come back and add it later, because it'll be much harder then, when deadlines are tight and the work has piled up. It doesn't have to be perfect, just don't leave it empty.

**Resources:**

* The <a href="https://drupal.org/project/rubik" title="The Rubik Admin Theme">Rubik admin theme</a> (It has <a href="http://drupal.stackexchange.com/questions/12770/how-to-show-descriptions-when-a-user-hovers-over-a-form-element">nice tooltips for discrete description text</a>)
* The <a href="https://drupal.org/project/label_help" title="Label Help module">Label Help module</a>

## 2. Keep things contextual

The cardinal sin of context is when a user sees something that needs fixing and they have to embark on a journey to some obscure admin page somewhere to fix it. It derails their current work and forces them into a trial-and-error process to memorize the precise locations of dozens of administrative pages. Suddenly an elaborate training process is necessary to get new users up to speed and the CMS feels larger and more clunky. Good contextual tools require no training, because the functionality you need is discoverable, right where you expect it, when you need it.

**Resources:**

* In-line editing, using the <a href="https://drupal.org/project/edit" title="Edit Module">Edit module</a> (a part of the <a href="https://drupal.org/project/spark" title="Spark Distribution">Spark distribution</a>)
* The <a href="https://drupal.org/project/ccl" title="Custom Contextual Links"><span class="s2">Custom Contextual Links module</a>
* <a href="http://drupal.stackexchange.com/questions/6116/display-edit-link-for-a-node-in-a-view-when-user-has-permission">Views Edit links</a>

## 3. Preview

Users of your system are in unfamiliar territory, so they are constantly scanning for signs that they're on the right trail. There are a lot of ways that you can provide these signs for them. A WYSIWYG editor gives users a mini-preview of how their formatted content is going to look. I'm not a big fan of the Preview button (see <a href="https://drupal.org/node/1510544" title="Allow to preview content in an actual live environment">the ongoing efforts to fix it here</a>), but there are cases when that's helpful as well. People crave feedback, so whenever you have an opportunity to give site admins a preview of what's coming next, do it. 

**Resources:**

* The <a href="https://drupal.org/project/wysiwyg" title="WYSIWYG Module">WYSIWYG module</a>
* The <a href="https://drupal.org/project/view_unpublished" title="View Unpublished module"><span class="s2">View Unpublished module</a>
* The <a href="https://drupal.org/project/sps">Site Preview System</a>
* <a href="https://drupal.org/node/1741498" title="Responsive preview">Responsive preview</a> (under works for Drupal 8)

## 4. Undo

Mistakes happen. If you don't give users the tools to correct their mistakes quickly and easily, they'll be tiptoeing around the CMS, afraid to touch anything for fear of making an irreparable mistake. Not my idea of a good time. <a href="http://alistapart.com/article/neveruseawarning%20" title="Never use a Warning"><span class="s3">In lieu of warning dialog boxes</span></a>, give your users the ability to 'undo'. One of my favorite ways to do this is with <a href="https://drupal.org/node/320614"><span class="s3">content revisions</span></a>. Revisions are to content creators, what version control is to developers. There's very little reason not to use them. Maybe one day we'll have <a href="https://groups.drupal.org/node/21913" title="Remove warning modal dialogs and replace them with undo">other "undo" functionality</a>, like <a href="https://drupal.org/node/1442998" title="Views Revisions">revisioning of views</a>. Until then, you'll have to find contributed modules to make up the ground.

**Resources:**

* The <a href="https://drupal.org/project/revisioning" title="Revisioning Module">Revisioning module</a> (for building workflows around revisions)
* The <a href="https://drupal.org/project/revision_all" title="Revision All Module">Revision All module</a>
* The <a href="https://drupal.org/project/diff" title="Diff Module">Diff module</a> (for seeing differences between revisions visually)
* The <a href="http://www.ostraining.com/blog/drupal/revisions/">Absolute Beginners Guide to Revisions in Drupal</a>

## 5. Improve the default form elements.

I'll be honest, the default form elements in Drupal are like the can opener on a swiss-army-knife: they get the job done, but they aren't all that pleasant to use. Any user of modern applications like Gmail, or Evernote is used to much better. There are ongoing discussions about improving many of them in Drupal 8 & 9, but in the meantime, here are several modules you can use to improve things.

**Resources:**

* Improvements to autocomplete / Node Reference – the <a href="https://drupal.org/project/autocomplete_deluxe"  title="Autocomplete Deluxe">Autocomplete Deluxe module</a> and the <a href="https://drupal.org/project/linkit">link-it module</a>.
* Improvements to Multi-select – the <a href="https://drupal.org/project/chosen" title="Chosen Drupal module">Chosen module</a> and the <a href="https://drupal.org/project/Multiselect">multi-select module</a>
* Improvements to Weight – the <a href="https://drupal.org/project/weight" title="Weight Module">Weight module</a>

## Small things make a big difference

I'm not a UX guru (at least, not yet), and you don't have to be either to make a big difference in Drupal's default user experience. While these may seem like nice-to-haves, they really help new users struggling with <a href="http://bojhan.nl/author-ux-known-problems">Drupal's known UX issues</a>. So don't settle for the bare minimum… in many cases a contributed module or two can make all the difference. Just do it. Your CMS users with thank you.
