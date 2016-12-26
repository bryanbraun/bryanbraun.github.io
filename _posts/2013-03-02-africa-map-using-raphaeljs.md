---
layout: post
title: "Africa map using Raphael.js"
date: 2013-03-02 16:55:49
---

If you wanted to use an interactive US map on your website, you would find plenty of free options (like [this][1], or <a href="http://jvectormap.com/maps/countries/usa/" target="_blank" title="jVector map">this</a>, or <a href="http://blog.visual.ly/how-to-make-choropleth-maps-in-d3/" target="_blank" title="Cloropleth maps using D3">this</a>). However, if you were looking for an interactive map of Africa, then you were out of luck. Until now.

 [1]: https://github.com/robflaherty/us-map-raphael

<div align="center">
</div>

Last week I combined a couple resources and built out an SVG map of Africa using the <a href="http://raphaeljs.com" target="_blank" title="Raphael">Raphael.js</a> library. All the countries are accessible as HTML DOM objects and can be interacted with using CSS, Javascript, or the <a href="http://raphaeljs.com/reference.html" target="_blank" title="Raphael Documentation">options</a> provided by Raphael.js library. The path for each country is labeled, so you can easily delete paths and get a map containing a cluster of countries. Another small tweak to the transform allows you to scale the map to whatever size makes sense.

You can <a href="https://github.com/bryanbraun/africa-map-raphael" target="_blank" title="Africa Map Raphael">see the Africa Map demo here</a>, or look at the <a href="https://github.com/bryanbraun/africa-map-raphael" target="_blank" title="Africa Map Raphael">contributed code up on Github</a>.

After my years spent in Africa, I've retained a special place in my heart for the place. Hopefully this resource turns out to be useful to whatever Africa-focused business, non-profit, or government organization, happens to stumble across it.