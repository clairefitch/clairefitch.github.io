// site.jsx — shared design system for clairefitch.com redesign
// Variation C ("Spotlight"): warm cream paper, serif headlines (Lora),
// IBM Plex sans/mono detail, dark navigation, terracotta accent.
// Used by every page: index.html and each section detail page.

const SITE = {
  paper:  '#ece5d3',
  card:   '#f6f0df',
  ink:    '#1a140b',
  dark:   '#0e0a05',
  rule:   'rgba(26,20,11,0.18)',
  muted:  'rgba(26,20,11,0.62)',
  faint:  'rgba(26,20,11,0.42)',
  accent: 'oklch(0.46 0.13 30)',
  darkPaper: '#f6f0df',
  darkMuted: 'rgba(246,240,223,0.65)',
  darkFaint: 'rgba(246,240,223,0.42)',
  darkRule:  'rgba(246,240,223,0.18)',
};

// Inject base stylesheet once.
(function injectSiteCss() {
  if (typeof document === 'undefined' || document.getElementById('site-css')) return;
  const s = document.createElement('style');
  s.id = 'site-css';
  s.textContent = `
    html, body { margin: 0; padding: 0; background: ${SITE.paper}; color: ${SITE.ink}; }
    body { font-family: 'Lora', 'Source Serif Pro', Georgia, serif; font-size: 18px; line-height: 1.6; -webkit-font-smoothing: antialiased; }
    *::selection { background: ${SITE.ink}; color: ${SITE.paper}; }
    .mono { font-family: 'IBM Plex Mono', ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
    .sans { font-family: 'IBM Plex Sans', system-ui, sans-serif; }
    .display { font-family: 'Lora', serif; font-weight: 500; letter-spacing: -0.025em; line-height: 0.96; }
    a { color: inherit; text-decoration: none; }
    a.under { border-bottom: 1px solid ${SITE.faint}; transition: border-color .15s; }
    a.under:hover { border-bottom-color: ${SITE.ink}; }
    a.under-dark { border-bottom: 1px solid ${SITE.darkFaint}; transition: border-color .15s; }
    a.under-dark:hover { border-bottom-color: ${SITE.darkPaper}; }
    .tape { display: inline-block; background: ${SITE.ink}; color: ${SITE.paper}; padding: 4px 10px 3px; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; }
    .tape-light { background: ${SITE.paper}; color: ${SITE.ink}; }
    .card { background: ${SITE.card}; border: 1px solid ${SITE.rule}; }
    .embed { aspect-ratio: 16/9; width: 100%; background: ${SITE.dark}; border: 0; display: block; }
    .ph-img { background-size: cover; background-position: center; filter: sepia(0.10) contrast(0.97); }
    @media (max-width: 1080px) {
      .nav-links { display: none !important; }
      .nav-burger { display: flex !important; }
    }
    @media (max-width: 880px) {
      .hero-grid, .about-grid, .works-card, .footer-grid, .contact-grid, .cta-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      .h-padded { padding-left: 20px !important; padding-right: 20px !important; }
      .hero-display { font-size: 56px !important; line-height: 1 !important; }
      .display-72 { font-size: 40px !important; }
      .display-56 { font-size: 32px !important; }
      /* Section horizontal padding shrinks on mobile (overrides inline 56px) */
      section, header, footer { padding-left: 20px !important; padding-right: 20px !important; }
      /* Default vertical padding too eager on mobile */
      section { padding-top: 56px !important; padding-bottom: 56px !important; }
      /* Stat rows (PhD/Book/Teaching/RTÉ NSO) stack to 2x2 on mobile */
      .about-stats { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
      /* Restore article (work entries) padding */
      article { padding-left: 20px !important; padding-right: 20px !important; padding-top: 48px !important; padding-bottom: 48px !important; }
      /* WorkEntry text wrapper has inline left/right padding for spacing in 2-col mode; kill it in 1-col */
      .we-text { padding: 0 !important; }
      /* NextSection 5 siblings is too narrow; stack on mobile */
      .next-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
      .next-tile { padding: 18px 16px !important; }
      .next-tile .display { font-size: 18px !important; }
      /* Teaching page grids */
      .credentials-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
      .teaching-grid { grid-template-columns: 1fr !important; }
      .enq-grid { grid-template-columns: 1fr !important; }
      .field-row { grid-template-columns: 1fr !important; }
      /* Conferences table collapses to list rows */
      .confs-head { display: none !important; }
      .confs-row { grid-template-columns: 1fr !important; gap: 2px !important; padding: 14px 0 !important; }
      .confs-row > span:nth-child(2) { font-size: 18px !important; }
      /* Landing-hero now-playing stack */
      .now-playing { text-align: left !important; }
      .now-playing .playbar { justify-content: flex-start !important; }
      .playbar-track { flex: 1 1 auto !important; min-width: 0 !important; }
      /* Hero section height auto on mobile */
      .home-hero { height: auto !important; min-height: 620px !important; }
      .home-hero-content { position: static !important; padding: 120px 20px 56px !important; }
      .home-hero-bg { position: absolute !important; }
      /* Section hero hero-grid image min-height smaller */
      .section-hero-img { min-height: 240px !important; }
      .section-hero-text { padding: 28px 20px 56px !important; }
      /* Nav padding shrink */
      .site-nav { padding: 16px 20px !important; }
      /* Footer correspondence font */
      .footer-grid .display-72 { font-size: 36px !important; }
    }
    @media (max-width: 480px) {
      .hero-display { font-size: 44px !important; }
      .display-72 { font-size: 30px !important; }
      .display-56 { font-size: 26px !important; }
      .next-grid { grid-template-columns: 1fr !important; }
      .credentials-grid { grid-template-columns: 1fr !important; }
      .nav-burger-label { display: none !important; }
    }
    /* Hamburger (hidden on desktop) */
    .nav-burger { display: none; align-items: center; gap: 10px; cursor: pointer; background: transparent; border: 1px solid currentColor; padding: 7px 12px 6px; border-radius: 999px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; }
    .nav-burger:hover { background: rgba(0,0,0,0.04); }
    .nav-drawer { position: fixed; inset: 0; z-index: 100; background: ${SITE.dark}; color: ${SITE.darkPaper}; display: flex; flex-direction: column; padding: 24px 24px 48px; overflow-y: auto; }
    .nav-drawer a { color: ${SITE.darkPaper}; display: block; padding: 18px 0; border-bottom: 1px solid ${SITE.darkRule}; font-family: 'Lora', serif; font-size: 28px; letter-spacing: -0.01em; }
    .nav-drawer a .mono-sub { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: ${SITE.darkFaint}; margin-top: 4px; }
    .nav-drawer-top { display: flex; justify-content: space-between; align-items: center; padding-bottom: 24px; border-bottom: 1px solid ${SITE.darkRule}; margin-bottom: 8px; }
    .nav-drawer-close { background: transparent; border: 1px solid ${SITE.darkFaint}; color: ${SITE.darkPaper}; padding: 7px 14px; border-radius: 999px; cursor: pointer; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; }
  `;
  document.head.appendChild(s);
})();

