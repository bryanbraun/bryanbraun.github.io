---
title: "Lessons learned from five years of running a family Minecraft server"
date: 2025-06-28
related: [
  "The unique power of games in building intuition",
  "Why we prefer computers over consoles when introducing kids to gaming",
  "Daily Demos: a ritual for raising kids that create",
  "Online Tools for Creative Kids"
]
---

For the past five years, I've been running a family Minecraft server. The server began as a one-year experiment during the pandemic but quickly became an indispensable "[third place](https://en.wikipedia.org/wiki/Third_place)" for our kids to spend time with friends and extended family who lived far away. I'm writing this post to share our research and lessons learned, in case it's useful to anyone else.


## Overview
### Project goals

The goal behind this server was to create a fun and safe virtual space for our kids to spend time with distant family members and friends. There are lots of public Minecraft servers out there, many which are very active and have heavily customized Minecraft to create RPGs, mini-games, team sports, and more. Instead of trying to recreate something like that, we focused on building a private space to play Minecraft in all of it's many forms (various gamemodes, rulesets, enhancements, etc).

### Project requirements
- The server should use Minecraft Java edition. We prefer Java edition for it's superior creative ecosystem, including mods, plugins, resource packs, and more (for details, see [Why we prefer computers over consoles when introducing kids to gaming]({{site.url}}2024/03/08/why-we-prefer-computers-over-consoles-when-introducing-kids-to-gaming/)).
- The server should be private.
- The server should give us admins full creative control to design the ideal playing experience for our family. We should be able to play in whatever worlds we want to, in any gamemode, with any ruleset we want.
- The server should be relatively low-maintenance.
- The server should be relatively inexpensive.

## Early decisions
### Hosting

When it comes to hosting, there's a maintenance vs control trade-off and we were willing to adopt some maintenance overhead if it gave us a lot of control over our gaming environment. With that it mind, here are the hosting options we looked at:

