---
title: "How to make maps with Raphael.js"
date: 2014-11-09 14:52:20
---

A while back I posted [a project on Github][1] containing [a dynamic map of Africa][2] which could be manipulated and animated using the [Raphael.js][3] library. Since then, I've had a handful of people ask how they could build out similar mapping projects for themselves. For example, what if you wanted to map out the neighborhoods in New York City or the provinces of South Africa with Raphael.js? How do you set that up?

 [1]: https://github.com/bryanbraun/africa-map-raphael
 [2]: http://www.bryanbraun.com/2013/03/02/africa-map-using-raphaeljs
 [3]: http://raphaeljs.com/

Mapping is complicated, and there are probably hundreds of ways to go about something like this, but here's how I set up the Africa map:

## 1. Get a vector graphic of the map you want

The foundation of your map is a vector graphic. I won't go into detail about the difference between vector and raster graphics, but vector graphics will come in file formats like .eps, .svg, or .ai (instead of .png, .jpg, or .gif). If you have vector drawing software like Adobe Illustrator or [Inkscape][4] (and the skills to use it) you can draw the map you'd like to use. If not, you may be able to find your graphic for online. One place you may want to check is [Wikimedia commons][5], where the graphics are often free, though you'll want to check the licensing information to see what types of reuse are allowed. If you don't mind paying a nominal fee, you can look up stock graphics on services like [vectorstock.com][6].

 [4]: https://inkscape.org/en/
 [5]: http://commons.wikimedia.org/wiki/Category:SVG
 [6]: http://www.vectorstock.com/

Once you have your vector graphic, you're ready for step two.

## 2. Reformat your file

Here's where we get our hands dirty. We're going to look at the code in your vector graphic file, which you can see by opening the file in any plain text editor (like [Sublime Text][7] or [Notepad++][8]). The code inside most vector graphic files is really pretty simple. For example, here's the code for a simple star image:

 [7]: http://www.sublimetext.com/
 [8]: http://notepad-plus-plus.org/

    <?xml version="1.0" encoding="UTF-8" standalone="no"?>

    <!-- Created with Inkscape (http://www.inkscape.org/) -->
    <svg
      xmlns:dc="http://purl.org/dc/elements/1.1/"
      xmlns:cc="http://creativecommons.org/ns#"
      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="744.09448"
      height="1052.3622"
      id="svg2">

      <defs id="defs4" />
      <metadata id="metadata7">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>image/svg+xml</dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
            <dc:title></dc:title>
          </cc:Work>
        </rdf:RDF>
      </metadata>

      <g id="layer1">
        <path d="M 568.57143,615.21933 310.90474,560.4251 119.6914,741.62111 92.180417,479.63317 -139.2354,353.77112 101.42857,246.6479 149.61908,-12.335128 325.86857,183.44701 587.06775,149.24875 455.33196,377.37199 z" transform="matrix(0.6026846,0,0,0.6026846,230.39392,137.95621)" id="path2985" style="fill:#000000;fill-opacity:1;stroke-width:0.40000001;stroke-miterlimit:4;stroke-dasharray:none" />
      </g>
    </svg>

![][9]

 [9]: /assets/images/star.png

We need to change this information into a javascript format that RaphaelJS can recognize. To do this, I used a tool called [SVG2RaphaelJS][10]. Just open the page, paste in your SVG code, and it will generate the code for a RaphaelJS object you can use. Here's what my star SVG code generates:

 [10]: http://toki-woki.net/p/SVG2RaphaelJS/

    var mySVG=[0,0,744.09448,1052.3622,{
        "stroke-miterlimit":"4",
        "stroke-dasharray":"none",
        "fill":"#000000",
        "stroke-width":"0.40000001",
        "fill-opacity":"1",
        "stroke":"none",
        "type":"path",
        "path":"M 568.57143,615.21933 310.90474,560.4251 119.6914,741.62111 92.180417,479.63317 -139.2354,353.77112 101.42857,246.6479 149.61908,-12.335128 325.86857,183.44701 587.06775,149.24875 455.33196,377.37199 z"
    }];

As you can see, it's basically just a javascript variable, with specific properties that RaphaelJS looks for. The star itself is is defined by the coordinates in the `path` property, and the rest is just styling information. I found that I had to reformat some of these properties in order to get it to work with the [Raphael()][11] function in [the current Raphael API][12] (maybe there are multiple ways to use Raphael, or the API changed since SVG2Raphael was made… not sure). Here's how I reorganized it.

 [11]: http://raphaeljs.com/reference.html#Raphael
 [12]: http://raphaeljs.com/reference.html

    var R = Raphael("container", 1000, 900),
        attr = {
            "stroke-miterlimit":"4",
            "stroke-dasharray":"none",
            "fill":"#000000",
            "stroke-width":"0.40000001",
            "fill-opacity":"1",
            "stroke":"none"
        },
        path = "M 568.57143,615.21933 310.90474,560.4251 119.6914,741.62111 92.180417,479.63317 -139.2354,353.77112 101.42857,246.6479 149.61908,-12.335128 325.86857,183.44701 587.06775,149.24875 455.33196,377.37199 z";

    R.path(path).attr(attr);

## 3. Embed the Javascript

Add that script on your page after loading the raphael.js library (and make sure you have a `<div id="container"></div>` on the page) and your image will appear. [Here's a demo][13].

 [13]: http://jsfiddle.net/9tqbk8zc/

You can do tons more with Raphael, but this ought to get you started with converting SVGs to Raphael images.

Finally, native SVG is getting pretty powerful in modern browsers these days, so you may want to bypass Raphael--if you don't need it--and embed the SVG directly. [Here's a basic tutorial][14] if you want to look into that option.

 [14]: http://www.sitepoint.com/add-svg-to-web-page/
