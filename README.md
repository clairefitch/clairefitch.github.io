# clairefitch.github.io

Personal and creative site for **Claire Fitch** — composer, sound designer, electroacoustic artist, cellist, and lecturer. Built as a static site and served via GitHub Pages, with the custom domain [fitchsounds.com](https://fitchsounds.com) pointing here.

The site brings together academic work, sonic art, electronic literature, game scores, publications, and production music under one roof — a working portfolio rather than a fixed showcase, updated as new projects and research take shape.

## Structure

- `index.html` — homepage, including the hero section and "now playing" feature
- `site.jsx` — shared components used across pages (navigation, section heroes, footer)
- `sonic-art.html`, `electronic-literature.html`, `game-scores.html`, `publications.html`, `production-music.html` — section pages
- `teaching-research.html` — teaching, supervision, qualifications, leadership, conferences
- `contact.html` — contact page

### Individual works

Each of the following folders contains a sonic art web page paired with a Unity player for the associated game score:

- `3DIM/` — *Three Days In May*, recordings from Drogheda and Laytown in May 2015, folded into each other as a mass — no foreground, no background.
- `ATBS/` — *And The Birds Sang*, An interactive game score where the performer navigates a branching environment of cues; the cello sounds and field recordings shift with the path taken.
- `FFDEAD/` — *FFDEAD*, inspired by the hexadecimal code for the JavaScript colour Navajowhite. A sonnet written and recorded; the audio basis for the first gamescore.
- `Look/` — *Look (FFEBCD)*
- `QTE/` — *Questioning The Elements*, a score that asks the player to interrogate the elements of cello performance themselves — bow pressure, breath, intervals — as triggers for sonic environments.
- `Serration/` — *Serration*
- `TGS/` — *Tale of a Great Sham(e) Text*, a text-driven score weaving voice, instrument and on-screen prompts into a single act of reading-as-performance.
- `UnityBeeps/` — *UnityBeeps*, two beeps — 110 bpm and 111 bpm. Two minutes to drift into sync, two minutes to drift out again.
- `ValenT/` — *ValenT*, a live remix / improvisation of Gertrude Stein reading A Valentine To Sherwood Anderson, 1922.
- `WCID/` — *We Called It Dirt*, type the letters W, E, C, A, L, L, E, D, I, T, D, I, R, T to play.
- `JSONBASH/` — *JSON B(ourne)AS(soon)H*, a browser-based artwork encoding bassoon lines from the five Bourne film scores as executable JSON

## Notes

- Pages are built with React (JSX) loaded directly in-browser — no build step required.
- Mobile layout is handled via CSS media queries in `site.jsx`; section heroes and the homepage hero each have their own responsive rules.
- DNS for `fitchsounds.com` is managed through Cloudflare, pointed at GitHub Pages' standard A records.

## Related projects

- [StreetScéal](https://streetsceal.ie) — AR-based GPS audio walking trail project for Drogheda, built separately
