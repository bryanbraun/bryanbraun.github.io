---
title: 'Editing a commit in an interactive rebase'
date: 2019-02-23 22:27:00
---

I needed to edit a commit in my Git history recently and I couldn't find a clear explanation of how it all worked. Once I figured it out, I thought I'd share what I learned.

## The situation

Let's say you accidentally committed a sensitive password into your git history, several commits back. All your commits are fine except for the one with the password.

We can use an interactive rebase to fix this. I'm going to assume you're familiar with interactive rebases but you can check out [this article](https://hackernoon.com/beginners-guide-to-interactive-rebasing-346a3f9c3a6d) if you need a refresher.

## The interactive rebase

We'll start our interactive rebase at `15b337e`, a commit ID that occurs before the bad commit on our branch:

`git rebase -i 15b337e`

Here's what we see:

![Screenshot of our interactive rebase]({{site.url}}/assets/images/rebase-commits-1.png)

Now let's tell git that we want to edit `e081013` (the bad commit) by replacing its "pick" with "edit":

![Screenshot of our rebase, using the 'edit' command]({{site.url}}/assets/images/rebase-commits-2.png)

We save the changes and the rebase begins.

Now here's the important part: when the rebase gets to the "edit" commit _it will leave the commit unchanged and then pause before the next commit_:

![Diagram showing where the rebase pauses]({{site.url}}/assets/images/rebase-commits-3.png)

We are in-between commits now. We can tell because a `git status` shows nothing staged and no changes in our working directory:

```
$ git status
interactive rebase in progress; onto 15b337e
⋮
nothing to commit, working tree clean
```

What about the commit we wanted to edit? It's in the past. If we do a `git log`, our commit appears as the most recent commit in the history:

```
$ git log
commit e081013caa58d6aef84dcde1050fabcaf81a82fc (HEAD)
Author: Bryan Braun <bbraun7@gmail.com>
Date:   Thu Jan 3 14:22:21 2019 -0500

    feat: make changes to deploy scripts

commit 32054c3c53264d5ac8032ca4e158c4faa217b4b2
⋮
```

This is a little weird… we expected to edit this commit and we flew right past it. 😐

So now we need to find a way to edit the previous commit. Here are two options I like:

### Option 1: Amend the commit

When we amend commits, we make new changes and tell git to smush them into the last commit. It looks like this:

```
# (remove our password)
git add -A
git commit --amend
```

Instead of creating a new commit, our change gets applied to the past commit (`e081013`) and we get a chance to change its commit message. The result: that commit should no longer have our password in it.

### Option 2: Soft reset

In this option we step back into the previous commit to make the changes we want. It looks like this:

```
git reset --soft HEAD~
```

Now if we do a `git status` we can see where we are:

```
$ git status
interactive rebase in progress; onto 15b337e
⋮
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   Rakefile
	modified:   lib/tasks/deploy.rake
	modified:   lib/tasks/database.rake
  modified:   config/database.yml
```

Great! We see all the changes that were made in that commit, staged but not yet committed. Now we can just delete our password, stage the change, and re-commit it as if it never happened:

```
# (remove our password)
git add -A
git commit
```

## Wrapping up loose ends

Once our commit is fixed, we run `git rebase --continue` and our rebase should be done.

We can check our work by inspecting the new commit to ensure the password change is no longer there:

```
# (given that our commit now has an ID of 89353a4...)
git show 89353a4

# Scroll through commit changes to confirm all looks good.
```

It's like our password was never committed in the first place. 🙌
