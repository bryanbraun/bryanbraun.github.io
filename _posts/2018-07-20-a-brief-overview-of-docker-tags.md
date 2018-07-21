---
title: "A Brief Overview of Docker Tags"
date: 2018-07-20 23:55:00
related: [
  "The Frontend Developer's Guide to Docker"
]
---

Let's talk about Docker tags... what they are and how they work. I had to figure this stuff out recently and I thought I'd share what I learned.

To start, lets just run `docker images` on a typical docker project, and see what we find:

```
$ docker images

REPOSITORY      TAG         IMAGE ID          CREATED           SIZE
postgres        9.6.1       77af4d6b9913      19 hours ago      265 MB
gridmaster_web  latest      b6fa739cedf5      19 hours ago      193 MB
<none>          <none>      78a85c484f71      19 hours ago      193 MB
<none>          <none>      30557a29d5ab      20 hours ago      193 MB
<none>          <none>      5ed6274db6ce      24 hours ago      193 MB
```

It's a bunch of docker images. We've got a postgres image, and four different images of [my web application](https://gridmaster.io).

As you can see, each one has an Image ID, like `77af4d6b9913` (which is a truncated version of the full ID). These IDs are unique, which means we can reference them in various commands. That's great, but it would be better if we could reference them in a way that was more practical and human-readable.

## Enter tags

A tag is a way to label an image with useful information for both humans and machines. You've probably seen tag names at the top of [Dockerfiles](https://docs.docker.com/engine/reference/builder/), like this:

```
FROM postgres:9.6.1
```

The `postgres:9.6.1` tag is just an alias for the underlying image ID (`77af4d6b9913`), and, as you can see, it gives us information about the environment we're building (it's a [Postgresql](https://www.postgresql.org/) environment).

Our own, custom-built images will be untagged by default, but we can tag them with the [docker tag](https://docs.docker.com/engine/reference/commandline/tag/) command:

```
# Given an image with an ID of 78a85c484f71...
docker tag 78a85c484f71 gridmaster_web:1.0.0
```

This is cool, but one of the main reasons to tag images is to associate them with a Docker repo and an image registry (like [hub.docker.com](https://hub.docker.com/) or registry.gitlab.com) so we can store our images in the cloud. To see how to do this, lets look at the full structure of a tag.

## The full structure of a tag

There are many possible parts to a tag:

```
[registry-domain]/[user name]/[image name]:[version]
```

Some of these parts are optional, which is a little confusing.

For example, these are all valid tag names:

- `registry.mydomain.com/bryanbraun/ruby:4.4.0`
- `bryanbraun/ruby:4.4.0`
  - _This one has no registry defined. If you attempt to push/pull this image docker will assume it goes to docker's own registry [hub.docker.com](https://hub.docker.com/)_
- `bryanbraun/ruby`
  - _This has no version number, which is allowed._
- `bryanbraun/ruby:latest`
  - _This references `:latest`, a nickname assigned to the last built tag that was NOT given a version. More on this later._
- `ruby:4.4.0`
  - _This has no user defined because it is an "official image" in Docker's own registry._

Some registries support other formats, like [Gitlab](http://gitlab.com/), which provides another namespace so you can store multiple images per Gitlab repo. Here's the Gitlab tag format:

```
[registry-domain]/[user name]/[repo name](/optional image name):[version]
```

And here's an example Gitlab tag:

```
registry.gitlab.com/bryanbraun/myapp/nginx:1.0.0
```

## What about :latest?

There are [whole articles](https://medium.com/@mccode/the-misunderstood-docker-tag-latest-af3babfd6375) about `:latest` because it's not intuitive. In short, `:latest` is a nickname assigned to the last built tag **that was NOT given a version**. It takes the place of the version number in the tag name (like `ruby:latest` instead of `ruby:4.4.0`) If you explicitly give a version to a tag, it will never be identified as `:latest`. It's probably best to just use version numbers for your tags, instead of relying on `:latest`.

At the end of the day, tags are there to help you identify Docker images and push or pull them from external registries. They're a pretty fundamental concept, so I hope you found this overview useful.
