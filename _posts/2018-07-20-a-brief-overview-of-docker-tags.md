---
title: "A Brief Overview of Docker Tags"
date: 2018-07-20 23:55:00
related: [
  "The Frontend Developer's Guide to Docker"
]
---

I was digging into Docker tags recently, so I thought I'd share what I learned while it's still fresh in my mind.

To set the stage, lets just run `docker images` on a typical docker project, and see what we find:

```
$ docker images

REPOSITORY      TAG         IMAGE ID          CREATED           SIZE
<none>          <none>      78a85c484f71      19 hours ago      193 MB
<none>          <none>      30557a29d5ab      20 hours ago      193 MB
<none>          <none>      5ed6274db6ce      24 hours ago      193 MB
```

It's a bunch of docker images.

As you can see, each one has an Image ID, like `78a85c484f71` (which is a truncated version of the full ID). These IDs are unique and we can reference them in various commands, but they don't tell us very much about the image. It would be better if we could reference images in a way that was more practical and human-readable.

## Enter tags

A tag is a way to label an image with useful information for both humans and machines. You've probably seen tag names at the top of [Dockerfiles](https://docs.docker.com/engine/reference/builder/), like this:

```
FROM postgres:9.6.1
```

The `postgres:9.6.1` tag is just an alias for the underlying image ID, but it gives us more information about the environment we're building. This tag is formatted as `[repository]:[version]`, so it would be displayed like this when looking at our images:

```
REPOSITORY      TAG         IMAGE ID          CREATED           SIZE
postgres        9.6.1       77af4d6b9913      19 hours ago      265 MB
```

## The full structure of a tag

There are many possible parts to a tag:

```
[registry-domain]/[user name]/[repository]:[version]
```

Some of these parts are optional. For example, these are all valid tag names:

- `my-registry.mydomain.com/bryanbraun/ruby:4.4.0`
- `bryanbraun/ruby:4.4.0`
  - _This one has no registry defined. If you attempt to push or pull this image, Docker will assume it goes to Docker's own registry [hub.docker.com](https://hub.docker.com/)_
- `bryanbraun/ruby`
  - _This has no version number, which is allowed._
- `bryanbraun/ruby:latest`
  - _This references `:latest`, a special nickname assigned to some tags. More on this&nbsp;later._
- `ruby:4.4.0`
  - _This has no user defined because it is from an "official repository" (ruby) in Docker's own registry._

As you can see, one of the main reasons to tag images is to associate them with an image registry (like [hub.docker.com](https://hub.docker.com/) or registry.gitlab.com). This gives our images the metadata needed to store our images in the cloud.

Some registries support other tag name formats, like [Gitlab](http://gitlab.com/), which [provides a namespace so you can store multiple images per Gitlab repo](https://gitlab.com/gitlab-org/gitlab-ce/issues/17801).

## Tagging our own images

Our own, custom-built images will be untagged by default, like this one from the list above:

```
REPOSITORY      TAG         IMAGE ID          CREATED           SIZE
<none>          <none>      78a85c484f71      19 hours ago      193 MB
```

We can tag it with the [`docker tag`](https://docs.docker.com/engine/reference/commandline/tag/) command:

```
docker tag 78a85c484f71 registry.gitlab.com/bryanbraun/gridmaster:1.0.0
```

Now it looks like this:

```
REPOSITORY                                 TAG         IMAGE ID          CREATED           SIZE
registry.gitlab.com/bryanbraun/gridmaster  1.0.0       78a85c484f71      19 hours ago      193 MB
```

As you can see, everything except the version number field is considered repository data, and displayed in the repository field.

## What about :latest?

It's common to see tags with the word `:latest` taking the place of the version number (like `ruby:latest` instead of `ruby:4.4.0`). There are [whole articles](https://medium.com/@mccode/the-misunderstood-docker-tag-latest-af3babfd6375) about `:latest` because it's not intuitive. In short, `:latest` is a nickname assigned to the last built tag **that was NOT given a version**. If you explicitly give a version to a tag, it will never be identified as `:latest`. It's probably best to just use version numbers for your tags, instead of relying on `:latest`.

At the end of the day, tags are there to help you identify Docker images and push or pull them from external registries. They're a pretty fundamental concept, so I hope you found this overview useful.
