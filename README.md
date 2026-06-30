# clairefitch.github.io

Personal and creative site for **Claire Fitch** — composer, sound designer, electroacoustic artist, cellist, and lecturer. Built as a static site and served via GitHub Pages, with the custom domain [fitchsounds.com](https://fitchsounds.com) pointing here.

The site brings together academic work, sonic art, electronic literature, game scores, publications, and production music under one roof — a working portfolio rather than a fixed showcase, updated as new projects and research take shape.

## Structure

- `index.html` — homepage, including the hero section and "now playing" feature
- `site.jsx` — shared components used across pages (navigation, section heroes, footer)
- `sonic-art.html`, `electronic-literature.html`, `game-scores.html`, `publications.html`, `production-music.html` — section pages
- `teaching-research.html` — teaching, supervision, qualifications, leadership, conferences
- `contact.html` — contact page
- `JSONBASH/` — *JSON B(ourne)AS(soon)H*, a browser-based artwork encoding bassoon lines from the five Bourne film scores as executable JSON

## Notes

- Pages are built with React (JSX) loaded directly in-browser — no build step required.
- Mobile layout is handled via CSS media queries in `site.jsx`; section heroes and the homepage hero each have their own responsive rules.
- DNS for `fitchsounds.com` is managed through Cloudflare, pointed at GitHub Pages' standard A records.

## Related projects

- [StreetScéal](https://streetsceal.ie) — AR-based GPS audio walking trail project for Drogheda, built separately
