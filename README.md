# xudongtang.github.io

The source for my personal website at https://xudongtang.github.io. The site is
plain HTML, CSS, and JavaScript, so there is no build step. GitHub Pages serves
the files in this repository as they are.

## Files

- `index.html` is the whole site. Each section is marked with a comment, and
  every spot that needs your own text has an `EDIT` comment next to it.
- `style.css` holds the styling. The colors, fonts, and widths are variables at
  the top of the file, so you can change the look in one place.
- `script.js` handles the light and dark toggle, the footer year, and the
  underline on the nav link for the section you are reading.
- `404.html` is the page GitHub shows for an address that does not exist.
- `assets/` holds the favicon and a placeholder portrait.
- `archive/` is the previous version of this site, an interactive map of world
  life expectancy data built with D3.js. It still works at
  https://xudongtang.github.io/archive/ and the home page links to it as a
  project.
- `.nojekyll` tells GitHub Pages to serve the files directly instead of running
  them through Jekyll.

## Editing the site

Open `index.html` and replace the text in square brackets, e.g. `[Your role]`.
The sections are, in order, the intro, about, projects, experience, writing, and
contact. To add a project, copy one of the `<li class="project">` blocks. To add
a job, copy one of the `<li>` blocks inside the timeline. To remove a section,
delete its `<section>` block and the matching link in the nav at the top.

To add your CV, save it as `assets/cv.pdf`. The intro already links to that
path. If you do not want a CV link, delete the line with the `EDIT` comment
about it.

To add a photo, save it in `assets/` and change the `src` of the portrait image
in the intro to match. The placeholder is `assets/portrait.svg`.

To change the colors or fonts, edit the variables at the top of `style.css`.
The light theme is in the first block, and the dark theme is repeated in the
two blocks after it. Keep the two dark blocks the same. The fonts come from
Google Fonts through the link tag in the head of `index.html`, so if you pick
different fonts, change that link and the font variables together.

## Previewing locally

Run a small web server from the repository folder and open the address it
prints.

```
python3 -m http.server 8000
```

Then visit http://localhost:8000 in a browser. Opening `index.html` directly
from the file system also works, but the 404 page only works through a server.

## Deploying

Push to the `main` branch. GitHub Pages publishes the site within a minute or
two. If the site does not update, check the Pages section of the repository
settings and make sure it deploys from the `main` branch and the root folder.
