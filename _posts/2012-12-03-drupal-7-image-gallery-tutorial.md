---
layout: post
title: "A Drupal 7 Image Gallery Tutorial"
date: 2012-12-03 21:40:58
---

This tutorial describes step-by-step how to build a basic thumbnail based image gallery, based on Views. The result would look something like this:

<img alt="" src="/assets/images/drupal-photo-gallery-with-thumbnails.png" />

The instruction is designed for Drupal site builders or admins with a basic understanding of Views and Fields. It assumes you are running Drupal 7.x and Views 3.x.

## Step 1: Preparation

### Modules

A views image gallery uses several modules. You can download and install all of these modules (and the modules they require) at `/admin/modules/install`.

Enable the following contributed modules...

* [Views](http://drupal.org/project/views) - all purpose "reports" generator for Drupal
* [Chaos Tools](http://drupal.org/project/ctools) - a tools library required by Views

...as well as these core modules:

* Field
* Image
* File

## Step 2: Content Configuration

### Step 2a: Create Content Types

We need to create a new content type for images we put in our gallery.

1. Browse to `/admin/structure/types` and create a new content type called **Gallery Image**.
2. Add a field to the content type called **My Gallery Image**. This will allow you to upload an image when creating content.
3. Optional: remove any unnecessary fields like the body field. This content type only needs to be able to upload an image.

*Note*: Feel free to use use whatever names you like for these fields and content types

### Step 2b: Upload some photos as dummy content

1. Browse to `/node/add` and add content using the **Gallery Image** content type we just created
2. Use the "My Gallery Image" field to upload one of the photos that you want in your gallery.
3. Set any other settings as necessary and save the content.
4. Repeat the steps above until you have loaded up 3 - 5 photos for dummy content

### Step 2c: Create an image style for your thumbnail

1. Go to `/admin/config/media/image-styles` and click *Add Style* to add a style named **gallery_thumbnail**.
2. Add an effect of "scale and crop" (several other effects may work for you, so feel free to play with these settings)
3. Set the width and height to be 150 pixels
4. Update the effect

It ought to look something like this:

<img alt="" src="/assets/images/gallery_image.png" />

## Step 3: Build the View

### Step 3a: Create a Gallery View

To display images in a Gallery we will create a view that displays every piece of content you have published under the *Gallery Image* content type.

1. Go to `/admin/structure/views` and click **Add new view**
2. For the view name, call it "Photo Gallery"
3. Set the view to Show <em>Content</em> of type <em>Gallery Image</em> sorted by <em>Unsorted</em></strong>
4. Check the box to **Create a block** (and uncheck the Create a page box if necessary)
5. Name the block title "Photo Gallery"
6. Set the display format to <strong><em>Grid</em> of <em>fields</em></strong>
7. Set to 10 Items per page, check to use a pager and click save and exit

### Step 3b: Views Configuration

We'll have created a view with a block display and now we need to ensure that all our settings are correct.

First, locate the view in your list of views and click the link to edit it. Make sure your settings match those listed below:

<ul>
  <li>
    Display name: 'Photo Gallery'
  </li>
</ul>

<ul>
  <li>
    Title<br />- Title: 'Photo Gallery'
  </li>
</ul>

<ul>
  <li>
    Format:<br />- Style: 'Grid'; Number of columns: '5'; Horizontal<br />- Show: 'Fields'
  </li>
</ul>

<ul>
  <li>
    Fields<br />- Content: 'My Gallery Image'; Formatter: 'Image'; Image style: 'gallery_thumbnail'; Link image to: 'content'
  </li>
</ul>

<ul>
  <li>
    Filter Criteria:<br />- Content: 'Published (Yes)'<br />- Content: 'Published or admin'
  </li>
</ul>

This criteria ensures that a photo won't appear in the gallery unless the photo has been properly uploaded and publish as part of your Gallery Image content type. The resulting set up will look something like this (though yours ought to say "Content: My Gallery Image").

<img alt="" src="/assets/images/views%20settings.png" />

Save the view.

##  Step 4: Test your setup

Now scroll to the bottom of your view configuration page and check the **Auto preview** checkbox. If your gallery is being properly displayed in the region below, then you did it! Just save the view and it will be created as a block (remember, that's the option we chose in step 3a, #4). Now you just navigate to the blocks page (Admin Bar > Structure > Blocks) and drop the block into a region to see how the view looks on your site.


## Step 5: What's next?

You can do a lot to customize your gallery. Here are some options:

  * Change the pager settings for your view (determines the default number of thumbnails in your gallery)
  * Style the view output for your view using CSS (I recommend [CSS Injector](http://drupal.org/project/css_injector) for beginners, since it's not as difficult as full-on theming)
  * Add a Page display to the view, so it exists on its own page ([learn more about displays on drupal.org](http://drupal.org/node/1578418))
  * Change Image styles to change thumbnail size or image scaling/cropping in the thumbnail
  * Uploading more images
  * Allow rating of images (using modules like [Voting API](http://drupal.org/project/votingapi), or [Fivestar](http://drupal.org/project/fivestar))

## Other Resources

* [Views Gallery module](http://drupal.org/project/views_gallery) by KarenS -- A Drupal 6 module that uses this methodology with hardcoded content types.

<small>Note: I wrote this tutorial as part of a Drupalcon Denver documentation sprint and I originally saved it in the [views issue queue](http://drupal.org/node/1497058) (which I'm pretty certain was the wrong place to put it). Anyways, I'm reposting it here so I could clean it up, include images, add links, and make it more findable. I certainly could have used this when I was figuring this out. Cheers!</small>
