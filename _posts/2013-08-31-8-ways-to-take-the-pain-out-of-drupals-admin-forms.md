---
title: "8 ways to take the pain out of Drupal's admin forms"
date: 2013-08-31 08:51:13
related: [
  "Five basic principles for Drupal UIs that anyone can follow"
]
---

When you really look at it, most interactive web applications like Facebook, Hotmail, and even Google Docs are really just forms. You put in values, click submit, it interacts with a database, code runs, and you see results. Drupal is no exception. Some forms are longer than others<span style="color: rgb(0, 0, 0); font-family: verdana, sans-serif; line-height: 17.984375px;">—</span>cough cough, modules page<span style="color: rgb(0, 0, 0); font-family: verdana, sans-serif; line-height: 17.984375px;">—</span>but they are forms none-the-less. So naturally, by replacing Drupal's default form elements with newer, more modern alternatives, we can make a big impact on Drupal's user experience. If that's your goal, here are some options worth looking into:

## Multi-select

By default, Drupal gives you three basic multi-select options: checkboxes, autocomplete, and select lists. These can get the job done, but each one has weaknesses. Here you can see each option, its pros/cons, and alternatives for improving the experience.

<table cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th valign="top">
        Default Widgets
      </th>

      <th valign="top">
        Pros / Cons
      </th>

      <th valign="top">
        Alternatives
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td valign="top">
        <p>
          <strong>Checkboxes</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/checkboxes-single_0.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Basic. Intuitive. Great if there's only a couple terms.
        </p>

        <p>
          <b>Cons:</b><br />Long lists take up too much space.
        </p>
      </td>

      <td valign="top">
        <p>
          <span class="s1"><a href="https://drupal.org/project/multicolumncheckboxesradios">Multicolumn checkboxes radios</a></span> <small><a href="#footnote1">[1]</a></small>, Styling to display checkboxes in multiple columns.
        </p>

        <p>
          <img alt="" src="/assets/images/multiple-checkboxes_225.png" />
        </p>
      </td>
    </tr>

    <tr>
      <td valign="top">
        <p>
          <strong>Autocomplete</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/Autocomplete_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Small profile. Search box is a common pattern.
        </p>

        <p>
          <b>Cons: </b><br />It's too slow to act like instant search. For tagging, you cannot see all your available options. Comma-delimited autocomplete isn't a common pattern.
        </p>
      </td>

      <td valign="top">
        <p>
          <a href="https://drupal.org/project/autocomplete_deluxe">Autocomplete Deluxe</a>, <a href="https://drupal.org/project/chosen">Chosen</a>
        </p>

        <p>
          <img alt="" src="/assets/images/autocomplete-deluxe_225.png" />
        </p>
      </td>
    </tr>

    <tr>
      <td valign="top">
        <p>
          <strong>Multi-select List</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/multi-select-tags_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Small profile. Can be used for long and short lists.
        </p>

        <p>
          <b>Cons: </b><br />Command-click is unintuitive. Cannot see all selected terms at once. Small space to operate in. Unselecting terms is difficult. Difference between 'highlighted' and 'selected' is ambiguous.
        </p>
      </td>

      <td valign="top">
        <p>
          <a href="https://drupal.org/project/multiselect">Multi-select Module</a>
        </p>

        <p>
          <img alt="" src="/assets/images/multiselect_225.png" />
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Webforms

It may not come with Drupal core, but odds are that you have the Webform module installed on your site. With content-creators building forms and users filling them out, a few field improvements can go a long way. 

