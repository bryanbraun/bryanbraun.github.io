---
title: "The Powder Toy"
date: 2021-01-18
related: [
  "The unique power of games in building intuition",
  "We are just seeing the beginning of interactive online learning"
]
---

A few months ago, I discovered a game that has gotten a *lot* of mileage in our house recently. It's called [The Powder Toy](https://powdertoy.co.uk) ([Wikipedia article](https://en.wikipedia.org/wiki/The_Powder_Toy)).

The Powder Toy is a 2D environment where you can build interactive images, scenes, and structures. It's considered a "[Falling-sand game](https://en.wikipedia.org/wiki/Falling-sand_game)" and it was originally released in 2010 as open-source software (which helps explain its large community and quirky interface).

<figure class="center">
  <img src="{{site.url}}/assets/images/PowderToy.webp" alt="An office building with elevators, lights, and fountain, and many other details." />
  <figcaption>An office building, built with The Powder Toy.</figcaption>
</figure>

## Physics

Inside The Powder Toy is a full-blown physics sandbox. Every pixel represents an element with realistic material properties. For example, light-blue is ICE, which melts into WATER at 0°C, and can be crushed into SNOW at high pressures.

There are [hundreds of unique elements](https://powdertoy.co.uk/Wiki/W/Elements.html), each with their own properties. Various elements can dissolve, combust, grow, decay, conduct electricity, and more.

<figure class="center">
  <video controls onended="this.currentTime = 0">
    <source src="{{site.url}}/assets/video/PowderToyCityExplodes.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption><a href="https://powdertoy.co.uk/Browse/View.html?ID=1146000" target="_blank">This city</a> is mostly constructed out of WOOD, COAL, and TNT.<br />This leads to predictable (and entertaining) results when you simulate a lightning strike. 😈</figcaption>
</figure>

Each pixel can be inspected to identify the element and its current temperature and pressure. This is useful when you're tinkering around and trying to understand what's happening.

For example, I'd be building a volcano lair and then ask myself, "wait, why is the steam drifting to the left?" Then I'd realize that my lava chamber is heating up the air in the room, increasing the pressure and causing the air to rush out the door. Other sandbox-y games, like Minecraft, have some basic physics simulation, but this one is pretty detailed!

## Electronics

The electrical elements allow you to create circuits and chain reactions. It doesn't take much knowledge to get something interesting to happen (you can make a laser gun or Tesla coil just by messing around). But if you want to go deep, there's [a tutorial in the Powder Toy Wiki that teaches you how to make logic gates and simple electronic devices](https://powdertoy.co.uk/Wiki/W/Complete_Electronics_Tutorial.html). Naturally, some people have used these to build impressive electronics, like [this (mostly) working calculator](https://powdertoy.co.uk/Browse/View.html?ID=389689):

<figure class="center">
  <video controls onended="this.currentTime = 0">
    <source src="{{site.url}}/assets/video/PowderToyCalc.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <figcaption>This interactive calculator has buttons, a display, and circuits for handling each of it's basic operations.</figcaption>
</figure>

## Exploration

There's a huge database of projects that other people have built and uploaded. You can browse these projects in the app (or [on the website](https://powdertoy.co.uk/Browse.html)), to explore what people have made (and blow them up with explosives 😈).

<figure class="center">
  <img src="{{site.url}}/assets/images/PowderToyBrowse.png" alt="A list of projects in the browsing UI, including: Destroyable city 5, 8x6 line text display, Steam Tree, PWR nuclear power plant, Mineral Refinery, Simple auto-puffmaker, Spark maze extreme, Vault 1, Arctic city 2, and Mini photo laser" />
  <figcaption>What does "Destroyable city", "8x6 line text display", and "Spark maze extreme" have in common? <br>Nothing, except that they were all built with The Powder Toy.</figcaption>
</figure>

The breadth of the projects defies categorization. Some people build scenery. Others, little games. Others, construction kits that you can use in your own projects. Projects can be easily cloned, enhanced, up-voted, and commented on.

The game is also super hackable. There's an [in-game console](https://powdertoy.co.uk/Wiki/W/Using_The_Console.html) for running commands or custom written scripts (the game has a Lua API). It supports [mods](https://powdertoy.co.uk/Wiki/W/Mod_collection.html) which can be used to extend the set of elements and gameplay options. And of course, you can contribute to [the core project on Github](https://github.com/The-Powder-Toy/The-Powder-Toy).

## Education

All of the things I've mentioned above makes this an incredible educational game for kids.

The elements and their properties are great primers for chemistry and materials science.

The simulation of temperature, pressure, velocity, and gravity, helps develop [an intuition]({{site.url}}/2019/03/28/the-unique-power-of-games-in-building-intuition/) for physics.

The console and APIs gives you opportunities to tinker with programming.

Playing the game is a creative process, where you make things, share them with the larger community, and get feedback. That's the same process you'll need to understand if you want to be an artist, designer, writer, comedian, or entrepreneur.

A common criticism of sandbox games is that there's no narrative or objective to move you through the game and teach you how everything works. I get that... The Powder Toy is no "Legend of Zelda."

But the ability to explore projects helps you see what's possible instead of leaving you to figure the game out on your own. A little curiosity goes a long way.

It helps that there's plenty of opportunities for dopamine rushes. The game gives you access to all sorts of exotic materials, that you can use to great, destructive, effect. Plutonium, Antimatter, Thermite, and Singularity are all effective tools for leveling a city (often, in a beautiful burst of fire and light).

## Conclusion

The Powder Toy has been a welcome addition to our pandemic-induced homeschool routine. I really enjoy tinkering with it and seeing what my kids are building (during [Daily Demos]({{site.url}}/2019/07/16/daily-demos-a-ritual-for-raising-kids-that-create/)).

I don't remember how I found this game but I couldn't believe I hadn't heard of it before. The game just screams "BRYAN" but nobody told me about it, even though it's been around for over 10 years!

So that's why I'm telling you about it. If you know someone who would like it, I hope you share it with them.
