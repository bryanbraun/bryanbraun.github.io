---
title: "The Frontend Developer's Guide to Docker"
date: 2014-07-15 20:56:56
last_modified_at: 2019-08-06
related: [
  "A Brief Overview of Docker Tags"
]
---

I decided to use Docker for a recent project and I learned a lot in the process. This is an attempt to explain what Docker is, in plain English, from the perspective of a frontend developer.

I'm going to be glossing over a lot of details and taking some liberties as I describe it. Don't worry though. Everything here is correct enough to paint a picture for you, and you'll fill in the gaps along the way.

## What is Docker?

<p style="text-align: center;">
  <img alt="" src="/assets/images/Docker_%28container_engine%29_logo.png" />
</p>

People keep talking about [Docker][1], and you keep seeing that clever whale graphic. Looks like this is starting to turn into a thing, so what is it all about?

[1]: https://www.docker.com/

Docker is an open-source tool you can use to build and run application environments.

## Why would I care?

Docker is designed to solve a bunch of sysadmin problems, but some of those problems impact you. Your application has to run somewhere… maybe its on your local computer, or on a staging server, or in Amazon's Cloud. Even as a frontend developer, there are a lot of things Docker can help you with:

- If you care about your code working identically when you move it between these environments, then Docker can help you with that.
- If somebody makes changes to these environments (notice I said environments, not code) and you want those changes to be quick to deploy, easy to roll back, and under version control, then Docker can help you with that as well.
- If you want to be able to scale your application horizontally without too much fuss, than Docker can help you with that.
- If you are trying to get your application architecture and environment in line with [the 12-factor App][2], then Docker can help you with that. (It helped out with 4 of the 12 factors for me).
- Finally, if you wish your deployments were easier, then there's a good chance that Docker can help you with that too.

[2]: http://12factor.net/

## A high-level overview

With Docker, you package up the entire environment into something called a "lightweight container". To [borrow the analogy][3] from the folks at dotCloud, you can think of it like a shipping container.

[3]: http://www.slideshare.net/dotCloud/why-docker2bisv4

<p style="text-align: center;">
  <img alt="An intermodal shipping container." src="/assets/images/XSmall_ShippingContainer.jpg" />
</p>

Pre-1960, shipping things was really difficult, because there were many forms of transport (boat, truck, train, etc.) and many kinds of goods (food, fabric, cars, etc), each with their own shipping considerations (temperature, light, fragility, etc). The solution was the intermodal shipping container: a universal sealed container that can be used to move anything. This container could be loaded, unloaded, stacked, and transferred from one mode of transportation to another, and provided a consistent interface for any equipment that needed to handle it.

<p style="text-align: center;">
  <img alt="Various benefits of an intermodal shipping container." src="/assets/images/intermodal-shipping-container.png" />
</p>

Normally you move your code from one environment to another, and pray that it works. With Docker, you put your code _and your environment_ into one of these containers, and you move the container from place to place. This means it will always work the same, no matter where you run it.

Under the hood, Docker is really just a slick developer API around an underlying technology called "[Linux Containers][4]." Each container is it's own isolated mini workspace. The containers share the underlying operating system, but they all have their own file system, and they run their own software and processes.

[4]: https://linuxcontainers.org/

Since these containers are a Linux thing, you cannot run docker on a machine that doesn't support them (though there are [tools to work around it][5]). That's ok for you, since your servers are probably running on Linux anyway.

[5]: https://www.docker.com/products/docker-desktop

## Working with Docker

What is it like, working with Docker?

The closest thing to Docker that you are familiar with, is probably [Git][6], so we'll start from there. Docker is like Git in the following ways:

[6]: http://git-scm.com/