<table cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th class="td1" valign="top">
        Defaults
      </th>

      <th class="td2" valign="top">
        Pros / Cons
      </th>

      <th class="td3" valign="top">
        Alternatives
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td valign="top">
        <p>
          <strong>Key|Value</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/key-value_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Makes it possible to define keys and values.
        </p>

        <p>
          <b>Cons:</b><br />Pipe delimiting is awkward.
        </p>
      </td>

      <td valign="top">
        <p>
          <span class="s2"><a href="https://drupal.org/project/options_element">Options Element</a></span>
        </p>

        <p>
          <img alt="" src="/assets/images/options-element_225.png" />
        </p>
      </td>
    </tr>

    <tr>
      <td valign="top">
        <p>
          <strong>Select List / Radios</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/webform-select_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Appropriate for most uses.
        </p>

        <p>
          <b>Cons:</b><br />Doesn't support open-ended options.
        </p>
      </td>

      <td valign="top">
        <p>
          <a href="https://drupal.org/project/select_or_other">Select or other</a>, <a href="https://drupal.org/project/conditional_fields" target="_blank" rel="noopener noreferrer" title="Conditional Fields">Conditional Fields</a>, <a href="https://drupal.org/project/field-conditional-state" target="_blank" rel="noopener noreferrer" title="An alternative to conditional fields that looks pretty promising">Field Conditional State</a>
        </p>

        <p>
          <img alt="" src="/assets/images/webform-select-or-other_225.png" />
        </p>
      </td>
    </tr>

    <tr>
      <td valign="top">
        <p>
          <strong>Classic Webform UI</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/webform_ui_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b>
        </p>

        <p>
          Generally intuitive. Supports drag and drop sorting.
        </p>

        <p>
          <b>Cons:</b><br />No preview. Requires clicking through to edit individual field options. Can only add one form element at a time.
        </p>
      </td>

      <td valign="top">
        <p>
          <a href="https://drupal.org/project/webform_alt_ui">Webform Alternative UI</a>
        </p>

        <p>
          <img alt="" src="/assets/images/webform_alt_ui_225.png" />
        </p>

        <p>
          <a href="http://youtu.be/pdeLN5GByek">See a demo video (Drupal Gardens)</a>
        </p>
      </td>
    </tr>
  </tbody>
</table>

The Options Element and Select or other modules provide developer tools you can use to improve the forms in other modules as well, so if you're a module developer, you may want to take advantage of that.

## HTML 5 Forms

The web has charged ahead since the last release of Drupal, and HTML5 supports many new features that Drupal 6 and 7 still lack. Here are some notable modules you can use to incorporate these improvements.

<table cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th valign="top">
        Defaults
      </th>

      <th valign="top">
        Pros / Cons
      </th>

      <th valign="top">
        Alternatives
      </th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td valign="top">
        <p>
          <strong>File Upload, Image Upload</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/single-file-select_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Simple. Works as expected.
        </p>

        <p>
          <b>Cons: </b><br />Doesn't support multiple uploads.
        </p>
      </td>

      <td valign="top">
        <p>
          <a href="https://drupal.org/project/multiupload_filefield_widget">Multiupload Filefield Widget</a>, <a href="https://drupal.org/project/multiupload_imagefield_widget">Multiupload Imagefield Widget</a>
        </p>

        <p>
          <img alt="" src="/assets/images/multi-file-select_225.png" />
        </p>
      </td>
    </tr>

    <tr>
      <td valign="top">
        <p>
          <strong>Text fields</strong>
        </p>

        <p>
          <img alt="" src="/assets/images/mobile-keyboard_225.png" />
        </p>
      </td>

      <td valign="top">
        <p>
          <b>Pros:</b><br />Simple. Works as expected.
        </p>

        <p>
          <b>Cons: </b><br />Drupal's form API doesn't support HTML5 form fields or HTML5 element attributes.
        </p>
      </td>

      <td valign="top">
        <p>
          <span><a href="https://drupal.org/project/elements">The Elements Module</a></span>
        </p>

        <p>
          <img alt="" src="/assets/images/mobile-keyboard-html5_225.png" />
        </p>
      </td>
    </tr>
  </tbody>
</table>

The Elements module provides developer tools instead of widgets you can add through the UI, but it's still nice to have modern form elements easily available to developers. You can also try out one of <a href="https://groups.drupal.org/node/205298"><span class="s1">the many options for HTML5 drag and drop file uploads</span></a> and see if there's one that suits your needs.

With <a href="https://drupal.org/node/1183606"><span class="s1">a handful of these features going into Drupal 8</span></a>, and <a href="https://drupal.org/node/1683838"><span class="s1">other good ones</span></a> <a href="https://drupal.org/node/491022"><span class="s1">in the works</span></a>, there's a lot of progress in this space. In the mean time, these modules will take you far.

What do you think? Did I miss any?

<small id="footnote1">[1] Multi-column checkbox radios is <a href="https://drupal.org/node/1148836">only partially ported to Drupal 7</a>.</small>