- 1st-party hosted world (Realms, etc) - Low maintenance, low control
- 3rd-party Minecraft-specific server rental (Shockbyte, etc) - Medium maintenance, high control
- 3rd-party generic server rental (Digital Ocean, etc)- High maintenance, high control
- Full self-hosted (Raspberry Pi, etc) - Extremely high maintenance, highest control

 A service like Realms offers a polished experience, but it seemed too limiting for us (it's a single vanilla Minecraft world, with low customization). That said, managing all the code and dependencies on a Linux machine in my basement seemed unsustainable. We decided on a $5/month server from Shockbyte. Serious server maintainers like to hate on Shockbyte because it's shared hosting. I get it—us web-devs have similar opinions about services like BlueHost and HostGator. But for a small, private, family server, Shockbyte was perfect. Here's a few things I liked about it:

- A convenient dashboard that allows server maintenance from any web browser.
- A dedicated UI for Minecraft-specific server maintenance needs (Minecraft version management, Plugin browser, User management, etc)
- In-browser server console
- FTP access for convenient file management and backups

In short, it gave us all the control we needed while reducing a bunch of the overhead.

### Minecraft server-type

In Java edition, there are [multiple flavors of Minecraft that you can run on a server](https://www.spigotmc.org/wiki/what-is-spigot-craftbukkit-bukkit-vanilla-forg/). These extend the original Minecraft server code, preserving the original game while adding new APIs to make Minecraft more extendable for developers. Here are a few of the server types we looked at:

- **Vanilla**: The original Minecraft game, without much customization.
- **Forge**: Forge means mods. Mods are powerful and can dramatically change the game, but in order for a user to join a Forge server, they are usually required to run Forge locally, along with the mods that the server is running.
- **Spigot/Bukkit**: Supports "Plugins" which offers medium customization and can be run on the server, without requiring users to run them locally. Spigot and Bukkit have differences but are largely cross-compatible.
- **Paper**: A high-performance fork of Spigot, with various fixes and additional configuration options.
- …[many others](https://www.spigotmc.org/wiki/what-is-spigot-craftbukkit-bukkit-vanilla-forg/)

In our case, we went with Spigot. The plugins allowed us to customize the environment while still making it easy for users to join (which reduced the amount of tech support we'd need to provide to grandparents, etc).

### Plugins

The Minecraft Spigot/Bukkit community has a large library of plugins that you can enable on your server to customize the game. These are largely free, open-source, and built by hobbyists. Even with Shockbyte's plugin browser, it took some intermediate technical skill to find and manage plugins for our server. The main challenge is ensuring that the plugins you use are compatible with your version of Minecraft and with each other. Minecraft has been around for 15 years, which means that there are a lot of old plugins out there that no longer run on the latest version of Minecraft. A failing plugin might leave you with an obscure error message in your console, or maybe no error at all. Like all open source, support is unreliable and documentation is mixed, so you're on the hook to resolve your own issues.

For us, it was worth it. We tried many plugins and our favorites became indispensable to how we played Minecraft on the server. Here's a list of the ones we used the most:

- **Multiverse** - Tools for managing multiple Minecraft worlds on a single instance (more on this below)
- **Multiverse Portals** - Portals for traveling between multiverse worlds
- **Multiverse SignPortals** - Allows Minecraft "signs" to act as multiverse portals
- **Multiverse Inventories** - Allows independent inventories in each multiverse world
- **WorldEdit** - Gives you crafting superpowers, like bulk-edit, cut/copy/paste, commands for building shapes, and more
- **CustomImages** Allows you to make any image into a Minecraft "painting"
- **Dynmap** - Think "Google Maps for Minecraft"
- **Grief Prevention** - Configurable player restrictions that you can place in a world to prevent trolling/griefing (with good defaults)
- **LuckPerms** - Highly configurable permissions, allowing you to create roles for different kinds of users
- **ChairsReloaded** - Enable users to build chairs and sit in them… it's simple, but strangely endearing

## Designing a virtual play-space ("one server, many worlds")

I wanted our server to accommodate all of the different ways people might want to play Minecraft. We ended up creating a network of worlds, powered by plugins like [Multiverse](https://dev.bukkit.org/projects/multiverse-core) and [LuckPerms](https://luckperms.net/). This setup evolved over time, but mapping it out would look something like this:

![A diagram showing each world on the server and how they are connected]({{site.url}}/assets/images/minecraft_server_worlds.png)

Describing each world briefly…

- **Land_of_Braun** - A creative paradise, and the central hub for the server
- **adventure_time** - An entry-level survival world for young kids, with strong protections for builds, grief-prevention, and anti-cheating measures
- **hard_times** - A hard-mode survival world, for experienced players
- **2007, nerd_night, peter_and_cameron** - One-off survival worlds for various friend groups

With these worlds, we could invite friends with a wide variety of ages and skill-levels, and usually find something they would enjoy doing.

In Land_of_Braun, at the spawn location, we built "Grand Central Station" to serve as a transportation hub. Inside it, we set up a wall of "sign portals" for teleporting to each of the other worlds.

<figure class="center">
  <img src="{{site.url}}/assets/images/grand-central-station.jpg" />
  <figcaption>Grand Central Station, our server's transportation hub.</figcaption>
</figure>

<figure class="center">
  <img src="{{site.url}}/assets/images/sign-portal-worlds.jpg" />
  <figcaption>Sign portals for teleporting to each world. <br />We removed one-off worlds when finished with them to preserve server resources (more on this below).</figcaption>
</figure>

As Land_of_Braun filled up with interesting builds, we also created sign portals for teleporting to many of these points of interest.

![A wall of sign portals used for teleportation within the Land_of_Braun world]({{site.url}}/assets/images/sign-portals.jpg)

<figure class="center">
  <img src="{{site.url}}/assets/images/peachs-castle.jpg" alt="Peach's Castle from Mario 64, built in Minecraft"/>
  <figcaption>Peach's Castle</figcaption>
</figure>

<figure class="center">
  <img src="{{site.url}}/assets/images/itza.jpg" alt="Itza, built in Minecraft"/>
  <figcaption><a href="https://en.wikipedia.org/wiki/Chichen_Itza" target="_blank">Chichén Itzá</a></figcaption>
</figure>

<figure class="center">
  <img src="{{site.url}}/assets/images/star-valley-temple-minecraft.jpg" alt="Star Valley Temple, built in Minecraft"/>
  <figcaption>Star Valley Temple</figcaption>
</figure>

<figure class="center">
  <video controls onended="this.currentTime = 0" style="max-width: 100%">
    <source src="{{site.url}}/assets/video/ice-castle-flyby.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>Ice-castle, built into the side of a mountain</figcaption>
</figure>


As I've hosted many remote play sessions, I've discovered some ways to make them more successful:
- It's significantly more fun to talk out loud while you play. We found that Discord and Facetime usually worked the best for this (better than Zoom/Google Meet/phones).
- When playing in creative mode, find a building prompt that everybody can participate in (regardless of age and skill level). Some examples included:
  - City-building, where each person gets their own city block to build on. This prompt can span multiple play sessions (ie, expanding the city) and supports several variations (Normal city, "Halloween town", Medieval village, Winter city, etc).
  - "Let's build a castle together." Break it into parts that each person can work on (the grounds, the moat, the dungeon, etc). This can work for non-castles too, as long as it can be clearly subdivided.
  - Everyone build your dream house (and then give tours).
- Some commands ended up being so useful that most everyone playing on our creative world learned them:
  - `/gspawn`: for returning to grand central station
  - `/tp` or `/mvtp`: for teleporting to different worlds, locations, and people (or teleporting people to you)
  - `/thru`: teleports yourself through an obstacle immediately in front of you.
  - Many WorldEdit commands (`/copy`, `/paste`, `/set`, etc)
- As the server admin, it's good to play on the server with the other players so you can see their pain-points and adjust game/world settings to address them. For example, in typical Minecraft survival, all players must be asleep and in beds in order for the game to skip through the night to the next day. I saw that this often caused conflict in our games (often some people wanted to sleep, but others didn't want to stop what they were doing). We were able to resolve most conflicts by changing `playersSleepingPercentage` to a majority value, like 51% (meaning, if a majority of the players are sleeping, the game would advance to the next day).
- Refining permissions takes effort but it is worth it, because bad permissions can lead to a lot of issues that takes all the fun out of playing (cheating, griefing, vandalism, etc).

## Being a server admin

When using a 3rd-party hosting provider like Shockbyte, you're the one responsible for maintaining your server and keeping it running. Here's a few things I learned throughout that process.

### "Dad, the server went down"

If the server goes down for some reason, a simple restart may fix it. Hosts like Shockbyte make this as easy a clicking a button in the control panel.

If a restart doesn't work, check the console for error messages.

At one time, we kept seeing a message: `Can't keep up! Is the server overloaded? Running 2867ms or 57 ticks behind.` Our server was facing memory constraints.

[Memory constraints can happen for many reasons](https://shockbyte.com/help/knowledgebase/articles/minecraft-server-can-t-keep-up), but in this case, it was caused by a recent update to a newer version of Minecraft with a higher memory requirement. We made some adjustments which addressed the issue for a while, but eventually we needed to upgrade to a server with more RAM.

At another time, we noticed our server struggling, and discovered that we were approaching the file storage limit for our hosting plan. Looking closer, we saw that we had some large files leftover from older Minecraft versions we had run in the past. We also saw that we had some worlds we were no longer using (worlds can be pretty heavy, space-wise). Deleting these old versions and worlds gave us plenty of space to work with.

Finally, I should mention the time that a curious kid used WorldEdit to build a massive sphere of TNT. As they gleefully detonated it, the rendering of the explosion slowed the server to a crawl (also a memory issue). In this case, we needed to adjust the render settings to simplify the explosion and resolve it one portion at a time. Once the explosion finished, everything went back to normal. 🥵

### Updating Minecraft

Visitors to your server need to run the same version of Minecraft that *you* run on the server. Minecraft receives updates often, which means that you'll need to update your server-Minecraft regularly or be OK with running older versions. We've done the update several times at this point, so here's my advice for anyone doing Minecraft server updates:

- Always back up your server before running updates! (more on this below)
- Before attempting an update, check to see if your dependencies (ie. plugins) are compatible with the new version. Updating Minecraft usually means you need to update your plugins. If an important plugin doesn't support your target Minecraft version, then you should probably wait to update. The more plugins you use, the more likely it is that you'll need to trail the latest Minecraft version.
- After you update and restart your server, watch for error messages in your console. It's the easiest way to tell if something is broken and how you might fix it.

### Running backups

In the five years we've managed our server, the worst incident was when an errant WorldEdit command converted an enormous number of existing blocks in the Land_of_Braun into "Iron Bars". In the process, the server crashed, making it impossible to reverse the action with a WorldEdit "undo" command. Worst of all, we didn't have a recent backup. 😱

Periodic backups are essential if you're running a server. Fortunately, many Minecraft server hosts have a backup feature feature built-in. Our host (Shockbyte), allows you to schedule backups on a set interval, automatically replacing the oldest back-up when you reach a configurable limit. Super convenient! ![]({{site.url}}/assets/images/minecraft-server-backups.png)

If your host does not offer automatic backups, a simple solution is to connect to your server with an FTP client (like Filezilla), and periodically copy all server files down to your local computer. This was our primary backup method for awhile, and it's what ended up saving us from the iron-apocalypse (we eventually found a semi-recent backup we could restore to).

## Conclusion

As far as Minecraft servers go, ours is pretty simple, but it still required a lot of learning. Our server continues to evolve as we discover more and better ways to play. Have you ever managed a family Minecraft server? How did it go? What worked for you?
