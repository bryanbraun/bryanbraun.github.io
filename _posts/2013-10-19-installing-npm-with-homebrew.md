---
layout: post
title: "Installing npm with homebrew"
date: 2013-10-19 16:43:29
---

<p class="p1">
  There's some conflicting information out there about installing npm with homebrew, because the process has changed a couple times. For the time being, however, it's a cinch. Just open up the terminal and run the following commands.
</p>

    # Install node.js. npm will be installed along with it.
    brew install node
    
    # Verify that npm is installed.
    # If this command returns a filepath to npm, then it&#39;s there.
    which npm
    

<p class="p1">
  And you're done.
</p>