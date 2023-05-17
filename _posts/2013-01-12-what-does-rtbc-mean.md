---
title: "What does RTBC mean?"
date: 2013-01-12 15:07:02
---

If you ever spend time in the Drupal.org issue queues, the Drupal forums, or Drupal-centric IRC chatrooms, you'll see people mentioning RTBC. But what does RTBC mean?

**RTBC means "Reviewed and Tested by the Community"**

Let me use an example. Lets say you have made changes to a file and you submit those changes for inclusion in Drupal in the form of a patch. That patch is uploaded through the issue comments on Drupal.org where other people can see it. This begins a process whereby people try out your patch and set the issue status as "Needs Work" whenever the patch needs more work, or "Needs Review" whenever the patch has been updated and needs to be reviewed again. If the patch is reviewed and the reviewer finds it in good working condition, then that reviewer can set the status to "Reviewed and Tested by the Community."

Other information about RTBC:

*   Anybody with a Drupal.org account can set a ticket to RTBC.
*   RTBC status should be set by the person who tests the update and finds that it passes all relevant criteria.
*   The person who updated the code should not set their own ticket status to RTBC.
*   Once an issue has the status of RTBC, somebody with 'commit access' gives it another review and, if it is good, commits it to the project.
