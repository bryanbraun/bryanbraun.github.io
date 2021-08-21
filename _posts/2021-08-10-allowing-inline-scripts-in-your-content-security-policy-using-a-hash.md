---
title: "Allowing inline scripts in your Content Security Policy using a hash"
date: 2021-08-10
related: [
  "Every Possible Way to Define a Javascript Function",
  "An Overview of Javascript's try-catch",
  "Pause javascript in the browser using the \"debugger\" command"
]
---

The problem: your Content Security Policy is throwing errors because you have inline scripts in your HTML:

![Error message from an inline script violating a Content Security Policy]({{site.url}}/assets/images/csp-error-message.png)

Like the error message says, you could resolve this with an "unsafe-inline" keyword, a "nonce", or a "hash." I want to describe the "hash" solution, how it works, and why it's secure.

## The Quick Solution

### Step 1

Select and copy the hash shown in the error message (in browsers like Chrome and Edge).

![Selected hash in a Content Security Policy error message]({{site.url}}/assets/images/csp-error-message-highlighted.png)

### Step 2

Paste the hash text into the script-src directive of your Content Security Policy.

<figure class="center">
  <a href="{{site.url}}/assets/images/csp-hash-added.png" target="_blank">
    <img src="{{site.url}}/assets/images/csp-hash-added.png" alt="Hash text added to a Content Security Policy meta tag" />
  </a>
  <figcaption>I added this hash to a metatag policy but you could also add it to a header-based policy.</figcaption>
</figure>

### Step 3

Refresh the page and confirm that your error message goes away.

<small><em>Note: You can also apply the same fix for inline styles, using the style-src directive.</em></small>


## The Longer Explanation

So what is this error and why does this fix work?

The job of a Content Security Policy (CSP) is to restrict a bunch of browser features<sup><a href="#footnotes">1</a></sup> for your website, to make it more difficult for hackers to exploit.

One of these restricted features is inline scripting (basically, a set of `<script>` tags with JavaScript code inside of them).

[As Google explains](https://developers.google.com/web/fundamentals/security/csp), attackers will often try and inject their own `<script>` tags into your HTML to take control of your website's interface. It's one of the most common attack vectors, which is why inline scripts are banned in CSPs by default. You *can* allow inline scripts in your CSP (using that "unsafe-inline" keyword), but it's highly discouraged.

Ideally, your CSP would ban inline scripts and your webpage wouldn't use them. Unfortunately, lots of sites rely on inline scripts and it can be difficult to remove them all. That's where the hash feature comes in.

### The hash feature

The hash feature lets you selectively allow a specific inline script in your Content Security Policy.

It does this by using a hash function to create a unique ID for your inline script. Adding this ID to your policy is like adding the script to [an allowlist](https://en.wikipedia.org/wiki/Whitelisting).

<div class="side-note">
  Side note: <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function" target="_blank">Hash functions</a> are algorithms that are used to create a unique ID (or digest) for a given data input. They have several applications, like generating "git commit IDs", obscuring password data, and verifying the integrity of HTTPS requests.
</div>

To generate an ID for our inline script, we can copy every character inside our `<script>` tags (including the whitespace) and paste them as the input of our hashing algorithm, as shown in this example<sup><a href="#footnotes">2</a></sup>:

<figure class="center">
  <a href="{{site.url}}/assets/images/csp-hash-instructions.png" target="_blank"><img src="{{site.url}}/assets/images/csp-hash-instructions.png" alt="An example showing of code being selected and pasted into a terminal command for a SHA-256 hashing algorithm" /></a>
  <figcaption>
    <p>This terminal command (echo -n "$(pbpaste)" | openssl sha256 -binary | openssl base64) uses "pbpaste" and the "openssl" library, which are available by default on most modern Mac operating systems.</p>
    <p>The ID that is output by the algorithm (boxed in red) can be added to the CSP.</p>
  </figcaption>
</figure>

This workflow is a bit complex, which is why many browsers will give you the script tag's SHA-256 ID inside the error message, saving you the effort of generating it yourself. If you do choose to generate it yourself, [you can optionally use other hashing algorithms like SHA-384 or SHA-512](https://www.w3.org/TR/CSP2/#source-list-valid-hashes).

### Checking the hash

When a browser with a CSP sees an inline `<script>` tag, it automatically runs it's contents through the CSP's hashing algorithm, looks at the resulting ID, and checks whether the ID matches one that has been allowed by the CSP. If the ID is listed, the browser knows for sure that you've approved this script to be on your page. If the ID is missing, the browser throws an error and won't execute the script.

### Tradeoffs

The hash solution is nice because it's [quick and simple](#the-quick-solution), but there are downsides.

1. If you need to allow several inline scripts (or styles), all those IDs can add clutter to your policy.
2. Every time you make a change to your inline script, you'll need to update your CSP. This applies even for non-functional changes like code comments or whitespace.

These issues can be annoying so it's best to minimize your inline scripts as much as possible before using the hash solution. Alternatively, you can check out the [`nonce` solution](https://content-security-policy.com/nonce/), which might work better for you, depending on your tech stack and how many inline scripts you have.

***

<p id="footnotes">
  <small><sup>1</sup> The awkward implication here is that browsers are pretty insecure by default. Browser developers can't correct this without massively breaking backwards compatibility… a principle they're pretty committed to (for which I'm grateful!). Thus, Content Security Policies create as an opt-in way to create a more secure (and restrictive) browsing environment on a per-website basis.</small>
</p>

<p>
  <small><sup>2</sup> I pulled the examples in this post from a Content Security Policy I added to a project of mine. You can see <a href="https://github.com/bryanbraun/checkboxland/commit/b351b48f9ccf93bc65dc706d5ce89be0464f2b9b" target="_blank">the full commit changes for that policy addition here on Github</a>.</small>
</p>

