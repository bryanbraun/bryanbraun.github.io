---
title: "How I Organize the Code Folder on my Computer"
date: 2017-08-29 22:00:00
related: [
  "Understanding the Command Line"
]
---

Over the years I've iterated on how I organize the code I keep on my computer. It's a simple thing, but I figured I'd share what my current setup looks like, just in case anyone's curious.

## It's all in one folder

All of my code is in a single folder called `Code`, which I created and placed in my user's home folder. Using one folder keeps things from getting scattered all over the place, and putting it in "home" makes it easy to access from both the command line and file browser, on both Windows and Mac:

```yaml
# On Windows
C:\Users\bryanbraun\Code

# On Mac
/Users/bryanbraun/Code
```

When it comes to the UI, I like to make this folder 1 click away from anywhere and the best way to do that is to add it to my file-browser's favorites:

<p class="center"><img alt="The code folder in the favorites bar" src="{{site.url}}/assets/images/code-folder-favorite.png" /></p>

You can do this in both [Mac](https://support.apple.com/kb/PH25527?locale=en_US) and [Windows](https://www.howtogeek.com/howto/10357/add-your-own-folders-to-favorites-in-windows-7/).

There's a couple other ways to make it quick to access, depending on your preferences. If you live on your computer's desktop, you can add a desktop shortcut pointing to this folder. On Windows, I've also created [a custom Library folder](http://www.dummies.com/computers/operating-systems/windows-7/how-to-create-a-custom-library-in-windows-7/)  that sourced it's content from my code folder.

## Inside the folder, projects are organized like Github

Inside the Code folder, my projects are organized like projects on Github. There's a "namespace" folder for each user or organization which contains any project folders I've pulled down to my laptop.

```bash
~/Code/<github username>/<github project name>
# ...where <github project name> is the cloned repo from github.
```

Here's a peek into my actual folder:

![A sample of the stuff in my code folder]({{site.url}}/assets/images/code-folder-sample.png)

This setup works great for several reasons:

1. Git and Github, are basically industry standards these days. Even if you interface with teams that don't use them, the alternatives (Gitlab, BitBucket, etc) organize projects in the same way.

2. The usernames on these platforms make convenient folder names. They are usually short and easy to type, without spaces or weird characters.

3. Your "URLs" are basically the same as those on Github. This encourages you to learn user and project names, and the consistency makes it easy to find things both offline and in the cloud:

    ```
    Mac Computer:                ~/Code/bryanbraun/anchorjs
    Github:          https://github.com/bryanbraun/anchorjs
    Gitlab:          https://gitlab.com/bryanbraun/anchorjs
    Bitbucket:    https://bitbucket.org/bryanbraun/anchorjs
    ```

4. You can use this model for both public and private projects, on both hosted and enterprise platforms.

## Inside a project folder

When I'm building out my own personal projects the structure of the files in the project can vary widely. However, there's usually always some files for design primitives (like `.psd`, `.sketch`, etc).

For the longest time, I couldn't decide where to put these. It usually didn't make sense to check them into git, considering how big (and non-plaintext) they usually were. But if I put them somewhere else, I'd have a hard time keeping track of them.

Recently, I've started putting them in the project folders, in a custom folder named `designs`, which I'm [excluding from version control, using `.gitignore`](https://git-scm.com/docs/gitignore). I like it so far.

## Weaknesses

This system works great, but I've found a couple of weaknesses:

1. How do we handle forked projects? If we were to mimic Github we could make a duplicate folder on our machine, but that feels like a waste of hard drive space. Maybe we could do something with symlinks?

    Currently I prefer to keep just one project on my machine, under the original owner, and setup multiple git remotes on that project. This doesn't really match Github's concept of forks, but it's practical.

2. Namespace conflicts are technically possible if an user on one platform (like github.com) uses the same name as one on another platform (Github Enterprise, BitBucket, etc) _and I'm working on projects with both users_. In practice, I've never run into a conflict like this.

3. Design files often need to be shared with others. We could remove them from `.gitignore` and check it in, but that's not as accessible to Designers as something like Dropbox. We could also rely on a 3rd-party design collaboration tool like [InVision](https://www.invisionapp.com/).

All and all, these are pretty minor issues. I'm pretty happy with this setup, so if you're looking for some more organization here, then give it a try.