- It is a program that runs in the command line.
- You can use it for applications written in any language.
- It borrows a lot of the same terminology. With Docker, you can Pull, Push, Commit, and Diff linux containers, just like Git can perform those operations on codebases.
- Docker makes it a lot easier for sysadmins to share their work and collaborate.
- [Docker Hub](https://hub.docker.com/explore/) is similar to Github in that it hosts public Docker projects that people can look at and try out. There is a monthly fee to host private Docker projects.

Like Git, the way to learn Docker is to just start using it. This is easy because the folks at docker.com have set up a [great series of tutorials][7] online. If you want to learn this stuff, I recommend just doing them all, one after the other, in succession. After a while, things will start clicking.

[7]: http://www.docker.com/tryit/

## Creating development environments in Docker

I was excited about Docker because I thought it would be a slick way to set up no-nonsense development environments that match production exactly (like an alternative to Vagrant). In my mind, this feature is what would benefit frontend developers the most.

In practice, I found it a bit clumsy to set up. Local development requires an environment where you can rapidly iterate on code and see the changes you make. My experience with Docker is that it was difficult to mount my files into these containers in a way suitable for iterative development. It felt like the containers were too ephemeral. Easy to kill and rebuild, while difficult to move files in and out. It's possible that I'm not quite doing it right, so if you have development environments working with Docker, I'd like to hear about your experience. I get the sense that creating local development environments isn't Docker's primary use case (though tools like [fig][8], are designed to improve this).

That being said, I found Docker to be great for setting up staging environments. You have all the tools you need to ensure the environment mimics production, and you don't need to worry about the iterative development workflow.

[8]: http://orchardup.github.io/fig/

*2019 Update: The Docker ecosystem has matured a lot here since I first tried it. Docker introduced some tooling called [docker-compose](https://docs.docker.com/compose/), which [is based on the "fig" tool I mentioned above](https://blog.docker.com/2015/02/announcing-docker-compose/), making it a lot easier to set up local development environments.*

*In fact, one of the main reasons I recommend Docker these days is to prevent large teams of people needing to set up and maintain their own complex local development environments. Docker compose makes it easy to set it up once and run that same environment on everybody's machine.*

## Deployments with Docker

As a frontend developer, I didn't really understand what the big deal behind deployments was at first. I mean, how hard could it be to move code onto the server? It turns out, setting up a smooth deployment workflow can be a big pain, involving custom scripting and builds. Some high-end PAAS providers (like Heroku or Acquia) can handle the deployment complexity for you, but Docker can help here too. Docker provides a single interface for build tools and PAAS frameworks to work with.

I think the best example is the [Dokku][9] project, which acts like a mini PAAS based on Docker. After about half a day setting up Dokku ([tutorial here][10]), I was able to deploy ruby code with `git push` and Dokku would download any necessary gems, kick off ruby processes, run database migrations, and more. It was a magical feeling.

[9]: https://github.com/progrium/dokku
[10]: https://www.digitalocean.com/community/tutorials/how-to-use-the-dokku-one-click-digitalocean-image-to-run-a-ruby-on-rails-app

For other, more complex, docker-based deployment tools, you may want to check out [Flynn][11] or [Deis][12].

[11]: https://flynn.io/
[12]: http://deis.io/

## The future of Docker

Docker was created by a hosting company called [dotCloud][13], which was using a version of it internally for managing environments. After releasing the project as open-source and seeing how well it was received, they "[bet the farm][14]" by transitioning much of their company's resources away from hosting and towards Docker support. With the power of the dotCloud's resources behind it, the project has an [active codebase][15], [great documentation][16], a [large community][17], and growing momentum. All signs show that the project has a bright future ahead of it.

[13]: https://web.archive.org/web/20140517031011/https://www.dotcloud.com/
[14]: http://5by5.tv/changelog/89 'Their words... not mine.'
[15]: https://github.com/moby/moby/commits/master
[16]: https://docs.docker.com/
[17]: https://github.com/dotcloud/docker/stargazers

## In closing

So that's Docker. If you work on a large team, and somebody else does your operations, you may not end up working with it. But if you are starting up a project and you are looking for a powerful way to manage environments, I encourage you to try it out. Hey, maybe you'll find that this DevOps stuff isn't that difficult after all.