// --- Bio constants (from Claire's own biography) ---
const BIO_SHORT = "Composer, cellist, author and lecturer — working between sonic art, electronic literature and game design.";

const BIO_LONG = [
  "Dr Claire Fitch FHEA is a composer, cellist, author and lecturer. She was a member of the RTÉ National Symphony Orchestra from 1995 to 2012, and is a Lecturer in Music in the Department of Creative Arts, Media and Music at Dundalk Institute of Technology.",
  "Her award-winning audio production company has worked with clients including Intel, AMD, TG4, the European Commission, Adobe, the Blender Institute, Riverdeep and Forfás — providing music, sound effects and dialogue for games, advertising, theatre, training productions, film, radio, podcast and television.",
  "Claire’s sonic art output is inspired by electronic literature and game design, with performances on RTÉ Lyric FM and RTÉ Radio One; at conferences such as the Irish Sound, Science and Technology Association, the Electronic Literature Organisation and Kylie: The Symposium; and at festivals such as Galway Arts Festival, Music Current, HearSay, Hilltown, First Fortnight and SPIKE. Routledge published Sounding Emerging Media in 2022, with further output including the AR zine (RE)Verb presenting Vanguard Voices (with McErlean and Murray, 2022), and “Can’t Get You Out of My Web: Remixing Kylie as Digital Creative Practice” (2024) in Kylie Minogue: Critical Insights into Music and Media Celebrity (O’Neill & Pramaggiore, eds., Bloomsbury, 2024)."
];

