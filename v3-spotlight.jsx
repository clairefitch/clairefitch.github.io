// Direction 3 — "Spotlight"
// Featured work above the fold, name overlaid on full-bleed image.
// Warm cream + serif body + tight typographic detail. Image-led editorial cards.

const v3 = {
  paper: '#ece5d3',
  ink: '#1a140b',
  card: '#f6f0df',
  rule: 'rgba(26,20,11,0.18)',
  muted: 'rgba(26,20,11,0.62)',
  faint: 'rgba(26,20,11,0.42)',
  accent: 'oklch(0.46 0.13 30)', // deep terracotta
};

const v3Css = `
.v3 { background: ${v3.paper}; color: ${v3.ink}; font-family: 'Lora', 'Source Serif Pro', Georgia, serif; font-size: 18px; line-height: 1.6; }
.v3-mono { font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
.v3-sans { font-family: 'IBM Plex Sans', system-ui, sans-serif; }
.v3-display { font-family: 'Lora', serif; font-weight: 500; letter-spacing: -0.025em; line-height: 0.96; }
.v3 a { color: inherit; text-decoration: none; }
.v3 a.under { border-bottom: 1px solid ${v3.faint}; transition: border-color .15s; }
.v3 a.under:hover { border-bottom-color: ${v3.ink}; }
.v3-tape { display: inline-block; background: ${v3.ink}; color: ${v3.paper}; padding: 4px 10px 3px; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; }
.v3-card { background: ${v3.card}; border: 1px solid ${v3.rule}; }
`;

function V3Nav() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3, padding: '28px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', color: '#fff', mixBlendMode: 'difference' }}>
      <div className="v3-mono" style={{ color: '#fff' }}>Claire Fitch</div>
      <div className="v3-mono" style={{ color: '#fff', display: 'flex', gap: 28 }}>
        <a href="#works">Works</a>
        <a href="#sonic-art">Sonic Art</a>
        <a href="#electronic-literature">E-Lit</a>
        <a href="#game-scores">Game Scores</a>
        <a href="#publications">Publications</a>
        <a href="#production">Production</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

function V3Hero() {
  return (
    <section style={{ position: 'relative', height: 820, overflow: 'hidden', background: '#0e0a05', color: '#f6f0df' }}>
      <div style={{ position: 'absolute', inset: 0, background: `url(https://clairefitch.github.io/images/BI-1.jpg) center/cover`, filter: 'brightness(0.62) contrast(1.05) saturate(0.9) sepia(0.18)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 60%, rgba(14,10,5,0.7) 100%)' }} />
      <div style={{ position: 'absolute', left: 56, bottom: 80, right: 56 }}>
        <div className="v3-tape" style={{ background: '#f6f0df', color: '#1a140b', marginBottom: 28 }}>Featured · Sonic Art · 2021</div>
        <h1 className="v3-display" style={{ fontSize: 132, margin: 0, color: '#f6f0df' }}>
          Claire&nbsp;Fitch
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 64, marginTop: 36, alignItems: 'end' }}>
          <p style={{ margin: 0, fontSize: 22, lineHeight: 1.45, maxWidth: 720, color: 'rgba(246,240,223,0.92)', textWrap: 'pretty' }}>
            Composer, sound artist, cellist and lecturer working at the intersection of electroacoustic composition, electronic literature and game design.
          </p>
          <div style={{ textAlign: 'right' }}>
            <div className="v3-mono" style={{ color: 'rgba(246,240,223,0.6)', marginBottom: 8 }}>Now playing</div>
            <div style={{ fontFamily: "'Lora', serif", fontSize: 24, fontStyle: 'italic' }}>Becoming Imperceptible</div>
            <div className="v3-mono" style={{ color: 'rgba(246,240,223,0.6)', marginTop: 4 }}>thirtythree-45 · Droichead Arts</div>
            <PlayBar />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlayBar() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 18, justifyContent: 'flex-end' }}>
      <button style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(246,240,223,0.4)', background: 'rgba(246,240,223,0.08)', color: '#f6f0df', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><polygon points="2,1 13,7 2,13" /></svg>
      </button>
      <div style={{ flex: '0 0 240px', height: 2, background: 'rgba(246,240,223,0.25)', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '38%', background: '#f6f0df' }} />
      </div>
      <span className="v3-mono" style={{ color: 'rgba(246,240,223,0.7)' }}>02:14 / 05:48</span>
    </div>
  );
}

