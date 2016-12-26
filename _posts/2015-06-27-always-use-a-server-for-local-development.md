---
layout: post
title: "Always use a Server for Local Development"
date: 2015-06-27 15:21:25
---

You probably have a local development environment set up for your projects at work, complete with server and database. Maybe you manage a carefully designed custom environment with tools like Vagrant or Docker. Maybe you run a local instance of your CMS on an Server stack like MAMP or XAMPP.  If your sites are small, you likely use whatever server comes bundled with your Rails, Express, or Jekyll app.

But local servers aren't just for product development and client work. A lot of my side projects are Javascript libraries, and frontend demos, and while it's possible for me to simply load these from my file system, I always use a server instead.

## Here's why:

It's always best to develop and test in an environment similar to production, to prevent gotchas down the road. This is [frequently employed for continuous deployment of large apps][1], but it applies to your small static projects too.

 [1]: http://12factor.net/dev-prod-parity

What does production look like for a small static front-end project? It's a web server, responding to incoming requests by delivering static files that render and run in user's browsers. This is always true, whether your webpages are served by Github pages, Amazon S3, or a CDN.

What gotchas can we prevent by using a server for static projects? Here's a few that I've found:

*   Assets referenced via protocol-relative [won't be successfully requested][2].
*   Some browsers won't automatically detect local favicons at /favicon.ico.
*   Some third-party services won't function properly if you cannot pass them an IP address or URL.
*   Your browser's security settings may [prevent local assets from loading properly][3].
*   Other inevitable edge-cases for your application (comment below if you have seen other issues).

 [2]: http://billpatrianakos.me/blog/2013/04/18/protocol-relative-urls/
 [3]: http://superuser.com/questions/543744/can-static-websites-be-viewed-without-a-server#comment659163_543745

And there are benefits too:

*   Using a server allows for [easy local device testing][4] over your wifi network (especially [if you use Alfred][5]).
*   You can configure .htaccess or other local server settings.
*   You can [set up a local SSL certificate][6] to replicate serving files over https.

 [4]: http://stackoverflow.com/questions/3132105/how-do-you-access-a-website-running-on-localhost-from-iphone-browser
 [5]: https://github.com/asimpson/large-ip-address-alfred-workflow
 [6]: http://stackoverflow.com/questions/1203815/how-to-create-a-certificate-for-local-development-with-ssl

While you can live without these benefits and work around the issues, setting up a local server is so easy that there's pretty much no excuse not to do it.

## Here's how:

Using the terminal, browse to the folder containing your static project. Then run this simple Python command:

    python -m SimpleHTTPServer 1111

Note: You shouldn't need to do any setup<span style="color: rgb(84, 84, 84); font-family: arial, sans-serif; font-size: small; line-height: 18.2000007629395px;">—</span>all Macs and most Linux computers come with Python pre-installed.

Now you should see `Serving HTTP on 0.0.0.0 port 1111`, and when you open a browser and browse to `localhost:1111`, you will see the static webpages in your project served by the small python server. You can use any port by the way, but I use `1111` because [it's probably not being used by anything else][7] and it's easy to remember.

 [7]: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports

To make this even easier, I [set up a Bash alias][8] by adding this code to my `.bashrc` file:

 [8]: https://www.digitalocean.com/community/tutorials/an-introduction-to-useful-bash-aliases-and-functions

    alias server=&#39;python -m SimpleHTTPServer 1111&#39;

Now all I have to do is type `server` in a terminal, and it will instantly start a small server for my static files.

If you prefer a different tech stack, there are also little servers out there for [PHP][9], [NodeJS][10], and [any other major server-side language][11]. You can use any of these... just use something. Use it with static sites, hackathon projects, HTML5 games, and more. Whatever you're working on, no matter how small, can benefit from using a local server.

 [9]: http://php.net/manual/en/features.commandline.webserver.php
 [10]: https://www.npmjs.com/package/http-server
 [11]: https://gist.github.com/willurd/5720255