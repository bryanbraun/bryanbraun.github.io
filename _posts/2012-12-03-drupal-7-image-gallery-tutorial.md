---
layout: post
title: "A Drupal 7 Image Gallery Tutorial"
date: 2012-12-03 21:40:58
---

<div class="tutorial">
  <p>
    This tutorial describes step-by-step how to build a basic thumbnail based image gallery, based on Views. The result would look something like this:
  </p>
  
  <p style="text-align: center;">
    <img alt="" src="/assets/images/drupal-photo-gallery-with-thumbnails.png" style="width: 740px; height: 510px;" />
  </p>
  
  <p style="text-align: center;">
    <small>(you can see a live demo at <a href="http://bryanbraun.com/portfolio">bryanbraun.com/portfolio</a>)</small>
  </p>
  
  <p>
    The instruction is designed for Drupal site builders or admins with a basic understanding of Views and Fields. It assumes you are running Drupal 7.x and Views 3.x.
  </p>
  
  <h2>
    Step 1: Preparation
  </h2>
  
  <h3>
    Modules
  </h3>
  
  <p>
    A views image gallery uses several modules. You can download and install all of these modules (and the modules they require) at <code>/admin/modules/install</code>.
  </p>
  
  <p>
    Enable the following contributed modules...
  </p>
  
  <ul>
    <li>
      <a href="http://drupal.org/project/views" rel="nofollow">Views</a> - all purpose "reports" generator for Drupal
    </li>
    <li>
      <a href="http://drupal.org/project/ctools" rel="nofollow">Chaos Tools</a> - a tools library required by Views
    </li>
  </ul>
  
  <p>
    ...as well as these core modules:
  </p>
  
  <ul>
    <li>
      Field
    </li>
    <li>
      Image
    </li>
    <li>
      File
    </li>
  </ul>
  
  <h2>
    Step 2: Content Configuration
  </h2>
  
  <h3>
    Step 2a: Create Content Types
  </h3>
  
  <p>
    We need to create a new content type for images we put in our gallery.
  </p>
  
  <ol>
    <li>
      Browse to <code>/admin/structure/types</code> and create a new content type called<strong> Gallery Image</strong>.
    </li>
    <li>
      Add a field to the content type called <strong>My Gallery Image</strong>. This will allow you to upload an image when creating content.
    </li>
    <li>
      Optional: remove any unnecessary fields like the body field. This content type only needs to be able to upload an image.
    </li>
  </ol>
  
  <p>
    <em>Note</em>: Feel free to use use whatever names you like for these fields and content types
  </p>
  
  <h3>
    Step 2b: Upload some photos as dummy content
  </h3>
  
  <ol>
    <li>
      Browse to <code>/node/add</code> and add content using the<strong> Gallery Image</strong> content type we just created
    </li>
    <li>
      Use the "My Gallery Image" field to upload one of the photos that you want in your gallery.
    </li>
    <li>
      Set any other settings as necessary and save the content.
    </li>
    <li>
      Repeat the steps above until you have loaded up 3 - 5 photos for dummy content
    </li>
  </ol>
  
  <h3>
    Step 2c: Create an image style for your thumbnail
  </h3>
  
  <ol>
    <li>
      Go to <code>/admin/config/media/image-styles</code> and click <em>Add Style</em> to add a style named <strong>gallery_thumbnail</strong>.
    </li>
    <li>
      Add an effect of "scale and crop" (several other effects may work for you, so feel free to play with these settings)
    </li>
    <li>
      Set the width and height to be 150 pixels
    </li>
    <li>
      Update the effect
    </li>
  </ol>
  
  <p>
    It ought to look something like this:
  </p>
  
  <p style="text-align: center;">
    <img alt="" src="/assets/images/gallery_image.png" style="width: 740px; height: 418px;" />
  </p>
  
  <h2>
    Step 3: Build the View
  </h2>
  
  <h3>
    Step 3a: Create a Gallery View
  </h3>
  
  <p>
    To display images in a Gallery we will create a view that displays every piece of content you have published under the <em>Gallery Image</em> content type.
  </p>
  
  <ol>
    <li>
      Go to <code>/admin/structure/views</code> and click <strong>Add new view</strong>
    </li>
    <li>
      For the view name, call it "Photo Gallery"
    </li>
    <li>
      Set the view to <strong>Show <em>Content</em> of type <em>Gallery Image</em> sorted by <em>Unsorted</em></strong>
    </li>
    <li>
      Check the box to <strong>Create a block</strong> (and uncheck the Create a page box if necessary)
    </li>
    <li>
      Name the block title "Photo Gallery"
    </li>
    <li>
      Set the display format to <strong><em>Grid</em> of <em>fields</em></strong>
    </li>
    <li>
      Set to 10 Items per page, check to use a pager and click save and exit
    </li>
  </ol>
  
  <h3>
    Step 3b: Views Configuration
  </h3>
  
  <p>
    We'll have created a view with a block display and now we need to ensure that all our settings are correct.
  </p>
  
  <p>
    First, locate the view in your list of views and click the link to edit it. Make sure your settings match those listed below:
  </p>
  
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
  
  <p>
    This criteria ensures that a photo won't appear in the gallery unless the photo has been properly uploaded and publish as part of your Gallery Image content type. The resulting set up will look something like this (though yours ought to say "Content: <em>My</em> Gallery Image").
  </p>
  
  <p style="text-align: center;">
    <img alt="" src="/assets/images/views%20settings.png" style="width: 321px; height: 278px;" />
  </p>
  
  <p>
    Save the view.
  </p>
  
  <h2>
    Step 4: Test your setup
  </h2>
  
  <p>
    Now scroll to the bottom of your view configuration page and check the <strong>Auto preview</strong> checkbox. If your gallery is being properly displayed in the region below, then you did it! Just save the view and it will be created as a block (remember, that's the option we chose in step 3a, #4). Now you just navigate to the blocks page (Admin Bar > Structure > Blocks) and drop the block into a region to see how the view looks on your site.
  </p>
  
  <h2>
    Step 5: What's next?
  </h2>
  
  <p>
    You can do a lot to customize your gallery. Here are some options:
  </p>
  
  <ul>
    <li>
      Change the pager settings for your view (determines the default number of thumbnails in your gallery)
    </li>
    <li>
      Style the view output for your view using CSS (I like <a href="http://drupal.org/project/css_injector" target="_blank">CSS Injector</a>, since it's quick and easy for beginners)
    </li>
    <li>
      Add a Page display to the view, so it exists on its own page (<a href="http://drupal.org/node/1578418" target="_blank" title="Drupal Views Displays">learn more about displays on drupal.org</a>)
    </li>
    <li>
      Change Image styles to change thumbnail size or image scaling/cropping in the thumbnail
    </li>
    <li>
      Uploading more images
    </li>
    <li>
      Allow rating of images (using modules like <a href="http://drupal.org/project/votingapi" target="_blank">Voting API</a>, or <a href="http://drupal.org/project/fivestar" target="_blank" title="Fivestar Module">Fivestar</a>)
    </li>
  </ul>
  
  <h2>
    Other Resources
  </h2>
  
  <ul>
    <li>
      <a href="http://drupal.org/project/views_gallery" rel="nofollow">Views Gallery module</a> by KarenS -- A Drupal 6 module that uses this methodology with hardcoded content types.
    </li>
  </ul>
  
  <p>
    <small>Note: I wrote this tutorial as part of a Drupalcon Denver documentation sprint and I originally saved it in the <a href="http://drupal.org/node/1497058" target="_blank">views issue queue</a> (which I'm pretty certain was the wrong place to put it). Anyways, I'm reposting it here so I could clean it up, include images, add links, and make it more findable. I certainly could have used this when I was figuring this out. Cheers!</small>
  </p>
</div>