function V3About() {
  return (
    <section id="about" style={{ padding: '96px 56px', borderBottom: `1px solid ${v3.rule}` }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div className="v3-mono" style={{ color: v3.accent, marginBottom: 16 }}>About</div>
          <h2 className="v3-display" style={{ fontSize: 56, margin: 0 }}>A practice between<br/>cello and code.</h2>
        </div>
        <div style={{ fontSize: 20, lineHeight: 1.55, color: v3.ink }}>
          <p style={{ margin: 0, textWrap: 'pretty' }}>
            Claire Fitch FHEA completed her PhD at Queen's University Belfast's Sonic Arts Research Centre (SARC) in 2019, supervised by Professor Michael Alcorn, and is the author of <em>Sounding Emerging Media</em>, published by Routledge (Fitch, 2022).
          </p>
          <p style={{ marginTop: 18, color: v3.muted, textWrap: 'pretty' }}>
            She was a cellist with the RTÉ National Symphony Orchestra from 1995 to 2012, and since 2015 has been a lecturer in the Department of Creative Arts, Media and Music at Dundalk Institute of Technology. Through her production company Fitchsounds she has provided audio for the European Commission, Intel, AMD, Adobe and the Blender Institute, and is an Avid ACI Instructor for Sibelius.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 40, borderTop: `1px solid ${v3.rule}`, paddingTop: 24 }}>
            <div>
              <div className="v3-mono" style={{ color: v3.faint, marginBottom: 6 }}>PhD</div>
              <div style={{ fontStyle: 'italic' }}>QUB · SARC, 2019</div>
            </div>
            <div>
              <div className="v3-mono" style={{ color: v3.faint, marginBottom: 6 }}>Book</div>
              <div style={{ fontStyle: 'italic' }}>Routledge, 2022</div>
            </div>
            <div>
              <div className="v3-mono" style={{ color: v3.faint, marginBottom: 6 }}>Teaching</div>
              <div style={{ fontStyle: 'italic' }}>DkIT, since 2015</div>
            </div>
            <div>
              <div className="v3-mono" style={{ color: v3.faint, marginBottom: 6 }}>RTÉ NSO</div>
              <div style={{ fontStyle: 'italic' }}>Cello · 1995–2012</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function V3Card({ tag, title, blurb, img, ratio, items, indexHref }) {
  return (
    <div className="v3-card" style={{ padding: 0, display: 'grid', gridTemplateColumns: '1.1fr 1fr', overflow: 'hidden' }}>
      <div style={{ aspectRatio: ratio || '4/5', background: `url(${img}) center/cover`, filter: 'sepia(0.1) contrast(0.97)' }} />
      <div style={{ padding: '40px 40px 32px', display: 'flex', flexDirection: 'column' }}>
        <div className="v3-mono" style={{ color: v3.accent, marginBottom: 14 }}>{tag}</div>
        <h3 className="v3-display" style={{ fontSize: 42, margin: 0, marginBottom: 14 }}>{title}</h3>
        <p style={{ color: v3.muted, margin: 0, fontSize: 17, textWrap: 'pretty' }}>{blurb}</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 24, flex: 1 }}>
          {items.map((it, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '54px 1fr', gap: 12, padding: '10px 0', borderTop: `1px solid ${v3.rule}`, alignItems: 'baseline' }}>
              <span className="v3-mono" style={{ color: v3.faint }}>{it.year}</span>
              <span>
                <a href={it.href} className="under">{it.title}</a>
                <div style={{ color: v3.muted, fontSize: 14, fontStyle: 'italic', marginTop: 2 }}>{it.venue}</div>
              </span>
            </li>
          ))}
        </ul>
        <a href={indexHref} className="v3-mono" style={{ marginTop: 18, color: v3.accent }}>View all →</a>
      </div>
    </div>
  );
}