// --- Site navigation map ---
const NAV = [
  { label: 'Sonic Art',             short: 'Sonic Art',    href: 'sonic-art.html',             id: 'sonic-art' },
  { label: 'Electronic Literature', short: 'E-Lit',        href: 'electronic-literature.html', id: 'electronic-literature' },
  { label: 'Game Scores',           short: 'Game Scores',  href: 'game-scores.html',           id: 'game-scores' },
  { label: 'Publications',          short: 'Publications', href: 'publications.html',          id: 'publications' },
  { label: 'Production Music',      short: 'Production',   href: 'production-music.html',      id: 'production-music' },
  { label: 'Teaching & Research',   short: 'Teaching',     href: 'teaching-research.html',     id: 'teaching-research' },
];

const SOCIAL = [
  ['Bluesky',    'https://bsky.app/profile/ambiencellist.bsky.social'],
  ['YouTube',    'https://www.youtube.com/channel/UCvAuMBbFlkFRf77hqLWBL9Q'],
  ['SoundCloud', 'https://soundcloud.com/ambiencellist'],
  ['Bandcamp',   'https://clairefitch.bandcamp.com/'],
  ['Itch.io',    'https://ambiencellist.itch.io/'],
  ['WordPress',  'https://clairefitch.wordpress.com/'],
  ['ORCiD',      'https://orcid.org/0000-0002-6686-9345'],
  ['LinkedIn',   'https://www.linkedin.com/in/fitchclaire/'],
];

