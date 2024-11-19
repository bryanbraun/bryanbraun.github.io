---
title: "Unusual Git IDs"
date: 2024-11-19
related: [
  "Unconventional Github Projects",
  "Drawing git branching diagrams",
  "Editing a commit in an interactive rebase"
]
---

You can search Github for unusual commit IDs:

<figure class="center">
  <img src="{{site.url}}/assets/images/github-commit-id-search.png" alt="Github search page including a search for commits with an ID of 0000000" />
  <figcaption>There are over 2k commits starting with 0000000!</figcaption>
</figure>

While looking for commits like these, I started to become suspicious that people were intentionally modifying their commits IDs to be unusual:

<figure class="center">
  <img src="{{site.url}}/assets/images/eeeeeee.png" alt="Github search result for a commits with and ID of 'eeeeeee'" />
  <figcaption>A commit ID of <code>eeeeeee</code>, with a message of "eeeeeee", created by a user named "eeee".</figcaption>
</figure>

<figure class="center">
  <img src="{{site.url}}/assets/images/defaced.png" alt="List of consecutive commits, all with an ID of 'defaced'" />
  <figcaption>What are the odds that this user happened to commit seven consecutive commits, all with an ID of "defaced"?</figcaption>
</figure>

Sure enough, there are tools you can use to generate "vanity" commit IDs (like [git-vanity-hash](https://github.com/prasmussen/git-vanity-hash)). These tools work by using the "brute-force" method. Basically, they create a commit, check the hash, and if it doesn't match, they increment a piece of data in the commit header and try again.

That's pretty clever but I'm more interested in unusual commit IDs that occur naturally. How often do they happen? Have I ever created one before?

## Searching my commits

I decided to use Github's CLI tool, `gh`, to query the Github API and pull down a list of my public commits:

```bash
gh search commits --author bryanbraun --json commit --jq ".[].commit.tree.sha" --limit 1000
```

This worked but [it limited me to 1000 commits](https://github.com/cli/cli/discussions/7010) (my public total is closer to 4k). Eventually, I found a way to get them all by writing a bash script to break up my queries by year, generating one file per query, and combining the files when done:

```bash
#!/bin/bash

# To prevent API rate limits, set a personal access token to the GITHUB_TOKEN
# environment vairable in your terminal before running this script.

username="bryanbraun"
start_year=2012
end_year=2024

# Create a file for each year
for year in $(seq $start_year $end_year); do
  next_year=$((year + 1))
  echo "Fetching commits from $year to $next_year..."
  gh api -X GET \
    "/search/commits?q=author:$username+committer-date:$year-01-01..$next_year-01-01" \
    --header "Accept: application/vnd.github.cloak-preview" \
    --paginate \
    -q '.items.[].sha' >> "commits-$year.txt"
done

# Combine all files into one
cat commits-*.txt > all_commits.txt

# Remove unused files
for year in $(seq $start_year $end_year); do
  rm "commits-$year.txt"
done
```

The result is a 4000-line file with one commit ID per line:

![all commits]({{site.url}}/assets/images/all-commits.png)

Now I just needed to scan my commit IDs for unusual patterns. Grep is good at this kind of thing so I put together a bash script that uses grep to do various checks:

```bash
#!/bin/bash

# Define the input file containing commit SHAs
input_file="all_commits.txt"

echo "Analyzing patterns in the first 7 characters of commit SHAs..."

# Check 1: SHAs where the first 7 characters are the same
echo "\n1. SHAs where the first 7 characters are the same:"
grep -E '^(.)\1{6}' "$input_file"

# Check 2: SHAs starting with a palindrome (e.g., "abcdcba")
echo "\n2. SHAs starting with a palindrome:"
grep -E '^(.)(.)(.)(.)\3\2\1' "$input_file"

# Check 3: SHAs where the first 7 characters form an ascending sequence
echo "\n4. SHAs where the first 7 characters form an ascending sequence:"
grep -E '^(0123456|1234567|2345678|3456789|456789a|56789ab|6789abc|789abcd|89abcde|9abcdef)' "$input_file"

# Check 4: SHAs where the first 7 characters form a descending sequence
echo "\n5. SHAs where the first 7 characters form a descending sequence:"
grep -E '^(fedcba9|edcba98|dcba987|cba9876|ba98765|a987654|9876543|8765432|7654321|6543210)' "$input_file"

# Check 5: SHAs where the first 7 characters form a repeating pattern (e.g., "abababa")
echo "\n6. SHAs where the first 7 characters form a repeating pattern:"
grep -E '^(.)(.)\1\2\1\2\1' "$input_file"

# Check 6: SHAs where the first 7 characters are vowels only
echo "\n7. SHAs where the first 7 characters are vowels only:"
grep -E '^[aeiouAEIOU]{7}' "$input_file"
```

I ran this and got something! One of my commits was a palindrome: <code>c5a7a5c</code>

<figure class="center">
  <img src="{{site.url}}/assets/images/my-palindrome-commit.png" alt="Github search page including a commit with an ID of c5a7a5c" />
  <figcaption><code>c5a7a5c</code>, my most unusual commit ID, was created over ten years ago!</figcaption>
</figure>

It's not the most beautiful commit ID but I'm pretty happy that I found something.

## What else could we do?

My list of checks was pretty short, so we could expand it if we wanted. Here are some ideas:

1. Check if the first seven characters are all letters, or all numbers (e.g., "afddcbf", "2950312").
2. Check if the first seven characters are composed of only two distinct characters (e.g., "a44aaa4").
3. Check commit IDs against [a list of words constructed from hexadecimal characters](https://nedbatchelder.com/text/hexwords.html) (e.g., "baff1ed").
4. Check if the first seven characters are in alphabetical order (e.g., "accdfff").
5. Check if the first seven characters are in numerical order (e.g., "0035789").
6. Check for interesting patterns outside of the first 7 characters of the commit ID.

I actually tried that first idea but I found that the "all numbers" case was too common (it found over a dozen matches in my commit history). You gotta strike the right balance.

It would be fun to put together a web interface where people could put in their Github username and scan their own commits, but I've come to terms with the fact that there's not enough time in the world to build all the interesting little websites that ought to exist.

I used ChatGPT to help me build the scripts, which made it possible to punch out this analysis in a single afternoon. If it took any longer, I likely wouldn't have attempted it. This is a perfect example of [AI-enhanced development making me more ambitious with my projects](https://simonwillison.net/2023/Mar/27/ai-enhanced-development/).

I put all the scripts in a public repo at [bryanbraun/unusual-commit-ids](https://github.com/bryanbraun/unusual-commit-ids). Feel free to fork it, download it, and scan your own commits. If you find any unusual commits in your own history, you should share them in the comments (naturally occurring commits only)!

Finally, if you thought this was interesting, you may like my other git commit-related projects:

* [Commit colors](https://github.com/sparkbox/commit-colors)
* [Commit haikus (a now-retired twitter bot)](https://x.com/CommitHaikus)