function V3Works() {
  return (
    <section id="works" style={{ padding: '88px 56px', borderTop: `1px solid ${v3.rule}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 40 }}>
        <h2 className="v3-display" style={{ fontSize: 72, margin: 0 }}>Selected works.</h2>
        <div className="v3-mono" style={{ color: v3.muted }}>Five domains · 1995–present</div>
      </div>
      <div id="sonic-art" style={{ scrollMarginTop: 64 }}>
        <V3Card
          tag="01 · Sonic Art" title="Sonic Art"
          blurb="Practice-based works exploring voice, text and field — commissioned and broadcast across Ireland and the UK."
          img="https://clairefitch.github.io/images/BI-1.jpg"
          indexHref="https://clairefitch.github.io/sonicart.html"
          items={[
            { year: '2021', title: 'Becoming Imperceptible', venue: 'thirtythree-45 · Droichead Arts', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
            { year: '2020', title: 'Murdering The Time', venue: 'The Blue of The Night, RTÉ Lyric FM', href: 'https://soundcloud.com/clairefitch/murdering-the-time' },
            { year: '2020', title: 'Mrs Matchwell', venue: 'Scribbledehobble, Kaleidoscope, Dublin', href: 'https://www.youtube.com/watch?v=f_pzH9EKRLU' },
            { year: '2015', title: 'Written in his Voice', venue: 'Sonic Lab, QUB, Belfast', href: 'https://youtu.be/ztqgyphYG6s' },
          ]}
        />
      </div>
      <div id="electronic-literature" style={{ marginTop: 32, scrollMarginTop: 64 }}>
        <V3Card
          tag="02 · Electronic Literature" title="Electronic Literature"
          blurb="Transmedia works combining sound, text and image, presented at ELO Cork (2019), Florida (2020) and Bergen (2021)."
          img="https://clairefitch.github.io/images/WWNBS.jpg"
          indexHref="https://clairefitch.github.io/electronicliterature.html"
          items={[
            { year: '2014', title: 'Look (FFEBCD)', venue: 'HearSay Festival, Ireland', href: 'https://clairefitch.github.io/Look/Look.html' },
            { year: '2020', title: 'We Called It Dirt', venue: 'with Michael J. Maguire', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
            { year: '2021', title: 'Ear For The Surge', venue: 'ELO Covid E-Lit Exhibition, Bergen', href: 'https://www.eliterature.org/elo2021/covid/' },
            { year: '2020', title: 'SFBookDraft1', venue: 'with Kelly McErlean · ELO Florida', href: 'https://twitter.com/Draft1Sf' },
          ]}
        />
      </div>
      <div id="game-scores" style={{ marginTop: 32, scrollMarginTop: 64 }}>
        <V3Card
          tag="03 · Game Scores" title="Game Scores"
          blurb="Interactive scores treating gameplay as performance — page-turning, branching, mapping."
          img="https://clairefitch.github.io/images/ATBS-sq.jpg"
          indexHref="https://clairefitch.github.io/gamescores.html"
          items={[
            { year: '2019', title: 'And The Birds Sang', venue: 'Music Current, Dublin', href: 'https://clairefitch.github.io/ATBS/atbs.html' },
            { year: '2019', title: 'Questioning The Elements', venue: 'SPIKE Alternative Cello Festival', href: 'https://clairefitch.github.io/QTE/QuestioningTheElements.html' },
            { year: '2022', title: 'Tale Of A Great Sham(e)Text', venue: 'Sonorities Festival, Belfast', href: 'https://clairefitch.github.io/TGS/TGS.html' },
            { year: '2020', title: 'We Called It Dirt', venue: 'gamescore version', href: 'https://clairefitch.github.io/WCID/wecalleditdirt.html' },
          ]}
        />
      </div>
      <div id="publications" style={{ marginTop: 32, scrollMarginTop: 64 }}>
        <V3Card
          tag="04 · Publications" title="Publications"
          blurb="Across augmented reality, web and print: (RE)VERB #1 (2022), ELO COVID Exhibition (2021), and Routledge (2022)."
          img="https://clairefitch.github.io/images/PS.jpg"
          indexHref="https://clairefitch.github.io/publications.html"
          items={[
            { year: '2022', title: 'Sounding Emerging Media', venue: 'Routledge — monograph', href: 'https://www.routledge.com/Sounding-Emerging-Media/Fitch/p/book/9780367495480' },
            { year: '2022', title: 'Vanguard Voices', venue: '(RE)VERB #1 · with McErlean, Murray', href: 'https://gesso.fm/collections/vanguard-voices1' },
            { year: '2021', title: 'Folding, Unfolding, Refolding Sound', venue: 'Digital Art in Ireland · Anthem Press', href: 'https://anthempress.com/digital-art-in-ireland-pdf' },
            { year: '2020', title: 'Becoming Imperceptible', venue: 'Where Are We Now? #1, thirtythree-45', href: 'https://thirtythree-45.com/where-are-we-now-episode-1/' },
          ]}
        />
      </div>
      <div id="production" style={{ marginTop: 32, scrollMarginTop: 64 }}>
        <V3Card
          tag="05 · Production Music &amp; SFX" title="Production Music &amp; SFX"
          blurb="Twenty years of catalogue music and sound effects for television, film, games and podcasts."
          img="https://clairefitch.github.io/images/DepositPhotos.png"
          indexHref="https://clairefitch.github.io/productionmusic.html"
          items={[
            { year: '2023', title: 'Another Day', venue: 'Magnatune · Album', href: 'http://magnatune.com/artists/fitch/' },
            { year: '2009', title: 'Celocity', venue: 'Magnatune · Album', href: 'http://magnatune.com/artists/fitch/' },
            { year: '2005', title: 'Ambiencellist Part II', venue: 'Magnatune · Album', href: 'http://magnatune.com/artists/fitch/' },
            { year: '—',    title: 'Stock libraries', venue: 'FilmPac · Pond5 · Deposit Photos', href: 'https://filmpac.com/music/artists/A00213/ambiencellist/' },
          ]}
        />
      </div>
    </section>
  );
}

function V3Footer() {
  const social = [
    ['Mastodon', 'https://mastodon.ie/@ambiencellist'],
    ['YouTube', 'https://www.youtube.com/channel/UCvAuMBbFlkFRf77hqLWBL9Q'],
    ['SoundCloud', 'https://soundcloud.com/ambiencellist'],
    ['Bandcamp', 'https://clairefitch.bandcamp.com/'],
    ['Itch.io', 'https://ambiencellist.itch.io/'],
    ['WordPress', 'https://clairefitch.wordpress.com/'],
    ['ORCiD', 'https://orcid.org/0000-0002-6686-9345'],
    ['LinkedIn', 'https://www.linkedin.com/in/fitchclaire/'],
  ];
  return (
    <footer style={{ background: '#0e0a05', color: '#f6f0df', padding: '72px 56px 48px', marginTop: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <h3 className="v3-display" style={{ fontSize: 64, margin: 0, color: '#f6f0df' }}>Commission,<br/>collaborate,<br/>license.</h3>
          <p style={{ marginTop: 22, color: 'rgba(246,240,223,0.65)', fontSize: 18, maxWidth: 460 }}>
            For commissions, lectures and licensing enquiries: <a href="mailto:claire@fitchsounds.com" className="under" style={{ borderColor: 'rgba(246,240,223,0.4)' }}>claire@fitchsounds.com</a>.
          </p>
        </div>
        <div>
          <div className="v3-mono" style={{ color: 'rgba(246,240,223,0.55)', marginBottom: 14 }}>Social</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
            {social.slice(0, 4).map(([n, h]) => <li key={n}><a href={h} className="under" style={{ borderColor: 'rgba(246,240,223,0.3)' }}>{n}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="v3-mono" style={{ color: 'rgba(246,240,223,0.55)', marginBottom: 14 }}>Elsewhere</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
            {social.slice(4).map(([n, h]) => <li key={n}><a href={h} className="under" style={{ borderColor: 'rgba(246,240,223,0.3)' }}>{n}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="v3-mono" style={{ marginTop: 64, paddingTop: 24, borderTop: '1px solid rgba(246,240,223,0.18)', display: 'flex', justifyContent: 'space-between', color: 'rgba(246,240,223,0.5)' }}>
        <span>© Claire Fitch · All rights reserved</span>
        <span>Dublin &amp; Belfast · Set in Lora &amp; IBM Plex</span>
      </div>
    </footer>
  );
}

function V3Page() {
  return (
    <div className="v3" style={{ background: v3.paper, color: v3.ink, minHeight: '100%', position: 'relative' }}>
      <style>{v3Css}</style>
      <V3Nav />
      <V3Hero />
      <V3About />
      <V3Works />
      <V3Footer />
    </div>
  );
}

window.V3Page = V3Page;