// ---------------- Nav (light, used over light pages or below hero) ----------------
function SiteNav({ current, mode }) {
  // mode: 'light' (default, dark text on cream) or 'overlay' (light text, lays over a dark hero)
  const isOverlay = mode === 'overlay';
  const txt = isOverlay ? SITE.darkPaper : SITE.ink;
  const muted = isOverlay ? SITE.darkMuted : SITE.muted;
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <>
      <nav className="site-nav" style={{
        position: isOverlay ? 'absolute' : 'sticky',
        top: 0, left: 0, right: 0, zIndex: 10,
        padding: '24px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
        background: isOverlay ? 'transparent' : SITE.paper,
        borderBottom: isOverlay ? 'none' : `1px solid ${SITE.rule}`,
        color: txt,
      }}>
        <a href="index.html" className="mono" style={{ color: txt, letterSpacing: '0.22em' }}>Claire&nbsp;Fitch</a>
        <div className="nav-links mono" style={{ display: 'flex', alignItems: 'center', gap: 22, color: muted }}>
          {NAV.map(n => (
            <a key={n.id} href={n.href} style={{ color: current === n.id ? txt : muted, transition: 'color .15s' }}>{n.short}</a>
          ))}
          <a href="contact.html" className="nav-contact" style={{
            color: isOverlay ? SITE.ink : SITE.darkPaper,
            background: isOverlay ? SITE.darkPaper : SITE.ink,
            padding: '8px 14px 7px',
            borderRadius: 999,
            letterSpacing: '0.18em',
          }}>Contact →</a>
        </div>
        <button className="nav-burger" style={{ color: txt }} onClick={() => setOpen(true)} aria-label="Open menu">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="0" y1="1" x2="14" y2="1" />
            <line x1="0" y1="5" x2="14" y2="5" />
            <line x1="0" y1="9" x2="14" y2="9" />
          </svg>
          <span className="nav-burger-label">Menu</span>
        </button>
      </nav>
      {open && (
        <div className="nav-drawer" onClick={e => { if (e.target.tagName === 'A') setOpen(false); }}>
          <div className="nav-drawer-top">
            <a href="index.html" className="mono" style={{ color: SITE.darkPaper, letterSpacing: '0.22em', borderBottom: 'none', padding: 0, fontSize: 11, fontFamily: "'IBM Plex Mono', monospace" }}>Claire&nbsp;Fitch</a>
            <button className="nav-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">Close ✕</button>
          </div>
          <a href="index.html">Home<span className="mono-sub">Landing</span></a>
          {NAV.map(n => (
            <a key={n.id} href={n.href} style={{ color: current === n.id ? SITE.darkPaper : SITE.darkMuted }}>
              {n.label}<span className="mono-sub">{current === n.id ? 'Current' : '→'}</span>
            </a>
          ))}
          <a href="contact.html">Contact<span className="mono-sub">Get in touch</span></a>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: `1px solid ${SITE.darkRule}`, color: SITE.darkFaint }} className="mono">Elsewhere</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, marginTop: 12 }}>
            {SOCIAL.map(([n, h]) => (
              <a key={n} href={h} style={{ padding: '10px 0', fontSize: 16, borderBottom: 'none', color: SITE.darkMuted }}>{n} →</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

// ---------------- Section detail page hero (image left + title block right) ----------------
function SectionHero({ kicker, title, blurb, img, current }) {
  return (
    <header style={{ position: 'relative', background: SITE.dark, color: SITE.darkPaper, minHeight: 560 }}>
      <SiteNav current={current} mode="overlay" />
      <div className="hero-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 560,
      }}>
        <div className="section-hero-img" style={{
          background: img ? `url(${img}) center/cover` : SITE.dark,
          filter: 'brightness(0.85) contrast(1.02) saturate(0.92) sepia(0.16)',
          minHeight: 420,
        }} />
        <div className="h-padded section-hero-text" style={{ padding: '120px 64px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="tape tape-light" style={{ marginBottom: 28, alignSelf: 'flex-start' }}>{kicker}</div>
          <h1 className="display hero-display" style={{ fontSize: 96, margin: 0, color: SITE.darkPaper }}>{title}</h1>
          <p style={{ marginTop: 28, fontSize: 20, lineHeight: 1.5, color: 'rgba(246,240,223,0.82)', maxWidth: 540, textWrap: 'pretty' }}>{blurb}</p>
          <div style={{ display: 'flex', gap: 18, marginTop: 32 }}>
            <a href="index.html" className="mono under-dark" style={{ color: SITE.darkPaper }}>← Back to home</a>
          </div>
        </div>
      </div>
    </header>
  );
}

// ---------------- A single work entry on a detail page ----------------
// Use for sonic art / e-lit / game scores: YouTube embed left, prose right.
function WorkEntry({ index, year, title, kicker, embedId, body, credits, links, image, reverse }) {
  const media = (
    <div style={{ width: '100%' }}>
      {embedId
        ? <iframe className="embed" src={`https://www.youtube.com/embed/${embedId}`} title={title} allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen />
        : image
          ? <div className="ph-img" style={{ aspectRatio: '16/9', backgroundImage: `url(${image})` }} />
          : <div style={{ aspectRatio: '16/9', background: SITE.ink, color: SITE.muted, display: 'grid', placeItems: 'center', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase' }}>[ Media ]</div>}
    </div>
  );
  const text = (
    <div className="we-text" style={{ padding: reverse ? '0 0 0 16px' : '0 16px 0 0' }}>
      <div className="mono" style={{ color: SITE.accent, marginBottom: 14 }}>
        {String(index).padStart(2, '0')} · {year}{kicker ? ` · ${kicker}` : ''}
      </div>
      <h3 className="display display-56" style={{ fontSize: 52, margin: 0, marginBottom: 20 }}>{title}</h3>
      {Array.isArray(body)
        ? body.map((p, i) => <p key={i} style={{ margin: i === 0 ? 0 : '14px 0 0', fontSize: 18, color: i === 0 ? SITE.ink : SITE.muted, textWrap: 'pretty' }}>{p}</p>)
        : <p style={{ margin: 0, fontSize: 18, color: SITE.ink, textWrap: 'pretty' }}>{body}</p>}
      {credits && credits.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', borderTop: `1px solid ${SITE.rule}` }}>
          {credits.map((c, i) => (
            <li key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${SITE.rule}`, display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16 }}>
              <span className="mono" style={{ color: SITE.faint }}>{c[0]}</span>
              <span style={{ color: SITE.ink, fontStyle: 'italic' }}>{c[1]}</span>
            </li>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          {links.map((l, i) => (
            <a key={i} href={l[1]} className="mono under" style={{ color: SITE.accent }}>{l[0]} →</a>
          ))}
        </div>
      )}
    </div>
  );
  return (
    <article style={{ padding: '72px 56px', borderTop: `1px solid ${SITE.rule}` }}>
      <div className="works-card" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'start' }}>
        {reverse ? <>{text}{media}</> : <>{media}{text}</>}
      </div>
    </article>
  );
}

// ---------------- A small "more in this section" block at the bottom ----------------
function NextSection({ exclude }) {
  const others = NAV.filter(n => n.id !== exclude);
  return (
    <section style={{ padding: '88px 56px', borderTop: `1px solid ${SITE.rule}`, background: SITE.card }}>
      <div className="mono" style={{ color: SITE.faint, marginBottom: 24 }}>Continue elsewhere</div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${others.length}, 1fr)`, gap: 24 }} className="next-grid">
        {others.map(o => (
          <a key={o.id} href={o.href} className="next-tile" style={{
            display: 'block', padding: '28px 24px', border: `1px solid ${SITE.rule}`, background: SITE.paper,
            transition: 'background .15s, transform .15s', position: 'relative', overflow: 'hidden',
          }}>
            <div className="mono" style={{ color: SITE.faint, marginBottom: 10 }}>{o.label}</div>
            <div className="display" style={{ fontSize: 30 }}>{o.label.split(' ').slice(0, 2).join(' ')} →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ---------------- Site footer (dark) ----------------
function SiteFooter() {
  return (
    <footer id="about" style={{ background: SITE.dark, color: SITE.darkPaper, padding: '88px 56px 56px' }}>
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div className="mono" style={{ color: SITE.darkFaint, marginBottom: 14 }}>About</div>
          <h2 className="display display-72" style={{ fontSize: 56, margin: 0, color: SITE.darkPaper, maxWidth: 640 }}>
            A practice between cello and code.
          </h2>
          <p style={{ marginTop: 26, color: SITE.darkMuted, fontSize: 18, maxWidth: 640, textWrap: 'pretty' }}>{BIO_LONG[0]}</p>
          <p style={{ color: SITE.darkMuted, fontSize: 16, maxWidth: 640, textWrap: 'pretty' }}>{BIO_LONG[1]}</p>
          <p style={{ color: SITE.darkMuted, fontSize: 16, maxWidth: 640, textWrap: 'pretty' }}>{BIO_LONG[2]}</p>
          <p style={{ marginTop: 30, fontSize: 18 }}>
            <span className="mono" style={{ color: SITE.darkFaint, marginRight: 12 }}>Correspondence</span>
            <a href="contact.html" className="under-dark">Get in touch →</a>
          </p>
        </div>
        <div>
          <div className="mono" style={{ color: SITE.darkFaint, marginBottom: 14 }}>Listen &amp; Watch</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.1 }}>
            {SOCIAL.slice(0, 4).map(([n, h]) => <li key={n}><a href={h} className="under-dark">{n}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="mono" style={{ color: SITE.darkFaint, marginBottom: 14 }}>Elsewhere</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2.1 }}>
            {SOCIAL.slice(4).map(([n, h]) => <li key={n}><a href={h} className="under-dark">{n}</a></li>)}
          </ul>
        </div>
      </div>
      <div className="mono" style={{ marginTop: 64, paddingTop: 24, borderTop: `1px solid ${SITE.darkRule}`, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, color: SITE.darkFaint }}>
        <span>© Claire Fitch · All rights reserved</span>
        <span>Dublin &amp; Belfast · Set in Lora &amp; IBM Plex</span>
      </div>
    </footer>
  );
}

// ---------------- Shared page wrapper for detail pages ----------------
function DetailPage({ hero, entries, current }) {
  return (
    <div data-screen-label={hero.title}>
      <SectionHero {...hero} current={current} />
      {entries.map((e, i) => (
        <WorkEntry key={i} index={i + 1} reverse={i % 2 === 1} {...e} />
      ))}
      <NextSection exclude={current} />
      <SiteFooter />
    </div>
  );
}

// Hover effect on next-tiles + small util
(function tileHover() {
  if (typeof document === 'undefined') return;
  document.addEventListener('mouseover', e => {
    if (e.target.closest && e.target.closest('.next-tile')) {
      e.target.closest('.next-tile').style.background = SITE.darkPaper;
    }
  }, true);
  document.addEventListener('mouseout', e => {
    if (e.target.closest && e.target.closest('.next-tile')) {
      e.target.closest('.next-tile').style.background = SITE.paper;
    }
  }, true);
})();

Object.assign(window, {
  SITE, BIO_SHORT, BIO_LONG, NAV, SOCIAL,
  SiteNav, SectionHero, WorkEntry, NextSection, SiteFooter, DetailPage,
});
