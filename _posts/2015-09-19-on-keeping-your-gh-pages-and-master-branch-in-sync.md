---
layout: post
title: "On keeping your gh-pages and master branch in sync"
date: 2015-09-19 15:03:11
---

When I first started using Github pages for projects with static demos, I worried a lot about keeping my master branch in sync with my Github pages branch. I scoured the web for approaches and [found several][1], but [they][2] always seemed like a hassle.

 [1]: http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/
 [2]: http://jgoodall.me/posts/2012/10/26/keep-gh-pages-in-sync-with-master/

I eventually landed on an approach that's so simple I don't even have to think about it: Just get rid of `master` and let the gh-pages branch be the main branch for your code.

First, you'll want to make sure you've got both a master and gh-pages branch up on Github. Then, on your project page, click the branches tab to see your branches:

<p style="text-align: center;">
  <img alt="" src="/assets/images/branches.png" />
</p>

<p style="text-align: center;">
  <img alt="" src="/assets/images/default.png" />
</p>

Simply click to change the default branch to `gh-pages`, and use the trash icon (like the one circled above) to delete your master branch (you'll want to make sure your gh-pages branch is identical to master before you delete `master`).

In retrospect, it seems so obvious. A branch is a branch, and "master" is just a name. If your repo uses `gh-pages` as **its master** then you'll never have to keep branches in sync again. That's my kind of solution.